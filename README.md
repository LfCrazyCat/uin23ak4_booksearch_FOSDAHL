# uin23ak4_booksearch_FOSDAHL
 
Først så valgte jeg å bygge inn alt i html-filen (altså css--en og script)
Tenker at bokarkivet som skal kjøres spørringene til boksøket (om det er riktig å kalle det?) i applikasjonen: my-app, mulig jeg vil endre på navnet til noe mer detaljert som book-archive. 

Etter at jeg har brukt kommandoen npx creact-next-app@latest, oppretter jeg en en ny tjeneste-fil for API. Kort fortalt er et API et sett med regler, verktøy og protokoller for å bygge progrmavare applikasjoner. Kan tenkes om en type bro eller mellomslag som godtar to applikasjoner til å kommunisere med hverandre. Spiller en viktig rolle for utvikle programvare for å tillate ulike systemer og tjenester som kan integerere og jobbe sammen. 

Jeg jobber i src-mappen UIN23AK4_BOOKSEARCH_FOSDSAHL/my-app/src/
Men når jeg forklarer videre, så brukes kun de siste mappe-strukturene og ikke hele navnet. 
Mappestrukturen er utført på best mulig organisering og det som vurderes til å være best practices for React. 

 *  my-app/src = mappen jeg hovedsakelig jobber med 
 *  my-app/src/services = mappen som jeg har opprettet
 *  my-app/src/services/api.js = filen *api.js* opprettet
 *  my-app/src/components = mappe jeg opprettet for komponenter
 *  my-app/src/components/BookCard.js = BookCard komponentet her

 *api.js* er en seperat tjenestefil som håndterer API-kallet. 
 Så vil jeg bruke API funksjonen i React-komponentet, her kan jeg velge hvilken komponent som jeg føler for passer og går foreøløpig for å opprette *App.js*'til å bruke 'useState' og 'useEffect' hooks til håndtering av staten og andre sideeffekter.  

Jeg oppretter en 'components'-mappe under 'src'-mappen, der jeg oppretter en fil med som heter *BookCard.js*. Komponenten vil ta 'book'-prop for å returnere JSX for å vise informasjonen til boken. 

*APP.js* som er opprettet importerer jeg komponentene som er fra 'react', fetching av boken fra 'api.js, import av BookCard med komponentene i 'BookCard.js' -filen. 


Export default etterfulgt av App, BookCard eller hvilket komponent som står etter de to ordene vil si at den skal eksport som den typen. 

Lager en mappe som kalles for Styles, der vil det inneholde filer som går ut på style som skal implementeres i prosjektet. 
Denne vil ligge under src-mappen. 

Lager en mappe under src-mappen, som jeg kaller for pages. 


  Minstekravene: 

React-app opprettet, som henter og lister opp James Bond bøker på forsiden med bruk av OpenLibrarys API (vist i komponenten 'Home' og med funksjonen 'fetchJamesBondBooks'. 
Implementert søkefunksjonen i komponenten 'Home', der søkefrasen håndteres- og søket blir utført via 'fetchBooksByQuery'. 
'SearchResults'-komponenten kan brukes til å vise søkeresultatene i 'BookCard'-komponenter. 
'BookCard'-komponenten viser informasjon om hver bok. 

HTML-strukuren kan sees i layout.js filen, som i Layout.module.css har designet på. 

* For å bestemme regler for søkeresultat, ligger disse i index.js.
* if (query.lenght >= 3) gjør at det det ikke godtas input som har færre enn tre tegn og vil derfor iikke vise resultater. 
