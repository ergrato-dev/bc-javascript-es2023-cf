// eslint.config.js — Configuración ESLint (flat config, ESLint 10.x)
import js from "@eslint/js";
import globals from "globals";

export default [
  // Archivos a ignorar
  {
    ignores: [
      "node_modules/**",
      "**/3-proyecto/solution/**",
      "**/3-proyecto/solutions/**",
    ],
  },

  // Configuración base para scripts del proyecto
  {
    files: ["_scripts/**/*.js"],
    languageOptions: {
      ecmaVersion: 2023,
      sourceType: "module",
      globals: {
        ...globals.node,
      },
    },
    rules: {
      ...js.configs.recommended.rules,
      "no-console": "off",
      "no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
    },
  },

  // Configuración para el código del bootcamp (ejercicios y proyectos)
  {
    files: ["bootcamp/**/*.js"],
    languageOptions: {
      ecmaVersion: 2023,
      sourceType: "module",
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    rules: {
      ...js.configs.recommended.rules,
      // Estas reglas están relajadas intencionalmente para no bloquear
      // a estudiantes que están aprendiendo
      "no-console": "off",
      "no-unused-vars": "warn",
      "no-undef": "warn",
    },
  },
];
