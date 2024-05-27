import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue()
    //引入vant-ui
   
  ],
  resolve: {
    alias:{
      '@':path.resolve(__dirname,'src'),
    }
  },
  server:{
    host:true,
    proxy:{
      '/api':{
        target:'http://localhost:4000',
        changeOrigin:true,
      }
    }
    
  }
   
     
})
