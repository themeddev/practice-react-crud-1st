import { Link } from "react-router-dom";
import FetchPosts from "./FetchPosts";

const PostEdit = () => {

    const { Filteredposts : posts, title, body, setBody, setTitle, handelAdd } = FetchPosts('')

    // let index = posts.findIndex(post => post.id == selectedP)

    return (
        <>
        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
        <div className="sm:col-span-4">
          <label for="username" className="block text-sm font-medium leading-6 text-gray-900">Username</label>
          <div className="mt-2">
              <input type="text" onChange={(e) => setTitle(e.target.value) } name="title" autocomplete="title" className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6" placeholder="title" />
          </div>
        </div>

        <div className="col-span-full">
          <label for="about" className="block text-sm font-medium leading-6 text-gray-900">About</label>
          <div className="mt-2">
            <textarea onChange={(e) => setBody(e.target.value) } id="about" name="about" rows="3" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"></textarea>
          </div>
          <p className="mt-3 text-sm leading-6 text-gray-600">Write a few sentences about yourself.</p>
        </div>

        <div class="mt-6 flex items-center justify-end gap-x-6">
            <button type="button" onClick={handelAdd} class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Add post</button>
            <Link class="text-sm font-semibold leading-6 text-gray-900" to='/' >Back Home</Link>
        </div>
        </div> 
        </> 
     );
}
 
export default PostEdit;