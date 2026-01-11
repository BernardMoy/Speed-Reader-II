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
    <div className="flex flex-col content-start justify-start gap-2">
      <label htmlFor={id}>{label}</label>
      <input
        type="number"
        id={id}
        value={value}
        onChange={onChange}
        className="outline-none border rounded-md focus:border-2 focus:border-primary p-4"
      />
    </div>
  );
};
