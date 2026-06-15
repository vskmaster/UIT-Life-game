import { useState } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import type { GameState, PlayerProfile } from './types/game';
import { createInitialGameState } from './lib/gameEngine';
import CharacterCreation from './pages/CharacterCreation';
import GameScreen from './pages/GameScreen';

const queryClient = new QueryClient();

function GameApp() {
  const [gameState, setGameState] = useState<GameState | null>(null);

  const handleStart = (profile: PlayerProfile) => {
    setGameState(createInitialGameState(profile));
  };

  const handleRestart = () => {
    setGameState(null);
  };

  if (!gameState) {
    return <CharacterCreation onStart={handleStart} />;
  }

  return (
    <GameScreen
      gameState={gameState}
      onStateChange={setGameState}
      onRestart={handleRestart}
    />
  );
}

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <GameApp />
    </QueryClientProvider>
  );
}
