import React, { Component } from 'react';
//Equivale a: 
//const Component = React.Component;


//La clase se crea para extender la funcionalidad de Component
//en el componente.
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
                <label>Welcome {this.state.name} </label>
                <br/>
                <input onChange={this.onInputChange} />
            </div>
            );
    }
    //Event handler

    onInputChange(e) {
        //el objeto state no se debe cambiar directamente.
        this.setState({ term: e.target.value });
    }
}

export default SearchBar;