import Header from './Header';
import Login from './Login';

function Welcome({loggedIn}){
    return(
      <>
      <div>
        {loggedIn?<Header />:<Login />}
      </div>
      <!--
        {`import Header from './Header';
import Login from './Login';

function Welcome({loggedIn}){
    return(
      <div>
        {loggedIn?<Header />:<Login />}
      </div>
    )
}
  
export default Welcome;`}
      -->
      </>
    )
}
  
export default Welcome;