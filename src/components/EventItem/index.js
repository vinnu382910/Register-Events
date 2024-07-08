// Write your code here
import './index.css'

const EventItem = props => {
  const {eventDetails, setActiveEventId} = props
  const {id, imageUrl, name, location} = eventDetails
  const onClickedTab = () => {
    setActiveEventId(id)
  }
  return (
    <li className="details-cont">
      <button onClick={onClickedTab} type="button" className="btn-image">
        <img src={imageUrl} alt="event" className="image" />
      </button>
      <p className="name">{name}</p>
      <p>{location}</p>
    </li>
  )
}

export default EventItem
