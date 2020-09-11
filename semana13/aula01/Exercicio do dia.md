### Exercício 1
a) Temos também outras declarações presentes, como:
1. VARCHAR que serve para determinar limite de caracter
2. DATE para identificar que é uma data

b) Temos duas respostas
1. `SHOW DATABASE` exibe os banco de dados que temos acesso.
2. `SHOW TABLES` exibe as tabelas que temos criadas.

c) O comando `DESCRIBE Actor` demonstra a estrutura da tabela em questão.

### Exercício 2
a) A query é: 
        ```INSERT INTO Actor (id, name, salary, birth_date, gender)
        VALUES(
          "002", 
          "Glória Pires",
          1200000,
          "1963-08-23",
          "female"
        );```

b) Apresenta um erro que diz que o id está duplicado na key `PRIMARY`. Ele ocorreu porque foi tentado criar outro ator com o mesmo id.

c) A resposta é:
1. O erro informa que a contagem de colunas na criação do ator, não correspondem a de valores na criação da tabela.
2. `INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "003", 
  "Fernanda Montenegro",
  300000,
  "1929-10-19", 
  "female"
);`

d) A resposta é:
1. O erro informa que não existe um valor default no valor da criação da tabela, então precisa de um nome.
2. `INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "004",
  "Antonio Fagundes",
  400000,
  "1949-04-18", 
  "male"
);`

e) A resposta é: 
1. Informa que o valor da columa `birth_date` está incorreto.
2. `INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "005", 
  "Juliana Paes",
  719333.33,
  "1979-03-26", 
  "female"
);`

### Exercício 3
a) `SELECT * FROM Actor
WHERE gender = "female";`

b) `SELECT salary FROM Actor
WHERE name = "Tony Ramos";`

c) Ele retornor apenas a esturtura da tabela, pois não há nenhum item da tabela que tenha o `gender` como `"invalid"`

d) `SELECT id, name, salary From Actor
WHere salary > 500000;`

e) A resposta é:
1. Informa que a existe um elemento que não está nos valores da tabela.
2. `SELECT id, name from Actor WHERE id = "002"`

### Exercício 4
a) A query apresentada, é um `SELECT` que exibe todas as colunas, dos itens que começam com a letra A ou J, além de ter um `salary` acima de 300.000

b) `SELECT * FROM Actor
WHERE name NOT LIKE "A%" AND salary > 300000;`

c) `SELECT * FROM Actor
WHERE name LIKE "%G%" OR name LIKE "%g%";`

d) `SELECT * FROM Actor
WHERE ((name LIKE "%A%" OR name LIKE "%a%") OR (name LIKE "%g%" OR name LIKE "%G%")) AND salary BETWEEN 350000 AND 900000;`

### Exercício 5
a) A query foi criada com id, nome, sinopse e nota. Ela cria uma tabela de filmes que possuí essas colunas citadas.

b) `INSERT INTO movie (id, name, sinopse, data, rating)
VALUES(
	"001",
    "Se Eu Fosse Você",
    "Cláudio e Helena são casados há muitos anos e enfrentam a rotina do casamento. Um dia eles são atingidos por um fenômeno inexplicável e trocam de corpos",
    "2006-01-06",
    7
);`

c) `INSERT INTO movie (id, name, sinopse, data, rating)
VALUES(
	"002",
    "Doce Mãe",
    "Dona Picucha, uma animada senhora de 85 anos, sempre causa grandes confusões. A vida dela e dos seus quatro filhos sofre uma reviravolta depois que Zaida, empregada e amiga de Dona Picucha, anuncia que vai se casar e não poderá mais morar com ela",
    "2012-12-27",
    10
);`

d) `INSERT INTO movie (id, name, sinopse, data, rating)
VALUES(
	"003",
    "Dona Flor e Seus Dois Maridos",
    "Dona Flor é uma sedutora professora de culinária casada com Vadinho, que só quer saber de farras e jogatina nas boates. A vida de abusos acaba por acarretar sua morte precoce.",
    "2017-11-02",
    8
);`

e) `INSERT INTO movie (id, name, sinopse, data, rating)
VALUES(
	"004",
    "Bacurau",
    "Pouco após a morte de dona Carmelita, aos 94 anos, os moradores de um pequeno povoado localizado no sertão brasileiro, chamado Bacurau, descobrem que a comunidade não consta mais em qualquer mapa. Aos poucos, percebem algo estranho na região: enquanto drones passeiam pelos céus, estrangeiros chegam à cidade pela primeira vez. Quando carros se tornam vítimas de tiros e cadáveres começam a aparecer, Teresa (Bárbara Colen), Domingas (Sônia Braga), Acácio (Thomas Aquino), Plínio (Wilson Rabelo), Lunga (Silvero Pereira) e outros habitantes chegam à conclusão de que estão sendo atacados. Falta identificar o inimigo e criar coletivamente um meio de defesa.",
    "2019-08-29",
    10
);`

### Exercício 6
a) `UPDATE Actor
SET name = "Fernanda Mongenegro"
WHERE id = "003";`

b) A resposta é:
1. `UPDATE Actor
SET name = "JULIANA PÃES"
WHERE id = "005";`
2. `UPDATE Actor
SET name = "Juliana Paes"
WHERE id = "005";`

c) `UPDATE Actor 
SET 
name = "Joaquin Pernanbuco", 
salary = 30000,
birth_date = "2020-02-10",
gender = "male"
WHERE id = "005";`

### Exercício 7
a) `DELETE FROM Actor
WHERE name = "Fernanda Mongenegro";`

b) `DELETE FROM Actor
WHERE gender = "male" AND salary > 1000000;`

### Exercício 8
a) O resultado foi na criação de dois grupos, um de atores e outro de atrizes. Passando o parametro de gender, o `GROUP BY` realizou a separação em homens e mulheres.

b) `SELECT id, name FROM Actor
ORDER BY name DESC;`

c) `SELECT * FROM Actor
ORDER BY salary DESC;`

d) `SELECT * FROM Actor
ORDER BY salary DESC
LIMIT 3;`

e) `SELECT AVG(salary), gender FROM Actor
GROUP BY gender;`
