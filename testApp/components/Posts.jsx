import React from 'react';

const Posts = ({ state, powers }) => {

  return (
    <div>
      <h1>This the posts page</h1>
      <div>
      {state.posts.map((message) => {
        return message.body;
      })}
      </div>
    </div>
  );
};

export default Posts;
