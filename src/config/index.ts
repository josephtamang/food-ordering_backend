import dotenv from "dotenv";
dotenv.config();

export const PORT:number = process.env.PORT? parseInt(process.env.PORT):5000;
export const DB_URL : string = process.env.MONGO_URI||"mongodb+srv://lamadipen9953_db_user:PxVCD0spiXAwni8Z@cluster0.zb3nmg0.mongodb.net/development";
export const JWT_SECRET: string = process.env.JWT_SECRET||"myjwtsecret";