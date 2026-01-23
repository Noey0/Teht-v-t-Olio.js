const opiskelija = {
  nimi: "Nj",
  ika: 19,
  kurssi: "Ohjelmointi",
};

console.log(opiskelija.nimi);
console.log(opiskelija.ika);
console.log(opiskelija.kurssi);

class Auto {
  constructor(merkki, malli, vuosimalli) {
    this.merkki = merkki;
    this.malli = malli;
    this.vuosimalli = vuosimalli;
  }
  tulostaTiedot() {
    console.log(
      `Merkki: ${this.merkki}, Malli: ${this.malli}, Vuosimalli: ${this.vuosimalli}`,
    );
  }
}
const auto1 = new Auto("Nissan", "Sentra", 2020);
const auto2 = new Auto("Toyota", "Corolla", 2015);

auto1.tulostaTiedot();
auto2.tulostaTiedot();

const kirjat = [
  { nimi: "Blue Lock", kirjailija: "Muneyuki Kaneshiro", vuosi: 2018 },
  { nimi: "The 48 Laws of Power", kirjailija: "Robert Greene", vuosi: 1998 },
  {
    nimi: "Raamattu",
    kirjailija: "useita kirjoittajia",
    vuosi: "n. 1400 eKr.100 jKr.",
  },
];

kirjat.forEach((kirja) => {
  console.log(
    `Nimi: ${kirja.nimi}, Kirjailija: ${kirja.kirjailija}, Vuosi: ${kirja.vuosi}`,
  );
});
