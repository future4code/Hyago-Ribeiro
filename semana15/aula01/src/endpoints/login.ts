import { Request, Response } from "express";
import { BaseDatabase } from "../data/BaseDatabase";
import { UserBusiness } from "./../business/UserBusiness";

export const login = async (req: Request, res: Response) => {
    try {
        const user = {
            email: req.body.email,
            password: req.body.password
        };

        const userBusiness = new UserBusiness();
        const token = await userBusiness.login(user.email, user.password);

        res.status(200).send({
            token
        })
    } catch (error) {
        res.status(400).send({
            message: error.message
        })
    } finally {
        await BaseDatabase.destroyConnection();
    }
}