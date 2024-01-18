import { InkeepSearchBarProps } from '@inkeep/widgets';
import { useEffect, useState } from 'react';
import { baseSettings, aiChatSettings } from './widgetSettings';

export const InkeepSearchBar = () => {
  const [SearchBar, setSearchBar] = useState<(e: InkeepSearchBarProps) => JSX.Element>();

  useEffect(() => {
    const loadSearchBar = async () => {
      try {
        const { InkeepSearchBar } = await import('@inkeep/widgets');
        setSearchBar(() => InkeepSearchBar);
      } catch (error) {
        console.error('Failed to load SearchBar:', error);
      }
    };

    loadSearchBar();
  }, []);

  const searchBarProps: InkeepSearchBarProps = {
    // stylesheetUrls: ['/path/to/stylesheets'],
    baseSettings,
    aiChatSettings,
  };

  return SearchBar ? <SearchBar {...searchBarProps} /> : null;
};
