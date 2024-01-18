import { InkeepChatButtonProps } from '@inkeep/widgets';
import { useEffect, useState } from 'react';
import { baseSettings, aiChatSettings } from './widgetSettings';

export const InkeepChatButton = () => {
  const [ChatButton, setChatButton] = useState<(e: InkeepChatButtonProps) => JSX.Element>();

  useEffect(() => {
    const loadChatButton = async () => {
      try {
        const { InkeepChatButton } = await import('@inkeep/widgets');
        setChatButton(() => InkeepChatButton);
      } catch (error) {
        console.error('Failed to load ChatButton:', error);
      }
    };

    loadChatButton();
  }, []);

  const chatButtonProps: InkeepChatButtonProps = {
    chatButtonType: 'ICON_TEXT_SHORTCUT',
    baseSettings,
    aiChatSettings,
  };

  return ChatButton ? <ChatButton {...chatButtonProps} /> : null;
};
