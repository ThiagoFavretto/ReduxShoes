import React, { useState, useEffect } from "react";
import { MdAddShoppingCart } from "react-icons/md";
import { useSelector, useDispatch } from "react-redux";
import { format } from "../../util/format";
import api from "../../services/api";
import * as CartActions from "../../store/modules/cart/action";

import { ProductList } from "./styles";

export default function Home() {
  const [products, setProducts] = useState([]);
  const stock = useSelector(state =>
    state.cart.reduce((sumAmount, product) => {
      sumAmount[product.id] = product.amount;

      return sumAmount;
    }, {})
  );

  const dispatch = useDispatch();

  useEffect(() => {
    async function loadProducts() {
      const response = await api.get("/products");

      const data = response.data.map(product => ({
        ...product,
        priceFormatted: format(product.price)
      }));

      setProducts(data);
    }

    loadProducts();
  }, []);

  function handleAddProduct(id) {
    // const { dispatch } = this.props;
    // dispatch({
    //   type: "ADD_CART",
    //   product
    // })
    dispatch(CartActions.addCartRequest(id));
  }

  return (
    <ProductList>
      {products.map(product => (
        <li key={product.id}>
          <img src={product.image} alt={product.title} />
          <strong>{product.title}</strong>
          <span>{product.priceFormatted}</span>

          <button type="submit" onClick={() => handleAddProduct(product.id)}>
            <div>
              <MdAddShoppingCart size={16} color="fff" />{" "}
              {stock[product.id] || 0}
            </div>
            <span>ADICIONAR AO CARRINHO</span>
          </button>
        </li>
      ))}
    </ProductList>
  );
}
