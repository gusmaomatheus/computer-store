export default function Button({ id, type, text, disabled = false, onClick }) {
  return (
    <button
      id={id}
      type={type}
      className={`w-[130px] h-[45px] text-[22px] text-green-400 rounded-md bg-transparent border-2 border-green-400 hover:bg-green-400 hover:text-white`}
      onClick={onClick}
      disabled={disabled}
    >
      {text}
    </button>
  );
}
