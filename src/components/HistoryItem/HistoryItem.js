import './HistoryItem.css'

const HistoryItem = props => {
  const {appsDetails, onDeleteHistory} = props
  const {timeAccessed, domainUrl, logoUrl, title} = appsDetails
  const onDeleteItem = () => {
    const {id} = appsDetails
    onDeleteHistory(id)
  }

  return (
    <li className="list-items-container">
      <p className="time">{timeAccessed}</p>
      <div className="items-container">
        <div className="item-name-container">
          <img src={logoUrl} className="logo" alt="domain logo" />
          <p className="name">{title}</p>
          <p className="domain-name">{domainUrl}</p>
        </div>
        <button
          type="button"
          data-testid="delete"
          className="button"
          onClick={onDeleteItem}
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
            alt="delete logo"
          />
        </button>
      </div>
    </li>
  )
}

export default HistoryItem
