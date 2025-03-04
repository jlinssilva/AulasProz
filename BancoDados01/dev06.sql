CREATE DATABASE IF NOT EXISTS escola;

USE escola;
/*
    no POSTGRESQL o comando USE não existe
    em substituição usa-se:
    \c escola;
*/

CREATE TABLE aluno (
    id serial primary key,
    nome varchar(100) not null,
    email varchar(100) not null,
    endereco varchar(500) not null
)