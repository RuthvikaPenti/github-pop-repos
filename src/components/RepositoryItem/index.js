// Write your code here

import './index.css'

const RepositoryItem = props => {
  const {repositoryDetails} = props
  const {
    name,
    imageUrl,
    starsCount,
    forksCount,
    issuesCount,
  } = repositoryDetails

  return (
    <li className="item">
      <img className="image" src={imageUrl} alt={name} />
      <h1 className="name"> {name}</h1>
      <div className="container">
        <img
          className="image"
          src="https://assets.ccbp.in/frontend/react-js/stars-count-img.png"
          alt="stars"
        />
        <p className="text"> {starsCount} stars </p>
      </div>
      <div className="container">
        <img
          className="image"
          src="https://assets.ccbp.in/frontend/react-js/forks-count-img.png"
          alt="folk"
        />
        <p className="text"> {forksCount} forks</p>
      </div>
      <div className="container">
        <img
          className="image"
          src="https://assets.ccbp.in/frontend/react-js/issues-count-img.png"
          alt="open issues"
        />
        <p className="text"> {issuesCount} open issues </p>
      </div>
    </li>
  )
}

export default RepositoryItem
