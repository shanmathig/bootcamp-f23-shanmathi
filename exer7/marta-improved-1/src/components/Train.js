
export default function Train({trainData}) {
    const station = trainData["STATION"];
    const destination = trainData["DESTINATION"];
    const delay = trainData["DELAY"];
    const waitTime = (trainData["WAITING_TIME"]).split(" ");
    const line = trainData["LINE"];

    function getDelay() {
        if (delay === "T0S") {
            return <p className="onTime">On time</p>;
        } else if (waitTime[0] === "Arriving"){
            return <p className='onTime'>Arriving</p>;
        } else {
            return <p className="delayed">Delayed</p>; 
        }
    }

    function getColor() {
        if (line === "GOLD") {
            return ["Gold", "#E8B70C"];
        } else if (line === "BLUE") {
            return ["Blue", "blue"];
        }
        else if (line === "RED") {
            return ["Red", "red"];
        }
        return ["Green", "green"];
    }

    function getWait() {
        return (
            <div className="waitTime">
                <h1 className="wait">{waitTime[0]}</h1>
                <p className="min">{waitTime[1]}</p>
            </div>
        )  
    }

    return (
        <div className="train">
            <div className="leftContainer">
            <div className='left'>
                <div className="bigM">
                    <h3>M</h3>
                </div>
                <div className='top-bottom'>
                <div className="top">
                <h1 className="station">{(station)} &rarr; </h1>
                <h1 className="destination">{(destination) + " STATION "}</h1>
                </div>
                        <div className="bottom">
                            <p className="lineColor" style={{backgroundColor: getColor()[1]}}>{getColor()[0]}</p>
                            <p>{getDelay()}</p>
                        </div>
                    </div>
            </div>
            </div>
            <div className="rightContainer"> 
                {getWait()}
            </div>
        </div>

    )
 


}
  