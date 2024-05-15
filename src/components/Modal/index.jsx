import PropTypes from 'prop-types';
import './index.css';

function Modal({ children, active = false }) {
  let modalClass = 'modal-background';
  if (active) modalClass += ' modal-active';

  return (
    <div className={modalClass}>
      <div className="modal-container">{children}</div>
    </div>
  );
}

Modal.propTypes = {
  children: PropTypes.node,
  active: PropTypes.bool,
};

export default Modal;
