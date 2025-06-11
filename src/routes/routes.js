// layouts
import DefaultLayout from '../../layouts/Default.vue';
export default [
    {
        path: '/',
        name: 'dashboard',
        component: () => import('../pages/Dashboard'),
        meta: {
            layout: DefaultLayout
        },
    },
]