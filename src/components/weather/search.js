import React, { Fragment } from 'react'
import { Navbar, Nav, Form, FormControl , NavDropdown} from 'react-bootstrap';

const Search = (props) => {

    return (   
        <Fragment>       
          <Navbar collapseOnSelect expand="lg" bg="info" variant="dark">
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                  <Nav className="mr-auto">              
                    <NavDropdown title="DropDown" id="collasible-nav-dropdown">
                      <NavDropdown.Item href="/weather">Weather</NavDropdown.Item>
                    </NavDropdown>
                  </Nav>
              </Navbar.Collapse>
            <Form inline onSubmit={props.onSubmit} >
              <FormControl type="text" placeholder="Search by city,code " className="mr-sm-2" />            
              <input type="submit" className='btn btn-success' value="Search" />
            </Form>
          </Navbar>
        </Fragment>
  )
}

export default Search;