"use client";

import {
  FormField,
  fileClassName,
  inputClassName,
  textareaClassName,
} from "@/components/ui/FormField";
import type { StartupRegistration } from "@/lib/types/startup";

interface StepProps {
  data: StartupRegistration;
  onChange: (patch: Partial<StartupRegistration>) => void;
}

export function Step4ProductService({ data, onChange }: StepProps) {
  return (
    <div className="flex flex-col gap-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <FormField label="Produto" htmlFor="productType" required>
          <input
            id="productType"
            className={inputClassName}
            value={data.productType}
            onChange={(e) => onChange({ productType: e.target.value })}
          />
        </FormField>
        <FormField label="Nome" htmlFor="productName" required>
          <input
            id="productName"
            className={inputClassName}
            value={data.productName}
            onChange={(e) => onChange({ productName: e.target.value })}
          />
        </FormField>
        <FormField label="Categoria" htmlFor="productCategory" required>
          <input
            id="productCategory"
            className={inputClassName}
            value={data.productCategory}
            onChange={(e) => onChange({ productCategory: e.target.value })}
          />
        </FormField>
        <FormField label="Status" htmlFor="productStatus" required>
          <input
            id="productStatus"
            className={inputClassName}
            value={data.productStatus}
            onChange={(e) => onChange({ productStatus: e.target.value })}
            placeholder="Ex: Em produção, Beta, Lançado"
          />
        </FormField>
      </div>
      <FormField label="Descrição" htmlFor="productDescription" required>
        <textarea
          id="productDescription"
          className={textareaClassName}
          value={data.productDescription}
          onChange={(e) => onChange({ productDescription: e.target.value })}
          rows={4}
        />
      </FormField>
      <FormField label="Fotos" htmlFor="productPhotos" required hint="Anexo">
        <input
          id="productPhotos"
          type="file"
          accept="image/*"
          multiple
          className={fileClassName}
          onChange={(e) => {
            const names = Array.from(e.target.files ?? [])
              .map((f) => f.name)
              .join(", ");
            onChange({ productPhotos: names });
          }}
        />
        {data.productPhotos && (
          <p className="text-xs text-navy-400">
            Arquivos: {data.productPhotos}
          </p>
        )}
      </FormField>
      <FormField
        label="Vídeo Demonstrativo"
        htmlFor="demoVideo"
        hint="Anexo ou link"
      >
        <input
          id="demoVideo"
          className={inputClassName}
          value={data.demoVideo}
          onChange={(e) => onChange({ demoVideo: e.target.value })}
          placeholder="URL ou nome do arquivo"
        />
      </FormField>
    </div>
  );
}
