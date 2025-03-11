/*cria a base de dados de nome vendas*/
create database vendas;

/*conecta a base de dados vendas*/
\c vendas;

/*cria as tabelas da base de dados*/
create table clientes(
	id serial primary key,
    datacadastro date default NOW(),
	nome varchar(100),
	whatsapp varchar (14)
);

/* POPULAR TABELA CLIENTES */
/*cadastra clientes inserindo a data atual */
insert into clientes (nome, whatsapp) values 
	('Maria Cláudia', '(82)98877-6655'), 
	('Josinete Santos', '(81)92233-4455'),
	('Claudinete Maria', '(87)96677-8855');

/*cadastra clientes inserindo uma data específica*/
insert into clientes (nome, whatsapp, datacadastro) values 
	('Cláudio José', '(82)98877-6655','2025-02-28'), 
	('Mário Santos', '(81)92233-4455', '2025-02-28'),
	('Tiago Melo', '(87)96677-8855','2025-03-01');




create or replace function somaClientesCadastro(datacad date)
returns int 
language 'plpgsql';
as $$
declare
    total int;
begin   
    select count(*) into total from clientes where datacadastro = datacad;
    return total;
end; $$