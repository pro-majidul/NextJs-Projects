import React from 'react';

const productId = ({ params }) => {
    const id = params.id;
    return (
        <div>
            <h3>Product id page </h3>
            <p>id is {id}</p>
        </div>
    );
};

export default productId;