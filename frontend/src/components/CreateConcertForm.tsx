import type { FormEvent } from 'react';

import { SaveIcon, UserIcon } from '@/icons';

import { Button } from './Button';

export type CreateConcertFormValues = {
  name: string;
  totalSeats: string;
  description: string;
};

export type CreateConcertFormField = keyof CreateConcertFormValues;

type CreateConcertFormProps = {
  values: CreateConcertFormValues;
  onChange: (field: CreateConcertFormField, value: string) => void;
  onSubmit: (event: FormEvent<HTMLFormElement>) => void;
  isSubmitting?: boolean;
  className?: string;
};

export function CreateConcertForm({
  values,
  onChange,
  onSubmit,
  isSubmitting = false,
  className = '',
}: CreateConcertFormProps) {
  return (
    <form
      onSubmit={onSubmit}
      className={`rounded-[8px] border border-[#D0D5DD] bg-white p-6 shadow-sm sm:p-10 ${className}`.trim()}
    >
      <div>
        <h3 className="text-2xl font-semibold text-[#1692EC] sm:text-[32px] lg:text-[40px]">Create</h3>
        <div className="mt-2 h-[1px] w-full max-w-[942px] rounded-full bg-[#C2C2C2]" aria-hidden />
      </div>

      <div className="mt-6 grid gap-4 sm:gap-6 md:grid-cols-2">
        <div className="flex flex-col gap-2">
          <label
            className="text-lg font-regular text-[#101828] sm:text-xl lg:text-[24px]"
            htmlFor="concert-name"
          >
            Concert Name
          </label>
          <input
            id="concert-name"
            type="text"
            placeholder="Please input concert name"
            value={values.name}
            onChange={(event) => onChange('name', event.target.value)}
            className="rounded-md border border-[#D0D5DD] px-3 py-2 text-sm text-[#101828] placeholder:text-[#C2C2C2] outline-none focus:border-[#1275D1]"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label
            className="text-lg font-regular text-[#101828] sm:text-xl lg:text-[24px]"
            htmlFor="total-seats"
          >
            Total of seat
          </label>
          <div className="relative">
            <input
              id="total-seats"
              type="number"
              min={0}
              placeholder="Please input seats"
              value={values.totalSeats}
              onChange={(event) => onChange('totalSeats', event.target.value)}
              className="w-full rounded-md border border-[#D0D5DD] px-3 py-2 pr-10 text-sm text-[#101828] placeholder:text-[#C2C2C2] outline-none focus:border-[#1275D1]"
            />
            <UserIcon size={18} className="absolute right-3 top-1/2 -translate-y-1/2 text-[#667085]" />
          </div>
        </div>
      </div>

      <div className="mt-4 flex flex-col gap-2 sm:mt-6">
        <label
          className="text-lg font-regular text-[#101828] sm:text-xl lg:text-[24px]"
          htmlFor="concert-description"
        >
          Description
        </label>
        <textarea
          id="concert-description"
          placeholder="Please input description"
          value={values.description}
          onChange={(event) => onChange('description', event.target.value)}
          rows={4}
          className="w-full rounded-md border border-[#D0D5DD] px-3 py-2 text-sm text-[#101828] placeholder:text-[#C2C2C2] outline-none focus:border-[#1275D1]"
        />
      </div>

      <div className="mt-6 flex justify-end">
        <Button
          type="submit"
          text={isSubmitting ? 'Saving...' : 'Save'}
          icon={SaveIcon}
          backgroundColor="#1692EC"
          textColor="#FFFFFF"
          disabled={isSubmitting}
        />
      </div>
    </form>
  );
}
