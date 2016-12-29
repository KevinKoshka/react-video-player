import React, { Component } from 'react';
//Equivale a: 
//const Component = React.Component;


//La clase se crea para extender la funcionalidad de Component
//en el componente, por ejemplo si se quiere tener la funcionalidad de state en el
//componente
class SearchBar extends Component {
    constructor(props){
        //super() llama al constructor de la superclase.
        super(props);
        //Cuando cambia input, term, por ejemplo, es la propiedad que guarda su estado
        this.state = { 
            term: '',
            name: 'Kevin'
        };

        //Este binding es necesario para que this funcione en el callback.
        this.onInputChange = this.onInputChange.bind(this);
    }
    render() {
        return (
            //En este caso el input modifica al estado y no viceversa.
            <div>
                <input onChange={event => this.onInputChange(event.target.value)} />
                <br/>
            </div>
            );
    }
    //Event handler

    onInputChange(term) {
        //el objeto state no se debe cambiar directamente.
        this.setState({ term: term });
        this.props.onSearchTermChange(term);
    }
}

export default SearchBar;