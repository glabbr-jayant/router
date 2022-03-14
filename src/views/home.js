import { React, Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class Home extends Component{
    
    render(){
        const posts= this.props.posts;
        const postList = posts.length ? (posts.map(post => {return(<div className='jumbotron' key={post.id}>
            <Link to={'/' + post.id }><h4>{ post.title }</h4></Link>
            { post.body }
    </div>)})) : (
            <div className='jumbotron'>HEY, NO POSTS YET</div>
        )
    return(
        <div className='container'>
        <br/>
            { postList }
        </div>
    );
    }
}

const mapStateToProps = (state) => {
    return{
        posts: state.posts
    }
}

export default connect(mapStateToProps)(Home)