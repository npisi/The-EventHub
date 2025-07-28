const VenueCards = ({ name, image, address, desc, amenities, onCardClick }) => {

    const descSize = desc.length
    if (descSize >= 20) {
        var trimmedDesc = desc.slice(0, 100);
    }
    return (
        <div className="venue-card-container" key={name} onClick={()=> onCardClick()} >
            <img className="card-img-container" src={image} alt="Venue Image" />
            <div className="card-desc">
                <span><b>Venue :</b> {name}</span>
                <span><b>Address :</b>{address}</span>
                <span><b>Description : </b>{trimmedDesc}...</span>
                <div className="amenities-container"><b>Amenities : </b>{amenities.map(data => {
                    return <span className="amenity-item">{data.name}</span>
                })}</div>
            </div>

        </div>
    )
}

export default VenueCards