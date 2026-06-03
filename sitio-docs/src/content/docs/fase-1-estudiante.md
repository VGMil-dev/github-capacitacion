---
title: "Etapa 5: Camino del estudiante"
description: El recorrido completo de una entrega desde el fork hasta el Pull Request.
---

# Etapa 5: Camino del estudiante

Después de la práctica guiada, ahora sí toca mirar el flujo completo que seguiría un estudiante para entregar una tarea.

## Objetivo de la etapa

Comprender el recorrido completo desde que el alumno recibe una tarea hasta que la entrega correctamente mediante un **Pull Request**.

## Antes de empezar

- [ ] Tengo cuenta de GitHub iniciada.
- [ ] Puedo entrar al repositorio del profesor.
- [ ] Entiendo que trabajaré sobre **mi copia** del repositorio, no sobre el original.

## Paso 1: El fork

El profesor publicará un repositorio con la base del proyecto (ej. `tarea-programacion-1`).

1. Ve al repositorio del profesor en GitHub.
2. Haz clic en el botón **Fork**.
3. Selecciona tu propia cuenta.

**Resultado esperado:** ahora tienes una copia del proyecto en tu cuenta y puedes trabajar sin afectar el original.

## Paso 2: Llevarlo a tu computador

1. Copia la URL de **tu** repositorio.
2. En tu terminal o VS Code, ejecuta:

```bash
git clone https://github.com/tu-usuario/nombre-del-repo.git
```

3. Abre la carpeta del proyecto y realiza el cambio pedido.

:::note[Cómo leer el ejemplo]
`tu-usuario` y `nombre-del-repo` son marcadores de ejemplo. Cada estudiante debe reemplazarlos por los datos reales de **su** fork.
:::

## Paso 3: Guardar tu trabajo

Cuando termines tu cambio, guarda el avance:

```bash
git add .
git commit -m "Tarea completada por [Tu Nombre]"
git push origin main
```

**Resultado esperado:** el cambio aparece tanto en tu computador como en tu repositorio de GitHub.

## Paso 4: Entregar con Pull Request

1. Ve a tu repositorio en GitHub.
2. Haz clic en **Contribute** -> **Open Pull Request**.
3. Verifica que el repositorio base sea el del profesor y que el head sea el tuyo.
4. Escribe un título claro y crea el PR.

## Qué evidencia confirma que ya entregaste

- [ ] Tengo un fork en mi cuenta.
- [ ] Hice cambios en local.
- [ ] Creé al menos un commit.
- [ ] Subí mis cambios a GitHub.
- [ ] Abrí un Pull Request apuntando al repositorio del profesor.

:::caution[Errores comunes]
- Clonar el repositorio del profesor en vez de clonar tu fork.
- Hacer cambios pero olvidar el `git push`.
- Abrir el PR hacia el repositorio equivocado.
- Pensar que el PR mezcla automáticamente tu código con el del profesor.
:::
