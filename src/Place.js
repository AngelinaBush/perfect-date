import { useState } from "react";
import { dataThree } from "./data";

function Place() {

    const [places, setPlaces] = useState(dataThree);

    const removePlace = (id) => {
        let newPlaces = places.filter(place => place.id !== id)
        setPlaces(newPlaces);
    }

    const deleteAll = () => {
        alert("Sorry, you didn't like any of them :( ")
        setPlaces([]);
    }

    return (
    <div>
        <div className="header-container">
            <h2>The place to visit</h2>
        </div>

        <div className="place-container">
            {places.map((place => {
                const {id, description, image} = place;

                return (
                    <div>

                    <div key={id}>
                        <div className="container">
                            <h3>{id} - {description}</h3>
                        </div>
                        <div className="container">
                            <img src={image} alt="place" width="200px" height="300px"/>
                        </div>
                        <div className="container">
                            <button className="btnRemove" disabled={places.length === 1 ? true : false} onClick={() => removePlace(id)}>Remove</button>
                        </div>
                    </div>

                    </div>
                )
            }))}
        </div>

        <div>
            <button className="btnDeleteAll" onClick={deleteAll}>Delete all places</button>
        </div>

    </div>
    )
}

export default Place;