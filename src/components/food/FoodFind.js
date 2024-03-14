import {Fragment,useState,useEffect} from "react";
import {useSelector,useDispatch} from "react-redux";
import {fetchFoodFind} from "../../actions/foodActions";
import {useRef} from "react";
import Pagination from "react-js-pagination";
import {Link} from "react-router-dom";

export const FoodFind=()=>{
    const [address,setAddress] = useState('마포')
    const [curpage,setCurpage] = useState(1)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchFoodFind(curpage,address))
    }, [curpage,address]);

    const findList = useSelector((state)=>state.foods.find_list.find_list)
    const totalpage = useSelector((state)=>state.foods.find_list.totalpage)

    const addressRef = useRef()
    const addressChange = ()=>{
        setAddress(addressRef.current.value)
    }

    const handleChange=(page)=>{
        setCurpage(page)
    }

    return(
        <Fragment>
            <div className={"row"}>
                <input type={"text"} size={"20"} className={"input-sm"} value={address} ref={addressRef} onChange={addressChange}/>
                <button className={"btn-sm btn-danger"}>검색</button>
            </div>
            <div style={{"height": "20px"}}></div>
            <div className={"row"}>
                {findList && (findList.map((food) =>
                        <div className="col-12 col-md-3">
                            <div className="single-post wow fadeInUp" data-wow-delay=".4s">

                                <div className="post-thumb">
                                    <Link to={"/food/detail/"+food.fno}>
                                        <img src={'http://www.menupan.com'+food.poster} alt=""/>
                                    </Link>
                                </div>

                                <div className="post-content">
                                    <div className="post-meta d-flex">
                                        <div className="post-author-date-area d-flex">

                                            <div className="post-author">
                                                <Link to={"/food/detail/"+food.fno}>{food.name}</Link>
                                            </div>
                                        </div>

                                        <div className="post-comment-share-area d-flex">

                                            <div className="post-comments">
                                                <a href="#"><i className="fa fa-heart-o"
                                                               aria-hidden="true"></i> {food.hit}
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )

                )}
            </div>
            <div>
                <div className={"text-center"}>
                    <Pagination activePage={curpage} itemsCountPerPage={12} totalItemsCount={totalpage}
                                pageRangeDisplayed={10} prevPageText={"<"} nextPageText={">"} onChange={handleChange}
                                style={{"width": "100%"}}/>
                </div>
            </div>
        </Fragment>
    )
}