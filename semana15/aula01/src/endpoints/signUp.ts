import { Request, Response } from "express";
import { BaseDatabase } from "../data/BaseDatabase";
import { UserBusiness } from "./../business/UserBusiness";

export const signUp = async (req: Request, res: Response) => {
    try {
        const user = {
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
            role: req.body.role
        }

        const userBusiness = new UserBusiness();
        const token = await userBusiness.signUp(user.name, user.email, user.password, user.role);

        res.status(200).send({
            message: 'Usuário criado com sucesso!',
            token
        });
    } catch (error) {
        res.status(400).send({
            message: error.message
        })
    } finally {
        await BaseDatabase.destroyConnection();
    }

}