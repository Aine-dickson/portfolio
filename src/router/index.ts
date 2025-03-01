import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
        path: "/",
        name: "Home",
        component: () => import("@/App.vue"),
        children: [
            {
                path: '/',
                name: 'app',
                component: () => import("@/views/app.vue")
            }
        ]
    },
    {
        path: "/blogs",
        name: "blogs",  
        component: () => import("@/views/blogs/blog_area.vue"),
        children: [
            {
                path: ':id',
                name: 'blog',
                component: () => import("@/views/blogs/blog.vue")
            },
            {
                path: '/list',
                name: '/blog_list',
                component: () => import("@/views/blogs/list.vue")
            }
        ]
    }
  ]
});

export default router;