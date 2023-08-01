import React, { useState } from 'react';
import { Product } from '../redux/types';
import TextField from './TextField';
import Button from './Button';
import '../styles/buttons.scss';
import '../styles/modalContainer.scss';

interface ModalContainerProps {
  onAddProduct: (product: Product) => void;
}

const ModalContainer: React.FC<ModalContainerProps> = ({ onAddProduct }) => {
  const [showModal, setShowModal] = useState(false);
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState('');
  const [description, setDescription] = useState('');
  const [nameError, setNameError] = useState('');
  const [priceError, setPriceError] = useState('')

  const handleCreateProduct = () => {
    if (!name) {
        setNameError('Пожалуйста, введите название товара');
        return;
      }
  
      if (!price) {
        setPriceError('Пожалуйста, введите цену товара');
        return;
      }
  
      // Валидация на числовое значение в поле price
      const parsedPrice = parseFloat(price);
      if (isNaN(parsedPrice) || parsedPrice <= 0) {
        setPriceError('Пожалуйста, введите корректную цену товара');
        return;
      }

      if (!/^\d+$/.test(price)) {
        setPriceError('Пожалуйста, введите корректную цену товара');
        return;
      }

    const newProduct: Product = {
      id: Date.now(),
      name,
      price: parseFloat(price),
      image,
      description,
    };

    onAddProduct(newProduct);
    setShowModal(false);
    setName('');
    setPrice('');
    setImage('');
    setDescription('');
    setNameError('');
    setPriceError('');
  };

  return (
    <div className="modal-container">
      {showModal && (
        <div className="modal">
          <h2>Создать карточку</h2>
          <TextField
            label="Название"
            value={name}
            error={nameError}
            onChange={(e) => {
              setName(e.target.value);
              setNameError('');
            }}
          />
          <TextField
            label="Цена"
            value={price}
            error={priceError}
            onChange={(e) => {
              setPrice(e.target.value);
              setPriceError('');
            }}
          />
          <TextField label="URL изображения" value={image} onChange={(e) => setImage(e.target.value)} />
          <TextField label="Описание" value={description} onChange={(e) => setDescription(e.target.value)} />
          <Button label="Создать" onClick={handleCreateProduct} className="add-product-btn"/>
        </div>
      )}
      <Button
        label="Добавить товар"
        onClick={() => setShowModal(true)}
        disabled={showModal}
        className={showModal ? 'add-product-btn-disabled' : 'add-product-btn'}
      />
    </div>
  );
};

export default ModalContainer;
