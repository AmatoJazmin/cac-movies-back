# Pasos para levantar el proyecto en local

#Clonar el repositorio con git bash

    git clone https://github.com/AmatoJazmin/cac-movies-back

#Trabajar en la rama develop (Abrir git bash en la carpeta clonada)

    git checkout develop

#Instalar node_modules con la terminal

    npm install

#Crear la base de datos en local con Laragon

  - Ingresar a phpMyAdmin con sus credenciales
  - Ir a 'New' para crear una nueva base de datos
  - Ir a 'import' y seleccionar el script moviesdb.sql ubicado en la carpeta src

#Crear copia del archivo .env-example y nombrarlo .env - Completar con datos de variables de entorno locales 

#Levantar el proyecto

    npm run dev

Salida esperada en la terminal:

*Servidor funcionando en http://localhost:3000*
  
*Conexion exitosa!*
    
