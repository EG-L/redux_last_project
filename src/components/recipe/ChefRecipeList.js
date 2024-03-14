import {Fragment,useEffect,useState} from "react";
import {useParams, useNavigate, Link} from "react-router-dom";
import {useSelector,useDispatch} from "react-redux";
import {fetchRecipeChef} from "../../actions/recipeActions";
import Pagination from "react-js-pagination";

export const ChefRecipeList=()=>{
    const [curpage,setCurpage] = useState(1)
    const {chef} = useParams()
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchRecipeChef(curpage,chef))
    }, [curpage]);

    const recipe_list = useSelector((state)=>state.recipes.recipe_chef.list)
    const totalpage = useSelector((state)=>state.recipes.recipe_chef.totalpage)

    const handleChange=(page)=>{
        setCurpage(page)
    }

    return(
        <Fragment>
            <div className={"row"}>
                {
                    recipe_list &&
                    recipe_list.map((recipe) =>
                        <div className="col-12 col-md-3">
                            <div className="single-post wow fadeInUp" data-wow-delay=".4s">

                                <div className="post-thumb">
                                    <Link to={"/recipe/detail/" + recipe.no}>
                                        <img src={recipe.poster} title={recipe.title} alt=""/>
                                    </Link>
                                </div>

                                <div className="post-content">
                                    <div className="post-meta d-flex">
                                        <div className="post-author-date-area d-flex">

                                            <div className="post-author">
                                                <a href="#">{recipe.chef}</a>
                                            </div>
                                        </div>

                                        <div className="post-comment-share-area d-flex">

                                            <div className="post-favourite">
                                                <a href="#"><i className="fa fa-heart-o"
                                                               aria-hidden="true"></i> 10</a>
                                            </div>

                                            <div className="post-share">
                                                <a href="#"><i className="fa fa-share-alt"
                                                               aria-hidden="true"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
            totalpage&&
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