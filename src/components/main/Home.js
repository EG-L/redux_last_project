import {Fragment, useEffect, useState} from "react";
import {fetchMainData} from "../../actions/foodActions";
import {useSelector,useDispatch} from "react-redux";
import {recipeMainList} from "../../actions/recipeActions";
import {Link} from "react-router-dom";

function Home(){
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchMainData())
        dispatch(recipeMainList())

    }, []);
    const foodMainList = useSelector((state)=>state.foods.food_main_list)
    const recipeMainList1 = useSelector((state)=>state.recipes.recipe_main_list)
    const foodMain = [...foodMainList]
    const recipe_html = recipeMainList1.map((recipe) =>
        <div className="single-populer-post d-flex">
            <img src={recipe.poster} alt=""/>
            <div className="post-content">
                <a href="#">
                    <h6>{recipe.title}</h6>
                </a>
                <p>{recipe.chef}</p>
            </div>
        </div>
    )

    const html = foodMain.map((food) =>
        <div className="col-12 col-md-6">
            <div className="single-post wow fadeInUp" data-wow-delay=".4s">

                <div className="post-thumb">
                    <img src={food.poster} alt=""/>
                </div>

                <div className="post-content">
                    <div className="post-meta d-flex">
                        <div className="post-author-date-area d-flex">

                            <div className="post-author">
                                <a href="#">{food.name}</a>
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
    return (
        <Fragment>

            <section className="categories_area clearfix" id="about">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-6 col-lg-4">
                            <div className="single_catagory wow fadeInUp" data-wow-delay=".3s">
                                <img src="/img/catagory-img/1.jpg" alt=""/>
                                <div className="catagory-title">
                                    <Link to={"/food/list"}>
                                        <h5>맛집</h5>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-4">
                            <div className="single_catagory wow fadeInUp" data-wow-delay=".6s">
                                <img src="/img/catagory-img/2.jpg" alt=""/>
                                <div className="catagory-title">
                                    <Link to={"/recipe/list"}>
                                        <h5>레시피</h5>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-4">
                            <div className="single_catagory wow fadeInUp" data-wow-delay=".9s">
                                <img src="/img/catagory-img/3.jpg" alt=""/>
                                <div className="catagory-title">
                                    <Link to={"/goods/list"}>
                                        <h5>스토어</h5>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="blog_area section_padding_0_80">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-12 col-lg-8">
                            <div className="row">


                                <div className="col-12">
                                    <div className="single-post wow fadeInUp" data-wow-delay=".2s">

                                        <div className="post-thumb">
                                            <img src={foodMain.length>0?foodMain[0].poster:null}
                                                 style={{"width": "730px", "height": "530px"}}/>
                                        </div>

                                        <div className="post-content">
                                            <div className="post-meta d-flex">
                                                <div className="post-author-date-area d-flex">

                                                    <div className="post-author">
                                                        <a href="#">{foodMain.length>0?foodMain[0].name:null}</a>
                                                    </div>
                                                </div>

                                                <div className="post-comment-share-area d-flex">

                                                    <div className="post-favourite">
                                                        <a href="#"><i className="fa fa-heart-o"
                                                                       aria-hidden="true"></i> {foodMain.length>0?foodMain[0].jjimcount:null}
                                                        </a>
                                                    </div>

                                                    <div className="post-comments">
                                                        <a href="#"><i className="fa fa-comment-o"
                                                                       aria-hidden="true"></i> {foodMain.length>0?foodMain[0].hit:null}</a>
                                                    </div>

                                                    <div className="post-share">
                                                        <a href="#"><i className="fa fa-share-alt"
                                                                       aria-hidden="true"></i></a>
                                                    </div>
                                                </div>
                                            </div>
                                            <a href="#">
                                                <h3 className="post-headline">{foodMain.length>0?foodMain[0].theme:null}</h3>
                                            </a>
                                            <a href="#" className="read-more">Continue Reading..</a>
                                        </div>
                                    </div>
                                </div>

                                {html}
                            </div>
                        </div>
                        <div className="col-12 col-sm-8 col-md-6 col-lg-4">
                            <div className="blog-sidebar mt-5 mt-lg-0">

                                <div className="single-widget-area about-me-widget text-center">
                                    <div className="widget-title">
                                        <h6>오늘의 쉐프</h6>
                                    </div>
                                    <div className="about-me-widget-thumb">
                                        <img src="/img/about-img/1.jpg" alt=""/>
                                    </div>
                                    <h4 className="font-shadow-into-light">Shopia Bernard</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                                        incididunt</p>
                                </div>

                                <div className="single-widget-area popular-post-widget">
                                    <div className="widget-title text-center">
                                        <h6>인기 레시피</h6>
                                    </div>

                                    {recipe_html}
                                </div>


                                <div className="single-widget-area add-widget text-center">
                                    <div className="add-widget-area">
                                        <img src="/img/sidebar-img/6.jpg" alt=""/>
                                            <div className="add-text">
                                                <div className="yummy-table">
                                                    <div className="yummy-table-cell">
                                                        <h2>Cooking Book</h2>
                                                        <p>Buy Book Online Now!</p>
                                                        <a href="#" className="add-btn">Buy Now</a>
                                                    </div>
                                                </div>
                                            </div>
                                    </div>
                                </div>


                                <div className="single-widget-area newsletter-widget">
                                    <div className="widget-title text-center">
                                        <h6>오늘의 뉴스</h6>
                                    </div>
                                    <p>Subscribe our newsletter gor get notification about new updates, information
                                        discount, etc.</p>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </Fragment>
)
}

export default Home