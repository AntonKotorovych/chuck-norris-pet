import Select from 'react-select';

const options = [
  { value: 'xui', label: 'pizda' },
  { value: 'lol', label: 'op' },
  { value: 'jopa', label: 'vrot' },
];

export default function FilterPanel() {
  return (
    <section>
      <Select options={options}></Select>
    </section>
  );
}
