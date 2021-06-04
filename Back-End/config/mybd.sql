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