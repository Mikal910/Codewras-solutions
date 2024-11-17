function points(games) {
  return games.reduce((totalPoints, game) => {
    const [x, y] = game.split(':').map(Number);
    if (x > y) {
      return totalPoints + 3;
    } else if (x === y) {
      return totalPoints + 1;
    } else {
      return totalPoints;
    }
  }, 0);
}