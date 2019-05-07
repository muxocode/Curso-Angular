# Curso de introducción a angular
## Instalar Angular
### Requiistos
Instalar NodeJs: https://nodejs.org/en/
### angular-cli
```shell
npm install -g @angular/cli
```
## Crear un proyecto
```shell
ng new <nombre>
```
Ejemplo:
```shell
ng new MiApp
```
## Arrancar el proyecto
En la carpeta raíz
```shell
ng serve
```
o bien
```shell
npm start
```
## Creación de elementos
### Componente
```shell
ng g c <ruta>
```
Ejemplo:
```shell
ng g c miComponente
ng g c shared.hello
ng g c shared/hello
```
### Modulo
```shell
ng g m <ruta>
```
Ejemplo:
```shell
ng g m components
```
## Referencias
- https://cli.angular.io/