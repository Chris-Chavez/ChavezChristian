create database db_examen
use db_examen;

create table AUTOS
(
    ID INT NOT NULL auto_increment,
    Modelo varchar(50) NOT NULL,
    Marca varchar(50) NOT NULL,
    Año varchar(4) NOT NULL,
    Color varchar(20),
    primary key(ID)
);
insert Autos(Modelo,Marca,Año,Color) values ('MODELO1','MARCA1',2020,'Rojo');
insert Autos(Modelo,Marca,Año,Color) values ('MODELO2','MARCA2',2021,'Azul');