// layouts
import DefaultLayout from '../../layouts/Default.vue';


export default [
  {
    path: '/',
    component: DefaultLayout,
    children: [
      {
        path: '/dashboard',
        name: 'dashboard',
        component: () => import('../pages/Dashboard')
      }
    ]
  },
]