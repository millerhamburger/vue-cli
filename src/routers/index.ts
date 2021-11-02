import { createRouter, createWebHashHistory } from 'vue-router'
import FormDesignRoutes from './formDesign'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [ ...FormDesignRoutes ]
})

export default router