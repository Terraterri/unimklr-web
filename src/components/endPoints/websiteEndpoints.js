import { environment } from "@/environments/environment";
import axios from "axios";
import { headers } from "../../../next.config";

export const getBanners = async (city) => {
  const options = {
    method: "GET",
    url: environment.matsersEndPoint + "/api/website-banners/city/" + city,
    headers: {
      Authorization: environment.token,
    },
  };

  let response;

  try {
    let axiosResponse = await axios(options);
    response = axiosResponse?.data;
    response["status"] = true;
  } catch (error) {
    console.log(error);
    response = { data: [], status: false, message: error };
  }
  return response;
};

export const contactBuilder = async (data) => {
  const options = {
    method: "POST",
    url: environment.websiteEndPoint + "/api/contactbuilder",
    data,
  };
  let response;
  try {
    const axiosResponse = await axios(options);
    console.log("axios ====>", axiosResponse);

    response = axiosResponse?.data;
    response["status"] = true;
  } catch (error) {
    console.log("axios ====>", error);
    return {
      data: [],
      status: false,
      error: error,
    };
  }

  return response;
};

export const postContactDetails = async (data) => {
  const options = {
    method: "POST",
    url: environment.websiteEndPoint + "/api/enquiries",
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

export const getListingLocalities = async (query = " ") => {
  const options = {
    method: "GET",
    url: environment.websiteEndPoint + "/api/listingLocalities" + query,
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

export const getPropById = async (query = "") => {
  const options = {
    method: "GET",
    url: environment.websiteEndPoint + "/api/singleProject/" + query,
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

export const getAllProjectCoordinates = async (query = "") => {
  const options = {
    method: "GET",
    url: environment.websiteEndPoint + "/api/getAllProjectCoordinates" + query,
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

export const getAllLocalitiesByCode = async (query = "") => {
  const options = {
    method: "GET",
    url: environment.websiteEndPoint + "/api/localities" + query,
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
