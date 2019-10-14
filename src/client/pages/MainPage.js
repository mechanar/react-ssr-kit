import React from "react";
import App from "../components/App";
import { appAction } from "../redux/MainPage";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

const MainPage = props => {
	const { info, getAppData } = props;
	const { useEffect } = React;
	useEffect(() => {
		getAppData();
	}, [getAppData]);
	return <App primary big info={info} />;
};

const mapStateToProps = state => {
	return {
		info: state.appReducer.data
	};
};

const mapDispatchToProps = dispatch =>
	bindActionCreators(
		{
			getAppData: appAction.getAppData
		},
		dispatch
	);

export default {
	component: connect(
		mapStateToProps,
		mapDispatchToProps
	)(MainPage)
};
