import CustomSelect from 'components/CustomSelect';
import { useFilters } from 'store/FiltersProvider';
import { Option } from 'types/interfaces/CommonInterfaces';
import { useGetCategoryList } from 'hooks/useGetCategoryList';

export default function CategorySelect() {
  const { categories } = useGetCategoryList();
  const { state, setCategory } = useFilters();

  const currentCategory = categories?.find(
    category => state.category === category.label
  );

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
