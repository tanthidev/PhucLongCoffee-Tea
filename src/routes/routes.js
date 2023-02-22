import Home from '~/pages/Home';
import Cafe from '~/pages/Cafe';
import ThucUong from '~/pages/ThucUong';
import Tra from '~/pages/Tra';

//Public Routes
const publicRoutes = [
    {
        path: '/',
        component: Home,
    },
    {
        path: '/cafe',
        component: Cafe,
    },
    {
        path: '/thuc-uong',
        component: ThucUong,
    },
    {
        path: '/tra',
        component: Tra,
    },
];


export default publicRoutes;