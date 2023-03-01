import { Component } from 'react';
import { Container } from './App.styled';
import { Foreva } from './Toggle.styled';




export const App = () => {
  return (
    <Container>
      TERRA FOOD
      <Toggle ><Foreva>FOREVA</Foreva></Toggle >
      <LoginForm onSubmit={values => console.log(values)} />
      <AppForm></AppForm>
      <SignUpForm onSubmit={values => console.log(values)} />
      <SignUpFormTwo onSubmit={values => console.log(values)} />
    </Container >
  );
};

class Toggle extends Component {
  state = { isOpen: false };

  show = () => this.setState({ isOpen: true });

  hide = () => this.setState({ isOpen: false });

  render() {
    const { isOpen } = this.state;
    const { children } = this.props;

    return (
      <>
        <button onClick={this.show}>Show</button>
        <button onClick={this.hide}>Hide</button>
        {isOpen && children}
      </>
    );
  }
}

// class Toggle extends Component {
//   state = { isOpen: false };

//   toggle = () => {
//     this.setState(state => ({ isOpen: !state.isOpen }));
//   };

//   render() {
//     const { isOpen } = this.state;
//     const { children } = this.props;

//     return (
//       <div>
//         <button onClick={this.toggle}>{isOpen ? "Hide" : "Show"}</button>
//         {isOpen && children}
//       </div>
//     );
//   }
// }
//===============================================================//

// export const App = () => {
//   return (
//     <Container>
//       <Toggle ></Toggle >
//     </Container >
//   );
// };

// const Button = ({ changeMessage, label }) => (
//   <button type="button" onClick={changeMessage}>
//     {label}
//   </button>
// );

// class Toggle extends Component {
//   state = {
//     message: new Date().toLocaleTimeString(),
//   };

//   // Метод, який будемо передавати в Button для виклику під час кліку
//   updateMessage = evt => {
//     console.log(evt); // Доступний об'єкт події
//     this.setState({
//       message: new Date().toLocaleTimeString(),
//     });
//   };

//   render() {
//     return (
//       <>
//         <span>{this.state.message}</span>
//         <Button label="Change message" changeMessage={this.updateMessage} />
//       </>
//     );
//   }
// }

class LoginForm extends Component {
  handleSubmit = evt => {
    evt.preventDefault();
    const form = evt.currentTarget;
    const login = form.elements.login.value;
    const password = form.elements.password.value;
    console.log(login, password);
    this.props.onSubmit({ login, password });
    form.reset();
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" name="login" />
        <input type="password" name="password" />
        <button type="submit">Login</button>
      </form>
    );
  }
}

class AppForm extends Component {
  state = {
    inputValue: "",
  };

  handleChange = evt => {
    this.setState({ inputValue: evt.target.value });
  };

  render() {
    const { inputValue } = this.state;
    return (
      <input type="text" value={inputValue} onChange={this.handleChange} />
    );
  }
}


//============================================================================//

const INITIAL_STATE = {
  login: "",
  email: "",
  password: "",
};

class SignUpForm extends Component {
  state = { ...INITIAL_STATE };

  // Для всіх інпутів створюємо один обробник
  // Розрізняти інпути будемо за атрибутом name
  handleChange = evt => {
    const { name, value } = evt.target;
    this.setState({ [name]: value });
  };

  handleSubmit = evt => {
    evt.preventDefault();
    const { login, email, password } = this.state;
    console.log(`Login: ${login}, Email: ${email}, Password: ${password}`);
    this.props.onSubmit({ ...this.state });
    this.reset();
  };

  reset = () => {
    this.setState({ ...INITIAL_STATE });
  };

  render() {
    const { login, email, password } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name
          <input
            type="text"
            placeholder="Enter login"
            name="login"
            value={login}
            onChange={this.handleChange}
          />
        </label>
        <label>
          Email
          <input
            type="email"
            placeholder="Enter email"
            name="email"
            value={email}
            onChange={this.handleChange}
          />
        </label>
        <label>
          Password
          <input
            type="password"
            placeholder="Enter password"
            name="password"
            value={password}
            onChange={this.handleChange}
          />
        </label>

        <button type="submit">Sign up as {login}</button>
      </form>
    );
  }
}

//-----------------------------------------------------------

const INITIAL_STATE_TWO = {
  login: "",
  email: "",
  password: "",
  agreed: false,
};

class SignUpFormTwo extends Component {
  state = {
    ...INITIAL_STATE_TWO,
  };

  handleChange = evt => {
    const { name, value, type, checked } = evt.target;
    // Якщо тип елемента – checkbox, беремо значення checked,
    // в іншому випадку – value
    this.setState({ [name]: type === "checkbox" ? checked : value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { login, email, password, agreed } = this.state;
    console.log(
      `Login: ${login}, Email: ${email}, Password: ${password}, Agreed: ${agreed}`
    );

    
  };

  render() {
    const { login, email, password, agreed } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
      
        <label>
          Agree to terms
          <input
            type="checkbox"
            checked={agreed}
            onChange={this.handleChange}
          />
        </label>

        <button type="submit" disabled={!agreed}>
          Sign up as {login}
        </button>
      </form>
    );
  }
}