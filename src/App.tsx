import React, {useEffect} from 'react';
import {createList} from "./helpers/createList";
import {ListItem} from "./models/ListItem";
import logo from './logo.svg';
import './App.css';

function App() {
    // d - List of items that can be updated with new additional items when the button is pressed
    const [itemsList, setItemsList] = React.useState<Array<ListItem>>([])

    const fill = () => {
        // The function fills the list for render with some items
        const newList: Array<ListItem> = createList(itemsList.length, 20);

        setItemsList(itemsList => [...itemsList, ...newList])
    }

    useEffect(() => {
        // Fills the List onmount
        fill();
    }, []);

    const render = () => {
        // renders the list of items as components

        return itemsList.map((i, index) =>  {
            return (<div className={'App-item'} key={i.title}>{'Title is:' + i.title + '!'}</div>);
        })
    }

    return (
        <div className="App">
            <div className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
            </div>
            <div>
                <button className={"App-button"} onClick={fill}>
                    Add More
                </button>
            </div>
            <div>
                {render()}
            </div>
        </div>
    );
}

export default App;
