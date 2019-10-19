# Funcion

API-REST encargada de realizar operaciones matematicas (suma, resta, multiplicacion, division)


# Prerequisitos

Tener instalado los siguiente herramientas:

- node -v 
- npm version


# Despliegue

Clonar el repositorio utilizando herramientas como Github Desktop o descargarlo directamente de la url de github. Desde la consola ubicarse en la raiz del proyecto y ejecutar los siguiente comandos:

- npm install 
- npm run build 
- npm run dev

Esta ejecucion instalara las dependencias, compilara el proyecto y subira el servidor nodeJs por el puerto 3000 para realizar las peticiones al servicio desplegado (POST). Puede utlizar herramientas como Postman.

```
http://localhost:3000/test
```

La estructura de las peticiones enviadas es la siguiente:

```
{
    "array": [
        1,
        2,
        3,
        4
    ]
}
```


# Pruebas Unitarias

Se crea un script de pruebas alojado en ./tests el cual se puede ejecutar con el siguiente comando desde la raiz del proyecto:

- npm run test1
