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

function matchRaptor(s) {
  if (!/.raptor$/.test(s)) s += " isn't a raptor";
  return s;
}

function matchFeatherLike(string) {
  var regex = /plume|quill|feather|fluff/;
  if (regex.test(string)) {
    return string;
  } else {
    return "no match found";
  }
}