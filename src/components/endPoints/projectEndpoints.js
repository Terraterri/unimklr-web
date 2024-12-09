"use-strict";
const { environment } = require("@/environments/environment");
const { default: axios } = require("axios");

// Masters default function for all masters

export const getAllProjects = async (query = "") => {
  const options = {
    method: "GET",
    url: environment.websiteEndPoint + "/api/searchprojects" + query,
  };
  let response;
  try {
    let axiosResponse = await axios(options);
    response = axiosResponse?.data;
    response["status"] = true;
  } catch (error) {
    console.log(error);
    response = { data: {}, status: false, message: error };
  }
  return response;
};

export const getProjectById = async (id) => {
  const options = {
    method: "GET",
    url: environment.websiteEndPoint + "/api/getprojectdetails/" + id,
  };

  let response;

  try {
    let axiosResponse = await axios(options);
    response = axiosResponse?.data;
    response["status"] = true;
  } catch (error) {
    console.log(error);
    response = { data: {}, status: false, message: error };
  }
  return response;
};

const getProjectTypes = async (subEndPoint, id) => {
  const options = {
    method: "GET",
    url:
      environment.servicesEndPoint + "/api/project/" + subEndPoint + "/" + id,
    headers: {
      Authorization: environment.token,
    },
  };
  const subEndPointResponse = await axios(options);
  if (subEndPointResponse?.data?.data) {
    return subEndPointResponse?.data?.data;
  } else {
    return null;
  }
};

export const getGalleryImages = async (id) => {
  const options = {
    method: "GET",
    url: environment.websiteEndPoint + "/api/getGallery/" + id,
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

export const getSpecifications = async (id) => {
  const options = {
    method: "GET",
    url: environment.websiteEndPoint + "/api/getSpecifications/" + id,
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

export const getFurnishing = async (id) => {
  const options = {
    method: "GET",
    url: environment.websiteEndPoint + "/api/getFurnishings/" + id,
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

export const getUnitSizesByProjectId = async (id) => {
  const options = {
    method: "GET",
    url: environment.websiteEndPoint + "/api/unitsizes/" + id,
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

export const getAmenitiesByProjectId = async (id) => {
  const options = {
    method: "GET",
    url: environment.websiteEndPoint + "/api/getaminities/" + id,
  };

  let response;

  try {
    let axiosResponse = await axios(options);
    response = axiosResponse?.data;
    response["status"] = true;
  } catch (error) {
    console.log(error);
    response = { data: {}, status: false, message: error };
  }
  return response;
};

export const getSpecialFeaturesByProjectId = async (id) => {
  const options = {
    method: "GET",
    url: environment.websiteEndPoint + "/api/specialfeatures/" + id,
  };

  let response;

  try {
    let axiosResponse = await axios(options);
    response = axiosResponse?.data;
    response["status"] = true;
  } catch (error) {
    console.log(error);
    response = { data: {}, status: false, message: error };
  }
  return response;
};

export const getUnitGalleryByProjectId = async (id) => {
  const options = {
    method: "GET",
    url: environment.websiteEndPoint + "/api/getunitgallery/" + id,
  };

  let response;

  try {
    let axiosResponse = await axios(options);
    response = axiosResponse?.data;
    response["status"] = true;
  } catch (error) {
    console.log(error);
    response = { data: {}, status: false, message: error };
  }
  return response;
};

export const getApporvedBanksByProjectId = async (id) => {
  const options = {
    method: "GET",
    url: environment.websiteEndPoint + "/api/getapporvedbankloans/" + id,
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

export const getAllPropertiesByProjectName = async (id) => {
  const options = {
    method: "GET",
    url: environment.websiteEndPoint + "/api/getProperties/" + id,
  };

  let response;
  try {
    let axiosResponse = await axios(options);
    response = axiosResponse?.data;
    response["status"] = true;
  } catch {
    console.log(error);
    response = { data: [], status: false, message: error };
  }
  return response;
};
