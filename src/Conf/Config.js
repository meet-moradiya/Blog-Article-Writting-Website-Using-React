const config = {
  appwrite: {
    endpoint: process.env.REACT_APP_APPWRITE_ENDPOINT,
    projectID: process.env.REACT_APP_APPWRITE_PROJECT_ID,
    databaseID: process.env.REACT_APP_APPWRITE_DATABASE_ID,
    collectionID: process.env.REACT_APP_APPWRITE_COLLECTION_ID,
    bucketID: process.env.REACT_APP_APPWRITE_BUCKET_ID,
  },
};

export default config;
