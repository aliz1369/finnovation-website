import React from "react";

interface StyledTextProps {
  content: string | null;
  className?: string;
}

const StyledText: React.FC<StyledTextProps> = ({ content, className = "" }) => {
  return (
    <div
      className={`${className}`}
      dangerouslySetInnerHTML={{ __html: content ?? "" }}
    />
  );
};

export default StyledText;
