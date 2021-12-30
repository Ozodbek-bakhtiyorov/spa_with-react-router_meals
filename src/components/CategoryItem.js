import styled from "styled-components";
import {Link} from "react-router-dom";

export default function CategoryItem(props){
    const {idCategory,strCategoryThumb,strCategory,strCategoryDescription} = props
    return(
        <Content>
            <div className="card">
                <div className="card-image waves-effect waves-block waves-light">
                    <img className="activator" src={strCategoryThumb} alt={strCategory}/>
                </div>
                <div className="card-content">
                    <span className="card-title activator grey-text text-darken-4">{strCategory}<i
                        className="material-icons right">more_vert</i></span>
                    <p><Link to={`/category/${strCategory}`} className='btn blue white-text waves-green'>See Content</Link></p>
                </div>
                <div className="card-reveal">
                    <span className="card-title grey-text text-darken-4">{strCategory}<i
                        className="material-icons right">close</i></span>
                    <p>{strCategoryDescription.slice(0,320)}...</p>
                </div>
            </div>
        </Content>
    )
}
const Content = styled.div`
  .card{
    display: flex;
    flex-direction: column;
  }
  .card-content{
    flex-grow: 1;
  }`;