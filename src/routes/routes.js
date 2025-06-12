// layouts
import DefaultLayout from '../../layouts/Default.vue';


export default [
  {
    path: '/',
    component: DefaultLayout,
    redirect: '/dashboard',
    children: [
      {
        path: '/dashboard',
        name: 'dashboard',
        component: () => import('../pages/Dashboard')
      }
    ]
  },
  {
    path: '*',          // هر آدرسی که تعریف نشده باشه
    redirect: '/dashboard'  // هدایت به /dashboard
  }
]