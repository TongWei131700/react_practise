function ImmediateInvoke(){
    return(
        <>
        <div>
          {(()=><h1>The Header</h1>)()}
        </div>
        <!--
{`function ImmediateInvoke(){
    return(
        <div>
          {(()=><h1>The Header</h1>)()}
        </div>
      );
      
}
export default ImmediateInvoke;`}
        -->
        </>
      );
      
}
export default ImmediateInvoke;