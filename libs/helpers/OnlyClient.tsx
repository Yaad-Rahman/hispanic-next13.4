import React, { useEffect, useState } from 'react';

import { Loader } from '../Icons/Loader';

export default function OnlyClient({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isClient, setIsClient] = useState<boolean>(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <React.Fragment>
      {isClient ? (
        children
      ) : (
        <div className="mt-5 flex justify-center">
          <Loader variant="black" />
        </div>
      )}
    </React.Fragment>
  );
}
