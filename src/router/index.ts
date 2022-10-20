import {
  createRouter as _createRouter,
  createMemoryHistory,
  createWebHistory,
} from "vue-router";

const pages = import.meta.glob("/src/pages/**/*.vue");
const routes = Object.keys(pages).map(createRoute);

function createRoute(path: any) {
  const name = path.match(/\/src\/pages\/(.*)\.vue$/)[1];
  return {
    path: `/${name}`,
    name,
    component: pages[path],
  };
}

// Let Vue Router handle the logic to determine how to do the routing, whereas you don't have to provide the logic for it

// This could be the router of your web app or the router for your Electron app. Pick the one you need.

export const createRouter = () =>
  _createRouter({
    // Both web and electron work with history mode
    history: import.meta.env.SSR ? createMemoryHistory() : createWebHistory(),
    routes: [
      // Allow navigating between the projects
      { path: "/", component: () => import("../App.vue") },
      {
        path: "/:pathMatch(.*)*",
        name: "not-found",
        component: () => import("../pages/404Page.vue"),
      },
    ],
    strict: true,
    scrollBehavior: () => ({ left: 0, top: 0 }),
  });
