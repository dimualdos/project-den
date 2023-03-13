


import {
    GET_ITEMS_REQUEST,
    GET_ITEMS_FAILED,
    GET_ITEMS_SUCCESS
} from '../constants/task-details-constants'

interface ITaskReduser {
    itemsRequest: boolean,
    itemsFailed: boolean,
    tasks: [],
}

export const initialState: ITaskReduser = {
    itemsRequest: false,
    itemsFailed: false,
    tasks: [],
}


export const tasksReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case GET_ITEMS_REQUEST: {
            return {
                ...state,
                itemsRequest: true,
                itemsFailed: false,
            };
        }
        case GET_ITEMS_SUCCESS: {
            return {
                ...state,
                tasks: action.payload,
                itemsFailed: false,
                itemsRequest: false
            };
        }
        case GET_ITEMS_FAILED: {
            return {
                ...state,
                itemsFailed: true,
                itemsRequest: false
            };
        }
        default: {
            return state
        }
    }
}

