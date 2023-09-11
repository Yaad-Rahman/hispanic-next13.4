import { CameraIcon } from '@heroicons/react/24/solid';
import { useRef } from 'react';

export const ImageUploader = ({
  name,
  value,
  onChange,
}: {
  name: string;
  value: string | null;
  onChange: (e: File | undefined | null) => void;
}) => {
  const inputRef = useRef<HTMLInputElement>(null);
  return (
    <div>
      <div
        className="relative w-fit cursor-pointer"
        onClick={() => inputRef?.current?.click()}
      >
        <img
          src={value ?? '/images/profile-placeholder.jpg'}
          alt="profile"
          className="h-24 w-24 rounded-full border-2 border-secondary-300 object-contain"
        />
        <CameraIcon className="absolute bottom-0 right-0 h-6 w-6" />
      </div>

      <input
        ref={inputRef}
        name={name}
        type="file"
        hidden
        onChange={(event) =>
          onChange(event.target?.files ? event.target.files[0] : null)
        }
      />
    </div>
  );
};
