import { useCallback, useState } from 'react';

export type DebouncedTimeout = {
  reset: () => void;
  clear: () => void;
};

export const useDebouncedTimeout = (
  callback: () => void,
  thresholdMs: number
): DebouncedTimeout => {
  const [timeoutId, setTimeoutId] = useState<NodeJS.Timeout | null>();

  const reset = useCallback(() => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }

    setTimeoutId(setTimeout(callback, thresholdMs));
  }, [timeoutId, callback, thresholdMs]);

  const clear = useCallback(() => {
    if (timeoutId) {
      clearTimeout(timeoutId);
      setTimeoutId(null);
    }
  }, [timeoutId]);

  return {
    reset,
    clear,
  };
};
