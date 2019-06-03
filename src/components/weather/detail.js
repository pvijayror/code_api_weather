import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { CardColumns, Card } from 'react-bootstrap';

import { fetchView } from '../../actions/weather/view'

class Detail extends Component {

    componentDidMount() {
        const { dispatch } = this.props
        dispatch(fetchView(1))
    }

    getImage = view => {
        let image = ''
        if (view.media && view.media[0]) {
            image =  view.media[0]['media-metadata'][2].url 
        }
        return image     
    }

    viewDetail = view => (
         <div>
            <br />  
                <CardColumns> 
                    <Card.Img src= {this.getImage(view)} height="300"/>
                </CardColumns>
                <br />
                <Card>
                    <Card.Body>
                    <Card.Title>{ view.title }</Card.Title>
                    <Card.Text>
                    { view.source}
                    </Card.Text>
                    <Card.Text>
                    { view.abstract}
                    </Card.Text>
                    
                    </Card.Body>
                </Card>
                <br />
            <div><Link to="/view" style={ {fontWeight: 'bold'}}>Back</Link></div>
            </div>      
            )

    render() {
       
        const { view } = this.props
        return(
            <div>
                { Object.entries(view).length !== 0 ? this.viewDetail(view) : ''}             
             </div>
        )
    }
}

const mapToStateProps = (state, props) => {

    const id = props.match.params.id;

    const { view: {  results } = [] } = state.viewed

    const view = results && results.filter(o => parseInt(o.id) === parseInt(id) )


    return {
        view: view && view.length > 0 ? view[0] :  {}
    }
}

export default connect(mapToStateProps)(Detail) 