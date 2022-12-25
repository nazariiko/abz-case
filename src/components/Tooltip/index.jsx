import React from 'react';
import styles from './style.module.scss';

const Tooltip = ({ text, cssObject = {} }) => {
  const [isOverflowed, setIsOverflowed] = React.useState(false);
  const tooltipWrapperRef = React.useRef(null);

  React.useEffect(() => {
    const tooltipWrapperElement = tooltipWrapperRef.current;
    if (tooltipWrapperElement.scrollWidth > tooltipWrapperElement.clientWidth) {
      setIsOverflowed(true);
    }
  }, []);

  return (
    <div
      ref={tooltipWrapperRef}
      className={`${styles['tooltip-wrapper']} ${
        isOverflowed ? styles['tooltip-wrapper__overflowed'] : ''
      }`}
      style={cssObject}>
      <p className={styles['tooltip-main-text']}>{text}</p>
      {isOverflowed && <div className={styles['tooltip-text-container']}>{text}</div>}
    </div>
  );
};

export default Tooltip;
