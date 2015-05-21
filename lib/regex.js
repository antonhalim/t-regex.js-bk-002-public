'use strict';

function startEnd(string) {
  var re = /{START}\s[a-zA-Z\s]+\s{END}/g;
  return string.match(re)
}

function isDinosaur(string) {
  var re = /saur/;
  var result = re.exec(string);
  if (result == null){
    return false
  };
  return true
}

function willSaraEatIt(string) {
  var re = /^c|C/;
  var result = re.exec(string);
  if (result == null){
    return false
  };
  return true
}

function matchRaptor(string) {
  var re = /^\w+raptor$/;
  var result = re.exec(string);
  if (result == null){
    return string + " isn't a raptor"
  };
  return string
}

function matchFeatherLike(string) {
  var re = /(quill|plume|feather|fluff)/;
  var result = re.exec(string);
  if (result == null){
    return "no match found"
  };
  return string
}
