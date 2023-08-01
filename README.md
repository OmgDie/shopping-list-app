# Описание проекта "Список Покупок"

Проект "Список Покупок" представляет собой веб-приложение для управления списком покупок. Основной функционал приложения включает возможность создания, просмотра, редактирования и удаления товаров из списка покупок.

## Используемые технологии

- React.js для создания пользовательского интерфейса
- Redux для управления состоянием приложения
- Redux Thunk для обработки асинхронных действий
- TypeScript для типизации данных
- Scss для стилизации компонентов

## Компоненты

### Кнопка

- Описание: Компонент представляет собой кнопку с возможностью задания текстового содержания и обработчика события onClick.
- Входные параметры:
  - label: текст на кнопке
  - onClick: функция-обработчик нажатия на кнопку

### Карточка с товаром

- Описание: Компонент отображает информацию о товаре в виде карточки.
- Входные параметры:
  - product: объект, содержащий информацию о товаре (название, стоимость, изображение, описание)
  - onBuy: функция-обработчик события "покупка товара"
  - onDelete: функция-обработчик события "удаление товара"

### Список карточек

- Описание: Компонент представляет собой список карточек товаров.
- Входные параметры:
  - products: массив объектов товаров для отображения
  - onBuy: функция-обработчик события "покупка товара"
  - onDelete: функция-обработчик события "удаление товара"

### Уведомление

- Описание: Компонент отображает уведомление о результате действия пользователя (например, успешное добавление товара в список).
- Входные параметры:
  - message: текст уведомления
  - productName: название товара, связанное с действием

### Модальное окно для создания товара

- Описание: Компонент представляет собой модальное окно, в котором пользователь может создать новый товар и указать информацию о нем (название, стоимость, изображение, описание).
- Входные параметры:
  - onAddProduct: функция-обработчик события "создание товара"

### Текстовое поле 

- Описание: Компонент представляет собой текстовое поле для ввода текста.
- Входные параметры:
  - label: название поля
  - value: текущее значение поля
  - onChange: функция-обработчик события изменения значения поля 

## Действия

### Создать товар

- Описание: Действие позволяет пользователю создать новый товар с указанием всех необходимых параметров.
- Действие: "CREATE_PRODUCT"

### Добавить товар в список

- Описание: Действие добавляет созданный пользователем товар в список покупок.
- Действие: "ADD_PRODUCT"

### Удалить товар из списка

- Описание: Действие удаляет товар из списка покупок по его идентификатору.
- Действие: "DELETE_PRODUCT"

### Купить товар

- Описание: Действие помечает товар как купленный.
- Действие: "BUY_PRODUCT"

## Информация о товаре

- Описание: Объект, содержащий информацию о товаре:
  - Название (name)
  - Стоимость (price)
  - Изображение (image)
  - Дополнительное описание (description)
