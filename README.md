## Emoji Replacer

Chrome extention that replaces all the words as you type with relevant emojis for those words.

This is purposefully limited to messenger.com (my main use case)
but this can be changed to '<all_urls>' to make it work everywhere on the web.

For now when it's buggy I could imagine it would get really annoying sometimes
with text inputs.

#### Installing

1. Download the repository
1. Run `./bin/setup` from the project directory
1. Open `chrome://extensions` in Chrome
1. Select 'Load unpacked extension...'
1. Pick the folder where you downloaded the repository to

#### Known Issues

1. On text inputs (outside of messenger which uses contenteditable) when typing
anywhere but the end of the input it will push your cursor to the end of the input (upon typing a character)
1. Very small coverage on emojis (I know, pull requests are welcome, use this to help get you going: http://unicode.org/emoji/charts/full-emoji-list.html)
