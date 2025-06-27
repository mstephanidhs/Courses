import { useEffect, useState } from 'react';

export const useUser = (userId) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    (async () => {
      const response = await axios.get(`users/${userId}`);
      setUser(response.data);
    })();
  }, [userId]);

  return user;
};
