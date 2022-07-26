import React from "react";

function Demo11MovieChild(props) {

    return (
        <div>
            <h3>Demo11 Movie Child Header</h3>

            <h5> { props.moviesDetails.name } </h5>
            <div>
                <img style={{width: "400px"}} src={props.moviesDetails.image} alt={props.moviesDetails.name} />
            </div>

            <h3>Demo11 Movie Child Footer</h3>
        </div>
    );
}
export default Demo11MovieChild;