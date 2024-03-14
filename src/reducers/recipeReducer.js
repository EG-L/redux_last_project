import {
    RECIPE_MAIN_LIST,
    FETCH_RECIPE_LIST,
    FETCH_CHEF_LIST,
    FETCH_RECIPE_DETAIL,
    FETCH_RECIPE_CHEF
} from "../actions/types";

const recipeState={
    recipe_main_list:[],
    recipe_list:{},
    chef_list:{},
    recipe_detail:{},
    recipe_chef:{}
}

export default function(state=recipeState,action){
    switch (action.type){
        case RECIPE_MAIN_LIST:
            return{
                ...state,
                recipe_main_list: action.payload
            }
        case FETCH_RECIPE_LIST:
            return{
                ...state,
                recipe_list: action.payload
            }
        case FETCH_CHEF_LIST:
            return{
                ...state,
                chef_list: action.payload
            }
        case FETCH_RECIPE_DETAIL:
            return{
                ...state,
                recipe_detail: action.payload
            }
        case FETCH_RECIPE_CHEF:
            return{
                ...state,
                recipe_chef: action.payload
            }
        default:
            return state
    }
}