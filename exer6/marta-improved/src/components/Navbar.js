export default function Navbar({stationData, updateStation, activeStation}) {

  return (
      <div className="navbar">
          <p className="select">Select your starting station</p>
          <div className={"All Stations" === activeStation ? 'highlight' : 'navBarElement'}
              onClick={() => {
                  updateStation("All Stations");
              }}>All Stations</div>

          {stationData?.map((station) => {
              return (
                  <div className={station === activeStation ? 'highlight' : 'navBarElement'}
                      onClick={() => {
                          updateStation(station);
                      }}
                  >{station}</div>
              )
          })}
      </div>
  )

}