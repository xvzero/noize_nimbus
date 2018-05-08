export const PASS_AUDIO_PLAYER = "GET_AUDIO_PLAYER";
export const PLAY_AUDIO_PLAYER = "PLAY_AUDIO_PLAYER";
export const PAUSE_AUDIO_PLAYER = "PAUSE_AUDIO_PLAYER";
export const SEEK_AUDIO_PLAYER = "SEEK_AUDIO_PLAYER";

export const passAudioPlayerRef = audioPlayerRef => ({
  type: PASS_AUDIO_PLAYER,
  audioPlayerRef
});

export const playAudioPlayer = trackURL => ({
  type: PLAY_AUDIO_PLAYER,
  trackURL
});

export const pauseAudioPlayer = () => ({
  type: PAUSE_AUDIO_PLAYER
});

export const seekAudioPlayer = (trackURL, playedSeconds, duration) => ({
  type: SEEK_AUDIO_PLAYER,
  trackURL,
  playedSeconds,
  duration
});
