// convert a string to slug
export const createSlug = (string) => {
  console.log(`Input parameter: ${string}`);
  // if (typeof string !== "string") {
  //   throw new Error("Input parameter must be a string");
  // }

  const slug = string.toLowerCase().replace(/[^\w]/g, "-");

  return slug;
};

