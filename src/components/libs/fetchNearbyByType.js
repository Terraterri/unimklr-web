export const fetchNearbyByType = async (lat, long, radius, type) => {
    const apiUrl = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${lat},${long}&radius=${radius}&type=${type}&key=AIzaSyCEIcYK-1b9jEba4eTN9uplKRq8nJKU-M8`;


    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        console.log("data", data);

        if (data.status === "OK") {
            return data.results
        } else {
            console.error("Error fetching places:", data.status, data.error_message);
            return [];
        }
    } catch (error) {
        console.error("Error fetching data:", error);
        return [];
    }
};