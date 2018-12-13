import React from 'react'
import PropTypes from 'prop-types'

export default function ComicBook(props) {
  // todo: get the images from each of these
  // possibly by scraping from different publisher sites
  return (
    <article>
      <h2>{props.comic.title}</h2>
      <h3>{props.comic.description}</h3>
      <h4>{props.comic.publisher}</h4>
      <h5>{props.comic.price}</h5>
      <h6>{props.comic.release_date}</h6>
    </article>
  )
}

ComicBook.propTypes = {
  key: PropTypes.string,
  comic: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
    publisher: PropTypes.string,
    price: PropTypes.string,
    release_date: PropTypes.string,
    creators: PropTypes.string,
    diamond_id: PropTypes.string
  })
}
