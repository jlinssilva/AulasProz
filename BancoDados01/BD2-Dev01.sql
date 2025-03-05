/*cria a base dados*/
create database cursinho;

/* acessando a base de dados em POSTGRESQL*/
/c cursinho /* em alguns SGBD usa-se:  USE cursinho; */

create table professores(
  id serial primary key,
  nome varchar(100)
);

insert into professores (nome) values ('Jonas L.');
insert into professores (nome) values ('Sheldon Q.');
insert into professores (nome) values ('Lucas M.');
insert into professores (nome) values ('Lucas H.');
insert into professores (nome) values ('Melk G.');
insert into professores (nome) values ('Marcos F.');
insert into professores (nome) values ('Gabriela I.');
insert into professores (nome) values ('Airton L,');
insert into professores (nome) values ('Jonathan F.');
insert into professores (nome) values ('Alberto B.');

create table disciplinas(
  id serial primary key,
  nome varchar(100) not null,
  idProfessor int,
  foreign key (idProfessor) references professores(id)
);

insert into disciplinas (nome, idProfessor) values ('Literatura','1');
insert into disciplinas (nome, idProfessor) values ('Química','2');
insert into disciplinas (nome, idProfessor) values ('Matemática','3');
insert into disciplinas (nome, idProfessor) values ('Geografia','5');
insert into disciplinas (nome, idProfessor) values ('História','4');
insert into disciplinas (nome, idProfessor) values ('Filosofia','6');
insert into disciplinas (nome, idProfessor) values ('Inglês','7');
insert into disciplinas (nome, idProfessor) values ('Redação','8');
insert into disciplinas (nome, idProfessor) values ('Física','9');
insert into disciplinas (nome, idProfessor) values ('Biologia','10');


/*
  seleciona e exibe o nome dos professores correlacionando com a disciplina que este ensina.
  caso haja um professor sem materia ou umamatéria sem professor estes não serão exibidos.
*/
SELECT prof.nome, disc.nome FROM professores as prof INNER JOIN disciplinas as disc ON disc.idprofessor = prof.id; 