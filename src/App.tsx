import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from './redux/reducers/rootReducer';
import ModalContainer from './components/ModalContainer';
import Card from './components/Card';
import Notification from './components/Notification';
import { addProduct, showNotification } from './redux/actions/productAction';
import { Product, ProductActionTypes } from './redux/types';
import { BUY_PRODUCT, DELETE_PRODUCT } from './redux/types';
import './styles/app.scss';

const App: React.FC = () => {
  const products = useSelector((state: RootState) => state.products.products);
  const dispatch = useDispatch();

  const handleAddProduct = (product: Product) => {
    dispatch(addProduct(product));
    dispatch(showNotification(`Товар "${product.name}" успешно добавлен!`));
  };

  const handleProductAction = (action: ProductActionTypes) => {
    dispatch(action);
    const productName = products.find((product) => product.id === action.payload)?.name;
    if (action.type === BUY_PRODUCT) {
      dispatch(showNotification(`Товар "${productName}" успешно куплен!`));
    } else if (action.type === DELETE_PRODUCT) {
      dispatch(showNotification(`Товар "${productName}" успешно удален!`));
    }
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
            onAction={(action) => handleProductAction(action)}
          />
        ))}
      </div>
      <Notification />
    </div>
  );
};

export default App;