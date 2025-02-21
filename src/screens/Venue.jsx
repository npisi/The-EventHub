import { useEffect, useState } from "react";
import VenueContent from "../components/VenueContent";
import {BASE_URL} from "../components/constants"
import { useNavigate, useOutletContext } from "react-router-dom";


function Venue() {
    const [data, setData] = useState([]);
    let [filteredData, setFilteredData] = useState([])
    const navigate = useNavigate();
    const {filterText} = useOutletContext()
    useEffect(() => {
      fetchData();
    },[]);
  
    useEffect(() => {
      onFilter(filterText)
    },[filterText])

    const fetchData = async () => {
      const venueData = await fetch(`${BASE_URL}/get-all-restaurants`);
      const result = await venueData.json();
      setData(result.data.rows);
      setFilteredData(result.data.rows);
    };
  
    const onFilter = (searchText) => {
      filteredData = data.filter((item) =>
        item.name.toLowerCase().includes(searchText.toLowerCase())
      );
      setFilteredData(filteredData);
      if ((searchText === "")) {
        fetchData();
      }
    };

    if(data.length === 0){
      return <div style={{textAlign: "center"}}><h1>Loading</h1></div>
    }

    const onCardClick = (venueId) => {
      navigate(`/restaurant-details/${venueId}`)
    }
  
    return (
      <>
     
        <div className="main-layout">
          {filteredData.map((item , id) => (
            <VenueContent onClick = {()=> onCardClick(id)}
              name={item.name}
              address={item.address}
              description={item.description}
              img={item.profileImage}
              amenities={item.amenities}
              
              
            />
          ))}
        </div>
      </>
    );
  }

  export default Venue