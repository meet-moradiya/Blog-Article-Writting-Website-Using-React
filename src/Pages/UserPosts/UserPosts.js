import React, { useState, useEffect } from "react";
import Card from "../../Components/Card/Card";
import appwriteService from "../../Appwrite/config";
import { getUserData } from "../Account/userData";
import { useSelector } from "react-redux";
import "./userposts.css";

function UserPosts() {
  const storeUserData = useSelector((state) => state.auth.userData);
  const userData = getUserData();
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    if (userData) {
      appwriteService.userPosts(userData.$id).then((posts) => {
        if (posts) {
          setPosts(posts.documents);
        }
        setLoading(false);
      });
    } else {
      appwriteService.userPosts(storeUserData.$id).then((posts) => {
        if (posts) {
          setPosts(posts.documents);
        }
        setLoading(false);
      });
    }
  }, [userData, storeUserData.$id]);
  return (
    <>
      {loading ? (
        <div className="hypnotic mx-auto"></div>
      ) : (
        <div className="flex justify-center">
          <div className="w-[95%] max-w-[1600px] overflow-hidden">
            <h1 className=" font-Montserrat font-[800] text-[40px]  border-b-2 border-solid border-[#212a3e] text-center text-[#212a3e] m-[20px_20px_0_20px]">
              Your Blogs
            </h1>
            <div className=" bg-[#fcfffd]">
              <div className="flex justify-around flex-wrap mx-auto my-[20px]">
                {posts.map((post) => (
                  <div key={post.$id}>
                    <Card {...post} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default UserPosts;
