



const Movies = (props) => {
  return (
    <div className="movies">
    <div className="card">
    <img src={props.img} alt="" />

      <p>{props.title}</p>
      <p>{props.year}</p>
    </div>
    </div>
  )
}

export default Movies
