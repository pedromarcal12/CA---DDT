module.exports = {
networks: {
development: {
// from: "", // Defaults to first address from Ganache
host: "127.0.0.1",
port: 7545,
network_id: "*"
}
},
// Configure your compilers
compilers: {
solc: {
version: "^0.8.7", // Fetch exact version from solc-bin (default: truffle's version)
}
}
};
