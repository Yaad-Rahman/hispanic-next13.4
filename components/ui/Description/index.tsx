export const Description = ({
  children,
  wordLimit,
}: {
  children: string;
  wordLimit: number;
}) => {
  const numberOfWords = children.split(' ');
  const isWordLimitExceeded = numberOfWords.length > wordLimit;
  return (
    <span>
      {isWordLimitExceeded
        ? `${numberOfWords.slice(0, wordLimit).join(' ')}...`
        : children}
    </span>
  );
};
