import React from 'react';

// const Input = ({ type, name, label, value, error, onChange }) => {
const Input = ({ name, label, error, ...rest }) => {
    return ( 
        <div className="form-group">
            <label  htmlFor={name} className="form-label">{label}</label >
            {/* <input
                autoFocus
                value={value}
                onChange={onChange}
                type={type}
                name={name}
                id={name}
                className="form-control" 
                /> */}
                <input {...rest} name={name} id={name} className="form-control" />
                {error && <div className="alert alert-danger">{error}</div>}
         </div>
     );
}
 
export default Input;