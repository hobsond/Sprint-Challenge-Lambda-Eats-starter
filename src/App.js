import React,{useState,useEffect}from "react";
import {Route,Switch,Link} from 'react-router-dom'
import axios from 'axios'
import * as yup from 'yup'


import Homepage from "./comoponents/Homepage"
import PizzaForm from "./comoponents/PizzaForm"

const initialValues = {
  name :'',
  size :'',
  sauceChoice:'',
  addToppings:'',
  specialChoice:{
    peperoni:false,
    sausage:false,
    cheese:false,
    pineapple:false,
  },
  specialInstructions:'',
  quantity:1,


}





const App = () => {
  const [formData, setFormData]=useState(initialValues)
  const [formErrors,setFormErrors] = useState({
    name:'',
  })
  const url = 'https://reqres.in/api/users'
  
  const [priceTotal,setPriceTotal]=useState(0)
  const [valid,setValid]= useState()
  const [order,setOrder]= useState([])

  const formScheme = yup.object().shape({
    name:yup
    .string()
    .required('You Must Include Name')
    .min(5,'Name must be atleast 5 characters'),

    size:yup
    .string(),
    sauceChoice: yup
    .string(),
    specialChoice:yup
    .string()
    ,
    specialInstructions:yup
    .string()
    .max(140),
    quantity:yup
    .string()
    ,



    
  
  })

  

  const onChangeHandle = (evt)=>{
    const name = evt.target.name;
    const value = evt.target.value;
    yup
    .reach(formScheme,name)
    .validate(value)
    .then(valid=>{
      setFormErrors({...formErrors,
      [name]: '',
      })
      setValid(valid)
    
    })
    .catch(err=>{
      setFormErrors({...formErrors,
      [name]:err.errors[0]
      })
    })
    setFormData({...formData,
      [name] :value
      })
    
  
  }

  const onChecked = evt =>{
    const name = evt.target.name;
    const checked = evt.target.checked;
    setFormData({...formData,
      specialChoice:{...formData.specialChoice,
        [name] : checked
      
      }
  
      
    })

  }
  const postOrder = function(neworder){
    
    axios.post(url,neworder)
     
    .then(res=>{
      setOrder([...order, res.data])

  
   
    })
    .catch(err => console.log(err))

  }

  const onSubmitHandle = evt=>{
    evt.preventDefault()

   
    postOrder(formData)

    

  

    setFormData(initialValues)
    
 

  }
useEffect(()=>{
  console.log(order)
  
    
},[order])


  return (

    <div>
      <nav>
        <Link to='/'>Homepage</Link>
        <Link to='/pizzaform'>Pizza Form</Link>
      </nav>
      <Switch>
        <Route path='/pizzaform'>
          <PizzaForm 
          formData={formData} 
          onChangeHandle={onChangeHandle}
          onChecked={onChecked}
          formErrors={formErrors}
          onsubmit={onSubmitHandle}
          />
        </Route>
      
        <Route path='/'>
          <Homepage />
        </Route>
      
        
      </Switch>
    </div>
  );
};
export default App;
