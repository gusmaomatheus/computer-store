export default function DropDown({ id, name, label, value, options, onChange }) {
  return (
    <div className="flex flex-col gap-y-[8px]">
      <label htmlFor={id} className="text-[22px] pl-[2px]">
        {label}
      </label>
      <select
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        className="w-[350px] h-[50px] text-[22px] pl-[16px] rounded shadow focus:outline-0"
      >
        <option value={null} defaultChecked>
          Select
        </option>
        {options.map((option, index) => (
          <option key={index} value={option.id}>
            {option.name}
          </option>
        ))}
      </select>
    </div>
  );
}
