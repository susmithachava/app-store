import './index.css'

const AppItem = props => {
  const {app} = props
  const {appName, imageUrl} = app
  return (
    <li className="mini-app-container">
      <img src={imageUrl} className="app-logo" alt={appName} />
      <p className="app-name">{appName}</p>
    </li>
  )
}
export default AppItem
