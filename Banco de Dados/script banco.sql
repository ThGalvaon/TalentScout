CREATE DATABASE TalentScout;

USE TalentScout;

CREATE TABLE Usuario (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(45) NOT NULL,
    email VARCHAR(45) NOT NULL UNIQUE,
    senha VARCHAR(45) NOT NULL
);

create TABLE aquario (
fk_empresa INT

);
 CREATE TABLE Time (
    idTime INT AUTO_INCREMENT PRIMARY KEY,
    nome_time VARCHAR(45) NOT NULL,
    email_time VARCHAR(45) NOT NULL UNIQUE,
    telefone_time VARCHAR(45),
    cnpj VARCHAR(45) UNIQUE,
    descricao VARCHAR(45)
);

CREATE TABLE Peneiras (
    idPeneiras INT AUTO_INCREMENT PRIMARY KEY,
    descricao VARCHAR(45) NOT NULL,
    quantidade_vagas VARCHAR(45),
    idade_vaga VARCHAR(45),
    data_inicio VARCHAR(45),
    data_fim VARCHAR(45),
    fkTime INT NOT NULL,
    FOREIGN KEY (fkTime) REFERENCES Time(idTime)
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

SELECT * FROM usuarios;