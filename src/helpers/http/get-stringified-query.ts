import { stringify } from 'query-string';

const getStringifiedQuery = (query: Record<string, unknown>): string => {
  return stringify(query);
};

export { getStringifiedQuery };
