import "./postform.css";
import React from "react";
import { useForm } from "react-hook-form";
import { Button, Input } from "../index";
import RTE from "../RTE/RTE";
import appwriteService from "../../Appwrite/config";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { getUserData } from "../../Pages/Account/userData";

export default function PostForm({ post }) {
  const { register, handleSubmit, control, getValues } = useForm({
    defaultValues: {
      title: post?.title || "",
      content: post?.content || "",
      status: post?.status || "active",
    },
  });

  const navigate = useNavigate();
  const storeUserData = useSelector((state) => state.auth.userData);
  const userData = getUserData();

  const submit = async (data) => {
    if (post) {
      const file = data.image[0] ? await appwriteService.uploadFile(data.image[0]) : null;

      if (file) {
        appwriteService.deleteFile(post.featuredImage);
      }

      const dbPost = await appwriteService.updatePost(post.$id, {
        ...data,
        featuredImage: file ? file.$id : undefined,
      });

      if (dbPost) {
        navigate(`/post/${dbPost.$id}`);
      }
    } else {
      const file = await appwriteService.uploadFile(data.image[0]);

      if (file) {
        const fileId = file.$id;
        data.featuredImage = fileId;
        let dbPost;
        if (userData) {
          dbPost = await appwriteService.createPost({ ...data, userId: userData.$id });
        } else if (storeUserData) {
          dbPost = await appwriteService.createPost({ ...data, userId: storeUserData.$id });
        }
        console.log(dbPost);
        if (dbPost) {
          navigate(`/post/${dbPost.$id}`);
        }
      }
    }
  };

  return (
    <div className="container max-w-[1400px] w-[90%] m-auto main-class flex flex-wrap ">
      <form onSubmit={handleSubmit(submit)} className="w-full">
        <div className="font-Poppins text-center text-[30px] my-[20px] font-[600]">Create Your Blog</div>
        <Input className="max-w-[1000px] w-[90%] mx-auto my-[20px]" placeholder="Title" {...register("title", { required: true })} />

        <div className="font-Poppins text-center text-[16px] mt-[30px] font-[500] ">Upload Featured Image</div>
        <Input
          className="max-w-[1000px] w-[90%] mx-auto my-[15px]"
          type="file"
          accept="image/png, image/jpg, image/jpeg, image/gif"
          {...register("image", { required: !post })}
        />
        {post && (
          <div className="max-w-[1350px] w-[96.5%] mx-auto my-[20px]">
            <img src={appwriteService.getFilePreview(post.featuredImage)} alt={post.title} className="rounded-[15px]" />
          </div>
        )}

        <div className="rte-box">
          <div className=" font-Montserrat inline-block my-[10px] w-full text-center text-[16px] uppercase font-[600] ">Write your blog here</div>
          <RTE label="Write Your Blog" name="content" control={control} defaultValue={getValues("content")} />
        </div>

        <div className="flex flex-col my-[50px]">
          <Button type="submit" className="w-[110px] self-center ">
            {post ? "Update" : "Publish"}
          </Button>
        </div>
      </form>
    </div>
  );
}
