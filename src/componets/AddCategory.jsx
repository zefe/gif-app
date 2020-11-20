import React, {useState} from 'react';
import PropTypes from 'prop-types';

export const AddCategory = ({ setCategories }) => {

    const [inputValue, setInputValue] = useState('');

    const handleInputChage = (e) => {
        console.log(e.target.value)
        setInputValue( e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(inputValue.trim().length > 2){
            /* no se tiene acceso a las categorias porque no lo paso como argumento, 
            con solo mandar la referencia al setCategories que puede llamar con un callback que tiene el estado anterior*/
            setCategories((category) => [ inputValue, ...category]);
            setInputValue('');
        }
    }

    return (
        <form onSubmit={ handleSubmit }>
            <input
                type="text"
                value={ inputValue }
                onChange={handleInputChage}
                placeholder="search"
            />

        </form>
    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}
