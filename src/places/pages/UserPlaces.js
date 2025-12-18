import React from "react";
import PlaceList from "../components/PlaceList";

const DUMMY_PLACES = [
  {
    id: 1,
    title: "Empire State Building",
    description: "One of the most famous sky scrapper in the world!",
    imageURL: "https://picsum.photos/800/600",
    address: "20 W 34th St, New York, NY 10001, United States",
    creator: "u1",
    location: { lat: 40.7484405, lng: -73.9878531 },
  },
  {
    id: 1,
    title: "Empire State Building",
    description: "One of the most famous sky scrapper in the world!",
    imageURL: "https://picsum.photos/seed/picsum/800/600",
    address: "20 W 34th St, New York, NY 10001, United States",
    creator: "u2",
    location: { lat: 40.7484405, lng: -73.9878531 },
  },
];

const UserPlaces = () => {
  return <PlaceList items={DUMMY_PLACES} />;
};
export default UserPlaces;
