import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const Navbar = () => (
	<Container>
		<NavItem to="/" style={{ fontWeight: "bold" }} activeClassName="nav-active">KIMLEEDI</NavItem>
		<NavItem to="/about" activeClassName="nav-active">about</NavItem>
	</Container>
);

export default Navbar;

const Container = styled.nav`
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	padding: 0 120px;
	height: 60px;
	z-index: 1000;

	background-color: hsla(0, 0%, 100%, 0.8);

	display: flex;
	align-items: center;
	justify-content: space-between;

	@media screen and (max-width: 800px) {
		padding: 0 24px;
	}
`;

const NavItem = styled(Link)`
	text-decoration: none;
	font-size: 1.25rem;

	&:active,
	&:focus {
		color: initial;
	}

	&.nav-active:hover {
		color: initial;
	}
`;