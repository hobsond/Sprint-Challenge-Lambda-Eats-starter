import React from 'react'

export default function PizzaForm(props) {
    const {onChangeHandle,onChecked,formData} = props
    return (
        <form>
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






        </form>
    )
}
