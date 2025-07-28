import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { BASE_URL } from "../components/constants"
import MenuAccordian from "../components/MenuAccordian"

const VenueDetails = () => {

    const { venueId } = useParams()
    const [venue, setVenue] = useState(null)

    useEffect(() => {
        fetchVenueData()
    }, [])

    const fetchVenueData = async () => {
        const rawData = await fetch(`${BASE_URL}/get-restaurant-details?restaurantId=${venueId}`)
        const result = await rawData.json()
        setVenue(result.data)
    }

    if (!venue) return <div style={{ textAlign: "center" }}><h1>Loading</h1></div>

    return (
        <>
            <div className="venue-details-container">
                <div className="venue-header">
                    <div>
                        <img src={venue.profileImage} alt={venue.name} className="venue-img" />
                        <div className="amenities-list">
                            {venue.amenities.map((item) => (
                                <span key={item.id} className="amenity-badge">
                                    {item.name}: {item.value}
                                </span>
                            ))}
                        </div>
                    </div>
                    <div className="venue-info">
                        <h1>{venue.name}</h1>
                        <p className="venue-address">{venue.address}</p>
                        <div className="venue-rating">⭐ {venue.avg_rating}</div>
                        <p className="venue-desc">{venue.description}</p>

                    </div>
                </div>
                
                <h2>Menue</h2>

                {venue.packages.map((item) => (
                    <MenuAccordian
                        name={item.packageName}
                        desc={item.description}
                        price={item.pricePerPlate}
                        packageItems={item.packageItems}
                    />
                ))}

            </div>
         </>
    )
}

export default VenueDetails