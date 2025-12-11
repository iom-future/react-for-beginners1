
import { useEffect, useState } from 'react'
function FetchDataEffect() {
    let [post,setPost]= useState([]);
    useEffect(()=>{
        //immediately the components render, get data
        async function fetchData(){
            let response = await fetch("https://jsonplaceholder.typicode.com/posts");
            let resInJSON = await response.json();
          
            if(resInJSON && resInJSON.length){
                setPost(resInJSON)
            }else{
                console.log("fetch failed")
            }

            
        }
        //call function 
        fetchData()
    },[])
  return (
    <div>
        <h2>the first post title is :</h2>
      {post.length>0?<h5>{post[0].title}</h5>:<p>Loading..</p>}
    </div>
  )
}

export default FetchDataEffect