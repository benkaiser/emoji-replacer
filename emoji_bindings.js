// map of what users can type and what it turns into
// above what they keywords in emojilib are
var lookup = {
  ':\')': emojis.joy.char,
  'baseball': emojis.baseball.char,
  'bball': emojis.basketball.char,
  'basketball': emojis.basketball.char,
  'beer': emojis.beer.char,
  'chocolate': emojis.chocolate_bar.char,
  'church': emojis.church.char,
  'COD': emojis.gun.char + emojis.video_game.char,
  'dead': emojis.skull.char,
  'fuckyou': emojis.middle_finger.char,
  'ghost': emojis.ghost.char,
  'joystick': emojis.joystick.char,
  'middlefinger': emojis.middle_finger.char,
  'middle finger': emojis.middle_finger.char,
  'pasta': emojis.spaghetti.char,
  'pizza': emojis.pizza.char,
  'popcorn': emojis.popcorn.char,
  'skull': emojis.skull.char,
  'soccer': emojis.soccer.char,
  'spagbol': emojis.spaghetti.char,
  'spaghetti': emojis.spaghetti.char,
  'spooker': emojis.ghost.char,
  'taco': emojis.taco.char,
  'ted': emojis.bear.char,
  'videogame': emojis.video_game.char,
  'volleyball': emojis.volleyball.char,
};

// load up the emojis from the emojilib
function addShortcut(key, emoji) {
  if (lookup[key] === undefined && key.length >= 2) {
    lookup[key] = emoji;
  }
}

Object.keys(emojis).forEach(function(key) {
  emoji = emojis[key];
  addShortcut(':' + key + ':', emoji.char);

  if (emoji.category == 'symbols') return;
  emoji.keywords.forEach(function(keyword) {
    addShortcut(keyword, emoji.char);
  });
})

// this is used many many times, make it quick
var lookupKeys = Object.keys(lookup);
