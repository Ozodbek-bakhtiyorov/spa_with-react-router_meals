import styled from "styled-components";
import {useParams,useHistory, useLocation} from "react-router-dom";

export default function Movies (){
    console.log(useLocation())
    const {id} = useParams();
    const {goBack}= useHistory();
    return(
        <Content>
            <h1>Some Movies {id}</h1>
            <button className={'btn blue white-text '} onClick={goBack}>Go Back</button>
        </Content>
    )
}
const Content = styled.div``