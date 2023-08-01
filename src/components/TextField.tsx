import React, { ChangeEvent } from 'react';

interface TextFieldProps {
  label: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  error?: string;
}

const TextField: React.FC<TextFieldProps> = ({ label, value, onChange, error }) => {
  return (
    <div className="text-field">
      <label>{label}</label>
      <input type="text" value={value} onChange={onChange} />
      {error && <p className="error-message">{error}</p>} {/* Отображаем сообщение об ошибке, если есть */}
    </div>
  );
};

export default TextField;
