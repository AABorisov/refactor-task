import React from "react";
import "./AddMoreButton.css";

interface AddMoreButtonProps {
    onClick: () => void;
}

const AddMoreButton: React.FC<AddMoreButtonProps> = ({onClick}) => (
    <button className="App-button" onClick={onClick}>
        Add More
    </button>
);

export default AddMoreButton;
