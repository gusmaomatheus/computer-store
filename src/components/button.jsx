export default function Button({ id, type, text, color, onClick }) {
  return (
    <button
      id={id}
      type={type}
      className={` w-[130px] h-[45px] text-[22px] text-${color} rounded-md bg-transparent border-2 border-${color} hover:bg-${color} hover:text-white`}
      onClick={onClick}
    >
      {text}
    </button>
  );
}
