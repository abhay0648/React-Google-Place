
class ListDetailAction {
   fetchDetailData = (place) => {
    return {
        type: 'GET_PLACE_DETAILS',
        payload: place,
    };
  }
}

const listDetailAction = new ListDetailAction();
export default listDetailAction;
