import React from "react"
import { Link } from "react-router-dom"

const Home = () => {
    return (
        <div className="container">
            <div className="jumbotron mt-5">
                <h1 className="display-4"><strong>Welcome to Blog Lyfe!</strong></h1>
                <p className="lead">All Kinda Awesome Blogs You will get here..</p>
                <hr className="my-4"/>
                <p>Click on the below button to check all awesome blogs.</p>
                <p className ="lead">
                <Link className ="btn btn-primary btn-lg" to="/blog" role="button">Check out our Blog</Link>
                </p>
            </div>
        </div>
    )
}

export default Home