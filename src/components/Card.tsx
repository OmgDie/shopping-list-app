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
        <p>Price: ₽{product.price}</p>
        {product.description && <p>{product.description}</p>}
      </div>
      <Button
        label="Buy"
        onClick={onBuy}
        disabled={product.bought}
        className={product.bought ? 'buy-product-btn-disabled' : 'buy-product-btn'}
      />
      <Button
        label="Delete"
        onClick={onDelete}
        className="delete-product-btn"
      />
    </div>
  );
};

export default Card;
