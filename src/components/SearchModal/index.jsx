import Modal from '../Modal';
import { useState } from 'react';

import './index.css';

export default function SearchModal({
  active = false,
  title = 'Search',
  message = '',
  onSubmit,
  searchErrorMsg,
}) {
  const [searchString, setSearchString] = useState('');
  console.log(searchString);

  return (
    <Modal active={active}>
      <h1>{title}</h1>
      {message && message}
      <input
        placeholder="Search for new images..."
        value={searchString}
        onChange={(event) => setSearchString(event.currentTarget.value)}
      />
      {searchErrorMsg && (
        <div className="search-error-msg">{searchErrorMsg}</div>
      )}
      <button
        className="search-button"
        type="button"
        onClick={() => onSubmit(searchString)}
      >
        Play Again
      </button>
    </Modal>
  );
}
