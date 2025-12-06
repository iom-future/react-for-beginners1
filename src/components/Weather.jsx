const Weather = (props)=>{
    if (props.temp < 15){
        return <h1>its cold outside</h1>
    }else if (props.temp >=15 && props.temp<=25){
        return <h1>its nice outside</h1>
    }else{
        return <h1>its hot outside</h1>
    }
}

export default Weather