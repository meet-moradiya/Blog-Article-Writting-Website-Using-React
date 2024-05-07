import "./home.css";
import React, { useState, useEffect } from "react";
import appwriteService from "../../Appwrite/config";
import Card from "../Card/Card";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  bloggingImage,
  heroImage,
  ecofriendlyImage,
  educationalImage,
  socialMediaImage,
  artImage2,
  artImage3,
  financeImage1,
  financeImage2,
  foodImage1,
  foodImage2,
  lifeImage1,
  lifeImage2,
  perDevImage1,
  perDevImage2,
  techImage1,
  techImage2,
  travelImage2,
  travelImage3,
} from "../../Assets/images";
import { Button } from "../index";
import { useNavigate } from "react-router-dom";

function Home() {
  const currentStatus = useSelector((state) => state.auth.status);
  const navigate = useNavigate();
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    appwriteService.getLatestPosts().then((posts) => {
      if (posts) {
        setPosts(posts.documents);
      }
      setLoading(false);
    });
  }, []);

  return (
    <>
      {!currentStatus && (
        <div>
          <section className="showcase mx-0 py-[50px] bg-[#f1f6f9]">
            <div className=" max-w-[1300px] w-[90%] mx-auto flex flex-wrap">
              <div className="flex-[1_1_400px] my-auto p-[20px]">
                <h2 className="text-[15px]">iBlog</h2>
                <h1 className="text-[#212a3e] text-[30px] font-bold leading-[45px]">
                  Dive into a World of Knowledge: Explore Our Blogosphere and Expand Your Horizons!
                </h1>
                <p className="text-[#394867] text-[17px] font-medium leading-[1.5em] mt-[1em]">
                  Ready to embark on a journey of discovery? Our blogosphere is a treasure trove of knowledge, waiting for you to explore. From
                  practical tips to fascinating stories, there's something for everyone here. By signing up, you'll gain access to a wealth of
                  insights, inspiration, and entertainment delivered straight to your inbox. Don't miss out on the chance to expand your horizons and
                  learn something new every day. Join our community of curious minds and start your adventure today!
                </p>
                <Button onClick={() => navigate("/signup")} className="px-[25px]">
                  Sign In
                </Button>
              </div>
              <div className="flex-[1_1_350px]">
                <img className="block h-full max-w-full object-cover object-center m-auto" src={heroImage} alt="heroImage" />
              </div>
            </div>
          </section>
          <div className=" text-center text-[40px] font-Montserrat font-[800] text-[#212a3e] ">Read All Your Favorite Blogs in One Place</div>
          <div className="max-w-[1400px] w-[90%] flex justify-between flex-wrap mx-auto my-0">
            <div className="w-[440px] overflow-hidden mx-0 my-[30px] rounded-[10px] border-2 border-solid border-[#394867]">
              <div className="h-[370px] overflow-hidden">
                <img src={ecofriendlyImage} alt="image1" className="h-full w-full object-cover" />
              </div>
              <div className="p-[10px] text-center">
                <h2 className="text-[20px] font-bold text-[#212a3e] font-Poppins my-[10px] ">
                  Green Horizons: Navigating The Path To Sustainable Living
                </h2>
                <hr />
                <p className="text-[16px] text-[#394867] my-[5px] font-Poppins ">
                  In a world where environmental concerns are becoming increasingly urgent, the concept of sustainability and eco-friendly living has
                  never been more pertinent. From reducing carbon footprints to preserving natural resources, individuals worldwide are embracing
                  lifestyles that prioritize harmony with the planet. But what exactly does it mean to live sustainably, and how can you incorporate
                  eco-friendly practices into your daily life? Sustainability isn't just a trend; it's a mindset, a commitment to making choices that
                  benefit both the environment and future generations. At its core, it's about finding balance—using resources efficiently without
                  depleting them, and minimizing waste to preserve our planet's delicate ecosystems. One of the fundamental pillars of sustainable
                  living is mindful consumption. In a consumer-driven society, it's easy to fall into the trap of excessive buying, leading to
                  unnecessary waste and environmental degradation. Embracing minimalism and adopting a "less is more" approach can significantly
                  reduce your ecological footprint. Before making a pu<span className="text-[#394867ae]">rchase, ask yourself...</span>
                </p>
                <Link to="/signup" className="text-[14px] text-center mt-[30px] inline-block">
                  (Sign Up for Read Full Blog)
                </Link>
              </div>
            </div>
            <div className="w-[440px] overflow-hidden mx-0 my-[30px] rounded-[10px] border-2 border-solid border-[#394867]">
              <div className="h-[370px] overflow-hidden">
                <img src={socialMediaImage} alt="image2" className="h-full w-full object-cover" />
              </div>
              <div className="p-[10px] text-center">
                <h2 className="text-[20px] font-bold text-[#212a3e] font-Poppins my-[10px] ">
                  Navigating The Labyrinth Of Social Media: The Rise Of Influencer Culture
                </h2>
                <hr />
                <p className="text-[16px] text-[#394867] my-[5px] font-Poppins ">
                  In a world where connectivity is at our fingertips, social media has become more than just a platform for communication—it's a stage
                  where individuals curate their lives, and influencer culture reigns supreme. From Instagram to TikTok, Twitter to YouTube, the
                  digital landscape has transformed into a bustling marketplace where influence holds immense power. But with this power comes a
                  labyrinth of complexities, shaping not only how we perceive ourselves but also the world around us. The allure of influencer culture
                  lies in its ability to create a seemingly perfect world, meticulously crafted through filters, edits, and carefully curated content.
                  From glamorous travel destinations to flawless beauty routines, influencers offer a glimpse into a lifestyle that many aspire to
                  attain. However, beneath the surface lies a paradoxical reality—a dichotomy between authenticity and artifice. Authenticity, once
                  the cornerstone of social media, has become a rare commodity in the age of influencers. Behind the polished veneer of
                  picture-perfect lives, lies a constant pressure to maintain an image that is often far removed from reality. The pursuit of likes,
                  shares, and followers has bl
                  <span className="text-[#394867ae]">urred the lines betwe...</span>
                </p>
                <Link to="/signup" className="text-[14px] text-center mt-[30px] inline-block">
                  (Sign Up for Read Full Blog)
                </Link>
              </div>
            </div>
            <div className="w-[440px] overflow-hidden mx-0 my-[30px] rounded-[10px] border-2 border-solid border-[#394867]">
              <div className="h-[370px] overflow-hidden">
                <img src={educationalImage} alt="image3" className="h-full w-full object-cover" />
              </div>
              <div className="p-[10px] text-center">
                <h2 className="text-[20px] font-bold text-[#212a3e] font-Poppins my-[10px] ">
                  Illuminating Pathways: The Paramount Significance Of Education In Shaping Tomorrow's World
                </h2>
                <hr />
                <p className="text-[16px] text-[#394867] my-[5px] font-Poppins ">
                  <strong>Introduction</strong>
                  <br />
                  Education stands as the cornerstone of societal progress, an ever-burning torch that illuminates the pathways towards enlightenment,
                  empowerment, and transformation. Its significance transcends borders, cultures, and generations, serving as the catalyst for
                  individual growth, collective advancement, and the evolution of civilizations. In this comprehensive exploration, we delve into the
                  multifaceted importance of education, dissecting its profound impacts on individuals, communities, economies, and the global
                  landscape.
                  <br />
                  <br />
                  <strong>Foundations of Knowledge: </strong>
                  <br /> Empowering Minds At its core, education empowers minds, nurturing curiosity, critical thinking, and creativity. By providing
                  access to knowledge, skills, and perspectives, it equips individuals with the tools to navigate complexities, surmount challenges,
                  and seize opportunities. From early chi<span className="text-[#394867ae]">ldhood development to...</span>
                </p>
                <Link to="/signup" className="text-[14px] text-center mt-[30px] inline-block">
                  (Sign Up for Read Full Blog)
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
      {currentStatus && (
        <>
          <section className="showcase mx-0 my-[50px] bg-[#f1f6f9]">
            <div className=" max-w-[1300px] w-[90%] mx-auto flex flex-wrap">
              <div className="flex-[1_1_400px] my-[30px] p-[20px]">
                <h2 className="text-[15px]">iBlog</h2>
                <h1 className="text-[#212a3e] text-[30px] font-bold leading-[45px]">Share Your Story</h1>
                <p className="text-[#394867] text-[17px] font-medium leading-[1.5em] mt-[1em]">
                  Your voice matters. Whether you have a passion to share, a story to tell, or insights to inspire, creating a blog is your platform
                  to make a difference. Join our community of writers and storytellers today and let your creativity shine. Start crafting your next
                  masterpiece and share it with the world.
                </p>
                <Button onClick={() => navigate("/add-post")} className="px-[25px]">
                  Start Writing
                </Button>
              </div>
              <div className="flex-[1_1_350px]">
                <img className="block h-[500px] max-w-full object-cover object-center m-auto" src={bloggingImage} alt="blogging" />
              </div>
            </div>
          </section>
          <div className="flex">
            <p className="text-[40px] text-[#212a3e] flex mx-auto mt-[15px] font-[700] font-Montserrat border-y-4 border-y-[#212a3e] border-solid">
              {" "}
              Fresh Reads{" "}
            </p>
          </div>
          <div className="bg-[#f1f6f9]">
            {loading ? (
              <div className="hypnotic mx-auto my-[50px]"></div>
            ) : (
              <>
                <div className="test flex justify-around flex-wrap mx-auto max-w-[1600px] w-[98%] p-[10px] ">
                  {posts.map((post) => (
                    <div key={post.$id}>
                      <Card {...post} />
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>
        </>
      )}
      {/* ######################################################################################################################################### */}
      <div className="slidebar mt-[30px]">
        <div className="text-[40px] text-[#212a3e] text-center font-[700] font-Montserrat">Discover Blogs With Different Categories</div>
        <div className="mySlidBar">
          <div className="slider">
            <div className="slide-track">
              <div className="slide">
                <img src={techImage2} height="300" width="300" alt="Technology" />
                <p>Technology</p>
              </div>

              <div className="slide">
                <img src={lifeImage1} height="300" width="300" alt="Lifestyle" />
                <p>Lifestyle</p>
              </div>

              <div className="slide">
                <img src={perDevImage1} height="300" width="300" alt="Personal Development" />
                <p>Personal Development</p>
              </div>

              <div className="slide">
                <img src={financeImage1} height="300" width="300" alt="Finance" />
                <p>Finance</p>
              </div>

              <div className="slide">
                <img src={travelImage3} height="300" width="300" alt="Travel" />
                <p>Travel</p>
              </div>

              <div className="slide">
                <img src={foodImage1} height="300" width="300" alt="Food and Cooking" />
                <p>Food and Cooking</p>
              </div>

              <div className="slide">
                <img src={artImage3} height="300" width="300" alt="Arts and Entertainment" />
                <p>Arts and Entertainment</p>
              </div>

              <div className="slide">
                <img src={techImage1} height="300" width="300" alt="Technology" />
                <p>Technology</p>
              </div>

              <div className="slide">
                <img src={lifeImage2} height="300" width="300" alt="Lifestyle" />
                <p>Lifestyle</p>
              </div>

              <div className="slide">
                <img src={perDevImage2} height="300" width="300" alt="Personal Development" />
                <p>Personal Development</p>
              </div>

              <div className="slide">
                <img src={financeImage2} height="300" width="300" alt="Finance" />
                <p>Finance</p>
              </div>

              <div className="slide">
                <img src={travelImage2} height="300" width="300" alt="Travel" />
                <p>Travel</p>
              </div>

              <div className="slide">
                <img src={foodImage2} height="300" width="300" alt="Food and Cooking" />
                <p>Food and Cooking</p>
              </div>

              <div className="slide">
                <img src={artImage2} height="300" width="300" alt="Arts and Entertainment" />
                <p>Arts and Entertainment</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
