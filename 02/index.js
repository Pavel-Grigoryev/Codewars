function areYouPlayingBanjo(name) {

  const firtstLetter = name[0].toLowerCase();

  if (firtstLetter === 'r') {
    return name + " plays banjo"; 
  } else {
    return name + " does not play banjo"
  }
}