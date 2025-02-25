import dotenv from 'dotenv'
dotenv.config()
console.log("here in constants", process.env.PORT)
export const secret = process.env.SECRET||"no secret";
export const port = process.env.PORT||4000;
export const mongodb_url = process.env.MONGODB_URL;