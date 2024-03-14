import {
    BOARD_DELETE,
    BOARD_DETAIL,
    BOARD_UPDATE,
    BOARD_UPDATE_DATA,
    FETCH_BOARD_INSERT,
    FETCH_BOARD_LIST
} from "../actions/types";

const boardState={
    board_list:{},
    result:'',
    board_detail:{},
    update_data:{}
}

export default function (state=boardState,action){
    switch (action.type){
        case FETCH_BOARD_LIST:
            return{
                ...state,
                board_list:action.payload
            }
        case FETCH_BOARD_INSERT:
            return{
                ...state,
                result:action.payload
            }
        case BOARD_DETAIL:
            return{
                ...state,
                board_detail:action.payload
            }
        case BOARD_DELETE:
            return{
                ...state,
                result: action.payload
            }
        case BOARD_UPDATE_DATA:
            return{
                ...state,
                update_data:action.payload
            }
        case BOARD_UPDATE:
            return{
                ...state,
                result:action.payload
            }
        default:
            return state
    }
}