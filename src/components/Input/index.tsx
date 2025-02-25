export default function Input({
  placeholder,
  className,
  icon,
}: {
  placeholder?: string;
  className?: string;
  icon?: React.ReactNode;
}) {
  return (
    <div className="relative w-full h-9">
      <input
        type="text"
        placeholder={placeholder}
        className={`w-full h-full outline-none border border-[#E8EAEB] ${className}`}
      />
      {icon && icon}
    </div>
  );
}
