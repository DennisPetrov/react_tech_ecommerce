import Home from './components/home/home';
import Dashboard from './components/dashboard/dashboard';
import SignUp from './components/auth/SignUp';
import SignIn from './components/auth/SignIn';
import Cart from './components/cart/Cart';
import AboutPage from './components/static_pages/AboutPage';
import ContactsPage from './components/static_pages/ContactsPage';
import BrandList from './components/shop/brands/BrandList';
import CategoryList from './components/shop/categories/CategoryList';
import Offers from './components/shop/offers/offers';
import Category from './components/shop/categories/Category';
import ProductDetail from './components/shop/product/ProductDetail';
import Brand from './components/shop/brands/Brand';
import InnerPageTemplate from './components/templates/InnerPageTemplate';
import SearchResults from './components/SearchResults';



const PageList = [
    {
        component: Home,
        path: "/",
        exact: true,
    },
    {
        component: AboutPage,
        path: "/about",
        template:InnerPageTemplate,
    },
    {
        component: ContactsPage,
        path: "/contacts",
        template:InnerPageTemplate,
    },
    {
        component: Offers,
        path: "/shop/offers",
        template:InnerPageTemplate,
    },
    {
        component: BrandList,
        path: "/shop/brands",
        exact: true,
        template:InnerPageTemplate,
    },
    {
        component: ProductDetail,
        path: "/shop/categories/:category/:product",
        template:InnerPageTemplate,
        behavior:"product",
    },
    {
        component: SignIn,
        path: "/signin",
        template:InnerPageTemplate,
    },
    {
        component: Dashboard,
        path: "/dashboard",
        template:InnerPageTemplate,
    },
    {
        component: Brand,
        path: "/shop/brands/:brand",
        template:InnerPageTemplate,
        behavior:"brand"
    },
    {
        component: Category,
        path: "/shop/categories/:category",
        exact:true,
        template:InnerPageTemplate,
        behavior:"category",
    },
    {
        component: CategoryList,
        path: "/shop",
        template:InnerPageTemplate,
    },

    {
        component: SignUp,
        path: "/signup",
        template:InnerPageTemplate,
    },
    {
        component: Cart,
        path: "/cart",
        template:InnerPageTemplate,
    }
    ,
    {
        component: SearchResults,
        path: "/search",
        template:InnerPageTemplate,
        behavior:"search",
    }
];

export { PageList };