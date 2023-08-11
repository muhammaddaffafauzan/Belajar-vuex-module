import { createWebHistory, createRouter } from "vue-router";
import Home from "@/views/Home.vue";
import User from "@/views/user/Index.vue";
import UserCreate from "@/views/user/Create.vue";
import Kai from "@/views/Kai.vue";
import Product from "@/views/Product.vue";
import SingleProduct from "@/views/SingleProduct.vue";
import Category from "@/views/Category.vue";
import FilterPageCategory from "@/views/FilterPageCategory.vue"
import Login from "@/views/Login.vue";
import  store  from "../store";
const routes = [
   {
     path: "/",
     name: "Home",
     component: Home,
},
{
path: "/users",
name: "User",
component: User,
meta: { requiresLogin: true },
},
{
  path: "/users/create",
  name: "UserCreate",
  component: UserCreate,
  meta: { requiresLogin: true },
  },
{
  path: "/kai",
  name: "Kai",
  component: Kai,
  },
  {
    path: "/product",
    name: "Product",
    component: Product,
    },
    {
      path: "/product/:id",
      name: "SingleProduct",
      component: SingleProduct,
      },
      {
        path: "/category",
        name: "Category",
        component: Category,
        },
        {
          path: "/category/:category",
          name: "FilterCategory",
          component: FilterPageCategory,
          },
        {
          path: "/login",
          name: "Login",
          component: Login,
          meta: { requiresGuest: true },
          },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

   router.beforeEach((to, from, next) => {
  if (to.meta.requiresGuest && store.getters["auth/isAuthenticated"]) {
    next("/");
  } else {
    next()
  }
});
 router.beforeEach((to, from, next) => {
  if (to.meta.requiresLogin && !store.getters["auth/isAuthenticated"]) {
    next("/login");
  } else {
    next()
  }
});

export default router;