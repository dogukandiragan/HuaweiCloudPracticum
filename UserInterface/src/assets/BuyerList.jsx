import React from 'react';
 

const BuyerList = (props) => {
  return (
    <div>
        <h1>Buyers</h1>
        <ul >
          {
            props.data.map (content =>(
              <li>
                <span><strong>ID:</strong> {content.ID}</span>
                <span><strong>Name:</strong> {content.Name}</span>
   
              </li>
            ))
          }
        </ul>
    </div>
  );
}

export default BuyerList;