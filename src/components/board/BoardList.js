import {Fragment,useState,useEffect} from "react";
import {useDispatch,useSelector} from "react-redux";
import {Link} from "react-router-dom";
import {fetchBoardList} from "../../actions/boardActions";

export const BoardList=()=>{
    const [curpage,setCurpage] = useState(1)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchBoardList(curpage))
    }, [curpage]);
    const board_list = useSelector((state)=>state.boards.board_list.blist)
    const totalpage = useSelector((state)=>state.boards.board_list.totalpage);
    return(
        <Fragment>
            <h3 className={"text-center"}>자유 게시판</h3>
            <div className={"row"}>
                <table className={"table"}>
                    <tbody>
                        <tr>
                            <td className={"text-right"}>
                                <Link className={"btn btn-sm btn-primary"} to={"/board/insert"}>새글</Link>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <table className={"table"}>
                    <thead>
                    <tr className={"danger"}>
                        <th className={"text-center"} width={"10%"}>번호</th>
                        <th className={"text-center"} width={"45%"}>제목</th>
                        <th className={"text-center"} width={"15%"}>이름</th>
                        <th className={"text-center"} width={"20%"}>작성일</th>
                        <th className={"text-center"} width={"10%"}>조회수</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        board_list &&
                        board_list.map((vo)=>
                            <tr>
                                <td className={"text-center"} width={"10%"}>{vo.no}</td>
                                <td width={"45%"}><Link to={"/board/detail/"+vo.no}>{vo.subject}</Link></td>
                                <td className={"text-center"} width={"15%"}>{vo.name}</td>
                                <td className={"text-center"} width={"20%"}>{vo.regdate.split(" ")[0]}</td>
                                <td className={"text-center"} width={"10%"}>{vo.hit}</td>
                            </tr>
                        )
                    }
                    </tbody>
                </table>
            </div>
            <div style={{"height": "10px"}}></div>
                <div className={"text-center"}>
                    <button className={"btn-sm btn-warning"}>이전</button>
                    {curpage} page / {totalpage} pages
                    <button className={"btn-sm btn-warning"}>다음</button>
                </div>
        </Fragment>

    )
}