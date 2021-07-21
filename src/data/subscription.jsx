export const plans = [
  {
    id: "1",
    plan: "Plan 1",
    access: "Upgrading to this plan will help you post 5 properties",
  },
  {
    id: "2",
    plan: "Plan 2",
    access: "Upgrading to this plan will help you post 10 properties",
  },
  {
    id: "3",
    plan: "Plan 3",
    access: "Upgrading to this plan will help you post 15 properties",
  },
];

// let currentUser = JSON.parse(localStorage.getItem("currentUser"));
// currentUser = currentUser?.data?.user;
// console.log(currentUser);
// const { email, first_name, phone, avatar, role } = currentUser;

// export const userObject = { avatar, first_name };
// export const profile = [
//   {
//     id: "1",
//     question: "Name:",
//     answer: first_name,
//   },
//   {
//     id: "2",
//     question: "Company Name:",
//     answer: "",
//   },
//   {
//     id: "3",
//     question: "Address:",
//     answer: "",
//   },
//   {
//     id: "4",
//     question: "Country:",
//     answer: "",
//   },
//   {
//     id: "5",
//     question: "State",
//     answer: "",
//   },
//   {
//     id: "6",
//     question: "City:",
//     answer: "",
//   },
//   {
//     id: "7",
//     question: "Contact Number:",
//     answer: phone,
//   },
//   {
//     id: "8",
//     question: "Email Address:",
//     answer: email,
//   },
//   {
//     id: "9",
//     question: "Website:",
//     answer: "",
//   },
// ];

export const listingHeader = [
  {
    id: "1",
    item: "Manage Details",
    url: "/dashboard/listings/manageDetails",
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
    item: "Interest Recieved",
    url: "/dashboard/listings/interest",
  },
];

export const propertyRequest = [
  {
    id: "1",
    item: "Bids Placed",
    url: "/dashboard/request/bidsPlaced",
  },
  {
    id: "2",
    item: "Interest Sent",
    url: "/dashboard/request/interestSent",
  },
  {
    id: "3",
    item: "Documents",
    url: "/dashboard/request/documents",
  },
];

export const purchase = [
  {
    id: "1",
    item: "Property Purchased",
    url: "/dashboard/purchase/propertyPurchased",
  },
  {
    id: "2",
    item: "Property Rented",
    url: "/dashboard/purchase/propertyRented",
  },
  {
    id: "3",
    item: "Payment History",
    url: "/dashboard/purchase/paymentHistory",
  },
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
