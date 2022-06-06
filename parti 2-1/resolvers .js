// gestion des paramèter dans les requettes, dans les objet type Query lier à GraphQL 

let users = [
    {id: 1, name: "Jake", email: "jack@gmail.com", age: 17},
    {id: 2, name: "Artur", email: "artur@gmail.com", age: 42}
]

const messageHello = "Bonjour à tous !";

/*
    Dans le résolveurs il y a 4 paramètres : 
    - le 1er est l'argument parent (c'est le type de l'objet presédante)
    - 2em est l'argument args vas être tous les paramètres qui va y avoir dans notre requette : 
        par exemple si on a dans notre schema.graphql/Query/hello, un certain paramètre au niveau hello c'est à travers de cet args
        on récupèrra cet paramètre
    - 3 em est l'argument context c'est une liste de un type d'objet
    - 4 em est l'argument info qui nous informe sur la requette accuelle: sur la nome de la requette(hello), sur le type de retoure de requette etc...
*/
const resolvers = {
    Query: {
    
        hello: (parent, args, context, info) => messageHello,
        users: () => users
        /*
            pour récupèrer les infos de users, on est oubligé de séléctionner le users puis dire quelle info on veut récupèrer.
            Exmple : 
            users {
                id 
                name
            }
        */
    }
}


export default resolvers