import React from 'react'
import PropTypes from 'prop-types'

const MovieList = ({ movies }) => {
  return (
    <div>
      {
        movies.map((item, index) => {
          return <p key={index}>{item.title}</p>
        })
      }
    </div>
  )
}

MovieList.propTypes = {
  movies: PropTypes.array.isRequired
}

export default MovieList
