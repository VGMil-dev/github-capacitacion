---
title: "Etapa 2: Primeros pasos con Git"
description: Los comandos mínimos para comenzar sin saturarte.
---

# Etapa 2: Primeros pasos con Git

Ahora sí vamos a tocar Git, pero solo lo necesario para entender el flujo base.

## Objetivo de esta etapa

Familiarizarte con tres ideas sencillas:

1. ver el estado del proyecto;
2. preparar cambios;
3. guardar un avance con sentido.

## Los 3 comandos que más te ayudan al inicio

### `git status`

Te dice qué está pasando en tu proyecto.

- qué archivos cambiaste;
- cuáles están listos para guardar;
- si Git detecta algo pendiente.

```bash
git status
```

**Cuándo usarlo:** cada vez que sientas que no sabes en qué estado está tu trabajo.

### `git add .`

Le dice a Git: “estos cambios sí quiero prepararlos para guardar”.

```bash
git add .
```

**Idea clave:** todavía no estás cerrando el cambio, solo lo estás preparando.

### `git commit -m "..."`

Aquí sí dejas una foto del avance con un mensaje corto y claro.

```bash
git commit -m "feat: agregar actividad inicial"
```

**Idea clave:** un commit no es cualquier guardado; es un registro que luego te ayuda a entender el proceso.

## Cómo se ve el flujo mínimo

1. Haces un cambio en un archivo.
2. Ejecutas `git status`.
3. Preparas el cambio con `git add .`.
4. Guardas el avance con `git commit -m "..."`.

## Ejemplo mental

Imagínate que editaste el `README.md` de una tarea para añadir instrucciones.

- con `git status` verificas que sí hubo cambios;
- con `git add .` dices “quiero guardar esto”;
- con `git commit` dejas constancia del avance.

## Qué no vamos a complicar todavía

:::note[No te adelantes]
En este punto no hace falta entrar en conflictos, comandos de rescate o convenciones estrictas. Lo importante es entender el flujo mínimo y perderle el miedo.
:::

## Si algo sale mal

Más adelante tendrás páginas de apoyo para:

- sincronizar un fork;
- resolver conflictos;
- deshacer pasos puntuales.

Por ahora, quédate con lo esencial.

## Cómo sé que ya avancé

- [ ] Sé para qué sirve `git status`.
- [ ] Entiendo que `git add .` prepara cambios.
- [ ] Entiendo que `git commit` deja una foto del avance.
- [ ] Puedo imaginar el flujo mínimo sin sentirlo confuso.
