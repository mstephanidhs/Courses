import { useState } from 'react';
import { useApiStatus } from './useApiStatus';
import { ERROR, SUCCESS } from '../../constants/api-status';

export function useApi(fn, config = {}) {
  const { initialData } = config;
  const [data, setData] = useState();
  const [error, setError] = useState();
  const { status, setStatus, ...normalizedStatuses } = useApiStatus();

  const exec = async (...args) => {
    try {
      setStatus(PENDING);
      const data = await fn(...args);
      setData(data);
      setStatus(SUCCESS);
      return {
        data,
        error: null,
      };
    } catch (error) {
      setError(error);
      setStatus(ERROR);
      return {
        error,
        data: null,
      };
    }
  };

  return {
    data,
    setData,
    status,
    setStatus,
    exec,
    ...ERROR,
    normalizedStatuses,
  };
}
