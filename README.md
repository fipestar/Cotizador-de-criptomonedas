<div align="center">

# Cotizador de Criptomonedas

Aplicación React + TypeScript que consume la API pública de **CryptoCompare** para cotizar pares de criptomoneda vs moneda fiat. El foco del proyecto está en validar el contrato de datos con **Zod** y manejar el estado global con **Zustand**.

</div>

## ✨ Características principales

- Cotización en tiempo real de las 20 criptomonedas con mayor capitalización.
- Búsqueda de pares formada por moneda fiat + criptomoneda.
- Validación robusta de las respuestas HTTP mediante **Zod**, evitando renders con datos incompletos.
- Manejo global del estado, cargas y errores con un store de **Zustand** minimalista.
- Indicador visual de carga (spinner) con retardo mínimo de 1 s para mejorar la experiencia de usuario.
- Maquetación responsiva con CSS puro.

## 🛠️ Stack y dependencias

- `React 18` + `Vite` + `TypeScript`
- `Zustand` para el estado global y side effects asincrónicos.
- `Zod` para validar: listado de criptos, pares seleccionados y cotizaciones.
- `Axios` para el consumo de la API de CryptoCompare.
- `CSS` modularizado (spinner + estilos globales).

## 📂 Estructura relevante

```
src/
 ├─ components/
 │   ├─ CriptoSearchFrom.tsx      # Formulario controlado
 │   ├─ CryptoPriceDispaly.tsx    # Resultado + spinner
 │   └─ Spinner.tsx               # Indicador de carga
 ├─ services/CryptoService.ts     # Llamadas HTTP (axios)
 ├─ schema/crypto-schema.ts       # Validaciones Zod
 ├─ store.ts                      # Store de Zustand
 └─ types/                        # Tipados derivados de Zod
```

## 🚀 Cómo ejecutar el proyecto

1. **Requisitos previos**
   - Node.js >= 18
   - npm (incluido con Node)

2. **Instalar dependencias**
   ```bash
   npm install
   ```

3. **Levantar el entorno de desarrollo**
   ```bash
   npm run dev
   ```
   Abre la URL que Vite imprime en consola (por defecto `http://localhost:5173`).

4. **Build de producción**
   ```bash
   npm run build
   npm run preview
   ```

## 🧠 Decisiones técnicas destacadas

- **Separación de responsabilidades**: los servicios HTTP solo retornan datos validados. Si Zod rechaza la respuesta, se evita propagar estados inconsistentes.
- **Zustand + acciones puras**: el store se encarga de orquestar loading states, retrasar el spinner y exponer acciones simples al resto de la app.
- **UI declarativa**: `CryptoPriceDispaly` muestra el spinner o la cotización según el estado derivado (`loading` y `result`).

## 📌 Mejoras futuras

- Manejo explícito de errores de red y mensajes para el usuario.
- Internacionalización del formato de números y fechas.
- Tests unitarios para el store y los esquemas Zod.

---

¿Tienes sugerencias o encontraste un bug? ¡Abre un issue o envía un PR! 😊
