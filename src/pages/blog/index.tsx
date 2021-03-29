import React from 'react';
import { navigate } from 'gatsby';

export default class ArticlesMain extends React.Component {
	componentDidMount() {
		navigate('/');
	}

	render() {
		return null;
	}
};