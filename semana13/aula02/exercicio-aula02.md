### Exercício 1
a) Temos uma resposta literal do que o banco de dados devolveu. Sendo assim, há alguns array, pois além dos nossos dados, ele devolve outras informações.
b) 
```
const getActorByName = async (name: string): Promise<any> => {
  const result = await connection.raw(`
  SELECT * FROM Actor WHERE name = '${name}'
  `)
	return result[0]
}
```
c)
```
const getActorByName = async (name: string): Promise<any> => {
  const result = await connection.raw(`
  SELECT * FROM Actor WHERE name = '%${name}%'
  `)
  
	return result[0]
}
```
### Exercício 2
a)
```
const chageSalary = async (
  id: string,
  salary: number
): Promise<void> => {
  await connection
    .update({
      id: id,
      salary: salary
    })
    .from("Actor")
    .where("id", "=", `${id}`)
}
```
b)
```
const deleteActor = async (
  id: string
): Promise<void> => {
  await connection("Actor")
    .delete()
    .where("id", id)
}
```
c)
```
const getGendersActors = async (gender:string): Promise<any> => {
  const result = await connection.raw(`
    SELECT COUNT(*) as count
    FROM Actor
    WHERE gender = "${gender}"
  `)
  const count = result[0].count;
  return count;
}
```

### Exercício 3
a) Recebe como `req.params.id` para usar ali o que for passado como parametro na url.
b) Enviam um status da requisição e algo que escolhemos enviar, pode ser retornar o ator, como retornar uma mensagem.