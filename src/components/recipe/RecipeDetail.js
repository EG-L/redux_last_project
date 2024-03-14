import {Fragment,useEffect} from "react";
import {useSelector,useDispatch} from "react-redux";
import {useParams,useNavigate} from "react-router-dom";
import {fetchRecipeDetail} from "../../actions/recipeActions";
import foodDetail from "../food/FoodDetail";

export const RecipeDetail=()=>{
    const {no} = useParams()
    const dispatch = useDispatch()
    const nav = useNavigate()
    useEffect(() => {
        dispatch(fetchRecipeDetail(no))
    }, []);
    const recipe_detail = useSelector((state)=>state.recipes.recipe_detail.detail)
    const foodmake = useSelector((state)=>state.recipes.recipe_detail.make)
    const images = useSelector((state)=>state.recipes.recipe_detail.images)
    return(
        recipe_detail&&
        <div className={"row"}>
            <table className={"table"}>
                <tbody>
                <tr>
                    <td className={"text-center"} colSpan={"3"}>
                        <img src={recipe_detail.poster} style={{"width": "700px", "height": "250px"}}/>
                    </td>
                </tr>
                <tr>
                    <td className={"text-center"} colSpan={"3"}>
                        {recipe_detail.title}
                    </td>
                </tr>
                <tr>
                    <td className={"text-center"} colSpan={"3"}>
                        {recipe_detail.content}
                    </td>
                </tr>
                <tr>
                    <td className={"text-center"}><img src={"/icon/a1.png"}/></td>
                    <td className={"text-center"}><img src={"/icon/a2.png"}/></td>
                    <td className={"text-center"}><img src={"/icon/a3.png"}/></td>
                </tr>
                <tr>
                    <td className={"text-center"}>{recipe_detail.info1}</td>
                    <td className={"text-center"}>{recipe_detail.info2}</td>
                    <td className={"text-center"}>{recipe_detail.info3}</td>
                </tr>
                </tbody>
            </table>
            <table className={"table"}>
                <tbody>
                    <tr>
                        <td><h3>재료</h3></td>
                    </tr>
                    <tr>
                        <td>
                            {recipe_detail.stuff}
                        </td>
                    </tr>
                </tbody>
            </table>
            <table className={"table"}>
                <tbody>
                <tr>
                    <td colSpan={"2"}><h3>조리순서</h3></td>
                </tr>
                {
                    foodmake && foodmake.map((fm,index)=>
                        <tr>
                            <td className={"text-left"}>{fm}</td>
                            <td className={"text-right"}>
                                <img src={images[index]} style={{"width":"100px","height":"80px"}}/>
                            </td>
                        </tr>
                    )
                }
                <tr>
                    <td rowSpan={"2"}>
                        <img src={recipe_detail.chef_poster} style={{"width":"150px","height":"100px"}}/>
                    </td>
                    <td width={"70%"}>
                        {recipe_detail.chef}
                    </td>
                </tr>
                <tr>
                   <td>{recipe_detail.chef_profile}</td>
                </tr>
                </tbody>
            </table>
            <table className={"table"}>
                <tr>
                    <td className={"text-right"}>
                        <button className={"btn-sm btn-info"} onClick={()=>nav(-1)}>목록</button>
                    </td>
                </tr>
            </table>
        </div>
    )
}