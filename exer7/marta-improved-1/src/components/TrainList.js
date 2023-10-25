import Train from "./Train";
import { useState, useEffect } from "react";
export default function TrainList(props) {
  const {userLine, data, filterStation} = props;
  const [displayData, setDisplayData] = useState(filteredData);
  const [active, setActive] = useState([])
  let filters = [];
  var filteredData = (filterStation !== "All Stations" ? filteredData = 
  data?.filter((train) => {return train["STATION"] === (filterStation.toUpperCase() 
  + " STATION")}) : data)
  
  useEffect(() => {
    active.forEach((i) => {
        filteredData = filteredData.filter((train) => check(train, i))
    })
    setDisplayData(filteredData)
}, [filterStation])

  useEffect(() => {
    let data = filteredData
    active.forEach((i) => {
        data = data.filter((train) => (
            check(train, i)
        ))
    })  
    setDisplayData(data)
  }, [active])

  const check = (train, currFilter) => {
    const filterCriteria = {
      Arriving: (train) => train.WAITING_TIME === "Arriving",
      Scheduled: (train) => train.WAITING_TIME !== "Arriving",
      NorthBound: (train) => train.DIRECTION === "N",
      SouthBound: (train) => train.DIRECTION === "S",
      EastBound: (train) => train.DIRECTION === "E",
      WestBound: (train) => train.DIRECTION === "W",
    };
  
    return currFilter in filterCriteria ? filterCriteria[currFilter](train) : true;
  };

  function direction() {
    if (userLine === "GOLD" || userLine === "RED") {
      filters = ["Arriving", "Scheduled", "NorthBound", "SouthBound"];
    } else {
      filters = ["Arriving", "Scheduled", "EastBound", "WestBound"];
    }
    return (
      filters.map((i) => {
        const isActive = active.includes(i)
        return (
          <button key={i} onClick={() => {setActive(isActive ? 
            active.filter(current => current !== i) : [...active, i])}} 
            className={isActive ? 'buttonActive' : 'buttonInactive'}>{i}
          </button>
        )
      })
    )
  }

  return (
    <div className="main">
      <div className="buttonContainer">
        {direction()}
      </div>
        {displayData?.length === 0 ? <h1 className="error">Sorry! There are no trains to display :/</h1> 
        : displayData?.map((train) => {return <Train trainData={train} />})}
    </div>
  )
}