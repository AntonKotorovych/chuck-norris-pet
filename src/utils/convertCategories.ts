import { Option } from 'types/interfaces/CommonInterfaces';

export const convertCategories = (categories: string[]): Option[] => {
  return categories.map(category => ({ label: category, value: category }));
};
