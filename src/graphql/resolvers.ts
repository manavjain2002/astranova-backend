import Users from "../database/models/Users";

const resolvers = {
    Query: {
        async user(_: any, {ID}: any) {
            return {
                id: "1",
                name: "Advait",
                walletAddress: "0x676b0490A802239Eeec703D9194A3f1771cf44A6",
                createdAt: new Date()
            }
        }
    }
}

export default resolvers;