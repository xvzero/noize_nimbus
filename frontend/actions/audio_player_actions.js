export const PLAY_PAUSE_TRACK = "PLAY_PAUSE_TRACK";
export const UPDATE_AUDIO_PLAYER = "UPDATE_AUDIO_PLAYER";
export const RECEIVE_AUDIO_PLAYER = "RECEIVE_AUDIO_PLAYER";

export const playPauseTrack = track => ({
  type: PLAY_PAUSE_TRACK,
  track
});

export const updateAudioPlayer = audioPlayer => ({
  type: UPDATE_AUDIO_PLAYER,
  audioPlayer
});
