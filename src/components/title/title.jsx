//import style from "./title.module.scss"

export const Title = ({title, alignment}) => {
    return <h2 style={{ textAlign: alignment }}>{title}</h2>
}