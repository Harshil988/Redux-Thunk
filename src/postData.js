import React, { useEffect, useState } from 'react';
import { postData } from './action/Action'
import { connect } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import jsonPlaceholder from './api/jsonPlaceholder';


function PostData() {
    const { id } = useParams();
    console.log("iddddd", id);
    const [postArr, setPostArr] = useState();
   
    const datafetch = async () => {
        console.log("funcation");
        const response = await jsonPlaceholder.get('/photos/' + id);
        console.log("responce-postdata", response.data);
        setPostArr(response.data);
    }
    useEffect(() => {
        datafetch()

    }, [])
    console.log("postarry-strate",postArr);
    const navigate = useNavigate();
 
    const home =()=>{
        navigate("/")
    }

    function renderList() {
        return (
            <div>
                <button className='btn btn-primary mt-3 mx-3' onClick={home}>home</button>
                <div className="item col-11 border border-success m-5 text-center " key={postArr?.id}>
                    <div>
                        <div className='m-3 p-2'>
                            <p>albumId:-{postArr?.albumId}</p>
                            <p>id:-{postArr?.id}</p>
                            <h1>title:-</h1>
                            <h1 className=''>{postArr?.title}</h1>
                            <h1>img:-</h1>
                            <img src={postArr?.thumbnailUrl} alt="icons" />
                        </div>
                    </div>
                </div>
            </div>
        );


    }


    return <div className="ui relaxed divided list">
        <div className="row">

            {renderList()}
        </div>
    </div>;
}


const mapStateToProps = (state) => {
    console.log("state====>post", state);
    return { postObj: state.posts.postObj }
}

export default connect(mapStateToProps, { postData })(PostData);




