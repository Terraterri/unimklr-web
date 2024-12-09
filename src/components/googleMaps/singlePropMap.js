import React, { useEffect, useState, useRef } from "react";
import GoogleMapReact from "google-map-react";
import { fetchNearbyByType } from "../libs/fetchNearbyByType";

const GoogleMapsSingleProperty = ({ findNBLoc, radius, type, setZoomData }) => {
  const hyderabadCoordinates = { lat: 17.385, lng: 78.4867 }; // Default to Hyderabad, India
  const [center, setCenter] = useState(findNBLoc || hyderabadCoordinates);
  const [locations, setLocations] = useState([]);
  const [mapType, setMapType] = useState("roadmap");
  const [zoom, setZoom] = useState(14)
  const currentInfoWindowRef = useRef(null);
  const directionsRendererRef = useRef(null);
  const markersRef = useRef([]); // Array to keep track of markers
  const mapRef = useRef(null);
  const mapsRef = useRef(null);

  const markerIcons = {
    hospital: "/assets/img/mapicons/hospital.png",
    school: "/assets/img/mapicons/schools.png",
    restaurant: "/assets/img/mapicons/restaurents.png",
    bank: "/assets/img/mapicons/banks.png",
    park: "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/park-71.png",
    airport: "/assets/img/mapicons/airport.png",
    train_station: "/assets/img/mapicons/train.png",
  };

  const getMarkerIcon = (type) => {
    console.log("marker......... ", markerIcons[type]);
    return markerIcons[type] || "http://maps.google.com/mapfiles/ms/icons/blue-dot.png"; // Default icon
  };


  // Fetch nearby locations
  useEffect(() => {
    const fetchAndSetLocations = async () => {
      if (findNBLoc) {
        try {
          let fetchedData = await fetchNearbyByType(
            findNBLoc.lat,
            findNBLoc.lng,
            radius,
            type
          );

          // Filter locations to include only those with 'airport' in their name
          if (type === "airport") {
            setZoom(11)
            fetchedData = fetchedData.filter((place) =>
              place.name.toLowerCase().includes("airport")
            );
          }else if (type === "train_station") {
            setZoom(11)
            fetchedData = fetchedData.filter((place) =>
              place.name.toLowerCase().includes("junction")
            );
          }else{
            setZoom(14)
          }

          setLocations(fetchedData);
        } catch (error) {
          console.error("Error fetching nearby locations:", error);
        }
      }
    };
    fetchAndSetLocations();
  }, [findNBLoc, radius, type]);

  const extractAddressPart = (address) => {
    // Split the address by commas
    const parts = address.split(",");

    // Check if there are at least 3 parts from the end
    if (parts.length < 3) {
      return address; // If the address has fewer than 3 parts, return the original address
    }

    // Join the last 3 parts using a comma
    const extractedAddress = parts.slice(-2).join(",");

    return extractedAddress.trim(); // Trim any extra whitespace
  };

  const clearMarkers = () => {
    markersRef.current.forEach((marker) => marker.setMap(null)); // Clear existing markers from the map
    markersRef.current = []; // Reset markers array
  };

  const renderMarkers = () => {
    const map = mapRef.current;
    const maps = mapsRef.current;
    const markerIcon = getMarkerIcon(type);

    if (!map || !maps) return;

    // Clear existing markers
    clearMarkers();

    // Pin the property location as a red marker
    if (findNBLoc) {
      const propertyMarker = new maps.Marker({
        position: { lat: findNBLoc.lat, lng: findNBLoc.lng },
        map,
        title: "Property Location",
        icon: {
          url: "http://maps.google.com/mapfiles/ms/icons/red-dot.png",
          scaledSize: new maps.Size(30, 30), // Set the size of the property marker to 30x30 pixels
        },
      });
      markersRef.current.push(propertyMarker);
    }

    // Pin nearby locations as blue markers and add click listeners for info windows and directions
    locations.forEach((property) => {
      const lat = parseFloat(property.geometry.location.lat);
      const lng = parseFloat(property.geometry.location.lng);

      if (!isNaN(lat) && !isNaN(lng)) {
        const marker = new maps.Marker({
          position: { lat, lng },
          map,
          title: property.name,
          icon: {
            url: markerIcon,
            scaledSize: new maps.Size(20, 20), // Set the size of the marker to 30x30 pixels
          },
        });

        markersRef.current.push(marker);

        // Add click listener to open an info window and show directions
        marker.addListener("click", () => {
          // Close the currently open info window, if any
          if (currentInfoWindowRef.current) {
            currentInfoWindowRef.current.close();
          }

          // Remove existing directions, if any
          if (directionsRendererRef.current) {
            directionsRendererRef.current.setMap(null);
            directionsRendererRef.current = null;
          }

          // Create a new info window with property details
          let infoWindowContent = `
            <div style="background-color: #fff; width: 250px; padding: 8px 10px; box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px; border-radius: 10px; position: relative;">
              <h5 style="font-size: 18px; color: #000; margin-bottom: 5px; font-weight: 600; text-decoration: underline;">${property.name}</h5>
              <p style="font-size: 14px; color: #777; margin-bottom: 5px;">Address: ${extractAddressPart(property.vicinity)}</p>
              ${property?.rating !== undefined ? `
                <p style="font-size: 13px; color: #000; border-top: 1px solid #dfdfdf; background: #48a0ff; padding: 5px 7px; border-radius: 10px;">Ratings:
                  <span style="font-weight: 600; margin-left: 5px; font-size: 14px;">${property.rating}</span>
                </p>` : ''}
              <button id="get-directions" style="padding: 5px 10px; background-color: #007bff; color: #fff; border: none; border-radius: 3px; cursor: pointer;">Get Directions</button>
            </div>`;

          const infoWindow = new maps.InfoWindow({
            content: infoWindowContent,
          });

          infoWindow.open(map, marker);
          currentInfoWindowRef.current = infoWindow;

          // Add event listener for the Get Directions button
          maps.event.addListenerOnce(infoWindow, "domready", () => {
            document.getElementById("get-directions").addEventListener("click", () => {
              const directionsService = new maps.DirectionsService();
              const directionsRenderer = new maps.DirectionsRenderer({
                polylineOptions: {
                  strokeColor: "#0000FF", // Set the color of the polyline to blue
                  strokeOpacity: 1.0,
                  strokeWeight: 4,
                },
                suppressMarkers: true, // Suppress default markers so that we only use our custom markers
              });
              directionsRenderer.setMap(map);
              directionsRendererRef.current = directionsRenderer;

              const request = {
                origin: new maps.LatLng(findNBLoc.lat, findNBLoc.lng),
                destination: new maps.LatLng(lat, lng),
                travelMode: maps.TravelMode.DRIVING,
              };

              directionsService.route(request, (result, status) => {
                if (status === maps.DirectionsStatus.OK) {
                  directionsRenderer.setDirections(result);

                  // Fit the route to the map screen
                  const bounds = new maps.LatLngBounds();
                  result.routes[0].legs[0].steps.forEach((step) => {
                    bounds.extend(step.start_location);
                    bounds.extend(step.end_location);
                  });
                  map.fitBounds(bounds);

                  // Update the info window position to stay visible
                  const updatedInfoWindowContent = `
                    <div style="background-color: #fff; width: 250px; padding: 8px 10px; box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px; border-radius: 10px; position: relative;">
                      <h5 style="font-size: 18px; color: #000; margin-bottom: 5px; font-weight: 600; text-decoration: underline;">${property.name}</h5>
                      <p style="font-size: 14px; color: #777; margin-bottom: 5px;">Address: ${extractAddressPart(property.vicinity)}</p>
                      <p style="font-size: 14px; color: #000; margin-bottom: 10px;">Property Distance: <span style="font-weight: 600; font-size: 14px;">${result.routes[0].legs[0].distance.text}</span></p>
                      ${property?.rating !== undefined ? `
                        <p style="font-size: 13px; color: #000; border-top: 1px solid #dfdfdf; background: #48a0ff; padding: 5px 7px; border-radius: 10px;">Ratings:
                          <span style="font-weight: 600; margin-left: 5px; font-size: 14px;">${property.rating}</span>
                        </p>` : ''}
                    </div>`;

                  infoWindow.setContent(updatedInfoWindowContent);
                } else {
                  console.error("Error fetching directions", result);
                }
              });
            });
          });
        });
      }
    });
  };

  useEffect(() => {
    // Render markers whenever locations change
    renderMarkers();
  }, [locations]);

  const handleApiLoaded = (map, maps) => {
    mapRef.current = map;
    mapsRef.current = maps;

    // Initial marker rendering
    renderMarkers();

    // Set initial map type
    map.setMapTypeId(mapType);

    // Add map type control (inbuilt Google Maps control for switching views)
    map.setOptions({
      mapTypeControl: true,
      mapTypeControlOptions: {
        style: maps.MapTypeControlStyle.DEFAULT,
        position: maps.ControlPosition.LEFT_TOP,
      },
    });

    maps.event.addListener(map, "click", () => {
      if (currentInfoWindowRef.current) {
        currentInfoWindowRef.current.close();
        currentInfoWindowRef.current = null;
      }
    });

  };

  return (
    <div style={{ height: "425px", width: "100%", position: "relative" }}>
      <GoogleMapReact
        bootstrapURLKeys={{
          key: "AIzaSyCEIcYK-1b9jEba4eTN9uplKRq8nJKU-M8", // API key
        }}
        center={center}
        zoom={zoom}
        yesIWantToUseGoogleMapApiInternals
        onGoogleApiLoaded={({ map, maps }) => {
          handleApiLoaded(map, maps);
        }}
        options={{
          mapTypeId: mapType,
        }}
      />
    </div>
  );
};

export default GoogleMapsSingleProperty;