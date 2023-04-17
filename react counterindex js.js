import {Component} from 'react'
import './counterindex.css'
 class Counter extends Component{
   state={count:0}
   onincrement=()=>{
           this.setState(prevState=>{
            return {count:prevState.count+1}
           })
   }
   ondecrement=()=>{
                   this.setState(prevState=>{
                     return {count:prevState.count -1}
                   })
   }

    render(){
      const {count}=this.state
        return(
           <div  className="container">
              <h1 className="heading">Counter</h1>
              <p className="count">{count}</p>
              <div>
                <button className='button' onClick={this.onincrement}>increase</button>
                <button className='button' onClick={this.ondecrement}>decrease</button>
              </div>
           </div>
        )
    }
 }
 export default Counter
