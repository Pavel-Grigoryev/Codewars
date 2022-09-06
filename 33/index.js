const rps = (p1, p2) => {
  if (p1.length === p2.length) {
    return "Draw!";
  } else if (p1.length === 4 && p2.length === 8 || 
    p1.length === 8 && p2.length === 5 || 
    p1.length === 5 && p2.length === 4) {
    return "Player 1 won!";
  } else {
    return "Player 2 won!";
    }
};