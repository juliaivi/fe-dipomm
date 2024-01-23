export function convertingSecondsHours(seconds) {
    return new Date(seconds * 1000).toISOString().substring(11, 16);
}