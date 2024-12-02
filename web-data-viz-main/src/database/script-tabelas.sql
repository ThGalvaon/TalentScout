CREATE DATABASE TalentScout;
USE TalentScout;

CREATE TABLE Usuario (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(45) NOT NULL,
    email VARCHAR(45) NOT NULL UNIQUE,
    senha VARCHAR(45) NOT NULL
);

 CREATE TABLE Times (
    idTime INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
    nome_time VARCHAR(45) NOT NULL,
    email_time VARCHAR(45) NOT NULL UNIQUE,
	senha_time VARCHAR(45) NOT NULL,
    telefone_time VARCHAR(45),
    logradouro_sede VARCHAR(45),
    num_endereco VARCHAR(45)
);

CREATE TABLE Peneiras (
    idPeneiras INT PRIMARY KEY AUTO_INCREMENT,
    titulo VARCHAR(45) NOT NULL,
    qtd_vagas FLOAT,
    idade VARCHAR(45),
    genero VARCHAR(45),
    esporte VARCHAR(45),
    data_peneira VARCHAR(15),
    data_inicio VARCHAR(15),
    data_fim VARCHAR(15),
    fkTime INT NOT NULL,
    FOREIGN KEY (fkTime) REFERENCES Times(idTime)
);

CREATE TABLE Inscricoes (
    fkUsuarios INT NOT NULL,
    fkPeneiras INT NOT NULL,
    fkTime INT NOT NULL,
    dtInscricao VARCHAR(45),
    PRIMARY KEY (fkUsuarios, fkPeneiras, fkTime),
    FOREIGN KEY (fkUsuarios) REFERENCES Usuario(id),
    FOREIGN KEY (fkPeneiras) REFERENCES Peneiras(idPeneiras),
    FOREIGN KEY (fkTime) REFERENCES Times(idTime)
);

drop table peneiras;
drop table times;
drop table inscricoes;

DESC usuario;

DESC peneiras;

SELECT * FROM usuario;

SELECT * FROM peneiras;

SELECT * FROM times;

SELECT * FROM inscricoes;

SELECT COUNT(*) AS quantidade FROM Peneiras WHERE fkTime = 1;

        SELECT peneiras.*, concat(times.logradouro_sede, ', ', times.num_endereco) AS endereco
        FROM peneiras
        JOIN times ON peneiras.fktime = 2;
        
        
SELECT 
        dtInscricao AS dia,
        COUNT(*) AS quantidade
        FROM Inscricoes
        WHERE fkTime = 1
        GROUP BY dia;
        
ALTER TABLE Inscricoes
DROP FOREIGN KEY inscricoes_ibfk_2;

ALTER TABLE Inscricoes
ADD CONSTRAINT inscricoes_ibfk_2
FOREIGN KEY (fkPeneiras) REFERENCES Peneiras(idPeneiras)
ON DELETE CASCADE;
