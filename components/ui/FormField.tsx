interface FormFieldProps {
  label: string;
  htmlFor: string;
  hint?: string;
  required?: boolean;
  children: React.ReactNode;
}

export function FormField({
  label,
  htmlFor,
  hint,
  required,
  children,
}: FormFieldProps) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={htmlFor} className="text-sm font-medium text-gold-100">
        {label}
        {required && <span className="text-gold ml-0.5">*</span>}
      </label>
      {children}
      {hint && <p className="text-xs text-navy-400">{hint}</p>}
    </div>
  );
}

export const inputClassName =
  "w-full rounded-lg border border-navy-600 bg-navy-800/80 px-3 py-2.5 text-sm text-white placeholder:text-navy-500 focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold transition-colors";

export const selectClassName = inputClassName;

export const textareaClassName = `${inputClassName} min-h-[100px] resize-y`;

export const checkboxClassName =
  "h-4 w-4 rounded border-navy-600 bg-navy-800 text-gold focus:ring-gold focus:ring-offset-navy-900";

export const fileClassName =
  "w-full rounded-lg border border-navy-600 bg-navy-800/80 px-3 py-2 text-sm text-navy-300 file:mr-3 file:rounded-md file:border-0 file:bg-gold file:px-3 file:py-1.5 file:text-xs file:font-semibold file:text-navy-950 hover:file:bg-gold-light";
