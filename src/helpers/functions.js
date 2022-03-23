/**
 * Capitalize the first letter of a string
 *
 *@param {String} string to capitalize
 *@returns {String}
 *
 */
export const capitalizeFirstLetter = (string) => string.charAt(0).toUpperCase() + string.slice(1);

/**
 * Format the time of an audio media
 *
 * @param {Number} secs
 * @returns {String}
 */
export const calculateTime = (secs) => {
  const minutes = Math.floor(secs / 60);
  const returnedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
  const seconds = Math.floor(secs % 60);
  const returnedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
  return `${returnedMinutes} : ${returnedSeconds}`;
};
