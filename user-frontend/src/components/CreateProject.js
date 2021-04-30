import React, {useState,Component} from 'react'
 import axios from 'axios';


// export default class CreateProject extends Component {

//     state = {
//         title: ''
//     }





//  handleSubmit = (e)=>{
//     e.preventDefault()
//     axios.post('http://localhost:5000/api/add-project', this.state)
//     .then(res=>{
//         console.log(res)
//     })
// }




//     render() {
//         return (
//             <div>
//                 <h2>Create project</h2>
//             <form onSubmit={this.handleSubmit}>
//              <input type="text" placeholder='title' onChange={(e)=>this.setState({title:e.target.value})}/>
//             <button>Add</button>
//             </form>
//             </div>
//         )
//     }
// }






export default function CreateProject() {
const [title, setTitle] = useState('')


const handleSubmit = (e)=>{
    e.preventDefault()
    axios.post('http://localhost:5000/api/add-project', {title})
    .then(res=>{
        console.log('this is response in frontend',res)
    })
}


    return (
        <div>
            <h2>Create project</h2>
            <form onSubmit={handleSubmit}>
            <input type="text" value={title} placeholder='name' onChange={(e)=>setTitle(e.target.value)}/>
            <button>Add</button>
            </form>
        </div>
    )
}
