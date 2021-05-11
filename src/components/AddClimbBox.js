import React from "react";
import "../css/AddClimbBox.css";

function AddClimbBox() {
    return <div>
        <form>
            <input
                type="text"
                required={true}
                placeholder={"Climb"}
                className={"add-climb-input"}
                size={"10"}
            />
            <input
                type="text"
                required={true}
                placeholder={"Attempts"}
                className={"add-climb-input"}
                size={"4"}
            />
        </form>
    </div>
}

export default AddClimbBox;