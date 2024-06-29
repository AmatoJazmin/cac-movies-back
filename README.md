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
  - Ir a 'import' y seleccionar script moviesdb.sql ubicado en la ruta '..\cac-movies-back\src'

#Verificar credenciales de la base de datos en el archivo db.js

  - user: '',
    
  - password: ''
    
Deben ser las mismas con las que ingresa a phpMyAdmin

#Levantar el proyecto en local

    npm run dev

Salida esperada en la terminal:

*Servidor funcionando en http://localhost:3000*
  
*Conexion exitosa!*
    
