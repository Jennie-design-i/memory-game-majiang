function url(color, type) {
  return `https://github.com/FluffyStuff/riichi-mahjong-tiles/blob/master/Export/${color}/${type}.png?raw=true`;
}
const imgUrl = {
  back: url("Black", "Back"),
  blank: url("Black", "Blank"),
  front: url("Regular", "Front"),
  chun: url("Regular", "Chun"),
  haku: url("Regular", "Haku"),
  hatsu: url("Regular", "Hatsu"),
  man1: url("Regular", "Man1"),
  man2: url("Regular", "Man2"),
  man3: url("Regular", "Man3"),
  man4: url("Regular", "Man4"),
  man5: url("Regular", "Man5"),
  man6: url("Regular", "Man6"),
  man7: url("Regular", "Man7"),
  man8: url("Regular", "Man8"),
  man9: url("Regular", "Man9"),
  nan: url("Regular", "Nan"),
  pei: url("Regular", "Pei"),
  pin1: url("Regular", "Pin1"),
  pin2: url("Regular", "Pin2"),
  pin3: url("Regular", "Pin3"),
  pin4: url("Regular", "Pin4"),
  pin6: url("Regular", "Pin6"),
  pin7: url("Regular", "Pin7"),
  pin8: url("Regular", "Pin8"),
  pin9: url("Regular", "Pin9"),
  shaa: url("Regular", "Shaa"),
  sou1: url("Regular", "Sou1"),
  sou2: url("Regular", "Sou2"),
  sou3: url("Regular", "Sou3"),
  sou4: url("Regular", "Sou4"),
  sou5: url("Regular", "Sou5"),
  sou6: url("Regular", "Sou6"),
  sou7: url("Regular", "Sou7"),
  sou8: url("Regular", "Sou8"),
  sou9: url("Regular", "Sou9"),
  ton: url("Regular", "Ton")
};

export default imgUrl;
