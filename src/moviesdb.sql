CREATE DATABASE `movies`;

USE `movies`;

CREATE TABLE `paises`(`id` INT PRIMARY KEY AUTO_INCREMENT,
                      `nombre` VARCHAR(45) UNIQUE NOT NULL);

CREATE TABLE `usuarios`(`id` INT PRIMARY KEY AUTO_INCREMENT,
                        `email` VARCHAR(45) UNIQUE NOT NULL,
                        `nombre` VARCHAR(45) NOT NULL,
                        `apellido` VARCHAR(45) NOT NULL,
						`contrasena` VARCHAR(100) NOT NULL,
                        `fecha_nacimiento` DATE NOT NULL,
                        `id_pais` INT NOT NULL,
                         FOREIGN KEY(`id_pais`) REFERENCES `paises` (`id`));
                        
CREATE TABLE `categorias`(`id` INT PRIMARY KEY AUTO_INCREMENT,
						  `nombre` VARCHAR(45) NOT NULL);
                        
CREATE TABLE `peliculas`(`id` INT PRIMARY KEY AUTO_INCREMENT,
                         `titulo` VARCHAR(45) UNIQUE NOT NULL,
						 `estreno` YEAR NOT NULL,
						 `descripcion` VARCHAR(500) NOT NULL,
						 `director` VARCHAR(45) NOT NULL,
                         `id_categoria` INT NOT NULL,
                          FOREIGN KEY(`id_categoria`) REFERENCES `categorias` (`id`));


INSERT INTO `paises` (`nombre`) VALUES ('Estados Unidos de America'), ('Alemania'), ('Argentina'), ('Australia'), ('Belgica'), ('Brasil'), ('Canada'), ('China'), ('Corea del Sur'),('España'), ('India'), ('Francia'),('Italia') ;


INSERT INTO `categorias` (`nombre`) VALUES ('Acción'), ('Aventura'), ('Ciencia Ficción'), ('Comedia'), ('Documentales'), ('Drama'), ('Fantasía'), ('Musical'), ('Terror'), ('Suspenso'), ('Animacion'), ('Romance');

INSERT INTO `peliculas` (`titulo`, `estreno`, `descripcion`, `director`, `id_categoria`) VALUES ('Barbie', '2023', 'Después de ser expulsada de Barbieland por no ser una muñeca de aspecto perfecto, Barbie parte hacia el mundo humano para encontrar la verdadera felicidad.', 'Greta Gerwig', '4'), ('Escuadrón Suicida', '2016', 'Los peores villanos de las cárceles y hospitales psiquiátricos, todos poseedores de cualidades especiales, son liberados por el gobierno para conformar un equipo de luchadores de élite y detener a una misteriosa y poderosa entidad. Mientras tanto, el Joker actúa por su cuenta, sembrando el caos a su paso.', 'David Ayer', '1'), ('Promising Young Woman', '2020', 'Cassie tenía un brillante futuro por delante, hasta que un acontecimiento inesperado truncó su carrera.', 'Emerald Fennell', '10'), ('Babylon', '2022', 'La decadencia, la depravación y los excesos escandalosos provocan el ascenso y la caída de varios ambiciosos soñadores en el Hollywood de la década de 1920.', 'Damien Chazelle', '4'), ('Saltburn', '2023', 'Felix Catton invita a su compañero de la universidad, Oliver Quick, a la residencia de su familia para pasar un verano inolvidable.','Emerald Fennell','10');