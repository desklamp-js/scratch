import React from 'react';

const Posts = ({ posts }) => {
  return (
    <div>
      <h1>This the posts page</h1>
      <div>
      {posts.map((message) => {
        return message.body;
      })}
      </div>
    </div>
  );
};

Posts.defaultProps = {
  posts: [],
};

export default Posts;
