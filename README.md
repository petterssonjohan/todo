# Lista Todos

Här har vi skapat en ny vue komponent "list.vue".
Som tar in property. Själva listan ligger i föräldern till både header och list, dvs app.vue.
Då kan vid submit för en todo, texten emittas till föräldern app och läggas till i en lista där.
Sedan kan samma lista skickas till den nya list.vue komponenten som listar todos.
