import dotenv from "dotenv";
dotenv.config();

export const PORT:number = process.env.PORT? parseInt(process.env.PORT):5000;
export const DB_URL : string = process.env.MONGO_URI||"mongodb+srv://jasephname12345_db_user:TZNZOOlOo7bA0qq9@cluster0.xic0wxz.mongodb.net/";
export const JWT_SECRET: string = process.env.JWT_SECRET||"myjwtsecret";