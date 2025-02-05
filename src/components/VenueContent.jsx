const VenueContent = ({name , address , description, img , amenities , onClick}) => {

    const descSize = description.length
    if(descSize >= 20){
        var trimmedDesc = description.slice(0, 100)
    }

    return (
        <div className="venue-card-content" key={name} onClick={() => onClick()}>
            <img className="card-img-container" src={img}></img>

            <div className="card-desc">
                <span>Venue: {name}</span>
                <span>Address: {address}</span>
                <span>Description : {trimmedDesc}...</span>
                <div className="amenities-container">Amenities : {amenities.map(data => {
                    return <span className="amenity-item">{data.name}</span>
                })}</div>
            </div>
        </div>

    )
}
export default VenueContent