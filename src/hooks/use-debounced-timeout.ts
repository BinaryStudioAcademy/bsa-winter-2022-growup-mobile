import { useCallback, useEffect, useState } from 'react';

export const useDebouncedTimeout = (
  callback: () => void,
  thresholdMs: number
): (() => void) => {
  const [updaterState, setUpdaterState] = useState<boolean>(false);

  const reset = useCallback(() => {
    setUpdaterState(prev => !prev);
  }, []);

  useEffect(() => {
    const timeoutId = setTimeout(callback, thresholdMs);
    return () => clearTimeout(timeoutId);

    // CALLBACK AND THRESHOLD AREN'T NEEDED HERE, SO WE CAN IGNORE THE RULE
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [updaterState]);

  return reset;
};
