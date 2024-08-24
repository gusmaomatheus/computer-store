export default function Input({ id, name, type, label, placeholder = "", value, onChange }) {
  return (
    <div className="flex flex-col gap-y-[8px]">
      <label htmlFor={id} className="text-[22px] pl-[2px]">
        {label}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="w-[350px] h-[50px] text-[22px] pl-[16px] rounded shadow focus:outline-0"
      />
    </div>
  );
}
