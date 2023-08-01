import React from 'react';
import { Product } from '../redux/types';
import Button from './Button';

interface CardProps {
  product: Product;
  onBuy: () => void;
  onDelete: () => void;
}

const Card: React.FC<CardProps> = ({ product, onBuy, onDelete }) => {
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
        onClick={onBuy}
        disabled={product.bought}
        className={product.bought ? 'buy-product-btn-disabled' : 'buy-product-btn'}
      />
      <Button
        label="Удалить"
        onClick={onDelete}
        className="delete-product-btn"
      />
      </div>
    </div>
  );
};

export default Card;
