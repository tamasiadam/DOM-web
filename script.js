const cikkek = [
  {
    id: "csontok",
    menu: "Csontok",
    cim: "Születéskor több csontunk van, mint felnőttként",
    kep: "img/csontok.svg",
    kepLeiras: "Egy csont rajza",
    bekezdesek: [
      "Egy újszülött csontváza nagyjából 300 csontból és porcból áll, a felnőtt emberé viszont csak 206 csontból. Ennek az az oka, hogy növekedés közben sok csont összenő egymással.",
      "Jó példa erre a koponya: a csecsemőknél a koponyacsontok között még puha részek, úgynevezett kutacsok vannak, amelyek az első két év alatt csontosodnak el. Testünk legkisebb csontja a kengyel a középfülben, ami csak kb. 3 mm hosszú.",
    ],
    erdekesseg:
      "A combcsont a legerősebb csontunk: nagyobb terhelést bír ki, mint ugyanakkora vastagságú beton.",
  },
  {
    id: "sziv",
    menu: "Szív",
    cim: "A szív egy nap alatt kb. 100 000-szer ver",
    kep: "img/sziv.svg",
    kepLeiras: "Egy szív EKG-vonallal",
    bekezdesek: [
      "Egy felnőtt szíve nyugalomban percenként 60–100-at ver. Ez egy nap alatt körülbelül százezer szívverést jelent, egy egész élet alatt pedig több mint 2,5 milliárdot.",
      "Minden összehúzódással vért pumpál a testbe, így egy nap alatt nagyjából 7000 liter vér halad át rajta. A szív saját elektromos rendszerrel rendelkezik, ezért az agytól függetlenül is képes verni.",
    ],
    erdekesseg:
      "A szív mérete nagyjából akkora, mint a saját ökölbe szorított kezünk.",
  },
  {
    id: "agy",
    menu: "Agy",
    cim: "Az agyunk a test energiájának ötödét használja",
    kep: "img/agy.svg",
    kepLeiras: "Az agy két féltekéje",
    bekezdesek: [
      "Az emberi agy tömege mindössze 1,3–1,4 kg, ami a testtömeg kb. 2%-a. Ennek ellenére a szervezet által felhasznált energia körülbelül 20%-át fogyasztja el.",
      "Az agyban nagyjából 86 milliárd idegsejt (neuron) található, és mindegyik több ezer másikkal is kapcsolatban állhat. Az agy maga nem érez fájdalmat, mert nincsenek benne fájdalomérző receptorok.",
    ],
    erdekesseg:
      "Az agy kb. 75%-a víz, ezért már enyhe kiszáradás is ronthatja a koncentrációt.",
  },
  {
    id: "erek",
    menu: "Erek",
    cim: "Az ereink kétszer is körbeérnék a Földet",
    kep: "img/erek.svg",
    kepLeiras: "A Föld, körülötte piros érvonalakkal",
    bekezdesek: [
      "Ha egy felnőtt ember összes erét – az artériákat, a vénákat és a hajszálereket – egy vonalba fektetnénk, nagyjából 100 000 km hosszú lenne. Ez több mint kétszer érné körbe a Földet az Egyenlítő mentén.",
      "Ennek a hossznak a legnagyobb részét a hajszálerek adják. Ezek olyan vékonyak, hogy a vörösvértestek csak egyesével, sorban tudnak átpréselődni rajtuk.",
    ],
    erdekesseg:
      "Egy vörösvértest kb. 20 másodperc alatt teszi meg a teljes kört a testben.",
  },
  {
    id: "szem",
    menu: "Szem",
    cim: "A szemünk körülbelül egymillió színt különböztet meg",
    kep: "img/szem.svg",
    kepLeiras: "Egy színes íriszű szem",
    bekezdesek: [
      "A retinában háromféle csap található, amelyek a vörös, a zöld és a kék fényre érzékenyek. Ezek jeleit az agy keveri össze, így nagyjából egymillió színárnyalatot vagyunk képesek megkülönböztetni.",
      "A szem a nap folyamán percenként átlagosan 15–20-szor pislog. Ez napi több mint tízezer pislogást jelent, ami folyamatosan nedvesen tartja és tisztítja a szem felszínét.",
    ],
    erdekesseg:
      "Valójában fejjel lefelé látunk: a retinára fordított kép vetül, amit az agy fordít meg.",
  },
  {
    id: "gyomor",
    menu: "Gyomor",
    cim: "A gyomorsav fémet is képes oldani",
    kep: "img/gyomor.svg",
    kepLeiras: "A gyomor és a gyomorsav",
    bekezdesek: [
      "A gyomorban termelődő sósav pH-ja 1 és 2 között van, vagyis nagyon erős sav. Ez segít megemészteni az ételt és elpusztítani a vele bekerülő baktériumok nagy részét.",
      "Hogy a gyomor ne eméssze meg saját magát, a falát vastag nyálkaréteg védi, a nyálkahártya sejtjei pedig néhány naponta megújulnak.",
    ],
    erdekesseg:
      "Egy felnőtt gyomra naponta kb. 1,5–2 liter gyomornedvet termel.",
  },
];

function elemKeszites(tag, osztaly, szoveg) {
  const elem = document.createElement(tag);
  if (osztaly) elem.className = osztaly;
  if (szoveg) elem.textContent = szoveg;
  return elem;
}

// ===== Navbar =====
function navbarKeszites() {
  const nav = elemKeszites("nav", "navbar");

  const logo = elemKeszites("a", "logo", "Az emberi test");
  logo.href = "#fejlec";
  nav.appendChild(logo);

  // Hamburger gomb mobilra
  const gomb = elemKeszites("button", "menu-gomb", "☰");
  gomb.setAttribute("aria-label", "Menü megnyitása");
  nav.appendChild(gomb);

  const lista = elemKeszites("ul", "menu");
  cikkek.forEach((cikk) => {
    const li = document.createElement("li");
    const link = elemKeszites("a", "", cikk.menu);
    link.href = "#" + cikk.id;
    li.appendChild(link);
    lista.appendChild(li);
  });
  nav.appendChild(lista);

  gomb.addEventListener("click", () => {
    lista.classList.toggle("nyitva");
  });

  // Ha mobilon rákattintunk egy menüpontra, záródjon be a menü
  lista.addEventListener("click", (e) => {
    if (e.target.tagName === "A") lista.classList.remove("nyitva");
  });

  return nav;
}

// ===== Fejléc =====
function fejlecKeszites() {
  const header = elemKeszites("header", "fejlec");
  header.id = "fejlec";
  header.appendChild(
    elemKeszites("h1", "", "Érdekes tények az emberi testről"),
  );
  header.appendChild(
    elemKeszites(
      "p",
      "",
      "Hat rövid bejegyzés arról, mi minden történik bennünk minden egyes nap.",
    ),
  );
  return header;
}

// ===== Egy cikk (bejegyzés) =====
function cikkKeszites(cikk) {
  const article = elemKeszites("article", "cikk");
  article.id = cikk.id;

  const kep = document.createElement("img");
  kep.src = cikk.kep;
  kep.alt = cikk.kepLeiras;
  article.appendChild(kep);

  const tartalom = elemKeszites("div", "cikk-tartalom");
  tartalom.appendChild(elemKeszites("h2", "", cikk.cim));

  cikk.bekezdesek.forEach((szoveg) => {
    tartalom.appendChild(elemKeszites("p", "", szoveg));
  });

  const tudtad = document.createElement("p");
  tudtad.appendChild(elemKeszites("strong", "", "Tudtad? "));
  tudtad.appendChild(elemKeszites("em", "", cikk.erdekesseg));
  tartalom.appendChild(tudtad);

  article.appendChild(tartalom);
  return article;
}

// ===== Lábléc =====
function lablecKeszites() {
  const footer = elemKeszites("footer", "lablec");
  footer.appendChild(
    elemKeszites(
      "p",
      "",
      "© " + new Date().getFullYear() + " Az emberi test – iskolai projekt",
    ),
  );
  return footer;
}

// ===== Aktív menüpont kiemelése görgetéskor =====
function aktivMenuFigyelese() {
  const linkek = document.querySelectorAll(".menu a");

  const figyelo = new IntersectionObserver(
    (bejegyzesek) => {
      bejegyzesek.forEach((b) => {
        if (b.isIntersecting) {
          linkek.forEach((link) => {
            link.classList.toggle(
              "aktiv",
              link.getAttribute("href") === "#" + b.target.id,
            );
          });
        }
      });
    },
    { rootMargin: "-40% 0px -55% 0px" },
  );

  document.querySelectorAll(".cikk").forEach((cikk) => figyelo.observe(cikk));
}

// ===== Az oldal felépítése =====
function oldalFelepitese() {
  document.body.appendChild(navbarKeszites());
  document.body.appendChild(fejlecKeszites());

  const main = elemKeszites("main", "cikkek");
  cikkek.forEach((cikk) => {
    main.appendChild(cikkKeszites(cikk));
  });
  document.body.appendChild(main);

  document.body.appendChild(lablecKeszites());

  aktivMenuFigyelese();
}

oldalFelepitese();
