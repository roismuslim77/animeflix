import React from 'react';
import Card from '../../home/components/cards/cardSearch';

class Search extends React.Component{
    render(){
        return(
            <div>
            <div style={{color: 'white'}}>Search</div>
            <Card name={this.props.match.params.nama}/>
            </div>
        )
    }
}

export default Search;