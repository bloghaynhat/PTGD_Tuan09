import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeItem } from "./cartSlice";

export default function Cart() {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="mt-8">
      <h2 className="text-xl font-bold mb-4">🛒 Giỏ hàng</h2>
      {cartItems.length === 0 ? (
        <p>Chưa có sản phẩm nào.</p>
      ) : (
        <div className="space-y-3">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex justify-between items-center border p-3 rounded"
            >
              <div>
                <p>{item.name}</p>
                <p className="text-sm text-gray-500">
                  {item.quantity} × {item.price.toLocaleString()}đ
                </p>
              </div>
              <button
                onClick={() => dispatch(removeItem(item.id))}
                className="text-red-500 hover:underline"
              >
                Xóa
              </button>
            </div>
          ))}
          <div className="text-right font-semibold">
            Tổng tiền: {total.toLocaleString()}đ
          </div>
        </div>
      )}
    </div>
  );
}
