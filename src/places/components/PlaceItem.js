import React, { useState } from "react";
import "./PlaceItem.css";
import Card from "../../user/components/UIElements/Card";
import Button from "../../shared/FormElements/Button";
import Modal from "../../user/components/UIElements/Modal";
import Map from "../../user/components/UIElements/Map";
const PlaceItem = (props) => {
  const [showMap, setShowMap] = useState(false);

  const openMapHandler = () => setShowMap(true);
  const closeMapHandler = () => setShowMap(false);

  return (
    <React.Fragment>
      <Modal
        show={showMap}
        onCancel={closeMapHandler}
        header={props.address}
        contentClass="place-item__modal-content"
        footerClass="place-item__modal-actions"
        footer={<Button onClick={closeMapHandler}>CLOSE</Button>}
      >
        <div className="modal-container">
          <Map>
            center=
            {{
              lat: props.coordinates.lat,
              lng: props.coordinates.lng,
            }}
            zoom={16}
            style={{ width: "100%", height: "300px" }}
          </Map>
        </div>
      </Modal>

      <li className="place-item">
        <Card>
          <div className="place-item__image">
            <img src={props.image} alt={props.title} />
          </div>

          <div className="place-item__info">
            <h2>{props.title}</h2>
            <h3>{props.address}</h3>
            <p>{props.description}</p>
          </div>

          <div className="place-item__actions">
            <Button inverse onClick={openMapHandler}>
              VIEW ON MAP
            </Button>
            <Button to={`/places/${props.id}/edit`}>EDIT</Button>
            <Button danger>DELETE</Button>
          </div>
        </Card>
      </li>
    </React.Fragment>
  );
};

export default PlaceItem;
