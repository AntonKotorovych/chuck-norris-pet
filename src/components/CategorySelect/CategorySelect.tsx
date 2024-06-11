import { useEffect, useState } from 'react';
import CustomSelect from 'components/CustomSelect';
import { getJokeCategories } from 'api/getJokeCategories';
import { useFilters } from 'store/FiltersProvider';
import { Option } from 'types/interfaces/CommonInterfaces';
import { convertCategories } from 'utils/convertCategories';

export default function CategorySelect() {
  const [categories, setCategories] = useState<Option[] | []>([]);

  const { state, setCategory } = useFilters();

  const currentCategory = categories?.find(
    category => state.category === category.label
  );

  useEffect(() => {
    (async () => {
      const categories = await getJokeCategories();

      if (categories) {
        const convertedCategories = convertCategories(categories);
        setCategories(convertedCategories);
      }
    })();
  }, []);

  const handleOnChangeCategory = (newValue: unknown) => {
    const category = newValue as Option;
    setCategory(category.label);
  };

  return (
    <CustomSelect
      value={currentCategory ? currentCategory : null}
      options={categories}
      placeholder="Category Selector"
      onChange={handleOnChangeCategory}
    />
  );
}
