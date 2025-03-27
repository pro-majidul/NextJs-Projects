import React from 'react';

export const fetchData = async () => {
    const res = await fetch('http://localhost:3000/api/items')
    const data = await res.json();
    return data
}
const ProductsPage = async () => {
    const datas = await fetchData() || []
    console.log(datas)

    return (
        <div>
            {datas.map(data => {
                return (
                    <div key={data._id}>
                        <p>{data.category}</p>
                    </div>
                )
            })}
        </div>
    );
};

export default ProductsPage;