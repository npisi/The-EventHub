import { useEffect } from "react"
import { useParams } from "react-router-dom"
import { BASE_URL } from "../components/constants"

const VenueDetails =()=>{
    const {venueId} = useParams()
    
    

    useEffect(() => {
        fetchVenueData()
    },[])
    
    const fetchVenueData = async () => {
        const data = await fetch(`${BASE_URL}/get-restaurant-details?restaurantId=${venueId}`)
        const jsonData = await data.json()
    }
    

    return (
        <div>
            <h1>VEnue DEtails</h1>
        </div>
    )
}
export default VenueDetails