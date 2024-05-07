import { Client, ID, Databases, Storage, Query } from "appwrite";
import config from "../Conf/Config";

export class Service {
  client = new Client();
  databases;
  bucket;

  constructor() {
    this.client.setEndpoint(config.appwrite.endpoint).setProject(config.appwrite.projectID);
    this.databases = new Databases(this.client);
    this.bucket = new Storage(this.client);
  }

  async createPost({ title, content, featuredImage, status, userId }) {
    const documentID = ID.unique();
    try {
      return await this.databases.createDocument(config.appwrite.databaseID, config.appwrite.collectionID, documentID, {
        title,
        content,
        featuredImage,
        status,
        userId,
      });
    } catch (error) {
      console.log("Appwrite serive :: createPost :: error", error);
    }
  }

  async updatePost(postid, { title, content, featuredImage, status }) {
    try {
      return await this.databases.updateDocument(config.appwrite.databaseID, config.appwrite.collectionID, postid, {
        title,
        content,
        featuredImage,
        status,
      });
    } catch (error) {
      console.log("Appwrite serive :: updatePost :: error", error);
    }
  }

  async deletePost(postid) {
    try {
      await this.databases.deleteDocument(config.appwrite.databaseID, config.appwrite.collectionID, postid);
      return true;
    } catch (error) {
      console.log("Appwrite serive :: deletePost :: error", error);
      return false;
    }
  }

  async getPost(postid) {
    try {
      return await this.databases.getDocument(config.appwrite.databaseID, config.appwrite.collectionID, postid);
    } catch (error) {
      console.log("Appwrite serive :: getPost :: error", error);
      return false;
    }
  }

  async getPosts(queries = [Query.equal("status", "active")]) {
    try {
      return await this.databases.listDocuments(config.appwrite.databaseID, config.appwrite.collectionID, queries);
    } catch (error) {
      console.log("Appwrite serive :: getPosts :: error", error);
      return false;
    }
  }

  async userPosts(userId) {
    try {
      const queries = [Query.equal("userId", userId)];
      return await this.databases.listDocuments(config.appwrite.databaseID, config.appwrite.collectionID, queries);
    } catch (error) {
      console.log("Appwrite service :: userPosts :: error", error);
      return false;
    }
  }

  async getLatestPosts() {
    try {
      const activeQuery = Query.equal("status", "active");
      const sortAndLimitQuery = [activeQuery, Query.limit(4)];

      return await this.databases.listDocuments(config.appwrite.databaseID, config.appwrite.collectionID, sortAndLimitQuery);
    } catch (error) {
      console.log("Appwrite service :: getLatestPosts :: error", error);
      return false;
    }
  }

  // file upload service

  async uploadFile(file) {
    try {
      return await this.bucket.createFile(config.appwrite.bucketID, ID.unique(), file);
    } catch (error) {
      console.log("Appwrite serive :: uploadFile :: error", error);
      return false;
    }
  }

  async deleteFile(fileId) {
    try {
      await this.bucket.deleteFile(config.appwrite.bucketID, fileId);
      return true;
    } catch (error) {
      console.log("Appwrite serive :: deleteFile :: error", error);
      return false;
    }
  }

  getFilePreview(fileId) {
    return this.bucket.getFilePreview(config.appwrite.bucketID, fileId);
  }
}

const service = new Service();
export default service;
