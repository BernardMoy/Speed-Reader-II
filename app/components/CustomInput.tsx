export const CustomInput = ({
  label,
  value,
  onChange,
}: {
  label: string;
  value: number;
  onChange: () => void;
}) => {
  const id: string = label.replaceAll(" ", "-").toLowerCase();

  return (
    <div className="flex flex-col  min-w-0 content-start justify-start gap-2">
      <label htmlFor={id}>{label}</label>
      <input
        type="number"
        id={id}
        value={value}
        onChange={onChange}
        className="outline-none w-full border rounded-md focus:border-2 focus:border-primary p-4"
      />
      {/* w-full is required for the input to make it shrink when width is too small */}
    </div>
  );
};
