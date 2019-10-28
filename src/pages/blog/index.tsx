import React from 'react';
import { navigateTo } from 'gatsby';

export default class ArticlesMain extends React.Component {
	componentDidMount() {
		navigateTo('/');
	}

	render() {
		return null;
	}
};