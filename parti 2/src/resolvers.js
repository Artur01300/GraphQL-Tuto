// requette pour avoir un utilisateur spécifique

let users = [
    {id: 1, name: "Jake", email: "jack@gmail.com", age: 17},
    {id: 2, name: "Artur", email: "artur@gmail.com", age: 42}
]

const messageHello = "Bonjour à tous !";

/*
 
*/
const resolvers = {
    Query: {
    
        hello: (parent, args, context, info) => messageHello,
        users: () => users,
        // user: (parent, args) => {
        //    return users.find(user => user.id == args.id)
        // }

        user: (parent, {id}) => users.find(user => user.id == id)

        // user: (parent, args) => users.find(user => user.id == args.id)
        /*user: (parent, args) = ici on demande 2 paramètres: parent et args puis on créer un fonction anonime
            user.finde = pour récupèrer les informations par user id
        */

        /*
            Pour éxecuter ça : 
            {
                user(id:1){
                    name
                }
            }
        */
        
    }
}


export default resolvers