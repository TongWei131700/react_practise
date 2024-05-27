import PropTypes from 'prop-types';

function DisplayPrimaryColor(props){
  return(
    <>
    <p>You picked: {props.primaryColor}</p>
    <!--
{`import PropTypes from 'prop-types';

function DisplayPrimaryColor(props){
  return(
    <p>You picked: {props.primaryColor}</p>
  )
}

DisplayPrimaryColor.propTypes = {
  primaryColor:PropTypes.oneOf(['red','green','blue'])
}

export default DisplayPrimaryColor;
`}
    -->
    </>
  )
}

DisplayPrimaryColor.propTypes = {
  primaryColor:PropTypes.oneOf(['red','green','blue'])
}

export default DisplayPrimaryColor;
