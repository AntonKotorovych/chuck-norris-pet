import CustomSelect from 'components/CustomSelect';
import { CategorySelectProps } from 'types/interfaces/CommonInterfaces';

export default function CategorySelect(props: CategorySelectProps) {
  return <CustomSelect {...props} />;
}
