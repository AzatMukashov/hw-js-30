import React from 'react';

interface Props {
  type: 'primary' | 'success' | 'warning' | 'danger';
  onDismiss?: () => void;
}

const Alert: React.FC<Props> = ({type, onDismiss, children}) => {
  const className = `alert alert-${type}`;
  return (
    <div className={className} role="alert">
      {children}
      {onDismiss && (
        <button className='btn-close' onClick={onDismiss}></button>
      )}
    </div>
  );
};

export default Alert;