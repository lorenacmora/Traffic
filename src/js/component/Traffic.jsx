import React, {useState} from "react";

//include images into your bundle


//create your first component
const Traffic = () => {
	const [LuzRoja, setLuzRoja] = useState("")
	const [LuzAmarilla, setLuzAmarilla] = useState("")
	const [luzVerde, setLuzVerde] = useState("")
	

	const Act = (color) => {
		if (color == "roja") {
			setLuzRoja("activar");
			setLuzAmarilla("");
			setLuzVerde("");
		} else if (color == "amarillo"){
			setLuzRoja("");
			setLuzAmarilla("activar");
			setLuzVerde("");
		} else if (color == "verde"){
			setLuzRoja("");
			setLuzAmarilla("");
			setLuzVerde("activar");
		} // Reset button logic
		else if (color == "none"){
			setLuzRoja("");
			setLuzAmarilla("");
			setLuzVerde("");
		}
	};

		return (
			<>
			{/* className = activar (switch's between active light color) */}
				<div className="traffic-container">
					<div className="barra"></div>
					<div className="caja-container">
						<div 
							className={`luz roja ${LuzRoja}`} 
							onClick={ () => Act("roja")} 
							></div>
						<div className={`luz amarillo ${LuzAmarilla}`} 
							onClick={ () => Act("amarillo")}
							></div>
						<div className={`luz verde ${luzVerde}`} 
							onClick={ () => Act("verde")}
							></div>
					</div>
				</div>
			</>
		);
};


export default Traffic;