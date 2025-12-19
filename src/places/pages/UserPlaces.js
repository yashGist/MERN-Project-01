import React from "react";
import PlaceList from "../components/PlaceList";
import { useParams } from "react-router-dom";
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
  const userId = useParams().userId;
  const loadedPlaces = DUMMY_PLACES.filter((place) => place.creator === userId);
  return <PlaceList items={loadedPlaces} />;
};
export default UserPlaces;
