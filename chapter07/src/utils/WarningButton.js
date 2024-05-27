function WarningButton(){

    return (
    <>
      <button onClick={()=>{alert('Are you sure?');}}>Don't Click Here</button>
      <!--
          {`function WarningButton(){

return (
  <button onClick={()=>{alert('Are you sure?');}}>Don't Click Here</button>
);

}

export default WarningButton;    `}
      -->
    </>
    );
    
    }
    
export default WarningButton;    