import { useEffect, useState } from 'react';

export const useResource = (resourceUrl) => {
  const [resource, setResource] = useState(null);

  useEffect(() => {
    (async () => {
      const response = await axios.get(resourceUrl);
      setResource(resource.data);
    })();
  }, [resourceUrl]);

  return resource;
};
