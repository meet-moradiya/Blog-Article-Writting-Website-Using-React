import "./post.css";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import appwriteService from "../../Appwrite/config";
import Button from "../../Components/Button";
import parse from "html-react-parser";
import { useSelector } from "react-redux";

export default function Post() {
  const [post, setPost] = useState(null);
  const { slug } = useParams();
  const navigate = useNavigate();

  const userData = useSelector((state) => state.auth.userData);

  const isAuthor = post && userData ? post.userId === userData.$id : false;

  useEffect(() => {
    if (slug) {
      appwriteService.getPost(slug).then((post) => {
        if (post) setPost(post);
        else navigate("/");
      });
    } else navigate("/");
  }, [slug, navigate]);

  const deletePost = () => {
    appwriteService.deletePost(post.$id).then((status) => {
      if (status) {
        appwriteService.deleteFile(post.featuredImage);
        navigate("/");
      }
    });
  };

  return post ? (
    <div className="max-w-[1400px] w-[90%] flex flex-col flex-wrap mx-auto my-[30px] ">
      <h1 className="title text-[40px] text-[#22333b] font-bold text-center my-[15px] underline ">{post.title}</h1>

      <div className="postBox w-full flex justify-center relative m-[5px] border-[2px] border-solid border-[#283618] rounded-[17px]">
        <img src={appwriteService.getFilePreview(post.featuredImage)} alt={post.title} className="rounded-[15px]" />
        {isAuthor && (
          <div className="postBtn absolute right-[15px]">
            <Link to={`/edit-post/${post.$id}`}>
              <Button className="editbtn mx-[10px]">Edit</Button>
            </Link>
            <Button className="deletebtn mx-[10px]" onClick={deletePost}>
              Delete
            </Button>
          </div>
        )}
      </div>
      <div className=" border-[2px] text-[#22333b] border-solid border-[#343a40] rounded-[15px] p-[8px] m-[5px]">
        <div className="w-full my-[10px]">
          <h1 className="title text-[30px] font-bold">{post.title}</h1>
        </div>
        <hr />
        <div className="text-[18px] my-[5px]">{parse(post.content)}</div>
      </div>
    </div>
  ) : null;
}
