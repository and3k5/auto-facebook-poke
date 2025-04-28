// ==UserScript==
// @name         Facebook autoclick
// @namespace    http://github.com/and3k5
// @version      2025-04-28
// @description  Automatic facebook poke
// @author       And3k5
// @match        https://www.facebook.com/pokes*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

(function () {
    "use strict";
    const header = document
        .evaluate(
            "//body//*//span[text()[contains(.,'Pokes')]]",
            document.body,
            null,
            XPathResult.FIRST_ORDERED_NODE_TYPE,
            null
        )
        .singleNodeValue.appendChild(document.createElement("a"));
    header.innerText = "Start auto poke";
    header.href = "javascript:void(0)";
    header.style.color = "#a31a1a";
    header.style.fontSize = "12pt";
    header.style.verticalAlign = "baseline";
    header.style.overflow = "visible";
    header.style.marginLeft = "20px";
    header.style.background = "#a3b0b7";
    header.style.borderRadius = "50px";
    header.style.padding = "5px";
    header.style.lineHeight = "3";
    header.addEventListener("click", () => {
        setInterval(
            () =>
                document
                    .evaluate(
                        "//*[text()[contains(.,'Poke Back')]]",
                        document.body,
                        null,
                        XPathResult.FIRST_ORDERED_NODE_TYPE,
                        null
                    )
                    .singleNodeValue?.click(),
            1000
        );
    });
})();
