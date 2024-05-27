function LogInput(){
    const logChange=(e)=>{
        console.dir(e);
    }
    return(
        <>
        <input onChange={logChange} />
        <!--
            {`function LogInput(){
    const logChange=(e)=>{
        console.dir(e);
    }
    return(
        <input onChange={logChange} />
    )
}

export default LogInput;`}
        -->
        </>
    )
}

export default LogInput;