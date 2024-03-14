
import {RECIPE_MAIN_LIST,FETCH_RECIPE_LIST,FETCH_CHEF_LIST,FETCH_RECIPE_DETAIL,FETCH_RECIPE_CHEF} from "./types";
import axios from "axios";

export const recipeMainList=()=>dispatch=>{
    axios.get("http://localhost/recipe/main").then(response=>dispatch({
       type:RECIPE_MAIN_LIST,
       payload:response.data
    }))
}

export const fetchRecipeList=(page)=>dispatch=>{
    axios.get("http://localhost/recipe/list_react",{
        params:{
            page:page
        }
    }).then(response=>dispatch({
        type:FETCH_RECIPE_LIST,
        payload:response.data
    }))
}

export const fetchChefList=(page)=>dispatch=>{
    axios.get('http://localhost/chef/list_react',{
        params:{
            page:page
        }
    }).then(response=>dispatch({
        type:FETCH_CHEF_LIST,
        payload:response.data
    }))
}

export const fetchRecipeDetail=(no)=>dispatch=>{
    axios.get('http://localhost/recipe/detail_react',{
        params:{
            no:no
        }
    }).then(response=>dispatch({
        type:FETCH_RECIPE_DETAIL,
        payload:response.data
    }))
}

export const fetchRecipeChef=(page,chef)=>dispatch=>{
    axios.get('http://localhost/recipe/chef_recipe_react',{
        params:{
            page:page,
            chef:chef
        }
    }).then(response=>dispatch({
        type:FETCH_RECIPE_CHEF,
        payload:response.data
    }))
}