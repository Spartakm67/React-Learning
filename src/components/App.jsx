import { Component } from 'react';
import { Container } from './App.styled';
import { Foreva } from './Toggle.styled';

export const App = () => {
  return (
    <Container>
      TERRA FOOD
      <Toggle ><Foreva>FOREVA</Foreva></Toggle >
      
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