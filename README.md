# Controlant - API Test Suite

## Keyrsla
Til að keyra test suite-ið er hægt að keyra test suite-ið locally með:
```console
git clone https://github.com/valdi7913/newton-api-test-suite.git
cd newton-api-test-suite
npm install
npm start
```
Svo í öðru terminal-i keyra:
```console
npm test
```
til að keyra test-in

Til að keyra test-in á deployed API-inu þarf einfaldelga að breyta .env API_URL í https://newton.vercel.app.

Ég læt .env fylgja með inná github, sem er náttúrulega ekki gert í production, til að einfalda ykkur keyrsluna.

## Markmið
Sýna hæfileika mína í að skrifa test fyrir public api. Ég valdi þetta api sérstaklega vegna fjölda edge-case-a sem geta myndast í stærðfræði.

## Test Strategy
Þegar ég ákveð hvaða test ég skrifa hef ég eftirfarandi í huga
* Rétt virkni skal vera til staðar eins hún er skilgreind í API documentation-inu. Hér þarf sérstaklega að passa upp á edge cases.
* Rétt https status-ar skula vera til staðar 
* Ef request-an fail-ar skal hún það tignarlega

## Plan
Skrifa test fyrir öll endpoint sem uppfylla strategy-una.

Þar sem verkefnið snýst ekki um að forrita API-ið mun ég ekki breyta því neitt og munu allar mínar breytingar vera í foldernum ./tests. Það eru nú þegar nokkur test undir file-num test.js en ég læt þau alveg vera. Ég skrifaði upp öll endpoint example-in gefin í upprunalega README.md skjali API-sins þar sem þau ættu öll að virka.

Ég ákvað að nota test library-ið Jest.js vegna þess að ég hef reynslu í því.
## Niðurstaða
Þegar API-ið er keyrt locally er niðurstaða eftirfarandi
2 failed test, eitt example úr upprunalega API README.md og eitt sem ég smíðaði
* Integrate endpoint-ið failar upprunalegt example, það er ekki bætt við c í lok
* Arctan endpoint-ið failar í mínu custom test-i, vitlaust reiknað

Hinsvegar þegar kallað er á API-ið sem er deployed á [hér](https://newton.vercel.app/) virðist eitthvað REGEX eða string split bila með samlagningu og þá failar API-ið á 8 testum

