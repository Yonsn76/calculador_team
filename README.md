# 🧮 Calculadora en React con Vite

Este proyecto es una **calculadora funcional** creada con **React + Vite** como ejercicio colaborativo entre estudiantes de desarrollo web.

---

## 👥 Equipo y responsabilidades

* **Jordy** → Lógica y estado de la calculadora (`CalculatorLogic.js`)
* **Mila** → Diseño visual y estructura de botones (`Calculator.css`)
* **Juan** → Componente reutilizable de botones (`Button.jsx`)
* **Yonsn** → Integración final y pruebas (`Calculator.jsx`, `App.jsx`)

---

## 🚀 Tecnologías utilizadas

* [React](https://reactjs.org/)
* [Vite](https://vitejs.dev/)
* JavaScript (ES6+)
* CSS o TailwindCSS (opcional)

---

## 📁 Estructura del proyecto

```
src/
├── components/
│   ├── Button.jsx         # Componente de botón reutilizable
│   └── Calculator.jsx     # Componente principal de calculadora
├── logic/
│   └── CalculatorLogic.js # Lógica de operaciones matemáticas
├── styles/
│   └── Calculator.css     # Estilos visuales base
├── App.jsx                # Integración general
└── main.jsx               # Punto de entrada
```

---

## ✅ Funcionalidades principales

* Suma, resta, multiplicación y división
* Botón de igual (=) para obtener el resultado
* Botón para limpiar (C o AC)
* Validación de expresiones
* Interfaz amigable y responsive

---

## 🛠️ Cómo ejecutar el proyecto

1. Clona el repositorio:

```bash
git clone https://github.com/Yonsn76/calculador_team.git
```

2. Entra al directorio:

```bash
cd calculador_team
```

3. Instala las dependencias:

```bash
npm install
```

4. Ejecuta en modo desarrollo:

```bash
npm run dev
```

---

## 🌿 Flujo de trabajo con Git (crear ramas)

Cada integrante debe crear su propia rama con su nombre:

```bash
# Asegúrate de estar en main actualizado
git checkout main

# Crea y cambia a tu rama
git checkout -b jordy        # ejemplo para Jordy
```

Después de realizar cambios:

```bash
git add .
git commit -m "Tu mensaje descriptivo"
git push origin jordy        # cambia 'jordy' por tu rama
```

Cuando se termine una parte, se puede hacer un pull request desde GitHub para revisar e integrar en `main`.

---

## 💬 Notas finales

Este proyecto es parte de una práctica colaborativa para fortalecer habilidades en:

* Componentización en React
* Trabajo en equipo con ramas
* Control de versiones con Git y GitHub

¡Gracias por visitar nuestro repositorio! 💻✨
