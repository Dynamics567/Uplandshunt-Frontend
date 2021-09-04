import { ViewBidsPropertyRequest } from "../pages";
import BusinessProfile from "../templates/BusinessProfile";

export const plans = [
  {
    monthId: "1",
    plan: "Bill Yearly",
    duration: "12",
    // url: "/dashboard/subscription",
  },
  {
    monthId: "2",
    plan: "Bill / 3 months",
    duration: "3",
    // url: "/dashboard/subscription",
  },
  {
    monthId: "3",
    plan: "Bill / 6 months",
    duration: "6",
    // url: "/dashboard/subscription",
  },
  {
    monthId: "4",
    plan: "Bill / 9 months",
    duration: "9",
    // url: "/dashboard/subscription",
  },
];

export const listingHeader = [
  {
    id: "1",
    item: "Edit Details",
    url: "/dashboard/listings/editDetails",
  },
  {
    id: "2",
    item: "User View",
    url: "/dashboard/listings/userview",
  },
  {
    id: "3",
    item: "Documents",
    url: "/dashboard/listings/documents",
  },
  {
    id: "4",
    item: "Bids Recieved",
    url: "/dashboard/listings/bidsReceived",
  },
  // {
  //   id: "5",
  //   item: "Bids Sent",
  //   url: "/dashboard/listings/bidsSent",
  // },
];

export const propertyRequest = [
  {
    id: "1",
    item: "Property Request",
    url: "/dashboard/request/propertyRequest",
  },
  {
    id: "2",
    item: "Bids Placed",
    url: "/dashboard/request/bidsPlaced",
  },
  // {
  //   id: "2",
  //   item: "Interest Sent",
  //   url: "/dashboard/request/interestSent",
  // },
  // {
  //   id: "3",
  //   item: "Documents",
  //   url: "/dashboard/request/documents",
  // },
];

export const purchase = [
  {
    id: "1",
    item: "Property Purchased",
    url: "/dashboard/purchase/propertyPurchased",
  },
  {
    id: "2",
    item: "Property Sold",
    url: "/dashboard/purchase/propertySold",
  },
  // {
  //   id: "3",
  //   item: "Payment History",
  //   url: "/dashboard/purchase/paymentHistory",
  // },
];

export const register = [
  {
    id: "1",
    item: "Individual Signup",
    url: "/register",
  },
  {
    id: "2",
    item: "Business Signup",
    url: "/businessRegister",
  },
];

export const filter = [
  {
    id: "1",
    item: "Top Properties",
    url: "/searchresults/topproperties",
  },
  {
    id: "2",
    item: "Boosted Properties",
    url: "/searchresults/boostedproperties",
  },
];

export const sortByPrice = [
  {
    id: "ASC",
    item: "low to high",
  },
  {
    id: "DESC",
    item: "high to low",
  },
];

export const bidsHistory = [
  {
    id: "1",
    label: "tab1",
    item: "Bids History",
    content: "Bids History",
  },
  {
    id: "2",
    label: "tab2",
    item: "My Bids",
    content: "My Bids",
  },
];
