import styled from "styled-components";
import {useHistory,useParams} from "react-router-dom";
import {getMealById} from "../api";
import {useEffect, useState} from "react";
import {Loader} from "../components";

export default function Recipe (){
    const [recipe,setRecipe] = useState({});
    const [instructionsShow, setInstructionsShow] = useState(false);
    const [components,setComponents] = useState(false)
    const {id} = useParams();
    const {goBack} = useHistory()
    useEffect(()=>{
        getMealById(id)
            .then(data=>setRecipe(data.meals[0]))
    },[id])
    const {
        strMeal,
        strMealThumb,
        strCategory,
        strArea,
        strInstructions,
        strYoutube
    } =recipe;
    const btn = 'yellow black-text';
    const closeBtn = 'red white-text'
    return(
        <>
            {!recipe.idMeal ? <Loader/>:
                <Content>
                    <div className={'title'}>
                        <h2>Name:{strMeal}</h2>
                        <button className='btn btn-lg blue white-text waves-effect waves-light' onClick={goBack}>Go Back</button>
                    </div>
                    <div className="recipe-content">
                        <div className="img"><img src={strMealThumb} alt={strMeal}/></div>
                        <h4><b>Category:</b> {strCategory}</h4>
                        {strArea && <h6><b>Area:</b> {strArea}</h6>}
                        <button className={`btn btn-lg ${instructionsShow ? closeBtn:btn } waves-effect waves-black`} onClick={()=>setInstructionsShow(!instructionsShow)}>
                            {!instructionsShow ? 'See Instructions':'Hide'}
                        </button>
                        {instructionsShow &&  <div>
                            <h3>Instructions:</h3>
                            <p>
                                {strInstructions}
                            </p>
                        </div>}
                        <h1>Procedure of making the meal</h1>
                        <button className={`btn btn-lg ${components ? closeBtn:btn } waves-effect waves-black`} onClick={()=>setComponents(!components)}>
                            {!components ? 'Open':'close'}
                        </button>
                        {components &&
                        <table>
                            <thead>
                            <tr>
                                <th>Ingredients</th>
                                <th>Measures</th>
                            </tr>
                            </thead>
                            <tbody>
                            {Object.keys(recipe).map(key=>{
                                if(key.includes('Ingredient') && recipe[key]){
                                    return(
                                        <tr>
                                            <td>{recipe[key]}</td>
                                            <td>{recipe[`strMeasure${key.slice(13)}`]}</td>
                                        </tr>
                                    )

                                }
                            })
                            }
                            </tbody>
                        </table>
                        }

                        {strYoutube &&
                        <div className={'video'}>
                            <h1>Video Recipe</h1>
                            <iframe src={`https://www.youtube.com/embed/${strYoutube.slice(-11)}/`} title={id} frameborder="0"/>
                        </div>
                        }
                    </div>

                </Content>
            }
        </>

    )
}
const Content = styled.div`
  .recipe-content{
    .img{
      margin-top: 20px;
      img{
        max-width: 100%;
      }
    }
   
  }
`;