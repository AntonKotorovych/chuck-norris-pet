import CustomSelect, {
  Props as CustomSelectProps,
} from 'components/CustomSelect';
import { Option } from 'types/interfaces/CommonInterfaces';

export interface CategorySelectProps extends CustomSelectProps {
  options: Option[] | [];
}

export default function CategorySelect(props: CategorySelectProps) {
  return <CustomSelect {...props} />;
}
