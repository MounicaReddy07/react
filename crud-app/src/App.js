import NavBar from "./Components/NavBar";
import CodeForCrud from './Components/CodeForCrud'
import AllUsers from "./Components/AllUsers";
import AddUser from "./Components/AddUser";
import {BrowserRouter,Route,Switch} from 'react-router-dom';  //for routing for redirection
import NotFound from "./Components/NotFound";
import EditUser from "./Components/EditUser";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
      <Route exact path="/" component ={CodeForCrud} />
      <Route exact path="/all" component ={AllUsers} />  {/* <AllUsers /> */}
      <Route exact path="/add" component ={AddUser} />    {/* <AddUser /> */}
      <Route exact path="/edit/:id" component={EditUser} />
      <Route component={NotFound}></Route>
      </Switch>
   </BrowserRouter>
  );
}

export default App;

//cd crud-app
//npm run dev     --to run concurrently
 
//OR cd crud-app   npm start 
