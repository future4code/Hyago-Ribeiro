import { Request, Response } from "express";
import { UserDatabase } from "../data/UserDatabase";
import { UserBusiness } from "./../business/UserBusiness";

export const deleteUser = async (req: Request, res: Response) => {
    try {
        const token = req.headers.authorization as string;
        const id  = req.params.id as string;
        
        const userBusiness = new UserBusiness();
        await userBusiness.deleteUsers(token, id);

        res.status(200).send({
            message: "Usuário excluído com sucesso!"
        })

    } catch (error) {
        res.status(200).send({
            message: error.message
        })
    } finally {
        await UserDatabase.destroyConnection();
    }
}