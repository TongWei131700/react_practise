import styles from './my-component.module.css';

function DisplayMessage(props) {

  return (
  <>
  <p className = {styles.redText}>This text is red.</p>
  <!--
      {`import styles from './my-component.module.css';

function DisplayMessage(props) {

  return (<p className = {styles.redText}>This text is red.</p>);

}

export default DisplayMessage;
`}--></>);

}

export default DisplayMessage;
