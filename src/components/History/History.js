import {Component} from 'react'

import HistoryItem from '../HistoryItem/HistoryItem'

import './History.css'

class History extends Component {
  state = {searchInput: '', appsDetailsList: []}

  componentDidMount() {
    const {initialHistoryList} = this.props
    this.setState({appsDetailsList: initialHistoryList})
  }

  filteredHistory = () => {
    const {searchInput, appsDetailsList} = this.state
    const updateHistory = appsDetailsList.filter(eachItem =>
      eachItem.title.toLowerCase().includes(searchInput.toLowerCase()),
    )
    return updateHistory
  }

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  onDeleteHistory = id => {
    const {appsDetailsList} = this.state
    const updatedList = appsDetailsList.filter(eachItem => eachItem.id !== id)
    this.setState({appsDetailsList: updatedList})
  }

  render() {
    const {searchInput} = this.state
    const filteredHistory = this.filteredHistory()

    return (
      <div className="app-container">
        <div className="header-container">
          <img
            className="history"
            src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png"
            alt="app logo"
          />

          <div className="search-input">
            <img
              className="search-icon"
              src="https://assets.ccbp.in/frontend/react-js/search-img.png"
              alt="search-icon"
            />
            <input
              type="search"
              className="input"
              placeholder="Search History"
              value={searchInput}
              onChange={this.onChangeSearchInput}
            />
          </div>
        </div>
        {filteredHistory.length === 0 ? (
          <p className="main-para">There is no history to show</p>
        ) : (
          <ul className="list-container">
            {filteredHistory.map(eachItem => (
              <HistoryItem
                key={eachItem.id}
                appsDetails={eachItem}
                onDeleteHistory={this.onDeleteHistory}
              />
            ))}
          </ul>
        )}
      </div>
    )
  }
}

export default History
