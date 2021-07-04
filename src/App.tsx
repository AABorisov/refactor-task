import React, { useCallback, useState } from "react";
import { IPostItem } from "./models/IPostItem";
import { createList } from "./helpers/createList";
import PostList from "./components/postList/PostList";
import AddMoreButton from "./components/buttons/AddMoreButton";
import Header from "./components/header/Header";
import "./App.css";

function App(): JSX.Element {
  // postList - List of items that can be updated with new additional items when the button is pressed
  const [postList, setPostList] = useState<Array<IPostItem>>(() => {
    return createList(0, 20);
  });

  const fill = useCallback(() => {
    // The function fills the list for render with some items
    const newList: Array<IPostItem> = createList(postList.length, 20);

    setPostList((postList) => [...postList, ...newList]);
  }, [postList]);

  return (
    <div className="App">
      <Header />
      <AddMoreButton onClick={fill} />
      <PostList postList={postList} />
    </div>
  );
}

export default App;
