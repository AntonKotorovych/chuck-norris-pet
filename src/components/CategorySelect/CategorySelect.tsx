import { useMemo } from 'react';
import CustomSelect from 'components/CustomSelect';
import { useFilters } from 'store/FiltersProvider';
import { Option } from 'types/interfaces/CommonInterfaces';
import { useGetCategoryList } from 'hooks/useGetCategoryList';

export default function CategorySelect() {
  const { categories } = useGetCategoryList();
  const { state, setCategory } = useFilters();

  const currentCategory = useMemo(() => {
    return categories?.find(category => state.category === category.value);
  }, [categories, state.category]);

  const handleOnChangeCategory = (newValue: unknown) => {
    const category = newValue as Option;
    setCategory(category.value);
  };

  return (
    <CustomSelect
      value={currentCategory || null}
      options={categories}
      placeholder="Category Selector"
      onChange={handleOnChangeCategory}
    />
  );
}
