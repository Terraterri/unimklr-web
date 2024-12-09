// export const environment = {
//   userEndpoint: "http://micro-api-one.terraterri.com",
//   servicesEndPoint: "http://micro-api-two.terraterri.com",
//   matsersEndPoint: "http://micro-api-three.terraterri.com",
//   websiteEndPoint: "http://18.117.77.77:3000",
//   expoEndpoint:"https://mmworkspace.com/expo/api/"
// };

export const environment = {
  userEndpoint: process.env.NEXT_PUBLIC_USER_ENDPOINT,
  servicesEndPoint: process.env.NEXT_PUBLIC_SERVICES_ENDPOINT,
  matsersEndPoint: process.env.NEXT_PUBLIC_MASTERS_ENDPOINT,
  websiteEndPoint: process.env.NEXT_PUBLIC_WEBSITE_ENDPOINT,
  token: process.env.NEXT_PUBLIC_TOKEN,
};

// http://micro-api-one.terraterri.com - User Authentication
// http://micro-api-two.terraterri.com - Project Services
// http://micro-api-three.terraterri.com - Master and User
