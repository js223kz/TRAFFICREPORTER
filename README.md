# TRAFFICREPORTS_js223kz

Länk till publicerad applikation: https://jotraffic.herokuapp.com/


**Vad finns det för krav du måste anpassa dig efter i de olika API:erna?**</br>
Jag använder leaflet.js för att skapa kartor och kartmarkeringar. Leaflet i sin tur hämtar 
karta från OpenStreetMap. OpenStreetMap är öppna data: du kan fritt använda den 
för valfritt syfte så länge du anger OpenStreetMap och dess bidragsgivare som källa. Det gör jag.</br>

För att hämta trafikinformation använder jag Sveriges Radios öppna trafikdata. Där gäller att
jag inte får använda data från Sveriges Radio på ett sådant sätt att det kan skada Sveriges Radios 
anseende. Det gör jag inte. Vidare anger jag Sveriges radio som källa.

**Hur och hur länge cachar du ditt data för att slippa anropa API:erna i onödan?**</br>
Jag cachar trafikinformation i fem minuter. 
I och med att jag laddar leaflet via CDN har de tagit hand om cachningen via cache control 
som är satt till max-age=207 513 milliseconds.

**Vad finns det för risker kring säkerhet och stabilitet i din applikation?**</br>
Allt görs via GET requests och jag kan inte se några risker med det. JSON-svaret från 
Sveriges Radios Api saneras med $sanitize i Angular. Stabilteten är i farozonen om något av Api:erna
går ner.

**Hur har du tänkt kring säkerheten i din applikation?**</br>
Enligt ovan ser jag till att ingen skadlig kod i JSON-svaret renderas ut. Kan applikationen
inte hämta data via Sveriges Radio visas ett meddelande om att det är gammal data som visas
och när den datan senast uppdaterades.

**Hur har du tänkt kring optimeringen i din applikation?**</br>
Jag laddar alla externa bibliotek via CDN och får på så vis automatisk cachning.
Jag cachar resurser frn public-mappen.
Förfrågningar till servern sker max vid första get request och därefter var 5 minut.
