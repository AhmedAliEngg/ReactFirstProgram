import React from "react";
const products = [
    { title: 'Ahmed', isFruit: false, id: 1 },
    { title: 'Ali', isFruit: false, id: 2 },
    { title: 'Awan', isFruit: true, id: 3 },
  ];
  
  function YourCast() {
    const listItems = products.map(product =>
      <ul className="ba">
      <li
        key={product.id}
        style={{
          color: product.isFruit ? 'magenta' : 'darkgreen'
        }}
      >
        {product.title}
      </li>
      </ul>
    );
  
    return (
      <ul>{listItems}</ul>
    );
  }
 
  export default YourCast;