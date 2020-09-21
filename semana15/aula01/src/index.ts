import express, { Request, Response } from "express";
import dotenv from 'dotenv';
import { AddressInfo } from "net";
import { signUp } from "./endpoints/signUp";
import { login } from "./endpoints/login";
import { getAllUsers } from "./endpoints/getAllUsers";
const app = express();
app.use(express.json());
dotenv.config()

app.post("/signup", signUp);
app.post("/login", login);
app.get("/all", getAllUsers);

const server = app.listen(3000, () => {
    if (server) {
        const address = server.address() as AddressInfo;
        console.log(`Server is running in http://localhost: ${address.port}`);
    } else {
        console.error(`Failure upon starting server.`);
    }
});
