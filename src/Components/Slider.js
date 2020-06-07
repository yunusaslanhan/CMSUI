
import React from 'react';

import axios from 'axios';
import {Link} from 'react-router-dom';
export default class Slider extends React.Component {
    state = {
        posts: []
    }

    componentDidMount() {
        axios.get(`http://localhost:52599/api/posts/GetSliders`)
            .then(res => {
                const posts = res.data;
                this.setState({ posts });
            })
    }

    render() {
        let i = 0;
        return (
            <div>
                <div id="myCarousel" className="carousel slide" data-ride="carousel" data-interval="6000">
                    <ol className="carousel-indicators">
                        {this.state.posts.map(post =>
                            <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
                        )}

                    </ol>

                    <div className="carousel-inner" role="listbox">

                        {this.state.posts.map(post =>
                            <div className={"item " + (i == 0 ? 'active' : '')}>
                                <Link to={"/User/PostDetailPage/"+post.postId}> <img src={post.image} style={{ width: 1200, height: 500 }} /></Link>
                                <div className="carousel-caption" role="option">
                                    <p>
                                        {post.desc}
                                    </p>

                                </div>
                                {
                                    i++
                                }
                            </div>

                        )}

                    </div>
                    <a className="left carousel-control" href="#myCarousel" role="button" data-slide="prev">
                        <span className="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="right carousel-control" href="#myCarousel" role="button" data-slide="next">
                        <span className="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>
                </div>
            </div>
        )
    }
}