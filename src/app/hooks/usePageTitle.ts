import { useEffect, useState } from 'react';

export function usePageTitle(title?: string) {
  const [pageTitle, setPageTitle] = useState('');

  useEffect(() => {
    document.title = title ? `${title} - Team 58 Website` : 'Team 58 Website';
    setPageTitle(title || '');
  }, [setPageTitle, title]);

  return pageTitle;
}
