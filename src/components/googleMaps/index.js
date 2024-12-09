import React, { useEffect, useRef, useState } from "react";
import GoogleMapReact from "google-map-react";
import MarkerClusterer from "marker-clusterer-plus";
import { getPropById } from "../endPoints/websiteEndpoints";
import { useRouter } from "next/router";
import { BiRupee } from "react-icons/bi";
const GoogleMapsAllLocations = ({ lat, long, propLoc, show, setZoomData }) => {
  const router = useRouter();
  const hyderabadCoordinates = { lat: 17.385, lng: 78.4867 }; // Default to Hyderabad, India
  const [center, setCenter] = useState({
    lat: lat || hyderabadCoordinates.lat,
    lng: long || hyderabadCoordinates.lng,
  });
  const [mapInstance, setMapInstance] = useState(null);
  const [mapsInstance, setMapsInstance] = useState(null);
  const currentInfoWindowRef = useRef(null);
  const [selectedMarker, setSelectedMarker] = useState(null);

  const routetoPage = (route) => {
    router.push(route);
  };

  // Set center based on propLoc, or default to Hyderabad if empty
  useEffect(() => {
    if (propLoc?.length > 0) {
      // setCenter({
      //   lat: propLoc[0]?.lat,
      //   lng: propLoc[0]?.long,
      // });
    } else {
      setCenter(hyderabadCoordinates);
    }
  }, [propLoc]);

  useEffect(() => {
    // Re-render map when locations or propLoc changes
    if (mapInstance && mapsInstance && propLoc?.length > 0) {
      renderMarkers(mapInstance, mapsInstance, propLoc);
    }
  }, [mapInstance, mapsInstance, propLoc, selectedMarker]);

  const createMapOptions = (maps) => ({
    mapTypeControl: true,
    mapTypeControlOptions: {
      style: maps.MapTypeControlStyle.DEFAULT,
      position: maps.ControlPosition.LEFT_TOP,
    },
    // streetViewControl: false,
    fullscreenControl: false,
    zoomControl: true,
  });


  const handleZoomChange = ({ bounds }) => {
    if (bounds) {
      const sw = bounds.sw;
      const ne = bounds.ne;

      const data = [
        {
          sw: {
            lat: sw.lat,
            lng: sw.lng,
          },
          ne: {
            lat: ne.lat,
            lng: ne.lng,
          },
        },
      ];

      setZoomData(data); // Pass zoom data to parent after zoom change
    }
  };

  const renderMarkers = (map, maps, properties) => {
    const locationMarkers = properties
      ?.map((property, index) => {
        const lat = parseFloat(property.latitude);
        const lng = parseFloat(property.longitude);

        if (isNaN(lat) || isNaN(lng)) {
          console.warn(`Invalid location at index ${index}:`, property);
          return null;
        }

        const isSelected =
          selectedMarker && selectedMarker === property.project_name_id;
        const markerIconUrl = isSelected
          ? "/assets/img/mapicons/loc-blue.png"
          : "/assets/img/mapicons/loc-red.png";

        const marker = new maps.Marker({
          position: { lat, lng },
          map,
          title: property.name,
          icon: {
            url: markerIconUrl,
            scaledSize: new maps.Size(15, 23), // Set the size of the dot icon
          },
        });
        marker.addListener("click", async () => {
          const data = await getPropById(property.project_name_id);
          setSelectedMarker(property.project_name_id);
          const propData = data.data;

          const infoWindowContent = `
            <div class="map-box" style="font-family: Arial, sans-serif; font-size: 14px; width: 250px !important; height: 100%; color: #333;">
                <div class="listing-img" style="margin-bottom: 10px;">
                  <img alt="property" width="450" height="300" src=${propData.project_first_gallery_image} style="border-radius: 5px;" />
                </div>
                <div class="listing-content" style="width: 96% !important;">
                  <h4 class="listing-title" style="margin-bottom: 5px; font-size: 18px; font-weight: bold;">${propData.project_name}</h4>
                  <p class="ar_grp" style="margin-bottom: 5px !important; color: #2f69b2;     font-size: 11px !important;">
                    ${propData.locality}, ${propData.sub_locality}, ${propData.city_code}
                  </p>
                   <p class="listing-sub-title" ><span>By:</span> ${propData.builder_name}</p>
                     <div class="listing-author" style="max-width:70% " >
                     
                    </div>
                  <div class="listing-price" style="margin-bottom: 5px;">
                 <div class="contr_out">
                  <span>${propData.possession_status}</span>
                  <span>${propData.possession_by}</span>

               
                 </div>
                    <div class="listing-price-info ml-200" style="color: #555;">

                      <h6 class="listing-price-amount" style="margin: 0; color: #222;">
                      <span>Starts From</span><br />
                      ₹
                      ${propData.total_base_price}</h6>
                    </div>
                  </div>
                  <div class="listing-bottom" style="margin-top: 10px;">
                    <div class="listing-author" style="max-width:70% " >
                      <p class="ar_grp"><span>By:</span> ${propData.builder_name}</p>
                    </div>
                    <div>View</div>
                  </div>
                </div>
                <button id="viewProjectButton" className="next-btn-out">View</button>
            </div>`;



          // Close the currently open infoWindow (if any)
          if (currentInfoWindowRef.current) {
            currentInfoWindowRef.current.close();
          }

          const infoWindow = new maps.InfoWindow({
            content: infoWindowContent,
          });

          infoWindow.addListener("domready", () => {
            document
              .getElementById("viewProjectButton")
              .addEventListener("click", () => {
                routetoPage(`/singleProject/${propData.id}`);
              });
          });

          infoWindow.open(map, marker);
          currentInfoWindowRef.current = infoWindow;
        });

        return marker;
      })
      .filter(Boolean);

    // if (locationMarkers?.length > 0) {
    //   const bounds = new maps.LatLngBounds();
    //   locationMarkers?.forEach((marker) => {
    //     if (marker && marker.getPosition()) {
    //       bounds.extend(marker.getPosition());
    //     }
    //   });
    //   map.fitBounds(bounds);
    // }

    // new MarkerClusterer(map, locationMarkers, {
    //   styles: [
    //     {
    //       url: "/assets/img/mapicons/bg-final.png", // Leave empty as we are not using any external image for the cluster
    //       height: 20,
    //       width: 20,
    //       textColor: "white",
    //       textSize: 16,
    //       background: 'blue'
    //       // className: "custom-cluster-icon"
    //     },
    //   ],
    // });

    // Add CSS to create the custom cluster icon style
    const addCustomClusterIconStyles = () => {
      const style = document.createElement("style");
      style.innerHTML = `
        .custom-cluster-icon {
          background-color: red;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 16px;
          color: white;
          text-align: center;
          line-height: 50px;
          background:black
          width: 20px;
          height: 20px;
          transform: translate(-50%, -50%);
        
        }
      `;
      document.head.appendChild(style);
    };

    // Add this call before rendering markers
    addCustomClusterIconStyles();

    // Close the currently open infoWindow when clicking outside
    maps.event.addListener(map, "click", () => {
      if (currentInfoWindowRef.current) {
        currentInfoWindowRef.current.close();
        currentInfoWindowRef.current = null;
      }
    });
  };

  const handleApiLoaded = (map, maps) => {
    renderMarkers(map, maps, propLoc); // Ensure locations are rendered
    setMapInstance(map);
    setMapsInstance(maps);
  };

  return (
    <div style={{ height: "600px", width: "100%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{
          key: "AIzaSyCEIcYK-1b9jEba4eTN9uplKRq8nJKU-M8", // API key
        }}
        center={center}
        zoom={10}
        onChange={handleZoomChange}
        yesIWantToUseGoogleMapApiInternals
        onGoogleApiLoaded={({ map, maps }) => handleApiLoaded(map, maps)}
        options={(maps) => createMapOptions(maps)}
      />
    </div>
  );
};

export default GoogleMapsAllLocations;
