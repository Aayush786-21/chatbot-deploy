"use strict";
(() => {
var exports = {};
exports.id = 791;
exports.ids = [791];
exports.modules = {

/***/ 2347:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ google)
});

;// CONCATENATED MODULE: ./utils/app/const.ts
const DEFAULT_SYSTEM_PROMPT = process.env.DEFAULT_SYSTEM_PROMPT || "You are ChatGPT, a large language model trained by OpenAI. Follow the user's instructions carefully. Respond using markdown.";
const OPENAI_API_HOST = process.env.OPENAI_API_HOST || "https://api.openai.com";

;// CONCATENATED MODULE: ./utils/server/google.ts
const cleanSourceText = (text)=>{
    return text.trim().replace(/(\n){4,}/g, "\n\n\n").replace(/\n\n/g, " ").replace(/ {3,}/g, "  ").replace(/\t/g, "").replace(/\n+(\s*\n)*/g, "\n");
};

;// CONCATENATED MODULE: external "@mozilla/readability"
const readability_namespaceObject = require("@mozilla/readability");
;// CONCATENATED MODULE: external "endent"
const external_endent_namespaceObject = require("endent");
var external_endent_default = /*#__PURE__*/__webpack_require__.n(external_endent_namespaceObject);
;// CONCATENATED MODULE: external "jsdom"
const external_jsdom_namespaceObject = require("jsdom");
var external_jsdom_default = /*#__PURE__*/__webpack_require__.n(external_jsdom_namespaceObject);
;// CONCATENATED MODULE: ./pages/api/google.ts





const handler = async (req, res)=>{
    try {
        const { messages , key , model , googleAPIKey , googleCSEId  } = req.body;
        const userMessage = messages[messages.length - 1];
        const googleRes = await fetch(`https://customsearch.googleapis.com/customsearch/v1?key=${googleAPIKey ? googleAPIKey : process.env.GOOGLE_API_KEY}&cx=${googleCSEId ? googleCSEId : process.env.GOOGLE_CSE_ID}&q=${userMessage.content.trim()}&num=5`);
        const googleData = await googleRes.json();
        const sources = googleData.items.map((item)=>({
                title: item.title,
                link: item.link,
                displayLink: item.displayLink,
                snippet: item.snippet,
                image: item.pagemap?.cse_image?.[0]?.src,
                text: ""
            }));
        const sourcesWithText = await Promise.all(sources.map(async (source)=>{
            try {
                const timeoutPromise = new Promise((_, reject)=>setTimeout(()=>reject(new Error("Request timed out")), 5000));
                const res = await Promise.race([
                    fetch(source.link),
                    timeoutPromise
                ]);
                // if (res) {
                const html = await res.text();
                const virtualConsole = new (external_jsdom_default()).VirtualConsole();
                virtualConsole.on("error", (error)=>{
                    if (!error.message.includes("Could not parse CSS stylesheet")) {
                        console.error(error);
                    }
                });
                const dom = new external_jsdom_namespaceObject.JSDOM(html, {
                    virtualConsole
                });
                const doc = dom.window.document;
                const parsed = new readability_namespaceObject.Readability(doc).parse();
                if (parsed) {
                    let sourceText = cleanSourceText(parsed.textContent);
                    return {
                        ...source,
                        // TODO: switch to tokens
                        text: sourceText.slice(0, 2000)
                    };
                }
                // }
                return null;
            } catch (error) {
                console.error(error);
                return null;
            }
        }));
        const filteredSources = sourcesWithText.filter(Boolean);
        const answerPrompt = (external_endent_default())`
    Provide me with the information I requested. Use the sources to provide an accurate response. Respond in markdown format. Cite the sources you used as a markdown link as you use them at the end of each sentence by number of the source (ex: [[1]](link.com)). Provide an accurate response and then stop. Today's date is ${new Date().toLocaleDateString()}.

    Example Input:
    What's the weather in San Francisco today?

    Example Sources:
    [Weather in San Francisco](https://www.google.com/search?q=weather+san+francisco)

    Example Response:
    It's 70 degrees and sunny in San Francisco today. [[1]](https://www.google.com/search?q=weather+san+francisco)

    Input:
    ${userMessage.content.trim()}

    Sources:
    ${filteredSources.map((source)=>{
            return (external_endent_default())`
      ${source.title} (${source.link}):
      ${source.text}
      `;
        })}

    Response:
    `;
        const answerMessage = {
            role: "user",
            content: answerPrompt
        };
        const answerRes = await fetch(`${OPENAI_API_HOST}/v1/chat/completions`, {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${key ? key : process.env.OPENAI_API_KEY}`,
                ...process.env.OPENAI_ORGANIZATION && {
                    "OpenAI-Organization": process.env.OPENAI_ORGANIZATION
                }
            },
            method: "POST",
            body: JSON.stringify({
                model: model.id,
                messages: [
                    {
                        role: "system",
                        content: `Use the sources to provide an accurate response. Respond in markdown format. Cite the sources you used as [1](link), etc, as you use them.`
                    },
                    answerMessage
                ],
                max_tokens: 1000,
                temperature: 1,
                stream: false
            })
        });
        const { choices: choices2  } = await answerRes.json();
        const answer = choices2[0].message.content;
        res.status(200).json({
            answer
        });
    } catch (error) {
        return new Response("Error", {
            status: 500
        });
    }
};
/* harmony default export */ const google = (handler);


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(2347));
module.exports = __webpack_exports__;

})();