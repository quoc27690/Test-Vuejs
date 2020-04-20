// Define routes to component
// Phải tạo file này ở ngoài cùng thư mục chứa các components
import Home from "./components/Home";
import User from "./components/user/User";
import error404 from "./components/error404";
import UserBegin from "./components/user/UserBegin";
import UserDetails from "./components/user/UserDetails";
import UserEdit from "./components/user/UserEdit";
import Header from "./components/layouts/Header";

// Lazy Loading Routes: Thằng nào cần thì mới load
// Bắt buộc sử dụng promise vì ko thể nào biết khi nào cần load
// const User = resolve => {
//   require.ensure(
//     ["./components/user/User"],
//     () => {
//       resolve(require("./components/user/User"));
//     },
//     "user"
//   );
// };
// const UserBegin = resolve => {
//   require.ensure(
//     ["./components/user/UserBegin"],
//     () => {
//       resolve(require("./components/user/UserBegin"));
//     },
//     "user"
//   );
// };
// const UserDetails = resolve => {
//   require.ensure(
//     ["./components/user/UserDetails"],
//     () => {
//       resolve(require("./components/user/UserDetails"));
//     },
//     "user"
//   );
// };
// const UserEdit = resolve => {
//   require.ensure(
//     ["./components/user/UserEdit"],
//     () => {
//       resolve(require("./components/user/UserEdit"));
//     },
//     "user"
//   );
// };

export const routes = [
  // Làm điều kiện xuất hiện Header component - Multiple router-view. Phải là 'components' vì là số nhiều
  // { path: "/", name: "homepage", component: Home },
  {
    path: "/",
    name: "homepage",
    components: {
      default: Home,
      header: Header
    }
  },
  {
    path: "/user",
    name: "user",
    component: User,
    children: [
      { path: "", name: "userbegin", component: UserBegin },
      {
        path: ":id",
        name: "userdetails",
        component: UserDetails,
        // Navigation Guards : Bảo vệ các routes bằng cách điều hướng nó hoặc hủy bỏ nó
        // Trường hợp dùng trước khi được routes
        beforeEnter: (to, from, next) => {
          console.log("Navigation Guards - beforeEnter");
          next();
        }
      },
      { path: ":id/edit", name: "useredit", component: UserEdit }
    ]
  },
  // ---------- Kiểm tra id ----------
  // { path: "/user/:id/", name: "userdetails", component: UserDetails }

  // Redirect
  { path: "/redirect", redirect: { name: "homepage" } },

  { path: "/404", name: "error404", component: error404 },
  // Quy định các path ko thuộc trong này sẽ chuyển về 404.vue
  { path: "*", redirect: { name: "error404" } }
];
