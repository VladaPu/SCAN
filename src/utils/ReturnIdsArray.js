export const returnIdsArray = (data) =>
  data.items.map(({ encodedId }) => encodedId);
