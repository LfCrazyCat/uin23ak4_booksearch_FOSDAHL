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


  

