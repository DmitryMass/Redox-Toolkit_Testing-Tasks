import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPosts, removedPostById } from '../../Store/Slice/postSlice';
import { nanoid } from 'nanoid';

const Posts = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts.posts);
  return (
    <div>
      <button onClick={() => dispatch(getPosts())}>GetPost</button>
      <div>
        {posts.map((post) => {
          return <PostItem key={nanoid()} post={post} />;
        })}
      </div>
    </div>
  );
};

const PostItem = ({ post }) => {
  const dispatch = useDispatch();
  return (
    <div
      style={{ cursor: 'pointer' }}
      onClick={() => dispatch(removedPostById(post.id))}
    >
      {post.title}
    </div>
  );
};

export default Posts;
