import Train from "./Train";
export default function TrainList(props) {
  const {userLine, trainData} = props;
  const arrivals = trainData["RailArrivals"]

  function direction() {
    if (userLine === "GOLD" | userLine === "RED") {
      return (
        <div>
            <button style={{ backgroundColor: 'black', color: 'white', borderColor: 'black',}}>Arriving</button>
            <button>Scheduled</button>
            <button>Northbound</button>
            <button>Southbound</button>
        </div>
      )
    }
    return (
      <div>
          <button style={{ backgroundColor: 'black', color: 'white', borderColor: 'black',}}>Arriving</button>
          <button>Scheduled</button>
          <button>Eastbound</button>
          <button>Westbound</button>
      </div>
    )
  }

  return (
    <div className="trainList">
      <div>
        {direction()}
      </div>
        {arrivals.map((train, index) => {
          if (train["LINE"] === userLine) {
            return (
              <div key={index}>
                <Train trainData={train} />
                {index < arrivals.length - 1 && <hr />} {/* Add this line */}
              </div>
            );
          }
          return null; // Skip other lines
        })}
    </div>
  )
}