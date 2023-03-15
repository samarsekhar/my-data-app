export const dragDrop = (arr, dragResult) => {
  const { removedInedx, addedIndex, payload } = dragResult;
  if (removedInedx === null && addedIndex === null) return arr;

  const result = [...arr];
  let itemToAdd = payload;

  if (removedInedx !== null) {
    itemToAdd = result.splice(removedInedx, 1)[0];
  }

  if (addedIndex !== null) {
    result.splice(addedIndex, 0, itemToAdd);
  }

  return result;
};
