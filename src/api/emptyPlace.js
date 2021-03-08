import listAction from '../action/listAction.js';

export const emptyPlace = () => {
    return  dispatch => {
            dispatch(listAction.fetchDataEmpty(true));
    }
}
