import '../App.css'
export default  function Tab({children,buttons,buttonsContainer,...props}){
    const ButtonsContainer = buttonsContainer;
    return(
        <>
        <ButtonsContainer {...props}>
        {buttons}
        </ButtonsContainer>
        {children}
        </>
    )
}