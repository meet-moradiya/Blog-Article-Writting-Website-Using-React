import "./allposts.css";
import React, { useState, useEffect } from "react";
import Card from "../../Components/Card/Card";
import appwriteService from "../../Appwrite/config";

function AllPosts() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    appwriteService.getPosts([]).then((posts) => {
      if (posts) {
        setPosts(posts.documents);
      }
      setLoading(false);
    });
  }, []);

  return (
    <div className="bg-[#f6fff8]">
      {loading ? (
        <div className="hypnotic mx-auto my-[50px]"></div>
      ) : (
        <div className="test flex justify-around flex-wrap mx-auto max-w-[1600px] w-[98%] p-[10px] ">
          {posts.map((post) => (
            <div key={post.$id}>
              <Card {...post} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default AllPosts;
