export default (state = {
	post:{},
	postObj:{}
}, action) => {
	console.log("action===>", action);
	switch (action.type) {

		case 'FETCH_POSTS':
			return {
				...state,
				post:action.payload
			} 

			case 'POST_DATA':
			return{ 
				...state,
				postObj:action.payload
			}
			
		
			
		default:
			return state;
	}
};

