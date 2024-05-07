import React from "react";
import "./about.css";
import { missionImage, companyImage, thankImage } from "../../Assets/images";
function About() {
  return (
    <div className="myclass">
      <section className="showcase">
        <div className="container">
          <div className="textbox">
            <h1 className="h1-showcase">Our Mission</h1>
            <p className="p-showcase">
              At iBlog, our mission is to ignite curiosity, inspire creativity, and foster connections through the power of words. We believe in the
              transformative potential of blogging to share knowledge, spark conversations, and enrich lives. Our goal is to provide a platform where
              diverse voices can be heard, ideas can flourish, and communities can thrive. By empowering both creators and readers, we strive to
              create a vibrant ecosystem where everyone can learn, grow, and contribute.
            </p>
          </div>
          <div className="imgbox">
            <img src={missionImage} alt="missionImage" />
          </div>
          <div className="heading1">
            <h1>Our Mission</h1>
          </div>
        </div>
      </section>
      <section className="showcase">
        <div className="container container2">
          <div className="heading1">
            <h1>Company Overview</h1>
          </div>
          <div className="imgbox imgbox2">
            <img src={companyImage} alt="companyImage" />
          </div>
          <div className="textbox textbox2">
            <h1 className="h1-showcase">Company Overview</h1>
            <p className="p-showcase">
              At iBlog, we're more than just a blog platform – we're a dynamic community of passionate individuals united by our love for storytelling
              and learning. Through our curated selection of blogs spanning various topics, from technology and lifestyle to personal development and
              beyond, we aim to cater to the diverse interests of our audience. But our commitment doesn't end there. We believe in the power of
              community engagement, fostering meaningful interactions, and building connections that transcend geographical boundaries. Whether it's
              through thought-provoking discussions in the comments section, sharing experiences on social media, or participating in community
              events, we're dedicated to creating an inclusive space where every voice matters.
            </p>
          </div>
        </div>
      </section>
      <section className="showcase">
        <div className="container">
          <div className="textbox">
            <h1 className="h1-showcase">Gratitude to Users</h1>
            <p className="p-showcase">
              To our valued readers, creators, and contributors – thank you for being the heartbeat of iBlog. You are not just users; you are partners
              in our journey. Your engagement, feedback, and enthusiasm fuel our passion for creating meaningful content and fostering a vibrant
              community. Together, we are shaping the narrative, inspiring change, and making a difference. We are honored to have you by our side as
              we continue to grow and evolve. Here's to many more adventures together!
            </p>
          </div>
          <div className="imgbox">
            <img src={thankImage} alt="thankImage" />
          </div>
          <div className="heading1">
            <h1>Gratitude to Users</h1>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
