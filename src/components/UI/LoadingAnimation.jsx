import { createPortal } from 'react-dom';
import classes from './LoadingAnimation.module.css';

export const Loading = () => {
  return (
    <section className={classes.animation}>
      <div className={classes.circumference}>
        <div className={classes['box-one']}></div>
        <div className={classes['box-two']}></div>
      </div>
    </section>
  );
};

const LoadingAnimation = () => {
  return createPortal(<Loading />, document.getElementById('menu'));
};

export default LoadingAnimation;
