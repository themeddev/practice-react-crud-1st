import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import FetchPosts from "./FetchPosts";

const PostDetail = () => {
  const { id } = useParams();
  const {
    Filteredposts: post,
    handelAdd,
    title,
    setTitle,
    body,
    setBody,
  } = FetchPosts("https://jsonplaceholder.typicode.com/posts/" + id);
//   const post = posts.find((post) => post.id === parseInt(id));

  // State to track if the post is being edited
  const [isEditing, setIsEditing] = useState(false);

  // Effect to update input values when the selected post changes
  useEffect(() => {
    if (post) {
      setTitle(post.title);
      setBody(post.body);
    }
  }, [post, setTitle, setBody]);

  // Handler to toggle the editing state
  const toggleEditing = () => {
    setIsEditing(!isEditing);
  };

  // Handler to update the post data
  const handleUpdatePost = () => {
    // Implement logic to update the post data (e.g., send a request to your API)
    // For demonstration purposes, we'll just log the updated data
    setTitle(post.title);
    setBody(post.body);



    // After updating, you can set isEditing back to false
    setIsEditing(false);
  };

  return (
    <>
      {!post ? (
        <div className="lds-dual-ring"></div>
      ) : (
        <>
          <h3>Post ID: {id}</h3>
          <div className="card">
            <img
              src="https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w1200/2023/10/free-images.jpg"
              alt="image"
              width="300px"
            />
            <h2>
              {isEditing ? (
                <input
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  style={{
                    border: "none",
                    outline: "none",
                    fontSize: "1.5rem",
                    fontWeight: "bold",
                    backgroundColor: "transparent",
                  }}
                />
              ) : (
                post.title
              )}
            </h2>
            <p>
              {isEditing ? (
                <textarea
                  value={body}
                  onChange={(e) => setBody(e.target.value)}
                  style={{
                    border: "none",
                    outline: "none",
                    fontSize: "1rem",
                    backgroundColor: "transparent",
                  }}
                />
              ) : (
                post.body
              )}
            </p>
            {isEditing ? (
                <>
                <button onClick={handleUpdatePost}>Save</button>
                <button onClick={() => setIsEditing(false)} >Cancel</button>
                </>
            ) : (
              <button onClick={toggleEditing}>Edit</button>
            )}
            <Link className="link" to="/">
              Back home
            </Link>
          </div>
        </>
      )}
    </>
  );
};

export default PostDetail;