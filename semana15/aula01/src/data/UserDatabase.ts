import { BaseDatabase } from "./BaseDatabase";

export enum USER_ROLES {
  NORMAL = "NORMAL",
  ADMIN = "ADMIN"
}

export class UserDatabase extends BaseDatabase {

  private static TABLE_NAME = "User_Arq";

  public async createUser(
          id: string,
          name: string,
          email: string,
          password: string,
          role: USER_ROLES
          ): Promise<void> {
            try {
              await this.getConnection()
                .insert({
                  id,
                  name,
                  email,
                  password,
                  role
                }).into(UserDatabase.TABLE_NAME)
            } catch (error) {
                throw new Error(error.sqlMessage || error.message)
            }
          }

  public async getUserByEmail(email: string): Promise<any> {
    try {
      const result = await this.getConnection()
            .select('*')
            .from(UserDatabase.TABLE_NAME)
            .where({email});
            return result[0];
    } catch (error) {
      throw new Error(error.sqlMessage || error.message)
    }
  }

  public async getAllUsers(): Promise<any[]> {
    try {
        const users: any[] = [];
        const result = await this.getConnection()
          .select('*')
          .from(UserDatabase.TABLE_NAME)
          
          for(let user of result){
            users.push(user);
          }

        return users;
    } catch (error) {
      throw new Error(error.sqlMessage || error.message)
    }
}

  public async deleteUser(id: string): Promise<void> {
    try {
        await this.getConnection()
        .delete()
        .from(UserDatabase.TABLE_NAME)
        .where({id})
        
    } catch (error) {
        throw new Error(error.sqlMessage || error.message)
    }
  }

}
