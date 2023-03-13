
import { getTasksRequest } from '../../utils/srm-api';
import { IGetItemsTasks } from '../../utils/types';
import { GET_ITEMS_FAILED, GET_ITEMS_REQUEST, GET_ITEMS_SUCCESS } from '../constants/task-details-constants';
import { AppDispatch } from '../store';

export interface IRegisterUserRequestAction {
    readonly type: typeof GET_ITEMS_REQUEST;
}
export interface IRegisterUserSuccessAction {
    readonly type: typeof GET_ITEMS_SUCCESS;
    readonly data: IGetItemsTasks;
}
export interface IRegisterUserFailedAction {
    readonly type: typeof GET_ITEMS_FAILED;
}
export type TItemsTasksActions =
    | IRegisterUserRequestAction
    | IRegisterUserSuccessAction
    | IRegisterUserFailedAction;

export const getItemsTasks = () => {

    return async (dispatch: AppDispatch) => {
        dispatch({
            type: GET_ITEMS_REQUEST
        })
        getTasksRequest().then(res => {
            if (res && res.success) {
                console.log(res)
                dispatch({
                    type: GET_ITEMS_SUCCESS,
                    payload: res.data
                })
            } else {
                dispatch({
                    type: GET_ITEMS_FAILED
                })
            }
        }).catch(err => {
            console.log(err)
            dispatch({
                type: GET_ITEMS_FAILED
            })
        })
    }
} 
