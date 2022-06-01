import jsonPlaceholder from '../api/jsonPlaceholder';

export const fetchPostsAndUsers = () => async (dispatch) => {

    await dispatch(fetchPosts(), postData(),);


};

export const fetchPosts = () => async dispatch => {

    const response = await jsonPlaceholder.get('/photos');
    console.log(response.data);
    dispatch({ type: 'FETCH_POSTS', payload: response.data })

};

export const postData = (id) => async dispatch => {
    console.log("id", id);
    const response = await jsonPlaceholder.get('/photos/' + id);
    console.log("sdfghj", response.data);
    dispatch({ type: 'POST_DATA', payload: response.data })

};






