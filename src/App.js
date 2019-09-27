import React, {Component} from 'react';


// class App extends Component {
//   constructor(){
//     super();    
//     this.state = {items: [],
//     filter: null
//     }
//   } 
//   componentWillMount(){
//     fetch('http://swapi.co/api/people/?format=json')
//     .then( response => response.json() )
//     .then( ({results: items}) => this.setState({items}))
//     .catch(e => {
//       console.log(e)
//     })
//     console.log('paso por aca');
    
//   }
//   filter(e){
//     this.setState({filter: e.target.value})
//   }
//     render(){ 
//       let items = this.state.items;
//       console.log(items);
//       if(this.state.filter){
//         items = items.filter(item => item.name.toLowerCase().includes(this.state.filter.toLowerCase()))
//       }
//       return(
//             <div>
//               <input type="text" onChange={this.filter.bind(this)} />
//               {items.map(item => <Person person={item} />)}
//             </div>
//       )
//     }
// }
// const Person = (props) => <h4>{props.person.name}</h4>



export default App;