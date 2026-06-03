# Práctica 1: Mi primera entrega con Git y GitHub

Esta práctica acompaña el roadmap del curso y está pensada para docentes que empiezan desde cero.

## Repositorio base

Para este ejercicio usaremos **este mismo repositorio `Capacitacion`** como repositorio del profesor.

Eso significa que cada participante:

1. hace **Fork** de `Capacitacion`;
2. clona su fork;
3. trabaja como si fuera estudiante;
4. abre un Pull Request hacia este repositorio.

No hace falta crear otro repositorio aparte.

## Qué carpeta debes ignorar

Verás una carpeta llamada:

```text
sitio-docs/
```

Esa carpeta contiene el sitio de documentación del curso. **No necesitas tocarla para completar la práctica**.

## Objetivo

Hacer una entrega real usando el flujo:

1. fork;
2. clone;
3. cambio simple;
4. commit;
5. push;
6. Pull Request.

## Parte obligatoria

Cada docente debe crear su archivo personal dentro de:

```text
practica/participantes/
```

### Pasos

1. Abre `plantilla-perfil.md`.
2. Crea un archivo nuevo con tu nombre, por ejemplo:

```text
practica/participantes/ana-macias.md
```

3. Completa la información solicitada.
4. Guarda los cambios.
5. Ejecuta:

```bash
git add .
git commit -m "docs: agregar perfil de [Tu Nombre]"
git push origin main
```

6. Abre un Pull Request.

## Parte opcional

Si el facilitador lo indica, agrega también una línea en:

```text
practica/muro-del-taller.md
```

Formato sugerido:

```text
- Ana Macias | Programación | Quiero aprender a revisar tareas sin perderme entre versiones.
```

## Cómo sé que terminé bien

- mi archivo personal existe en mi fork;
- mis cambios están subidos;
- abrí un Pull Request hacia el repositorio del curso.
