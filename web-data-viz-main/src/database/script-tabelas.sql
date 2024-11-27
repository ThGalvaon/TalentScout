CREATE DATABASE TalentScout;

USE TalentScout;

CREATE TABLE Usuario (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(45) NOT NULL,
    email VARCHAR(45) NOT NULL UNIQUE,
    senha VARCHAR(45) NOT NULL
);

 CREATE TABLE Time (
    idTime INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
    nome_time VARCHAR(45) NOT NULL,
    email_time VARCHAR(45) NOT NULL UNIQUE,
    telefone_time VARCHAR(45),
    cnpj VARCHAR(45) UNIQUE,
    descricao VARCHAR(45)
);

CREATE TABLE Peneiras (
    idPeneiras INT PRIMARY KEY AUTO_INCREMENT,
    titulo VARCHAR(45) NOT NULL,
    qtd_vagas FLOAT,
    idade VARCHAR(45),
    bairro VARCHAR(50),
    esporte VARCHAR(45),
    data_peneira DATE,
    data_inicio DATE,
    data_fim DATE
    /*fkTime INT NOT NULL,
    FOREIGN KEY (fkTime) REFERENCES Time(idTime)*/
);

CREATE TABLE Inscricoes (
    fkUsuarios INT NOT NULL,
    fkPeneiras INT NOT NULL,
    fkTime INT NOT NULL,
    dtInscricao VARCHAR(45),
    PRIMARY KEY (fkUsuarios, fkPeneiras, fkTime),
    FOREIGN KEY (fkUsuarios) REFERENCES Usuarios(idUsuarios),
    FOREIGN KEY (fkPeneiras) REFERENCES Peneiras(idPeneiras),
    FOREIGN KEY (fkTime) REFERENCES Time(idTime)
);

drop table peneiras;

DESC usuario;

DESC peneiras;

SELECT * FROM usuario;

SELECT * FROM peneiras;

INSERT INTO peneiras (titulo, qtd_vagas, idade, bairro, esporte, data_peneira, data_inicio, data_fim) VALUES ('Basquete 3x3', 1, 'Sub 18', 'Vila dos Remédios', 'Basquete', '2024-11-28', '2024-11-20', '2024-11-26')