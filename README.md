# Börja här

En list komponent behöver skapas som tar in en array av todos som property.
Header.vue behöver modifieras så att den emittar till föräldern när man läggar till en todo (klickar på enter)
App.vue behöver modifieras så att när header emittar så fångar den det eventet och lägger till den todo i en lista som ligger i app.vue då denna är förälder till header och skall vara till
den nya List.vue komponenten. I app.vue så behöver listan av todos skickas med som property till List komponent.
