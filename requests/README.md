# Comment faire des requêtes préparées

Réussir à faire des requêtes SQL dans sequelize
Exemple dans le fichier index.js du dossier requests

Les remplacements dans une requête peuvent être effectués de deux manières différentes, soit en utilisant des paramètres nommés (commençant par :), soit sans nom, représentés par un ?. Les remplacements sont passés dans l'objet options.

Si un tableau est passé, ? il sera remplacé dans l'ordre dans lequel il apparaît dans le tableau
Si un objet est transmis, :key il sera remplacé par les clés de cet objet. Si l'objet contient des clés non trouvées dans la requête ou vice versa, une exception sera levée.

# Commandes

npm i
docker run --name some-mysql -p 5010:3306 -e MYSQL_DATABASE=demo -e MYSQL_ROOT_PASSWORD=password -d mysql:9
node db.js //tester la connexion
node testinjection.js 

# Liens utiles
https://sequelize.org/docs/v6/core-concepts/raw-queries/
https://johackim.com/sequelize?utm_source=rss&utm_medium=rss



