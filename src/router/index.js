import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    redirect: '/Home'
  },
  {
    path: '/Home',
    name: 'Home',
    component: () => import('views/Home/Home.vue')
  },
  {
    path: '/Forum',
    name: 'Forum',
    component: () => import('views/Forum/Forum.vue'),
    children: [
      {
        path:'',
        redirect: '/Forum/huoyue'

      },
      {
        path: 'huoyue',
        name: 'huoyue',

        component: () => import('components/Forum_com/huoyue.vue')
      },
      {
        path: 'zuixin',
        name: 'zuixin',
        component: () => import('components/Forum_com/zuixin.vue')
      },
      {
        path: 'zhoubang',
        name: 'zhoubang',
        component: () => import('components/Forum_com/zhoubang.vue')
      },
      {
        path: 'yuebang',
        name: 'yuebang',
        component: () => import('components/Forum_com/yuebang.vue')
      },
      {
        path: 'wenda',
        name: 'wenda',
        component: () => import('components/Forum_com/wenda.vue')
      },
      {
        path: 'jiaoyou',
        name: 'jiaoyou',
        component: () => import('components/Forum_com/jiaoyou.vue')
      }
    ]

    
  },
  {
    path: '/User',
    name: 'User',
    component: () => import('views/User/User.vue')
  }

  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
