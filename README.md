<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

# Ejecutar en Desarrollo

1. Clonar el repositorio
2. Ejecutar 


```
yarn install
```
3. Tener Nest CLI instalado 
```
npm i -g @nestjs/cli
```
4. Levantar la base de datos 

```
docker-compose up-d
```

5. Clonar el archivo __.env.template__ y renombrar la copia a __.env__

6. Lenar las variables de entorno definidas en el ```env```

7. Ejecutar la aplicación en dev:

```
yarn start:dev
```

8. Reconstruir la base de datos con la semilla

```
http://localhost:3000/api/v2/seed
```


# Stack Usado
* MongoDB
* Nest 

# Production Build

1. Crear archivo ```.env.prod```
2. Llenar las variables de entorno de producción
3. Construir la nueva imagen 

```
docker-compose -f docker-compose.prod.yaml --env-file .env.prod up --build
```
