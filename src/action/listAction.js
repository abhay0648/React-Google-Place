
class ListAction {
   fetchData = (bool) => {
    return {
        type: 'GET_PLACE',
        loading: bool,
        isEmpty : false
    };
}

  fetchDataFulfilled = (data) => {
    return {
        type: 'GET_PLACE_FULFILLED',
        payload: data,
        loading: false,
        isEmpty : false
    };
}


  fetchDataRejected = (message) => {
    return {
        type: 'GET_PLACE_REJECTED',
        message: message,
        loading: false,
        isEmpty : false
    };
  }

  fetchDataEmpty = (message) => {
    return {
        type: 'GET_PLACE_EMPTY',
        message: message,
        loading: false,
        isEmpty : true
    };
  }

}

const listAction = new ListAction();
export default listAction;
