import React from "react";

const ShoppingCart = (props) => {
    const { cartItems, onAdd, onRemove } = props;
    const cartTotal = cartItems.reduce((a, c) => a + c.price * c.qty, 0);
    const taxPrice = cartTotal * 0.029;
    const shippingPrice = cartTotal > 100 ? 0 : 6.99;
    const totalPrice = cartTotal + taxPrice + shippingPrice;
  return (
      <div className="second-row" style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 10,
          padding: 15,
      }}>
          <h1>Cart</h1>
          <div>{cartItems.length === 0 && <div>Cart Is Empty</div>}</div>
          {cartItems.map((item) => (
              <div key={item.id} className="container d-flex justify-content-center align-items-center overflow" style={{gap: 130}}>
                  <div style={{fontSize: 18, width: 220, marginTop: 60}}>
                      <p>{item.name}</p>
                  </div>
                  <div style={{
                      display: "flex",
                      marginLeft: -60,
                      gap: 10
                  }}>
                      <button onClick={() => onAdd(item)} className="click-btn btn btn-md btn-outline-success">+</button>
                      <button onClick={() => onRemove(item)} className="click-btn btn btn-md btn-outline-danger">-</button>
                  </div>
                  <p className="text-right" style={{ fontSize: 18 }}>
                      {item.qty} x ${item.price.toFixed(2)}</p>
              </div>
          ))}
          {cartItems.length !== 0 && (
              <>
                  <br></br>
                  <div style={{display: "flex", flexDirection: "column", gap: 30, padding: 10}} >
                      <div className="d-flex justify-content-center align-items-center">
                          <div>Cart Total:</div>
                          <div className="text-right">${cartTotal.toFixed(2)}</div>
                      </div>
                      <div className="d-flex justify-content-center align-items-center">
                          <div>Tax:</div>
                          <div className="text-right">${taxPrice.toFixed(2)}</div>
                      </div>
                      <div className="d-flex justify-content-center align-items-center">
                          <div>Shipping Price:</div>
                          <div className="text-right">${shippingPrice.toFixed(2)}</div>
                      </div>
                      <div className="d-flex justify-content-center align-items-center">
                          <div>Total:</div>
                          <div className="text-right">${totalPrice.toFixed(2)}</div>
                      </div>
                  </div>
              </>
          )}
    </div>
  );
};

export default ShoppingCart; 