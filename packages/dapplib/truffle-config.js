require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'idea climb flee skull guard render remain soft harvest local fortune skirt'; 
let testAccounts = [
"0x01a3a030746407031a8886f8623b66ad0f1c6645aaf7f7474751c08e9652681b",
"0x49d21f950daedd216e14d0d673627d471def581a4820419eaf75e85bfa82bf16",
"0xe25335989529571beb2a36c82fd610ff3c06f6db1d1949adc3ac68542ac2a332",
"0x4cb63a019434aaf20945378418c7b59a2ea61c53a57f927264f126c13efbbb2d",
"0x0cdb06514a2ef4bd581e544abdcc01222cc3f2b443836ed1419acc8f28bb64f6",
"0x7cbc6b715868aa953d71518864c35a10689f91041342d4b37a644eb9b2801748",
"0x7013f96e57eeb234ef5bfc99b221df469a69166e2cde0b733cf946e89bd831aa",
"0x8680aa72de55315c8396cae870e3d817ce75606c2b723549cd2fafbc8244591a",
"0x6fa109ae0428785fd2dca594b99c5b5b3de7f36c20b127b95d30fbf424ea9274",
"0xdcb26720cb81ebbd9999535d36e33353053dd85a56a83fe2cb1d72ddda471f28"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

