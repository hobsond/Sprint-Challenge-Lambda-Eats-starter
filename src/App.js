import React,{useState,useEffect}from "react";
import {Route,Switch,Link} from 'react-router-dom'

import Homepage from "./comoponents/Homepage"
import PizzaForm from "./comoponents/PizzaForm"

const initialValues = {
  size :'',
  sauceChoice:'',
  addToppings:'',
  specialChoice:{
    peperoni:'',
    sausage:'',
    cheese:'',
    pineapple:'',
  },
  specialInstructions:'',
  quantity:'',


}




const App = () => {
  const [formData, setFormData]=useState(initialValues)

  const onChangeHandle = (evt)=>{
    const name = evt.target.name;
    const value = evt.target.value;
    setFormData({...formData,
    [name] :value
    })
  
  }

  const onChecked = evt =>{
    const name = evt.target.name;
    const checked = evt.target.checked;
    setFormData({...formData,
    ...formData.specialChoice,
      [name] : checked
    })

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
