---
title: "Etapa 6: Camino del profesor"
description: Cómo revisar entregas y cerrar evaluaciones sin dañar la plantilla base.
---

# Etapa 6: Camino del profesor

Después de entender la experiencia del estudiante, toca ver cómo usa GitHub el docente para revisar con orden y dar retroalimentación útil.

## Objetivo de la etapa

Aprender a preparar una plantilla, revisar entregas con criterios mínimos y cerrar la evaluación sin modificar el repositorio original.

## Antes de revisar tareas

- [ ] Ya publiqué un repositorio base con instrucciones claras.
- [ ] Sé qué evidencias mínimas espero del estudiante.
- [ ] Tengo claro que evaluar **no** significa hacer merge.

## Paso 1: Crear la plantilla

Para que tus alumnos hagan fork, necesitas un repositorio base.

1. Crea un nuevo repositorio en GitHub.
2. Añade un `README.md` con instrucciones claras:
   - objetivo de la tarea;
   - fecha de entrega;
   - pasos para el fork y PR.
3. Si te sirve, activa **Template repository**.

**Resultado esperado:** los estudiantes reciben una base clara y tú mantienes una única fuente oficial de trabajo.

## Paso 2: Revisar el Pull Request

Cuando lleguen entregas:

1. Entra al PR del estudiante.
2. Ve a **Files changed**.
3. Revisa qué modificó.
4. Deja comentarios específicos y formativos.

### Checklist mínimo de revisión

- [ ] El PR viene desde el fork correcto.
- [ ] El cambio responde a la consigna.
- [ ] El estudiante dejó un historial entendible.
- [ ] El feedback ayuda a mejorar, no solo a señalar errores.

### Mini rúbrica

| Criterio | Qué revisar |
| --- | --- |
| Entrega correcta | El PR apunta al repositorio correcto y contiene cambios esperados |
| Claridad del trabajo | El commit y la modificación ayudan a entender qué hizo el estudiante |
| Cumplimiento | La tarea cumple el objetivo mínimo pedido |
| Retroalimentación | El comentario del profesor es concreto y accionable |

## Paso 3: Cerrar correctamente la evaluación

:::danger[La regla que no debes olvidar]
En este contexto educativo, **no debes hacer Merge Pull Request**.
:::

El flujo correcto es:

1. Revisar el código.
2. Dejar comentarios y calificación.
3. Cerrar el PR con **Close Pull Request**.

**Resultado esperado:** la entrega queda evaluada, el estudiante recibe feedback y tu repositorio base se mantiene limpio.

## Cómo sé que cerré bien

- [ ] El estudiante recibió feedback dentro del PR.
- [ ] La nota o criterio quedó registrado según mi dinámica.
- [ ] El PR quedó **Closed** y no **Merged**.
- [ ] La plantilla sigue lista para futuras cohortes.
