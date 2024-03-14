import {Provider} from "react-redux";
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Header from "./components/main/Header";
import Footer from "./components/main/Footer";
import Home from "./components/main/Home";
import store from "./store/store";
import {FoodList} from "./components/food/FoodList";
import RecipeList from "./components/recipe/RecipeList";
import {FoodFind} from "./components/food/FoodFind";
import {ChefList} from "./components/recipe/ChefList";
import FoodDetail from "./components/food/FoodDetail";
import {RecipeDetail} from "./components/recipe/RecipeDetail";
import {ChefRecipeList} from "./components/recipe/ChefRecipeList";
import {BoardList} from "./components/board/BoardList";
import BoardInsert from "./components/board/BoardInsert";
import BoardDetail from "./components/board/BoardDetail";
import BoardUpdate from "./components/board/BoardUpdate";
import BoardDelete from "./components/board/BoardDelete";

function App() {
  return (
      <Provider store={store}>
          <Router>
            <Header/>
            <div className={"container"}>
              <Routes>
                  <Route path={"/"} element={<Home/>}/>
                  <Route path={"/food/list"} element={<FoodList/>}/>
                  <Route path={"/recipe/list"} element={<RecipeList/>}/>
                  <Route path={"/food/find"} element={<FoodFind/>}/>
                  <Route path={"/chef/list"} element={<ChefList/>}/>
                  <Route path={"/food/detail/:fno"} element={<FoodDetail/>}/>
                  <Route path={"/recipe/detail/:no"} element={<RecipeDetail/>}/>
                  <Route path={"/chef/detail/:chef"} element={<ChefRecipeList/>}/>
                  <Route path={"/board/list"} element={<BoardList/>}/>
                  <Route path={"/board/insert"} element={<BoardInsert/>}/>
                  <Route path={"/board/detail/:no"} element={<BoardDetail/>}/>
                  <Route path={"/board/update/:no"} element={<BoardUpdate/>}/>
                  <Route path={"/board/delete/:no"} element={<BoardDelete/>}/>
              </Routes>
            </div>
            <Footer/>
          </Router>
      </Provider>
  );
}

export default App;
