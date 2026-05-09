import "./index.css";
import { products } from "./data";
function App() {
  return (
    <div className="container">
      <h1>Product List (Card View)</h1>
      <div className="card-container">
        {products.map((item) => (
          <div className="card" key={item.id}>
            <h2>{item.name}</h2>
            <p>
              <strong>Category:</strong> {item.category}
            </p>
            <p>
              <strong>Price:</strong> NPR {item.price}
            </p>
            <p>
              <strong>Stock:</strong> {item.stock}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
export default App;
