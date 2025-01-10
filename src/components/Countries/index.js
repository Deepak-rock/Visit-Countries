import './index.css'

const Countries = props => {
  const {countryDetails, addVisited} = props
  const {id, name, isVisited} = countryDetails

  const onClickVisit = () => {
    addVisited(id)
  }

  return (
    <li className="country-item">
      <p className="country">{name}</p>
      {isVisited ? (
        <p className="visited-text">Visited</p>
      ) : (
        <button type="button" className="visit-btn" onClick={onClickVisit}>
          Visit
        </button>
      )}
    </li>
  )
}
export default Countries
