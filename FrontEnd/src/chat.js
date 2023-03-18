import React, { Component } from "react"

class KommunicateChat extends Component {
    componentDidMount() {
        // Get the Kommunicate script element
        const kommunicateScript = document.querySelector('script[src="https://widget.kommunicate.io/v2/kommunicate.app"]');

        // Check if the script element exists and is already loaded
        if (kommunicateScript && window.kommunicate) {
            console.error("Kommunicate script is already loaded!");
        } else {
            // Load the Kommunicate script
            (function (d, m) {
                var kommunicateSettings =
                    { "appId": "9844f2bd88e5f80df7c3b0a87aea8c01", "popupWidget": true, "automaticChatOpenOnNavigation": true };
                var s = document.createElement("script"); s.type = "text/javascript"; s.async = true;
                s.src = "https://widget.kommunicate.io/v2/kommunicate.app";
                var h = document.getElementsByTagName("head")[0]; h.appendChild(s);
                window.kommunicate = m; m._globals = kommunicateSettings;
            })(document, window.kommunicate || {});
        }
    }

    render() {
        return (
            <div></div>
        )
    }
}

export default KommunicateChat;
