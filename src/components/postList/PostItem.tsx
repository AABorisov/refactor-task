import React from "react";
import { IPostItem } from "../../models/IPostItem";
import "./PostItem.css";

interface PostItemProps {
  postItem: IPostItem;
}

const PostItem: React.FC<PostItemProps> = ({ postItem }) => (
  <div className={"App-item"}>{`Title is: ${postItem.title}!`}</div>
);

export default PostItem;
