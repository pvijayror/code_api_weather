import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { connect } from 'react-redux';
import { Container } from 'react-bootstrap';
import 'font-awesome/css/font-awesome.min.css'
import Search from '../components/weather/search'
import { fetchView } from '../actions/weather'
import SearchView from '../components/weather'
import Footer from '../components/footer'

import View from '../components/weather/view'

import { getView } from '../actions/weather/view'
import Detail from '../components/weather/detail';

class App extends Component {

  handleSubmit = (e) => {
    e.preventDefault();
    const { dispatch } = this.props
    const [input] = e.target.children
    console.log(input.value)
    dispatch(fetchView(input.value)) 
    dispatch(getView())     
  }
  
  render() {
    return (
      <Container>
        <Search onSubmit={this.handleSubmit} />
        <BrowserRouter>
         <Switch>
           <Route exact path="/" component={View} />
           <Route  path="/view/:id" component={Detail} />
           </Switch>  
        </BrowserRouter>  
        <br />
        <SearchView view = {this.props.view} />
        <br /> 
        <Footer />
        </Container>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    view: state.view,
  }
}

export default connect(mapStateToProps)(App);
