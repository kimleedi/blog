import React from 'react';
import Layout from '../components/Layout';
import PageHelmet from '../components/PageHelmet';

class NotFoundPage extends React.Component<{}> {
	render() {
		return (
			<Layout>
				<PageHelmet
					title="KIMLEEDI"
					description="404 Not Found"
					url="https://leedi.me/404"
				/>
				<h1 style={{ marginBottom: "1em" }}>404 Not Found</h1>
				<div>요청하신 페이지를 찾을 수 없습니다.</div>
			</Layout>
		);
  	}
}

export default NotFoundPage