import Styles from "./404Page.module.scss"
export const PageNotFound = () => {
    return (
        <div className={Styles.container}>
            <h1><span className={Styles.highlight}>404 page</span> not found</h1>
        </div>
    )
}