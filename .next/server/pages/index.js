"use strict";
(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 5782:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "e": () => (/* binding */ Chat)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(1279);
/* harmony import */ var _tabler_icons_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2236);
/* harmony import */ var _tabler_icons_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_tabler_icons_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1377);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_i18next__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Global_Spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6321);
/* harmony import */ var _ChatInput__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6422);
/* harmony import */ var _ChatLoader__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9420);
/* harmony import */ var _ChatMessage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6012);
/* harmony import */ var _ErrorMessageDiv__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(4378);
/* harmony import */ var _ModelSelect__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1046);
/* harmony import */ var _SystemPrompt__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(1347);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_ChatMessage__WEBPACK_IMPORTED_MODULE_7__]);
_ChatMessage__WEBPACK_IMPORTED_MODULE_7__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];












const Chat = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_3__.memo)(({ conversation , models , apiKey , serverSideApiKeyIsSet , defaultModelId , messageIsStreaming , modelError , loading , prompts , onSend , onUpdateConversation , onEditMessage , stopConversationRef  })=>{
    const { t  } = (0,next_i18next__WEBPACK_IMPORTED_MODULE_2__.useTranslation)("chat");
    const [currentMessage, setCurrentMessage] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)();
    const [autoScrollEnabled, setAutoScrollEnabled] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(true);
    const [showSettings, setShowSettings] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);
    const [showScrollDownButton, setShowScrollDownButton] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);
    const messagesEndRef = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)(null);
    const chatContainerRef = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)(null);
    const textareaRef = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)(null);
    const scrollToBottom = (0,react__WEBPACK_IMPORTED_MODULE_3__.useCallback)(()=>{
        if (autoScrollEnabled) {
            messagesEndRef.current?.scrollIntoView({
                behavior: "smooth"
            });
            textareaRef.current?.focus();
        }
    }, [
        autoScrollEnabled
    ]);
    const handleScroll = ()=>{
        if (chatContainerRef.current) {
            const { scrollTop , scrollHeight , clientHeight  } = chatContainerRef.current;
            const bottomTolerance = 30;
            if (scrollTop + clientHeight < scrollHeight - bottomTolerance) {
                setAutoScrollEnabled(false);
                setShowScrollDownButton(true);
            } else {
                setAutoScrollEnabled(true);
                setShowScrollDownButton(false);
            }
        }
    };
    const handleScrollDown = ()=>{
        chatContainerRef.current?.scrollTo({
            top: chatContainerRef.current.scrollHeight,
            behavior: "smooth"
        });
    };
    const handleSettings = ()=>{
        setShowSettings(!showSettings);
    };
    const onClearAll = ()=>{
        if (confirm(t("Are you sure you want to clear all messages?"))) {
            onUpdateConversation(conversation, {
                key: "messages",
                value: []
            });
        }
    };
    const scrollDown = ()=>{
        if (autoScrollEnabled) {
            messagesEndRef.current?.scrollIntoView(true);
        }
    };
    const throttledScrollDown = (0,_utils__WEBPACK_IMPORTED_MODULE_11__/* .throttle */ .P)(scrollDown, 250);
    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{
        throttledScrollDown();
        setCurrentMessage(conversation.messages[conversation.messages.length - 2]);
    }, [
        conversation.messages,
        throttledScrollDown
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{
        const observer = new IntersectionObserver(([entry])=>{
            setAutoScrollEnabled(entry.isIntersecting);
            if (entry.isIntersecting) {
                textareaRef.current?.focus();
            }
        }, {
            root: null,
            threshold: 0.5
        });
        const messagesEndElement = messagesEndRef.current;
        if (messagesEndElement) {
            observer.observe(messagesEndElement);
        }
        return ()=>{
            if (messagesEndElement) {
                observer.unobserve(messagesEndElement);
            }
        };
    }, [
        messagesEndRef
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "relative flex-1 overflow-hidden bg-white dark:bg-[#343541]",
        children: [
            !(apiKey || serverSideApiKeyIsSet) ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "mx-auto flex h-full w-[300px] flex-col justify-center space-y-6 sm:w-[600px]",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "text-center text-4xl font-bold text-black dark:text-white",
                        children: "Welcome to Chatbot UI"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "text-center text-lg text-black dark:text-white",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "mb-8",
                                children: `Chatbot UI is an open source clone of OpenAI's ChatGPT UI.`
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "mb-2 font-bold",
                                children: "Important: Chatbot UI is 100% unaffiliated with OpenAI."
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "text-center text-gray-500 dark:text-gray-400",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "mb-2",
                                children: "Chatbot UI allows you to plug in your API key to use this UI with their API."
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "mb-2",
                                children: [
                                    "It is ",
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        className: "italic",
                                        children: "only"
                                    }),
                                    " used to communicate with their API."
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "mb-2",
                                children: t("Please set your OpenAI API key in the bottom left of the sidebar.")
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                children: [
                                    t("If you don't have an OpenAI API key, you can get one here: "),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                        href: "https://platform.openai.com/account/api-keys",
                                        target: "_blank",
                                        rel: "noreferrer",
                                        className: "text-blue-500 hover:underline",
                                        children: "openai.com"
                                    })
                                ]
                            })
                        ]
                    })
                ]
            }) : modelError ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ErrorMessageDiv__WEBPACK_IMPORTED_MODULE_8__/* .ErrorMessageDiv */ .Y, {
                error: modelError
            }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "max-h-full overflow-x-hidden",
                        ref: chatContainerRef,
                        onScroll: handleScroll,
                        children: conversation.messages.length === 0 ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "mx-auto flex w-[350px] flex-col space-y-10 pt-12 sm:w-[600px]",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "text-center text-3xl font-semibold text-gray-800 dark:text-gray-100",
                                        children: models.length === 0 ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Global_Spinner__WEBPACK_IMPORTED_MODULE_4__/* .Spinner */ .$, {
                                                size: "16px",
                                                className: "mx-auto"
                                            })
                                        }) : "Chatbot UI"
                                    }),
                                    models.length > 0 && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "flex h-full flex-col space-y-4 rounded-lg border border-neutral-200 p-4 dark:border-neutral-600",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ModelSelect__WEBPACK_IMPORTED_MODULE_9__/* .ModelSelect */ .q, {
                                                model: conversation.model,
                                                models: models,
                                                defaultModelId: defaultModelId,
                                                onModelChange: (model)=>onUpdateConversation(conversation, {
                                                        key: "model",
                                                        value: model
                                                    })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_SystemPrompt__WEBPACK_IMPORTED_MODULE_10__/* .SystemPrompt */ .r, {
                                                conversation: conversation,
                                                prompts: prompts,
                                                onChangePrompt: (prompt)=>onUpdateConversation(conversation, {
                                                        key: "prompt",
                                                        value: prompt
                                                    })
                                            })
                                        ]
                                    })
                                ]
                            })
                        }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "flex justify-center border border-b-neutral-300 bg-neutral-100 py-2 text-sm text-neutral-500 dark:border-none dark:bg-[#444654] dark:text-neutral-200",
                                    children: [
                                        t("Model"),
                                        ": ",
                                        conversation.model.name,
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                            className: "ml-2 cursor-pointer hover:opacity-50",
                                            onClick: handleSettings,
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_tabler_icons_react__WEBPACK_IMPORTED_MODULE_1__.IconSettings, {
                                                size: 18
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                            className: "ml-2 cursor-pointer hover:opacity-50",
                                            onClick: onClearAll,
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_tabler_icons_react__WEBPACK_IMPORTED_MODULE_1__.IconClearAll, {
                                                size: 18
                                            })
                                        })
                                    ]
                                }),
                                showSettings && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "flex flex-col space-y-10 md:mx-auto md:max-w-xl md:gap-6 md:py-3 md:pt-6 lg:max-w-2xl lg:px-0 xl:max-w-3xl",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "flex h-full flex-col space-y-4 border-b border-neutral-200 p-4 dark:border-neutral-600 md:rounded-lg md:border",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ModelSelect__WEBPACK_IMPORTED_MODULE_9__/* .ModelSelect */ .q, {
                                            model: conversation.model,
                                            models: models,
                                            defaultModelId: defaultModelId,
                                            onModelChange: (model)=>onUpdateConversation(conversation, {
                                                    key: "model",
                                                    value: model
                                                })
                                        })
                                    })
                                }),
                                conversation.messages.map((message, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ChatMessage__WEBPACK_IMPORTED_MODULE_7__/* .ChatMessage */ .J, {
                                        message: message,
                                        messageIndex: index,
                                        onEditMessage: onEditMessage
                                    }, index)),
                                loading && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ChatLoader__WEBPACK_IMPORTED_MODULE_6__/* .ChatLoader */ .G, {}),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "h-[162px] bg-white dark:bg-[#343541]",
                                    ref: messagesEndRef
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ChatInput__WEBPACK_IMPORTED_MODULE_5__/* .ChatInput */ .x, {
                        stopConversationRef: stopConversationRef,
                        textareaRef: textareaRef,
                        messageIsStreaming: messageIsStreaming,
                        conversationIsEmpty: conversation.messages.length === 0,
                        model: conversation.model,
                        prompts: prompts,
                        onSend: (message, plugin)=>{
                            setCurrentMessage(message);
                            onSend(message, 0, plugin);
                        },
                        onRegenerate: ()=>{
                            if (currentMessage) {
                                onSend(currentMessage, 2, null);
                            }
                        }
                    })
                ]
            }),
            showScrollDownButton && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "absolute bottom-0 right-0 mb-4 mr-4 pb-20",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                    className: "flex h-7 w-7 items-center justify-center rounded-full bg-neutral-300 text-gray-800 shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-neutral-200",
                    onClick: handleScrollDown,
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_tabler_icons_react__WEBPACK_IMPORTED_MODULE_1__.IconArrowDown, {
                        size: 18
                    })
                })
            })
        ]
    });
});
Chat.displayName = "Chat";

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6422:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "x": () => (/* binding */ ChatInput)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "@tabler/icons-react"
var icons_react_ = __webpack_require__(2236);
// EXTERNAL MODULE: external "next-i18next"
var external_next_i18next_ = __webpack_require__(1377);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./types/plugin.ts
var types_plugin = __webpack_require__(2403);
;// CONCATENATED MODULE: ./components/Chat/PluginSelect.tsx




const PluginSelect = ({ plugin , onPluginChange  })=>{
    const { t  } = (0,external_next_i18next_.useTranslation)("chat");
    const selectRef = (0,external_react_.useRef)(null);
    (0,external_react_.useEffect)(()=>{
        if (selectRef.current) {
            selectRef.current.focus();
        }
    }, []);
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "flex flex-col",
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "w-full rounded-lg border border-neutral-200 bg-transparent pr-2 text-neutral-900 dark:border-neutral-600 dark:text-white",
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("select", {
                ref: selectRef,
                className: "w-full cursor-pointer bg-transparent p-2",
                placeholder: t("Select a plugin") || "",
                value: plugin?.id || "",
                onChange: (e)=>{
                    onPluginChange(types_plugin/* PluginList.find */.xN.find((plugin)=>plugin.id === e.target.value));
                },
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("option", {
                        value: "",
                        className: "dark:bg-[#343541] dark:text-white",
                        children: "Select Plugin"
                    }, "none"),
                    types_plugin/* PluginList.map */.xN.map((plugin)=>/*#__PURE__*/ jsx_runtime_.jsx("option", {
                            value: plugin.id,
                            className: "dark:bg-[#343541] dark:text-white",
                            children: plugin.name
                        }, plugin.id))
                ]
            })
        })
    });
};

// EXTERNAL MODULE: ./components/Chat/PromptList.tsx
var PromptList = __webpack_require__(9707);
// EXTERNAL MODULE: ./components/Chat/VariableModal.tsx
var VariableModal = __webpack_require__(7939);
;// CONCATENATED MODULE: ./components/Chat/ChatInput.tsx







const ChatInput = ({ messageIsStreaming , model , conversationIsEmpty , prompts , onSend , onRegenerate , stopConversationRef , textareaRef  })=>{
    const { t  } = (0,external_next_i18next_.useTranslation)("chat");
    const [content, setContent] = (0,external_react_.useState)();
    const [isTyping, setIsTyping] = (0,external_react_.useState)(false);
    const [showPromptList, setShowPromptList] = (0,external_react_.useState)(false);
    const [activePromptIndex, setActivePromptIndex] = (0,external_react_.useState)(0);
    const [promptInputValue, setPromptInputValue] = (0,external_react_.useState)("");
    const [variables, setVariables] = (0,external_react_.useState)([]);
    const [isModalVisible, setIsModalVisible] = (0,external_react_.useState)(false);
    const [showPluginSelect, setShowPluginSelect] = (0,external_react_.useState)(false);
    const [plugin, setPlugin] = (0,external_react_.useState)(null);
    const promptListRef = (0,external_react_.useRef)(null);
    const filteredPrompts = prompts.filter((prompt)=>prompt.name.toLowerCase().includes(promptInputValue.toLowerCase()));
    const handleChange = (e)=>{
        const value = e.target.value;
        const maxLength = model.maxLength;
        if (value.length > maxLength) {
            alert(t(`Message limit is {{maxLength}} characters. You have entered {{valueLength}} characters.`, {
                maxLength,
                valueLength: value.length
            }));
            return;
        }
        setContent(value);
        updatePromptListVisibility(value);
    };
    const handleSend = ()=>{
        if (messageIsStreaming) {
            return;
        }
        if (!content) {
            alert(t("Please enter a message"));
            return;
        }
        onSend({
            role: "user",
            content
        }, plugin);
        setContent("");
        setPlugin(null);
        if (window.innerWidth < 640 && textareaRef && textareaRef.current) {
            textareaRef.current.blur();
        }
    };
    const handleStopConversation = ()=>{
        stopConversationRef.current = true;
        setTimeout(()=>{
            stopConversationRef.current = false;
        }, 1000);
    };
    const isMobile = ()=>{
        const userAgent = typeof window.navigator === "undefined" ? "" : navigator.userAgent;
        const mobileRegex = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Mobile|mobile|CriOS/i;
        return mobileRegex.test(userAgent);
    };
    const handleInitModal = ()=>{
        const selectedPrompt = filteredPrompts[activePromptIndex];
        if (selectedPrompt) {
            setContent((prevContent)=>{
                const newContent = prevContent?.replace(/\/\w*$/, selectedPrompt.content);
                return newContent;
            });
            handlePromptSelect(selectedPrompt);
        }
        setShowPromptList(false);
    };
    const handleKeyDown = (e)=>{
        if (showPromptList) {
            if (e.key === "ArrowDown") {
                e.preventDefault();
                setActivePromptIndex((prevIndex)=>prevIndex < prompts.length - 1 ? prevIndex + 1 : prevIndex);
            } else if (e.key === "ArrowUp") {
                e.preventDefault();
                setActivePromptIndex((prevIndex)=>prevIndex > 0 ? prevIndex - 1 : prevIndex);
            } else if (e.key === "Tab") {
                e.preventDefault();
                setActivePromptIndex((prevIndex)=>prevIndex < prompts.length - 1 ? prevIndex + 1 : 0);
            } else if (e.key === "Enter") {
                e.preventDefault();
                handleInitModal();
            } else if (e.key === "Escape") {
                e.preventDefault();
                setShowPromptList(false);
            } else {
                setActivePromptIndex(0);
            }
        } else if (e.key === "Enter" && !isTyping && !isMobile() && !e.shiftKey) {
            e.preventDefault();
            handleSend();
        } else if (e.key === "/" && e.metaKey) {
            e.preventDefault();
            setShowPluginSelect(!showPluginSelect);
        }
    };
    const parseVariables = (content)=>{
        const regex = /{{(.*?)}}/g;
        const foundVariables = [];
        let match;
        while((match = regex.exec(content)) !== null){
            foundVariables.push(match[1]);
        }
        return foundVariables;
    };
    const updatePromptListVisibility = (0,external_react_.useCallback)((text)=>{
        const match = text.match(/\/\w*$/);
        if (match) {
            setShowPromptList(true);
            setPromptInputValue(match[0].slice(1));
        } else {
            setShowPromptList(false);
            setPromptInputValue("");
        }
    }, []);
    const handlePromptSelect = (prompt)=>{
        const parsedVariables = parseVariables(prompt.content);
        setVariables(parsedVariables);
        if (parsedVariables.length > 0) {
            setIsModalVisible(true);
        } else {
            setContent((prevContent)=>{
                const updatedContent = prevContent?.replace(/\/\w*$/, prompt.content);
                return updatedContent;
            });
            updatePromptListVisibility(prompt.content);
        }
    };
    const handleSubmit = (updatedVariables)=>{
        const newContent = content?.replace(/{{(.*?)}}/g, (match, variable)=>{
            const index = variables.indexOf(variable);
            return updatedVariables[index];
        });
        setContent(newContent);
        if (textareaRef && textareaRef.current) {
            textareaRef.current.focus();
        }
    };
    (0,external_react_.useEffect)(()=>{
        if (promptListRef.current) {
            promptListRef.current.scrollTop = activePromptIndex * 30;
        }
    }, [
        activePromptIndex
    ]);
    (0,external_react_.useEffect)(()=>{
        if (textareaRef && textareaRef.current) {
            textareaRef.current.style.height = "inherit";
            textareaRef.current.style.height = `${textareaRef.current?.scrollHeight}px`;
            textareaRef.current.style.overflow = `${textareaRef?.current?.scrollHeight > 400 ? "auto" : "hidden"}`;
        }
    }, [
        content
    ]);
    (0,external_react_.useEffect)(()=>{
        const handleOutsideClick = (e)=>{
            if (promptListRef.current && !promptListRef.current.contains(e.target)) {
                setShowPromptList(false);
            }
        };
        window.addEventListener("click", handleOutsideClick);
        return ()=>{
            window.removeEventListener("click", handleOutsideClick);
        };
    }, []);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "absolute bottom-0 left-0 w-full border-transparent bg-gradient-to-b from-transparent via-white to-white pt-6 dark:border-white/20 dark:via-[#343541] dark:to-[#343541] md:pt-2",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "stretch mx-2 mt-4 flex flex-row gap-3 last:mb-2 md:mx-4 md:mt-[52px] md:last:mb-6 lg:mx-auto lg:max-w-3xl",
                children: [
                    messageIsStreaming && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
                        className: "absolute top-0 left-0 right-0 mx-auto mb-3 flex w-fit items-center gap-3 rounded border border-neutral-200 bg-white py-2 px-4 text-black hover:opacity-50 dark:border-neutral-600 dark:bg-[#343541] dark:text-white md:mb-0 md:mt-2",
                        onClick: handleStopConversation,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(icons_react_.IconPlayerStop, {
                                size: 16
                            }),
                            " ",
                            t("Stop Generating")
                        ]
                    }),
                    !messageIsStreaming && !conversationIsEmpty && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
                        className: "absolute top-0 left-0 right-0 mx-auto mb-3 flex w-fit items-center gap-3 rounded border border-neutral-200 bg-white py-2 px-4 text-black hover:opacity-50 dark:border-neutral-600 dark:bg-[#343541] dark:text-white md:mb-0 md:mt-2",
                        onClick: onRegenerate,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(icons_react_.IconRepeat, {
                                size: 16
                            }),
                            " ",
                            t("Regenerate response")
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "relative mx-2 flex w-full flex-grow flex-col rounded-md border border-black/10 bg-white shadow-[0_0_10px_rgba(0,0,0,0.10)] dark:border-gray-900/50 dark:bg-[#40414F] dark:text-white dark:shadow-[0_0_15px_rgba(0,0,0,0.10)] sm:mx-4",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                className: "absolute left-2 top-2 rounded-sm p-1 text-neutral-800 opacity-60 hover:bg-neutral-200 hover:text-neutral-900 dark:bg-opacity-50 dark:text-neutral-100 dark:hover:text-neutral-200",
                                onClick: ()=>setShowPluginSelect(!showPluginSelect),
                                onKeyDown: (e)=>{},
                                children: plugin ? /*#__PURE__*/ jsx_runtime_.jsx(icons_react_.IconBrandGoogle, {
                                    size: 20
                                }) : /*#__PURE__*/ jsx_runtime_.jsx(icons_react_.IconBolt, {
                                    size: 20
                                })
                            }),
                            showPluginSelect && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "absolute left-0 bottom-14 bg-white dark:bg-[#343541]",
                                children: /*#__PURE__*/ jsx_runtime_.jsx(PluginSelect, {
                                    plugin: plugin,
                                    onPluginChange: (plugin)=>{
                                        setPlugin(plugin);
                                        setShowPluginSelect(false);
                                        if (textareaRef && textareaRef.current) {
                                            textareaRef.current.focus();
                                        }
                                    }
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("textarea", {
                                ref: textareaRef,
                                className: "m-0 w-full resize-none border-0 bg-transparent p-0 py-2 pr-8 pl-10 text-black dark:bg-transparent dark:text-white md:py-3 md:pl-10",
                                style: {
                                    resize: "none",
                                    bottom: `${textareaRef?.current?.scrollHeight}px`,
                                    maxHeight: "400px",
                                    overflow: `${textareaRef.current && textareaRef.current.scrollHeight > 400 ? "auto" : "hidden"}`
                                },
                                placeholder: t('Type a message or type "/" to select a prompt...') || "",
                                value: content,
                                rows: 1,
                                onCompositionStart: ()=>setIsTyping(true),
                                onCompositionEnd: ()=>setIsTyping(false),
                                onChange: handleChange,
                                onKeyDown: handleKeyDown
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                className: "absolute right-2 top-2 rounded-sm p-1 text-neutral-800 opacity-60 hover:bg-neutral-200 hover:text-neutral-900 dark:bg-opacity-50 dark:text-neutral-100 dark:hover:text-neutral-200",
                                onClick: handleSend,
                                children: messageIsStreaming ? /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "h-4 w-4 animate-spin rounded-full border-t-2 border-neutral-800 opacity-60 dark:border-neutral-100"
                                }) : /*#__PURE__*/ jsx_runtime_.jsx(icons_react_.IconSend, {
                                    size: 18
                                })
                            }),
                            showPromptList && filteredPrompts.length > 0 && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "absolute bottom-12 w-full",
                                children: /*#__PURE__*/ jsx_runtime_.jsx(PromptList/* PromptList */.t, {
                                    activePromptIndex: activePromptIndex,
                                    prompts: filteredPrompts,
                                    onSelect: handleInitModal,
                                    onMouseOver: setActivePromptIndex,
                                    promptListRef: promptListRef
                                })
                            }),
                            isModalVisible && /*#__PURE__*/ jsx_runtime_.jsx(VariableModal/* VariableModal */.g, {
                                prompt: prompts[activePromptIndex],
                                variables: variables,
                                onSubmit: handleSubmit,
                                onClose: ()=>setIsModalVisible(false)
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "px-3 pt-2 pb-3 text-center text-[12px] text-black/50 dark:text-white/50 md:px-4 md:pt-3 md:pb-6",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                        href: "https://github.com/mckaywrigley/chatbot-ui",
                        target: "_blank",
                        rel: "noreferrer",
                        className: "underline",
                        children: "ChatBot UI"
                    }),
                    ".",
                    " ",
                    t("Chatbot UI is an advanced chatbot kit for OpenAI's chat models aiming to mimic ChatGPT's interface and functionality.")
                ]
            })
        ]
    });
};


/***/ }),

/***/ 9420:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "G": () => (/* binding */ ChatLoader)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _tabler_icons_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2236);
/* harmony import */ var _tabler_icons_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_tabler_icons_react__WEBPACK_IMPORTED_MODULE_1__);


const ChatLoader = ()=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "group border-b border-black/10 bg-gray-50 text-gray-800 dark:border-gray-900/50 dark:bg-[#444654] dark:text-gray-100",
        style: {
            overflowWrap: "anywhere"
        },
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "m-auto flex gap-4 p-4 text-base md:max-w-2xl md:gap-6 md:py-6 lg:max-w-2xl lg:px-0 xl:max-w-3xl",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "min-w-[40px] text-right font-bold",
                    children: "AI:"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_tabler_icons_react__WEBPACK_IMPORTED_MODULE_1__.IconDots, {
                    className: "animate-pulse"
                })
            ]
        })
    });
};


/***/ }),

/***/ 6012:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "J": () => (/* binding */ ChatMessage)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _tabler_icons_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2236);
/* harmony import */ var _tabler_icons_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_tabler_icons_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1377);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_i18next__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var rehype_mathjax__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(700);
/* harmony import */ var remark_gfm__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6809);
/* harmony import */ var remark_math__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9832);
/* harmony import */ var _Markdown_CodeBlock__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8130);
/* harmony import */ var _Markdown_MemoizedReactMarkdown__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(4574);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([rehype_mathjax__WEBPACK_IMPORTED_MODULE_4__, remark_gfm__WEBPACK_IMPORTED_MODULE_5__, remark_math__WEBPACK_IMPORTED_MODULE_6__, _Markdown_MemoizedReactMarkdown__WEBPACK_IMPORTED_MODULE_8__]);
([rehype_mathjax__WEBPACK_IMPORTED_MODULE_4__, remark_gfm__WEBPACK_IMPORTED_MODULE_5__, remark_math__WEBPACK_IMPORTED_MODULE_6__, _Markdown_MemoizedReactMarkdown__WEBPACK_IMPORTED_MODULE_8__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);









const ChatMessage = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_3__.memo)(({ message , messageIndex , onEditMessage  })=>{
    const { t  } = (0,next_i18next__WEBPACK_IMPORTED_MODULE_2__.useTranslation)("chat");
    const [isEditing, setIsEditing] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);
    const [isTyping, setIsTyping] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);
    const [messageContent, setMessageContent] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(message.content);
    const [messagedCopied, setMessageCopied] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);
    const textareaRef = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)(null);
    const toggleEditing = ()=>{
        setIsEditing(!isEditing);
    };
    const handleInputChange = (event)=>{
        setMessageContent(event.target.value);
        if (textareaRef.current) {
            textareaRef.current.style.height = "inherit";
            textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
        }
    };
    const handleEditMessage = ()=>{
        if (message.content != messageContent) {
            onEditMessage({
                ...message,
                content: messageContent
            }, messageIndex);
        }
        setIsEditing(false);
    };
    const handlePressEnter = (e)=>{
        if (e.key === "Enter" && !isTyping && !e.shiftKey) {
            e.preventDefault();
            handleEditMessage();
        }
    };
    const copyOnClick = ()=>{
        if (!navigator.clipboard) return;
        navigator.clipboard.writeText(message.content).then(()=>{
            setMessageCopied(true);
            setTimeout(()=>{
                setMessageCopied(false);
            }, 2000);
        });
    };
    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{
        if (textareaRef.current) {
            textareaRef.current.style.height = "inherit";
            textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
        }
    }, [
        isEditing
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: `group px-4 ${message.role === "assistant" ? "border-b border-black/10 bg-gray-50 text-gray-800 dark:border-gray-900/50 dark:bg-[#444654] dark:text-gray-100" : "border-b border-black/10 bg-white text-gray-800 dark:border-gray-900/50 dark:bg-[#343541] dark:text-gray-100"}`,
        style: {
            overflowWrap: "anywhere"
        },
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "relative m-auto flex gap-4 p-4 text-base md:max-w-2xl md:gap-6 md:py-6 lg:max-w-2xl lg:px-0 xl:max-w-3xl",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "min-w-[40px] text-right font-bold",
                    children: message.role === "assistant" ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_tabler_icons_react__WEBPACK_IMPORTED_MODULE_1__.IconRobot, {
                        size: 30
                    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_tabler_icons_react__WEBPACK_IMPORTED_MODULE_1__.IconUser, {
                        size: 30
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "prose mt-[-2px] w-full dark:prose-invert",
                    children: message.role === "user" ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "flex w-full",
                        children: [
                            isEditing ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "flex w-full flex-col",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("textarea", {
                                        ref: textareaRef,
                                        className: "w-full resize-none whitespace-pre-wrap border-none dark:bg-[#343541]",
                                        value: messageContent,
                                        onChange: handleInputChange,
                                        onKeyDown: handlePressEnter,
                                        onCompositionStart: ()=>setIsTyping(true),
                                        onCompositionEnd: ()=>setIsTyping(false),
                                        style: {
                                            fontFamily: "inherit",
                                            fontSize: "inherit",
                                            lineHeight: "inherit",
                                            padding: "0",
                                            margin: "0",
                                            overflow: "hidden"
                                        }
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "mt-10 flex justify-center space-x-4",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                className: "h-[40px] rounded-md bg-blue-500 px-4 py-1 text-sm font-medium text-white enabled:hover:bg-blue-600 disabled:opacity-50",
                                                onClick: handleEditMessage,
                                                disabled: messageContent.trim().length <= 0,
                                                children: t("Save & Submit")
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                className: "h-[40px] rounded-md border border-neutral-300 px-4 py-1 text-sm font-medium text-neutral-700 hover:bg-neutral-100 dark:border-neutral-700 dark:text-neutral-300 dark:hover:bg-neutral-800",
                                                onClick: ()=>{
                                                    setMessageContent(message.content);
                                                    setIsEditing(false);
                                                },
                                                children: t("Cancel")
                                            })
                                        ]
                                    })
                                ]
                            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "prose whitespace-pre-wrap dark:prose-invert",
                                children: message.content
                            }),
                            (window.innerWidth < 640 || !isEditing) && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                className: `absolute translate-x-[1000px] text-gray-500 hover:text-gray-700 focus:translate-x-0 group-hover:translate-x-0 dark:text-gray-400 dark:hover:text-gray-300 ${window.innerWidth < 640 ? "right-3 bottom-1" : "right-0 top-[26px]"}
                    `,
                                onClick: toggleEditing,
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_tabler_icons_react__WEBPACK_IMPORTED_MODULE_1__.IconEdit, {
                                    size: 20
                                })
                            })
                        ]
                    }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: `absolute ${window.innerWidth < 640 ? "right-3 bottom-1" : "right-0 top-[26px] m-0"}`,
                                children: messagedCopied ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_tabler_icons_react__WEBPACK_IMPORTED_MODULE_1__.IconCheck, {
                                    size: 20,
                                    className: "text-green-500 dark:text-green-400"
                                }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                    className: "translate-x-[1000px] text-gray-500 hover:text-gray-700 focus:translate-x-0 group-hover:translate-x-0 dark:text-gray-400 dark:hover:text-gray-300",
                                    onClick: copyOnClick,
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_tabler_icons_react__WEBPACK_IMPORTED_MODULE_1__.IconCopy, {
                                        size: 20
                                    })
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Markdown_MemoizedReactMarkdown__WEBPACK_IMPORTED_MODULE_8__/* .MemoizedReactMarkdown */ .s, {
                                className: "prose dark:prose-invert",
                                remarkPlugins: [
                                    remark_gfm__WEBPACK_IMPORTED_MODULE_5__["default"],
                                    remark_math__WEBPACK_IMPORTED_MODULE_6__["default"]
                                ],
                                rehypePlugins: [
                                    rehype_mathjax__WEBPACK_IMPORTED_MODULE_4__["default"]
                                ],
                                components: {
                                    code ({ node , inline , className , children , ...props }) {
                                        const match = /language-(\w+)/.exec(className || "");
                                        return !inline && match ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Markdown_CodeBlock__WEBPACK_IMPORTED_MODULE_7__/* .CodeBlock */ .d, {
                                            language: match[1],
                                            value: String(children).replace(/\n$/, ""),
                                            ...props
                                        }, Math.random()) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("code", {
                                            className: className,
                                            ...props,
                                            children: children
                                        });
                                    },
                                    table ({ children  }) {
                                        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("table", {
                                            className: "border-collapse border border-black py-1 px-3 dark:border-white",
                                            children: children
                                        });
                                    },
                                    th ({ children  }) {
                                        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                            className: "break-words border border-black bg-gray-500 py-1 px-3 text-white dark:border-white",
                                            children: children
                                        });
                                    },
                                    td ({ children  }) {
                                        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                            className: "break-words border border-black py-1 px-3 dark:border-white",
                                            children: children
                                        });
                                    }
                                },
                                children: message.content
                            })
                        ]
                    })
                })
            ]
        })
    });
});
ChatMessage.displayName = "ChatMessage";

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4378:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Y": () => (/* binding */ ErrorMessageDiv)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _tabler_icons_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2236);
/* harmony import */ var _tabler_icons_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_tabler_icons_react__WEBPACK_IMPORTED_MODULE_1__);


const ErrorMessageDiv = ({ error  })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "mx-6 flex h-full flex-col items-center justify-center text-red-500",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "mb-5",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_tabler_icons_react__WEBPACK_IMPORTED_MODULE_1__.IconCircleX, {
                    size: 36
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "mb-3 text-2xl font-medium",
                children: error.title
            }),
            error.messageLines.map((line, index)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "text-center",
                    children: [
                        " ",
                        line,
                        " "
                    ]
                }, index)),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "mt-4 text-xs opacity-50 dark:text-red-400",
                children: error.code ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("i", {
                    children: [
                        "Code: ",
                        error.code
                    ]
                }) : ""
            })
        ]
    });
};


/***/ }),

/***/ 1046:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "q": () => (/* binding */ ModelSelect)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1377);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_i18next__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _tabler_icons_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2236);
/* harmony import */ var _tabler_icons_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_tabler_icons_react__WEBPACK_IMPORTED_MODULE_2__);



const ModelSelect = ({ model , models , defaultModelId , onModelChange  })=>{
    const { t  } = (0,next_i18next__WEBPACK_IMPORTED_MODULE_1__.useTranslation)("chat");
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "flex flex-col",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                className: "mb-2 text-left text-neutral-700 dark:text-neutral-400",
                children: t("Model")
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "w-full rounded-lg border border-neutral-200 bg-transparent pr-2 text-neutral-900 dark:border-neutral-600 dark:text-white",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("select", {
                    className: "w-full bg-transparent p-2",
                    placeholder: t("Select a model") || "",
                    value: model?.id || defaultModelId,
                    onChange: (e)=>{
                        onModelChange(models.find((model)=>model.id === e.target.value));
                    },
                    children: models.map((model)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                            value: model.id,
                            className: "dark:bg-[#343541] dark:text-white",
                            children: model.id === defaultModelId ? `Default (${model.name})` : model.name
                        }, model.id))
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "w-full mt-3 text-left text-neutral-700 dark:text-neutral-400 flex items-center",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                    href: "https://platform.openai.com/account/usage",
                    target: "_blank",
                    className: "flex items-center",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_tabler_icons_react__WEBPACK_IMPORTED_MODULE_2__.IconExternalLink, {
                            size: 18,
                            className: "inline mr-1"
                        }),
                        t("View Account Usage")
                    ]
                })
            })
        ]
    });
};


/***/ }),

/***/ 9707:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "t": () => (/* binding */ PromptList)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const PromptList = ({ prompts , activePromptIndex , onSelect , onMouseOver , promptListRef  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
        ref: promptListRef,
        className: "z-10 max-h-52 w-full overflow-scroll rounded border border-black/10 bg-white shadow-[0_0_10px_rgba(0,0,0,0.10)] dark:border-neutral-500 dark:bg-[#343541] dark:text-white dark:shadow-[0_0_15px_rgba(0,0,0,0.10)]",
        children: prompts.map((prompt, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                className: `${index === activePromptIndex ? "bg-gray-200 dark:bg-[#202123] dark:text-black" : ""} cursor-pointer px-3 py-2 text-sm text-black dark:text-white`,
                onClick: (e)=>{
                    e.preventDefault();
                    e.stopPropagation();
                    onSelect();
                },
                onMouseEnter: ()=>onMouseOver(index),
                children: prompt.name
            }, prompt.id))
    });
};


/***/ }),

/***/ 1347:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "r": () => (/* binding */ SystemPrompt)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_app_const__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4689);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1377);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_i18next__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _PromptList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9707);
/* harmony import */ var _VariableModal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7939);






const SystemPrompt = ({ conversation , prompts , onChangePrompt  })=>{
    const { t  } = (0,next_i18next__WEBPACK_IMPORTED_MODULE_2__.useTranslation)("chat");
    const [value, setValue] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)("");
    const [activePromptIndex, setActivePromptIndex] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(0);
    const [showPromptList, setShowPromptList] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);
    const [promptInputValue, setPromptInputValue] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)("");
    const [variables, setVariables] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]);
    const [isModalVisible, setIsModalVisible] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);
    const textareaRef = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)(null);
    const promptListRef = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)(null);
    const filteredPrompts = prompts.filter((prompt)=>prompt.name.toLowerCase().includes(promptInputValue.toLowerCase()));
    const handleChange = (e)=>{
        const value = e.target.value;
        const maxLength = conversation.model.maxLength;
        if (value.length > maxLength) {
            alert(t(`Prompt limit is {{maxLength}} characters. You have entered {{valueLength}} characters.`, {
                maxLength,
                valueLength: value.length
            }));
            return;
        }
        setValue(value);
        updatePromptListVisibility(value);
        if (value.length > 0) {
            onChangePrompt(value);
        }
    };
    const handleInitModal = ()=>{
        const selectedPrompt = filteredPrompts[activePromptIndex];
        setValue((prevVal)=>{
            const newContent = prevVal?.replace(/\/\w*$/, selectedPrompt.content);
            return newContent;
        });
        handlePromptSelect(selectedPrompt);
        setShowPromptList(false);
    };
    const parseVariables = (content)=>{
        const regex = /{{(.*?)}}/g;
        const foundVariables = [];
        let match;
        while((match = regex.exec(content)) !== null){
            foundVariables.push(match[1]);
        }
        return foundVariables;
    };
    const updatePromptListVisibility = (0,react__WEBPACK_IMPORTED_MODULE_3__.useCallback)((text)=>{
        const match = text.match(/\/\w*$/);
        if (match) {
            setShowPromptList(true);
            setPromptInputValue(match[0].slice(1));
        } else {
            setShowPromptList(false);
            setPromptInputValue("");
        }
    }, []);
    const handlePromptSelect = (prompt)=>{
        const parsedVariables = parseVariables(prompt.content);
        setVariables(parsedVariables);
        if (parsedVariables.length > 0) {
            setIsModalVisible(true);
        } else {
            const updatedContent = value?.replace(/\/\w*$/, prompt.content);
            setValue(updatedContent);
            onChangePrompt(updatedContent);
            updatePromptListVisibility(prompt.content);
        }
    };
    const handleSubmit = (updatedVariables)=>{
        const newContent = value?.replace(/{{(.*?)}}/g, (match, variable)=>{
            const index = variables.indexOf(variable);
            return updatedVariables[index];
        });
        setValue(newContent);
        onChangePrompt(newContent);
        if (textareaRef && textareaRef.current) {
            textareaRef.current.focus();
        }
    };
    const handleKeyDown = (e)=>{
        if (showPromptList) {
            if (e.key === "ArrowDown") {
                e.preventDefault();
                setActivePromptIndex((prevIndex)=>prevIndex < prompts.length - 1 ? prevIndex + 1 : prevIndex);
            } else if (e.key === "ArrowUp") {
                e.preventDefault();
                setActivePromptIndex((prevIndex)=>prevIndex > 0 ? prevIndex - 1 : prevIndex);
            } else if (e.key === "Tab") {
                e.preventDefault();
                setActivePromptIndex((prevIndex)=>prevIndex < prompts.length - 1 ? prevIndex + 1 : 0);
            } else if (e.key === "Enter") {
                e.preventDefault();
                handleInitModal();
            } else if (e.key === "Escape") {
                e.preventDefault();
                setShowPromptList(false);
            } else {
                setActivePromptIndex(0);
            }
        }
    };
    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{
        if (textareaRef && textareaRef.current) {
            textareaRef.current.style.height = "inherit";
            textareaRef.current.style.height = `${textareaRef.current?.scrollHeight}px`;
        }
    }, [
        value
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{
        if (conversation.prompt) {
            setValue(conversation.prompt);
        } else {
            setValue(_utils_app_const__WEBPACK_IMPORTED_MODULE_1__/* .DEFAULT_SYSTEM_PROMPT */ .c);
        }
    }, [
        conversation
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{
        const handleOutsideClick = (e)=>{
            if (promptListRef.current && !promptListRef.current.contains(e.target)) {
                setShowPromptList(false);
            }
        };
        window.addEventListener("click", handleOutsideClick);
        return ()=>{
            window.removeEventListener("click", handleOutsideClick);
        };
    }, []);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "flex flex-col",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                className: "mb-2 text-left text-neutral-700 dark:text-neutral-400",
                children: t("System Prompt")
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("textarea", {
                ref: textareaRef,
                className: "w-full rounded-lg border border-neutral-200 bg-transparent px-4 py-3 text-neutral-900 dark:border-neutral-600 dark:text-neutral-100",
                style: {
                    resize: "none",
                    bottom: `${textareaRef?.current?.scrollHeight}px`,
                    maxHeight: "300px",
                    overflow: `${textareaRef.current && textareaRef.current.scrollHeight > 400 ? "auto" : "hidden"}`
                },
                placeholder: t(`Enter a prompt or type "/" to select a prompt...`) || "",
                value: t(value) || "",
                rows: 1,
                onChange: handleChange,
                onKeyDown: handleKeyDown
            }),
            showPromptList && filteredPrompts.length > 0 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_PromptList__WEBPACK_IMPORTED_MODULE_4__/* .PromptList */ .t, {
                    activePromptIndex: activePromptIndex,
                    prompts: filteredPrompts,
                    onSelect: handleInitModal,
                    onMouseOver: setActivePromptIndex,
                    promptListRef: promptListRef
                })
            }),
            isModalVisible && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_VariableModal__WEBPACK_IMPORTED_MODULE_5__/* .VariableModal */ .g, {
                prompt: prompts[activePromptIndex],
                variables: variables,
                onSubmit: handleSubmit,
                onClose: ()=>setIsModalVisible(false)
            })
        ]
    });
};


/***/ }),

/***/ 7939:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "g": () => (/* binding */ VariableModal)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const VariableModal = ({ prompt , variables , onSubmit , onClose  })=>{
    const [updatedVariables, setUpdatedVariables] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(variables.map((variable)=>({
            key: variable,
            value: ""
        })).filter((item, index, array)=>array.findIndex((t)=>t.key === item.key) === index));
    const modalRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const nameInputRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const handleChange = (index, value)=>{
        setUpdatedVariables((prev)=>{
            const updated = [
                ...prev
            ];
            updated[index].value = value;
            return updated;
        });
    };
    const handleSubmit = ()=>{
        if (updatedVariables.some((variable)=>variable.value === "")) {
            alert("Please fill out all variables");
            return;
        }
        onSubmit(updatedVariables.map((variable)=>variable.value));
        onClose();
    };
    const handleKeyDown = (e)=>{
        if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            handleSubmit();
        } else if (e.key === "Escape") {
            onClose();
        }
    };
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const handleOutsideClick = (e)=>{
            if (modalRef.current && !modalRef.current.contains(e.target)) {
                onClose();
            }
        };
        window.addEventListener("click", handleOutsideClick);
        return ()=>{
            window.removeEventListener("click", handleOutsideClick);
        };
    }, [
        onClose
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (nameInputRef.current) {
            nameInputRef.current.focus();
        }
    }, []);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50",
        onKeyDown: handleKeyDown,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            ref: modalRef,
            className: "dark:border-netural-400 inline-block max-h-[400px] transform overflow-hidden overflow-y-auto rounded-lg border border-gray-300 bg-white px-4 pt-5 pb-4 text-left align-bottom shadow-xl transition-all dark:bg-[#202123] sm:my-8 sm:max-h-[600px] sm:w-full sm:max-w-lg sm:p-6 sm:align-middle",
            role: "dialog",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "mb-4 text-xl font-bold text-black dark:text-neutral-200",
                    children: prompt.name
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "mb-4 text-sm italic text-black dark:text-neutral-200",
                    children: prompt.description
                }),
                updatedVariables.map((variable, index)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "mb-4",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "mb-2 text-sm font-bold text-neutral-200",
                                children: variable.key
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("textarea", {
                                ref: index === 0 ? nameInputRef : undefined,
                                className: "mt-1 w-full rounded-lg border border-neutral-500 px-4 py-2 text-neutral-900 shadow focus:outline-none dark:border-neutral-800 dark:border-opacity-50 dark:bg-[#40414F] dark:text-neutral-100",
                                style: {
                                    resize: "none"
                                },
                                placeholder: `Enter a value for ${variable.key}...`,
                                value: variable.value,
                                onChange: (e)=>handleChange(index, e.target.value),
                                rows: 3
                            })
                        ]
                    }, index)),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                    className: "mt-6 w-full rounded-lg border border-neutral-500 px-4 py-2 text-neutral-900 shadow hover:bg-neutral-100 focus:outline-none dark:border-neutral-800 dark:border-opacity-50 dark:bg-white dark:text-black dark:hover:bg-neutral-300",
                    onClick: handleSubmit,
                    children: "Submit"
                })
            ]
        })
    });
};


/***/ }),

/***/ 641:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "W": () => (/* binding */ Chatbar)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _tabler_icons_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2236);
/* harmony import */ var _tabler_icons_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_tabler_icons_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1377);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_i18next__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Folders_Chat_ChatFolders__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6250);
/* harmony import */ var _Sidebar_Search__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3109);
/* harmony import */ var _ChatbarSettings__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5913);
/* harmony import */ var _Conversations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(7065);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_ChatbarSettings__WEBPACK_IMPORTED_MODULE_6__]);
_ChatbarSettings__WEBPACK_IMPORTED_MODULE_6__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];








const Chatbar = ({ loading , conversations , lightMode , selectedConversation , apiKey , pluginKeys , folders , onCreateFolder , onDeleteFolder , onUpdateFolder , onNewConversation , onToggleLightMode , onSelectConversation , onDeleteConversation , onUpdateConversation , onApiKeyChange , onClearConversations , onExportConversations , onImportConversations , onPluginKeyChange , onClearPluginKey  })=>{
    const { t  } = (0,next_i18next__WEBPACK_IMPORTED_MODULE_2__.useTranslation)("sidebar");
    const [searchTerm, setSearchTerm] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)("");
    const [filteredConversations, setFilteredConversations] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(conversations);
    const handleUpdateConversation = (conversation, data)=>{
        onUpdateConversation(conversation, data);
        setSearchTerm("");
    };
    const handleDeleteConversation = (conversation)=>{
        onDeleteConversation(conversation);
        setSearchTerm("");
    };
    const handleDrop = (e)=>{
        if (e.dataTransfer) {
            const conversation = JSON.parse(e.dataTransfer.getData("conversation"));
            onUpdateConversation(conversation, {
                key: "folderId",
                value: 0
            });
            e.target.style.background = "none";
        }
    };
    const allowDrop = (e)=>{
        e.preventDefault();
    };
    const highlightDrop = (e)=>{
        e.target.style.background = "#343541";
    };
    const removeHighlight = (e)=>{
        e.target.style.background = "none";
    };
    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{
        if (searchTerm) {
            setFilteredConversations(conversations.filter((conversation)=>{
                const searchable = conversation.name.toLocaleLowerCase() + " " + conversation.messages.map((message)=>message.content).join(" ");
                return searchable.toLowerCase().includes(searchTerm.toLowerCase());
            }));
        } else {
            setFilteredConversations(conversations);
        }
    }, [
        searchTerm,
        conversations
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: `fixed top-0 bottom-0 z-50 flex h-full w-[260px] flex-none flex-col space-y-2 bg-[#202123] p-2 transition-all sm:relative sm:top-0`,
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "flex items-center",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                        className: "flex w-[190px] flex-shrink-0 cursor-pointer select-none items-center gap-3 rounded-md border border-white/20 p-3 text-[14px] leading-normal text-white transition-colors duration-200 hover:bg-gray-500/10",
                        onClick: ()=>{
                            onNewConversation();
                            setSearchTerm("");
                        },
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_tabler_icons_react__WEBPACK_IMPORTED_MODULE_1__.IconPlus, {
                                size: 18
                            }),
                            t("New chat")
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                        className: "ml-2 flex flex-shrink-0 cursor-pointer items-center gap-3 rounded-md border border-white/20 p-3 text-[14px] leading-normal text-white transition-colors duration-200 hover:bg-gray-500/10",
                        onClick: ()=>onCreateFolder(t("New folder")),
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_tabler_icons_react__WEBPACK_IMPORTED_MODULE_1__.IconFolderPlus, {
                            size: 18
                        })
                    })
                ]
            }),
            conversations.length > 1 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Sidebar_Search__WEBPACK_IMPORTED_MODULE_5__/* .Search */ .o, {
                placeholder: "Search conversations...",
                searchTerm: searchTerm,
                onSearch: setSearchTerm
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "flex-grow overflow-auto",
                children: [
                    folders.length > 0 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "flex border-b border-white/20 pb-2",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Folders_Chat_ChatFolders__WEBPACK_IMPORTED_MODULE_4__/* .ChatFolders */ .O, {
                            searchTerm: searchTerm,
                            conversations: filteredConversations.filter((conversation)=>conversation.folderId),
                            folders: folders,
                            onDeleteFolder: onDeleteFolder,
                            onUpdateFolder: onUpdateFolder,
                            selectedConversation: selectedConversation,
                            loading: loading,
                            onSelectConversation: onSelectConversation,
                            onDeleteConversation: handleDeleteConversation,
                            onUpdateConversation: handleUpdateConversation
                        })
                    }),
                    conversations.length > 0 ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "pt-2",
                        onDrop: (e)=>handleDrop(e),
                        onDragOver: allowDrop,
                        onDragEnter: highlightDrop,
                        onDragLeave: removeHighlight,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Conversations__WEBPACK_IMPORTED_MODULE_7__/* .Conversations */ .o, {
                            loading: loading,
                            conversations: filteredConversations.filter((conversation)=>!conversation.folderId),
                            selectedConversation: selectedConversation,
                            onSelectConversation: onSelectConversation,
                            onDeleteConversation: handleDeleteConversation,
                            onUpdateConversation: handleUpdateConversation
                        })
                    }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "mt-8 flex flex-col items-center gap-3 text-sm leading-normal text-white opacity-50",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_tabler_icons_react__WEBPACK_IMPORTED_MODULE_1__.IconMessagesOff, {}),
                            t("No conversations.")
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ChatbarSettings__WEBPACK_IMPORTED_MODULE_6__/* .ChatbarSettings */ .M, {
                lightMode: lightMode,
                apiKey: apiKey,
                pluginKeys: pluginKeys,
                conversationsCount: conversations.length,
                onToggleLightMode: onToggleLightMode,
                onApiKeyChange: onApiKeyChange,
                onClearConversations: onClearConversations,
                onExportConversations: onExportConversations,
                onImportConversations: onImportConversations,
                onPluginKeyChange: onPluginKeyChange,
                onClearPluginKey: onClearPluginKey
            })
        ]
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5913:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "M": () => (/* binding */ ChatbarSettings)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _tabler_icons_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2236);
/* harmony import */ var _tabler_icons_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_tabler_icons_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1377);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_i18next__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Settings_Import__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8953);
/* harmony import */ var _Settings_Key__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7177);
/* harmony import */ var _Sidebar_SidebarButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(455);
/* harmony import */ var _ClearConversations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7379);
/* harmony import */ var _PluginKeys__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(9312);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_PluginKeys__WEBPACK_IMPORTED_MODULE_7__]);
_PluginKeys__WEBPACK_IMPORTED_MODULE_7__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];








const ChatbarSettings = ({ lightMode , apiKey , pluginKeys , conversationsCount , onToggleLightMode , onApiKeyChange , onClearConversations , onExportConversations , onImportConversations , onPluginKeyChange , onClearPluginKey  })=>{
    const { t  } = (0,next_i18next__WEBPACK_IMPORTED_MODULE_2__.useTranslation)("sidebar");
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "flex flex-col items-center space-y-1 border-t border-white/20 pt-1 text-sm",
        children: [
            conversationsCount > 0 ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ClearConversations__WEBPACK_IMPORTED_MODULE_6__/* .ClearConversations */ .h, {
                onClearConversations: onClearConversations
            }) : null,
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Settings_Import__WEBPACK_IMPORTED_MODULE_3__/* .Import */ .b, {
                onImport: onImportConversations
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Sidebar_SidebarButton__WEBPACK_IMPORTED_MODULE_5__/* .SidebarButton */ .f, {
                text: t("Export data"),
                icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_tabler_icons_react__WEBPACK_IMPORTED_MODULE_1__.IconFileExport, {
                    size: 18
                }),
                onClick: ()=>onExportConversations()
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Sidebar_SidebarButton__WEBPACK_IMPORTED_MODULE_5__/* .SidebarButton */ .f, {
                text: lightMode === "light" ? t("Dark mode") : t("Light mode"),
                icon: lightMode === "light" ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_tabler_icons_react__WEBPACK_IMPORTED_MODULE_1__.IconMoon, {
                    size: 18
                }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_tabler_icons_react__WEBPACK_IMPORTED_MODULE_1__.IconSun, {
                    size: 18
                }),
                onClick: ()=>onToggleLightMode(lightMode === "light" ? "dark" : "light")
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Settings_Key__WEBPACK_IMPORTED_MODULE_4__/* .Key */ .s, {
                apiKey: apiKey,
                onApiKeyChange: onApiKeyChange
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_PluginKeys__WEBPACK_IMPORTED_MODULE_7__/* .PluginKeys */ .A, {
                pluginKeys: pluginKeys,
                onPluginKeyChange: onPluginKeyChange,
                onClearPluginKey: onClearPluginKey
            })
        ]
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7379:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "h": () => (/* binding */ ClearConversations)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _tabler_icons_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2236);
/* harmony import */ var _tabler_icons_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_tabler_icons_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1377);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_i18next__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Sidebar_SidebarButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(455);





const ClearConversations = ({ onClearConversations  })=>{
    const [isConfirming, setIsConfirming] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);
    const { t  } = (0,next_i18next__WEBPACK_IMPORTED_MODULE_2__.useTranslation)("sidebar");
    const handleClearConversations = ()=>{
        onClearConversations();
        setIsConfirming(false);
    };
    return isConfirming ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "flex w-full cursor-pointer items-center rounded-lg py-3 px-3 hover:bg-gray-500/10",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_tabler_icons_react__WEBPACK_IMPORTED_MODULE_1__.IconTrash, {
                size: 18
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "ml-3 flex-1 text-left text-[12.5px] leading-3 text-white",
                children: t("Are you sure?")
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "flex w-[40px]",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_tabler_icons_react__WEBPACK_IMPORTED_MODULE_1__.IconCheck, {
                        className: "ml-auto min-w-[20px] mr-1 text-neutral-400 hover:text-neutral-100",
                        size: 18,
                        onClick: (e)=>{
                            e.stopPropagation();
                            handleClearConversations();
                        }
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_tabler_icons_react__WEBPACK_IMPORTED_MODULE_1__.IconX, {
                        className: "ml-auto min-w-[20px] text-neutral-400 hover:text-neutral-100",
                        size: 18,
                        onClick: (e)=>{
                            e.stopPropagation();
                            setIsConfirming(false);
                        }
                    })
                ]
            })
        ]
    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Sidebar_SidebarButton__WEBPACK_IMPORTED_MODULE_4__/* .SidebarButton */ .f, {
        text: t("Clear conversations"),
        icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_tabler_icons_react__WEBPACK_IMPORTED_MODULE_1__.IconTrash, {
            size: 18
        }),
        onClick: ()=>setIsConfirming(true)
    });
};


/***/ }),

/***/ 4418:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "S": () => (/* binding */ ConversationComponent)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _tabler_icons_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2236);
/* harmony import */ var _tabler_icons_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_tabler_icons_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);



const ConversationComponent = ({ selectedConversation , conversation , loading , onSelectConversation , onDeleteConversation , onUpdateConversation  })=>{
    const [isDeleting, setIsDeleting] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    const [isRenaming, setIsRenaming] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    const [renameValue, setRenameValue] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)("");
    const handleEnterDown = (e)=>{
        if (e.key === "Enter") {
            e.preventDefault();
            handleRename(selectedConversation);
        }
    };
    const handleDragStart = (e, conversation)=>{
        if (e.dataTransfer) {
            e.dataTransfer.setData("conversation", JSON.stringify(conversation));
        }
    };
    const handleRename = (conversation)=>{
        if (renameValue.trim().length > 0) {
            onUpdateConversation(conversation, {
                key: "name",
                value: renameValue
            });
            setRenameValue("");
            setIsRenaming(false);
        }
    };
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        if (isRenaming) {
            setIsDeleting(false);
        } else if (isDeleting) {
            setIsRenaming(false);
        }
    }, [
        isRenaming,
        isDeleting
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "relative flex items-center",
        children: [
            isRenaming && selectedConversation.id === conversation.id ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "flex w-full items-center gap-3 bg-[#343541]/90 p-3 rounded-lg",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_tabler_icons_react__WEBPACK_IMPORTED_MODULE_1__.IconMessage, {
                        size: 18
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                        className: "mr-12 flex-1 overflow-hidden overflow-ellipsis border-neutral-400 bg-transparent text-left text-[12.5px] leading-3 text-white outline-none focus:border-neutral-100",
                        type: "text",
                        value: renameValue,
                        onChange: (e)=>setRenameValue(e.target.value),
                        onKeyDown: handleEnterDown,
                        autoFocus: true
                    })
                ]
            }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                className: `flex w-full cursor-pointer items-center gap-3 rounded-lg p-3 text-sm transition-colors duration-200 hover:bg-[#343541]/90 ${loading ? "disabled:cursor-not-allowed" : ""} ${selectedConversation.id === conversation.id ? "bg-[#343541]/90" : ""}`,
                onClick: ()=>onSelectConversation(conversation),
                disabled: loading,
                draggable: "true",
                onDragStart: (e)=>handleDragStart(e, conversation),
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_tabler_icons_react__WEBPACK_IMPORTED_MODULE_1__.IconMessage, {
                        size: 18
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: `relative max-h-5 flex-1 overflow-hidden text-ellipsis whitespace-nowrap break-all text-left text-[12.5px] leading-3 ${selectedConversation.id === conversation.id ? "pr-12" : "pr-1"}`,
                        children: conversation.name
                    })
                ]
            }),
            (isDeleting || isRenaming) && selectedConversation.id === conversation.id && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "absolute right-1 z-10 flex text-gray-300",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                        className: "min-w-[20px] p-1 text-neutral-400 hover:text-neutral-100",
                        onClick: (e)=>{
                            e.stopPropagation();
                            if (isDeleting) {
                                onDeleteConversation(conversation);
                            } else if (isRenaming) {
                                handleRename(conversation);
                            }
                            setIsDeleting(false);
                            setIsRenaming(false);
                        },
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_tabler_icons_react__WEBPACK_IMPORTED_MODULE_1__.IconCheck, {
                            size: 18
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                        className: "min-w-[20px] p-1 text-neutral-400 hover:text-neutral-100",
                        onClick: (e)=>{
                            e.stopPropagation();
                            setIsDeleting(false);
                            setIsRenaming(false);
                        },
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_tabler_icons_react__WEBPACK_IMPORTED_MODULE_1__.IconX, {
                            size: 18
                        })
                    })
                ]
            }),
            selectedConversation.id === conversation.id && !isDeleting && !isRenaming && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "absolute right-1 z-10 flex text-gray-300",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                        className: "min-w-[20px] p-1 text-neutral-400 hover:text-neutral-100",
                        onClick: (e)=>{
                            e.stopPropagation();
                            setIsRenaming(true);
                            setRenameValue(selectedConversation.name);
                        },
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_tabler_icons_react__WEBPACK_IMPORTED_MODULE_1__.IconPencil, {
                            size: 18
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                        className: "min-w-[20px] p-1 text-neutral-400 hover:text-neutral-100",
                        onClick: (e)=>{
                            e.stopPropagation();
                            setIsDeleting(true);
                        },
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_tabler_icons_react__WEBPACK_IMPORTED_MODULE_1__.IconTrash, {
                            size: 18
                        })
                    })
                ]
            })
        ]
    });
};


/***/ }),

/***/ 7065:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "o": () => (/* binding */ Conversations)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Conversation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4418);


const Conversations = ({ loading , conversations , selectedConversation , onSelectConversation , onDeleteConversation , onUpdateConversation  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "flex w-full flex-col gap-1",
        children: conversations.slice().reverse().map((conversation, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Conversation__WEBPACK_IMPORTED_MODULE_1__/* .ConversationComponent */ .S, {
                selectedConversation: selectedConversation,
                conversation: conversation,
                loading: loading,
                onSelectConversation: onSelectConversation,
                onDeleteConversation: onDeleteConversation,
                onUpdateConversation: onUpdateConversation
            }, index))
    });
};


/***/ }),

/***/ 9312:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "A": () => (/* binding */ PluginKeys)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _types_plugin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2403);
/* harmony import */ var _tabler_icons_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2236);
/* harmony import */ var _tabler_icons_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_tabler_icons_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7987);
/* harmony import */ var _Sidebar_SidebarButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(455);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_i18next__WEBPACK_IMPORTED_MODULE_4__]);
react_i18next__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];






const PluginKeys = ({ pluginKeys , onPluginKeyChange , onClearPluginKey  })=>{
    const { t  } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_4__.useTranslation)("sidebar");
    const [isChanging, setIsChanging] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);
    const modalRef = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)(null);
    const handleEnter = (e)=>{
        if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            setIsChanging(false);
        }
    };
    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{
        const handleMouseDown = (e)=>{
            if (modalRef.current && !modalRef.current.contains(e.target)) {
                window.addEventListener("mouseup", handleMouseUp);
            }
        };
        const handleMouseUp = (e)=>{
            window.removeEventListener("mouseup", handleMouseUp);
            setIsChanging(false);
        };
        window.addEventListener("mousedown", handleMouseDown);
        return ()=>{
            window.removeEventListener("mousedown", handleMouseDown);
        };
    }, []);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Sidebar_SidebarButton__WEBPACK_IMPORTED_MODULE_5__/* .SidebarButton */ .f, {
                text: t("Plugin Keys"),
                icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_tabler_icons_react__WEBPACK_IMPORTED_MODULE_2__.IconKey, {
                    size: 18
                }),
                onClick: ()=>setIsChanging(true)
            }),
            isChanging && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "z-100 fixed inset-0 flex items-center justify-center bg-black bg-opacity-50",
                onKeyDown: handleEnter,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "fixed inset-0 z-10 overflow-y-auto",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "flex min-h-screen items-center justify-center px-4 pt-4 pb-20 text-center sm:block sm:p-0",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "hidden sm:inline-block sm:h-screen sm:align-middle",
                                "aria-hidden": "true"
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                ref: modalRef,
                                className: "dark:border-netural-400 inline-block max-h-[400px] transform overflow-hidden rounded-lg border border-gray-300 bg-white px-4 pt-5 pb-4 text-left align-bottom shadow-xl transition-all dark:bg-[#202123] sm:my-8 sm:max-h-[600px] sm:w-full sm:max-w-lg sm:p-6 sm:align-middle",
                                role: "dialog",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "mb-10 text-4xl",
                                        children: "Plugin Keys"
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "mt-6 rounded border p-4",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "text-xl font-bold",
                                                children: "Google Search Plugin"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "mt-4 italic",
                                                children: "Please enter your Google API Key and Google CSE ID to enable the Google Search Plugin."
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "mt-6 text-sm font-bold text-black dark:text-neutral-200",
                                                children: "Google API Key"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                className: "mt-2 w-full rounded-lg border border-neutral-500 px-4 py-2 text-neutral-900 shadow focus:outline-none dark:border-neutral-800 dark:border-opacity-50 dark:bg-[#40414F] dark:text-neutral-100",
                                                type: "password",
                                                value: pluginKeys.find((p)=>p.pluginId === _types_plugin__WEBPACK_IMPORTED_MODULE_1__/* .PluginID.GOOGLE_SEARCH */ .PO.GOOGLE_SEARCH)?.requiredKeys.find((k)=>k.key === "GOOGLE_API_KEY")?.value,
                                                onChange: (e)=>{
                                                    const pluginKey = pluginKeys.find((p)=>p.pluginId === _types_plugin__WEBPACK_IMPORTED_MODULE_1__/* .PluginID.GOOGLE_SEARCH */ .PO.GOOGLE_SEARCH);
                                                    if (pluginKey) {
                                                        const requiredKey = pluginKey.requiredKeys.find((k)=>k.key === "GOOGLE_API_KEY");
                                                        if (requiredKey) {
                                                            const updatedPluginKey = {
                                                                ...pluginKey,
                                                                requiredKeys: pluginKey.requiredKeys.map((k)=>{
                                                                    if (k.key === "GOOGLE_API_KEY") {
                                                                        return {
                                                                            ...k,
                                                                            value: e.target.value
                                                                        };
                                                                    }
                                                                    return k;
                                                                })
                                                            };
                                                            onPluginKeyChange(updatedPluginKey);
                                                        }
                                                    } else {
                                                        const newPluginKey = {
                                                            pluginId: _types_plugin__WEBPACK_IMPORTED_MODULE_1__/* .PluginID.GOOGLE_SEARCH */ .PO.GOOGLE_SEARCH,
                                                            requiredKeys: [
                                                                {
                                                                    key: "GOOGLE_API_KEY",
                                                                    value: e.target.value
                                                                },
                                                                {
                                                                    key: "GOOGLE_CSE_ID",
                                                                    value: ""
                                                                }
                                                            ]
                                                        };
                                                        onPluginKeyChange(newPluginKey);
                                                    }
                                                }
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "mt-6 text-sm font-bold text-black dark:text-neutral-200",
                                                children: "Google CSE ID"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                className: "mt-2 w-full rounded-lg border border-neutral-500 px-4 py-2 text-neutral-900 shadow focus:outline-none dark:border-neutral-800 dark:border-opacity-50 dark:bg-[#40414F] dark:text-neutral-100",
                                                type: "password",
                                                value: pluginKeys.find((p)=>p.pluginId === _types_plugin__WEBPACK_IMPORTED_MODULE_1__/* .PluginID.GOOGLE_SEARCH */ .PO.GOOGLE_SEARCH)?.requiredKeys.find((k)=>k.key === "GOOGLE_CSE_ID")?.value,
                                                onChange: (e)=>{
                                                    const pluginKey = pluginKeys.find((p)=>p.pluginId === _types_plugin__WEBPACK_IMPORTED_MODULE_1__/* .PluginID.GOOGLE_SEARCH */ .PO.GOOGLE_SEARCH);
                                                    if (pluginKey) {
                                                        const requiredKey = pluginKey.requiredKeys.find((k)=>k.key === "GOOGLE_CSE_ID");
                                                        if (requiredKey) {
                                                            const updatedPluginKey = {
                                                                ...pluginKey,
                                                                requiredKeys: pluginKey.requiredKeys.map((k)=>{
                                                                    if (k.key === "GOOGLE_CSE_ID") {
                                                                        return {
                                                                            ...k,
                                                                            value: e.target.value
                                                                        };
                                                                    }
                                                                    return k;
                                                                })
                                                            };
                                                            onPluginKeyChange(updatedPluginKey);
                                                        }
                                                    } else {
                                                        const newPluginKey = {
                                                            pluginId: _types_plugin__WEBPACK_IMPORTED_MODULE_1__/* .PluginID.GOOGLE_SEARCH */ .PO.GOOGLE_SEARCH,
                                                            requiredKeys: [
                                                                {
                                                                    key: "GOOGLE_API_KEY",
                                                                    value: ""
                                                                },
                                                                {
                                                                    key: "GOOGLE_CSE_ID",
                                                                    value: e.target.value
                                                                }
                                                            ]
                                                        };
                                                        onPluginKeyChange(newPluginKey);
                                                    }
                                                }
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                className: "mt-6 w-full rounded-lg border border-neutral-500 px-4 py-2 text-neutral-900 shadow hover:bg-neutral-100 focus:outline-none dark:border-neutral-800 dark:border-opacity-50 dark:bg-white dark:text-black dark:hover:bg-neutral-300",
                                                onClick: ()=>{
                                                    const pluginKey = pluginKeys.find((p)=>p.pluginId === _types_plugin__WEBPACK_IMPORTED_MODULE_1__/* .PluginID.GOOGLE_SEARCH */ .PO.GOOGLE_SEARCH);
                                                    if (pluginKey) {
                                                        onClearPluginKey(pluginKey);
                                                    }
                                                },
                                                children: "Clear Google Search Plugin Keys"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                        type: "button",
                                        className: "mt-6 w-full rounded-lg border border-neutral-500 px-4 py-2 text-neutral-900 shadow hover:bg-neutral-100 focus:outline-none dark:border-neutral-800 dark:border-opacity-50 dark:bg-white dark:text-black dark:hover:bg-neutral-300",
                                        onClick: ()=>setIsChanging(false),
                                        children: t("Save")
                                    })
                                ]
                            })
                        ]
                    })
                })
            })
        ]
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6250:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "O": () => (/* binding */ ChatFolders)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "@tabler/icons-react"
var icons_react_ = __webpack_require__(2236);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./components/Chatbar/Conversation.tsx
var Conversation = __webpack_require__(4418);
;// CONCATENATED MODULE: ./components/Folders/Chat/ChatFolder.tsx




const ChatFolder = ({ searchTerm , conversations , currentFolder , onDeleteFolder , onUpdateFolder , // conversation props
selectedConversation , loading , onSelectConversation , onDeleteConversation , onUpdateConversation  })=>{
    const [isDeleting, setIsDeleting] = (0,external_react_.useState)(false);
    const [isRenaming, setIsRenaming] = (0,external_react_.useState)(false);
    const [renameValue, setRenameValue] = (0,external_react_.useState)("");
    const [isOpen, setIsOpen] = (0,external_react_.useState)(false);
    const handleEnterDown = (e)=>{
        if (e.key === "Enter") {
            e.preventDefault();
            handleRename();
        }
    };
    const handleRename = ()=>{
        onUpdateFolder(currentFolder.id, renameValue);
        setRenameValue("");
        setIsRenaming(false);
    };
    const handleDrop = (e, folder)=>{
        if (e.dataTransfer) {
            setIsOpen(true);
            const conversation = JSON.parse(e.dataTransfer.getData("conversation"));
            onUpdateConversation(conversation, {
                key: "folderId",
                value: folder.id
            });
            e.target.style.background = "none";
        }
    };
    const allowDrop = (e)=>{
        e.preventDefault();
    };
    const highlightDrop = (e)=>{
        e.target.style.background = "#343541";
    };
    const removeHighlight = (e)=>{
        e.target.style.background = "none";
    };
    (0,external_react_.useEffect)(()=>{
        if (isRenaming) {
            setIsDeleting(false);
        } else if (isDeleting) {
            setIsRenaming(false);
        }
    }, [
        isRenaming,
        isDeleting
    ]);
    (0,external_react_.useEffect)(()=>{
        if (searchTerm) {
            setIsOpen(true);
        } else {
            setIsOpen(false);
        }
    }, [
        searchTerm
    ]);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "relative flex items-center",
                children: [
                    isRenaming ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "flex w-full items-center gap-3 bg-[#343541]/90 p-3 rounded-lg",
                        children: [
                            isOpen ? /*#__PURE__*/ jsx_runtime_.jsx(icons_react_.IconCaretDown, {
                                size: 18
                            }) : /*#__PURE__*/ jsx_runtime_.jsx(icons_react_.IconCaretRight, {
                                size: 18
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                className: "mr-12 flex-1 overflow-hidden overflow-ellipsis border-neutral-400 bg-transparent text-left text-[12.5px] leading-3 text-white outline-none focus:border-neutral-100",
                                type: "text",
                                value: renameValue,
                                onChange: (e)=>setRenameValue(e.target.value),
                                onKeyDown: handleEnterDown,
                                autoFocus: true
                            })
                        ]
                    }) : /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
                        className: `flex w-full cursor-pointer items-center gap-3 rounded-lg p-3 text-sm transition-colors duration-200 hover:bg-[#343541]/90`,
                        onClick: ()=>setIsOpen(!isOpen),
                        onDrop: (e)=>handleDrop(e, currentFolder),
                        onDragOver: allowDrop,
                        onDragEnter: highlightDrop,
                        onDragLeave: removeHighlight,
                        children: [
                            isOpen ? /*#__PURE__*/ jsx_runtime_.jsx(icons_react_.IconCaretDown, {
                                size: 18
                            }) : /*#__PURE__*/ jsx_runtime_.jsx(icons_react_.IconCaretRight, {
                                size: 18
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "relative max-h-5 flex-1 overflow-hidden text-ellipsis whitespace-nowrap break-all text-left text-[12.5px] leading-3",
                                children: currentFolder.name
                            })
                        ]
                    }),
                    (isDeleting || isRenaming) && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "absolute right-1 z-10 flex text-gray-300",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                className: "min-w-[20px] p-1 text-neutral-400 hover:text-neutral-100",
                                onClick: (e)=>{
                                    e.stopPropagation();
                                    if (isDeleting) {
                                        onDeleteFolder(currentFolder.id);
                                    } else if (isRenaming) {
                                        handleRename();
                                    }
                                    setIsDeleting(false);
                                    setIsRenaming(false);
                                },
                                children: /*#__PURE__*/ jsx_runtime_.jsx(icons_react_.IconCheck, {
                                    size: 18
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                className: "min-w-[20px] p-1 text-neutral-400 hover:text-neutral-100",
                                onClick: (e)=>{
                                    e.stopPropagation();
                                    setIsDeleting(false);
                                    setIsRenaming(false);
                                },
                                children: /*#__PURE__*/ jsx_runtime_.jsx(icons_react_.IconX, {
                                    size: 18
                                })
                            })
                        ]
                    }),
                    !isDeleting && !isRenaming && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "absolute right-1 z-10 flex text-gray-300",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                className: "min-w-[20px] p-1 text-neutral-400 hover:text-neutral-100",
                                onClick: (e)=>{
                                    e.stopPropagation();
                                    setIsRenaming(true);
                                    setRenameValue(currentFolder.name);
                                },
                                children: /*#__PURE__*/ jsx_runtime_.jsx(icons_react_.IconPencil, {
                                    size: 18
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                className: "min-w-[20px] p-1 text-neutral-400 hover:text-neutral-100",
                                onClick: (e)=>{
                                    e.stopPropagation();
                                    setIsDeleting(true);
                                },
                                children: /*#__PURE__*/ jsx_runtime_.jsx(icons_react_.IconTrash, {
                                    size: 18
                                })
                            })
                        ]
                    })
                ]
            }),
            isOpen ? conversations.map((conversation, index)=>{
                if (conversation.folderId === currentFolder.id) {
                    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "ml-5 gap-2 border-l pl-2",
                        children: /*#__PURE__*/ jsx_runtime_.jsx(Conversation/* ConversationComponent */.S, {
                            selectedConversation: selectedConversation,
                            conversation: conversation,
                            loading: loading,
                            onSelectConversation: onSelectConversation,
                            onDeleteConversation: onDeleteConversation,
                            onUpdateConversation: onUpdateConversation
                        })
                    }, index);
                }
            }) : null
        ]
    });
};

;// CONCATENATED MODULE: ./components/Folders/Chat/ChatFolders.tsx


const ChatFolders = ({ searchTerm , conversations , folders , onDeleteFolder , onUpdateFolder , // conversation props
selectedConversation , loading , onSelectConversation , onDeleteConversation , onUpdateConversation  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "flex w-full flex-col pt-2",
        children: folders.map((folder, index)=>/*#__PURE__*/ jsx_runtime_.jsx(ChatFolder, {
                searchTerm: searchTerm,
                conversations: conversations.filter((c)=>c.folderId),
                currentFolder: folder,
                onDeleteFolder: onDeleteFolder,
                onUpdateFolder: onUpdateFolder,
                // conversation props
                selectedConversation: selectedConversation,
                loading: loading,
                onSelectConversation: onSelectConversation,
                onDeleteConversation: onDeleteConversation,
                onUpdateConversation: onUpdateConversation
            }, index))
    });
};


/***/ }),

/***/ 3176:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "K": () => (/* binding */ PromptFolders)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./components/Promptbar/Prompt.tsx + 1 modules
var Prompt = __webpack_require__(7651);
// EXTERNAL MODULE: external "@tabler/icons-react"
var icons_react_ = __webpack_require__(2236);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./components/Folders/Prompt/PromptFolder.tsx




const PromptFolder = ({ searchTerm , prompts , currentFolder , onDeleteFolder , onUpdateFolder , // prompt props
onDeletePrompt , onUpdatePrompt  })=>{
    const [isDeleting, setIsDeleting] = (0,external_react_.useState)(false);
    const [isRenaming, setIsRenaming] = (0,external_react_.useState)(false);
    const [renameValue, setRenameValue] = (0,external_react_.useState)("");
    const [isOpen, setIsOpen] = (0,external_react_.useState)(false);
    const handleEnterDown = (e)=>{
        if (e.key === "Enter") {
            e.preventDefault();
            handleRename();
        }
    };
    const handleRename = ()=>{
        onUpdateFolder(currentFolder.id, renameValue);
        setRenameValue("");
        setIsRenaming(false);
    };
    const handleDrop = (e, folder)=>{
        if (e.dataTransfer) {
            setIsOpen(true);
            const prompt = JSON.parse(e.dataTransfer.getData("prompt"));
            const updatedPrompt = {
                ...prompt,
                folderId: folder.id
            };
            onUpdatePrompt(updatedPrompt);
            e.target.style.background = "none";
        }
    };
    const allowDrop = (e)=>{
        e.preventDefault();
    };
    const highlightDrop = (e)=>{
        e.target.style.background = "#343541";
    };
    const removeHighlight = (e)=>{
        e.target.style.background = "none";
    };
    (0,external_react_.useEffect)(()=>{
        if (isRenaming) {
            setIsDeleting(false);
        } else if (isDeleting) {
            setIsRenaming(false);
        }
    }, [
        isRenaming,
        isDeleting
    ]);
    (0,external_react_.useEffect)(()=>{
        if (searchTerm) {
            setIsOpen(true);
        } else {
            setIsOpen(false);
        }
    }, [
        searchTerm
    ]);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "relative flex items-center",
                children: [
                    isRenaming ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "flex w-full items-center gap-3 bg-[#343541]/90 p-3",
                        children: [
                            isOpen ? /*#__PURE__*/ jsx_runtime_.jsx(icons_react_.IconCaretDown, {
                                size: 18
                            }) : /*#__PURE__*/ jsx_runtime_.jsx(icons_react_.IconCaretRight, {
                                size: 18
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                className: "mr-12 flex-1 overflow-hidden overflow-ellipsis border-neutral-400 bg-transparent text-left text-[12.5px] leading-3 text-white outline-none focus:border-neutral-100",
                                type: "text",
                                value: renameValue,
                                onChange: (e)=>setRenameValue(e.target.value),
                                onKeyDown: handleEnterDown,
                                autoFocus: true
                            })
                        ]
                    }) : /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
                        className: `flex w-full cursor-pointer items-center gap-3 rounded-lg p-3 text-sm transition-colors duration-200 hover:bg-[#343541]/90`,
                        onClick: ()=>setIsOpen(!isOpen),
                        onDrop: (e)=>handleDrop(e, currentFolder),
                        onDragOver: allowDrop,
                        onDragEnter: highlightDrop,
                        onDragLeave: removeHighlight,
                        children: [
                            isOpen ? /*#__PURE__*/ jsx_runtime_.jsx(icons_react_.IconCaretDown, {
                                size: 18
                            }) : /*#__PURE__*/ jsx_runtime_.jsx(icons_react_.IconCaretRight, {
                                size: 18
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "relative max-h-5 flex-1 overflow-hidden text-ellipsis whitespace-nowrap break-all text-left text-[12.5px] leading-3",
                                children: currentFolder.name
                            })
                        ]
                    }),
                    (isDeleting || isRenaming) && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "absolute right-1 z-10 flex text-gray-300",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                className: "min-w-[20px] p-1 text-neutral-400 hover:text-neutral-100",
                                onClick: (e)=>{
                                    e.stopPropagation();
                                    if (isDeleting) {
                                        onDeleteFolder(currentFolder.id);
                                    } else if (isRenaming) {
                                        handleRename();
                                    }
                                    setIsDeleting(false);
                                    setIsRenaming(false);
                                },
                                children: /*#__PURE__*/ jsx_runtime_.jsx(icons_react_.IconCheck, {
                                    size: 18
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                className: "min-w-[20px] p-1 text-neutral-400 hover:text-neutral-100",
                                onClick: (e)=>{
                                    e.stopPropagation();
                                    setIsDeleting(false);
                                    setIsRenaming(false);
                                },
                                children: /*#__PURE__*/ jsx_runtime_.jsx(icons_react_.IconX, {
                                    size: 18
                                })
                            })
                        ]
                    }),
                    !isDeleting && !isRenaming && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "absolute right-1 z-10 flex text-gray-300",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                className: "min-w-[20px] p-1 text-neutral-400 hover:text-neutral-100",
                                onClick: (e)=>{
                                    e.stopPropagation();
                                    setIsRenaming(true);
                                    setRenameValue(currentFolder.name);
                                },
                                children: /*#__PURE__*/ jsx_runtime_.jsx(icons_react_.IconPencil, {
                                    size: 18
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                className: "min-w-[20px] p-1 text-neutral-400 hover:text-neutral-100",
                                onClick: (e)=>{
                                    e.stopPropagation();
                                    setIsDeleting(true);
                                },
                                children: /*#__PURE__*/ jsx_runtime_.jsx(icons_react_.IconTrash, {
                                    size: 18
                                })
                            })
                        ]
                    })
                ]
            }),
            isOpen ? prompts.map((prompt, index)=>{
                if (prompt.folderId === currentFolder.id) {
                    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "ml-5 gap-2 border-l pl-2",
                        children: /*#__PURE__*/ jsx_runtime_.jsx(Prompt/* PromptComponent */.j, {
                            prompt: prompt,
                            onDeletePrompt: onDeletePrompt,
                            onUpdatePrompt: onUpdatePrompt
                        })
                    }, index);
                }
            }) : null
        ]
    });
};

;// CONCATENATED MODULE: ./components/Folders/Prompt/PromptFolders.tsx


const PromptFolders = ({ searchTerm , prompts , folders , onDeleteFolder , onUpdateFolder , // prompt props
onDeletePrompt , onUpdatePrompt  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "flex w-full flex-col pt-2",
        children: folders.map((folder, index)=>/*#__PURE__*/ jsx_runtime_.jsx(PromptFolder, {
                searchTerm: searchTerm,
                prompts: prompts.filter((p)=>p.folderId),
                currentFolder: folder,
                onDeleteFolder: onDeleteFolder,
                onUpdateFolder: onUpdateFolder,
                // prompt props
                onDeletePrompt: onDeletePrompt,
                onUpdatePrompt: onUpdatePrompt
            }, index))
    });
};


/***/ }),

/***/ 6321:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$": () => (/* binding */ Spinner)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const Spinner = ({ size ="1em" , className =""  })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
        stroke: "currentColor",
        fill: "none",
        strokeWidth: "2",
        viewBox: "0 0 24 24",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        className: `animate-spin ${className}`,
        height: size,
        width: size,
        xmlns: "http://www.w3.org/2000/svg",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("line", {
                x1: "12",
                y1: "2",
                x2: "12",
                y2: "6"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("line", {
                x1: "12",
                y1: "18",
                x2: "12",
                y2: "22"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("line", {
                x1: "4.93",
                y1: "4.93",
                x2: "7.76",
                y2: "7.76"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("line", {
                x1: "16.24",
                y1: "16.24",
                x2: "19.07",
                y2: "19.07"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("line", {
                x1: "2",
                y1: "12",
                x2: "6",
                y2: "12"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("line", {
                x1: "18",
                y1: "12",
                x2: "22",
                y2: "12"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("line", {
                x1: "4.93",
                y1: "19.07",
                x2: "7.76",
                y2: "16.24"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("line", {
                x1: "16.24",
                y1: "7.76",
                x2: "19.07",
                y2: "4.93"
            })
        ]
    });
};


/***/ }),

/***/ 8130:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "d": () => (/* binding */ CodeBlock)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./utils/app/codeblock.ts
const programmingLanguages = {
    javascript: ".js",
    python: ".py",
    java: ".java",
    c: ".c",
    cpp: ".cpp",
    "c++": ".cpp",
    "c#": ".cs",
    ruby: ".rb",
    php: ".php",
    swift: ".swift",
    "objective-c": ".m",
    kotlin: ".kt",
    typescript: ".ts",
    go: ".go",
    perl: ".pl",
    rust: ".rs",
    scala: ".scala",
    haskell: ".hs",
    lua: ".lua",
    shell: ".sh",
    sql: ".sql",
    html: ".html",
    css: ".css"
};
const generateRandomString = (length, lowercase = false)=>{
    const chars = "ABCDEFGHJKLMNPQRSTUVWXY3456789"; // excluding similar looking characters like Z, 2, I, 1, O, 0
    let result = "";
    for(let i = 0; i < length; i++){
        result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return lowercase ? result.toLowerCase() : result;
};

// EXTERNAL MODULE: external "@tabler/icons-react"
var icons_react_ = __webpack_require__(2236);
// EXTERNAL MODULE: external "next-i18next"
var external_next_i18next_ = __webpack_require__(1377);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: external "react-syntax-highlighter"
const external_react_syntax_highlighter_namespaceObject = require("react-syntax-highlighter");
;// CONCATENATED MODULE: external "react-syntax-highlighter/dist/cjs/styles/prism"
const prism_namespaceObject = require("react-syntax-highlighter/dist/cjs/styles/prism");
;// CONCATENATED MODULE: ./components/Markdown/CodeBlock.tsx







const CodeBlock = /*#__PURE__*/ (0,external_react_.memo)(({ language , value  })=>{
    const { t  } = (0,external_next_i18next_.useTranslation)("markdown");
    const [isCopied, setIsCopied] = (0,external_react_.useState)(false);
    const copyToClipboard = ()=>{
        if (!navigator.clipboard || !navigator.clipboard.writeText) {
            return;
        }
        navigator.clipboard.writeText(value).then(()=>{
            setIsCopied(true);
            setTimeout(()=>{
                setIsCopied(false);
            }, 2000);
        });
    };
    const downloadAsFile = ()=>{
        const fileExtension = programmingLanguages[language] || ".file";
        const suggestedFileName = `file-${generateRandomString(3, true)}${fileExtension}`;
        const fileName = window.prompt(t("Enter file name") || "", suggestedFileName);
        if (!fileName) {
            // user pressed cancel on prompt
            return;
        }
        const blob = new Blob([
            value
        ], {
            type: "text/plain"
        });
        const url = URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.download = fileName;
        link.href = url;
        link.style.display = "none";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(url);
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "codeblock relative font-sans text-[16px]",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "flex items-center justify-between py-1.5 px-4",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        className: "text-xs lowercase text-white",
                        children: language
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "flex items-center",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
                                className: "flex gap-1.5 items-center rounded bg-none p-1 text-xs text-white",
                                onClick: copyToClipboard,
                                children: [
                                    isCopied ? /*#__PURE__*/ jsx_runtime_.jsx(icons_react_.IconCheck, {
                                        size: 18
                                    }) : /*#__PURE__*/ jsx_runtime_.jsx(icons_react_.IconClipboard, {
                                        size: 18
                                    }),
                                    isCopied ? t("Copied!") : t("Copy code")
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                className: "flex items-center rounded bg-none p-1 text-xs text-white",
                                onClick: downloadAsFile,
                                children: /*#__PURE__*/ jsx_runtime_.jsx(icons_react_.IconDownload, {
                                    size: 18
                                })
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(external_react_syntax_highlighter_namespaceObject.Prism, {
                language: language,
                style: prism_namespaceObject.oneDark,
                customStyle: {
                    margin: 0
                },
                children: value
            })
        ]
    });
});
CodeBlock.displayName = "CodeBlock";


/***/ }),

/***/ 4574:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "s": () => (/* binding */ MemoizedReactMarkdown)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3135);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_markdown__WEBPACK_IMPORTED_MODULE_1__]);
react_markdown__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


const MemoizedReactMarkdown = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.memo)(react_markdown__WEBPACK_IMPORTED_MODULE_1__["default"]);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6262:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "w": () => (/* binding */ Navbar)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _tabler_icons_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2236);
/* harmony import */ var _tabler_icons_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_tabler_icons_react__WEBPACK_IMPORTED_MODULE_1__);


const Navbar = ({ selectedConversation , onNewConversation  })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("nav", {
        className: "flex w-full justify-between bg-[#202123] py-3 px-4",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "mr-4"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "max-w-[240px] overflow-hidden text-ellipsis whitespace-nowrap",
                children: selectedConversation.name
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_tabler_icons_react__WEBPACK_IMPORTED_MODULE_1__.IconPlus, {
                className: "cursor-pointer hover:text-neutral-400 mr-8",
                onClick: onNewConversation
            })
        ]
    });
};


/***/ }),

/***/ 7651:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "j": () => (/* binding */ PromptComponent)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "@tabler/icons-react"
var icons_react_ = __webpack_require__(2236);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "next-i18next"
var external_next_i18next_ = __webpack_require__(1377);
;// CONCATENATED MODULE: ./components/Promptbar/PromptModal.tsx



const PromptModal = ({ prompt , onClose , onUpdatePrompt  })=>{
    const { t  } = (0,external_next_i18next_.useTranslation)("promptbar");
    const [name, setName] = (0,external_react_.useState)(prompt.name);
    const [description, setDescription] = (0,external_react_.useState)(prompt.description);
    const [content, setContent] = (0,external_react_.useState)(prompt.content);
    const modalRef = (0,external_react_.useRef)(null);
    const nameInputRef = (0,external_react_.useRef)(null);
    const handleEnter = (e)=>{
        if (e.key === "Enter" && !e.shiftKey) {
            onUpdatePrompt({
                ...prompt,
                name,
                description,
                content: content.trim()
            });
            onClose();
        }
    };
    (0,external_react_.useEffect)(()=>{
        const handleMouseDown = (e)=>{
            if (modalRef.current && !modalRef.current.contains(e.target)) {
                window.addEventListener("mouseup", handleMouseUp);
            }
        };
        const handleMouseUp = (e)=>{
            window.removeEventListener("mouseup", handleMouseUp);
            onClose();
        };
        window.addEventListener("mousedown", handleMouseDown);
        return ()=>{
            window.removeEventListener("mousedown", handleMouseDown);
        };
    }, [
        onClose
    ]);
    (0,external_react_.useEffect)(()=>{
        nameInputRef.current?.focus();
    }, []);
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-100",
        onKeyDown: handleEnter,
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "fixed inset-0 z-10 overflow-y-auto",
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "hidden sm:inline-block sm:h-screen sm:align-middle",
                        "aria-hidden": "true"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        ref: modalRef,
                        className: "dark:border-netural-400 inline-block max-h-[400px] transform overflow-hidden rounded-lg border border-gray-300 bg-white px-4 pt-5 pb-4 text-left align-bottom shadow-xl transition-all dark:bg-[#202123] sm:my-8 sm:max-h-[600px] sm:w-full sm:max-w-lg sm:p-6 sm:align-middle",
                        role: "dialog",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "text-sm font-bold text-black dark:text-neutral-200",
                                children: t("Name")
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                ref: nameInputRef,
                                className: "mt-2 w-full rounded-lg border border-neutral-500 px-4 py-2 text-neutral-900 shadow focus:outline-none dark:border-neutral-800 dark:border-opacity-50 dark:bg-[#40414F] dark:text-neutral-100",
                                placeholder: t("A name for your prompt.") || "",
                                value: name,
                                onChange: (e)=>setName(e.target.value)
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "mt-6 text-sm font-bold text-black dark:text-neutral-200",
                                children: t("Description")
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("textarea", {
                                className: "mt-2 w-full rounded-lg border border-neutral-500 px-4 py-2 text-neutral-900 shadow focus:outline-none dark:border-neutral-800 dark:border-opacity-50 dark:bg-[#40414F] dark:text-neutral-100",
                                style: {
                                    resize: "none"
                                },
                                placeholder: t("A description for your prompt.") || "",
                                value: description,
                                onChange: (e)=>setDescription(e.target.value),
                                rows: 3
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "mt-6 text-sm font-bold text-black dark:text-neutral-200",
                                children: t("Prompt")
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("textarea", {
                                className: "mt-2 w-full rounded-lg border border-neutral-500 px-4 py-2 text-neutral-900 shadow focus:outline-none dark:border-neutral-800 dark:border-opacity-50 dark:bg-[#40414F] dark:text-neutral-100",
                                style: {
                                    resize: "none"
                                },
                                placeholder: t("Prompt content. Use {{}} to denote a variable. Ex: {{name}} is a {{adjective}} {{noun}}") || "",
                                value: content,
                                onChange: (e)=>setContent(e.target.value),
                                rows: 10
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                type: "button",
                                className: "w-full px-4 py-2 mt-6 border rounded-lg shadow border-neutral-500 text-neutral-900 hover:bg-neutral-100 focus:outline-none dark:border-neutral-800 dark:border-opacity-50 dark:bg-white dark:text-black dark:hover:bg-neutral-300",
                                onClick: ()=>{
                                    const updatedPrompt = {
                                        ...prompt,
                                        name,
                                        description,
                                        content: content.trim()
                                    };
                                    onUpdatePrompt(updatedPrompt);
                                    onClose();
                                },
                                children: t("Save")
                            })
                        ]
                    })
                ]
            })
        })
    });
};

;// CONCATENATED MODULE: ./components/Promptbar/Prompt.tsx




const PromptComponent = ({ prompt , onUpdatePrompt , onDeletePrompt  })=>{
    const [showModal, setShowModal] = (0,external_react_.useState)(false);
    const [isDeleting, setIsDeleting] = (0,external_react_.useState)(false);
    const [isRenaming, setIsRenaming] = (0,external_react_.useState)(false);
    const [renameValue, setRenameValue] = (0,external_react_.useState)("");
    const handleDragStart = (e, prompt)=>{
        if (e.dataTransfer) {
            e.dataTransfer.setData("prompt", JSON.stringify(prompt));
        }
    };
    (0,external_react_.useEffect)(()=>{
        if (isRenaming) {
            setIsDeleting(false);
        } else if (isDeleting) {
            setIsRenaming(false);
        }
    }, [
        isRenaming,
        isDeleting
    ]);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "relative flex items-center",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
                className: "flex w-full cursor-pointer items-center gap-3 rounded-lg p-3 text-sm transition-colors duration-200 hover:bg-[#343541]/90",
                draggable: "true",
                onClick: (e)=>{
                    e.stopPropagation();
                    setShowModal(true);
                },
                onDragStart: (e)=>handleDragStart(e, prompt),
                onMouseLeave: ()=>{
                    setIsDeleting(false);
                    setIsRenaming(false);
                    setRenameValue("");
                },
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(icons_react_.IconBulbFilled, {
                        size: 18
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "relative max-h-5 flex-1 overflow-hidden text-ellipsis whitespace-nowrap break-all pr-4 text-left text-[12.5px] leading-3",
                        children: prompt.name
                    })
                ]
            }),
            (isDeleting || isRenaming) && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "absolute right-1 z-10 flex text-gray-300",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("button", {
                        className: "min-w-[20px] p-1 text-neutral-400 hover:text-neutral-100",
                        onClick: (e)=>{
                            e.stopPropagation();
                            if (isDeleting) {
                                onDeletePrompt(prompt);
                            }
                            setIsDeleting(false);
                        },
                        children: /*#__PURE__*/ jsx_runtime_.jsx(icons_react_.IconCheck, {
                            size: 18
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("button", {
                        className: "min-w-[20px] p-1 text-neutral-400 hover:text-neutral-100",
                        onClick: (e)=>{
                            e.stopPropagation();
                            setIsDeleting(false);
                        },
                        children: /*#__PURE__*/ jsx_runtime_.jsx(icons_react_.IconX, {
                            size: 18
                        })
                    })
                ]
            }),
            !isDeleting && !isRenaming && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "absolute right-1 z-10 flex text-gray-300",
                children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                    className: "min-w-[20px] p-1 text-neutral-400 hover:text-neutral-100",
                    onClick: (e)=>{
                        e.stopPropagation();
                        setIsDeleting(true);
                    },
                    children: /*#__PURE__*/ jsx_runtime_.jsx(icons_react_.IconTrash, {
                        size: 18
                    })
                })
            }),
            showModal && /*#__PURE__*/ jsx_runtime_.jsx(PromptModal, {
                prompt: prompt,
                onClose: ()=>setShowModal(false),
                onUpdatePrompt: onUpdatePrompt
            })
        ]
    });
};


/***/ }),

/***/ 9413:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "s": () => (/* binding */ Promptbar)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _tabler_icons_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2236);
/* harmony import */ var _tabler_icons_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_tabler_icons_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7987);
/* harmony import */ var _Folders_Prompt_PromptFolders__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3176);
/* harmony import */ var _Sidebar_Search__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3109);
/* harmony import */ var _PromptbarSettings__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5733);
/* harmony import */ var _Prompts__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2496);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_i18next__WEBPACK_IMPORTED_MODULE_3__]);
react_i18next__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];








const Promptbar = ({ folders , prompts , onCreateFolder , onDeleteFolder , onUpdateFolder , onCreatePrompt , onUpdatePrompt , onDeletePrompt  })=>{
    const { t  } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_3__.useTranslation)("promptbar");
    const [searchTerm, setSearchTerm] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)("");
    const [filteredPrompts, setFilteredPrompts] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(prompts);
    const handleUpdatePrompt = (prompt)=>{
        onUpdatePrompt(prompt);
        setSearchTerm("");
    };
    const handleDeletePrompt = (prompt)=>{
        onDeletePrompt(prompt);
        setSearchTerm("");
    };
    const handleDrop = (e)=>{
        if (e.dataTransfer) {
            const prompt = JSON.parse(e.dataTransfer.getData("prompt"));
            const updatedPrompt = {
                ...prompt,
                folderId: e.target.dataset.folderId
            };
            onUpdatePrompt(updatedPrompt);
            e.target.style.background = "none";
        }
    };
    const allowDrop = (e)=>{
        e.preventDefault();
    };
    const highlightDrop = (e)=>{
        e.target.style.background = "#343541";
    };
    const removeHighlight = (e)=>{
        e.target.style.background = "none";
    };
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        if (searchTerm) {
            setFilteredPrompts(prompts.filter((prompt)=>{
                const searchable = prompt.name.toLowerCase() + " " + prompt.description.toLowerCase() + " " + prompt.content.toLowerCase();
                return searchable.includes(searchTerm.toLowerCase());
            }));
        } else {
            setFilteredPrompts(prompts);
        }
    }, [
        searchTerm,
        prompts
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: `fixed top-0 right-0 z-50 flex h-full w-[260px] flex-none flex-col space-y-2 bg-[#202123] p-2 text-[14px] transition-all sm:relative sm:top-0`,
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "flex items-center",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                        className: "text-sidebar flex w-[190px] flex-shrink-0 cursor-pointer select-none items-center gap-3 rounded-md border border-white/20 p-3 text-white transition-colors duration-200 hover:bg-gray-500/10",
                        onClick: ()=>{
                            onCreatePrompt();
                            setSearchTerm("");
                        },
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_tabler_icons_react__WEBPACK_IMPORTED_MODULE_1__.IconPlus, {
                                size: 16
                            }),
                            t("New prompt")
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                        className: "flex items-center flex-shrink-0 gap-3 p-3 ml-2 text-sm text-white transition-colors duration-200 border rounded-md cursor-pointer border-white/20 hover:bg-gray-500/10",
                        onClick: ()=>onCreateFolder(t("New folder")),
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_tabler_icons_react__WEBPACK_IMPORTED_MODULE_1__.IconFolderPlus, {
                            size: 16
                        })
                    })
                ]
            }),
            prompts.length > 1 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Sidebar_Search__WEBPACK_IMPORTED_MODULE_5__/* .Search */ .o, {
                placeholder: t("Search prompts...") || "",
                searchTerm: searchTerm,
                onSearch: setSearchTerm
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "flex-grow overflow-auto",
                children: [
                    folders.length > 0 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "flex pb-2 border-b border-white/20",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Folders_Prompt_PromptFolders__WEBPACK_IMPORTED_MODULE_4__/* .PromptFolders */ .K, {
                            searchTerm: searchTerm,
                            prompts: filteredPrompts,
                            folders: folders,
                            onUpdateFolder: onUpdateFolder,
                            onDeleteFolder: onDeleteFolder,
                            // prompt props
                            onDeletePrompt: handleDeletePrompt,
                            onUpdatePrompt: handleUpdatePrompt
                        })
                    }),
                    prompts.length > 0 ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "pt-2",
                        onDrop: (e)=>handleDrop(e),
                        onDragOver: allowDrop,
                        onDragEnter: highlightDrop,
                        onDragLeave: removeHighlight,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Prompts__WEBPACK_IMPORTED_MODULE_7__/* .Prompts */ .j, {
                            prompts: filteredPrompts.filter((prompt)=>!prompt.folderId),
                            onUpdatePrompt: handleUpdatePrompt,
                            onDeletePrompt: handleDeletePrompt
                        })
                    }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "mt-8 text-center text-white opacity-50 select-none",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_tabler_icons_react__WEBPACK_IMPORTED_MODULE_1__.IconMistOff, {
                                className: "mx-auto mb-3"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                className: "text-[14px] leading-normal",
                                children: t("No prompts.")
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_PromptbarSettings__WEBPACK_IMPORTED_MODULE_6__/* .PromptbarSettings */ .Z, {})
        ]
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5733:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ PromptbarSettings)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const PromptbarSettings = ()=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {});
};


/***/ }),

/***/ 2496:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "j": () => (/* binding */ Prompts)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Prompt__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7651);


const Prompts = ({ prompts , onUpdatePrompt , onDeletePrompt  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "flex w-full flex-col gap-1",
        children: prompts.slice().reverse().map((prompt, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Prompt__WEBPACK_IMPORTED_MODULE_1__/* .PromptComponent */ .j, {
                prompt: prompt,
                onUpdatePrompt: onUpdatePrompt,
                onDeletePrompt: onDeletePrompt
            }, index))
    });
};


/***/ }),

/***/ 8953:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "b": () => (/* binding */ Import)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _tabler_icons_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2236);
/* harmony import */ var _tabler_icons_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_tabler_icons_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1377);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_i18next__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Sidebar_SidebarButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(455);




const Import = ({ onImport  })=>{
    const { t  } = (0,next_i18next__WEBPACK_IMPORTED_MODULE_2__.useTranslation)("sidebar");
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                id: "import-file",
                className: "sr-only",
                tabIndex: -1,
                type: "file",
                accept: ".json",
                onChange: (e)=>{
                    if (!e.target.files?.length) return;
                    const file = e.target.files[0];
                    const reader = new FileReader();
                    reader.onload = (e)=>{
                        let json = JSON.parse(e.target?.result);
                        onImport(json);
                    };
                    reader.readAsText(file);
                }
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Sidebar_SidebarButton__WEBPACK_IMPORTED_MODULE_3__/* .SidebarButton */ .f, {
                text: t("Import data"),
                icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_tabler_icons_react__WEBPACK_IMPORTED_MODULE_1__.IconFileImport, {
                    size: 18
                }),
                onClick: ()=>{
                    const importFile = document.querySelector("#import-file");
                    if (importFile) {
                        importFile.click();
                    }
                }
            })
        ]
    });
};


/***/ }),

/***/ 7177:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "s": () => (/* binding */ Key)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _tabler_icons_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2236);
/* harmony import */ var _tabler_icons_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_tabler_icons_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1377);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_i18next__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Sidebar_SidebarButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(455);





const Key = ({ apiKey , onApiKeyChange  })=>{
    const { t  } = (0,next_i18next__WEBPACK_IMPORTED_MODULE_2__.useTranslation)("sidebar");
    const [isChanging, setIsChanging] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);
    const [newKey, setNewKey] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(apiKey);
    const inputRef = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)(null);
    const handleEnterDown = (e)=>{
        if (e.key === "Enter") {
            e.preventDefault();
            handleUpdateKey(newKey);
        }
    };
    const handleUpdateKey = (newKey)=>{
        onApiKeyChange(newKey.trim());
        setIsChanging(false);
    };
    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{
        if (isChanging) {
            inputRef.current?.focus();
        }
    }, [
        isChanging
    ]);
    return isChanging ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "duration:200 flex w-full cursor-pointer items-center rounded-md py-3 px-3 transition-colors hover:bg-gray-500/10",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_tabler_icons_react__WEBPACK_IMPORTED_MODULE_1__.IconKey, {
                size: 18
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                ref: inputRef,
                className: "ml-2 h-[20px] flex-1 overflow-hidden overflow-ellipsis border-b border-neutral-400 bg-transparent pr-1 text-[12.5px] leading-3 text-left text-white outline-none focus:border-neutral-100",
                type: "password",
                value: newKey,
                onChange: (e)=>setNewKey(e.target.value),
                onKeyDown: handleEnterDown,
                placeholder: t("API Key") || "API Key"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "flex w-[40px]",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_tabler_icons_react__WEBPACK_IMPORTED_MODULE_1__.IconCheck, {
                        className: "ml-auto min-w-[20px] text-neutral-400 hover:text-neutral-100",
                        size: 18,
                        onClick: (e)=>{
                            e.stopPropagation();
                            handleUpdateKey(newKey);
                        }
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_tabler_icons_react__WEBPACK_IMPORTED_MODULE_1__.IconX, {
                        className: "ml-auto min-w-[20px] text-neutral-400 hover:text-neutral-100",
                        size: 18,
                        onClick: (e)=>{
                            e.stopPropagation();
                            setIsChanging(false);
                            setNewKey(apiKey);
                        }
                    })
                ]
            })
        ]
    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Sidebar_SidebarButton__WEBPACK_IMPORTED_MODULE_4__/* .SidebarButton */ .f, {
        text: t("OpenAI API Key"),
        icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_tabler_icons_react__WEBPACK_IMPORTED_MODULE_1__.IconKey, {
            size: 18
        }),
        onClick: ()=>setIsChanging(true)
    });
};


/***/ }),

/***/ 3109:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "o": () => (/* binding */ Search)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _tabler_icons_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2236);
/* harmony import */ var _tabler_icons_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_tabler_icons_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1377);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_i18next__WEBPACK_IMPORTED_MODULE_2__);



const Search = ({ placeholder , searchTerm , onSearch  })=>{
    const { t  } = (0,next_i18next__WEBPACK_IMPORTED_MODULE_2__.useTranslation)("sidebar");
    const handleSearchChange = (e)=>{
        onSearch(e.target.value);
    };
    const clearSearch = ()=>{
        onSearch("");
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "relative flex items-center",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                className: "w-full flex-1 rounded-md border border-neutral-600 bg-[#202123] px-4 py-3 pr-10 text-[14px] leading-3 text-white",
                type: "text",
                placeholder: t(placeholder) || "",
                value: searchTerm,
                onChange: handleSearchChange
            }),
            searchTerm && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_tabler_icons_react__WEBPACK_IMPORTED_MODULE_1__.IconX, {
                className: "absolute right-4 cursor-pointer text-neutral-300 hover:text-neutral-400",
                size: 18,
                onClick: clearSearch
            })
        ]
    });
};


/***/ }),

/***/ 455:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "f": () => (/* binding */ SidebarButton)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const SidebarButton = ({ text , icon , onClick  })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
        className: "flex w-full cursor-pointer select-none items-center gap-3 rounded-md py-3 px-3 text-[14px] leading-3 text-white transition-colors duration-200 hover:bg-gray-500/10",
        onClick: onClick,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                children: icon
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                children: text
            })
        ]
    });
};


/***/ }),

/***/ 2603:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Chat_Chat__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5782);
/* harmony import */ var _components_Chatbar_Chatbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(641);
/* harmony import */ var _components_Mobile_Navbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6262);
/* harmony import */ var _components_Promptbar_Promptbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9413);
/* harmony import */ var _types_openai__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1910);
/* harmony import */ var _utils_app_api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7172);
/* harmony import */ var _utils_app_clean__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(9913);
/* harmony import */ var _utils_app_const__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(4689);
/* harmony import */ var _utils_app_conversation__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(2716);
/* harmony import */ var _utils_app_folders__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(6921);
/* harmony import */ var _utils_app_importExport__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(9120);
/* harmony import */ var _utils_app_prompts__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(6686);
/* harmony import */ var _tabler_icons_react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(2236);
/* harmony import */ var _tabler_icons_react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_tabler_icons_react__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(1377);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(next_i18next__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var next_i18next_serverSideTranslations__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(5460);
/* harmony import */ var next_i18next_serverSideTranslations__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(next_i18next_serverSideTranslations__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(6201);
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(6555);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_Chat_Chat__WEBPACK_IMPORTED_MODULE_1__, _components_Chatbar_Chatbar__WEBPACK_IMPORTED_MODULE_2__, _components_Promptbar_Promptbar__WEBPACK_IMPORTED_MODULE_4__, react_hot_toast__WEBPACK_IMPORTED_MODULE_15__, uuid__WEBPACK_IMPORTED_MODULE_16__]);
([_components_Chat_Chat__WEBPACK_IMPORTED_MODULE_1__, _components_Chatbar_Chatbar__WEBPACK_IMPORTED_MODULE_2__, _components_Promptbar_Promptbar__WEBPACK_IMPORTED_MODULE_4__, react_hot_toast__WEBPACK_IMPORTED_MODULE_15__, uuid__WEBPACK_IMPORTED_MODULE_16__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




















const Home = ({ serverSideApiKeyIsSet , serverSidePluginKeysSet , defaultModelId  })=>{
    const { t  } = (0,next_i18next__WEBPACK_IMPORTED_MODULE_11__.useTranslation)("chat");
    // STATE ----------------------------------------------
    const [apiKey, setApiKey] = (0,react__WEBPACK_IMPORTED_MODULE_14__.useState)("");
    const [pluginKeys, setPluginKeys] = (0,react__WEBPACK_IMPORTED_MODULE_14__.useState)([]);
    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_14__.useState)(false);
    const [lightMode, setLightMode] = (0,react__WEBPACK_IMPORTED_MODULE_14__.useState)("dark");
    const [messageIsStreaming, setMessageIsStreaming] = (0,react__WEBPACK_IMPORTED_MODULE_14__.useState)(false);
    const [modelError, setModelError] = (0,react__WEBPACK_IMPORTED_MODULE_14__.useState)(null);
    const [models, setModels] = (0,react__WEBPACK_IMPORTED_MODULE_14__.useState)([]);
    const [folders, setFolders] = (0,react__WEBPACK_IMPORTED_MODULE_14__.useState)([]);
    const [conversations, setConversations] = (0,react__WEBPACK_IMPORTED_MODULE_14__.useState)([]);
    const [selectedConversation, setSelectedConversation] = (0,react__WEBPACK_IMPORTED_MODULE_14__.useState)();
    const [currentMessage, setCurrentMessage] = (0,react__WEBPACK_IMPORTED_MODULE_14__.useState)();
    const [showSidebar, setShowSidebar] = (0,react__WEBPACK_IMPORTED_MODULE_14__.useState)(true);
    const [prompts, setPrompts] = (0,react__WEBPACK_IMPORTED_MODULE_14__.useState)([]);
    const [showPromptbar, setShowPromptbar] = (0,react__WEBPACK_IMPORTED_MODULE_14__.useState)(true);
    // REFS ----------------------------------------------
    const stopConversationRef = (0,react__WEBPACK_IMPORTED_MODULE_14__.useRef)(false);
    // FETCH RESPONSE ----------------------------------------------
    const handleSend = async (message, deleteCount = 0, plugin = null)=>{
        if (selectedConversation) {
            let updatedConversation;
            if (deleteCount) {
                const updatedMessages = [
                    ...selectedConversation.messages
                ];
                for(let i = 0; i < deleteCount; i++){
                    updatedMessages.pop();
                }
                updatedConversation = {
                    ...selectedConversation,
                    messages: [
                        ...updatedMessages,
                        message
                    ]
                };
            } else {
                updatedConversation = {
                    ...selectedConversation,
                    messages: [
                        ...selectedConversation.messages,
                        message
                    ]
                };
            }
            setSelectedConversation(updatedConversation);
            setLoading(true);
            setMessageIsStreaming(true);
            const chatBody = {
                model: updatedConversation.model,
                messages: updatedConversation.messages,
                key: apiKey,
                prompt: updatedConversation.prompt
            };
            const endpoint = (0,_utils_app_api__WEBPACK_IMPORTED_MODULE_6__/* .getEndpoint */ .O)(plugin);
            let body;
            if (!plugin) {
                body = JSON.stringify(chatBody);
            } else {
                body = JSON.stringify({
                    ...chatBody,
                    googleAPIKey: pluginKeys.find((key)=>key.pluginId === "google-search")?.requiredKeys.find((key)=>key.key === "GOOGLE_API_KEY")?.value,
                    googleCSEId: pluginKeys.find((key)=>key.pluginId === "google-search")?.requiredKeys.find((key)=>key.key === "GOOGLE_CSE_ID")?.value
                });
            }
            const controller = new AbortController();
            const response = await fetch(endpoint, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                signal: controller.signal,
                body
            });
            if (!response.ok) {
                setLoading(false);
                setMessageIsStreaming(false);
                react_hot_toast__WEBPACK_IMPORTED_MODULE_15__["default"].error(response.statusText);
                return;
            }
            const data = response.body;
            if (!data) {
                setLoading(false);
                setMessageIsStreaming(false);
                return;
            }
            if (!plugin) {
                if (updatedConversation.messages.length === 1) {
                    const { content  } = message;
                    const customName = content.length > 30 ? content.substring(0, 30) + "..." : content;
                    updatedConversation = {
                        ...updatedConversation,
                        name: customName
                    };
                }
                setLoading(false);
                const reader = data.getReader();
                const decoder = new TextDecoder();
                let done = false;
                let isFirst = true;
                let text = "";
                while(!done){
                    if (stopConversationRef.current === true) {
                        controller.abort();
                        done = true;
                        break;
                    }
                    const { value , done: doneReading  } = await reader.read();
                    done = doneReading;
                    const chunkValue = decoder.decode(value);
                    text += chunkValue;
                    if (isFirst) {
                        isFirst = false;
                        const updatedMessages = [
                            ...updatedConversation.messages,
                            {
                                role: "assistant",
                                content: chunkValue
                            }
                        ];
                        updatedConversation = {
                            ...updatedConversation,
                            messages: updatedMessages
                        };
                        setSelectedConversation(updatedConversation);
                    } else {
                        const updatedMessages = updatedConversation.messages.map((message, index)=>{
                            if (index === updatedConversation.messages.length - 1) {
                                return {
                                    ...message,
                                    content: text
                                };
                            }
                            return message;
                        });
                        updatedConversation = {
                            ...updatedConversation,
                            messages: updatedMessages
                        };
                        setSelectedConversation(updatedConversation);
                    }
                }
                (0,_utils_app_conversation__WEBPACK_IMPORTED_MODULE_17__/* .saveConversation */ .m7)(updatedConversation);
                const updatedConversations = conversations.map((conversation)=>{
                    if (conversation.id === selectedConversation.id) {
                        return updatedConversation;
                    }
                    return conversation;
                });
                if (updatedConversations.length === 0) {
                    updatedConversations.push(updatedConversation);
                }
                setConversations(updatedConversations);
                (0,_utils_app_conversation__WEBPACK_IMPORTED_MODULE_17__/* .saveConversations */ .fB)(updatedConversations);
                setMessageIsStreaming(false);
            } else {
                const { answer  } = await response.json();
                const updatedMessages = [
                    ...updatedConversation.messages,
                    {
                        role: "assistant",
                        content: answer
                    }
                ];
                updatedConversation = {
                    ...updatedConversation,
                    messages: updatedMessages
                };
                setSelectedConversation(updatedConversation);
                (0,_utils_app_conversation__WEBPACK_IMPORTED_MODULE_17__/* .saveConversation */ .m7)(updatedConversation);
                const updatedConversations = conversations.map((conversation)=>{
                    if (conversation.id === selectedConversation.id) {
                        return updatedConversation;
                    }
                    return conversation;
                });
                if (updatedConversations.length === 0) {
                    updatedConversations.push(updatedConversation);
                }
                setConversations(updatedConversations);
                (0,_utils_app_conversation__WEBPACK_IMPORTED_MODULE_17__/* .saveConversations */ .fB)(updatedConversations);
                setLoading(false);
                setMessageIsStreaming(false);
            }
        }
    };
    // FETCH MODELS ----------------------------------------------
    const fetchModels = async (key)=>{
        const error = {
            title: t("Error fetching models."),
            code: null,
            messageLines: [
                t("Make sure your OpenAI API key is set in the bottom left of the sidebar."),
                t("If you completed this step, OpenAI may be experiencing issues.")
            ]
        };
        const response = await fetch("/api/models", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                key
            })
        });
        if (!response.ok) {
            try {
                const data = await response.json();
                Object.assign(error, {
                    code: data.error?.code,
                    messageLines: [
                        data.error?.message
                    ]
                });
            } catch (e) {}
            setModelError(error);
            return;
        }
        const data = await response.json();
        if (!data) {
            setModelError(error);
            return;
        }
        setModels(data);
        setModelError(null);
    };
    // BASIC HANDLERS --------------------------------------------
    const handleLightMode = (mode)=>{
        setLightMode(mode);
        localStorage.setItem("theme", mode);
    };
    const handleApiKeyChange = (apiKey)=>{
        setApiKey(apiKey);
        localStorage.setItem("apiKey", apiKey);
    };
    const handlePluginKeyChange = (pluginKey)=>{
        if (pluginKeys.some((key)=>key.pluginId === pluginKey.pluginId)) {
            const updatedPluginKeys = pluginKeys.map((key)=>{
                if (key.pluginId === pluginKey.pluginId) {
                    return pluginKey;
                }
                return key;
            });
            setPluginKeys(updatedPluginKeys);
            localStorage.setItem("pluginKeys", JSON.stringify(updatedPluginKeys));
        } else {
            setPluginKeys([
                ...pluginKeys,
                pluginKey
            ]);
            localStorage.setItem("pluginKeys", JSON.stringify([
                ...pluginKeys,
                pluginKey
            ]));
        }
    };
    const handleClearPluginKey = (pluginKey)=>{
        const updatedPluginKeys = pluginKeys.filter((key)=>key.pluginId !== pluginKey.pluginId);
        if (updatedPluginKeys.length === 0) {
            setPluginKeys([]);
            localStorage.removeItem("pluginKeys");
            return;
        }
        setPluginKeys(updatedPluginKeys);
        localStorage.setItem("pluginKeys", JSON.stringify(updatedPluginKeys));
    };
    const handleToggleChatbar = ()=>{
        setShowSidebar(!showSidebar);
        localStorage.setItem("showChatbar", JSON.stringify(!showSidebar));
    };
    const handleTogglePromptbar = ()=>{
        setShowPromptbar(!showPromptbar);
        localStorage.setItem("showPromptbar", JSON.stringify(!showPromptbar));
    };
    const handleExportData = ()=>{
        (0,_utils_app_importExport__WEBPACK_IMPORTED_MODULE_9__/* .exportData */ .u1)();
    };
    const handleImportConversations = (data)=>{
        const { history , folders , prompts  } = (0,_utils_app_importExport__WEBPACK_IMPORTED_MODULE_9__/* .importData */ .dk)(data);
        setConversations(history);
        setSelectedConversation(history[history.length - 1]);
        setFolders(folders);
        setPrompts(prompts);
    };
    const handleSelectConversation = (conversation)=>{
        setSelectedConversation(conversation);
        (0,_utils_app_conversation__WEBPACK_IMPORTED_MODULE_17__/* .saveConversation */ .m7)(conversation);
    };
    // FOLDER OPERATIONS  --------------------------------------------
    const handleCreateFolder = (name, type)=>{
        const newFolder = {
            id: (0,uuid__WEBPACK_IMPORTED_MODULE_16__.v4)(),
            name,
            type
        };
        const updatedFolders = [
            ...folders,
            newFolder
        ];
        setFolders(updatedFolders);
        (0,_utils_app_folders__WEBPACK_IMPORTED_MODULE_18__/* .saveFolders */ ._)(updatedFolders);
    };
    const handleDeleteFolder = (folderId)=>{
        const updatedFolders = folders.filter((f)=>f.id !== folderId);
        setFolders(updatedFolders);
        (0,_utils_app_folders__WEBPACK_IMPORTED_MODULE_18__/* .saveFolders */ ._)(updatedFolders);
        const updatedConversations = conversations.map((c)=>{
            if (c.folderId === folderId) {
                return {
                    ...c,
                    folderId: null
                };
            }
            return c;
        });
        setConversations(updatedConversations);
        (0,_utils_app_conversation__WEBPACK_IMPORTED_MODULE_17__/* .saveConversations */ .fB)(updatedConversations);
        const updatedPrompts = prompts.map((p)=>{
            if (p.folderId === folderId) {
                return {
                    ...p,
                    folderId: null
                };
            }
            return p;
        });
        setPrompts(updatedPrompts);
        (0,_utils_app_prompts__WEBPACK_IMPORTED_MODULE_19__/* .savePrompts */ .V)(updatedPrompts);
    };
    const handleUpdateFolder = (folderId, name)=>{
        const updatedFolders = folders.map((f)=>{
            if (f.id === folderId) {
                return {
                    ...f,
                    name
                };
            }
            return f;
        });
        setFolders(updatedFolders);
        (0,_utils_app_folders__WEBPACK_IMPORTED_MODULE_18__/* .saveFolders */ ._)(updatedFolders);
    };
    // CONVERSATION OPERATIONS  --------------------------------------------
    const handleNewConversation = ()=>{
        const lastConversation = conversations[conversations.length - 1];
        const newConversation = {
            id: (0,uuid__WEBPACK_IMPORTED_MODULE_16__.v4)(),
            name: `${t("New Conversation")}`,
            messages: [],
            model: lastConversation?.model || {
                id: _types_openai__WEBPACK_IMPORTED_MODULE_5__/* .OpenAIModels */ .MU[defaultModelId].id,
                name: _types_openai__WEBPACK_IMPORTED_MODULE_5__/* .OpenAIModels */ .MU[defaultModelId].name,
                maxLength: _types_openai__WEBPACK_IMPORTED_MODULE_5__/* .OpenAIModels */ .MU[defaultModelId].maxLength,
                tokenLimit: _types_openai__WEBPACK_IMPORTED_MODULE_5__/* .OpenAIModels */ .MU[defaultModelId].tokenLimit
            },
            prompt: _utils_app_const__WEBPACK_IMPORTED_MODULE_8__/* .DEFAULT_SYSTEM_PROMPT */ .c,
            folderId: null
        };
        const updatedConversations = [
            ...conversations,
            newConversation
        ];
        setSelectedConversation(newConversation);
        setConversations(updatedConversations);
        (0,_utils_app_conversation__WEBPACK_IMPORTED_MODULE_17__/* .saveConversation */ .m7)(newConversation);
        (0,_utils_app_conversation__WEBPACK_IMPORTED_MODULE_17__/* .saveConversations */ .fB)(updatedConversations);
        setLoading(false);
    };
    const handleDeleteConversation = (conversation)=>{
        const updatedConversations = conversations.filter((c)=>c.id !== conversation.id);
        setConversations(updatedConversations);
        (0,_utils_app_conversation__WEBPACK_IMPORTED_MODULE_17__/* .saveConversations */ .fB)(updatedConversations);
        if (updatedConversations.length > 0) {
            setSelectedConversation(updatedConversations[updatedConversations.length - 1]);
            (0,_utils_app_conversation__WEBPACK_IMPORTED_MODULE_17__/* .saveConversation */ .m7)(updatedConversations[updatedConversations.length - 1]);
        } else {
            setSelectedConversation({
                id: (0,uuid__WEBPACK_IMPORTED_MODULE_16__.v4)(),
                name: "New conversation",
                messages: [],
                model: _types_openai__WEBPACK_IMPORTED_MODULE_5__/* .OpenAIModels */ .MU[defaultModelId],
                prompt: _utils_app_const__WEBPACK_IMPORTED_MODULE_8__/* .DEFAULT_SYSTEM_PROMPT */ .c,
                folderId: null
            });
            localStorage.removeItem("selectedConversation");
        }
    };
    const handleUpdateConversation = (conversation, data)=>{
        const updatedConversation = {
            ...conversation,
            [data.key]: data.value
        };
        const { single , all  } = (0,_utils_app_conversation__WEBPACK_IMPORTED_MODULE_17__/* .updateConversation */ .X1)(updatedConversation, conversations);
        setSelectedConversation(single);
        setConversations(all);
    };
    const handleClearConversations = ()=>{
        setConversations([]);
        localStorage.removeItem("conversationHistory");
        setSelectedConversation({
            id: (0,uuid__WEBPACK_IMPORTED_MODULE_16__.v4)(),
            name: "New conversation",
            messages: [],
            model: _types_openai__WEBPACK_IMPORTED_MODULE_5__/* .OpenAIModels */ .MU[defaultModelId],
            prompt: _utils_app_const__WEBPACK_IMPORTED_MODULE_8__/* .DEFAULT_SYSTEM_PROMPT */ .c,
            folderId: null
        });
        localStorage.removeItem("selectedConversation");
        const updatedFolders = folders.filter((f)=>f.type !== "chat");
        setFolders(updatedFolders);
        (0,_utils_app_folders__WEBPACK_IMPORTED_MODULE_18__/* .saveFolders */ ._)(updatedFolders);
    };
    const handleEditMessage = (message, messageIndex)=>{
        if (selectedConversation) {
            const updatedMessages = selectedConversation.messages.map((m, i)=>{
                if (i < messageIndex) {
                    return m;
                }
            }).filter((m)=>m);
            const updatedConversation = {
                ...selectedConversation,
                messages: updatedMessages
            };
            const { single , all  } = (0,_utils_app_conversation__WEBPACK_IMPORTED_MODULE_17__/* .updateConversation */ .X1)(updatedConversation, conversations);
            setSelectedConversation(single);
            setConversations(all);
            setCurrentMessage(message);
        }
    };
    // PROMPT OPERATIONS --------------------------------------------
    const handleCreatePrompt = ()=>{
        const newPrompt = {
            id: (0,uuid__WEBPACK_IMPORTED_MODULE_16__.v4)(),
            name: `Prompt ${prompts.length + 1}`,
            description: "",
            content: "",
            model: _types_openai__WEBPACK_IMPORTED_MODULE_5__/* .OpenAIModels */ .MU[defaultModelId],
            folderId: null
        };
        const updatedPrompts = [
            ...prompts,
            newPrompt
        ];
        setPrompts(updatedPrompts);
        (0,_utils_app_prompts__WEBPACK_IMPORTED_MODULE_19__/* .savePrompts */ .V)(updatedPrompts);
    };
    const handleUpdatePrompt = (prompt)=>{
        const updatedPrompts = prompts.map((p)=>{
            if (p.id === prompt.id) {
                return prompt;
            }
            return p;
        });
        setPrompts(updatedPrompts);
        (0,_utils_app_prompts__WEBPACK_IMPORTED_MODULE_19__/* .savePrompts */ .V)(updatedPrompts);
    };
    const handleDeletePrompt = (prompt)=>{
        const updatedPrompts = prompts.filter((p)=>p.id !== prompt.id);
        setPrompts(updatedPrompts);
        (0,_utils_app_prompts__WEBPACK_IMPORTED_MODULE_19__/* .savePrompts */ .V)(updatedPrompts);
    };
    // EFFECTS  --------------------------------------------
    (0,react__WEBPACK_IMPORTED_MODULE_14__.useEffect)(()=>{
        if (currentMessage) {
            handleSend(currentMessage);
            setCurrentMessage(undefined);
        }
    }, [
        currentMessage
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_14__.useEffect)(()=>{
        if (window.innerWidth < 640) {
            setShowSidebar(false);
        }
    }, [
        selectedConversation
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_14__.useEffect)(()=>{
        if (apiKey) {
            fetchModels(apiKey);
        }
    }, [
        apiKey
    ]);
    // ON LOAD --------------------------------------------
    (0,react__WEBPACK_IMPORTED_MODULE_14__.useEffect)(()=>{
        const theme = localStorage.getItem("theme");
        if (theme) {
            setLightMode(theme);
        }
        const apiKey = localStorage.getItem("apiKey");
        if (serverSideApiKeyIsSet) {
            fetchModels("");
            setApiKey("");
            localStorage.removeItem("apiKey");
        } else if (apiKey) {
            setApiKey(apiKey);
            fetchModels(apiKey);
        }
        const pluginKeys = localStorage.getItem("pluginKeys");
        if (serverSidePluginKeysSet) {
            setPluginKeys([]);
            localStorage.removeItem("pluginKeys");
        } else if (pluginKeys) {
            setPluginKeys(JSON.parse(pluginKeys));
        }
        if (window.innerWidth < 640) {
            setShowSidebar(false);
        }
        const showChatbar = localStorage.getItem("showChatbar");
        if (showChatbar) {
            setShowSidebar(showChatbar === "true");
        }
        const showPromptbar = localStorage.getItem("showPromptbar");
        if (showPromptbar) {
            setShowPromptbar(showPromptbar === "true");
        }
        const folders = localStorage.getItem("folders");
        if (folders) {
            setFolders(JSON.parse(folders));
        }
        const prompts = localStorage.getItem("prompts");
        if (prompts) {
            setPrompts(JSON.parse(prompts));
        }
        const conversationHistory = localStorage.getItem("conversationHistory");
        if (conversationHistory) {
            const parsedConversationHistory = JSON.parse(conversationHistory);
            const cleanedConversationHistory = (0,_utils_app_clean__WEBPACK_IMPORTED_MODULE_7__/* .cleanConversationHistory */ .m)(parsedConversationHistory);
            setConversations(cleanedConversationHistory);
        }
        const selectedConversation = localStorage.getItem("selectedConversation");
        if (selectedConversation) {
            const parsedSelectedConversation = JSON.parse(selectedConversation);
            const cleanedSelectedConversation = (0,_utils_app_clean__WEBPACK_IMPORTED_MODULE_7__/* .cleanSelectedConversation */ .$)(parsedSelectedConversation);
            setSelectedConversation(cleanedSelectedConversation);
        } else {
            setSelectedConversation({
                id: (0,uuid__WEBPACK_IMPORTED_MODULE_16__.v4)(),
                name: "New conversation",
                messages: [],
                model: _types_openai__WEBPACK_IMPORTED_MODULE_5__/* .OpenAIModels */ .MU[defaultModelId],
                prompt: _utils_app_const__WEBPACK_IMPORTED_MODULE_8__/* .DEFAULT_SYSTEM_PROMPT */ .c,
                folderId: null
            });
        }
    }, [
        serverSideApiKeyIsSet
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_13___default()), {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                        children: "Chatbot UI"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "description",
                        content: "ChatGPT but better."
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "viewport",
                        content: "height=device-height ,width=device-width, initial-scale=1, user-scalable=no"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                        rel: "icon",
                        href: "/favicon.ico"
                    })
                ]
            }),
            selectedConversation && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("main", {
                className: `flex h-screen w-screen flex-col text-sm text-white dark:text-white ${lightMode}`,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "fixed top-0 w-full sm:hidden",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Mobile_Navbar__WEBPACK_IMPORTED_MODULE_3__/* .Navbar */ .w, {
                            selectedConversation: selectedConversation,
                            onNewConversation: handleNewConversation
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "flex h-full w-full pt-[48px] sm:pt-0",
                        children: [
                            showSidebar ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Chatbar_Chatbar__WEBPACK_IMPORTED_MODULE_2__/* .Chatbar */ .W, {
                                        loading: messageIsStreaming,
                                        conversations: conversations,
                                        lightMode: lightMode,
                                        selectedConversation: selectedConversation,
                                        apiKey: apiKey,
                                        pluginKeys: pluginKeys,
                                        folders: folders.filter((folder)=>folder.type === "chat"),
                                        onToggleLightMode: handleLightMode,
                                        onCreateFolder: (name)=>handleCreateFolder(name, "chat"),
                                        onDeleteFolder: handleDeleteFolder,
                                        onUpdateFolder: handleUpdateFolder,
                                        onNewConversation: handleNewConversation,
                                        onSelectConversation: handleSelectConversation,
                                        onDeleteConversation: handleDeleteConversation,
                                        onUpdateConversation: handleUpdateConversation,
                                        onApiKeyChange: handleApiKeyChange,
                                        onClearConversations: handleClearConversations,
                                        onExportConversations: handleExportData,
                                        onImportConversations: handleImportConversations,
                                        onPluginKeyChange: handlePluginKeyChange,
                                        onClearPluginKey: handleClearPluginKey
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                        className: "fixed top-5 left-[270px] z-50 h-7 w-7 hover:text-gray-400 dark:text-white dark:hover:text-gray-300 sm:top-0.5 sm:left-[270px] sm:h-8 sm:w-8 sm:text-neutral-700",
                                        onClick: handleToggleChatbar,
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_tabler_icons_react__WEBPACK_IMPORTED_MODULE_10__.IconArrowBarLeft, {})
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        onClick: handleToggleChatbar,
                                        className: "absolute top-0 left-0 z-10 h-full w-full bg-black opacity-70 sm:hidden"
                                    })
                                ]
                            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                className: "fixed top-2.5 left-4 z-50 h-7 w-7 text-white hover:text-gray-400 dark:text-white dark:hover:text-gray-300 sm:top-0.5 sm:left-4 sm:h-8 sm:w-8 sm:text-neutral-700",
                                onClick: handleToggleChatbar,
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_tabler_icons_react__WEBPACK_IMPORTED_MODULE_10__.IconArrowBarRight, {})
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "flex flex-1",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Chat_Chat__WEBPACK_IMPORTED_MODULE_1__/* .Chat */ .e, {
                                    conversation: selectedConversation,
                                    messageIsStreaming: messageIsStreaming,
                                    apiKey: apiKey,
                                    serverSideApiKeyIsSet: serverSideApiKeyIsSet,
                                    defaultModelId: defaultModelId,
                                    modelError: modelError,
                                    models: models,
                                    loading: loading,
                                    prompts: prompts,
                                    onSend: handleSend,
                                    onUpdateConversation: handleUpdateConversation,
                                    onEditMessage: handleEditMessage,
                                    stopConversationRef: stopConversationRef
                                })
                            }),
                            showPromptbar ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Promptbar_Promptbar__WEBPACK_IMPORTED_MODULE_4__/* .Promptbar */ .s, {
                                        prompts: prompts,
                                        folders: folders.filter((folder)=>folder.type === "prompt"),
                                        onCreatePrompt: handleCreatePrompt,
                                        onUpdatePrompt: handleUpdatePrompt,
                                        onDeletePrompt: handleDeletePrompt,
                                        onCreateFolder: (name)=>handleCreateFolder(name, "prompt"),
                                        onDeleteFolder: handleDeleteFolder,
                                        onUpdateFolder: handleUpdateFolder
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                        className: "fixed top-5 right-[270px] z-50 h-7 w-7 hover:text-gray-400 dark:text-white dark:hover:text-gray-300 sm:top-0.5 sm:right-[270px] sm:h-8 sm:w-8 sm:text-neutral-700",
                                        onClick: handleTogglePromptbar,
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_tabler_icons_react__WEBPACK_IMPORTED_MODULE_10__.IconArrowBarRight, {})
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        onClick: handleTogglePromptbar,
                                        className: "absolute top-0 left-0 z-10 h-full w-full bg-black opacity-70 sm:hidden"
                                    })
                                ]
                            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                className: "fixed top-2.5 right-4 z-50 h-7 w-7 text-white hover:text-gray-400 dark:text-white dark:hover:text-gray-300 sm:top-0.5 sm:right-4 sm:h-8 sm:w-8 sm:text-neutral-700",
                                onClick: handleTogglePromptbar,
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_tabler_icons_react__WEBPACK_IMPORTED_MODULE_10__.IconArrowBarLeft, {})
                            })
                        ]
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);
const getServerSideProps = async ({ locale  })=>{
    const defaultModelId = process.env.DEFAULT_MODEL && Object.values(_types_openai__WEBPACK_IMPORTED_MODULE_5__/* .OpenAIModelID */ .bm).includes(process.env.DEFAULT_MODEL) && process.env.DEFAULT_MODEL || _types_openai__WEBPACK_IMPORTED_MODULE_5__/* .fallbackModelID */ .tJ;
    let serverSidePluginKeysSet = false;
    const googleApiKey = process.env.GOOGLE_API_KEY;
    const googleCSEId = process.env.GOOGLE_CSE_ID;
    if (googleApiKey && googleCSEId) {
        serverSidePluginKeysSet = true;
    }
    return {
        props: {
            serverSideApiKeyIsSet: !!process.env.OPENAI_API_KEY,
            defaultModelId,
            serverSidePluginKeysSet,
            ...await (0,next_i18next_serverSideTranslations__WEBPACK_IMPORTED_MODULE_12__.serverSideTranslations)(locale ?? "en", [
                "common",
                "chat",
                "sidebar",
                "markdown",
                "promptbar"
            ])
        }
    };
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1910:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MU": () => (/* binding */ OpenAIModels),
/* harmony export */   "bm": () => (/* binding */ OpenAIModelID),
/* harmony export */   "tJ": () => (/* binding */ fallbackModelID)
/* harmony export */ });
var OpenAIModelID;
(function(OpenAIModelID) {
    OpenAIModelID["GPT_3_5"] = "gpt-3.5-turbo";
    OpenAIModelID["GPT_4"] = "gpt-4";
})(OpenAIModelID || (OpenAIModelID = {}));
// in case the `DEFAULT_MODEL` environment variable is not set or set to an unsupported model
const fallbackModelID = OpenAIModelID.GPT_3_5;
const OpenAIModels = {
    [OpenAIModelID.GPT_3_5]: {
        id: OpenAIModelID.GPT_3_5,
        name: "GPT-3.5",
        maxLength: 12000,
        tokenLimit: 4000
    },
    [OpenAIModelID.GPT_4]: {
        id: OpenAIModelID.GPT_4,
        name: "GPT-4",
        maxLength: 24000,
        tokenLimit: 8000
    }
};


/***/ }),

/***/ 2403:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PO": () => (/* binding */ PluginID),
/* harmony export */   "xN": () => (/* binding */ PluginList)
/* harmony export */ });
/* unused harmony exports PluginName, Plugins */
var PluginID;
(function(PluginID) {
    PluginID["GOOGLE_SEARCH"] = "google-search";
})(PluginID || (PluginID = {}));
var PluginName;
(function(PluginName) {
    PluginName["GOOGLE_SEARCH"] = "Google Search";
})(PluginName || (PluginName = {}));
const Plugins = {
    [PluginID.GOOGLE_SEARCH]: {
        id: PluginID.GOOGLE_SEARCH,
        name: PluginName.GOOGLE_SEARCH,
        requiredKeys: [
            {
                key: "GOOGLE_API_KEY",
                value: ""
            },
            {
                key: "GOOGLE_CSE_ID",
                value: ""
            }
        ]
    }
};
const PluginList = Object.values(Plugins);


/***/ }),

/***/ 7172:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "O": () => (/* binding */ getEndpoint)
/* harmony export */ });
/* harmony import */ var _types_plugin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2403);

const getEndpoint = (plugin)=>{
    if (!plugin) {
        return "api/chat";
    }
    if (plugin.id === _types_plugin__WEBPACK_IMPORTED_MODULE_0__/* .PluginID.GOOGLE_SEARCH */ .PO.GOOGLE_SEARCH) {
        return "api/google";
    }
    return "api/chat";
};


/***/ }),

/***/ 9913:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$": () => (/* binding */ cleanSelectedConversation),
/* harmony export */   "m": () => (/* binding */ cleanConversationHistory)
/* harmony export */ });
/* harmony import */ var _types_openai__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1910);
/* harmony import */ var _const__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4689);


const cleanSelectedConversation = (conversation)=>{
    // added model for each conversation (3/20/23)
    // added system prompt for each conversation (3/21/23)
    // added folders (3/23/23)
    // added prompts (3/26/23)
    let updatedConversation = conversation;
    // check for model on each conversation
    if (!updatedConversation.model) {
        updatedConversation = {
            ...updatedConversation,
            model: updatedConversation.model || _types_openai__WEBPACK_IMPORTED_MODULE_0__/* .OpenAIModels */ .MU[_types_openai__WEBPACK_IMPORTED_MODULE_0__/* .OpenAIModelID.GPT_3_5 */ .bm.GPT_3_5]
        };
    }
    // check for system prompt on each conversation
    if (!updatedConversation.prompt) {
        updatedConversation = {
            ...updatedConversation,
            prompt: updatedConversation.prompt || _const__WEBPACK_IMPORTED_MODULE_1__/* .DEFAULT_SYSTEM_PROMPT */ .c
        };
    }
    if (!updatedConversation.folderId) {
        updatedConversation = {
            ...updatedConversation,
            folderId: updatedConversation.folderId || null
        };
    }
    return updatedConversation;
};
const cleanConversationHistory = (history)=>{
    // added model for each conversation (3/20/23)
    // added system prompt for each conversation (3/21/23)
    // added folders (3/23/23)
    // added prompts (3/26/23)
    if (!Array.isArray(history)) {
        console.warn("history is not an array. Returning an empty array.");
        return [];
    }
    return history.reduce((acc, conversation)=>{
        try {
            if (!conversation.model) {
                conversation.model = _types_openai__WEBPACK_IMPORTED_MODULE_0__/* .OpenAIModels */ .MU[_types_openai__WEBPACK_IMPORTED_MODULE_0__/* .OpenAIModelID.GPT_3_5 */ .bm.GPT_3_5];
            }
            if (!conversation.prompt) {
                conversation.prompt = _const__WEBPACK_IMPORTED_MODULE_1__/* .DEFAULT_SYSTEM_PROMPT */ .c;
            }
            if (!conversation.folderId) {
                conversation.folderId = null;
            }
            acc.push(conversation);
            return acc;
        } catch (error) {
            console.warn(`error while cleaning conversations' history. Removing culprit`, error);
        }
        return acc;
    }, []);
};


/***/ }),

/***/ 4689:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "c": () => (/* binding */ DEFAULT_SYSTEM_PROMPT)
/* harmony export */ });
/* unused harmony export OPENAI_API_HOST */
const DEFAULT_SYSTEM_PROMPT = process.env.DEFAULT_SYSTEM_PROMPT || "You are ChatGPT, a large language model trained by OpenAI. Follow the user's instructions carefully. Respond using markdown.";
const OPENAI_API_HOST = process.env.OPENAI_API_HOST || "https://api.openai.com";


/***/ }),

/***/ 2716:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "X1": () => (/* binding */ updateConversation),
/* harmony export */   "fB": () => (/* binding */ saveConversations),
/* harmony export */   "m7": () => (/* binding */ saveConversation)
/* harmony export */ });
const updateConversation = (updatedConversation, allConversations)=>{
    const updatedConversations = allConversations.map((c)=>{
        if (c.id === updatedConversation.id) {
            return updatedConversation;
        }
        return c;
    });
    saveConversation(updatedConversation);
    saveConversations(updatedConversations);
    return {
        single: updatedConversation,
        all: updatedConversations
    };
};
const saveConversation = (conversation)=>{
    localStorage.setItem("selectedConversation", JSON.stringify(conversation));
};
const saveConversations = (conversations)=>{
    localStorage.setItem("conversationHistory", JSON.stringify(conversations));
};


/***/ }),

/***/ 6921:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "_": () => (/* binding */ saveFolders)
/* harmony export */ });
const saveFolders = (folders)=>{
    localStorage.setItem("folders", JSON.stringify(folders));
};


/***/ }),

/***/ 9120:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "dk": () => (/* binding */ importData),
/* harmony export */   "u1": () => (/* binding */ exportData)
/* harmony export */ });
/* unused harmony exports isExportFormatV1, isExportFormatV2, isExportFormatV3, isExportFormatV4, isLatestExportFormat, cleanData */
/* harmony import */ var _clean__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9913);

function isExportFormatV1(obj) {
    return Array.isArray(obj);
}
function isExportFormatV2(obj) {
    return !("version" in obj) && "folders" in obj && "history" in obj;
}
function isExportFormatV3(obj) {
    return obj.version === 3;
}
function isExportFormatV4(obj) {
    return obj.version === 4;
}
const isLatestExportFormat = (/* unused pure expression or super */ null && (isExportFormatV4));
function cleanData(data) {
    if (isExportFormatV1(data)) {
        return {
            version: 4,
            history: (0,_clean__WEBPACK_IMPORTED_MODULE_0__/* .cleanConversationHistory */ .m)(data),
            folders: [],
            prompts: []
        };
    }
    if (isExportFormatV2(data)) {
        return {
            version: 4,
            history: (0,_clean__WEBPACK_IMPORTED_MODULE_0__/* .cleanConversationHistory */ .m)(data.history || []),
            folders: (data.folders || []).map((chatFolder)=>({
                    id: chatFolder.id.toString(),
                    name: chatFolder.name,
                    type: "chat"
                })),
            prompts: []
        };
    }
    if (isExportFormatV3(data)) {
        return {
            ...data,
            version: 4,
            prompts: []
        };
    }
    if (isExportFormatV4(data)) {
        return data;
    }
    throw new Error("Unsupported data format");
}
function currentDate() {
    const date = new Date();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    return `${month}-${day}`;
}
const exportData = ()=>{
    let history = localStorage.getItem("conversationHistory");
    let folders = localStorage.getItem("folders");
    let prompts = localStorage.getItem("prompts");
    if (history) {
        history = JSON.parse(history);
    }
    if (folders) {
        folders = JSON.parse(folders);
    }
    if (prompts) {
        prompts = JSON.parse(prompts);
    }
    const data = {
        version: 4,
        history: history || [],
        folders: folders || [],
        prompts: prompts || []
    };
    const blob = new Blob([
        JSON.stringify(data, null, 2)
    ], {
        type: "application/json"
    });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.download = `chatbot_ui_history_${currentDate()}.json`;
    link.href = url;
    link.style.display = "none";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
};
const importData = (data)=>{
    const cleanedData = cleanData(data);
    const { history , folders , prompts  } = cleanedData;
    const conversations = history;
    localStorage.setItem("conversationHistory", JSON.stringify(conversations));
    localStorage.setItem("selectedConversation", JSON.stringify(conversations[conversations.length - 1]));
    localStorage.setItem("folders", JSON.stringify(folders));
    localStorage.setItem("prompts", JSON.stringify(prompts));
    return cleanedData;
};


/***/ }),

/***/ 6686:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "V": () => (/* binding */ savePrompts)
/* harmony export */ });
/* unused harmony export updatePrompt */
const updatePrompt = (updatedPrompt, allPrompts)=>{
    const updatedPrompts = allPrompts.map((c)=>{
        if (c.id === updatedPrompt.id) {
            return updatedPrompt;
        }
        return c;
    });
    savePrompts(updatedPrompts);
    return {
        single: updatedPrompt,
        all: updatedPrompts
    };
};
const savePrompts = (prompts)=>{
    localStorage.setItem("prompts", JSON.stringify(prompts));
};


/***/ }),

/***/ 1279:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "P": () => (/* binding */ throttle)
/* harmony export */ });
function throttle(func, limit) {
    let lastFunc;
    let lastRan;
    return (...args)=>{
        if (!lastRan) {
            func(...args);
            lastRan = Date.now();
        } else {
            clearTimeout(lastFunc);
            lastFunc = setTimeout(()=>{
                if (Date.now() - lastRan >= limit) {
                    func(...args);
                    lastRan = Date.now();
                }
            }, limit - (Date.now() - lastRan));
        }
    };
}


/***/ }),

/***/ 2236:
/***/ ((module) => {

module.exports = require("@tabler/icons-react");

/***/ }),

/***/ 1377:
/***/ ((module) => {

module.exports = require("next-i18next");

/***/ }),

/***/ 5460:
/***/ ((module) => {

module.exports = require("next-i18next/serverSideTranslations");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 6201:
/***/ ((module) => {

module.exports = import("react-hot-toast");;

/***/ }),

/***/ 7987:
/***/ ((module) => {

module.exports = import("react-i18next");;

/***/ }),

/***/ 3135:
/***/ ((module) => {

module.exports = import("react-markdown");;

/***/ }),

/***/ 700:
/***/ ((module) => {

module.exports = import("rehype-mathjax");;

/***/ }),

/***/ 6809:
/***/ ((module) => {

module.exports = import("remark-gfm");;

/***/ }),

/***/ 9832:
/***/ ((module) => {

module.exports = import("remark-math");;

/***/ }),

/***/ 6555:
/***/ ((module) => {

module.exports = import("uuid");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(2603));
module.exports = __webpack_exports__;

})();