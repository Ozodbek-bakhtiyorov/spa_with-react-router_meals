import styled from "styled-components";

export default function Loader(){
    return(
       <Content>
           <div className="progress">
               <div className="indeterminate"></div>
           </div>
       </Content>
    )
}
const Content = styled.div``;