export default function Checkbox({ id, name, label, value, isChecked, onClick }) {
  return (
    <div className="flex flex-row">
      <input
        id={id}
        name={name}
        type="checkbox"
        value={value}
        onClick={onClick}
        checked={isChecked}
        className="size-[20px] mt-[5px] mr-[12px]"
      />
      <label htmlFor={id} className="text-[20px]">
        {label}
      </label>
    </div>
  );
}
