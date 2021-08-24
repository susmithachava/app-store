import './index.css'

const TabItem = props => {
  const {tab, clickTabItem, isActive} = props
  const {tabId, displayText} = tab

  const onClickTabItem = () => {
    clickTabItem(tabId)
  }

  const highlightedTab = isActive ? 'active-list-item' : 'list-item'

  return (
    <li>
      <button className={highlightedTab} type="button" onClick={onClickTabItem}>
        {displayText}
      </button>
    </li>
  )
}
export default TabItem
