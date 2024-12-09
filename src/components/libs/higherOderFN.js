export const downloadURI = (uri, name) => {
  var link = document.createElement("a");
  link.download = name;
  link.href = uri;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

export const convertToIndianRupees = (num) => {
  if(num == null || num == undefined){
    num = 0 
  }
  return Number(num).toLocaleString("en-IN", {
    maximumFractionDigits: 0,
    style: "currency",
    currency: "INR",
  });
};
