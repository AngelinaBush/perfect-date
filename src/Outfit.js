
import { useState } from "react";
import { dataOne } from "./data";


function Outfit() {

    const [outfits, setOutfits] = useState(dataOne);
    
    const removeOutfit = (id) => {
        let newOutfits = outfits.filter(outfit => outfit.id !== id);
        setOutfits(newOutfits);
    }

    const deleteAll = () => {
        alert("Sorry, you didn't like any of them :( ")
        setOutfits([]);
    }

    return (

        <div>
            <div className="header-container">
                <h2>The outfit for the date</h2>
            </div>

            <div className="outfit-container">
                {outfits.map((outfit => {
                    const {id, description, image} = outfit;
                    return (
        
                        <div key={id}>
                            <div className="container">
                                <h3>{id} - {description}</h3>
                            </div>
                            <div className="container">
                                <img src={image} alt="outfit" width="200px" height="300px" />
                            </div>
                            <div className="container">
                                <button className="btnRemove" disabled={outfits.length === 1 ? true : false} className="btnRemove" onClick={() => removeOutfit(id)}>Remove</button>
                            </div>
                        </div>
                    
                    )
                }))}
            </div>

            <div>
                <button className="btnDeleteAll" onClick={deleteAll}>Delete all outfits</button>
            </div>

        </div>
    )
}

export default Outfit;