'use strict';

function startEnd(string) {
  var regex = /{START}(.*?){END}/g;
  return string.match(regex);
}

function isDinosaur(string) {
  return /saur/.test(string);
}

function willSaraEatIt(string) {
  return /\bc/i.test(string);
}

function matchRaptor(string) {
  if (/.raptor$/.test(string)) {
    return string;
  } else {
    string + " isn't a raptor";
  }
}

function matchFeatherLike(string) {
  var regex = /plume|quill|feather|fluff/;
}