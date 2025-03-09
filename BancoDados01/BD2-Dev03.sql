/*cria a base de dados de nome vendas*/
create database vendas;

/*conecta a base de dados vendas*/
\c vendas;

/*cria as tabelas da base de dados*/
create table produtos(
	id serial primary key,
	nome varchar(100),
	descrição text,
	preco float
);

create table clientes(
	id serial primary key,
	nome varchar(100),
	whatsapp varchar (14)
);

create table pedidos(
	id serial primary key,
	idCliente int,
	dataCompra date default NOW()
);

create table pedidosItens(
	idPedidos int not null,
	idProdutos int not null,
	qtditem int,
	foreign key (idPedidos) references pedidos(id),
	foreign key (idProdutos) references produtos(id)
);


/*popula as tabelas com dados que serão usados no exemplo*/
insert into produtos (nome, descrição, preco) values ('Mouse','Mouse bluetooth carregável',30.4);
insert into produtos (nome, descrição, preco) values ('Teclado','Teclado com fio padrão ABNT2',20);
insert into produtos (nome, descrição, preco) values ('Fone de ouvido','Fones sem fio compatíveis com Android e IOS',50.9);

insert into clientes (nome,whatsapp) values ('Jackson Lins', '(82)90011-2233');

insert into pedidos (idCliente, dataCompra) values (1, '2025-02-28');
insert into pedidos (idCliente) values (1);

insert into pedidosItens values (1,1,2);
insert into pedidosItens values (1,3,1);
insert into pedidosItens values (2,2,1);
insert into pedidosItens values (2,3,3);


/*
	CRIA O PROCEDIMENTO SOLICITADO NA ATIVIDADE:
	A procedure deve retornar uma tabela com o nome do produto
	e a quantidade total de itens vendidos na data informada.
*/
CREATE OR REPLACE PROCEDURE public.itensvendidos(IN datavendas date, INOUT _resultado refcursor DEFAULT 'resultado')
    LANGUAGE 'plpgsql'
    
AS $BODY$
BEGIN 
    open _resultado for
	select produtos.nome as produto, sum(pedidosItens.qtditem) as quantidade from produtos /*Seleciona o nome do produto e a soma da quantidade que foi vendida*/
    inner join pedidosItens on produtos.id = pedidosItens.idProdutos /*unindo as tabelas "produtos" e "pedidositens" pelas chaves "id"<->"idprodutos"*/
    inner join pedidos on pedidos.id = pedidosItens.idPedidos /*e também unindo as tabelas "pedidos" e "pedidositens" pelas chaves "id"<->"idpedidos"*/
    where pedidos.dataCompra = datavendas /*filtra os pedidos pela data de venda informada*/
    group by produtos.nome; /*agrupando os produtos pelo nome, evitando repetições*/
END;
$BODY$;

call itensvendidos('2025-02-28'); /*chama(executa) o procedimento*/
fetch all from "resultado"; /*carrega as informações disponibilizadas em "resultado"*/