export const PLAY_PAUSE_TRACK = "PLAY_PAUSE_TRACK";
export const UPDATE_TRACK = "UPDATE_TRACK";

export const playPauseTrack = trackInfo => ({
  type: PLAY_PAUSE_TRACK,
  trackInfo
});

export const updateCurrentTrack = duration => ({
  type: UPDATE_TRACK,
  duration
});
