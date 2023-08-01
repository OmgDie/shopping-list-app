import React from 'react';
import { Product, ProductActionTypes, DELETE_PRODUCT, BUY_PRODUCT } from '../redux/types';
import Button from './Button';
import '../styles/buttons.scss';
import '../styles/card.scss';

interface CardProps {
  product: Product;
  onBuy?: () => void;
  onDelete?: () => void;
  onAction: (action: ProductActionTypes) => void;
}

const Card: React.FC<CardProps> = ({ product, onAction }) => {
  const handleBuy = () => {
    const action: ProductActionTypes = {
      type: BUY_PRODUCT,
      payload: product.id,
      action: 'Buy Product',
    };
    onAction(action);
  };
  
  const handleDelete = () => {
    const action: ProductActionTypes = {
      type: DELETE_PRODUCT,
      payload: product.id, 
      action: 'Delete Product',
    };
    onAction(action);
  };
  

  return (
    <div className="product-card" key={product.id}>
      {product.image && (
        <img src={product.image} alt={product.name} className="product-image" />
      )}
      <div className="card-content">
        <h3>{product.name}</h3>
        {product.description && <p>{product.description}</p>}
        <h2>{product.price} РУБ</h2>
      </div>
      <div className="button-container">
        <Button
          label="Купить"
          onClick={handleBuy}
          disabled={product.bought}
          className={product.bought ? 'buy-product-btn-disabled' : 'buy-product-btn'}
        />
        <Button
          label="Удалить"
          onClick={handleDelete}
          className="delete-product-btn"
        />
      </div>
    </div>
  );
};

export default Card;
