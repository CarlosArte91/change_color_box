import { useRef, useState } from "react";

function ColorBox() {
	const [boxStyles, setBoxStyles] = useState({
		width: "255px",
		height: "255px",
		backgroundColor: "rgb(0, 0, 0)",
	});

	const isChange = useRef(true);
	const randmon = () => Math.floor(Math.random() * 256);
	const stopChange = () => isChange.current = false;
	const continueChange = () => isChange.current = true;

	const changeColor = (isChange) => {
		if (isChange.current) setBoxStyles({
				...boxStyles,
				backgroundColor: `rgb(${randmon()}, ${randmon()}, ${randmon()})`
			});
	};

	return (
		<button
			style={boxStyles}
			onMouseMove={() => changeColor(isChange)}
			onDoubleClick={stopChange}
			onMouseLeave={continueChange}
		>

		</button>
	);
}

export default ColorBox;
