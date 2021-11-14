import { Product } from "../Product";
import { products } from '../../data';
import "./style.css";
const ProductList = () => {
  return (
    <div className="pl">
      <div className="pl-texts">
        <h1 className="pl-title">Create & inspire.</h1>
        <p className="pl-desc">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe labore
          iusto asperiores
        </p>
      </div>
      <div className="pl-list">
        {products.map(item => (
          <Product key={item.id} img={item.img} link={item.link} />
        ))}
      </div>
    </div>
  );
};

export { ProductList };
