const choice = (item) => {
  const idx = Math.floor(Math.random() * item.length);
  return item[idx];
};
const remove = (items, item) => {
  const idx = items.indexOf(item);
  let newItem = items[idx];
  items.splice(idx, 1);
  return newItem;
};

export { choice, remove };
