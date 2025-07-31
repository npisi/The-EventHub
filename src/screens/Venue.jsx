import { useEffect, useState } from "react"
import { BASE_URL } from "../components/constants";
import VenueCards from "../components/VenueCards";
import { useNavigate, useOutletContext } from "react-router-dom";


const Venue = () => {

    const [data, setData] = useState([])
    let [filteredData, setFilteredData] = useState([])
    let filterText = useOutletContext()
    const navigate = useNavigate();

    useEffect(() => {
        fetchData();
    }, [])

    useEffect(() => {
        onFilter(filterText)
    }, [filterText])

    const onFilter = (searchText) => {
        filteredData = data.filter((item => item.name.toLowerCase().includes(filterText.toLowerCase())))
        setFilteredData(filteredData)
        if (searchText === "") {
            fetchData()
        }
    }

    const fetchData = async () => {
        const rawData = await fetch(`${BASE_URL}/get-all-restaurants`)
        const result = await rawData.json();
        setData(result.data.rows)
        setFilteredData(result.data.rows)
    }

    const onCardClick = (venueId) => {
        navigate(`/restaurant-details/${venueId}`)
    }

    return (
        <div className="main-layout-venue">
            {filteredData.map((item, id) => {
                return (
                    <VenueCards onCardClick = {()=> onCardClick(id)}
                        name={item.name}
                        image={item.profileImage}
                        address={item.address}
                        desc={item.description}
                        amenities={item.amenities}
                    />
                )
            })}
        </div>

    )
}

export default Venue