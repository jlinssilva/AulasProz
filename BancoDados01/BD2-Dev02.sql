create table usuarios (
	id serial primary key,
	dataCadastro date default now(),
	cpf char(11) not null,
	username varchar(15) not null,
	dataModificacao timestamp
);

create or replace function usuarioDataModif() returns trigger as $$
	begin
		NEW.dataModificacao := NOW();
		RETURN NEW;
	end;
$$ language plpgsql;

create trigger atualizaUsuarioDataModif before update on usuarios for each row execute procedure usuarioDataModif();