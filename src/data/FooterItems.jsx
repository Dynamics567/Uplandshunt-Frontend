import cell from "../assets/cell.svg";
import addy from "../assets/addy.svg";
import email from "../assets/email.svg";
import dashboard from "../assets/userDashboard/dashboard.svg";
import listing from "../assets/userDashboard/listings.svg";
import subscription from "../assets/userDashboard/subscription.svg";
import profile from "../assets/userDashboard/profile.svg";
import savedProperty from "../assets/userDashboard/savedProperty.svg";
import purchase from "../assets/userDashboard/purchase.svg";
import request from "../assets/userDashboard/request.svg";
import transaction from "../assets/userDashboard/transaction.svg";

export const getInTouch = [
  {
    id: "2",
    item: "+447846305105",
    image: cell,
  },
  {
    id: "3",
    item: "24, Chidi road, Lekki, Lagos.",
    image: addy,
  },
  {
    id: "4",
    item: "chidianene@gmail.com",
    image: email,
  },
];

export const company = [
  {
    id: "1",
    item: "About Us",
    path: "/about",
  },
  {
    id: "2",
    item: "Legal",
    path: "/legal/news",
  },
  {
    id: "1",
    item: "Privacy policy",
    path: "/privacypolicy",
  },
  {
    id: "1",
    item: "Terms and condition",
  },
];

export const blogNavItems = [
  {
    id: "1",
    item: "News",
    url: "/legal/news",
  },
  {
    id: "2",
    item: "Regulations",
    url: "/legal/regulations",
  },
  {
    id: "3",
    item: "Blog",
    url: "/legal/blog",
  },
];

export const userDashboard = [
  {
    id: "1",
    navItem: "Dashboard",
    image: dashboard,
    link: "/dashboard",
  },
  {
    id: "2",
    navItem: "My Listing",
    image: listing,
    link: "/dashboard/listings",
  },
  {
    id: "3",
    navItem: "My Subscription",
    image: subscription,
    link: "/dashboard/subscription",
  },
  {
    id: "4",
    navItem: "My Profile",
    image: profile,
    link: "/dashboard/profile",
  },
  {
    id: "5",
    navItem: "Saved Property",
    image: savedProperty,
    link: "/dashboard/savedProperty",
  },
  {
    id: "6",
    navItem: "Property Request",
    image: request,
    link: "/dashboard/request/propertyRequest",
  },
  {
    id: "7",
    navItem: "My Purchase",
    image: purchase,
    link: "/dashboard/purchase/propertyPurchased",
  },
  {
    id: "7",
    navItem: "Transactions",
    image: transaction,
    link: "/dashboard/transactions",
  },
];
