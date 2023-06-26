import React, { useEffect, useState } from 'react';

import { Loader } from '../Icons/Loader';

export default function OnlyClient({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isClient, setIsClient] = useState<boolean>(false);

  useEffect(() => {
    setIsClient(false);
  }, []);

  return (
    <React.Fragment>
      {isClient ? (
        children
      ) : (
        <div className="flex justify-center">
          <Loader className="h-10 w-10" />
        </div>
      )}
    </React.Fragment>
  );
}
