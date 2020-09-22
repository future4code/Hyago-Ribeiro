import { Request, Response } from "express";
import { UserDatabase } from "../data/UserDatabase";
import { UserBusiness } from "./../business/UserBusiness";

export const getAllUsers = async (req: Request, res: Response) => {
    try {
        const token = req.headers.authorization as string;
        const userBusiness = new UserBusiness();
        const users = await userBusiness.getAllUsers(token);

        res.status(200).send(users)
    } catch (error) {
        res.status(400).send({message: error.message})
    } finally {
        await UserDatabase.destroyConnection();
    }
}