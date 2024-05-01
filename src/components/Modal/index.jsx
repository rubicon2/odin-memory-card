import './index.css';

export default function Modal({ children, active = false }) {
  let modalClass = 'modal-background';
  if (active) modalClass += ' modal-active';

  return (
    <div className={modalClass}>
      <div className="modal-container">{children}</div>
    </div>
  );
}
