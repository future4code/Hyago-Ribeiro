import knex from "knex";
import express, { Request, Response } from "express";
import dotenv from "dotenv";
import { AddressInfo } from "net";

dotenv.config();

const connection = knex({   
  client: "mysql",
  connection: {
    host: process.env.DB_HOST,
    port: 3306,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
  },
});

const app = express();

app.use(express.json());

const server = app.listen(process.env.PORT || 3000, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});

const createNewUser = async (name: string, nickname: string, email: string) => {
  await connection
  .insert({
    name,
    nickname,
    email
  })
  .into("ListUser");
}

const getIdUser = async (id: number) => {
  const result = await connection
  .select("id", "nickname")
  .from("ListUser")
  .where("id", `${id}`);

  const erro = "O usuário não está registrado."
    

  if(result !== []) {
    return result
  } else {
    return erro
  }
};

const editUser = async (id: number, name: string, nickname: string) => {
  await connection
    .update({
      name: name,
      nickname: nickname
    })
    .from("ListUser")
    .where("id", id)
}

const createTask = async (title: string, description: string, limit_date: string, creator_user_id: number) => {
  await connection
  .insert({
    title,
    description,
    limit_date,
    creator_user_id
  })
  .into("ListsTask");
}

const getIdTask = async (id: number) => {
  const result = await connection
  .select("ListsTask.id", "title", "description", "limit_date", "status", "creator_user_id", "ListUser.nickname")
  .from("ListsTask")
  .join("ListUser", "nickname", "=", "ListUser.nickname")
  .where("ListsTask.id", `${id}`);

  const erro = "O usuário não está registrado."
    

  if(result !== []) {
    return result
  } else {
    return erro
  }
};

/**************************************************************/

app.put("/task", async (req: Request, res: Response) => {
  try {
    await createTask(req.body.title, req.body.description, req.body.limit_date, Number(req.body.creator_user_id))
    res.status(200).send({message: "Task criada com sucesso!"})
  } catch (error) {
    res.status(400).send({message: error.message})

  }
})

app.post("/user/edit/:id", async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id)
    await editUser(id, req.body.name, req.body.nickname);
    res.status(200).send({message: "Usuário alterado com sucesso!"})
  } catch (error) {
    res.status(400).send({message: error.message})
  }
})

app.get("/task/:id", async (req: Request, res: Response) => {
  try {
    const result = await getIdTask(Number(req.params.id))
    res.status(200).send(result)
  } catch (error) {
    res.status(400).send({message: error.message})
  }
})

app.get("/user/:id", async function(req: Request, res: Response){
  try {
    const id = Number(req.params.id);
    if(id) {
      const result = await getIdUser(id)
      res.status(200).send({result})
    } else {
      res.status(401).send({message: "Passe um id como parametro."})
    }
  } catch (error) {
    res.status(400).send({message: error.message})
  }
})

app.put("/user", async (req: Request, res: Response) => {
  try {
    
    const name = req.body.name;
    const nickname = req.body.nickname;
    const email = req.body.email;
    if(name && nickname && email) {
      createNewUser(name, nickname, email)
      res.status(200).send({message: "Usuário criado com sucesso!"})
    } else {
      res.status(401).send({message: "Os dados estão incorretos."})
    }

  } catch (error) {
    res.status(400).send({message: error.message});
  }
})
