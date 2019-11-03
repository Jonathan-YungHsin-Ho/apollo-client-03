import React, { useState } from 'react';

import Hello from './Hello';

export default function Input() {
  const [name, setName] = useState('');

  const handleChange = e => setName(e.target.value);

  return (
    <div>
      <Hello name={name} />
      <input
        type='text'
        placeholder='...Name'
        value={name}
        onChange={handleChange}
      />
    </div>
  );
}
