import {Fragment,useState,useEffect} from "react";
import {useSelector,useDispatch} from "react-redux";
import {fetchFoodList} from "../../actions/foodActions";
import Pagination from "react-js-pagination";
import {Link} from "react-router-dom";

export const FoodList=()=>{
    const [curpage,setCurpage] = useState(1)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchFoodList(curpage))
    }, [curpage]);

    const food_list = useSelector((state)=>state.foods.food_list.food_list)
    const totalpage = useSelector((state)=>state.foods.food_list.totalpage)

    const handleChange=(page)=>{
        setCurpage(page)
    }
    return (
        <Fragment>
            <div className={"row"}>
                {food_list && (food_list.map((food) =>
                        <div className="col-12 col-md-3">
                            <div className="single-post wow fadeInUp" data-wow-delay=".4s">

                                <div className="post-thumb">
                                    <Link to={"/food/detail/"+food.fno}>
                                        <img src={'http://www.menupan.com' + food.poster} alt=""/>
                                    </Link>
                                </div>

                                <div className="post-content">
                                    <div className="post-meta d-flex">
                                        <div className="post-author-date-area d-flex">

                                            <div className="post-author">
                                                <Link to={"/food/detail/" + food.fno}>
                                                    {food.name}
                                                </Link>
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
                                pageRangeDisplayed={10} prevPageText={"<"} nextPageText={">"} onChange={handleChange} style={{"width":"100%"}}/>
                </div>
            </div>
        </Fragment>
)
}