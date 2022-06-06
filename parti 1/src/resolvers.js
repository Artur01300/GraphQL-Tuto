//Résolvers nous sert de faire un liéson entre nos base de donné avec GraphQL
//https://www.youtube.com/watch?v=zatQlSyjW_Q


const messageHello = "Bonjour à tous !";
/*
    L'objet résolvers contien la propriété Query. Query est totalement lié avec schema.graphql/Query
    La propriété hello  est également lié avec schema.graphql/Query/hello
*/
const resolvers = {
    Query: {
        // Tout les requete (propriété requete) sont des fonctionns (=>) qui envoye quelque chause. Ici il envoie le messageHello
        hello: () => messageHello
    }
}


export default resolvers