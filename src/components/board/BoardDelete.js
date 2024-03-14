import {useState,useRef,useEffect} from "react";
import axios from "axios";
import {useParams, useNavigate, Link} from "react-router-dom";
import {useSelector,useDispatch} from "react-redux";
import {boardDelete} from "../../actions/boardActions";

function BoardDelete(){
    const {no} = useParams()
    const nav = useNavigate()
    const [pwd,setPwd] = useState('')
    const pwdRef = useRef(null)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(boardDelete(no,pwd))
    }, [pwd]);

    const result = useSelector((state)=>state.boards.result)

    const boarddel=()=>{
        if(pwd.trim()===""){
            pwdRef.current.focus();
            return
        }
        if(result==='yes'){
            window.location.href='/board/list'
        }
        else if(result==='no'){
            alert('비밀번호가 틀립니다.')
            pwdRef.current.value=''
            pwdRef.current.focus()
        }
    }
    return(
        <div className={"row row1"}>
            <table className={"table"}>
                <tbody>
                    <tr>
                        <td>
                            비밀번호 : <input type={"password"} className={"input-sm"} ref={pwdRef} onChange={(e)=>setPwd(pwdRef.current.value)}/>
                        </td>
                    </tr>
                    <tr>
                        <td className={"text-center"}>
                            <input type={"button"} value={"삭제"} className={"btn btn-sm btn-danger"} onClick={boarddel}/>
                            <input type={"button"} className={"btn btn-sm btn-danger"} value={"취소"} onClick={()=>nav(-1)}/>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default BoardDelete