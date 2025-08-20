# 📚 EduExpanse Frontend

Una plataforma educativa moderna para compartir conocimiento y crear una comunidad de aprendizaje colaborativo.

## 🚀 Características

- ✨ **Interfaz Moderna**: Diseño limpio y responsivo con Tailwind CSS
- 📝 **Sistema de Publicaciones**: Crear, ver y gestionar contenido educativo
- 💬 **Comentarios Interactivos**: Sistema de comentarios para fomentar la discusión
- 📊 **Dashboard Personal**: Panel de control para gestionar tu contenido
- 🔄 **Actualizaciones en Tiempo Real**: Interfaz reactiva y dinámica
- 📱 **Diseño Responsivo**: Optimizado para todos los dispositivos

## 🛠️ Tecnologías Utilizadas

- **Frontend Framework**: React 19.1.0
- **Build Tool**: Vite 6.3.5
- **Styling**: Tailwind CSS 3.4.1
- **Routing**: React Router DOM 7.6.0
- **HTTP Client**: Axios 1.9.0
- **Icons**: React Icons 5.5.0
- **Notifications**: React Hot Toast 2.5.2
- **Loading Spinners**: React Spinners 0.17.0
- **Code Quality**: ESLint con configuración personalizada

## 📁 Estructura del Proyecto

```
src/
├── components/          # Componentes reutilizables
│   ├── dashboard/       # Componentes del dashboard
│   ├── nav/            # Navegación
│   └── publications/   # Componentes de publicaciones
├── pages/              # Páginas principales
├── services/           # Servicios de API
├── shared/             # Recursos compartidos
│   └── hooks/          # Hooks personalizados
└── assets/             # Recursos estáticos
```

## 🚀 Instalación y Configuración

### Prerrequisitos

- Node.js (versión 18 o superior)
- npm o yarn

### Pasos de Instalación

1. **Clonar el repositorio**
   ```bash
   git clone https://github.com/Elux-2021572/frontend_EduExpanse.git
   cd frontend_EduExpanse
   ```

2. **Instalar dependencias**
   ```bash
   npm install
   ```

3. **Configurar variables de entorno**
   ```bash
   # Crear archivo .env en la raíz del proyecto
   cp .env.example .env
   # Editar .env con tus configuraciones
   ```

4. **Ejecutar en modo desarrollo**
   ```bash
   npm run dev
   ```

5. **Abrir en el navegador**
   ```
   http://localhost:5173
   ```

## 📝 Scripts Disponibles

- `npm run dev` - Ejecuta la aplicación en modo desarrollo
- `npm run build` - Construye la aplicación para producción
- `npm run preview` - Previsualiza la build de producción
- `npm run lint` - Ejecuta ESLint para verificar el código

## 🔧 Configuración de Desarrollo

### ESLint
El proyecto incluye una configuración personalizada de ESLint que:
- Utiliza las reglas recomendadas de React y JavaScript
- Configura React Hooks y React Refresh
- Incluye reglas personalizadas para mantener la calidad del código

### Tailwind CSS
Configurado para trabajar con todos los archivos del proyecto:
- Componentes en `src/components/`
- Páginas en `src/pages/`
- Servicios y hooks personalizados

## 🤝 Contribución

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo [LICENSE](LICENSE) para más detalles.

## 👨‍💻 Autor

**Elux-2021572**
- GitHub: [@Elux-2021572](https://github.com/Elux-2021572)
- Email: emiliojo.lux@gmail.com

## 🌟 Agradecimientos

- React Team por el excelente framework
- Vite por la herramienta de build ultrarrápida
- Tailwind CSS por el sistema de diseño
- Toda la comunidad open source
