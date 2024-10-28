# Comandos GitHub
Referencia del repositorio local con el repositorio remoto (GITHUB)
git remote add origin https://github.com/AlejandroMGT52/backend_3-B_Alejo.git

# Inicializar el repositorio local 
 ```
 git init
```
- Referencia del repositorio local con el repositorio remoto (GITHUB)
```

git remote add origin https://github.com/AlejandroMGT52/backend_3-B_Alejo.git
````


# Validar referencia
````
git remore -v
````
---------------
```
git add .
git commit -m "proyecto base"
git put origin master
```
```
- Para forzar

git push -f origin master
```

# Instalacion
```

npm i --save @nestjs/jwt passport - jwt bcrypt
npm i --save-dev @types/passport-jwt


# Arrancamos proyecto
```

npm run start:dev
```

# Modules & Resource
```
nest g mo modules/auth
nest g res module/users 

# Controllers & Sevices
```
nest g co module/auth 
nest g s module/auth
```