import axios from "axios"
import React, { useEffect, useState } from "react"
import { useParams ,Link} from "react-router-dom"
import CatBar from "../CatBar/CatBar"

const Category=()=>{
    const[blog,setBlog]=useState([])
    const[currentCategory,setCurrentCategory]=useState("")

    const{id}=useParams()
    const category = id;
    useEffect(() => {
        setCurrentCategory(category);

        const config = {
            headers: {
                'Content-Type': 'application/json',            }
        };

        const fetchData = async () => {
            try {
                const res = await axios.post(`${process.env.REACT_APP_API_URL}/api/blog/category/`, { category }, config);
                setBlog(res.data);
            }
            catch (err) {

            }
        };

        fetchData();
    }, [id]);

    const getFirstCapitalLetter = (word) => {
        if (word) {
                return word.charAt(0).toUpperCase() + word.slice(1)
        }
            return ''
    }

    const getCategory = () => {
        const list = []
        const result = []

        blog.map(blogPost => {
            return list.push(
                <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                    <div className="col p-4 d-flex flex-column position-static">
                        <strong className="d-inline-block mb-2 text-primary">{getFirstCapitalLetter(blogPost.category)}</strong>
                        <h3 className="mb-0">{blogPost.title}</h3>
                        <div className="mb-1 text-muted">{blogPost.month} {blogPost.day}</div>
                        <p className="card-text mb-auto">
                            {blogPost.excerpt}
                        </p>
                        <Link to={`/blog/${blogPost.slug}`} className="stretched-link">Continue reading</Link>
                    </div>
                    <div className="col-auto d-none d-lg-block">
                        <img src={blogPost.thumbnail} alt="thumbnail" width="200" height="250"/>
                    </div>
                </div>
            )
        })

        for(var i=0;i<list.length;i+=2){
            result.push(
                <div key={i} className="row mb-2">
                    <div className="col-md-6">
                        {list[i]}
                    </div>
                    <div className="col-md-6">
                        {list[i+1] ? list[i+1]: null}
                    </div>
                </div>
            )
        }
        return result
    }

    return(
        <div className="container mt-3">
            <h3 className="display-4">{getFirstCapitalLetter(currentCategory)}/Category</h3>
            <CatBar/>
            {getCategory()}
        </div>
    )
}

export default Category