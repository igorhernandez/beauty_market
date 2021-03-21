import {Home, Products} from '../views/';
import {RouteNames} from './RouteNames';

const screens = {
  HOME: {
    name: RouteNames.HOME,
    component: Home,
    options: {headerShown: false},
  },
  PRODUCTS: {
    name: RouteNames.PRODUCTS,
    component: Products,
  },
};

export {screens};
