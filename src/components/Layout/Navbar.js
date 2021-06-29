import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
const Header = (props) => {
	return (
		<React.Fragment>
			<header>
				<Navbar bg="dark" variant="dark">
					<Navbar.Brand as={Link} to="/" >File-Upload
					</Navbar.Brand>
					<Nav className="mr-auto">
						<Nav.Link as={Link} to="/Upload" >Upload</Nav.Link>
						<Nav.Link as={Link} to="/History" >History</Nav.Link>
					</Nav>
				</Navbar>
			</header >
		</React.Fragment >
	);
}
export default Header;

