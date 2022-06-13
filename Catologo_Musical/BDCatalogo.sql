DROP SCHEMA IF EXISTS Catalogo_Musical;
CREATE DATABASE Catalogo_Musical;

USE Catalogo_Musical;

create table Instrumentos(Id_Instrumento varchar(25),
    Nombre_Instrumento varchar(100),
    Precio int,
    Tipo_Instrumento varchar(100),
    primary key(Id_Instrumento)
    )ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
