import React from 'react';
import {IPostItem} from "../../models/IPostItem";
import PostItem from "./PostItem";
import './PostList.css';

interface PostListProps {
    postList: Array<IPostItem>;
}

const PostList: React.FC<PostListProps> = ({postList}) => (
    <div className={'App-list'}>
        {postList.map(postItem => (
            <PostItem key={postItem.id + postItem.title} postItem={postItem} />
        ))}
    </div>
);

export default PostList;
