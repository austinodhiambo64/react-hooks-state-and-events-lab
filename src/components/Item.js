import React, { useState } from "react";

function Item({ name, category }) {
const [inCart, setCart] = useState(false);

const toggleCart = () => {
setCart(!inCart);
};

return (
<li className={inCart ? "in-cart" : ""}>
<span>{name}</span>
<span className="category">{category}</span>
<button onClick={toggleCart} className="add">
{inCart ? "Remove From Cart" : "Add to Cart"}
</button>
</li>
);
}

export default Item;

