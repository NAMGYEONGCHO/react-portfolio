import React, {Component} from 'react'
//import axios from 'axios'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'

class Home extends Component{
    /* state = {
        posts: []
    }
    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(res => {
            this.setState({
                posts: res.data.slice(0,20)
            })
        })
        
    } */
    render(){
        console.log(this.props);
        const {posts} = this.props;
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
        ):(
            <div className="center">no post yet</div>
        )
        return (
            <div className="container">
                <h4 className="center">Home</h4>
                {postsList}
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