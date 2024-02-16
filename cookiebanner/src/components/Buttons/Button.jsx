import style from "./button.module.scss";
export const Button = (props) =>  {

const buttonStyle = {
    backgroundColor: props.backgroundColor,
    color: props.color,
    fontSize: props.size,
   

}
const buttonClick = () => {
    if (props.onClick) {
        props.onClick();
    }
};


return(
<>

<div className={style.buttonStyling}>
<button style={buttonStyle} onClick={buttonClick} >{props.text}</button>



</div>


</>

)

}
