import {Fragment,useState,useEffect} from "react";
import {useParams,useNavigate} from "react-router-dom";
import {useSelector,useDispatch} from "react-redux";
import {fetchFoodDetail} from "../../actions/foodActions";

/*
         dispatch(액션함수 호출)         dispatch(action)
                 |                           |
              서버연결 후 데이터 읽기       읽은 데이터를 처리
                                           state 저장 => state 전송(웹에 필요한 모든 데이터)
  React =======> actions ========> reducer =========> store
                                                        |
                                                      모든 React Component에서 state에 데이터를 사용
  =====          =========================            =====
   View                  Model                        Controller ==> Front에서 MVC
                           | 나눠서 작업
  1. 단방향 통신 => 공유하는 데이터를 만들어서 처리 (양방향 통신)
  2. 데이터 관리가 쉽다
  3. 여러명이 동시에 만들 수 있다.

    1. React(Component) => 화면 변경 확인
    2. 서버 제작 (Spring-boot)
      => 1) JPA
      => 2) RestController
    3. types에 등록
    4. 해당 action 처리 => 서버와 연결 => 데이터 읽기

*/

function FoodDetail(){
    const {fno} = useParams()
    const dispatch = useDispatch()
    const nav = useNavigate()

    useEffect(() => {
        dispatch(fetchFoodDetail(fno))
    }, []);

    const food_detail = useSelector((state)=>state.foods.food_detail)
    /*
            React.createElement("div","row",React.createElement('table','table')...)
     */
    console.log(food_detail)

    return(
        <Fragment>
            <div className={"row"}>
                <table className={"table"}>
                    <tbody>
                    <tr>
                        <td width={"30px"} className={"text-center"} rowSpan={"8"}>
                            <img src={'http://www.menupan.com' + food_detail.poster}
                                 style={{"width": "280px", "height": "250px"}}/>
                        </td>
                        <td colSpan={"2"}>
                            <h3>{food_detail.name}&nbsp;<span style={{"color": "orange"}}>{food_detail.score}</span>
                            </h3>
                        </td>
                    </tr>
                    <tr>
                        <td className={"text-center"} width={"20%"}>주소</td>
                        <td width={"50%"}>{food_detail.address}</td>
                    </tr>
                    <tr>
                        <td className={"text-center"} width={"20%"}>전화</td>
                        <td width={"50%"}>{food_detail.phone}</td>
                    </tr>
                    <tr>
                        <td className={"text-center"} width={"20%"}>음식종류</td>
                        <td width={"50%"}>{food_detail.type}</td>
                    </tr>
                    <tr>
                        <td className={"text-center"} width={"20%"}>가격대</td>
                        <td width={"50%"}>{food_detail.price}</td>
                    </tr>
                    <tr>
                        <td className={"text-center"} width={"20%"}>영업시간</td>
                        <td width={"50%"}>{food_detail.time}</td>
                    </tr>
                    <tr>
                        <td className={"text-center"} width={"20%"}>좌석</td>
                        <td width={"50%"}>{food_detail.seat}</td>
                    </tr>
                    <tr>
                        <td className={"text-center"} width={"20%"}>테마</td>
                        <td width={"50%"}>{food_detail.theme}</td>
                    </tr>
                    <tr>
                        <td colSpan={"3"} className={"text-right"}>
                            <button className={"btn-sm btn-danger"} onClick={()=>nav(-1)}>목록</button>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
            <div style={{"height": "10px"}}></div>
            <div className={"row"}>

            </div>
        </Fragment>
    )
}

export default FoodDetail