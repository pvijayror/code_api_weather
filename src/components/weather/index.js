
import React from 'react';
import { Table } from 'react-bootstrap';

class SearchView extends React.Component {


    render () {
    //    const { 
    //             articles: { 
    //                 articles = []
    //             }
    //          } = this.props

    //     function thumb(article) {
    //        try{
    //        let url = article.multimedia && article.multimedia.filter(m => m.subtype === "thumbnail" )[0].url
    //        return <img src={`https://www.nytimes.com/${url}`}  alt=''/>
    //        }catch(e) {
    //         return <img src={`./no-image.jpg`} width='75' height='75' alt='' />  
    //        }
    //     } 

        // const Article = ({key, article}) => (
        //     <tr key={article._id}>
        //     <td>
        //         { thumb(article)}
        //     </td> 
        //    <td>
        //      <div className='responsive'> 
        //          <div className='row'>
        //              <div className='col-md-12'>{ article.snippet }</div>                         
        //          </div>   
        //          <div className='row'>
        //              <div className='col-md-12' style={{fontSize: '13px', color: 'gray'}}>
        //              { article.abstract }                      
        //              </div>                                    
        //          </div>             
        //      </div>    
        //    </td> 
        // </tr>
        // );
            
        return (
            <div>
                 <Table responsive> 
             <tbody>
             {/* { (articles && articles.response ) ? 
                articles.response.docs.map( article => {
                    return <Article key= {article._id} article = {article} />
                }) : ''
              } */}
             </tbody>     
             </Table>
             
            </div>
        )
    }
}

export default SearchView;