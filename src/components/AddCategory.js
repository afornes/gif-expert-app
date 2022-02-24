import PropTypes from 'prop-types';
import React, { useState } from 'react'

const AddCategory = ({setCategories}) => {

    const [inputValue, setIntpuValue] = useState('');

    const onInputChange = (e) => {
        setIntpuValue(e.target.value);
    };

    const onEnterPressed = (e) => {
        e.preventDefault();

        if(inputValue.trim().length > 2) {
            setCategories(cats => [inputValue, ...cats]);
            setIntpuValue('');
        }
    }

    return (
        <form onSubmit={onEnterPressed}>
            <input 
                type='text'
                value={ inputValue }
                onChange={ onInputChange }
                placeholder='Buscar...'
            />
        </form>
    );
};

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}

export default AddCategory
