
import React from 'react';

import axios from 'axios';
import Menu from '../Components/Menu';
import {Link} from 'react-router-dom';
export default class MainPagePost extends React.Component {
    state = {
        posts: []
    }

    componentDidMount() {
        debugger;
        axios.get(`http://localhost:52599/api/posts/GetMainPagePost/${this.props.match.params.id}`)
            .then(res => {
                const posts = res.data;
                this.setState({ posts });
            })
    }

    render() {
        return (
            <div>
                <div>
                    <Menu />
                </div>
                <div className="container">

                    <br />
                    <br />

                    {this.state.posts.map(post =>

                        <div className="col-md-4" style={{ backgroundColor: 'white', marginBottom: 10, border: '3px solid', borderColor: '#364150' }}>
                            <div className="blog-single-content bordered blog-container">
                                <div className="blog-single-head">
                                    <h3 className="blog-single-head-title"><strong>{post.postTitle}</strong></h3>

                                </div>
                                <div className="blog-single-img">
                                <Link to ={"/User/PostDetailPage/"+post.postId}> <img src={post.postPhoto} style={{width:350,height:250}}/></Link>
                                </div>
                                <div className="blog-single-desc">
                                    <p>
                                        {post.postDesc}
                                    </p>


                                </div>


                            </div>
                        </div>

                    )}
                </div>
            </div>  
        )
    }
}