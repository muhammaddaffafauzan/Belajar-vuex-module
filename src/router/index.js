import { createWebHistory, createRouter } from "vue-router";
import Home from "@/views/Home.vue";
import Users from "@/views/Users.vue";
import Kai from "@/views/Kai.vue"
const routes = [
   {
     path: "/",
     name: "Home",
     component: Home,
},
{
path: "/users",
name: "Users",
component: Users,
},
{
  path: "/kai",
  name: "Kai",
  component: Kai,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;