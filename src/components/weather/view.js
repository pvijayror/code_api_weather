
import React from 'react';
import { connect } from 'react-redux';
import { Table } from 'react-bootstrap';
import { Link } from "react-router-dom";
import { fetchView } from '../../actions/weather/view'

class View extends React.Component {

    componentDidMount() {
        const { dispatch } = this.props
        dispatch(fetchView(1))
    }

    getImage = view => {
        let image = ''
        if (view.media[0]) {
            image =  view.media[0]['media-metadata'][0].url 
        }
        return image
        
    }

    getView = (results) => (
        results.map( view =>  
               <tr key={view.id}>
                   <td>
                     <img src={ this.getImage(view) } alt='' />
                   </td> 
                  <td>
                    <div className='responsive'> 
                    <Link  to={`/view/${view.id}`}>  
                        <div className='row'>                      
                            <div className='col-md-11'>{ view.title }</div> 
                            <div className='col-md-1' style={{fontSize: '16px', color: 'gray', fontWeight: 'bold'}}>
                                <i class="fa fa-angle-double-right" aria-hidden="true"></i>
                            </div>                                  
                        </div>   
                        </Link >      
                        <div className='row'>
                            <div className='col-md-9' style={{fontSize: '13px', color: 'gray'}}>
                            { view.abstract }                      
                            </div>
                            <div className='col-md-3' style={{fontSize: '13px', color: 'gray'}}>
                            { view.published_date }
                            </div>                     
                        </div>             
                    </div>    
                  </td>                
               </tr>
            )     
    )

    render () {
          
        return (
            <div>
                <Table responsive> 
                <tbody>
                   
                </tbody>     
                </Table>
                
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    console.log(state)
    return {
        view: state.view
    }
}

export default connect(mapStateToProps)(View);