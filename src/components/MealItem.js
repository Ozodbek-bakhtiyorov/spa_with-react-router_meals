import styled from "styled-components";
import {Link} from "react-router-dom";

export default function MealItem ({idMeal,strMealThumb, strMeal}){
    return(
        <Content>
            <div className="card">
                <div className="card-image waves-effect waves-block waves-light">
                    <img className="activator" src={strMealThumb} alt={strMealThumb}/>
                </div>
                <div className="card-content">
                    <span className="card-title activator grey-text text-darken-4">{ strMeal}<i
                        className="material-icons right">more_vert</i></span>
                </div>
                <div className={'content'}><Link to={`/meal/${idMeal}`} className='btn blue white-text waves-green'>Recipe</Link></div>
                <div className="card-reveal">
                    <span className="card-title grey-text text-darken-4">{ strMeal}<i
                        className="material-icons right">close</i></span>
                    <div className={'content'}><Link to={`/meal/${idMeal}`} className='btn blue white-text waves-green'>Recipe</Link></div>
                </div>
            </div>
        </Content>
    )
}
const Content = styled.div`
  display: flex;
  flex-direction: column;

  .card {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex-grow: 1 !important;
    position: relative;

    .card-content {
      padding-bottom: 30px;
    }

    .content {
      border-top: 1px solid #e8a6a6;
      width: 100%;
      height: 50px;
      display: flex;
      margin: 10px;
      align-items: center;
    }
  }
`;