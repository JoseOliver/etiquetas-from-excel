# etiquetas-from-excel
+ Programa para cargar etiquetas desde excel a html  
+ Puedes imprimir etiquetas importandolas facilmente desde excel.
+ Si necesitas adaptar la visualización de las etiquetas, solo tienes que editar index.html a tu gusto

## Screenshots
![excel screenshot](./img/screen%20excel.jpg)
![app screenshot](./img/screen%20explorer.jpg)

## Instrucciones:

1. Abrir etiquetas.xslm (excel con macro)  
2. Rellena nuevas etiquetas en la lista excel  
3. Selecciona los ID's que vas a exportar como etiquetas  
4. Pulsa "ctrl + i" para ejecutar la macro  
5. Ejecuta "npm install" para instalar las dependencias del programa, o ejecuta install.cmd (Windows).  
6. Ejecuta "npm start" para visualizar las etiquetas, o ejecuta etiquetas.cmd (Windows). Una vez ejecutandose, abre el explorador con la ruta localhost:8080
7. Si realizas una actualización desde la macro, te relanzará una nueva ventana con los cambios aplicados

## Posibles problemas:

1. Q: No puedo ejecutar scritps en powershell por problemas de permisos. ¿Qué hago?  
A: Permite ejectuar scripts para tu usuario:  
```
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
```
## Futuro de la app: Mejoras sugeridas

1. Poder elegir parametros y estilo de la etiqueta final mostrada de manera intuitiva  
2. Poder añadir nuevos parametros, tanto en excel como en la presentación HTML de la etiqueta
