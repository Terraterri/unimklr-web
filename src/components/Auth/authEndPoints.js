"use-strict";

import { method } from "lodash";

const { environment } = require("@/environments/environment");
const { default: axios } = require("axios");

// ? user register end point

export const userRegister = async (data) => {
  const options = {
    method: "POST",
    url: environment.websiteEndPoint + "/api/register",
    data,
  };
  let response;
  try {
    const axiosResponse = await axios(options);
    response = axiosResponse?.data;
    response["status"] = true;
  } catch (error) {
    return {
      data: [],
      status: false,
      error: error,
    };
  }
  return response;
};


// ? userLogin end point
 
export const userLogin = async (data) => {
  const options = {
    method: "POST",
    url: environment.websiteEndPoint + "/api/login",
    data,
  };
  let response;
  try {
    const axiosResponse = await axios(options);
    response = axiosResponse?.data;
    response["status"] = true;
  } catch (error) {
    return {
      data: [],
      status: false,
      error: error,
    };
  }
  return response;
};
