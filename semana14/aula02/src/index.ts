import knex from "knex";
import express from "express";
import dotenv from "dotenv";
import { AddressInfo } from "net";
import { signup } from "./endpoints/signup";
import { getByEmail } from "./endpoints/getByEmail";
import { getDataUser } from "./endpoints/getDataUser";
import {UserDatabase} from './data/UserDatabase';
import { Authenticator } from "./services/Authenticator";

dotenv.config();

const app = express();
app.use(express.json());

// const chama = async() => {
//   const authenticator = new Authenticator();
//   const authenticationData = authenticator.getData("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImlkIjoiZmQ0ZTcxM2QtMzIwOC00M2RlLTljZGQtZTYyYjYzNjUwYmE0In0sImlhdCI6MTYwMDE5Njk3OCwiZXhwIjoxNjAwMTk3Mjc4fQ.DEU3AMIO12GMsjzBQfZl0GKSejjjtZAYPqyBfc_xDI4");
//         const userDb = new UserDatabase();
//         const user = await userDb.getUserById(authenticationData.id);
//   console.log(user);
// }

// chama()

app.post('/user/signup', signup);
app.post('/login', getByEmail);
app.get('/user/profile', getDataUser);

const server = app.listen(process.env.PORT || 3000, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});



