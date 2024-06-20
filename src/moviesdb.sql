CREATE DATABASE `movies`;

USE `movies`;

CREATE TABLE `paises`(`id` INT PRIMARY KEY AUTO_INCREMENT,
                      `nombre` VARCHAR(45) UNIQUE NOT NULL);

CREATE TABLE `usuarios`(`id` INT PRIMARY KEY AUTO_INCREMENT,
                        `email` VARCHAR(45) UNIQUE NOT NULL,
                        `nombre` VARCHAR(45) NOT NULL,
                        `apellido` VARCHAR(45) NOT NULL,
						`contrasena` VARCHAR(45) NOT NULL,
                        `fecha_nacimiento` DATE NOT NULL,
                        `id_pais` INT NOT NULL,
                         FOREIGN KEY(`id_pais`) REFERENCES `paises` (`id`));
                        
CREATE TABLE `categorias`(`id` INT PRIMARY KEY AUTO_INCREMENT,
						  `nombre` VARCHAR(45) NOT NULL);
                        
CREATE TABLE `peliculas`(`id` INT PRIMARY KEY AUTO_INCREMENT,
                         `titulo` VARCHAR(45) UNIQUE NOT NULL,
						 `estreno` YEAR NOT NULL,
						 `descripcion` VARCHAR(150) NOT NULL,
						 `director` VARCHAR(45) NOT NULL,
                         `id_categoria` INT NOT NULL,
                          FOREIGN KEY(`id_categoria`) REFERENCES `categorias` (`id`));