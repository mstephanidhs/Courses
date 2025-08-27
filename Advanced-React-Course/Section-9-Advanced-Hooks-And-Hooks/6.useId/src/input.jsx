import { useId, useState } from 'react';

const Form = () => {
  const [email, setEmail] = useState('');

  const id = useId();

  return (
    <div>
      <label htmlFor={`${id}-email`}>Email</label>
      <input
        id={id}
        type='email'
        value={`${id}-email`}
        onChange={(e) => setEmail(e.target.value)}
      />
      <label htmlFor={`${id}-name`}>Name</label>
      <input id={`${id}-name`} type='text' />
    </div>
  );
};

export default Form;
