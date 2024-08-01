import React from 'react';

// Functional component to display the total price
export default function TotalPrice({ total }) {
    return (
        <div>
            <h4>Total Price: ${total}</h4>
        </div>
    );
}
