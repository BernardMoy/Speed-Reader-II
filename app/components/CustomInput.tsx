export const CustomInput = ({
  label,
  value,
  disabled,
  onChange,
}: {
  label: string;
  value: number;
  disabled: boolean;
  onChange: (n: any) => void;
}) => {
  const id: string = label.replaceAll(" ", "-").toLowerCase();

  return (
    <div className="flex flex-col  min-w-0 content-start justify-start gap-2">
      <label htmlFor={id}>{label}</label>
      <input
        type="number"
        id={id}
        disabled={disabled}
        value={value}
        onChange={onChange}
        className="outline-none w-full border rounded-md focus:border-2 focus:border-primary p-4"
      />
      {/* w-full is required for the input to make it shrink when width is too small */}
    </div>
  );
};
