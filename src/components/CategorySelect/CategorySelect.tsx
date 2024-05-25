import CustomSelect from 'components/CustomSelect';
import { Option } from 'types/interfaces/CommonInterfaces';

export interface CategorySelectProps {
  options: Option[];
  placeholder: string;
}

export default function CategorySelect(props: CategorySelectProps) {
  return <CustomSelect {...props} />;
}
