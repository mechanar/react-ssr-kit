import React from "react";
import S from "./App.styles";

export default function App(props) {
	const { warning, primary, danger, big, small, info } = props;
	return (
		<S.Application
			warning={warning}
			primary={primary}
			danger={danger}
			big={big}
			small={small}>
			{info}
		</S.Application>
	);
}
