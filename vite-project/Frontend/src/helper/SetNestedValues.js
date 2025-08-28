export const setNestedValues = (data, setValue) => {
  Object.keys(data).forEach((key) => {
    const value = data[key];
    if (value && typeof value === "object" && !Array.isArray(value)) {
      Object.keys(value).forEach((subKey) => {
        setValue(`${key}.${subKey}`, value[subKey]);
      });
    } else {
      setValue(key, value);
    }
  });
};
