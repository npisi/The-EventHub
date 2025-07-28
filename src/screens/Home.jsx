import { useEffect, useState } from "react";
import { BASE_URL } from "../components/constants";
import EventCards from "../components/EventCards";
import { useOutletContext } from "react-router-dom";


function Home() {
    const [data, setData] = useState([]);
    let [filteredData, setFilteredData] = useState([])
    let filterText = useOutletContext()

    useEffect(() => {
        fetchData();
    }, [])

    useEffect(()=> {
        onFilter(filterText)
    },[filterText])

   const onFilter = (searchText) => {
        filteredData = data.filter((item => item.title.toLowerCase().includes(filterText.toLowerCase()))) 
        setFilteredData(filteredData)
        if(searchText === ""){
            fetchData()
        }
   }

    const fetchData = async () => {
        const rawData = await fetch(`${BASE_URL}/get-feed`);
        const result = await rawData.json();
        setData(result.data.data);
        setFilteredData(result.data.data);
    }

   
    if (data.length === 0) {
        return <div style={{ textAlign: "center" }}><h1>Loading</h1></div>
    }

    return (

        <>
            <div className="main-layout">
                {filteredData.map((item) => {
                    return (
                        <EventCards
                            key={item.name}
                            name={item.restaurantName}
                            title={item.title}
                            image={item.profilePicture}
                            likes={item.likeCount}
                            comments={item.commentCount}
                        />
                    )
                })}



            </div>

        </>

    );
}

export default Home