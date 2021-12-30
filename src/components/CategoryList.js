import styled from "styled-components";
import {CategoryItem} from "./index";
export default function CategoryList ({catalog = []}){
    return(
        <Content>
            {
                catalog.map(el=>(
                    <CategoryItem key={el.idCategory} {...el}/>
                ))
            }
        </Content>
    )
}
const Content = styled.div`
  width: 100%;
  display: grid;
  grid-gap: 30px;
  grid-template-columns: repeat(auto-fill,minmax(300px,1fr));
`