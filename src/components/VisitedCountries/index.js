import './index.css'

const VisitedCountries = props => {
  const {visitedCountryDetails, removeVisited} = props

  const onClickRemove = () => {
    removeVisited(visitedCountryDetails.id)
  }

  return (
    <li className="visited-country-item">
      <img
        src={visitedCountryDetails.imageUrl}
        alt="thumbnail"
        className="country-img"
      />
      <div className="country-cart">
        <p className="country">{visitedCountryDetails.name}</p>
        <button className="remove-btn" type="button" onClick={onClickRemove}>
          Remove
        </button>
      </div>
    </li>
  )
}
export default VisitedCountries
