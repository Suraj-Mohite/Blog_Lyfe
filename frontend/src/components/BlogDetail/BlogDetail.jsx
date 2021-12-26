import axios from "axios"
import React, { useEffect, useState } from "react"
import { Link ,useParams} from "react-router-dom"

const BlogDetail=(props)=>{
    const[blog,setBlog] =useState({})
    let {id}=useParams()
    useEffect(()=>{
        
        const fetchData=async ()=>{
            try{
                const res=await axios.get(`${process.env.REACT_APP_API_URL}/api/blog/${id}`)
                setBlog(res.data)

            }catch(err){

            }
        }
        fetchData()

    },[id])

    const createBlog=()=>{
        return {__html: blog.content}
    }

    const getFirstCapitalLetter = (word) => {
        if (word) {
            return word.charAt(0).toUpperCase() + word.slice(1)
        }
        return ''
    }

    return(
        <div className="container">
            <h1 className="display-2">{blog.title}</h1>
            <h2 className="text-muted mt3">Categor : {getFirstCapitalLetter(blog.category)}</h2>
            <h4>{blog.month} {blog.day}</h4>
            <div className="mt-5 mb-5" dangerouslySetInnerHTML={createBlog()}/>
            <hr />
            <p className="lead mb-5"><Link to='/blog' className="font-weight-bold">Back to Blogs</Link></p>
            
        </div>
    )
}

export default BlogDetail
