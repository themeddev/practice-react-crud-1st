import { useState } from 'react';
import FetchPosts from './FetchPosts';
import { Link } from 'react-router-dom';
import PostDetail from './PostDetail';

function PostsList() {

  const {Filteredposts : posts, isLoading, handelDelete, 
        handelDeleteAll,handelSearch,handelEdit,
        selectedP, err}
        = FetchPosts('https://jsonplaceholder.typicode.com/posts')

  return (
    <div className="App">
      <h1>Blog Posts</h1>
      {err && <p className="error">{err}</p>}
      {!isLoading ? (
        <div class="lds-dual-ring"></div>
        ) : (
        <div>
          <Link to={'/post'} className="link">
            Add Post
          </Link>
          <br />
          <input
            type="text"
            placeholder="Search"
            onChange={(e) => handelSearch(e)}
            className="searchInput"
          />
          <br />
          <button
            onClick={handelDeleteAll}
            className={`deleteFetchButton ${posts ? 'delete' : 'fetch'}`}
          >
            {posts ? 'Delete All' : 'Fetch All'}
          </button>
          {posts &&
            posts.map((item) => (
              <>

                <Link className='post_link' to={`/detail/${item.id}`} >
                <ul key={item.id} className="postContainer">
                  <li>
                    <h4 className="postTitle">{item.title}</h4>
                  </li>
                  <p>{item.body}</p>
                </ul>
                </Link>
                <button
                onClick={handelEdit}
                id={item.id}
                className={`actionButton ${selectedP ? 'save' : 'edit'}`}
                >
                  {selectedP ? 'Save' : 'Edit'}
                </button>
                <button
                  onClick={() => handelDelete(item.id)}
                  className="actionButton delete"
                >
                  Delete
                </button>
              </>
              ))}
        </div>
      )}
    </div>
  );
        
}

export default PostsList;
