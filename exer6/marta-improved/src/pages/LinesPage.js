import Colors from "../components/Colors";
import TrainList from "../components/TrainList";
import Navbar from "../components/Navbar";
import ReactLoading from "react-loading";
import { useState, useEffect } from "react";

export default function LinesPage() {

  const [currColor, setCurrColor] = useState("GOLD");
  const [trainData, setTrainData] = useState(null);
  const [stationData, setStationData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [activeStation, setActiveStation] = useState("All Stations");

const API_ARRIVALS = 'http://13.59.196.129:3001/arrivals/'
const API_STATIONS = 'http://13.59.196.129:3001/stations/'

  useEffect(() => {
    async function fetchData() {
      setLoading(true)
      const trainResponse = await fetch(API_ARRIVALS + currColor)
      const trainAPIData = await trainResponse.json()
      const stationResponse = await fetch(API_STATIONS + currColor)
      const stationAPIData = await stationResponse.json()
      setTrainData(trainAPIData)
      setStationData(stationAPIData)
      setLoading(false)
    }
    fetchData()
  }, [currColor])

  return (
    <div className="linespages">
      <Colors 
        setGold={() => {setCurrColor("GOLD")}}
        setRed={() => {setCurrColor("RED")}}
        setBlue={() => {setCurrColor("BLUE")}}
        setGreen={() => {setCurrColor("GREEN")}}
      />
    {loading? <div className="loadingScreen">
        <h2>Loading...</h2>
        <div className="loading">
        <ReactLoading/>
        </div>

      </div> : 
      <div>
        <h1 className="heading">{currColor}</h1>
        <div className="container">
          <Navbar stationData={stationData} updateStation = {setActiveStation} 
          activeStation={activeStation}/>
  
          <TrainList 
            userLine={currColor} 
            data={trainData} 
            filterStation = {activeStation} 
          />
        </div>
      </div>
    }

    </div>
  )
}