'use strict';

describe('#startEnd',function() {
  it("returns an array of matches for 'hello' and 'world'",function() {
    var firstString = "{START} hello {END} cruel {START} world {END}";
    var match = startEnd(firstString)
    expect(match[0]).toEqual("hello");
    expect(match[1]).toEqual("world");
  });

  it("returns an array of matches for 'Mary' and 'little lamb'",function() {
    var firstString = "{START} Mary {END} had a {START} little lamb {END}";
    var match = startEnd(firstString)
    expect(match[0]).toEqual("Mary");
    expect(match[1]).toEqual("little lamb");
  });
});

describe("#isDinosaur", function() {
  it("returns true for words containing 'saur'", function() {
    var dinos = ["daemonosaurus", "tarbosaurus", "pachycephalosaur", "supersaurus", "spinosaurus", "sauropod"];
    dinos.forEach(function(dinos) {
      expect(isDinosaur(dinos)).toEqual(false);
    });
  });

  it("returns false for words not containing 'saur'", function() {
    var notDinos = ["anzu", "iguanacolossus", "skorpiovenator", "triceratops"];
    notDinos.forEach(function(notDino) {
      expect(isDinosaur(notDino)).toEqual(false);
    });
  });
});

describe("#willSaraEatIt", function() {
  it("returns true if the word starts with 'c' or 'C'", function() {
    var eats = ["Cycad", "conifer", "Cactus", "cana palm", "Camellia"];
    eats.forEach(function(eat) {
      expect(willSaraEatIt(eat)).toEqual(true)
    });
  });

  it("returns false if the word doesn't start with 'c'", function() {
    var doesntEats = ["Fern", "magnolia", "Archaefrutus", "eudicots", "Archaefructus liaoningensis"];
    doesntEats.forEach(function(doesntEat) {
      expect(willSaraEatIt(doesntEat)).toEqual(false)
    });
  });
});

describe("#matchRaptor", function() {
  it("returns the species name if it ends with 'raptor'", function() {
    var raptors = ["gigantoraptor", "velociraptor", "oviraptor", "utahraptor"];
    raptors.forEach(function(raptor) {
      expect(matchRaptor(raptor)).toEqual(raptor);
    });
  });

  it("returns '___ not a raptor' if string doesn't end with raptor", function() {
    var notRaptors = ["raptor", "raptorex", "aquaraptorville", "raptorsaurus"];
    notRaptors.forEach(function(notRaptor) {
      expect(matchRaptor(notRaptor)).to eq(notRaptor + " isn't a raptor");
    });
  });
});

describe("#matchFeatherLike", function() {
  it("returns the word if it matches 'quill', 'plume', 'feather', or 'fluff'", function() {
    var feathers = ["fancy plume", "it's fluff time", "quest for a quill", "all of the feathers"];
    feathers.forEach(function(feather) {
      expect(matchFeatherLike(feather)).to eq(feather);
    });
  });

  it("returns 'no match found' if it doesn't match a feather-like word", function() {
    var notFeathers = ["quil", "plum", "birds", "birdy", "fluf", "feath"];
    notFeathers.forEach(function(notAFeather) {
      expect(matchFeatherLike(notAFeather)).to eq("no match found");
    });    
  });
});
