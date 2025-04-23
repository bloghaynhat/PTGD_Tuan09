import React from "react";
import { useDispatch } from "react-redux";
import { addItem } from "./cartSlice";

const products = [
  { id: "p01", name: "Áo thun nam", price: 150000 },
  { id: "p02", name: "Quần jean nữ", price: 320000 },
  { id: "p03", name: "Giày thể thao", price: 850000 },
];

export default function ProductList() {
  const dispatch = useDispatch();

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">🛍️ Danh sách sản phẩm</h2>
      <div className="grid gap-4 md:grid-cols-3">
        {products.map((p) => (
          <div key={p.id} className="border p-4 rounded shadow">
            <h3 className="font-semibold">{p.name}</h3>
            <p className="text-gray-500">{p.price.toLocaleString()}đ</p>
            <button
              onClick={() => dispatch(addItem(p))}
              className="mt-2 px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              Thêm vào giỏ
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
