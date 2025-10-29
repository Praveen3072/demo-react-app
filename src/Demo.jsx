function Demo(props)
{
    return(
        <div>
            <h1>Hello is from another Component</h1>
            <h4>{props.title}</h4>
            <h4>{props.description}</h4>
        </div>
    )
}
export default Demo