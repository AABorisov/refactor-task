import React, {useEffect, useState} from 'react';
import { IPostItem } from "./models/IPostItem";
import {createList} from "./helpers/createList";
import PostList from "./components/PostList";
import AddMoreButton from "./components/AddMoreButton";
import Header from "./components/Header";
import './App.css';

function App(): JSX.Element {
    // postList - List of items that can be updated with new additional items when the button is pressed
    const [postList, setPostList] = useState<Array<IPostItem>>([])

    const fill = () => {
        // The function fills the list for render with some items
        const newList: Array<IPostItem> = createList(postList.length, 20);

        setPostList(postList => [...postList, ...newList])
    }

    useEffect(() => {
        // Fills the List onmount
        fill();
    }, []);

    return (
        <div className="App">
            <Header />
            <AddMoreButton onClick={fill} />
            <PostList postList={postList} />
        </div>
    );
}

export default App;
