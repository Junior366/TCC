
USE MASTER IF EXISTS (
   SELECT * FROM SYS.databases WHERE NAME = 'bd_centroTreinamento')
DROP DATABASE bd_centroTreinamento
GO
CREATE DATABASE bd_centroTreinamento
GO 
USE bd_centroTreinamento


CREATE TABLE Usuario (

id            INT            IDENTITY,
nome          VARCHAR(100)   NOT NULL,
email         VARCHAR(100)   UNIQUE NOT NULL,
senha         VARCHAR(100)    NOT NULL, 
dataNasc      DATETIME        NOT NULL,
nivelAcesso   VARCHAR(10)    NOT NULL, -- ADMIN OU USER
foto          VARBINARY(MAX) NULL,

status VARCHAR(20)    NOT NULL -- ATIVO ou INATIVO,

PRIMARY KEY (id)

)


CREATE TABLE Plano (

id          INT            IDENTITY,
nome        varchar(100)   NOT NULL,
ano		    varchar(10)    NOT NULL,
descricao     varchar(200)   NOT NULL,
valorMensal           DECIMAL(8,2)            NOT NULL,
valorSemestral           DECIMAL(8,2)            NULL,
valorAnual          DECIMAL(8,2)            NULL,
usuario_id    INT             NOT NULL,
status varchar(100)  NOT NULL,

Primary Key (id),
Foreign Key (usuario_id) REFERENCES Usuario(id)
)

CREATE TABLE Mensagem
(
	id	            INT			  IDENTITY,
	dataMensagem    SMALLDATETIME NOT NULL,
	emissorMensagem VARCHAR(100)  NOT NULL,
	email 	        VARCHAR(100)  NOT NULL,
	telefone	    VARCHAR(20)       NULL,
	texto 	        VARCHAR(400)  NOT NULL,
	status  VARCHAR(10)   NOT NULL, -- ATIVO ou INATIVO

	PRIMARY KEY (id)
)
GO
INSERT Mensagem (dataMensagem, emissorMensagem, email, telefone, texto, status) 
VALUES (GETDATE(), 'Ordnael Zurc', 'ordnael@email.com', '(11) 98765-4123', 'Mensagem de teste', 'ATIVO')
INSERT Mensagem (dataMensagem, emissorMensagem, email, telefone, texto, status) 
VALUES (GETDATE(), 'Maria Onete', 'maria@email.com', '(11) 97678-2876', 'Segunda mensagem de teste', 'ATIVO')
GO

INSERT Usuario
(nome, email, senha, dataNasc, nivelAcesso, foto, status)
VALUES
('Ana Sa', 'ana@gmail.com', 'MTIzNDU2', '10/10/2000', 'ADMIN', null, 'ATIVO')
INSERT Usuario
(nome, email, senha, dataNasc, nivelAcesso, foto, status)
VALUES
('João Sa', 'João@gmail.com', 'MTIzNDU2', '01/10/2000', 'USER', null, 'ATIVO')

SELECT * FROM Mensagem

SELECT * FROM Usuario


update usuario 
set status = 'ATIVO'