import MyFancyWidget from './MyFancyWidget';

function MyFancyComponent(props){
  return(
    <>
    <MyFancyWidget
      widgetSize="huge"
      numberOfColumns="3"
      title="Welcome to My Widget" />
    <!--
{`import MyFancyWidget from './MyFancyWidget';

function MyFancyComponent(props){
  return(
    <MyFancyWidget
      widgetSize="huge"
      numberOfColumns="3"
      title="Welcome to My Widget" />
  )
}
export default MyFancyComponent;`}-->
    </>
  )
}
export default MyFancyComponent;

