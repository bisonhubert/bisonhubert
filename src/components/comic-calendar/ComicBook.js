import React from 'react'

export default function ComicBook(props) {
  // props.comic.creators: "(W) Sonny Liew, Ted Anderson (A) Marina Julia (CA) Jon Vermilyea"
  // props.comic.description: ""
  // props.comic.diamond_id: "SEP188086"
  // props.comic.price: "$3.99"
  // props.comic.publisher: "BOOM! STUDIOS"
  // props.comic.release_date: "2018-12-12"
  // props.comic.title: "ADVENTURE TIME SEASON 11 #1 (2ND PTG)"

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
