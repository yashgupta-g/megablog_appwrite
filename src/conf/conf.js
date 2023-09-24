const conf ={
appwriteurl: String(import.meta.env.VITE_APPWRITE_URL);
appwriteprojectid: String(import.meta.env.VITE_PROJECT_IDL);
appwritedatabaseid: String(import.meta.env.VITE_DATABASE_ID);
appwritecollectionid: String(import.meta.env.VITE_COLLECTION_ID);
appwritebucketid: String(import.meta.env.VITE_BUCKET_ID);

}


export default conf