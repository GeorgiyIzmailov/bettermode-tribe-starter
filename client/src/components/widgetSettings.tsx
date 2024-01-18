import { InkeepWidgetBaseSettings, InkeepAIChatSettings } from '@inkeep/widgets';

export const baseSettings: InkeepWidgetBaseSettings = {
  integrationId: 'integrationId',
  apiKey: 'apiKey',
  organizationDisplayName: 'Inkeep',
  primaryBrandColor: '#26D6FF',
  organizationId: 'organizationId',
};

export const aiChatSettings: InkeepAIChatSettings = {
  quickQuestions: ['How to get started?'],
};
