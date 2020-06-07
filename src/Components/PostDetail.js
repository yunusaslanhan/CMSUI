
import React from 'react';

import axios from 'axios';
import Menu from '../Components/Menu';
export default class PostDetail extends React.Component {
    state = {
        posts: []
    }

    componentDidMount() {
        debugger;
        axios.get(`http://localhost:52599/api/posts/GetPostDetail/${this.props.match.params.id}`)
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
                <div class="container">
                    <div class="row" style={{ marginTop: 10, backgroundColor: 'white', marginBottom: 5 }}>

                        {this.state.posts.map(post =>

                            <div dangerouslySetInnerHTML={{ __html: post.postHtml }} />

                        )}
                    </div>
                </div>
            </div>
        )
    }
}