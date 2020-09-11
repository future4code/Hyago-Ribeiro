### Exercício 1
a) Chave estrangeira é um recurso para relacionar as tabelas, ela sempre faz referência a uma `PRIMARY KEY` de outra tabela, permitindo criar uma relação entre linhas de tabelas diferentes.
b)
```
CREATE TABLE Rating (
	id VARCHAR(255) PRIMARY KEY,
    comment TEXT NOT NULL,
    rate FLOAT NOT NULL,
    movie_id VARCHAR(255),
    FOREIGN KEY (movie_id) REFERENCES movie(id)
);

INSERT INTO Rating VALUES
('com1', 'Esse filme é sensacional', 9.5, '001'),
('com2', 'Ele é diferente, me deixou estranho', 7, '002'),
('com3', 'Gostei do filme, mas podia ser melhor', 5.8, '003'),
('com4', 'Filme de tirar o folego, excelente!', 10, '004');
```
c) Ele informa que não pode criar o filme em questão, porque ele não consta como filho na tabela que tentei relacionar.
d)`ALTER TABLE movie DROP COLUMN rating;`
e) Ele não permite, informa que não posso apagar, sendo que existe outra tabela referenciando esse item.

### Exercício 2
a) Essa tabela serve para fazer a relação de N:M ou seja, pega o id do filme e relaciona com a tabela de filmes. E faz a mesma coisa com os atores, permitindo que realizemos um `JOIN` com as instâncias.
b)
```
INSERT INTO MovieCast VALUES
('002', '002'),
('002', '002'),
('003','006'),
('004', '004'),
('002', '004'),
('004', '006'),
('001', '005');
```
c) A operação resulta em um erro, informando que não posso criar, porque o id informado não existe como filho da tabela que foi referenciada.
d) Informa um erro, que não posso apagar, pois está sendo referenciada por outra tabela.

### Exercício 3
a) O operador `ON` faz a com que a query busque as informações de acordo com a condição, que no caso é os id iguais.
b) 
```
SELECT movie.id, name, rate FROM movie
JOIN Rating ON movie.id = Rating.movie_id;
```

### Exercício 4
a)
```
SELECT movie.id, name, rate, comment FROM movie
LEFT JOIN Rating ON movie.id = Rating.movie_id;
```
b)
```
SELECT movie.id, movie.name, Actor.id FROM MovieCast
JOIN movie ON MovieCast.movie_id = movie.id
JOIN Actor
ON actor_id = Actor.id;
```
c)
```
SELECT AVG(rate), name FROM Rating
RIGHT JOIN movie ON movie.id = Rating.movie_id
GROUP BY movie.name;
```

### Exercício 5
a) O uso de dois `JOIN`, torna-se necessário para que seja possível a junção da tabela `Actor` e `movie` ao `MovieCast`, pois o `MovieCast` tem elementos que realizam a conexão com as demais tabelas.
b) 
```
SELECT movie.id, movie.name, Actor.id, Actor.name FROM MovieCast
JOIN movie 
ON MovieCast.movie_id = movie.id
JOIN Actor
ON actor_id = Actor.id;
```
c)
D)
```
SELECT movie.id, movie.name, Actor.id, Actor.name, rate, comment FROM MovieCast
JOIN movie 
ON MovieCast.movie_id = movie.id
JOIN Actor
ON actor_id = Actor.id
LEFT JOIN Rating
ON MovieCast.movie_id = movie.id;
```

### Exercício 6
a) É uma relação de N:M 
b) Criei uma tabela separada para o Oscar, depois criei uma tabela de junção, que faz referencia a tabela de oscar e a tabela de movies.
c)
```
CREATE TABLE Oscar (
	oscar_name VARCHAR(255) PRIMARY KEY
);

INSERT INTO Oscar VALUES
('Melhor direção'),
('Melhor Filme');
```
d)
```
SELECT movie.name, Oscar.oscar_name, premiacao FROM DoneOscar
JOIN movie 
ON DoneOscar.movie_id = movie.id
JOIN Oscar
ON oscar_id = Oscar.oscar_name;
```