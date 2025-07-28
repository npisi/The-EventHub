const EventCards = ({ title, image, name, likes, comments }) => {

    return (
         <div className="event-card-content" key={name}>
            <img className="card-img-container" src={image} alt="Event Image"></img>

            <div className="card-desc">
                <span><b>Event:</b> {title}</span>
                <span><b>Venue:</b> {name}</span>
                <span><b>Likes:</b> {likes}</span>
                <span><b>Comments:</b> {comments}</span>
            </div>
            
        </div>
    );
    
}
export default EventCards