import type { Communication } from '../hooks/useCommunicationManager';

export type TStoreState = {
  isSpeaking?: boolean;
  isRecognizing?: boolean;
  language?: string;
  history?: Communication[];
};

export enum EventNames {
  SpeechSpeaking = 'speech.speaking',
  SpeechSilent = 'speech.silent',
  SpeechAction = 'speech.action',
  Speech2TextResult = 'speech2text.result',
  CommunicationUser = 'communication.user',
  CommunicationAI = 'communication.ai',
  IBrainSpeak = 'ibrain.speak',
  VoicePermissionAccepted = 'system.audiorequest.accepted'
}
