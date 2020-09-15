import express from "express";
import dotenv from "dotenv";
import { AddressInfo } from "net";
import { signup } from "./endpoints/signup";
import { getByEmail } from "./endpoints/getByEmail";
import { getDataUser } from "./endpoints/getDataUser";
import {deleteUser} from "./endpoints/deleteUser";
import { getUserGeral } from './endpoints/getUserGeral';

dotenv.config();

const app = express();
app.use(express.json());


app.post('/user/signup', signup);
app.post('/login', getByEmail);
app.get('/user/profile', getDataUser);
app.delete('/user/:id', deleteUser);
app.get('/user/:id', getUserGeral);

const server = app.listen(process.env.PORT || 3000, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});



