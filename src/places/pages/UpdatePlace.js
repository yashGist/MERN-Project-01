import React from "react";
import { useParams } from "react-router-dom";
import Input from "../../shared/FormElements/Input";
import Button from "../../shared/FormElements/Button";
import "./PlaceForm.css";
import {
  VALIDATOR_REQUIRE,
  VALIDATOR_MINLENGTH,
} from "../../shared/util/validators";
import { useForm } from "../../shared/hooks/form-hook";
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
    id: 2,
    title: "Animal kingdom",
    description: "One of the most famous sky scrapper in the world!",
    imageURL: "https://picsum.photos/seed/picsum/800/600",
    address: "20 W 34th St, New York, NY 10001, United States",
    creator: "u2",
    location: { lat: 40.7484405, lng: -73.9878531 },
  },
];
const UpdatePlace = () => {
  const placeId = useParams().placeId;
  const identifiedPlace = DUMMY_PLACES.find((p) => p.id.toString() === placeId);
  const [formState, inputHandler] = useForm(
    {
      title: { value: identifiedPlace.title, isValid: true },
      description: { value: identifiedPlace.title, isValid: true },
    },
    true
  );

  const placeUpdateSubmitHandler = (event) => {
    event.preventDefault();
    console.log(formState.inputs);
  };

  if (!identifiedPlace) {
    return (
      <div className="center">
        <h2>Could Not find the place!</h2>
      </div>
    );
  }
  return (
    <form className="place-form" onSubmit={placeUpdateSubmitHandler}>
      <Input
        id="title"
        element="input"
        type="text"
        label="Title"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Please Enter a Valid title."
        onInput={inputHandler}
        initialValue={formState.inputs.title.value}
        initialValid={formState.inputs.title.isValid}
      ></Input>
      <Input
        id="description"
        element="textarea"
        label="Description"
        validators={[VALIDATOR_MINLENGTH(5)]}
        errorText="Please Enter a Valid description min 5 characters"
        onInput={inputHandler}
        initialValue={formState.inputs.description.value}
        initialValid={formState.inputs.description.isValid}
      ></Input>
      <Button type="submit" disabled={!formState.isValid}>
        UPDATE PLACE
      </Button>
    </form>
  );
};
export default UpdatePlace;
