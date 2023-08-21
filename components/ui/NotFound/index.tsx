export const NotFound = ({
  message = 'Not Found',
  color,
}: {
  message: string;
  color: 'white' | 'black';
}) => {
  return (
    <div className="flex h-full w-full items-center justify-center py-20">
      {/* eslint-disable-next-line tailwindcss/no-custom-classname */}
      <p className={`text-${color} font-lexendFont text-xl`}>{message}</p>
    </div>
  );
};
