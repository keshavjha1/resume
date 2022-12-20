import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Post = () => {
  //https://stackoverflow.com/questions/58548767/react-router-dom-useparams-inside-class-component

  let { postId } = useParams();
  const [post, setPost] = useState({ post: null, countSecrets: 0, ui: "" });
  useEffect(() => {
    if (post.countSecrets === 0) {
      fetch("https://jsonplaceholder.typicode.com/todos/" + postId)
        .then((response) => response.json())
        .then((json) => {
          setPost((s) => ({ ...s, value: json }));
          console.log(json.title);
          doUI(json);
        });
      setPost((s) => ({ ...s, countSecrets: s.countSecrets + 1 }));
    }
  }, [post, postId]);

  let doUI = (x) => {
    // console.log('x' + x.title)
    const finalPost =
      x !== null ? (
        <div className="post">
          <h4 className="center">{x.title}</h4>
          <p>{x.id}</p>
        </div>
      ) : (
        <div className="center">Loading posts...</div>
      );
    setPost((s) => ({ ...s, ui: finalPost }));
  };
  const postloading = post.ui ===''? "Page Loading" :  <h1>{post.ui}ss</h1>

  return (
    <div>
      djfdjfdjfdjjkfdhkjhdfkjhdfjkhjdsfdfjhhfjhfddfjhhdfkjskdffk
     {postloading}
    </div>
  );
};

export default Post;
