import * as jwt from 'jsonwebtoken';
import { USER_ROLES } from '../data/UserDatabase';

export class Authenticator {

    public generateToken(data: AuthenticationData):string {
        return jwt.sign(
            data,
            process.env.JWT_KEY as string,
            {expiresIn: process.env.EXPIRES_IN as string}
        )
    }

    public getData(token: string): AuthenticationData {
        const data = jwt.verify(
            token,
            process.env.JWT_KEY as string
        ) as any
        return {
            id: data.id,
            role: data.role
        }
    }
}

export interface AuthenticationData {
    id: string;
    role: USER_ROLES;
  }