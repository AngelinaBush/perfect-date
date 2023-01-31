import { useState } from "react";
import { dataTwo } from "./data";

function Man() {
    
    const [men, setMen] = useState(dataTwo);

    const removeMan = (id) => {
        let newMen =  men.filter(man => man.id !== id);
        setMen(newMen);
    }

    const deleteAll = () => {
        alert("Sorry, you didn't like any of them :( ")
        setMen([]);
    }


    return (
    <div>
        <div className="header-container">
            <h2>The man you'd like to date</h2>
        </div>

        <div className="men-container">
            {men.map(man => {
                const {id, image} = man;

                return (
                    <div>

                    <div key={id}>
                        <div className="container">
                            <h3>{id}</h3>
                        </div>
                        <div className="container">
                            <img src={image} alt="man" width="200px" height="300px"/>
                        </div>
                        <div className="container">
                            <button className="btnRemove" disabled={men.length === 1 ? true : false} onClick={() => removeMan(id)}>Remove</button>
                        </div>
                    </div>

                    </div>
                )
            })}
        </div>

        
        <div>
            <button className="btnDeleteAll" onClick={deleteAll}>Delete all Men</button>
        </div>

    </div>
    )

}

export default Man;