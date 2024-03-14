import {
    BOARD_DELETE,
    BOARD_DETAIL,
    BOARD_UPDATE,
    BOARD_UPDATE_DATA,
    FETCH_BOARD_INSERT,
    FETCH_BOARD_LIST
} from "./types";
import axios from "axios";
import BoardInsert from "../components/board/BoardInsert";

export const fetchBoardList=(page)=>dispatch=>{
    axios.get('http://localhost/board/list_react',{
        params:{
            page:page
        }
    }).then(response=>dispatch({
        type:FETCH_BOARD_LIST,
        payload:response.data
    }))
}

export const fetchBoardInert=(insertData)=>dispatch=>{
    axios.post('http://localhost/board/insert_react',null,{
        params:insertData
    }).then(response=>dispatch({
        type:FETCH_BOARD_INSERT,
        payload:response.data
    }))
}

export const fetchBoardDetail=(no)=>dispatch=>{
    axios.get('http://localhost/board/detail_react',{
        params:{
            no:no
        }
    }).then(response=>dispatch({
        type:BOARD_DETAIL,
        payload:response.data
    }))
}

export const boardDelete=(no,pwd)=>dispatch=>{
    axios.post('http://localhost/board/delete_react',null,{
        params:{
            no:no,
            pwd:pwd
        }
    }).then(response=>dispatch({
        type:BOARD_DELETE,
        payload: response.data
    }))
}

export const boardUpdateData=(no)=>dispatch=>{
    axios.get('http://localhost/board/update_react',{
        params:{
            no:no
        }
    }).then(response=>dispatch({
        type:BOARD_UPDATE_DATA,
        payload:response.data
    }))
}

export const boardUpdateOk=(updateData)=>dispatch=>{
    axios.post('http://localhost/board/update_ok_react',null,{
        params:updateData
    }).then(response=>dispatch({
        type:BOARD_UPDATE,
        payload: response.data
    }))
}