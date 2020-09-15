import { Request, Response} from 'express';
import { UserDatabase } from '../data/UserDatabase';
import { Authenticator } from '../services/Authenticator';

export const getDataUser = async (req: Request, res: Response) => {
    try {
        const token = req.headers.authorization as string;

        const authenticator = new Authenticator();
        const authenticationData = authenticator.getData(token);

        const userDb = new UserDatabase();
        const user = await userDb.getUserById(authenticationData.id);
        res.status(200).send(user);
    } catch (error) {
        res.status(400).send({message: error.message});
    }
}