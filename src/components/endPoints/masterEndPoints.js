"use-strict";
import { method } from "lodash";
const { environment } = require("@/environments/environment");
const { default: axios } = require("axios");

// Masters default function for all masters

export const getAllMastersTypes = async (type) => {
  const options = {
    method: "GET",
    url: environment.matsersEndPoint + "/api/" + type,
    headers: {
      Authorization: environment.token,
    },
  };
  let response;
  try {
    const axiosResponse = await axios(options);
    response = axiosResponse?.data;
    response["status"] = true;
  } catch (error) {
    return {
      data: {},
      status: false,
      error: error,
    };
  }

  return response;
};

export const getAllCities = async () => {
  const options = {
    method: "GET",
    url: environment.matsersEndPoint + "/api/city",
    headers: {
      Authorization: environment.token,
    },
  };
  let response;
  console.log("token....., ", environment.token);
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

export const getBuilderDetails = async (param) => {
  const options = {
    method: "GET",
    url: environment.matsersEndPoint + `/api/builder/${param}`,
    headers: {
      Authorization: environment.token,
    },
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
