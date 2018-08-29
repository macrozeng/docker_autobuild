function FindProxyForURL(url, host) {
    PROXY = "PROXY proxy.emea.ibm.com:8080"

    // Apple.com via proxy
    if (shExpMatch(host,"*.google.com")) {
        return PROXY;
    }
    // Everything else directly!
    return "DIRECT";
}
