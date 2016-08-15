// method for getting all text nodes in an element
// http://stackoverflow.com/a/4399718/485048
function getTextNodesIn(node, includeWhitespaceNodes) {
  var textNodes = [];
  var nonWhitespaceMatcher = /\S/;

  function getTextNodes(node) {
    if (node.nodeType == 3) {
      if (includeWhitespaceNodes || nonWhitespaceMatcher.test(node.nodeValue)) {
        textNodes.push(node);
      }
    } else {
      for (var i = 0, len = node.childNodes.length; i < len; ++i) {
        getTextNodes(node.childNodes[i]);
      }
    }
  }

  getTextNodes(node);
  return textNodes;
}

function getSelectionOffset() {
  if (window.getSelection) {
    sel = window.getSelection();
    if (sel.getRangeAt && sel.rangeCount) {
      return sel.getRangeAt(0).startOffset;

    }
  } else if (document.selection && document.selection.createRange) {
    return document.selection.createRange();
  }

  return null;
}

// handlers
$('body').on('input', 'input', function () {
  var input = $(this).val();
  $(this).val(processChanges(input));
});

$('body').on('input', 'textarea', function () {
  var input = $(this).val();
  $(this).val(processChanges(input));
});

$('*').on('input', '[contenteditable]', function () {
  var element = $(this).get(0);
  var textNodes = getTextNodesIn(element);

  // work out the selection offset, so we only replace text bofore that
  var selection = getSelectionOffset();
  var beforeSelection = Math.max(0, getSelectionOffset() - 1);

  // process the text nodes one by one, modifying their contents
  textNodes.forEach(function (textNode) {
    var oldText = textNode.textContent.slice(0, selection);
    var newText = processChanges(oldText);

    // if the last characters match, but we still changed something, replace them
    if (oldText[oldText.length - 1] == newText[newText.length - 1] && oldText != newText) {
      // work out the difference between the lengths in the text
      var diff = newText.length - oldText.length;
      console.log(diff);

      // replace everything except the last character to maintain the cursor
      textNode.replaceData(0, beforeSelection, newText.slice(0, beforeSelection + diff));
    }
  });
});

// actual text -> emoji processing function
function processChanges(value) {
  var oldvalue = value;

  lookupKeys.forEach(function (lookupVal) {
    var firstIndex = value.indexOf(lookupVal);
    if (firstIndex > -1 &&
          (firstIndex == 0 ||
           value[firstIndex - 1] == ' ') &&
        value[firstIndex + lookupVal.length] == ' ') {
      value = value.replace(lookupVal, lookup[lookupVal]);
    }
  });

  if (oldvalue !== value) {
    console.log('Old Value: ' + value);
    console.log('New Value: ' + value);
  }

  return value;
}
