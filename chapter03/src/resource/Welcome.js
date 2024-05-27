import Header from './Header';

function Welcome(){

  let header = <Header />;
  return(
    <>
    <div>
      {header}
    </div>
<!--
{`import Header from './Header';

function Welcome(){

  let header = <Header />;
  return(
    <div>
      {header}
    </div>
  );
}
export default Welcome;
`}-->
    </>
  );
}
export default Welcome;
