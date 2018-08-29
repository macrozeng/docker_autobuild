function FindProxyForURL(url, host) {
    PROXY = "PROXY proxy.emea.ibm.com:8080"

    // Apple.com via proxy
    if (shExpMatch(host,"*.google.com")) {
        return PROXY;
    }

   if (shExpMatch(host, "slack.com") ||
        shExpMatch(host, "*.slack.com") ||
        shExpMatch(host, "*.slack-msgs.com") ||
        shExpMatch(host, "*.slack-files.com") ||
        shExpMatch(host, "*.slack-imgs.com") ||
        shExpMatch(host, "*.slack-edge.com") ||
        shExpMatch(host, "*.slack-core.com") ||
        shExpMatch(host, "*.slack-redir.net")) {
        // Use SOCK proxy, or fall back to a DIRECT traffic.
        // ssh -D 8000 [user]@[server]
        return PROXY;
    }
        // Everything else directly!
    return "DIRECT";
}
