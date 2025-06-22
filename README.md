📝 Gestor de Tareas - Prueba Técnica (Frontend Angular)

Este proyecto es una aplicación web desarrollada con Angular para la gestión de tareas. Permite crear, editar, listar, ver detalles y eliminar tareas. Fue creado como parte de una prueba técnica donde se evaluaron buenas prácticas de desarrollo, organización, tipado fuerte con TypeScript y diseño responsivo.

🛠️ Tecnologías utilizadas

Framework principal: Angular 19

Lenguaje: TypeScript

Estilos: Bootstrap 5 + Bootstrap Icons

Routing y Navegación: Angular Router

Manejo de formularios: Reactive Forms

Consumo de API: HttpClient

Testing mínimo requerido: (opcional Jest/Vitest)

📁 Estructura del proyecto

src/
│
├── app/
│   ├── tareas/
│   │   ├── crear/         # Componente para crear tareas
│   │   ├── editar/        # Componente para editar tareas
│   │   ├── index/         # Componente principal (listado de tareas)
│   │   ├── ver/           # Componente para ver detalle de tarea
│   │   └── tarea.service.ts  # Servicio Angular para consumir backend
│   ├── tarea.ts           # Modelo de Tarea
│   └── app-routing.module.ts

🚀 Justificación tecnológica

Se eligió Angular por las siguientes razones:

Es un framework robusto y escalable para aplicaciones SPA.

Incluye una arquitectura basada en componentes y servicios ideal para separación de responsabilidades.

Soporta formularios reactivos con validaciones.

Excelente integración con TypeScript, ideal para asegurar tipado fuerte y claridad.

Potente sistema de enrutamiento y navegación.

⚙️ Instalación y ejecución del proyecto:

1. Clonar el repositorio

git clone https://github.com/Carlos2811/angular-gestor-tareas.git
cd angular-gestor-tareas

2. Instalar dependencias

npm install

3. Ejecutar el servidor de desarrollo

ng serve

Luego abre en tu navegador: http://localhost:4200

🔧 Funcionalidades implementadas

✅ Listar tareas con título, descripción y estado.

✅ Crear nuevas tareas con validaciones.

✅ Marcar tareas como completadas o pendientes.

✅ Editar título, descripción y estado.

✅ Ver detalle individual de una tarea.

✅ Eliminar tareas con confirmación.

✅ Aplicación responsiva (desktop y móvil).

✅ Navegación amigable con Angular Router.

✅ Código limpio, organizado y comentado.

🔀 Comunicación con Backend

Se hace uso de HttpClient para conectar con un backend REST en Spring Boot.

La entidad Tarea en el backend tiene los campos: id, title, description, completed.

La URL base para las peticiones es: http://localhost:8080/api/tareas.

🧰 Pruebas básicas (opcional)

Este proyecto incluye una estructura básica para agregar pruebas unitarias con:

ng test

Para pruebas más avanzadas, se puede integrar Jest o Cypress para e2e.


⏱️ Tiempo estimado de desarrollo:

- Análisis y diseño de estructura: 1 hora

- Desarrollo de componentes: 3 horas

- Integración con backend Spring Boot: 1 hora

- Validaciones y responsividad: 1 hora

- Pruebas y documentación: 1 hora

- Total estimado: 7 horas

👨‍💻 Autor:

Carlos Andrés Peña Ruiz | Desarrollador Fullstack | Angular • Spring Boot • MySQ | LinkedIn | carlosanp28@hotmail.com

📄 Licencia:

Este proyecto fue desarrollado para fines técnicos y educativos como parte de una prueba práctica.
