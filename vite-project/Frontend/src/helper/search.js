export const searchUsers = (users, query) => {
  if (!query) return users;

  const lowerQuery = query.toLowerCase().trim();

  return users.filter((user) => {
    // full name create karo
    const fullName = `${user.firstName || ""} ${user.lastName || ""}`
      .toLowerCase()
      .trim();

    // baaki saare fields ko ek string bana lo
    const combinedValues = Object.values(user)
      .map((val) =>
        typeof val === "object" && val !== null
          ? JSON.stringify(val)
          : String(val)
      )
      .join(" ")
      .toLowerCase();

    // agar query fullName ya kisi aur field me milti hai to true
    return fullName.includes(lowerQuery) || combinedValues.includes(lowerQuery);
  });
};
