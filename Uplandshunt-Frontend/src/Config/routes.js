import {
  IndividualSignup,
  ResetPassword,
  Login,
  PasswordRecovery,
  Landing,
  DashboardLogin,
  Blog,
  Regulations,
  News,
  SingleNews,
  SingleBlog,
  SingleRegulation,
  ContactUs,
  About,
  PrivacyPolicy,
  TermsAndConditions,
  Dashboard,
} from "../pages";

const routes = [
  {
    path: "/",
    component: Landing,
  },
  {
    path: "/register",
    component: IndividualSignup,
  },
  {
    path: "/resetpassword",
    component: ResetPassword,
  },
  {
    path: "/login",
    component: Login,
  },
  {
    path: "/contactus",
    component: ContactUs,
  },
  {
    path: "/forgotpassword",
    component: PasswordRecovery,
  },
  {
    path: "/dashboardlogin",
    component: DashboardLogin,
  },
  {
    path: "/legal/news",
    component: News,
  },
  {
    path: "/about",
    component: About,
  },
  {
    path: "/privacypolicy",
    component: PrivacyPolicy,
  },
  {
    path: "/terms",
    component: TermsAndConditions,
  },
  //   {
  //     path: "/dashboard",
  //     component: Dashboard,
  //     isPrivate: true,
  //   },
  {
    path: "/legal/regulations",
    component: Regulations,
  },
  {
    path: "/legal/blog",
    component: Blog,
  },
  {
    path: "/legal/newsview",
    component: SingleNews,
  },
  {
    path: "/legal/blogview",
    component: SingleBlog,
  },
  {
    path: "/legal/regulationview",
    component: SingleRegulation,
  },
];

export default routes;
