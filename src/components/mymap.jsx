import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, GeoJSON, Popup } from "react-leaflet";
import mapData from "@/data/countries.json";
import "leaflet/dist/leaflet.css";
import MarkerClusterGroup from "react-leaflet-cluster";
import { Icon, divIcon, point } from "leaflet";
import "@/styles/map.css";
import logo from "/location.png";
import { json } from "react-router-dom";

// create custom icon
const customIcon = new Icon({
  iconUrl: logo,
  iconSize: [38, 38], // size of the icon
});

// custom cluster icon
const createClusterCustomIcon = function (cluster) {
  return new divIcon({
    html: `<span class="cluster-icon">${cluster.getChildCount()}</span>`,
    className: "custom-marker-cluster",
    iconSize: point(33, 33, true),
  });
};

const API_BASE_URL = "https://llll.onrender.com";

const MapView = () => {
  // const [marker, setMarker] = useState([]);

  // const getMarkers = async () => {
  //   try {
  //     const response = await `${API_BASE_URL}/markers`;
  //     const data = await response.json();
  //     console.log(data.data)
  //     setMarkers(data.data)
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // const [color, setColor] = useState("#ffff00");
  // const colors = ["green", "blue", "yellow", "orange", "grey"];

  useEffect(() => {
    console.log(mapData);
  }, []);

  const marker = [
    {
      geocode: [6.6018, 3.3515],
      popUp: "Ikeja",
    },
    {
      geocode: [6.4698, 3.5852],
      popUp: "Lekki",
    },
    {
      geocode: [6.4281, 3.4219],
      popUp: "Victoria Island",
    },
  ];
  const countryStyle = {
    fillColor: "green",
    fillOpacity: "0",
    color: "black",
    weight: "1",
  };

  const onEachCountry = (country, layer) => {
    const countryName = country.properties.ADMIN;
  };

  useEffect(() => {
    console.log(marker);
  }, [marker]);

  return (
    <MapContainer
      style={{ height: "100vh", width: "45rem" }}
      zoom={10}
      center={[6.5227, 3.6218]}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <GeoJSON
        style={countryStyle}
        data={mapData.features}
        onEachFeature={onEachCountry}
      />
      <MarkerClusterGroup
        chunkedLoading
        iconCreateFunction={createClusterCustomIcon}
      >
        {!marker?.length <= 0 ? (
          marker.map((marker) => (
            <Marker position={marker.geocode} icon={customIcon}>
              <Popup>{marker.popUp}</Popup>
            </Marker>
          ))
        ) : (
          <p>NOOO</p>
        )}
        {/* {marker.map((marker) => (
            <Marker position={marker.geocode} icon={customIcon}>
              <Popup>{marker.popUp}</Popup>
            </Marker>
          ))} */}
      </MarkerClusterGroup>
    </MapContainer>
  );
};

export default MapView;
