import { useEffect, useState } from "react";
import Header from "../components/Header";
import EventContent from "../components/EventContent";
import { BASE_URL } from "../components/constants";
import useOnlineStatus from "../hooks/userOnlineState";
import { useOutletContext } from "react-router-dom";

function Home() {
  const [data, setData] = useState([]);
  let [filteredData, setFilteredData] = useState([]);
  let {filterText} = useOutletContext();



  // const onlineStatus = useOnlineStatus();
  

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    onFilter(filterText)
  },[filterText])

  const fetchData = async () => {
    const rawData = await fetch(`${BASE_URL}/get-feed`);
    const result = await rawData.json();
    setData(result.data.data);
    setFilteredData(result.data.data);

  };
  console.log(data);
  


  const onFilter = (searchText) => {
    filteredData = data.filter((item => item.venueName.toLowerCase().includes(searchText.toLowerCase())))
    setFilteredData(filteredData)
    if (searchText === "") {
      fetchData()
    }

  }



  if (data.length === 0) {
    return <div style={{ textAlign: "center" }}><h1>Loading</h1></div>
  }
  // if(!onlineStatus){
  //   return <div style={{ textAlign: "center" }}><h1>Offline</h1></div>
  // }

  return (
    <>
      
      <div className="main-layout">
        {filteredData.map((item) => (
          <EventContent
            key={item.name}
            name={item.restaurantName}
            event={item.title}
            img={item.profilePicture}
          />
        ))}
      </div>
    </>
  );
}

export default Home