// import "./account.css";
// import React, { useState, useEffect } from "react";
// import Card from "../../Components/Card/Card";
// import appwriteService from "../../Appwrite/config";
// import LogoutBtn from "./LogoutBtn";
// import { getUserData } from "./userData";
// import { useSelector } from "react-redux";
// import Button from "../../Components/Button";
// import { useNavigate } from "react-router-dom";

// function Account() {
//   const storeUserData = useSelector((state) => state.auth.userData);
//   const userData = getUserData();
//   const navigate = useNavigate();
//   const [posts, setPosts] = useState([]);
//   const [userName, setUserName] = useState("");
//   const [userEmail, setUserEmail] = useState("");
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     setLoading(true);
//     if (userData) {
//       appwriteService.userPosts(userData.$id).then((posts) => {
//         if (posts) {
//           setUserName(userData.name);
//           setUserEmail(userData.email);
//           setPosts(posts.documents);
//         }
//         setLoading(false);
//       });
//     } else if (storeUserData) {
//       appwriteService.userPosts(storeUserData.$id).then((posts) => {
//         if (posts) {
//           setUserName(storeUserData.name);
//           setUserEmail(storeUserData.email);
//           setPosts(posts.documents);
//         }
//         setLoading(false);
//       });
//     }
//   }, [userData, storeUserData]);

//   return (
//     <div className="temp max-w-[1350px] w-[95%] flex flex-wrap mx-auto my-[30px]">
//       {loading ? (
//         <div className="hypnotic mx-auto"></div>
//       ) : (
//         <>
//           <div className="profileBox border-[4px] border-solid border-[#212a3e] rounded-[15px] w-full p-[20px] my-[20px] ">
//             <h1 className="font-Montserrat font-[800] italic text-[40px] text-[#212a3e] inline-block border-b-2 border-b-[#394867] border-solid mb-[20px]">
//               Profile
//             </h1>
//             <table id="aTable" className="w-[25%] font-Montserrat text-[22px] border-spacing-[10px] border-separate text-[#212a3e] font-[500] ">
//               <tr>
//                 <td>Username:</td>
//                 <td>{userName}</td>
//               </tr>
//               <tr>
//                 <td>Email:</td>
//                 <td>{userEmail}</td>
//               </tr>
//             </table>
//             <LogoutBtn className="lButton mx-auto" />
//           </div>

//           <div className="yBlog border-[4px] border-solid border-[#212a3e] rounded-[15px] w-full overflow-hidden">
//             <h1 className="font-Montserrat font-[800] italic text-[40px] text-[#212a3e] inline-block border-b-2 border-b-[#394867] border-solid m-[20px_20px_0_20px]">
//               Your Blogs
//             </h1>
//             <div className="bg-[#fcfffd]">
//               {posts.length === 0 ? (
//                 <>
//                   <div className="text-[18px] font-Poppins font-[500] text-[#212a3e] p-[20px]">
//                     You haven't created any posts yet. Why not start sharing your thoughts and experiences with the world? <br />
//                     Clink on the <span className="font-[600] text-[21px]">"Create Post"</span> button for share your stories.
//                   </div>
//                   <div className="cpBtn p-[20px]">
//                     <Button onClick={() => navigate("/add-post")}>Create Post</Button>
//                   </div>
//                 </>
//               ) : (
//                 <div className="flex justify-around flex-wrap mx-auto my-[20px]">
//                   {posts.map((post) => (
//                     <div key={post.$id}>
//                       <Card {...post} />
//                     </div>
//                   ))}
//                 </div>
//               )}
//             </div>
//           </div>
//         </>
//       )}
//     </div>
//   );
// }

// export default Account;

import "./account.css";
import React, { useState, useEffect } from "react";
import authService from "../../Appwrite/Auth";
import LogoutBtn from "./LogoutBtn";
import { getUserData } from "./userData";
import { useSelector } from "react-redux";
import { Button } from "../../Components";
import { Link } from "react-router-dom";

function Account() {
  const storeUserData = useSelector((state) => state.auth.userData);
  const userData = getUserData();
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (userData) {
      setUserName(userData.name);
      setUserEmail(userData.email);
      setLoading(false);
    } else if (storeUserData) {
      setUserName(storeUserData.name);
      setUserEmail(storeUserData.email);
      setLoading(false);
    }
  }, [userData, storeUserData]);

  const [isInputEnabled, setIsInputEnabled] = useState(false);

  const handleUpdateClick = () => {
    setIsInputEnabled((prevState) => !prevState);
    if (!isInputEnabled) {
      document.getElementById("nameInput").focus();
    }
  };

  const handleChange = (event) => {
    const newName = event.target.value;
    setUserName(newName);
    authService.editName(newName);
  };

  return (
    <div className=" temp max-w-[1350px] w-[95%] flex flex-wrap mx-auto my-[30px]">
      {loading ? (
        <div className="hypnotic mx-auto"></div>
      ) : (
        <>
          <div className="profilBox w-full">
            <h1 className=" font-Montserrat font-[800] text-center text-[40px] text-[#212a3e] border-b-2 border-b-[#394867] border-solid mb-[20px]">
              Profile
            </h1>

            <div className="nameBox flex justify-around px-[20px] border-[1.5px] border-solid border-[#394867] rounded-[10px]">
              <div className="uName text-[22px] flex-[1_1_300px]">
                <span>Name</span>
              </div>
              <div className="uIn flex-[1_1_600px]">
                <input
                  className="block w-full rounded text-[18px] mx-0 my-[12px] p-2.5 border-[1.5px] border-solid border-[#ccc] enabled:border-[2px] enabled:border-solid enabled:border-[#42bd99] enabled:outline-none"
                  type="text"
                  id="nameInput"
                  value={userName}
                  disabled={!isInputEnabled}
                  onChange={handleChange}
                />
              </div>
              <div className="uBtn flex-[1_1_300px] flex justify-end">
                <Button onClick={handleUpdateClick}>{isInputEnabled ? "Save" : "Update"}</Button>
              </div>
            </div>

            <div className="emailBox flex justify-around px-[20px] border-[1.5px] border-solid border-[#394867] rounded-[10px]">
              <div className="uName text-[22px] flex-[1_1_300px]">
                <span>Email</span>
              </div>
              <div className="uIn flex-[1_1_600px]">
                <p className="block w-full rounded text-[18px] mx-0 my-[12px] p-2.5 border-[1px] border-solid border-[#42bd99]">{userEmail}</p>
              </div>
              <div className="uBtn flex-[1_1_300px] flex justify-end">
                <LogoutBtn />
              </div>
            </div>
            <div className="flex justify-center">
              <Link to={"/user-posts"}>
                <Button>Your Posts</Button>
              </Link>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Account;
