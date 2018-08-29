function FindProxyForURL(url, host) {
    PROXY = "PROXY proxy.emea.ibm.com:8080"

   if (shExpMatch(host, "*.google.com") ||
       shExpMatch(host, "slack.com") ||
       shExpMatch(host, "*.slack.com") ||
       shExpMatch(host, "*.slack-msgs.com") ||
       shExpMatch(host, "*.slack-files.com") ||
       shExpMatch(host, "*.slack-imgs.com") ||
       shExpMatch(host, "*.slack-edge.com") ||
       shExpMatch(host, "*.slack-core.com") ||
       shExpMatch(host, "*.slack-redir.net")) {
       return PROXY;
    }
        // Everything else directly!
    return "DIRECT";
}
