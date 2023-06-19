const TOGGLE_SWITCH = "TOGGLE_SWITCH";

// Define the action creator
export const toggleSwitch = (switchId) => ({
  type: TOGGLE_SWITCH,
  payload: { switchId },
});
