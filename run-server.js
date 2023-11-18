const dnsProxy = require("./dns-proxy.js")
dnsProxy.server.bind(dnsProxy.config.port, dnsProxy.config.host)