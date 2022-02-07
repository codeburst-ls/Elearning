const routes = [
  {
    path: "/",
    component: () => import("layouts/HomeLayout.vue"),
    children: [
      { path: "", component: () => import("pages/Home.vue"), name: "homepage" },
      {
        path: "create-school",
        component: () => import("pages/CreateSchool.vue"),
        name: "create-school",
      },
    ],
  },
  {
    path: "/dashboard",
    component: () => import("layouts/MainLayout.vue"),
    meta: { requireAuth: true },
    children: [
      {
        path: "",
        component: () => import("pages/dashboard/Index.vue"),
        name: "index",
      },
      {
        path: "posts",
        component: () => import("pages/dashboard/Posts.vue"),
        name: "posts",
      },
      {
        path: "chats",
        component: () => import("pages/dashboard/Chats.vue"),
        name: "chats",
      },
      {
        path: "timetable",
        component: () => import("pages/dashboard/TimeTable.vue"),
        name: "timeTable",
      },
      {
        path: "lifemeetings",
        component: () => import("pages/dashboard/LifeMeetings.vue"),
        name: "lifeMeetings",
      },
      {
        path: "schoolcalendar",
        component: () => import("pages/dashboard/SchoolCalendar.vue"),
        name: "schoolCalendar",
      },
      {
        path: "teachers",
        component: () => import("pages/dashboard/Teachers.vue"),
        name: "teachers",
      },
      {
        path: "students",
        component: () => import("src/pages/dashboard/Students.vue"),
        name: "students",
      },
      {
        path: "admins",
        component: () => import("pages/dashboard/Admins.vue"),
        name: "admins",
      },
      {
        path: "userprofile",
        component: () => import("pages/dashboard/users/UserProfile.vue"),
        name: "userProfile",
      },
      {
        path: "createuser",
        component: () => import("pages/dashboard/users/CreateUser.vue"),
        name: "createUser",
      },

      {
        path: "courses",
        component: () => import("pages/dashboard/Courses.vue"),
        name: "courses",
      },
    ],
  },
  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/Error404.vue"),
  },
];

export default routes;
