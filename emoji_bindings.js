// map of emoji names to emoji characters
var emoji = {
  // faces
  'cry': '😂',
  'ghost': '👻',
  'skull': '💀',
  // hand symbols
  'thumbsup': '👍',
  'middlefinger': '🖕',
  // sports
  'basketball': '🏀',
  'soccer': '⚽',
  'baseball': '⚾',
  'volleyball': '🏐',
  // gaming
  'game': '🎮',
  'joystick': '🕹',
  // weapons
  'pistol': '🔫',
  // foods
  'pizza': '🍕',
  'taco': '🌮',
  'popcorn': '🍿',
  'spaghetti': '🍝',
  'chocolate': '🍫',
  'beer': '🍺',
  // locations
  'church': '⛪',
};

// map of what users can type and what it turns into
var lookup = {
  ':\')': emoji.cry,
  '+1': emoji.thumbsup,
  'baseball': emoji.baseball,
  'bball': emoji.basketball,
  'basketball': emoji.basketball,
  'beer': emoji.beer,
  'chocolate': emoji.chocolate,
  'church': emoji.church,
  'COD': emoji.pistol + emoji.game,
  'dead': emoji.skull,
  'fuckyou': emoji.middlefinger,
  'ghost': emoji.ghost,
  'joystick': emoji.joystick,
  'middlefinger': emoji.middlefinger,
  'middle finger': emoji.middlefinger,
  'pasta': emoji.spaghetti,
  'pizza': emoji.pizza,
  'popcorn': emoji.popcorn,
  'skull': emoji.skull,
  'soccer': emoji.soccer,
  'spagbol': emoji.spaghetti,
  'spaghetti': emoji.spaghetti,
  'spooker': emoji.ghost,
  'taco': emoji.taco,
  'thumbsup': emoji.thumbsup,
  'videogame': emoji.game,
  'volleyball': emoji.volleyball,
};

// this is used many many times, make it quick
var lookupKeys = Object.keys(lookup);
