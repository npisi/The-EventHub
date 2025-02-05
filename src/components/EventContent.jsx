const EventContent = ({ img, name, event }) => {
    return (
        <div className="event-card-content" key={name}>
            <img className="card-img-container" src={img}></img>

            <div className="card-desc">
                <span>Venue: {name}</span>
                <span>Event: {event}</span>
            </div>
        </div>
    );
}
export default EventContent;
