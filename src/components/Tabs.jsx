import '../App.css'
export default  function Tab({children,buttons,...props}){
    return(
        <>
        <menu {...props}>
        {buttons}
        </menu>
        {children}
        </>
    )
}