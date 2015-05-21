'use strict';

function startEnd(string) {
  return string.match(/{START}\s[a-zA-Z\s]+\s{END}/g)
}

function isDinosaur(string) {
  return /saur/.test(string);
}

function willSaraEatIt(string) {
  return /^c|C/.test(string);
}

function matchRaptor(string) {
  return /^\w+raptor$/.test(string) == true ? string : string + " isn't a raptor";
}

function matchFeatherLike(string) {
  return /(quill|plume|feather|fluff)/.test(string) == true ? string : "no match found" ;
}
