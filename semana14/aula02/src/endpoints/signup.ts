import { Request, Response} from 'express';
import { UserDatabase } from '../data/UserDatabase';
import {IdGenerator} from '../services/IdGenerator';
import { Authenticator } from '../services/Authenticator';
import { HashManager } from '../services/HashManager';
import { BaseDatabase } from '../data/BaseDatabase';



export const signup = async (req: Request, res: Response) => {
    try {
  
      const userData = {
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        role: req.body.role
      }
  
      if(!userData.name || !userData.password || !userData.email) {
        throw new Error('Insira todas as informações necessárias para o cadastro')
      }
  
      if(userData.email.indexOf('@') === -1) {
        throw new Error('Email inválido')
      }

      if(userData.password.length < 6) {
        throw new Error('A senha precisa ter mais de 6 caracteres.')
      }
  
      const idGenerator = new IdGenerator();
      const id = idGenerator.generate();

      const hashManager = new HashManager();
      const hashPassword = await hashManager.hash(userData.password);
  
      const userDatabase = new UserDatabase();
      await userDatabase.createUser(
        id,
        userData.name,
        userData.email,
        hashPassword,
        userData.role
      );

      const authenticator = new Authenticator();
      const token = authenticator.generateToken({
        id,
        role: userData.role
      });
  
      res.status(200).send({
        message: 'Usuário criado com sucesso',
        token
      })
  
    } catch(e) {
      res.status(400).send({
        message: e.message
      })
    }
    await BaseDatabase.destroyConnection()
  }