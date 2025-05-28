/*
 * @Author: Chunguang Jin 13454759@qq.com
 * @Date: 2025-05-26 17:36:15
 * @LastEditors: Chunguang Jin 13454759@qq.com
 * @LastEditTime: 2025-05-28 16:27:01
 * @FilePath: /华东2/mydemo/src/router/index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    redirect: "/ai",
  },
  {
    path: "/3d",
    name: "3D",

    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "3D" */ "../views/3D/index.vue"),
  },
  {
    path: "/ai",
    name: "AI",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "AI" */ "../views/AI/index.vue"),
  },
  {
    path: "/threejs",
    name: "Threejs",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "Threejs" */ "../views/Threejs/index.vue"),
  },
  {
    path: "/web3",
    name: "Web3",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "Web3" */ "../views/Web3/index.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
