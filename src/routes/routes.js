import Home from '~/pages/Home';
import Cafe from '~/pages/Cafe';
import ThucUong from '~/pages/ThucUong';
import Tra from '~/pages/Tra';
import Introduction from '~/pages/Introduction';
import { dataIntro } from '~/Data/data';
import NotFound from '~/components/NotFound';

//Public Routes
const publicRoutes = [
    // NOT FOUND
    {
        path: '*',
        component: NotFound
    },
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

    //Intro
    {
        path: '/cafe/hat-ca-phe-phuc-long',
        component: Introduction,
        data: dataIntro.hatCaPhePhucLong
    }
];


export default publicRoutes;