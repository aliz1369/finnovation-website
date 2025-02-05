import { useEffect, useState } from "react";

interface StyledTextProps {
  content: string | null;
  className?: string;
}

const decodeHTML = (html: string) => {
  if (typeof window === "undefined") return html;
  const txt = document.createElement("textarea");
  txt.innerHTML = html;
  return txt.value;
};

const StyledText: React.FC<StyledTextProps> = ({ content, className = "" }) => {
  const [decodedContent, setDecodedContent] = useState("");

  useEffect(() => {
    if (content) {
      setDecodedContent(decodeHTML(content.replace(/\\r\\n|\t/g, "")));
    }
  }, [content]);

  return (
    <div
      className={`prose max-w-full ${className} list-disc pl-5`}
      dangerouslySetInnerHTML={{ __html: decodedContent }}
    />
  );
};

export default StyledText;
