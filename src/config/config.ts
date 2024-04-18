import algosdk from "algosdk";

const algodToken = "a".repeat(64);
const server:string = "http://localhost";
const port: string = "4001";

const mnemonic: string = 
"expire quality scatter tumble attract matter fluid ball obtain poet bamboo swim step unveil fun matter fancy double melt banana syrup void melt ability swear";

export function getClient(): algosdk.Algodv2 {
    let client = new algosdk.Algodv2(algodToken, server, port);
    return client;
}

export function getAccount(): algosdk.Account {
    let account = algosdk.mnemonicToSecretKey(mnemonic);
    return account;
}