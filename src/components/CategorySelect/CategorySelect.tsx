import { useMemo } from 'react';
import CustomSelect from 'components/CustomSelect';
import { useFilters } from 'store/FiltersProvider';
import { Option } from 'types/interfaces/CommonInterfaces';
import { useGetCategoryList } from 'hooks/useGetCategoryList';

export default function CategorySelect() {
  const { categories } = useGetCategoryList();
  const { state, setCategory } = useFilters();

  const currentCategory = useMemo(() => {
    const categoryParam = state.category;
    return categories?.find(category => categoryParam === category.value);
  }, [state.category, categories]);

  const handleOnChangeCategory = (newValue: unknown): void => {
    const category = newValue as Option | null;
    setCategory(category?.value);
  };

  return (
    <CustomSelect
      value={currentCategory || null}
      options={categories}
      placeholder="Category Selector"
      onChange={handleOnChangeCategory}
      isClearable
    />
  );
}
