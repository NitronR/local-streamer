// returns a string from object with given key.
// if not exist then returns empty string
export function getStringVal(obj, key) {
    return (obj[key] === undefined ? '' : obj[key]);
}