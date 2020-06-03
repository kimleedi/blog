import React from 'react';
import Layout from '../../components/Layout';
import PageHelmet from '../../components/PageHelmet';

class AboutPage extends React.Component<{}> {
	render() {
		return (
			<Layout>
				<PageHelmet
					title="KIMLEEDI"
					description="KIMLEEDI's personal blog"
					url="https://leedi.me/about"
				/>
				<h2>Curriculum vitae</h2>
				<h3><small>2017 - now</small> Busan, Korea</h3>
				<ul>
					<li>B.S. Student</li>
					<li>Major in Computer Science and Engineering</li>
					<li>Completed a course in Teacher education</li>
				</ul>
			</Layout>
		);
  	}
}

export default AboutPage