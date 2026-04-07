import classes from './BigCard.module.css';

const Wrapper = ({ children, className }) => {
  return (
    <section className={`${classes.account} ${className}`}>{children}</section>
  );
};

export const BigCard1 = ({ children, className }) => {
  return <div className={`${classes.balance} ${className}`}>{children}</div>;
};

export const BigCard2 = ({ children, className }) => {
  return <div className={`${classes.type} ${className}`}>{children}</div>;
};

export default Wrapper;
