import { type Dispatch, type SetStateAction } from 'react';

import { Modal } from '@/components/ui';

export const ImageModal = ({
  imageUrl,
  setImageUrl,
}: {
  imageUrl: string | null;
  setImageUrl: Dispatch<SetStateAction<string | null>>;
}) => {
  return (
    <Modal
      isOpen={!!imageUrl}
      onClose={() => {
        setImageUrl(null);
      }}
      variant="image"
    >
      <img
        src={imageUrl ?? ''}
        alt="memory"
        className="aspect-video w-[60vw] object-contain"
      />
    </Modal>
  );
};
