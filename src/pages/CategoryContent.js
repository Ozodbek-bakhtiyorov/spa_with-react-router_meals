import styled from "styled-components";
import {useEffect, useState} from "react";
import {useParams, useHistory} from "react-router-dom";
import {getFilteredMealsByCategory} from '../api'
import { Loader, MealItem} from "../components";
export default function CategoryContent (){
    const {name} = useParams();
    const {goBack} = useHistory();
    const [meals , setMeals] = useState([]);
    useEffect(()=>{
        getFilteredMealsByCategory(name)
            .then(data=>setMeals(data.meals))
    },[name])
    return(
        <>
            {!meals.length ? <Loader/>:<Content>
                <div className='header'>
                    <h1>{name}</h1>
                    <button className='btn waves-effect waves-light btn-lg green darken-3 white-text' onClick={goBack}>Go Back</button>
                </div>
                <div className='list'>
                    {
                        meals.map(meal=>(
                            <MealItem key={meal.idMeal} {...meal}/>
                        ))
                    }
                </div>

            </Content>
            }
        </>
    )
}
const Content = styled.div`
  .list{
    width: 100%;
    display: grid;
    grid-gap: 30px;
    grid-template-columns: repeat(auto-fill,minmax(250px,1fr));
  }
  .header{
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
  }
  
`;
