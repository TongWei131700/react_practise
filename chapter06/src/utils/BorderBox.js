import PropTypes from 'prop-types';

function BorderBox(props){
  return(
    <>
    <div style={{border:"1px solid black"}}>{props.children}</div>
    <!--
{`import PropTypes from 'prop-types';

function BorderBox(props){
  return(
    <div style={{border:"1px solid black"}}>{props.children}</div>
  )
}

BorderBox.propTypes = {
  children: PropTypes.element.isRequired
}

export default BorderBox;
`}
    -->
    </>
  )
}

BorderBox.propTypes = {
  children: PropTypes.element.isRequired
}

export default BorderBox;
