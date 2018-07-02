export const apiCall = (link: string): Promise<object> => {
  return fetch(link).then(response => response.json());
};
