import {Fragment, useState, useEffect, useRef} from "react";
import axios from "axios";
import {useNavigate,useParams} from "react-router-dom";
import {useSelector,useDispatch} from "react-redux";
import {boardUpdateData, boardUpdateOk} from "../../actions/boardActions";

function BoardUpdate(){
    const nav = useNavigate()
    const [name,setName] = useState('')
    const [subject,setSubject] = useState('')
    const [content,setContent] = useState('')
    const [pwd,setPwd] = useState('')

    const nameRef = useRef(null)
    const contentRef = useRef(null)
    const subjectRef = useRef(null)
    const pwdRef = useRef(null)
    const dispatch = useDispatch()

    const {no} = useParams()
    useEffect(() => {
        dispatch(boardUpdateData(no))
    }, []);
    const update_data = useSelector((state)=>state.boards.update_data)

    useEffect(() => {
        setName(update_data.name)
        setSubject(update_data.subject)
        setContent(update_data.content)
    }, [update_data]);
    const nameChange=(e)=>{
        setName(e.target.value)
    }
    const subjectChange=(e)=>{
        setSubject(e.target.value)
    }
    const contentChange=(e)=>{
        setContent(e.target.value)
    }
    const pwdChange=(e)=>{
        setPwd(e.target.value)
    }
    const update=()=>{
        if(name.trim()===""){
            nameRef.current.focus();
            return;
        }
        if(subject.trim()===""){
            subjectRef.current.focus();
            return;
        }
        if(content.trim()===""){
            contentRef.current.focus();
            return;
        }
        if(pwd.trim()===""){
            pwdRef.current.focus();
            return;
        }
        if(result==='yes'){
            window.location.href="/board/detail/"+no
        }
        else{
            alert('비밀번호가 틀렸습니다.')
            pwdRef.current.value=''
            pwdRef.current.focus()
        }
    }
    const params={
        name:name,
        subject:subject,
        content:content,
        pwd:pwd,
        no:no
    }
    useEffect(() => {
        dispatch(boardUpdateOk(params))
    }, [pwd]);

    const result = useSelector((state)=>state.boards.result)

    return(
        <div className={"row"}>
            <h3 className={"text-center"}>수정하기</h3>
            <table className={"table"}>
                <tbody>
                <tr>
                    <td width={"15%"} className={"text-center"}>이름</td>
                    <td width={"85%"}>
                        <input type={"text"} size={"15"} className={"input-sm"} onChange={nameChange} value={name} ref={nameRef}/>
                    </td>
                </tr>
                <tr>
                    <td width={"15%"} className={"text-center"}>제목</td>
                    <td width={"85%"}>
                        <input type={"text"} size={"50"} className={"input-sm"} onChange={subjectChange} value={subject} ref={subjectRef}/>
                    </td>
                </tr>
                <tr>
                    <td width={"15%"} className={"text-center"}>내용</td>
                    <td width={"85%"}>
                        <textarea rows={"10"} cols={52} onChange={contentChange} ref={contentRef} value={content}>{content}</textarea>
                    </td>
                </tr>
                <tr>
                    <td width={"15%"} className={"text-center"} >비밀번호</td>
                    <td width={"85%"}>
                        <input type={"password"} size={"15"} className={"input-sm"} onChange={pwdChange} value={pwd} ref={pwdRef}/>
                    </td>
                </tr>
                <tr>
                    <td colSpan={"2"} className={"text-center"}>
                        <input type={"button"} className={"btn-sm btn-info"} value={"수정"} onClick={update}/>
                        <input type={"button"} className={"btn-sm btn-warning"} value={"취소"} onClick={()=>nav(-1)}/>
                    </td>
                </tr>

                </tbody>
            </table>
        </div>
    )
}

export default BoardUpdate