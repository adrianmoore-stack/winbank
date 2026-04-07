import { useState, useEffect } from 'react';

const useCopyToClipboard = () => {
  const [copySuccess, setCopySuccess] = useState(false);

  useEffect(() => {
    if (!copySuccess) return;

    const timer = setTimeout(() => {
      setCopySuccess(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, [copySuccess]);

  const copyToClipBoard = (val) => {
    navigator.clipboard.writeText(val);
    setCopySuccess(true);
  };

  return {
    copyToClipBoard,
    copySuccess,
  };
};

export default useCopyToClipboard;
