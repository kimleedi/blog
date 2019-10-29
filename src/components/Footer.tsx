import React from 'react';
import styled from 'styled-components';

const Container = styled.footer`
	display: flex;
	flex-direction: column;
	width: 100%;
	max-width: 820px;
	margin: 40px auto;
`;

const MadeWith = styled.small``;

const MadeWithLink = styled.a`
	margin: 0 4px;
`;

const Footer: React.SFC = () => (
	<Container>
		<MadeWith>
			made with
			<MadeWithLink href="https://www.gatsbyjs.org/" target="_blank" rel="noopener">
			Gatsby
			</MadeWithLink>
			+ ❤️ (
			<a href="https://github.com/kimleedi/blog" target="_blank" rel="noopener">source code</a>
			)
		</MadeWith>
	</Container>
);

export default Footer