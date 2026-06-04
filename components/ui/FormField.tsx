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
      {hint && <p className="text-xs text-charcoal-400">{hint}</p>}
    </div>
  );
}

export const inputClassName =
  "w-full rounded-lg border border-charcoal-600 bg-charcoal-800/80 px-3 py-2.5 text-sm text-white placeholder:text-charcoal-500 focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold transition-colors";

export const selectClassName = inputClassName;

export const textareaClassName = `${inputClassName} min-h-[100px] resize-y`;
