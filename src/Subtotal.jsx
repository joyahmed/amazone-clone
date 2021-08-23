import React from "react";
import CurrencyFormat from "react-currency-format";
import "./Subtotal.css";
import { useStateValue } from "./StateProvider";
import { getBasketTotal } from "./reducer";

const Subtotal = () => {
	const [{ basket }, dispatch] = useStateValue();

	return (
		<div className='subtotal'>
			<CurrencyFormat
				renderText={value => (
					<>
						<p>
							{/* Homework */}
							Subtotal ({basket.length} items): <strong>{value}</strong>
						</p>
						<small className='subtotal__gift'>
							<input type='checkbox' />
							This order contains a gift
						</small>
					</>
				)}
				decimalScale={2}
				value={getBasketTotal(basket)} // part of the homework
				displayType={"text"}
				thousandSeparator={true}
				prefix={"$"}
			/>

			<button>Proceed to Checkout</button>
		</div>
	);
};

export default Subtotal;
