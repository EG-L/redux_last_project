import {FETCH_FOOD_LIST, FETCH_MAIN_DATA, FETCH_FOOD_FIND, FETCH_FOOD_DETAIL} from "../actions/types";

const foodState={
    food_main_list:[],
    food_list:{},
    find_list:{},
    food_detail:{}
}

// dispatch(action) ==> 구현
// react => useSelector((state)=> state.foods.food_main_list)
export default function (state=foodState,action){
    switch (action.type){
        case FETCH_MAIN_DATA:
            return{
                ...state,
                food_main_list: action.payload
            }
        case FETCH_FOOD_LIST:
            return{
                ...state,
                food_list: action.payload
            }
        case FETCH_FOOD_FIND:
            return{
                ...state,
                find_list:action.payload
            }
        case FETCH_FOOD_DETAIL:
            return{
                ...state,
                food_detail: action.payload
            }
        default:
            return state
    }
}