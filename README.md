# 🎾 Control de Torneo de Padel

Aplicacion web estatica para gestionar torneos de padel con equipos, fase de grupos, resultados al mejor de tres sets, clasificaciones automaticas y cuadro eliminatorio tipo bracket.

La aplicacion esta pensada como una primera base funcional: se puede usar directamente en navegador, no requiere backend y conserva los datos en el navegador mediante `localStorage`.

## ✨ Funcionalidades

- Alta de equipos con jugadores y notas internas.
- Creacion de competiciones por categoria y numero de grupos.
- Asignacion de equipos a cada competicion.
- Generacion automatica de grupos y partidos todos contra todos.
- Registro de resultados al mejor de tres sets.
- Clasificacion calculada por puntos, sets y juegos.
- Generacion de eliminatoria desde la clasificacion de grupos.
- Cruces iniciales mejor clasificado vs peor clasificado de otro grupo.
- Ajuste manual de cruces de primera ronda mediante drag and drop.
- Cuadro visual tipo bracket con avance automatico de ganadores.
- Vista publica de solo lectura.
- Interfaz disponible en espanol e ingles.
- Exportacion e importacion de datos en JSON.
- Datos de ejemplo para probar rapidamente.

## 🚀 Puesta en marcha

Con Node.js instalado:

```bash
npm start
```

Despues abre:

```text
http://127.0.0.1:5173
```

Tambien puedes abrir `index.html` directamente en el navegador, aunque se recomienda usar el servidor local para una experiencia mas parecida a produccion.

## 🧪 Tests y validacion

La suite usa el runner nativo de Node, sin dependencias externas.

```bash
npm test
npm run check
```

Si acabas de instalar Node en Windows y la terminal aun no reconoce `node`, cierra y vuelve a abrir VS Code o PowerShell.

Los tests cubren:

- Marcador al mejor de tres sets.
- Calculo de clasificacion por puntos, sets y juegos.
- Generacion de cruces mejor vs peor de otro grupo.
- Drag and drop de cruces y limpieza de resultados dependientes.

## 🌍 Idiomas

La interfaz incluye selector ES/EN en la cabecera. La preferencia se guarda en `localStorage` y se conserva entre sesiones del mismo navegador.

## 💾 Persistencia de datos

Actualmente los datos se guardan en el navegador:

- Clave principal: `padelTournamentControl.v1`.
- Idioma seleccionado: `padelTournamentControl.lang`.

Para mover datos entre equipos o hacer copias de seguridad, usa las opciones de exportar/importar JSON desde la seccion `Datos`.

## 🧱 Estructura del proyecto

```text
.
├── assets/
│   └── court-mark.svg
├── tests/
│   └── app.test.js
├── app.js
├── dev-server.js
├── index.html
├── package.json
├── README.md
└── styles.css
```

## 🗺️ Roadmap recomendado

- Backend con base de datos real para multiusuario.
- Autenticacion y roles de administrador.
- URLs publicas por competicion.
- Auditoria de cambios de resultados.
- Programacion de horarios y pistas.
- Exportacion a PDF o imagen del bracket.
- Mejora del modelo de desempates segun reglamento especifico del torneo.

## 📌 Nota tecnica

El proyecto no introduce dependencias externas. La logica principal vive en `app.js`, la interfaz en `index.html` y `styles.css`, y el servidor local en `dev-server.js`.
