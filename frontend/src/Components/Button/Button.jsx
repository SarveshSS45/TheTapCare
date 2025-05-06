import React from 'react';

const Button = ({ label, variant = 'filled' }) => {
  const base = 'px-6 py-2 rounded-full font-medium';
  const filled = 'bg-blue-600 text-white hover:bg-blue-700';
  const outlined = 'border border-blue-600 text-blue-600 hover:bg-blue-50';
  const classes = `${base} ${variant === 'outlined' ? outlined : filled}`;

  return <button className={classes}>{label}</button>;
};

export default Button;
