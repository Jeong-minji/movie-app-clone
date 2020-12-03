import React from "react";
import PropTypes from "prop-types";

function Movie({id, year, title, summary, poster}) {
    return <h1>{title}</h1>;
}

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    year: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired
}                                           // Movies 각 변수의 proptype을 지정하는 객체

export default Movie;