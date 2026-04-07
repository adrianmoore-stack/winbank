import { useState } from 'react';
import axiosClient from '../../utils/axiosClient';

const Allow = () => {
  const [email, setEmail] = useState('');

  const grantUserAccess = async (e) => {
    e.preventDefault();

    if (!email) return;
    try {
      await axiosClient.patch('/users', { email });
    } catch (error) {
      console.log(error);
    }
    setEmail('');
  };

  return (
    <div style={{ margin: '20px' }}>
      <form onSubmit={grantUserAccess}>
        <label htmlFor='email' />
        <input
          type={'email'}
          style={{
            border: '1.5px solid blue',
            borderRadius: '5px',
            marginRight: '10px',
          }}
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <button>Grant customer Access</button>
      </form>
    </div>
  );
};

export default Allow;
