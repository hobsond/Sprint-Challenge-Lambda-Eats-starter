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
  quantity:'',


}





const App = () => {
  const [formData, setFormData]=useState(initialValues)
  const [formErrors,setFormErrors] = useState({
    name:'',
  })
  
  const [priceTotal,setPriceTotal]=useState(0)

  const formScheme = yup.object().shape({
    name:yup
    .string()
    .required('You Must Include Name')
    .min(5,'Name must be atleast 5 characters')
  
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

  const onSubmitHandle = evt=>{
    evt.preventDefault()

    axios.post('https://reqres.in/',formData)
    .then(res=>{
      console.log(res.data)
    })
    .catch(err => console.log(err))

    setFormData(initialValues)

  }


  

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
