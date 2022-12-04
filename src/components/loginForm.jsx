import React from 'react';
import Joi from 'joi-browser';
import Form from './common/form';
// import Input from './common/input';

class LoginForm extends Form {
    username = React.createRef();
    state = {
        // account: { username: '', password: '' },
        data: { username: '', password: '' },
        // errors: {
        //     username: 'Username is required.'
        // }
        errors: {}
    };

    schema = {
        username: Joi.string()
         .required()
         .label('Username'),
        password: Joi.string()
         .required()
         .label('Password')
    };

    //errors['username']
    //errors.find(e => e.name === 'username')

    // componentDidMount() {
    //     this.username.current.focus();
    // }

    // validate = () => {
    //     const options = { abortEarly: false };
    //     // const result = Joi.validate(this.state.account, this.schema, {
    //     //   abortEarly: false
    //     // });
    //     const { error } = Joi.validate(this.state.data, this.schema, options);
    //     // console.log(result);

    //     // const errors = {};

    //     // const { account } = this.state;
    //     // if(account.username.trim() === '')
    //     //   errors.username = 'Username is required.';
    //     // if(account.password.trim() === '')
    //     //   errors.password = 'Username is required.';

    //     // // return { username: 'PassWord is required.'};
    //     // return Object.keys(errors).length === 0 ? null : errors;
    //     if(!error) return null;

    //     const errors = {};
    //     for (let item of error.details)
    //         errors[item.path[0]] = item.message;
    //     return errors;
    // };

    // handleSubmit = e => {
    //     e.preventDefault();

    //     const errors = this.validate();
    //     // console.log(errors);
    //     this.setState({ errors: errors || {} });
    //     if(errors) return;

    //     // Call the server
    //     // const username = document.getElementById('username').value;
    //     // const username = this.username.current.value;
    //     // console.log('submitted');
    //     this.doSubmit();
    // };

    doSubmit = () => {
        // Call the server
        console.log('submitted');
    }
    // state = {  }
    // validateProperty = ({ name, value}) => {
    //     // if(name === 'username') {
    //     //     if(value.trim() === '') return 'Username is required.';
    //     //     //...
    //     // }
    //     // if(name === 'password') {
    //     //     if(value.trim() === '') return 'Password is required.';
    //     //     //...
    //     // }
    //     const obj = { [name]: value };
    //     const schema = { [name]: this.schema[name] };
    //     const {error} = Joi.validate(obj, schema );
    //     // if(error) return null;
    //     // return error.details[0].message;
    //     return error ? error.details[0].message : null;
    // };

    // handleChange = ({ currentTarget: input}) => {
    //     const errors = {...this.state.errors};
    //     const errorMessage = this.validateProperty(input);
    //     if(errorMessage) errors[input.name] = errorMessage;
    //     else delete errors[input.name];

    //     const data = { ...this.state.data };
    //     // account.username = e.target.value;
    //     // account.username = e.currentTarget.value;
    //     // account[e.currentTarget.name] = e.currentTarget.value;
    //     data[input.name] = input.value;
    //     this.setState({ data, errors });
    // };

    render() {
        // const { data, errors } = this.state;

        return (
            <div>
                <h1>Login</h1>
                <form onSubmit={this.handleSubmit}>
                    {/* <div className="form-group">
                        <label  htmlFor="Username" className="form-label">Username</label >
                        <input
                           autoFocus
                           value={account.username}
                           onChange={this.handleChange}
                           ref={this.username} 
                           id="username"
                           name="username"
                           type="text" 
                           className="form-control" 
                         />
                    </div> */}
                    {/* <Input 
                      name="username" 
                      value={data.username} 
                      label="Username" 
                      onChange={this.handleChange}
                      error={errors.username}
                     /> */}
                    {this.renderInput('username', 'Username')}
                    {/* <div className="form-group">
                        <label  htmlFor="Password" className="form-label">Password</label >
                        <input
                          value={account.password}
                          onChange={this.handleChange}
                          name="password"
                          id="password" 
                          type="text" 
                          className="form-control" 
                         />
                    </div> */}
                    {/* <Input 
                      name="password" 
                      value={data.password} 
                      label="Password" 
                      onChange={this.handleChange}
                      error={errors.password}
                     /> */}
                     {this.renderInput('password', 'Password', 'password')}
                </form>
                {/* <button 
                  disabled={this.validate()}
                  className="btn btn-primary" 
                  onClick={this.handleSubmit}>Login</button> */}
                {this.renderButton('Login')}
            </div>
        );
    }
}
 
export default LoginForm;