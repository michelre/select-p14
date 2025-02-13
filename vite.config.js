import { resolve } from 'path'
import { defineConfig } from 'vite'
import libCss from "vite-plugin-libcss";

export default defineConfig({
  plugins: [libCss()],
  build: {
    lib: {
      entry: resolve(__dirname, 'lib/main.js'),
      name: 'SelectP14',
      // the proper extensions will be added
      fileName: 'select-p14',
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: ['react', 'prop-types'],
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          react: 'React',
          'prop-types': 'PropTypes'          
        },
      },
    },
  },
})
