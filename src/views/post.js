import React, { Component } from 'react';
import { connect } from 'react-redux';

class Post extends Component{
    handleClick = () => {
        this.props.deletePost(this.props.post.id);
        this.props.history.push('/');
    }
    render(){
        console.log(this.props.post)
        const post = this.props.post ? (
        <div className='container'>
            <span className='text-center text-primary'>
                <h1>{ this.props.post.title }</h1>
            </span>
            <br/>
            <span className='text-info'>
                <h5>{ this.props.post.body }</h5>
            </span><br/> 
            <div className='text-center'>
                <button className='btn btn-danger' onClick={ this.handleClick } >DELETE POST</button>
            </div>   
        </div> ) : (
            <div className='container text-danger'>
                <h2>Error 404: Post not Found</h2>
            </div>
        )

        return(
            <div className='container'>
            <br/>
                { post }
            </div>
        );
    }

}

const mapStateToProps = (state, myProps) => {
    let id = myProps.match.params.post_id;
    return{
        post : state.posts.find(post => post.id ==id)
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        deletePost: (id) => {
            dispatch({type:'DELETE_POST', id:id})
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Post)   