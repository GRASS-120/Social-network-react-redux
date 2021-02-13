// шаблон для перебора массива в reducer

export let objectUpdater = (items, itemId, objProperty, newObj) => {
  return items.map((u) => {
    // тоже самое что и users: [...state.users]
    if (u[objProperty] === itemId) {
      return { ...u, ...newObj };
    }
    return u;
  });
};
