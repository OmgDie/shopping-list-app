import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/reducers/rootReducer';
import '../styles/notification.scss';

const Notification: React.FC = () => {
  const notificationMessage = useSelector((state: RootState) => state.products.notification.message);
  const productName = useSelector((state: RootState) => state.products.notification.productName);

  return (
    <div className="notification">
      <p>{notificationMessage}</p>
      {productName && <p>{productName}</p>} {/* Выводим имя товара, если оно есть */}
    </div>
  );
};

export default Notification;