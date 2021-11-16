export const TextData = [
  {
    id: 1,
    title: 'Info om Mig Mattis Erkensten',
    heading2: 'Info',
    paragraph1:
      'Hej! Mitt namn är Mattis och jag är en kille på 24 år, just nu går jag utbildningen Front-End på skolan EC-Utbildning. Tidigare har jag en examen på en tvåårig utbildning inom E-handel. Jag har också två examens från korta yh utbildningar den första var inom frontend och den andra var Full stack JavaScript med React och Node.js. Just nu går jag också en kort yh inom Maskininlärning / AI med Python. ',
    paragraph2:
      'Utöver plugget så har jag ett företag där jag arbetar med att bygga webbplatser åt andra och jag har också egna projekt inom affiliate marknadsföring. Dock är denna verksamhet inte jätteaktiv just nu då jag fokuserar på plugget. Innan jag började plugga inom front-end så byggde jag webbplatser med wordpress och de sidbyggare som finns tillgängliga att använda där. Jag insåg ganska snabbt att om man vill bygga något som är riktigt nice så måste man lära sig sakerna från grunden och nyttja de bästa verktygen. Det är anledningen till att jag pluggar det jag gör. ',
    paragraph3:
      'På fritiden så spelar jag en del Golf och har gjort det sedan 2008, jag tycker också om att idrotta och ibland så spelar jag lite tv-spel. ',
    img: '../../assets/images/home-illustration.svg',
  },
  {
    id: 2,
    title: '1. Förklara vad Angular är och varför det används',
    paragraph1:
      'Angular är ett av de största ramverken för JavaScript. Angular är open-source och det är Google som underhåller det.',
    paragraph2:
      'Det primära syftet med att använda sig av Angular är att skapa relativt stora single page applications (SPAs). Man kan också använda sig av Server Side Rendering med Angular om man skulle vilja det.',
    paragraph3:
      'Genom att man använder sig av Angular så får man en grundstruktur för en webbapplikation och det gör livet lite enklare för oss utvecklare då man slipper tänka på de alla de delarna utan man kan gå vidare och strukturera upp resterande delar efter egen vilja.',
  },
  {
    id: 3,
    title: '2. Förklara vad Single Page Applications är',
    paragraph1:
      'En Single Page Application (SPA) är kortfattat så som det låter, det är en applikation som endast har en html sida. Det innebär att man hämtar in grunden för applikationen vid första inladdningen av sidan och sedan kan nytt innehåll renderas ut dynamiskt.',
    paragraph2:
      'Med en SPA kan webbläsaren rendera om utvalda delar på en html sida medans en traditionell web app måste rendera om hela sidan. Genom att en SPA kan rendera ut enskilda delar på en sida blir en SPA app väldigt snabb då man bara laddar om det som behövs.',
  },
  {
    id: 4,
    title:
      '3. Beskriv de fundamentala delarna i Angulars arkitektur (rita gärna beskrivande)',
    paragraph0:
      'Bilden ovan är från Angular dokumentation kring Angulars Arkitektur och den beskriver Angulars fundamentala delar kring arkitekturen. Nedan kommer jag förklara lite kring varje del',
    subheading1: 'Modules',
    paragraph1:
      'Det mest fundamentala i Angular är modules. Varje angular app har en root-module, när man skapar en angular app med ng new kallas root modulen för AppModule. Det är den modulen som är grunden för hela appen. Man kan skapa flera moduler i Angular men varje ny modul behöver registreras i AppModulen. För att skapa en modul använder man sig av @NgModule() funktionen.',
    subheading2: 'Angular Libraries',
    paragraph2:
      'Angular använder sig av flertalet JavaScript moduler. Det är dessa som man importerar med @angular prefixen. Det är genom dessa moduler som man importerar in som man får tillgång till den funktionalitet som Angular tillhandahåller.',
    subheading3: 'Components',
    paragraph3:
      'Varje Angular projekt innehåller minst en komponent och det är komponenterna som i princip bygger upp allt som renderas ut i webbläsaren. Man kan säga att hela syftet med att använda sig av Angular är för att kunna använda sig av komponenter.',
    subheading4: 'Templates',
    paragraph4:
      'Det är templates i Angular som kopplar samman html koden med Angular koden. Template säger sedan till hur Angular skall rendera ut koden i DOMen.',
    subheading5: 'Metadata',
    paragraph5:
      'Metadata används för att berätta hur Angular skall processa en klass. Metadata används för att konfigurera det väntade beteendet hos en klass. Här är ett exempel på metadata som används för att dekorera en klass:',
    subheading6: 'Data Binding',
    paragraph6:
      'Data Bindning spelar en viktig roll för hur Angular kan kommunicera mellan templates & komponenter men även för child och parent komponenter. I Angular finns det fyra olika sätt att skicka värden och de är:',
    subheading7: 'Directives',
    paragraph7:
      'Directives i Angular är det som egentligen säger åt en komponent hur den skall skapas. Det är direktivet som kopplar samman komponenten till DOMen.',
    subheading8: 'Services',
    paragraph8:
      'Services är det som man i Angular använder sig av när man vill att logik eller data skall vara tillgängliga för flera komponenter eller till och med hela applikationen. Genom att använda sig av services kan man minimera mängden duplicerad kod och därmed följa DRY principen.',
    subheading9: 'Dependency Injections',
    paragraph9:
      'Dependency Injections tillhandahåller services till en komponent, dependency injections tillhandahåller bara de services som en komponent behöver. En vanlig service som dependency injections tillhandahåller till komponenterna är Routing.',
  },
  {
    id: 5,
    title:
      '4. Redogör för vad TypeScript är och dess syfte (varför vill vi använda typescript)',
    paragraph1:
      'TypeScript är ett Superset av JavaScript. Med det menas att TypeScript agerar som ett lager ovanför JavaScript och sedan kompileras all TypeScript kod till Vanilla JS kod.',
    paragraph2:
      'TypeScript används för att adressera vissa problem som kan uppstå med Vanilla JavaScript. Den största skillnaden mellan TypeScript och JavaScript är att TypeScript är hårdkodat medans JavaScript är lös-typat. Genom att man måste sätta vilken datatyp som man vill använda på en variabel säkerställer man att den skapade variabeln endast kan acceptera vald datatyp.',
    paragraph3:
      'Genom att använda sig av TypeScript så blir koden mer strukturerad och hållbar. Det finns flera exempel på riktigt stora företag som har bytt från vanilla js till typescript och där såg man en drastiskt minskning av antalet buggar i koden.',
    paragraph4:
      'TypeScript ger också mer hjälp när man skriver kod då TypeScript har en bra intellisens och TypeScript känner också av när man har skrivit något fel och då får man ett meddelande så man kan ändra sin kod vilket gör att buggar upptäcks mycket tidigare med TypeScript än med Vanilla JavaScript.',
  },
  {
    id: 6,
    title:
      '5. Förklara skillnaden mellan att utveckla en webbapplikation som en single page application med Angular eller som en “traditionell” webbapplikation',
    paragraph1:
      'Skillnaden mellan att utveckla en webbapplikation med Angular jämfört med en traditionell webbapplikation är att med Angular får man ett tydligt arbetssätt på hur man skall gå tillväga när man skapar en webbapplikation. Med det traditionella sättet så sitter man med vanliga filer och då är man låst i hur vanilla teknikerna jobbar.',
    paragraph2:
      'Angular är uppbyggt på ett komponentbaserat sätt där grundkonceptet går ut på att dela upp koden i så många komponenter som är önskvärt. Detta är något som man kan göra till viss del med en traditionell webbapp men då behöver man manuellt kopiera in kod på varje enskild sida medans man med angular kan välja att exempelvis en header skall synas på alla sidor och då är det bara på ett ställe som man lägger till taggen för komponenten.',
    paragraph3:
      'Den största skillnaden med att skapa en webbapp med angular jämfört med det traditionella sättet är att vid en traditionell applikation så behöver mycket kod kopieras in till varje enskild sida och hur man importerar JavaScript filerna kan skapa problem medans Angular tar hand om detta åt oss som utvecklare.',
  },
];
