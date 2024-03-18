import React from 'react';

const Menu = (props) => {
    const {img, name, category, price} = props
    return (
        <div style = {{
            backgroundColor : 'ivory', 
            width : '200px', 
            height : '300px', 
            display : 'flex', 
            flexDirection : 'column', 
            alignItems : 'center', 
            paddingTop : '30px'}}>
           <img src = {img} alt = "menuImg" style  = {
            {width : '150px', 
            height : '150px', 
            borderRadius : '5px'}}/>
           <h3>{name}</h3>
           <div style = {{fontSize : '12px'}}>{category}</div>
           <h5>{price}</h5>
        </div>
    );
};

export default Menu;