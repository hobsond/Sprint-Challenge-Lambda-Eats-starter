import React from 'react'

export default function PizzaForm(props) {
    const {onChangeHandle,onChecked,formData,formErrors} = props

    
    return (
        <form>
            <label htmlFor='name'>Please Enter A Name for Order</label>
            <p>{formErrors.name} </p>
    
            <input name='name' type='text' onChange={onChangeHandle}/>
            <label htmlFor='size'>Choose Your Size</label>
            <select name='size' onChange={onChangeHandle}>
                <option>Please Select A Size</option>
                <option value='small'>Small</option>
                <option value='Medium'>Medium</option>
                <option value='Large'>Large</option>
                

            </select>

            <h4>Lets get saucy</h4>
            <label htmlFor='red Sauce'>Red Sauce</label>
            <input type='radio' name='sauceChoice' value='red sauce' onChange={onChangeHandle}/>

            <label htmlFor='Garlic Sauce'>Garlic Sauce</label>
            <input type='radio' name='sauceChoice' value='Garlic sauce' onChange={onChangeHandle}/>

            <label htmlFor='Spicy Sauce'>Spicy Sauce</label>
            <input type='radio' name='sauceChoice' value='Spicy sauce' onChange={onChangeHandle}/>

            <label htmlFor='peperoni'>Peperoni</label>
            <input onChange={onChecked} type='checkbox' name='peperoni'/>

            <label htmlFor='sauage'>Sausage</label>
            <input onChange={onChecked} type='checkbox' name='sausage'/>
            
            <label htmlFor='cheese'>Cheese</label>
            <input onChange={onChecked} type='checkbox' name='Cheese'/>

            <label htmlFor='pineapple'>Pineapple</label>
            <input onChange={onChecked} type='checkbox' name='pineapple'/>

            <h4>Special Instructions</h4>

            <input type='textarea' name='specialInstructions' onChange={onChangeHandle} />

            <label htmlFor='quantity'>quantity</label>
            <input type='number' step='1' name='quantity' onChange={onChangeHandle}/>

            <button>Order Now</button>






        </form>
    )
}
