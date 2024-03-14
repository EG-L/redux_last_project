import {Fragment,useState,useEffect} from "react";
import {useSelector,useDispatch} from "react-redux";
import {fetchRecipeList} from "../../actions/recipeActions";
import Pagination from "react-js-pagination";
import {Link} from "react-router-dom";
/*
       redux => 분산 (여러명이 동시에 개발)
         => 변경이 편리하다 (유지보수가 편리하다)
         => 데이터를 공유해서 저장 : 모든 컴포넌트에서 데이터 읽기가 편하다.

         function App{
            const [name,setName] = useState("홍길동")
            return (
                <A name={name}/>
            )
         }
         function A(props){
            return (
                <B name={props.name}/>
            )
         }
         function B(props){
            return (
                <C name={props.name}/>
            )
         }
         function C(props){
            return (
                <D name={props.name}/>
            )
         }
         function D(props){
            return (
                {props.name}
            )
         }
 */
function RecipeList(){
    const [curpage,setCurpage] = useState(1)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchRecipeList(curpage))
    }, [curpage]);

    const recipe_list = useSelector((state)=>state.recipes.recipe_list.list)
    const totalpage = useSelector((state)=>state.recipes.recipe_list.totalpage)


    const handleChange=(page)=>{
        setCurpage(page)
    }

    return(
        <Fragment>
            <div className={"row"}>
                {recipe_list && (recipe_list.map((recipe) =>
                        <div className="col-12 col-md-3">
                            <div className="single-post wow fadeInUp" data-wow-delay=".4s">

                                <div className="post-thumb">
                                    <Link to={"/recipe/detail/"+recipe.no}>
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

export default RecipeList