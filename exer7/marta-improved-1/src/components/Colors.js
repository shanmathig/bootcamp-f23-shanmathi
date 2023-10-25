import { useNavigate } from "react-router-dom";

export default function Colors(props) {
    const navigate = useNavigate(); 
    const goToHome = () => {
        navigate("/");
      };

    return (
        <div className="colorButtonContainer">
            <button style={{ backgroundColor: "#E8B70C" }} className="colorButton" onClick={props.setGold}>Gold</button>
            <button style={{ backgroundColor: "red" }} className="colorButton" onClick={props.setRed}>Red</button>
            <button style={{ backgroundColor: "blue" }} className="colorButton" onClick={props.setBlue}>Blue</button>
            <button style={{ backgroundColor: "green" }} className="colorButton" onClick={props.setGreen}>Green</button>
            <button style={{ backgroundColor: "lightblue" }} className="colorButton" onClick={goToHome}>Back to Home Page</button>
        </div>
    )
}