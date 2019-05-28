import Home from "../containers/Page/Home/Home";
import BrandList from "../containers/Shop/BrandList";
import StaticPage from "../containers/Page/StaticPage";
import Offers from "../containers/Shop/Offers";
import ProductDetail from "../containers/Shop/ProductDetail";
import Auth from "../containers/Auth/Auth";
import Dashboard from "../containers/Dashboard/Dashboard";
import SingleBrand from "../containers/Shop/SingleBrand";
import SingleCategory from "../containers/Shop/SingleCategory";
import CategoryList from "../containers/Shop/CategoryList";
import Cart from "../containers/Shop/Cart";
import SearchPage from "../containers/Search/SearchPage";

const PageList = {
    home:{
        component: Home,
        path: "/",
    },
    about:{
        component: StaticPage,
        path: "/about",
    },
    delivery:{
        component: StaticPage,
        path: "/delivery",
    },
    contacts:{
        component: StaticPage,
        path: "/contacts",
    },
    offers:{
        component: Offers,
        path: "/shop/offers",
    },
    brandList:{
        component: BrandList,
        path: "/shop/brands",
    },
    product:{
        component: ProductDetail,
        path: "/shop/products/:product",
    },
    auth:{
        component: Auth,
        path: "/auth",
    },
    dashboard:{
        component: Dashboard,
        path: "/dashboard",
    },
    singleBrand:{
        component: SingleBrand,
        path: "/shop/brands/:brand",
    },
    singleCategory:{
        component: SingleCategory,
        path: "/shop/categories/:category",
    },
    categoryList:{
        component: CategoryList,
        path: "/shop",
    },
    cart:{
        component: Cart,
        path: "/cart",
    }
    ,
    searchPage:{
        component: SearchPage,
        path: "/search",
    }
};

export { PageList };