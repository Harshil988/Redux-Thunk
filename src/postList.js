import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { fetchPosts, postData } from './action/Action';
import { Link, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';


function PostList(props) {
    const [postArr, setPostArr] = useState([]);
    console.log("props", props);
    const navigate = useNavigate();
    useEffect(() => {
        props.fetchPosts()

    }, []);
    useEffect(() => {
        if (props.post.length && postArr.length == 0) {
            console.log("12345", props.post.length);
            setPostArr(props.post)
        }
    }, [props.post])
    function dispatchUSerData(item) {
        props.postData(item.id)
        // console.log("item", item.id);
        navigate(`/Postdata/${item.id}`);
    }
    function renderList() {
        return postArr?.map(post => {
            // console.log(props.posts);

            return (
                <div>

                    <div className="item col-10  border border-success m-5 text-center " key={post.id}>
                        <div>
                            <div className='m-3 p-2'>
                                <h1 className='mb-5'>{post.title}</h1>
                                <img src={post.thumbnailUrl} alt="icons" /><br></br>
                                <button className='btn btn-primary mt-5' onClick={() => dispatchUSerData(post)} >all details</button>
                            </div>
                        </div>
                    </div>
                </div>
            );

        });
    }


    return <div className="ui relaxed divided list">
        <Link to='/importdata'><button className='btn btn-primary mt-3 mx-3'>import data</button> </Link>
        <div className="row">

            {renderList()}
        </div>
    </div>;
}


const mapStateToProps = (state) => {
    console.log("state====>post", state);
    return { post: state.posts.post }
}

export default connect(mapStateToProps, { fetchPosts, postData })(PostList);
