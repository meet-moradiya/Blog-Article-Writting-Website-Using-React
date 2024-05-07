import "./card.css";
import React from "react";
import appwriteService from "../../Appwrite/config";
// import { Link } from "react-router-dom";

function Card({ $id, title, featuredImage }) {
  return (
    <article>
      <div class="card-container" onClick={() => window.open(`/post/${$id}`, "_blank", "noopener noreferrer")}>
        <div class="img-box">
          <img src={appwriteService.getFilePreview(featuredImage)} alt={title} />
        </div>
        <div class="text-box">
          <h1>{title}</h1>
        </div>
      </div>
    </article>
  );
}

export default Card;
