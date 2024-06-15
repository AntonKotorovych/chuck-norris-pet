import { useEffect, useState } from 'react';
import { getJokeCategories } from 'api/getJokeCategories';
import { Option } from 'types/interfaces/CommonInterfaces';
import { convertCategories } from 'utils/convertCategories';

export function useGetCategoryList() {
  const [categories, setCategories] = useState<Option[]>([]);

  useEffect(() => {
    (async () => {
      const categories = await getJokeCategories();

      if (categories) {
        const convertedCategories = convertCategories(categories);
        setCategories(convertedCategories);
      }
    })();
  }, []);

  return { categories };
}
