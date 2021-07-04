import React from 'react';
import './AddMoreButton.css';

interface AddMoreButtonProps {
    onClick: () => void;
}

const AddMoreButton: React.FC<AddMoreButtonProps> = ({onClick}) => (
    <div>
        <button className="App-button" onClick={onClick}>
            Add More
        </button>
    </div>
);

export default AddMoreButton;
