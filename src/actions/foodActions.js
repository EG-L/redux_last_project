import {FETCH_MAIN_DATA,FETCH_FOOD_LIST,FETCH_FOOD_FIND,FETCH_FOOD_DETAIL} from "./types";
import axios from "axios";
/*
                    dispatch()              dispatch()
                                         action => type,data
    사용자 UI(View) ========= Action 호출 ========== reducer ============= store
      React(디자인)                                                         |
                                                                         React

 */

export const fetchMainData=()=>dispatch=>{
    axios.get('http://localhost/').then(response=>dispatch({
        type:FETCH_MAIN_DATA,
        payload:response.data
    }))
}

export const fetchFoodList=(page)=>dispatch=>{
    axios.get('http://localhost/food/list_react',{
        params:{
            page:page
        }
    }).then(response=>dispatch({
        type:FETCH_FOOD_LIST,
        payload:response.data
    }))
}

export const fetchFoodFind=(page,address)=>dispatch=>{
    axios.get('http://localhost/food/find_react',{
        params:{
            page:page,
            address:address
        }
    }).then(response=>dispatch({
        type:FETCH_FOOD_FIND,
        payload:response.data
    }))
}

export const fetchFoodDetail=(fno)=>dispatch=>{
    axios.get('http://localhost/food/detail_react',{
        params:{
            fno:fno
        }
    }).then(response=>dispatch({
        type:FETCH_FOOD_DETAIL,
        payload:response.data
    }))
}