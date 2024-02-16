import Grid from "../../components/grid"
import Loader from "../../components/loader"
import Tooltip from "../../components/tooltip"

export const Frontpage = () => {

    return (
        <div>
            <h1>Frontpage</h1>
            <Grid>
                {Array(30).fill("").map(() => (<div
                style={{
                    display: "grid",
                    placeContent: "center"
                }}
                >
                    <Loader />
                </div>))}
            </Grid>
        </div>
    )
}