export const setClassesUtils = (obj: Record<string, boolean>) => {
  return Object.entries(obj).reduce((accumulator, [key, value], index) => {
    if (Boolean(value)) return accumulator + " " + key;
    return accumulator;
  }, "");
};
