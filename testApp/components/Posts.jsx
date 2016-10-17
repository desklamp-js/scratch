import React from 'react';

const Posts = ({ state }) => {
  return (
    <div className="container">
      <h1>This the posts page</h1>
      
        {state.posts.map((message) => {
          return (
          [<div className="posts">
            <h3> {message.title}</h3>
            <div>{message.body}</div>
            </div>
          ]
          );
        })}
      
    </div>
  );
};

Posts.defaultProps = {
  posts: [],
};

export default Posts;
