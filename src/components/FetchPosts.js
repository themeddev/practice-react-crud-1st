import { useEffect, useState } from "react";

const FetchPosts = (url) => {
    
    const [posts, setPost] = useState([]);
    const [Filteredposts, setFilteredPost] = useState([]);
    const [isLoading, setIsLoading] = useState(null);
    const [selectedP, setSelectedP] = useState(null);
    const [searchQuery, setSearchQuery] = useState(null);
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [err, setErr] = useState(null);

    useEffect( () => {
        setTimeout(() => {
            fetch(url)
            .then(res => {      
                if(!res.ok){
                    throw Error('cannot fetch data right now! please try again')                }
                return (res.json())
            })
            .then(
            data => {
            setPost(data)
            setFilteredPost(data)
            setIsLoading(!isLoading)
            setErr(null)
            }).catch(
                err => setErr(err.message),
                setIsLoading(false)
            )
        }, 1000);
    },[url])
    const handelDelete = (id) => {
        const DeletePost = posts.filter(post => post.id != id );
        setFilteredPost(DeletePost)
    }
    const handelDeleteAll = () => {
        Filteredposts ? setFilteredPost(null) : setFilteredPost(posts);
    }

    const handelSearch = (e) => {
        setSearchQuery(e.target.value)
        if (searchQuery === null) {
            setFilteredPost(posts)
        }else{
            const newData = posts.filter(
                post => post.title.toLowerCase().includes(searchQuery.toLowerCase())
            )
            setFilteredPost(newData)
        }

    }

    const handelEdit = (e) => {
        let id = e.target.id ;
        if (selectedP) {
            alert('save it');
            setSelectedP(null)
        }else{
            alert("You are editing the post with ID: "+id);
            setSelectedP(!selectedP);
        }
    }

    const handelAdd = () => {
        const obj = [...Filteredposts];
        setFilteredPost([
            {
                id: Date.now(),
                title,
                body,
            },...obj
        ])
        console.log(Filteredposts)
    }



    
    
    
    return {Filteredposts, setFilteredPost,isLoading,handelDelete, 
            handelDeleteAll, setSearchQuery, handelSearch,
            handelEdit, selectedP, title, setTitle, body, setBody,
            handelAdd, err
            };
}
 
export default FetchPosts;