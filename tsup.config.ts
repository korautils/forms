// tsup.config.ts
import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['cjs', 'esm'], // Salidas en CommonJS y ES Modules
  dts: true, // Habilitar la generación de archivos .d.ts
  sourcemap: true, // Habilitar mapas de fuente
  clean: true, // Limpiar el directorio de salida antes de la compilación
  treeshake: true, //Elimina código no utilizado
  minify: true,
  external: []
})
