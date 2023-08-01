import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from './redux/reducers/rootReducer';
import ModalContainer from './components/ModalContainer';
import Card from './components/Card';
import Notification from './components/Notification';
import { addProduct, deleteProduct, buyProduct, showNotification } from './redux/actions/productAction';
import { Product } from './redux/types';
import './styles/main.scss';

const App: React.FC = () => {
  const products = useSelector((state: RootState) => state.products.products);
  const dispatch = useDispatch();

  const handleAddProduct = (product: Product) => {
    dispatch(addProduct(product));
    dispatch(showNotification(`Товар "${product.name}" успешно добавлен!`));
  };

  const handleDeleteProduct = (product: Product) => {
    dispatch(deleteProduct(product.id));
    dispatch(showNotification(`Удаление товара "${product.name}" успешно!`));
  };
  
  const handleBuyProduct = (product: Product) => {
    dispatch(buyProduct(product.id));
    dispatch(showNotification(`Покупка товара "${product.name}" успешно совершена!`));
  };

  return (
    <div className="app">
      <div className="background-container" />
      <h1>Список Покупок</h1>
      <ModalContainer onAddProduct={handleAddProduct} />
      <div className="product-list">
        {products.map((product) => (
          <Card
            key={product.id}
            product={product}
            onBuy={() => handleBuyProduct(product)}
            onDelete={() => handleDeleteProduct(product)}
          />
        ))}
      </div>
      <Notification />
    </div>
  );
};

export default App;