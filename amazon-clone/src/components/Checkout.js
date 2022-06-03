import React from "react";
import { useStateValue } from "../StateProvider";
import './Checkout.css';
import Subtotal from './Subtotal'
import CheckoutProduct from "./CheckoutProduct";

function Checkout() {

  const [{basket}, dispatch] = useStateValue();

  return (
    <div className="checkout">
      <div className="checkout_left">
        <img
          className="checkout_ad"
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt="amazon ad"
        />
        <div>
            <h2 className="checkout_title">
                Your Shopping Cart
            </h2>
            {basket.map(item=> (
              <CheckoutProduct 
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}/>
            ))}
        </div>
      </div>

        <div className="checkout_right">
            <Subtotal/>
        </div>

    </div>
  );
}

export default Checkout;
