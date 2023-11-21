#!/usr/bin/env node

const DnsProxyServer = require("./dns-proxy.js")
dns = new DnsProxyServer();
dns.run();