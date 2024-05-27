function EventProps(){
    const logClick=(e)=>{
        console.dir(e);
    }
    return(
        <>
        <button onClick={logClick}>Click Me</button>
        <!--
            {`function EventProps(){
    const logClick=(e)=>{
        console.dir(e);
    }
    return(
        <button onClick={logClick}>Click Me</button>
    )
}

export default EventProps;`}
        -->
        </>
    )
}

export default EventProps;