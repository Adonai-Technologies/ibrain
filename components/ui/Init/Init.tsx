'use client';
import { useDevTools } from '@/app/hooks/useDevTool';
import { core, useBrainStack } from '@/app/providers/brainstack';
import { useSpeech2text } from '@/app/hooks/useSpeech2text';
import { useTextToSpeech } from '@/app/hooks/useText2Speech';

export default function Init() {
  const bstack = useBrainStack();
  useDevTools(core);
  const { VoicePermissionRequest } = useSpeech2text();
  useTextToSpeech();

  return (
    <>
      <VoicePermissionRequest />
      <button
        onClick={() => {
          bstack.store.emit('communication.ai', { text: 'hello there' });
        }}
      >
        Speak
      </button>
    </>
  );
}
