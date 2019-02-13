import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import Slider from '../slider/Slider'

class Home extends Component {
    
    render() {
        console.log(this.props);
        const { posts } = this.props;
        const postsList = posts.length ? (
            posts.map(post => {
                return (
                    <div className="post card" key={post.id}>
                        <div className="card-content">
                            <Link to={'/' + post.id}>
                                <span className="card-title">{post.title}</span>
                            </Link>
                            <p>{post.body}</p>
                        </div>
                    </div>
                )
            })
        ) : (
                <div className="center">no post yet</div>
            )
        return (
            <div>
                <div className="position-relative">
                    <Slider />
                    <button className="center -primary" >중앙정렬중앙</button>
                </div>
                <div className="container">
                    <h4 className="center">Home</h4>
                    {postsList}
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    console.log(state);
    return {
        posts: state.posts
    }
}

export default connect(mapStateToProps)(Home)