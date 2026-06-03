# Capacitación Git y GitHub para Docentes

Sitio de documentación construido con **Astro + Starlight** para impartir una capacitación sobre Git, GitHub, revisión de tareas y uso educativo de Pull Requests.

## Objetivo del proyecto

Este repositorio busca servir como material de apoyo para:

- explicar el flujo base de **Fork -> trabajo local -> Pull Request -> revisión -> cierre**;
- ayudar a docentes a trasladar prácticas de la industria al aula;
- dejar una base reutilizable por otros compañeros, no solo por quien creó el curso.

## Estructura principal

```text
.
├── public/
├── src/
│   ├── assets/
│   ├── content/
│   │   └── docs/
│   └── content.config.ts
├── astro.config.mjs
├── package.json
└── tsconfig.json
```

### Dónde vive el contenido

- `src/content/docs/`: páginas del curso en `.md` o `.mdx`
- `astro.config.mjs`: configuración general y barra lateral
- `src/assets/`: imágenes usadas por el sitio

## Comandos

Ejecuta todos los comandos desde `sitio-docs/`:

| Comando | Acción |
| :-- | :-- |
| `npm run dev` | Inicia el servidor local de desarrollo |
| `npm run build` | Genera el sitio estático en `dist/` |
| `npm run preview` | Previsualiza el build generado |

## Convenciones para editar el curso

### 1. Añadir o editar páginas

Starlight publica automáticamente archivos `.md` y `.mdx` bajo `src/content/docs/`.

- Usa `.md` para contenido puramente Markdown.
- Usa `.mdx` cuando necesites importar componentes, por ejemplo `CardGrid`.

### 2. Mantener la navegación

La barra lateral **no se genera sola**. Cada página nueva que deba verse en navegación debe añadirse manualmente en `astro.config.mjs`.

### 3. Mantener el enfoque pedagógico

Cuando edites una página, procura que cada sección deje claro:

1. qué se hará;
2. por qué importa;
3. cómo verificar que salió bien;
4. qué errores comunes evitar.

## Mejoras didácticas recomendadas

El proyecto ya usa componentes nativos de Starlight y puede crecer con estas opciones:

- **Starlight + MDX** para tarjetas, callouts y layouts más didácticos;
- **Mermaid** para diagramas de flujo del proceso docente;
- **Sandpack** solo si se necesitan demos interactivas puntuales.

La recomendación actual es mantener la base ligera y priorizar primero claridad pedagógica y consistencia editorial.

## Checklist antes de publicar cambios

- [ ] El contenido nuevo aparece en la sidebar si corresponde.
- [ ] No hay placeholders visibles al usuario.
- [ ] Los ejemplos están adaptados al contexto real del curso.
- [ ] El sitio compila correctamente con `npm run build`.

## Nota sobre el repositorio raíz

La práctica para docentes vive en `..\practica\`. El objetivo es que los participantes trabajen allí sin distraerse con los archivos del sitio.
