SET NAMES utf8mb4;
SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='TRADITIONAL';
SET @old_autocommit=@@autocommit;


SET AUTOCOMMIT=0;
INSERT INTO Instrumentos(Id_Instrumento,Nombre_Instrumento,Precio,Tipo_Instrumento) 
VALUES ('GUI1','Guitarra Acustica','2500','Pesada'),
    ('Arpa2','Arpa','7500','Pesada'),;
COMMIT;

Id_Instrumento varchar(25),
    Nombre_Instrumento varchar(100),
    Precio int,
    Tipo_Instrumento