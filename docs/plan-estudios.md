# 📅 Plan de Estudios — Bootcamp JavaScript ES2023

**Duración total**: 34 semanas (~8.5 meses)
**Horas semanales**: 8 horas
**Horas totales**: ~272 horas
**Nivel de entrada**: Cero (sin experiencia previa en programación)
**Nivel de salida**: Desarrollador JavaScript Junior
**Enfoque**: JavaScript moderno (ES2023), progresión desde fundamentos absolutos

---

## 🗂️ Orden de Creación de Cada Semana

El instructor debe seguir este orden al desarrollar el contenido de cada semana:

1. `README.md` — Descripción general, objetivos, navegación
2. `rubrica-evaluacion.md` — Criterios y rúbrica de evaluación
3. `1-teoria/` — Archivos de teoría numerados (`01-`, `02-`, …)
4. `0-assets/` — Diagramas SVG de apoyo visual vinculados a la teoría
   - Tema dark
   - Sin degradés (solo colores sólidos)
   - Fuentes sans-serif (Inter, Roboto, Open Sans o System UI)
   - Paleta base: `#F0DB4F` (amarillo JS), fondos `#1a1a2e` / `#16213e`
5. `2-practicas/` — Ejercicios guiados (starter + solution por ejercicio)
6. `3-proyecto/` — Proyecto integrador semanal (único entregable)
7. `4-recursos/` — Ebooks, videografía, webgrafía
8. `5-glosario/README.md` — Términos clave de la semana (A–Z)

---

## 🚀 Características ES2023 Cubiertas

Este bootcamp introduce JavaScript moderno de forma progresiva hasta ES2023:

### ES2023
- `Array.prototype.findLast()` y `findLastIndex()`
- `Array.prototype.toSorted()`, `toReversed()`, `toSpliced()`, `with()`
- Symbols como claves de WeakMap

### ES2022
- `Array.prototype.at()` — índices negativos
- `Object.hasOwn()` — reemplazo moderno de `hasOwnProperty`
- Error cause (`new Error('msg', { cause })`)
- Class fields privados (`#`), static blocks
- Top-level await en módulos
- Regex `/d` flag

### ES2021
- `String.prototype.replaceAll()`
- `Promise.any()` y `AggregateError`
- Logical assignment operators (`||=`, `&&=`, `??=`)
- Numeric separators (`1_000_000`)

### ES2020
- Optional chaining (`?.`)
- Nullish coalescing (`??`)
- `Promise.allSettled()`
- Dynamic `import()`
- `BigInt`
- `globalThis`

### ES2019
- `Array.prototype.flat()` y `flatMap()`
- `Object.fromEntries()`
- `String.prototype.trimStart()`, `trimEnd()`
- Optional catch binding

---

## 🎯 Distribución por Etapas

### 🟪 Etapa 0: Fundamentos de Programación (Semanas 1–10)
**80 horas totales** — Primer contacto absoluto con programación y JavaScript

### 📘 Etapa 1: Fundamentos ES2023 (Semanas 11–22)
**96 horas totales** — JavaScript moderno: sintaxis ES2023, POO, módulos

### 📗 Etapa 2: Intermedio + Avanzado (Semanas 23–34)
**96 horas totales** — Asincronía, DOM, APIs REST, testing y patrones

---

## 📚 Contenido Semanal Detallado

---

### 🟪 ETAPA 0: FUNDAMENTOS DE PROGRAMACIÓN (Semanas 1–10)

> El estudiante no tiene experiencia previa. Se enseña qué es programar antes de introducir
> cualquier característica específica de ES2023. Se usa Node.js como entorno de ejecución
> (consola), sin HTML ni CSS, para mantener el foco en lógica pura.

---

#### ✅ **Week 01: ¿Qué es programar? Mi primer JavaScript**
**Estado**: Completada
**Horas**: 8h (2.5h teoría + 3h práctica + 2h proyecto + 0.5h recursos)

**Temas**:
- ¿Qué es un programa? El ciclo Entrada → Proceso → Salida
- ¿Para qué sirve JavaScript?
- Entorno de desarrollo: VS Code + Node.js + terminal
- `console.log()` y variantes (`warn`, `error`, `table`)
- Comentarios de una línea y multilínea
- Tipos primitivos: `string`, `number`, `boolean`
- Operador `typeof`
- Literales vs expresiones

**Proyecto**: `mi-presentacion.js` — datos personales usando solo `console.log()`

---

#### **Week 02: Variables y Tipos de Datos**
**Horas**: 8h (2.5h teoría + 3h práctica + 2h proyecto + 0.5h recursos)

**Temas**:
- `const` vs `let` — cuándo usar cada uno
- Por qué NO usar `var`
- Tipos primitivos completos: `string`, `number`, `boolean`, `null`, `undefined`
- `typeof` para todos los tipos (incluyendo `typeof null === 'object'`)
- Conversiones explícitas: `Number()`, `String()`, `Boolean()`
- Reglas de nomenclatura: camelCase, nombres descriptivos
- Numeric separators `1_000_000` (ES2021)

**Proyecto**: `ficha-personal.js` — tarjeta de datos con tipos y conversiones

---

#### **Week 03: Operadores y Expresiones**
**Horas**: 8h (2.5h teoría + 3h práctica + 2h proyecto + 0.5h recursos)

**Temas**:
- Operadores aritméticos: `+`, `-`, `*`, `/`, `%`, `**`
- Operadores de asignación: `=`, `+=`, `-=`, `*=`, `/=`
- Operadores de comparación: `===`, `!==`, `>`, `<`, `>=`, `<=`
  - Por qué usar `===` en lugar de `==`
- Operadores lógicos: `&&`, `||`, `!`
- Orden de precedencia
- Coerción de tipos implícita (qué es y por qué evitarla)

**Proyecto**: `calculadora.js` — calculadora multi-operación con `console.log()`

---

#### **Week 04: Strings — Texto y Template Literals**
**Horas**: 8h (2.5h teoría + 3h práctica + 2h proyecto + 0.5h recursos)

**Temas**:
- Propiedades: `.length`
- Métodos: `.toUpperCase()`, `.toLowerCase()`, `.trim()`, `.includes()`, `.startsWith()`, `.endsWith()`
- `.indexOf()`, `.slice()`, `.replace()`, `.split()`, `.repeat()`
- Template literals — interpolación y multilínea
- Secuencias de escape: `\n`, `\t`, `\\`, `\"`
- Concatenación vs template literals

**Proyecto**: `generador-mensajes.js` — sistema de mensajes personalizados con template literals

---

#### **Week 05: Condicionales**
**Horas**: 8h (2.5h teoría + 3h práctica + 2h proyecto + 0.5h recursos)

**Temas**:
- `if`, `else if`, `else`
- Operador ternario `? :`
- `switch` statement
- Operadores lógicos como condicionales: `&&`, `||`
- Nullish coalescing `??` (ES2020) — primer ES moderno introducido
- Optional chaining `?.` (ES2020)
- Truthiness y falsy values

**Proyecto**: `clasificador.js` — sistema de clasificación con múltiples condiciones

---

#### **Week 06: Bucles — Repetición**
**Horas**: 8h (2.5h teoría + 3h práctica + 2h proyecto + 0.5h recursos)

**Temas**:
- `for` clásico
- `while` y `do...while`
- `for...of` — iteración por valor
- `break` y `continue`
- Bucles anidados
- Contadores y acumuladores

**Proyecto**: `juego-numeros.js` — mini juego de adivinanza con contador de intentos

---

#### **Week 07: Funciones**
**Horas**: 8h (2.5h teoría + 3h práctica + 2h proyecto + 0.5h recursos)

**Temas**:
- Declaración de función (`function nombre()`)
- Parámetros y argumentos
- `return`
- Arrow functions `=>` — sintaxis moderna preferida
- Parámetros por defecto
- Funciones como valores (callbacks básicos)
- Scope: local vs global
- Funciones puras — concepto

**Proyecto**: `utilidades.js` — librería de funciones reutilizables para el dominio asignado

---

#### **Week 08: Arrays — Listas de Datos**
**Horas**: 8h (2.5h teoría + 3h práctica + 2h proyecto + 0.5h recursos)

**Temas**:
- Crear y acceder arrays: `[]`, índices, `.length`
- `.push()`, `.pop()`, `.shift()`, `.unshift()`
- `.at()` para índices negativos (ES2022)
- `.includes()`, `.indexOf()`
- `.slice()`, `.splice()`
- Iteración: `for...of`, `.forEach()`
- `.map()`, `.filter()`, `.find()` — introducción
- Spread operator `...` con arrays

**Proyecto**: `inventario.js` — gestión de inventario del dominio asignado

---

#### **Week 09: Objetos — Datos Estructurados**
**Horas**: 8h (2.5h teoría + 3h práctica + 2h proyecto + 0.5h recursos)

**Temas**:
- Crear objetos literales `{}`
- Acceso con punto `.` y corchetes `[]`
- Métodos de objeto
- `Object.keys()`, `Object.values()`, `Object.entries()`
- `Object.hasOwn()` (ES2022) — verificar propiedades
- `for...in` para iterar propiedades
- Spread con objetos `{ ...obj }`
- Arrays de objetos

**Proyecto**: `catalogo.js` — catálogo de elementos del dominio asignado (array de objetos)

---

#### **Week 10: Proyecto Integrador — Etapa 0**
**Horas**: 8h (1h revisión + 1.5h planning + 5h desarrollo + 0.5h presentación)

**Temas**:
- Revisión de Semanas 1–9
- Diseño de solución (pseudocódigo y estructura)
- Integración de variables, funciones, arrays, objetos y condicionales

**Proyecto**: Aplicación de consola completa del dominio asignado — integra todos los fundamentos

---

### 📘 ETAPA 1: FUNDAMENTOS ES2023 (Semanas 11–22)

> El estudiante ya conoce los fundamentos. Se introduce la sintaxis moderna de JavaScript
> (ES6+→ES2023) con profundidad y se trabaja sobre Node.js y módulos.

---

#### **Week 11: JavaScript Moderno — Repaso y Profundización**
**Horas**: 8h (2.5h teoría + 3h práctica + 2h proyecto + 0.5h recursos)

**Temas**:
- Scope de bloque con `const`/`let` (profundización)
- Arrow functions avanzadas (this context, diferencias con function)
- Destructuring de arrays y objetos
- Alias y valores por defecto en destructuring
- Logical assignment operators `??=`, `||=`, `&&=` (ES2021)
- Short-circuit evaluation

**Proyecto**: Refactorización de soluciones de Etapa 0 usando sintaxis moderna

---

#### **Week 12: Spread, Rest y Métodos Avanzados de Arrays**
**Horas**: 8h (2.5h teoría + 3h práctica + 2h proyecto + 0.5h recursos)

**Temas**:
- Spread `...` en arrays y objetos (profundización)
- Rest parameters `...args`
- `.reduce()` — acumulación y transformación
- `.some()`, `.every()`
- `.flat()`, `.flatMap()` (ES2019)
- `Object.fromEntries()` (ES2019)
- Chaining de métodos de array

**Proyecto**: Procesador de datos con chaining complejo del dominio asignado

---

#### **Week 13: Clases y Programación Orientada a Objetos**
**Horas**: 8h (2.5h teoría + 3h práctica + 2h proyecto + 0.5h recursos)

**Temas**:
- `class`, `constructor`
- Métodos de instancia y estáticos
- Herencia: `extends`, `super`
- Getters y setters
- Private fields `#` (ES2022)
- Static blocks (ES2022)
- Cuándo usar clases vs objetos literales

**Proyecto**: Modelado orientado a objetos del dominio asignado

---

#### **Week 14: Módulos ES2023**
**Horas**: 8h (2.5h teoría + 3h práctica + 2h proyecto + 0.5h recursos)

**Temas**:
- `import` / `export` — named y default
- Re-exports y alias
- `import.meta`
- Dynamic imports `import()` (ES2020)
- Top-level await en módulos (ES2022)
- Organización de proyectos en módulos

**Proyecto**: Aplicación multi-módulo del dominio asignado

---

#### **Week 15: Arrays Avanzados — ES2023**
**Horas**: 8h (2.5h teoría + 3h práctica + 2h proyecto + 0.5h recursos)

**Temas**:
- `findLast()` y `findLastIndex()` (ES2023)
- `toSorted()`, `toReversed()`, `toSpliced()`, `with()` (ES2023)
- `sort()` vs `toSorted()` — mutabilidad vs inmutabilidad
- `Array.from()`, `Array.of()`
- Ordenamiento personalizado con comparadores
- Transformaciones complejas (chaining avanzado)

**Proyecto**: Dashboard de análisis de datos del dominio asignado

---

#### **Week 16: Strings y RegExp Modernos**
**Horas**: 8h (2.5h teoría + 3h práctica + 2h proyecto + 0.5h recursos)

**Temas**:
- `replaceAll()` (ES2021)
- `trimStart()`, `trimEnd()` (ES2019)
- Template literals avanzados (tagged templates)
- RegExp básica: patrones, flags `g`, `i`, `m`
- `matchAll()`, `match()`, `test()`
- Regex `/d` flag para índices (ES2022)
- Grupos de captura nombrados

**Proyecto**: Validador y procesador de texto del dominio asignado

---

#### **Week 17: Sets y Maps**
**Horas**: 8h (2.5h teoría + 3h práctica + 2h proyecto + 0.5h recursos)

**Temas**:
- `Set` — colección de valores únicos
- `Map` — pares clave-valor de cualquier tipo
- `WeakSet` y `WeakMap`
- Symbols como claves de WeakMap (ES2023)
- Conversión entre estructuras
- Casos de uso: deduplicación, caché, registros

**Proyecto**: Sistema de datos únicos del dominio asignado

---

#### **Week 18: Iteradores y Generadores**
**Horas**: 8h (2.5h teoría + 3h práctica + 2h proyecto + 0.5h recursos)

**Temas**:
- Protocolo de iteración (`Symbol.iterator`)
- `for...of` en profundidad
- Generadores (`function*`) y `yield`
- Delegación de generadores (`yield*`)
- Iterables personalizados
- Casos de uso: paginación, streams de datos

**Proyecto**: Paginador de datos del dominio asignado

---

#### **Week 19: Símbolos y Metaprogramación**
**Horas**: 8h (2.5h teoría + 3h práctica + 2h proyecto + 0.5h recursos)

**Temas**:
- `Symbol` — identificadores únicos
- Well-known symbols (`Symbol.iterator`, `Symbol.toStringTag`, `Symbol.hasInstance`)
- `Object.getOwnPropertySymbols()`
- `Proxy` — interceptar operaciones
- `Reflect` — operaciones de reflexión
- Casos de uso: validación reactiva, observadores

**Proyecto**: Sistema de validación reactiva del dominio asignado

---

#### **Week 20: Manejo de Errores Moderno**
**Horas**: 8h (2.5h teoría + 3h práctica + 2h proyecto + 0.5h recursos)

**Temas**:
- `try...catch...finally`
- Optional catch binding `catch {}` (ES2019)
- Tipos de errores built-in (`TypeError`, `RangeError`, `SyntaxError`, etc.)
- Errores personalizados (`class MyError extends Error`)
- Error cause `new Error('msg', { cause })` (ES2022)
- Manejo de errores como valores (resultado vs excepción)

**Proyecto**: Sistema robusto con manejo de errores del dominio asignado

---

#### **Week 21: Closures, Scope Avanzado y Patrones Funcionales**
**Horas**: 8h (2.5h teoría + 3h práctica + 2h proyecto + 0.5h recursos)

**Temas**:
- Scope léxico en profundidad
- Closures — qué son y para qué sirven
- Función como valor: callbacks, HOF (Higher-Order Functions)
- Currying y composición básica
- Inmutabilidad como principio
- `globalThis` (ES2020)

**Proyecto**: Librería de utilidades funcionales del dominio asignado

---

#### **Week 22: Proyecto Integrador — Etapa 1**
**Horas**: 8h (0.5h teoría + 1.5h planning + 5.5h desarrollo + 0.5h presentación)

**Temas**:
- Integración de Semanas 11–21
- Arquitectura modular con ES2023
- POO + funcional: cuándo usar cada paradigma

**Proyecto**: Aplicación completa de consola (Node.js) del dominio asignado — módulos, clases, manejo de errores, arrays ES2023

---

### 📗 ETAPA 2: INTERMEDIO + AVANZADO (Semanas 23–34)

> Se introduce programación asincrónica, DOM, APIs REST, storage local y testing.
> En esta etapa las aplicaciones son interactivas (navegador).

---

#### **Week 23: Programación Asincrónica — Callbacks y Promises**
**Horas**: 8h (2.5h teoría + 3h práctica + 2h proyecto + 0.5h recursos)

**Temas**:
- El event loop y el modelo asincrónico de JS
- Callbacks — callback hell y sus problemas
- Promises: `then()`, `catch()`, `finally()`
- Promise chaining
- `Promise.all()`, `Promise.race()`
- `Promise.allSettled()` (ES2020)
- `Promise.any()` y `AggregateError` (ES2021)

**Proyecto**: Simulador de operaciones asíncronas del dominio asignado

---

#### **Week 24: Async/Await**
**Horas**: 8h (2.5h teoría + 3h práctica + 2h proyecto + 0.5h recursos)

**Temas**:
- `async function` y `await`
- Manejo de errores con `try/catch`
- Ejecución paralela vs secuencial
- Top-level await en módulos (ES2022)
- `for await...of` para iterables asíncronos
- Antipatrones con async/await

**Proyecto**: Sistema de carga de datos asíncrona del dominio asignado

---

#### **Week 25: Fetch API y APIs REST**
**Horas**: 8h (2.5h teoría + 3h práctica + 2h proyecto + 0.5h recursos)

**Temas**:
- Fetch API: `fetch()`, `Request`, `Response`
- Headers y configuración
- Manejo de JSON: `response.json()`
- Métodos HTTP: GET, POST, PUT, PATCH, DELETE
- RESTful APIs — convenciones
- CRUD completo con `fetch`
- Error handling en fetch (network error vs HTTP error)
- `AbortController` para cancelar requests

**Proyecto**: Consumidor de API REST pública del dominio asignado

---

#### **Week 26: DOM Moderno**
**Horas**: 8h (2.5h teoría + 3h práctica + 2h proyecto + 0.5h recursos)

**Temas**:
- `querySelector`, `querySelectorAll`
- `createElement`, `append`, `remove`, `replaceWith`
- `classList` API: `add`, `remove`, `toggle`, `contains`
- `textContent` vs `innerHTML`
- `dataset` — atributos `data-*`
- Template `<template>` element
- Manipulación del DOM de forma eficiente

**Proyecto**: Interfaz dinámica del dominio asignado (renderizado desde JS)

---

#### **Week 27: Eventos del DOM**
**Horas**: 8h (2.5h teoría + 3h práctica + 2h proyecto + 0.5h recursos)

**Temas**:
- `addEventListener` y `removeEventListener`
- Event bubbling y capturing
- Event delegation
- `CustomEvent` — eventos personalizados
- `preventDefault()` y `stopPropagation()`
- Eventos de teclado, mouse, formularios
- Debounce y throttle para eventos frecuentes

**Proyecto**: Interfaz interactiva con eventos del dominio asignado

---

#### **Week 28: Web Storage y Persistencia**
**Horas**: 8h (2.5h teoría + 3h práctica + 2h proyecto + 0.5h recursos)

**Temas**:
- `localStorage` y `sessionStorage`
- `JSON.stringify()` / `JSON.parse()`
- IndexedDB básico
- Manejo de cuotas y límites
- Sincronización de estado UI ↔ storage
- FormData API + validación

**Proyecto**: Aplicación con persistencia local del dominio asignado

---

#### **Week 29: Programación Funcional**
**Horas**: 8h (2.5h teoría + 3h práctica + 2h proyecto + 0.5h recursos)

**Temas**:
- Principios: inmutabilidad, funciones puras, sin efectos secundarios
- Composición de funciones y pipe
- Currying y partial application
- Optional pattern (manejo de null sin excepciones)
- Programación declarativa vs imperativa
- Aplicación práctica con arrays y objetos

**Proyecto**: Procesador de datos funcional del dominio asignado

---

#### **Week 30: Performance y Debugging**
**Horas**: 8h (2.5h teoría + 3h práctica + 2h proyecto + 0.5h recursos)

**Temas**:
- Chrome DevTools: Sources, Network, Performance
- Breakpoints, watch expressions, call stack
- `console` avanzado: `time()`, `group()`, `profile()`
- Memory leaks — identificación y solución
- Lazy loading de recursos
- Performance API (`performance.now()`, `PerformanceObserver`)

**Proyecto**: Diagnóstico y optimización de aplicación del dominio asignado

---

#### **Week 31: Testing con Jest**
**Horas**: 8h (2.5h teoría + 3.5h práctica + 1.5h proyecto + 0.5h recursos)

**Temas**:
- ¿Qué es testing y por qué importa?
- Jest: instalación con `pnpm`, configuración
- Unit tests: `describe`, `test`, `expect`
- Matchers: `toBe`, `toEqual`, `toContain`, `toThrow`
- Testing de código asíncrono
- Mocking básico
- Code coverage básico

**Proyecto**: Suite de tests para módulos del dominio asignado

---

#### **Week 32: Patrones de Diseño**
**Horas**: 8h (2.5h teoría + 3h práctica + 2h proyecto + 0.5h recursos)

**Temas**:
- Patrones creacionales: Singleton, Factory
- Patrones estructurales: Module, Decorator
- Patrones de comportamiento: Observer, Strategy
- Cuándo aplicar cada patrón
- Antipatrones comunes en JavaScript

**Proyecto**: Refactorización usando patrones del dominio asignado

---

#### **Week 33: Clean Code y Mejores Prácticas**
**Horas**: 8h (2.5h teoría + 3h práctica + 2h proyecto + 0.5h recursos)

**Temas**:
- Principios SOLID en JavaScript
- Nombres significativos
- Funciones pequeñas con una responsabilidad
- Early returns y evitar anidamiento profundo
- Code smells y refactoring
- ESLint + Prettier — configuración
- Code review: qué buscar

**Proyecto**: Auditoría y refactorización de proyecto anterior

---

#### **Week 34: Proyecto Final — Bootcamp**
**Horas**: 8h (0h teoría + 2h planning + 5.5h desarrollo + 0.5h presentación)

**Temas**:
- Consolidación de todo lo aprendido (Etapas 0–2)
- Arquitectura completa y modular
- Testing con Jest
- Clean code, performance y debugging
- Documentación con README profesional

**Proyecto**: Aplicación completa del dominio asignado — nivel Junior profesional

---

## 📊 Resumen por Competencias

### Fundamentos de Programación (Etapa 0)
- Lógica y algoritmos básicos (S01–S03)
- Manejo de texto y condiciones (S04–S05)
- Bucles y funciones (S06–S07)
- Estructuras de datos: arrays y objetos (S08–S09)

### JavaScript Moderno ES2023 (Etapa 1)
- Sintaxis moderna: destructuring, spread, arrow functions (S11)
- Métodos avanzados de arrays (S12, S15)
- POO con clases y campos privados (S13)
- Módulos y arquitectura modular (S14)
- Strings, Sets, Maps, Iteradores (S16–S18)
- Metaprogramación y errores (S19–S20)
- Closures y funcional básico (S21)

### Programación Asincrónica (Etapa 2)
- Promises y async/await (S23–S24)
- Fetch API y REST CRUD (S25)

### DOM y Browser APIs (Etapa 2)
- DOM manipulation (S26)
- Event handling (S27)
- Web Storage + FormData (S28)

### Calidad y Arquitectura (Etapa 2)
- Programación funcional (S29)
- Performance y debugging (S30)
- Testing con Jest (S31)
- Patrones de diseño (S32)
- Clean code y SOLID (S33)

---

## 📋 Estado de Avance

| Semana | Título | Estado |
|--------|--------|--------|
| S01 | ¿Qué es programar? Mi primer JavaScript | ✅ Completada |
| S02 | Variables y Tipos de Datos | ⏳ Pendiente |
| S03 | Operadores y Expresiones | ⏳ Pendiente |
| S04 | Strings y Template Literals | ⏳ Pendiente |
| S05 | Condicionales | ⏳ Pendiente |
| S06 | Bucles | ⏳ Pendiente |
| S07 | Funciones | ⏳ Pendiente |
| S08 | Arrays | ⏳ Pendiente |
| S09 | Objetos | ⏳ Pendiente |
| S10 | Proyecto Integrador Etapa 0 | ⏳ Pendiente |
| S11 | JavaScript Moderno — Repaso y Profundización | ⏳ Pendiente |
| S12 | Spread, Rest y Métodos Avanzados de Arrays | ⏳ Pendiente |
| S13 | Clases y POO | ⏳ Pendiente |
| S14 | Módulos ES2023 | ⏳ Pendiente |
| S15 | Arrays Avanzados ES2023 | ⏳ Pendiente |
| S16 | Strings y RegExp Modernos | ⏳ Pendiente |
| S17 | Sets y Maps | ⏳ Pendiente |
| S18 | Iteradores y Generadores | ⏳ Pendiente |
| S19 | Símbolos y Metaprogramación | ⏳ Pendiente |
| S20 | Manejo de Errores Moderno | ⏳ Pendiente |
| S21 | Closures, Scope Avanzado y Patrones Funcionales | ⏳ Pendiente |
| S22 | Proyecto Integrador Etapa 1 | ⏳ Pendiente |
| S23 | Programación Asincrónica — Callbacks y Promises | ⏳ Pendiente |
| S24 | Async/Await | ⏳ Pendiente |
| S25 | Fetch API y APIs REST | ⏳ Pendiente |
| S26 | DOM Moderno | ⏳ Pendiente |
| S27 | Eventos del DOM | ⏳ Pendiente |
| S28 | Web Storage y Persistencia | ⏳ Pendiente |
| S29 | Programación Funcional | ⏳ Pendiente |
| S30 | Performance y Debugging | ⏳ Pendiente |
| S31 | Testing con Jest | ⏳ Pendiente |
| S32 | Patrones de Diseño | ⏳ Pendiente |
| S33 | Clean Code y Mejores Prácticas | ⏳ Pendiente |
| S34 | Proyecto Final — Bootcamp | ⏳ Pendiente |

---

_Última actualización: Marzo 2026_
_Versión: 2.0 — Reestructuración zero-to-hero_
