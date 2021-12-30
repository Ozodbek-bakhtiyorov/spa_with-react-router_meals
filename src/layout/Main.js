import styled from "styled-components";
import {Route, Switch} from "react-router-dom";
import {
    Home,
    About,
    Contact,
    NotFound,
    Movies,
    CategoryContent, Recipe
} from "../pages";
export default function Main(){
    return(
        <Content >
            <main>
               <Switch>
                   <Route exact path='/' component={Home}/>
                   <Route path='/about' component={About}/>
                   <Route path='/contact' component={Contact}/>
                   <Route path='/movies/:id' component={Movies}/>
                   <Route path='/category/:name' component={CategoryContent}/>
                   <Route path='/meal/:id' component={Recipe}/>
                   <Route component={NotFound}/>
               </Switch>
            </main>
        </Content>
    )
}
const Content = styled.div`
  min-height: calc(100vh - 150px);
 main{
   padding: 20px  ;
   margin: 0 auto;
 }
`;