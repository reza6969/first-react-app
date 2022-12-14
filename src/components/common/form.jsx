import { Component } from 'react';
import Joi from 'joi-browser';
import Input from './input';
import Select from "./select";

class Form extends Component {
    state = {
      data: {},
      errors: {}
    };
    validate = () => {
    const options = { abortEarly: false };
    // const result = Joi.validate(this.state.account, this.schema, {
    //   abortEarly: false
    // });
    const { error } = Joi.validate(this.state.data, this.schema, options);
    // console.log(result);

        // const errors = {};

        // const { account } = this.state;
        // if(account.username.trim() === '')
        //   errors.username = 'Username is required.';
        // if(account.password.trim() === '')
        //   errors.password = 'Username is required.';

        // // return { username: 'PassWord is required.'};
        // return Object.keys(errors).length === 0 ? null : errors;
        if(!error) return null;

        const errors = {};
        for (let item of error.details)
            errors[item.path[0]] = item.message;
        return errors;
    };

    // state = {  }
    validateProperty = ({ name, value}) => {
        // if(name === 'username') {
        //     if(value.trim() === '') return 'Username is required.';
        //     //...
        // }
        // if(name === 'password') {
        //     if(value.trim() === '') return 'Password is required.';
        //     //...
        // }
        const obj = { [name]: value };
        const schema = { [name]: this.schema[name] };
        const {error} = Joi.validate(obj, schema );
        // if(error) return null;
        // return error.details[0].message;
        return error ? error.details[0].message : null;
    };

    handleSubmit = e => {
        e.preventDefault();

        const errors = this.validate();
        // console.log(errors);
        this.setState({ errors: errors || {} });
        if(errors) return;

        // Call the server
        // const username = document.getElementById('username').value;
        // const username = this.username.current.value;
        // console.log('submitted');
        this.doSubmit();
    };

    handleChange = ({ currentTarget: input}) => {
        const errors = {...this.state.errors};
        const errorMessage = this.validateProperty(input);
        if(errorMessage) errors[input.name] = errorMessage;
        else delete errors[input.name];

        const data = { ...this.state.data };
        // account.username = e.target.value;
        // account.username = e.currentTarget.value;
        // account[e.currentTarget.name] = e.currentTarget.value;
        data[input.name] = input.value;
        this.setState({ data, errors });
    };

    // render() { 
    //     return ();
    // }
    renderButton(label) {
        return (
            <button disabled={this.validate()} className="btn btn-primary" onClick={this.handleSubmit} >
                {label}
            </button>
        );
    }

    renderSelect(name, label, options) {
        const { data, errors } = this.state;
    
        return (
          <Select
            name={name}
            value={data[name]}
            label={label}
            options={options}
            onChange={this.handleChange}
            error={errors[name]}
          />
        );
      }

    renderInput(name, label, type = 'text') {
        const { data, errors } = this.state;

        return (
            <Input
                type={type}
                name={name} 
                value={data[name]} 
                label={label}
                onChange={this.handleChange}
                error={errors[name]}
            />
        );
    }
}

export default Form;