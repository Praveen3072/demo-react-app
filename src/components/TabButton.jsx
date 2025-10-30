export default function TabButton({children,onSelect,isSelected}){

    return(
        <li><button onClick={onSelect}>{children}</button></li>
    )
}