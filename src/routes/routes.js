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

    //Introduction

    // Hạt cà phê phúc long
    {
        path: '/cafe/hat-ca-phe-phuc-long',
        component: Introduction,
        data: dataIntro.hatCaPhePhucLong
    },
    // Hành trình tách cà phê đậm vị
    {
        path: '/cafe/hanh-trinh-tach-ca-phe-dam-vi',
        component: Introduction,
        data: dataIntro.hanhTrinhTachCaPheDamVi,
    },
    // Nghệ thuật pha chế Cà phê
    {
        path: '/cafe/nghe-thuat-pha-che',
        component: Introduction,
        data: dataIntro.ngheThuatPhaCheCafe
    },

    // Hành trình tách trà đậm vị
    {
        path: '/tra/hanh-trinh-tach-tra-dam-vi',
        component: Introduction,
        data: dataIntro.hanhTrinhTachTraDamVi,
    },

    //Lá trà phúc long
    {
        path: '/tra/la-tra-phuc-long',
        component: Introduction,
        data: dataIntro.latraphuclong
    },

    //Cold brew tea
    {
        path: '/tra/cold-brew-tea-phong-cach-moi',
        component: Introduction,
        data: dataIntro.coldbrewtea
    },

    //NGhệ thuật pha chế trà
    {
        path: '/tra/nghe-thuat-pha-che',
        component: Introduction,
        data: dataIntro.ngheThuatPhaCheTra
    }
];


export default publicRoutes;