(() => {
    const _0xd08fc2 = XMLHttpRequest.prototype.open;
    XMLHttpRequest.prototype.open = function (..._0x4eb551) {
        const _0x336e7f = this.send;
        const _0x2f54ee = this;
        this.send = function (..._0x433ca7) {
            _0x2f54ee.setRequestHeader("x-front-page", window.location.href);
            return _0x336e7f.apply(_0x2f54ee, _0x433ca7);
        };
        return _0xd08fc2.apply(this, _0x4eb551);
    };
    const _0xba4424 = new Proxy(WebSocket, {
        construct(_0x34501d, _0x5b622e, _0x4a08c5) {
            if (_0x5b622e[0x0].includes("?")) {
                _0x5b622e[0x0] += "&xfrontpage=" + encodeURIComponent(window.location.href);
            } else {
                _0x5b622e[0x0] += "?xfrontpage=" + encodeURIComponent(window.location.href);
            }
            return Reflect.construct(_0x34501d, _0x5b622e, _0x4a08c5);
        },
    });
    window.WebSocket = _0xba4424;
})();
(() => {
    let _0x4ee24e = XMLHttpRequest.prototype.open;
    function _0x276df2(_0x17d181) {
        var _0x32cea4 = new RegExp("(^|&)" + _0x17d181 + "=([^&]*)(&|$)", "i");
        var _0x22b917 = window.location.search.substr(0x1).match(_0x32cea4);
        if (_0x22b917 != null) {
            return unescape(_0x22b917[0x2]);
        }
        return null;
    }
    let _0x36185c = _0x276df2("hideWinMore");
    let _0x161717 = _0x276df2("hideBuyFeature");
    let _0x3ee051 = _0x276df2("showBuyFeature");
    let _0x375a24 = [
        "Node_Bar/BarNode_share",
        "BarNode/BarNode_share",
        "MainGame/BarNode/BarNode",
        "BarNode_new/BarNode_share",
        "MainView/Node_GameBar/BarNode_share",
    ];
    let _0x118c7d = 0x0;
    setInterval(() => {
        if (_0x118c7d == 0x0 || _0x118c7d == 0x1) {
            try {
                if (window?.["cc"]?.["director"]?.["_scene"]?.["children"][0x1] != null) {
                    var _0x3ccac1 = (_0x1ae956) => {
                        if (_0x1ae956 == null) {
                            return;
                        }
                        _0x375a24.forEach((_0x470685) => {
                            if (_0x1ae956.children[0x1].getChildByPath == null) {
                                _0x1ae956.children[0x1].getChildByPath = function (_0x238c0d) {
                                    let _0xcb71ee = _0x238c0d.split("/");
                                    let _0x924634 = this;
                                    for (let _0x5788cf = 0x1; _0x5788cf < _0xcb71ee.length && _0x924634 != null; _0x5788cf++) {
                                        _0x924634 = _0x924634.getChildByName(_0xcb71ee[_0x5788cf]);
                                        if (_0x5788cf == _0xcb71ee.length - 0x1) {
                                            return _0x924634;
                                        }
                                    }
                                    return null;
                                }.bind(_0x1ae956.children[0x1]);
                            }
                            if (_0x1ae956.children.length > 0x0 && _0x1ae956.children[0x1].getChildByPath(_0x470685) != null) {
                                try {
                                    _0x1ae956.children[0x1].getChildByPath(_0x470685 + "/floatView/Node_Bar/Bar_Body/Btn_Backpack").active = false;
                                    _0x118c7d = 0x1;
                                } catch (_0x5f27cd) {}
                                try {
                                    _0x1ae956.children[0x1].getChildByPath(
                                        _0x470685 + "/floatView/Node_Bar/Bar_Body/Frame_Setting/AnimNode/Btn/btn_history",
                                    ).active = false;
                                    _0x118c7d = 0x1;
                                } catch (_0x4c1d79) {}
                                try {
                                    _0x1ae956.children[0x1].getChildByPath(
                                        _0x470685 + "/floatView/Node_Bar/Bar_Body/Frame_Setting/AnimNode/Btn/btn_Giftcode",
                                    ).active = false;
                                    _0x118c7d = 0x1;
                                } catch (_0x438234) {}
                                try {
                                    _0x1ae956.children[0x1].getChildByPath(
                                        _0x470685 + "/floatView/BaseNode/IconBox_Side/BoxBg/PageView/View/Content/page1/Icon_Backpack",
                                    ).active = false;
                                    _0x118c7d = 0x1;
                                } catch (_0x199c23) {}
                                try {
                                    _0x1ae956.children[0x1].getChildByPath(
                                        _0x470685 + "/floatView/BaseNode/IconBox_Side/BoxBg/PageView/View/Content/page1/Icon_FreeSpin",
                                    ).active = false;
                                    _0x118c7d = 0x1;
                                } catch (_0x3a16e0) {}
                                try {
                                    _0x1ae956.children[0x1].getChildByPath(
                                        _0x470685 + "/floatView/BaseNode/IconBox_Side/BoxBg/PageView/View/Content/page1/Icon_Backpack",
                                    ).active = false;
                                    _0x118c7d = 0x1;
                                } catch (_0xe4b8b2) {}
                                try {
                                    _0x1ae956.children[0x1].getChildByPath(_0x470685 + "/floatView/Bar_Body/Data/Img_Level").active = false;
                                    _0x118c7d = 0x1;
                                } catch (_0x1750b4) {}
                                try {
                                    let _0x388f59 = _0x1ae956.children[0x1].getChildByPath(_0x470685 + "/WinMore/WinMore/Btn/Tags/Content_Btn");
                                    for (let _0x134ee5 = 0x0; _0x134ee5 < _0x388f59.children.length; _0x134ee5++) {
                                        _0x388f59.children[_0x134ee5].active = _0x134ee5 == _0x388f59.children.length - 0x1;
                                    }
                                } catch (_0x36f74c) {}
                                if (_0x36185c == "1") {
                                    try {
                                        _0x1ae956.children[0x1].getChildByPath(_0x470685 + "/floatView/BaseNode/WinMore_IconBtn").active = false;
                                    } catch (_0x4090ad) {}
                                    try {
                                        _0x1ae956.children[0x1].getChildByPath(
                                            _0x470685 + "/floatView/BaseNode/IconBox_Side/BoxBg/PageView/View/Content/page1/Icon_WinMore",
                                        ).active = false;
                                    } catch (_0x3c1455) {}
                                    try {
                                        _0x1ae956.children[0x1].getChildByPath(_0x470685 + "/WinMore").active = false;
                                        _0x1ae956.children[0x1].getChildByPath(_0x470685 + "/WinMore").setScale(0x0, 0x0);
                                    } catch (_0x154bbd) {}
                                }
                                if (_0x161717 == "1") {
                                    try {
                                        _0x1ae956.children[0x1].getChildByPath(_0x470685 + "/floatView/BaseNode/BuyBonus_IconBtn").active = false;
                                    } catch (_0x5664a8) {}
                                    try {
                                        _0x1ae956.children[0x1].getChildByPath(
                                            _0x470685 + "/floatView/BaseNode/IconBox_Side/BoxBg/PageView/View/Content/page1/Icon_WinMore",
                                        ).active = false;
                                    } catch (_0x5e07ee) {}
                                }
                                if (_0x3ee051 == "1") {
                                    try {
                                        _0x1ae956.children[0x1].getChildByPath(_0x470685 + "/floatView/BaseNode/BuyBonus_IconBtn").active = true;
                                    } catch (_0xaee2ef) {}
                                    try {
                                        _0x1ae956.children[0x1].getChildByPath(
                                            _0x470685 + "/floatView/BaseNode/IconBox_Side/BoxBg/PageView/View/Content/page1/Icon_WinMore",
                                        ).active = true;
                                    } catch (_0x5b3c18) {}
                                }
                            }
                        });
                    };
                    _0x3ccac1(window?.["cc"]?.["director"]?.["_scene"]);
                    window?.["cc"]?.["director"]?.["_scene"]?.["children"]["forEach"]((_0x113581) => {
                        _0x3ccac1(_0x113581);
                    });
                }
            } catch (_0x51dba3) {}
        }
        if (_0x118c7d == 0x0 || _0x118c7d == 0x2) {
            try {
                if (window?.["cc"]?.["director"]?.["_scene"]?.["children"][0x1] != null) {
                    var _0x3ccac1 = (_0x2ca505) => {
                        if (_0x2ca505 == null) {
                            return;
                        }
                        _0x375a24.forEach((_0x24b6ae) => {
                            if (_0x2ca505.children[0x1].getChildByPath == null) {
                                _0x2ca505.children[0x1].getChildByPath = function (_0x339479) {
                                    let _0x20ab26 = _0x339479.split("/");
                                    let _0x5818c6 = this;
                                    for (let _0x3b05e7 = 0x1; _0x3b05e7 < _0x20ab26.length && _0x5818c6 != null; _0x3b05e7++) {
                                        _0x5818c6 = _0x5818c6.getChildByName(_0x20ab26[_0x3b05e7]);
                                        if (_0x3b05e7 == _0x20ab26.length - 0x1) {
                                            return _0x5818c6;
                                        }
                                    }
                                    return null;
                                }.bind(_0x2ca505.children[0x1]);
                            }
                            if (_0x2ca505.children.length > 0x0 && _0x2ca505.children[0x0].getChildByPath(_0x24b6ae) != null) {
                                try {
                                    _0x2ca505.children[0x0].getChildByPath(_0x24b6ae + "/floatView/Node_Bar/Bar_Body/Btn_Backpack").active = false;
                                } catch (_0xdad3fa) {}
                                try {
                                    _0x2ca505.children[0x0].getChildByPath(
                                        _0x24b6ae + "/floatView/Node_Bar/Bar_Body/Frame_Setting/AnimNode/Btn/btn_history",
                                    ).active = false;
                                    _0x118c7d = 0x2;
                                } catch (_0x79bec2) {}
                                try {
                                    _0x2ca505.children[0x0].getChildByPath(
                                        _0x24b6ae + "/floatView/Node_Bar/Bar_Body/Frame_Setting/AnimNode/Btn/btn_Giftcode",
                                    ).active = false;
                                    _0x118c7d = 0x2;
                                } catch (_0x24a7e8) {}
                                try {
                                    _0x2ca505.children[0x0].getChildByPath(
                                        _0x24b6ae + "/floatView/BaseNode/IconBox_Side/BoxBg/PageView/View/Content/page1/Icon_Backpack",
                                    ).active = false;
                                    _0x118c7d = 0x2;
                                } catch (_0x3dd788) {}
                                try {
                                    _0x2ca505.children[0x0].getChildByPath(
                                        _0x24b6ae + "/floatView/BaseNode/IconBox_Side/BoxBg/PageView/View/Content/page1/Icon_FreeSpin",
                                    ).active = false;
                                } catch (_0x1f1c4f) {}
                                try {
                                    _0x2ca505.children[0x0].getChildByPath(
                                        _0x24b6ae + "/floatView/BaseNode/IconBox_Side/BoxBg/PageView/View/Content/page1/Icon_Backpack",
                                    ).active = false;
                                    _0x118c7d = 0x2;
                                } catch (_0x17baae) {}
                                try {
                                    _0x2ca505.children[0x0].getChildByPath(_0x24b6ae + "/floatView/Bar_Body/Data/Img_Level").active = false;
                                    _0x118c7d = 0x2;
                                } catch (_0x46568c) {}
                                try {
                                    let _0x185cdf = _0x2ca505.children[0x0].getChildByPath(_0x24b6ae + "/WinMore/WinMore/Btn/Tags/Content_Btn");
                                    for (let _0x37b6b1 = 0x0; _0x37b6b1 < _0x185cdf.children.length; _0x37b6b1++) {
                                        _0x185cdf.children[_0x37b6b1].active = _0x37b6b1 == _0x185cdf.children.length - 0x1;
                                    }
                                    _0x118c7d = 0x2;
                                } catch (_0x596aa8) {}
                                if (_0x36185c == "1") {
                                    try {
                                        _0x2ca505.children[0x0].getChildByPath(_0x24b6ae + "/floatView/BaseNode/WinMore_IconBtn").active = false;
                                    } catch (_0x3727be) {}
                                    try {
                                        _0x2ca505.children[0x0].getChildByPath(
                                            _0x24b6ae + "/floatView/BaseNode/IconBox_Side/BoxBg/PageView/View/Content/page1/Icon_WinMore",
                                        ).active = false;
                                    } catch (_0x12e1ac) {}
                                    try {
                                        _0x2ca505.children[0x0].getChildByPath(_0x24b6ae + "/WinMore").active = false;
                                        _0x2ca505.children[0x0].getChildByPath(_0x24b6ae + "/WinMore").setScale(0x0, 0x0);
                                    } catch (_0x4f7ab4) {}
                                }
                                if (_0x161717 == "1") {
                                    try {
                                        _0x2ca505.children[0x0].getChildByPath(_0x24b6ae + "/floatView/BaseNode/BuyBonus_IconBtn").active = false;
                                    } catch (_0xc1cc63) {}
                                    try {
                                        _0x2ca505.children[0x0].getChildByPath(
                                            _0x24b6ae + "/floatView/BaseNode/IconBox_Side/BoxBg/PageView/View/Content/page1/Icon_WinMore",
                                        ).active = false;
                                    } catch (_0xd2ce8a) {}
                                }
                                if (_0x3ee051 == "1") {
                                    try {
                                        _0x2ca505.children[0x0].getChildByPath(_0x24b6ae + "/floatView/BaseNode/BuyBonus_IconBtn").active = true;
                                    } catch (_0x23e163) {}
                                    try {
                                        _0x2ca505.children[0x0].getChildByPath(
                                            _0x24b6ae + "/floatView/BaseNode/IconBox_Side/BoxBg/PageView/View/Content/page1/Icon_WinMore",
                                        ).active = true;
                                    } catch (_0x4e2107) {}
                                }
                            }
                        });
                    };
                    _0x3ccac1(window?.["cc"]?.["director"]?.["_scene"]);
                    window?.["cc"]?.["director"]?.["_scene"]?.["children"]["forEach"]((_0x1c4f03) => {
                        _0x3ccac1(_0x1c4f03);
                    });
                }
            } catch (_0x573c63) {}
        }
    }, 0x3e8);
    window.addEventListener(
        "message",
        function (_0x5a1f4e) {
            if (_0x5a1f4e.data == "JILI_GAME_CloseWebView") {
                var _0x46716a = (_0xd98f15) => {
                    if (_0xd98f15 == null) {
                        return;
                    }
                    _0x375a24.forEach((_0xa4b958) => {
                        try {
                            if (_0xd98f15.children[0x0].getChildByPath(_0xa4b958) != null) {
                                _0xd98f15.children[0x0].getChildByPath(_0xa4b958 + "/webview").active = false;
                            }
                        } catch (_0x1de3e0) {}
                        try {
                            if (_0xd98f15.children[0x1].getChildByPath(_0xa4b958) != null) {
                                _0xd98f15.children[0x1].getChildByPath(_0xa4b958 + "/webview").active = false;
                            }
                        } catch (_0x366bbc) {}
                    });
                };
                _0x46716a(window?.["cc"]?.["director"]?.["_scene"]);
                window?.["cc"]?.["director"]?.["_scene"]?.["children"]["forEach"]((_0x49c789) => _0x46716a(_0x49c789));
            }
        },
        false,
    );
    const _0x57c3b3 = window.location.pathname.split("/")[0x1].replaceAll("mpt_ori", "mpt").replaceAll("psd_ori", "psd");
    var _0x5e9902 = _0x276df2("be").split("").reverse().join("");
    const _0x49c406 = (_0x4d28d6, _0x2c3754) => {
        if (typeof _0x4d28d6 != "string") {
            return _0x4d28d6;
        }
        _0x4d28d6 = _0x4d28d6.replace("htt/", "/");
        if (
            _0x4d28d6.indexOf("wss://") >= 0x0 ||
            _0x4d28d6.indexOf("api.") > 0x0 ||
            _0x4d28d6.indexOf("api_v2.") > 0x0 ||
            _0x4d28d6.indexOf(_0x57c3b3 + "/req") != -0x1 ||
            _0x4d28d6.endsWith(_0x57c3b3 + "/")
        ) {
            _0x4d28d6 = _0x4d28d6.replaceAll(/\/\/[^/]*/g, "//" + _0x5e9902);
        }
        if (_0x4d28d6.indexOf("sso-login.api") > 0x0) {
            _0x4d28d6 = _0x4d28d6 + ("?gameId=" + _0x276df2("gameId"));
        }
        _0x4d28d6 = _0x4d28d6.replace("htt/", window.location.origin);
        return _0x4d28d6;
    };
    var _0x3e5b57 = new Proxy(WebSocket, {
        construct: function (_0x2d1ee2, _0xadf19e, _0x4e58dd) {
            _0xadf19e[0x0] = _0x49c406(_0xadf19e[0x0]);
            var _0x279aad = Reflect.construct(_0x2d1ee2, _0xadf19e, _0x4e58dd);
            return _0x279aad;
        },
        apply: function (_0x2cc1e7, _0x45b7ff, _0x441386) {
            return _0x2cc1e7.apply(_0x45b7ff, _0x441386);
        },
    });
    window.WebSocket = _0x3e5b57;
    var _0x57dc70 = [
        "event/trigger",
        "webservice/event/error",
        "subagentservice/MakeUserSubAgent",
        "vipservice/VIPGet",
        "promotionservice/OnLoginV3",
        "user/GetMailList",
        "favoriteservice/OnLogin",
        "rankingservice/user/GetMailList",
        "smartnotice/notice/getReq",
        "mc/item/ItemListProto",
        "mc/item/GetMailProto",
        "mc/item/AllGameItemListProto",
        "longhu/GetLonghuListV2",
        "mc/unionjp/JPInfoProto",
        "mc/unionjp/JPInfoAllProto",
        "mc/fulljp/JPInfoAllProto",
        "mc/mission/GetDailyMissionProto",
        "smallicon/23r9jg032g34n0094.json",
        "webservice/event/loading",
    ];
    XMLHttpRequest.prototype.open = function (..._0x52c8bd) {
        let _0x212986 = this.send;
        let _0x2c4089 = this;
        let _0x100d39 = [];
        _0x52c8bd[0x1] = _0x49c406(_0x52c8bd[0x1]);
        if (_0x52c8bd[0x1].indexOf("/assetUpdate") >= 0x0) {
            return;
        }
        if (_0x52c8bd[0x1].indexOf("/fullhouse3") >= 0x0) {
            _0x52c8bd[0x1] = _0x52c8bd[0x1].replace("https://", `${window.location.protocol}//`);
        }

        this.send = function (..._0x37d1e8) {
            _0x100d39 = _0x37d1e8;
            return _0x212986.apply(_0x2c4089, _0x37d1e8);
        };
        if (_0x52c8bd[0x1].indexOf("setting") == -0x1 && /smallicon\/[a-zA-Z0-9_-]+\.json/.test(_0x52c8bd[0x1])) {
            return;
        }
        for (let _0x17c317 = 0x0; _0x17c317 < _0x57dc70.length; _0x17c317++) {
            if (_0x52c8bd[0x1].indexOf(_0x57dc70[_0x17c317]) > 0x0) {
                this.readyState = 0x4;
                this.response = this.responseText = "{}";
                this.status = 0xc8;
                this.statusText = "OK";
                this.setRequestHeader = () => {};
                this.send = () => {};
                setTimeout(() => {
                    if (this.onreadystatechange) {
                        this.onreadystatechange();
                    }
                }, 0.001);
                return;
            }
        }
        return _0x4ee24e.apply(this, _0x52c8bd);
    };

    // let copyData = async (data) => {
    //     const cloneRes = data.clone();

    //     try {
    //         const buffer = await cloneRes.arrayBuffer();
    //         const bytes = new Uint8Array(buffer);
    //         let binary = "";
    //         bytes.forEach((b) => (binary += String.fromCharCode(b)));

    //         console.log(`%c[Fetch 拦截] URL: ${data.url}`, "color: #00ff00; font-weight: bold;");
    //         console.log("长度(Bytes):", bytes.length);
    //         console.log("Base64数据:", btoa(binary));
    //     } catch (e) {
    //         console.error("拦截打印失败:", e);
    //     }
    // };

    const _0x20cfe5 = window.fetch;
    window.fetch = async (_0x5e0511, _0x130dfd) => {
        const _0x53734b = typeof _0x5e0511 === "string" ? _0x5e0511 : _0x5e0511.url;
        let _0x125b1f = _0x49c406(_0x53734b);
        let _0x2efb4d = _0x130dfd || {};

        if (_0x125b1f && _0x125b1f.indexOf(".astc") > -1) {
            console.log("==========astcastcastc=============================astcastcastc=====================");
            _0x125b1f = _0x125b1f.replace(/\.astc(\?|$)/, ".webp$1");
            return _0x20cfe5(_0x125b1f, _0x2efb4d)
                .then((_0x28cf90) => {
                    return _0x28cf90;
                })
                ["catch"]((_0xcf04c2) => {
                    return _0xcf04c2;
                });
        }

        const _0xb61895 = _0x5e0511.body && typeof _0x5e0511.body.getReader === "function" ? await new Response(_0x5e0511.body).blob() : _0x5e0511.body;
        if (_0x5e0511 instanceof Request) {
            // let aa = _0x20cfe5.toString()
            // let bb = window.__wbg_fetch_b7bf320f681242d2.toString()

            _0x125b1f = _0x125b1f.replace("https://", `${window.location.protocol}//`);
            const _0x36b051 = new Headers(_0x5e0511.headers || {});
            _0x36b051.set("x-front-page", window.location.href);
            _0x2efb4d = {
                method: _0x5e0511.method,
                headers: _0x36b051,
                body: _0xb61895,
                credentials: _0x5e0511.credentials,
                mode: _0x5e0511.mode,
                cache: _0x5e0511.cache,
                redirect: _0x5e0511.redirect,
                referrer: _0x5e0511.referrer,
                duplex: "half",
            };

            // console.log("==fecth--Request=url="+_0x125b1f)
            // console.trace("==fecth--Request==")
        }
        const _0x6bdb28 = _0x2efb4d.headers?.["get"]("Content-Type");
        const _0xb33212 = _0x6bdb28?.["includes"]("application/x-www-form-urlencoded");
        if (_0xb33212 && _0x2efb4d.body) {
            const _0x466a19 = new URLSearchParams(_0x2efb4d.body);
            _0x466a19.append("gameId", _0x276df2("gameId"));
            _0x466a19.append("ssoKey", _0x276df2("ssoKey"));
            _0x466a19.append("ssoSess", btoa(btoa(btoa(Date.now() + ""))));
            _0x2efb4d.body = _0x466a19.toString();
            _0x2efb4d.headers.set("Content-Type", "application/x-www-form-urlencoded");
        }
        const _0x2c14a0 = _0x5e0511 instanceof Request ? new Request(_0x125b1f, _0x2efb4d) : undefined;
        return _0x20cfe5(_0x2c14a0 || _0x125b1f, _0x2efb4d)
            .then((_0x28cf90) => {
                if (_0x2c14a0 instanceof Request) {
                    console.log("==fecth--Request=url=" + _0x125b1f);
                    // console.trace("==fecth--Request==")
                    // copyData(_0x28cf90);
                }

                return _0x28cf90;
            })
            ["catch"]((_0xcf04c2) => {
                return _0xcf04c2;
            });
    };

    var _0x392f7c = Object.getOwnPropertyDescriptor(HTMLImageElement.prototype, "src");
    Object.defineProperty(HTMLImageElement.prototype, "src", {
        set: function (_0x38f9ff) {
            if (_0x38f9ff.indexOf("htt/") >= 0x0) {
                _0x38f9ff = _0x38f9ff.substr(_0x38f9ff.indexOf("htt/") + 0x3);
            }
            var _0x3a0336 = _0x392f7c.set.apply(this, arguments);
            this.setAttribute("data-original-src", _0x38f9ff);
            _0x392f7c.set.call(this, _0x38f9ff);
            return _0x3a0336;
        },
    });
    var _0x9d3c4a = Object.getOwnPropertyDescriptor(HTMLIFrameElement.prototype, "src");
    const _0x5f45fd = new URL(window.location.href);
    const _0x1536f8 = _0x5f45fd.searchParams.has("ssoKey");
    const _0x3c78dc = _0x5f45fd.searchParams.get("ssoKey").includes("open");
    const _0x167179 = (_0x1eddbb) => {
        if (_0x1536f8 && _0x3c78dc) {
            _0x1eddbb = _0x1eddbb.replaceAll(/\/\/[^/]*/g, "//intro-" + window.location.hostname);
        } else {
            _0x1eddbb = _0x1eddbb.replaceAll(/\/\/[^/]*/g, "//intro_" + window.location.hostname);
        }
        return _0x1eddbb;
    };
    Object.defineProperty(HTMLIFrameElement.prototype, "src", {
        set: function (_0x1ab1f1) {
            if (_0x1ab1f1.indexOf("sso-login.api") > 0x0) {
                _0x1ab1f1 = _0x1ab1f1 + "&" + "gameId=" + _0x5f45fd.searchParams.get("gameId");
            }
            if (_0x1ab1f1.indexOf("/intro?") >= 0x0 || _0x1ab1f1.indexOf("/intro/") >= 0x0) {
                _0x1ab1f1 = _0x167179(_0x1ab1f1);
                _0x1ab1f1 = _0x1ab1f1 + "&xfrontpage=" + encodeURIComponent(window.location.href);
            }
            var _0x19fc81 = _0x9d3c4a.set.apply(this, arguments);
            this.setAttribute("data-original-src", _0x1ab1f1);
            _0x9d3c4a.set.call(this, _0x1ab1f1);
            return _0x19fc81;
        },
    });
})();
(function () {
    const _0x457c86 = [
        "requestFullscreen",
        "exitFullscreen",
        "fullscreenElement",
        "fullscreenEnabled",
        "fullscreenchange",
        "fullscreenerror",
        "webkitRequestFullscreen",
        "webkitExitFullscreen",
        "webkitFullscreenElement",
        "webkitFullscreenEnabled",
        "webkitfullscreenchange",
        "webkitfullscreenerror",
        "webkitRequestFullScreen",
        "webkitCancelFullScreen",
        "webkitCurrentFullScreenElement",
        "webkitCancelFullScreen",
        "webkitfullscreenchange",
        "webkitfullscreenerror",
        "mozRequestFullScreen",
        "mozCancelFullScreen",
        "mozFullScreenElement",
        "mozFullScreenEnabled",
        "mozfullscreenchange",
        "mozfullscreenerror",
        "msRequestFullscreen",
        "msExitFullscreen",
        "msFullscreenElement",
        "msFullscreenEnabled",
        "MSFullscreenChange",
        "MSFullscreenError",
    ];
    _0x457c86.forEach((_0x36d7cd) => {
        if (_0x36d7cd in Element.prototype) {
            Object.defineProperty(Element.prototype, _0x36d7cd, {
                value: function () {
                    return Promise.reject();
                },
            });
        }
    });
})();
(() => {
    var _0x2b6126 = window.Date;
    var _0x174c9e = _0x2b6126.now;
    _0x2b6126.now = () => {
        if (window.location.NAKXKSDS == null) {
            window.location.NAKXKSDS = 0x197f6c82000;
        }
        return window.location.NAKXKSDS + (_0x174c9e() % 0x337f9800);
    };
    _0x2b6126.now.toString = () => {
        return "function Date() { [native code] }";
    };
    var _0x254faf = new Proxy(_0x2b6126, {
        construct: function (_0x57143a, _0xa62bef, _0x4581c9) {
            if (_0xa62bef.length == 0x0) {
                _0xa62bef[0x0] = _0x2b6126.now();
            }
            var _0x2c793f = Reflect.construct(_0x57143a, _0xa62bef, _0x4581c9);
            _0x2c793f.i = _0xa62bef;
            return _0x2c793f;
        },
        apply: function (_0x57da57, _0x3977ed, _0x35eddf) {
            return _0x57da57.apply(_0x3977ed, _0x35eddf);
        },
    });
    var _0x88024 = ["now", "length", "name", "parse", "UTC"];
    for (var _0x1c57f0 = 0x0; _0x1c57f0 < _0x88024.length; _0x1c57f0++) {
        var _0x3991b0 = _0x88024[_0x1c57f0];
        _0x254faf[_0x3991b0] = _0x2b6126[_0x3991b0];
    }
    _0x254faf.toString = () => {
        return "function Date() { [native code] }";
    };
    window.Date = _0x254faf;
})();
localStorage.clear();

/////////////////////
///拦截外层msg结构
(function () {
    // 捕获所有 Wasm 传给 JS 的文本数据（绝大多数解密后的 JSON 或 Token 都会走这里）
    const originalTextDecoder = window.TextDecoder && window.TextDecoder.prototype.decode;
    if (originalTextDecoder) {
        window.TextDecoder.prototype.decode = function (...args) {
            const result = originalTextDecoder.apply(this, args);

            if (result.length > 0) {
                if (result.indexOf("error_msg") != -1) {
                    // let jsonRes = JSON.parse(result);
                    console.log(`==TextDecoder=jsonRes==:\r\n ${result}`);
                }
            }

            return result;
        };
    }

    console.log("【高阶监控已就绪】请正常在网页上点击操作，等待解密明文现身...");
})();

///拦截内层data解析
(function () {
    let originalDecode = null;

    // 1. 动态寻找并劫持 Object 原型链上的 decode 函数
    Object.defineProperty(Object.prototype, "decode", {
        set: function (fn) {
            // 如果传入的是一个函数，且还没被我们劫持过
            if (typeof fn === "function" && !fn.__isHooked__) {
                const typeName = this.name || this.displayName || "UnknownProto";

                // 重写真正的 decode 逻辑
                const hookedFn = function (reader, length) {
                    // 执行原本的官方原生反序列化逻辑，拿到结果对象
                    const result = fn.apply(this, arguments);

                    try {
                        // 2. 核心打印逻辑
                        console.log(`%c[Protobuf 拦截成功] ➔ 结构名: ${typeName}`, "color: #00ff00; font-weight: bold; font-size: 12px;");

                        // 尝试转为纯净的 JSON 树结构打印，防止混淆的原生对象带有复杂原型
                        if (result && typeof result.toJSON === "function") {
                            // console.log("明文 JSON 数据:", result.toJSON());
                            console.log("明文 JSON 数据:", result.toJSON());
                        } else {
                            console.log("明文明细对象:", JSON.parse(JSON.stringify(result)));
                        }
                    } catch (e) {
                        // 容错处理：防止个别内部系统包转 JSON 失败导致游戏卡死
                        console.log("明文对象(解析异常):", result);
                    }

                    return result;
                };

                // 标记该函数已被劫持，防止死循环
                fn.__isHooked__ = true;
                this._decode = hookedFn;
            } else {
                this._decode = fn;
            }
        },
        get: function () {
            return this._decode;
        },
        configurable: true,
    });

    console.log("%c=====================================================", "color: #00ffff;");
    console.log("%c🚀 [全自动通信破译网已布下] 接下来所有的 decode 接口都会在下方自动打印明文！", "color: #00ffff; font-weight: bold;");
    console.log("%c=====================================================", "color: #00ffff;");
})();

///////////////////////////////////////
// (function() {
//   // 保存原始方法
//   window.__cr_fun = window.Function;
//   // 重写 function
//   var myfun = function() {
//       var args = Array.prototype.slice.call(arguments, 0, -1).join(","),
//           src = arguments[arguments.length - 1];
//       console.log(src);
//       console.log("=============== Function end ===============");
//       debugger;
//       return window.__cr_fun.apply(this, arguments);
//   }
//   // 屏蔽js中对原生函数native属性的检测
//   myfun.toString = function() {
//       return window.__cr_fun + ""
//   }
//   Object.defineProperty(window, 'Function', {
//       value: myfun
//   });
// })();

/////////////////////////////////////////////////////////////
// //拦截数据脚本
// (function () {
//     if (window.fetch) {
//         console.log("window.fetch..." + window.fetch);
//     } else {
//         console.log("window.fetch.000000..");
//     }

//     const originalFetch = window.fetch;
//     window.fetch = function (...args) {
//         return originalFetch.apply(this, args).then(async (response) => {
//             // 过滤你关心的接口 URL 关键词
//             if (response && response.url.includes("/req")) {
//                 const cloneRes = response.clone();

//                 try {
//                     const buffer = await cloneRes.arrayBuffer();
//                     const bytes = new Uint8Array(buffer);
//                     let binary = "";
//                     bytes.forEach((b) => (binary += String.fromCharCode(b)));

//                     console.log(`%c[Fetch 拦截] URL: ${response.url}`, "color: #00ff00; font-weight: bold;");
//                     console.log("长度(Bytes):", bytes.length);
//                     console.log("Base64数据:", btoa(binary));
//                 } catch (e) {
//                     console.error("拦截打印失败:", e);
//                 }
//             }

//             return response;
//         });
//     };
//     console.log("拦截下载脚本已就绪，等待目标请求触发...");
// })();

///////////////////////////////////////////////////
//   (function() {
//     // 1. 备份原生的 fetch [native code]
//     const originalFetch = window.fetch;

//     // 工具函数：利用 Base64 解码并计算并验证 Protobuf 长度
//     function fixProtobufData(arrayBuffer) {
//         const view = new Uint8Array(arrayBuffer);

//         // 检查是否符合你提供的数据特征 (前四个字节通常是 08 01/02 10 00, 第五个字节是 2a)
//         if (view.length > 5 && view[0] === 0x08 && view[2] === 0x10 && view[4] === 0x2a) {
//             console.log("%c[ProtoHook] 检测到目标 Protobuf 数据流，正在计算合法长度...", "color: #00ff00");

//             let lengthFieldStartIndex = 5;
//             let declaredLength = 0;
//             let shift = 0;

//             // 解析 Varint32 格式的长度声明
//             while (lengthFieldStartIndex < view.length) {
//                 let byte = view[lengthFieldStartIndex];
//                 declaredLength |= (byte & 0x7F) << shift;
//                 lengthFieldStartIndex++;
//                 if ((byte & 0x80) === 0) break;
//             }

//             // 计算后面实际剩余的字节数
//             const actualRemainingLength = view.length - lengthFieldStartIndex;

//             console.log(`[ProtoHook] 声明长度: ${declaredLength} 字节, 实际剩余: ${actualRemainingLength} 字节`);

//             // 如果发现被截断（声明的长度大于实际拥有的长度）
//             if (declaredLength > actualRemainingLength) {
//                 console.warn(`[ProtoHook] 数据不完整！正在强行将声明长度由 ${declaredLength} 修正为 ${actualRemainingLength}`);

//                 // 重新生成符合实际长度的 Varint 字节
//                 let newLength = actualRemainingLength;
//                 let varintBytes = [];
//                 while (newLength > 0x7F) {
//                     varintBytes.push((newLength & 0x7F) | 0x80);
//                     newLength >>>= 7;
//                 }
//                 varintBytes.push(newLength & 0x7F);

//                 // 组装修正后的新 Uint8Array
//                 const headerPart = view.slice(0, 5); // 08 xx 10 00 2a
//                 const dataPart = view.slice(lengthFieldStartIndex); // 实际的数据体

//                 const newBuffer = new Uint8Array(headerPart.length + varintBytes.length + dataPart.length);
//                 newBuffer.set(headerPart, 0);
//                 newBuffer.set(varintBytes, headerPart.length);
//                 newBuffer.set(dataPart, headerPart.length + varintBytes.length);

//                 return newBuffer.buffer;
//             } else {
//                 console.log("[ProtoHook] 长度校验通过，无需修改。");
//             }
//         }
//         return arrayBuffer;
//     }

//     // 2. 重写全局 fetch
//     window.fetch = function(...args) {
//         return originalFetch.apply(this, args).then(async (response) => {
//             // 如果响应不是成功的，或者不是我们要拦截的类型，直接放行
//             if (!response.ok) return response;

//             // 克隆响应，防止读取流冲突
//             const clonedResponse = response.clone();

//             try {
//                 // 拿到原始返回的二进制数据
//                 const originalBuffer = await clonedResponse.arrayBuffer();

//                 // 执行自动化长度修补
//                 const fixedBuffer = fixProtobufData(originalBuffer);

//                 // 构建全新的 Response 对象返回给网页/Wasm
//                 return new Response(fixedBuffer, {
//                     status: response.status,
//                     statusText: response.statusText,
//                     headers: response.headers
//                 });
//             } catch (err) {
//                 console.error("[ProtoHook] 拦截修补失败，放行原始数据:", err);
//                 return response;
//             }
//         });
//     };

//     console.log("%c[ProtoHook] 自动修补脚本已成功注入！正在监听网络请求...", "color: #1e90ff");
// })();
// const originalWasmMethod = window.__wbindgen_export_5; // 替换为实际的胶水函数名
// window.__wbindgen_export_5 = function(arg0, arg1) {
//     console.log("=== 捕获到传入 Wasm 的完整数据 ===");
//     // 通常可以通过 Wasm 的内存视图（如 WASM_MEMORY.buffer）把完整的 Uint8Array 提取出来出来
//     return originalWasmMethod.apply(this, arguments);
// };

//////////////////////////////
///////////////////////////////////////////////////////////
/////////////////////////////////////////////////////
////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////

// (function () {
//     let capturedProto = null;

//     // 劫持所有对象上的 'GaiaResponse' 属性
//     // 只要游戏底层一初始化这个解析器，就会触发我们的 set 陷阱
//     Object.defineProperty(Object.prototype, "GaiaResponse", {
//         set: function (value) {
//             // this 就是那个隐藏的 _0x34c5dd 或者 _0x385c4b 协议大字典！
//             if (this && !capturedProto) {
//                 capturedProto = this;
//                 window.REAL_PROTO = this; // 成功引渡到全局 window

//                 console.log("%c========================================", "color: #00ff00; font-weight: bold;");
//                 console.log("%c🎉 【全自动拦截器报捷！】已成功捕获真正的 Protobuf 协议大字典！", "color: #00ff00; font-weight: bold;");
//                 console.log("你现在可以直接在控制台使用 window.REAL_PROTO 破译任何二进制流了。");
//                 console.log("包含的解析器：", Object.keys(this));
//                 console.log("%c========================================", "color: #00ff00; font-weight: bold;");
//             }
//             this._GaiaResponse = value; // 保证游戏原本的逻辑不受影响，不崩溃
//         },
//         get: function () {
//             return this._GaiaResponse;
//         },
//         configurable: true,
//     });

//     console.log("🎯 全自动协议拦截网已布下，请开始刷新页面或开始游戏...");
// })();

// (function () {
//     // 捕获所有 Wasm 传给 JS 的文本数据（绝大多数解密后的 JSON 或 Token 都会走这里）
//     const originalTextDecoder = window.TextDecoder && window.TextDecoder.prototype.decode;
//     if (originalTextDecoder) {
//         window.TextDecoder.prototype.decode = function (...args) {
//             const result = originalTextDecoder.apply(this, args);

//             if (result.length > 0) {
//                 if (result.indexOf("error_msg") != -1) {
//                     let jsonRes = JSON.parse(result);
//                     // //////////
//                     //if (jsonRes.data && jsonRes.data.length > 0) {
//                     // if (jsonRes.data) {
//                     //     console.log(`==args==: ${args}`);
//                     //     console.log(`==jsonRes.data==: ${jsonRes.data}`);

//                     //     let ddd = window.REAL_PROTO(jsonRes.data);
//                     //     // let jsonData = originalTextDecoder.apply(this, jsonRes.data);
//                     //     console.log(ddd);
//                     //     console.log(`==result==: ${result}`);
//                     // }
//                     console.log(`==result==: ${result}`);
//                 }

//                 /////////////////////
//             }

//             return result;
//         };
//     }

//     // 捕获所有 wasm-bindgen 放入堆内存中的 JS 对象
//     // 在底层，Wasm 把处理好的数据转成 JS 对象时，通常会调用这个自动生成的胶水方法
//     const targetKeys = Object.keys(window).filter((k) => k.startsWith("__wbg_"));
//     targetKeys.forEach((key) => {
//         // 如果能找到名为 __wbg_set_xxx 或类似于对象转换的函数，可以对它们进行拦截
//         // 注意：这里的具体函数名需要根据你第一问中看到的 js 胶水文件来定
//     });

//     console.log("【高阶监控已就绪】请正常在网页上点击操作，等待解密明文现身...");
// })();

// //拦截fetch数据
// (function () {
//     if (window.fetch) {
//         console.log("window.fetch..." + window.fetch);
//     } else {
//         console.log("window.fetch.000000..");
//     }

//     const originalFetch = window.fetch;
//     window.fetch = function (...args) {
//         return originalFetch.apply(this, args).then(async (response) => {
//             // 过滤你关心的接口 URL 关键词
//             if (response && response.url.includes("/req")) {
//                 const cloneRes = response.clone();

//                 try {
//                     const buffer = await cloneRes.arrayBuffer();
//                     const bytes = new Uint8Array(buffer);
//                     let binary = "";
//                     bytes.forEach((b) => (binary += String.fromCharCode(b)));

//                     console.log(`%c[Fetch 拦截] URL: ${response.url}`, "color: #00ff00; font-weight: bold;");
//                     console.log("长度(Bytes):", bytes.length);
//                     console.log("Base64数据:", btoa(binary));
//                 } catch (e) {
//                     console.error("拦截打印失败:", e);
//                 }
//             }

//             return response;
//         });
//     };
//     console.log("拦截下载脚本已就绪，等待目标请求触发...");
// })();
// //捕获解析后的JSON
// (function () {
//     // 捕获所有 Wasm 传给 JS 的文本数据（绝大多数解密后的 JSON 或 Token 都会走这里）
//     const originalTextDecoder = window.TextDecoder && window.TextDecoder.prototype.decode;
//     if (originalTextDecoder) {
//         window.TextDecoder.prototype.decode = function (...args) {
//             const result = originalTextDecoder.apply(this, args);
//             if (result.type != null || result.error_msg != null || result.ret != null || result.data != null) {
//                 console.log("=result=" + result);
//             } else if (result.length < 500) {
//                 console.log("=result1000=" + result);
//             }

//             return result;
//         };
//     }

//     // 捕获所有 wasm-bindgen 放入堆内存中的 JS 对象
//     // 在底层，Wasm 把处理好的数据转成 JS 对象时，通常会调用这个自动生成的胶水方法
//     const targetKeys = Object.keys(window).filter((k) => k.startsWith("__wbg_"));
//     targetKeys.forEach((key) => {
//         // 如果能找到名为 __wbg_set_xxx 或类似于对象转换的函数，可以对它们进行拦截
//         // 注意：这里的具体函数名需要根据你第一问中看到的 js 胶水文件来定
//     });

//     console.log("【高阶监控已就绪】请正常在网页上点击操作，等待解密明文现身...");
// })();
// (function () {
//     // 捕获所有 Wasm 传给 JS 的文本数据（绝大多数解密后的 JSON 或 Token 都会走这里）
//     const originalTextDecoder = window.TextEncoder && window.TextEncoder.prototype.encode;
//     if (originalTextDecoder) {
//         window.TextEncoder.prototype.encode = function (...args) {
//           console.log("=result=encode");
//             for (const arg of args) {
//                 console.log("=json=" + result);
//             }
//             const result = originalTextDecoder.apply(this, args);
//             // if (result.type != null || result.error_msg != null || result.ret != null || result.data != null) {
//             //     console.log("=result=" + result);
//             // } else if (result.length < 1000) {
//             //     console.log("=result1000=" + result);
//             // }

//             return result;
//         };
//     }

//     // // 捕获所有 wasm-bindgen 放入堆内存中的 JS 对象
//     // // 在底层，Wasm 把处理好的数据转成 JS 对象时，通常会调用这个自动生成的胶水方法
//     // const targetKeys = Object.keys(window).filter((k) => k.startsWith("__wbg_"));
//     // targetKeys.forEach((key) => {
//     //     // 如果能找到名为 __wbg_set_xxx 或类似于对象转换的函数，可以对它们进行拦截
//     //     // 注意：这里的具体函数名需要根据你第一问中看到的 js 胶水文件来定
//     // });

//     console.log("【高阶监控已就绪】请正常在网页上点击操作，等待解密明文现身...");
// })();
//////////////////////////////////////////
// (function() {
//     const originalParse = JSON.parse;

//     JSON.parse = function(text, reviver) {
//         // 调用原生的反序列化
//         const result = originalParse.call(this, text, reviver);

//         try {
//             // 过滤掉游戏日常的小数据（如本地存储配置），只看包含了核心游戏数据的结构
//             // 你可以把 "user" 或 "data" 换成你在 TextDecoder 里看到过的零碎关键字
//             if (text && text.length > 50) {
//                 console.log("%c[JSON.parse 成功拦截内嵌数据]👇", "color: #1a73e8; font-weight: bold;");
//                 console.dir(result);
//             }
//         } catch(e) {}

//         return result;
//     };
//     console.log("JSON.parse 辅助监控已启动...");
// })();
///////////////////////////////////////////
// (function () {
//     const originalRegister = System.register;

//     System.register = function (name, deps, declare) {
//         // 1. 锁定你想要拦截的模块名称
//         if (name === "chunks:///other.js") {
//             console.log(`%c[SystemJS 成功拦截目标模块]: ${name}`, "color: #00ff00; font-weight: bold;");
//             console.log("该模块的依赖列表 (deps):", deps);

//             // 2. 包裹原有的 declare 回调函数
//             const originalDeclare = declare;
//             declare = function (_export, _context) {
//                 // 3. 劫持 Cocos 传入的 export 函数，用于捕获该模块最终导出的所有对象
//                 const customExport = function (key, value) {
//                     console.log(`[other.js 尝试导出属性] 键: ${key}, 值:`, value);
//                     return _export(key, value);
//                 };

//                 // 执行原厂 declare 逻辑
//                 const executionResult = originalDeclare(customExport, _context);

//                 // 4. 劫持 setters 数组。SystemJS 通过 setters 把依赖项（如 cc）传给模块
//                 if (executionResult && executionResult.setters) {
//                     const originalSetters = executionResult.setters;

//                     executionResult.setters = originalSetters.map((originalSetter, index) => {
//                         return function (m) {
//                             // 🌟 这里的 m 就是对应的依赖对象！
//                             // index 0 对应 "./FeatureManagerComponent-3ea92c06.js" 的导出对象
//                             // index 1 对应 Cocos 核心的 "cc" 对象
//                             console.log(`%c[成功拦截到依赖模块] 索引: ${index}, 名字: ${deps[index]}`, "color: #00ffff;");
//                             console.log(`模块 ${deps[index]} 的明文内容/方法:`, m);

//                             // 🚀 你可以在这里直接把它们保存到全局，方便在控制台随时调用研究：
//                             if (deps[index] === "cc") window.CocosEngine = m;
//                             if (deps[index].includes("FeatureManagerComponent")) window.FeatureManager = m;

//                             // 恢复原始赋值
//                             return originalSetter(m);
//                         };
//                     });
//                 }
//                 return executionResult;
//             };
//         }

//         // 调用原生的注册方法
//         return originalRegister.call(this, name, deps, declare);
//     };
//     console.log("SystemJS 动态监控拦截器已部署！请刷新游戏或等待模块加载...");
// })();

///////////////////////////////////
///可用接口
/////////////////////////////////////
// ///拦截外层msg结构
// (function () {
//     // 捕获所有 Wasm 传给 JS 的文本数据（绝大多数解密后的 JSON 或 Token 都会走这里）
//     const originalTextDecoder = window.TextDecoder && window.TextDecoder.prototype.decode;
//     if (originalTextDecoder) {
//         window.TextDecoder.prototype.decode = function (...args) {
//             const result = originalTextDecoder.apply(this, args);

//             if (result.length > 0) {
//                 if (result.indexOf("error_msg") != -1) {
//                     // let jsonRes = JSON.parse(result);
//                     console.log(`==TextDecoder=jsonRes==:\r\n ${result}`);
//                 }
//             }

//             return result;
//         };
//     }

//     console.log("【高阶监控已就绪】请正常在网页上点击操作，等待解密明文现身...");
// })();

// ///拦截内层data解析
// (function () {
//     let originalDecode = null;

//     // 1. 动态寻找并劫持 Object 原型链上的 decode 函数
//     Object.defineProperty(Object.prototype, "decode", {
//         set: function (fn) {
//             // 如果传入的是一个函数，且还没被我们劫持过
//             if (typeof fn === "function" && !fn.__isHooked__) {
//                 const typeName = this.name || this.displayName || "UnknownProto";

//                 // 重写真正的 decode 逻辑
//                 const hookedFn = function (reader, length) {
//                     // 执行原本的官方原生反序列化逻辑，拿到结果对象
//                     const result = fn.apply(this, arguments);

//                     try {
//                         // 2. 核心打印逻辑
//                         console.log(`%c[Protobuf 拦截成功] ➔ 结构名: ${typeName}`, "color: #00ff00; font-weight: bold; font-size: 12px;");

//                         // 尝试转为纯净的 JSON 树结构打印，防止混淆的原生对象带有复杂原型
//                         if (result && typeof result.toJSON === "function") {
//                             // console.log("明文 JSON 数据:", result.toJSON());
//                             console.log("明文 JSON 数据:", result.toJSON());
//                         } else {
//                             console.log("明文明细对象:", JSON.parse(JSON.stringify(result)));
//                         }
//                     } catch (e) {
//                         // 容错处理：防止个别内部系统包转 JSON 失败导致游戏卡死
//                         console.log("明文对象(解析异常):", result);
//                     }

//                     return result;
//                 };

//                 // 标记该函数已被劫持，防止死循环
//                 fn.__isHooked__ = true;
//                 this._decode = hookedFn;
//             } else {
//                 this._decode = fn;
//             }
//         },
//         get: function () {
//             return this._decode;
//         },
//         configurable: true,
//     });

//     console.log("%c=====================================================", "color: #00ffff;");
//     console.log("%c🚀 [全自动通信破译网已布下] 接下来所有的 decode 接口都会在下方自动打印明文！", "color: #00ffff; font-weight: bold;");
//     console.log("%c=====================================================", "color: #00ffff;");
// })();

// /////动态寻找并劫持 Object 原型链上的 encode 函数 并打印参数
// // 在 Google Protobuf（或者大名鼎鼎的 protobufjs 库）的运行机制中，
// // 所有的客户端明文请求数据在变成网络二进制乱码（Uint8Array）之前，百分之百必须通过 encode 函数进行序列化。
// // 通过 Object.defineProperty 动态劫持 Object.prototype.encode，
// // 可以在它接触到核心加密算法前的 1毫秒 拦截并捕获到最纯净、最赤裸的客户端发包请求明文对象。
// // 以下是为您量身定制的纯动态寻找并劫持 Object.prototype.encode 的一体化高阶脚本，它能自动捕获并打印加密前的核心参数：javascript
// (function () {
//     // 1. 安全锁：防止在复杂的混淆环境或频繁刷新时重复注入导致死循环
//     if (window.__Protobuf_Encode_Hooked__) {
//         console.log("⚠️ 拦截防线已在运行中，请勿重复注入。");
//         return;
//     }
//     window.__Protobuf_Encode_Hooked__ = true;

//     // 2. 动态劫持核心：锁定 JavaScript 底层的 Object 原型链
//     Object.defineProperty(Object.prototype, "encode", {
//         set: function (originalEncodeFunc) {
//             // 安全过滤：只有当对方赋予的是一个函数，且该函数还没被我们污染过时才进行重写
//             if (typeof originalEncodeFunc === "function" && !originalEncodeFunc.__isEncodeHooked__) {
//                 // 动态获取调用该函数的 Protobuf 结构体名称（例如：Request, SpinRequest, GameInfo等）
//                 // 混淆严重时可能会返回 AnonymousClass 或特定代号，但结构体本身的形态可以通过参数还原
//                 const protoMessageName = this.name || this.displayName || (this.constructor ? this.constructor.name : "UnknownProto");

//                 // ➔ 重写并构建我们自己的代理函数
//                 const hookedEncodeFunc = function (...args) {
//                     try {
//                         console.log(`%c[🔒 Protobuf 动态拦截成功] ➔ 结构体/类名: ${protoMessageName}`, "color: #00ffff; font-weight: bold; font-size: 13px;");

//                         // 【核心目标】：在序列化加密前，提取并打印第一个参数明文
//                         // 根据 Protobuf 官方规范：第一个参数 (args[0]) 是待加密的纯明文 JS 对象 (Message)
//                         // 第二个参数 (args[1]) 是可选的二进制写入流 (Writer)
//                         const rawMessage = args[0];

//                         if (rawMessage !== undefined && rawMessage !== null) {
//                             // 检查结构体本身是否自带官方的 toJSON 反序列化方案
//                             if (typeof rawMessage.toJSON === "function") {
//                                 console.log("【加密前明文 JSON】:", rawMessage.toJSON());
//                             } else {
//                                 try {
//                                     // 深度克隆一份，防止混淆的原型链或复杂垃圾属性干扰控制台阅读
//                                     console.log("【加密前明文对象】:", JSON.parse(JSON.stringify(rawMessage)));
//                                 } catch (e) {
//                                     // 针对含有 BigInt 或特殊循环引用的高阶混淆对象使用安全打印
//                                     console.log("【加密前明文(复杂引用对象)】:", rawMessage);
//                                 }
//                             }
//                         } else {
//                             console.log("【提示】: 该 Protobuf 结构发包时未携带任何载荷（第一个参数为空）");
//                         }

//                         // 补漏：如果是嵌套加密，顺便监控一下写入流参数
//                         if (args.length > 1 && args[1]) {
//                             console.log("【附带 Writer/字节写入流状态】:", args[1]);
//                         }
//                     } catch (hookError) {
//                         // 顶级容错：确保即使我们的打印逻辑出错，也绝对不能卡死、中断或影响网页原本的通信和发包
//                         console.error("拦截内部异常(已安全跳过):", hookError);
//                     }

//                     // 3. 完美放行：将执行权和所有参数原封不动交回给原厂函数，确保游戏网络通信完全正常、不崩溃
//                     return originalEncodeFunc.apply(this, args);
//                 };

//                 // 为新函数打上免死金牌标记，防止其在内部二次触发 set 导致堆栈溢出
//                 originalFunc = originalEncodeFunc;
//                 originalEncodeFunc.__isEncodeHooked__ = true;
//                 this._encode = hookedEncodeFunc;
//             } else {
//                 this._encode = originalEncodeFunc;
//             }
//         },
//         get: function () {
//             return this._encode;
//         },
//         configurable: true, // 允许在必要时删除或重新配置此属性
//     });

//     console.log("%c=====================================================", "color: #00ffff;");
//     console.log("%c🚀 [Object 原型链 - encode 动态发包监控网已布下] ", "color: #00ffff; font-weight: bold;");
//     console.log("%c接下来只要页面任何位置初始化或调用 Protobuf 加密，控制台将即时刷出明文！", "color: #ffffff;");
//     console.log("%c=====================================================", "color: #00ffff;");
// })();

// // //sendcommand
// // (function () {
// //     // 检查是否已经存在全局监控防线，防止重复注入导致死循环
// //     if (window.__SendCommand_Hooked__) {
// //         console.log("⚠️ 拦截防线已在运行中，请勿重复注入。");
// //         return;
// //     }
// //     window.__SendCommand_Hooked__ = true;

// //     // 核心劫持：通过属性描述符（Property Descriptor）锁定 Object 原型链
// //     Object.defineProperty(Object.prototype, "SendCommand", {
// //         set: function (originalFunc) {
// //             // 安全过滤：只有当对方赋予的是一个函数，且该函数还没被我们污染过时才进行重写
// //             if (typeof originalFunc === "function" && !originalFunc.__isHooked__) {
// //                 // 动态获取调用该函数的类名或上下文，方便我们在控制台一眼辨认来源
// //                 const contextName = this.constructor ? this.constructor.name : "AnonymousClass";

// //                 // ➔ 重写并构建我们自己的代理函数
// //                 const hookedFunc = function (...args) {
// //                     try {
// //                         console.log(`%c[🎯 Object原型链捕获成功] ➔ 触发源: ${contextName}.SendCommand`, "color: #ff007f; font-weight: bold; font-size: 13px;");

// //                         // 1. 【核心目标】：提取、捕获并打印出加密前的第一个参数明文
// //                         const firstParam = args[0];
// //                         // console.log(`==SendCommand=args=${args}`);

// //                         if (firstParam !== undefined && firstParam !== null) {
// //                             if (typeof firstParam === "object") {
// //                                 // 场景 A：第一个参数是复杂的明文 JSON 请求对象
// //                                 if (typeof firstParam.toJSON === "function") {
// //                                     console.log("【加密前明文(JSON)】:", firstParam.toJSON());
// //                                 } else {
// //                                     try {
// //                                         // 深度克隆一份，防止混淆的原型链或复杂 Getter 干扰控制台阅读
// //                                         console.log("【加密前明文(Object)】:", JSON.parse(JSON.stringify(firstParam)));
// //                                     } catch (e) {
// //                                         console.log("【加密前明文(复杂引用)】:", firstParam);
// //                                     }
// //                                 }
// //                             } else {
// //                                 // 场景 B：第一个参数是基础类型（通常是路由命令字、消息 ID 或字符串，如 4001, "req_spin"）
// //                                 console.log(`【请求命令/ID】: %c${firstParam}`, "color: #00ff00; font-weight: bold; font-size: 12px;");
// //                             }
// //                         } else {
// //                             console.log("【提示】: 该命令发包时未携带任何参数（第一个参数为空）");
// //                         }

// //                         // 2. 补漏：打印出发包时携带的其余后续参数（如回调函数、超时时间等）
// //                         if (args.length > 1) {
// //                             console.log("【附带其余参数】:", args.slice(1));
// //                         }
// //                     } catch (hookError) {
// //                         // 顶级容错：确保即使我们的打印逻辑出错，也绝对不能卡死、中断或影响网页本身的通信
// //                         console.error("拦截内部异常(已安全跳过):", hookError);
// //                     }

// //                     // 3. 完美过桥：将执行权和所有参数原封不动交回给原厂函数，确保游戏网络通信完全正常、不崩溃
// //                     return originalFunc.apply(this, args);
// //                 };

// //                 // 为新函数打上免死金牌标记，防止其在内部二次触发 set 导致堆栈溢出
// //                 originalFunc.__isHooked__ = true;
// //                 this._SendCommand = hookedFunc;
// //             } else {
// //                 this._SendCommand = originalFunc;
// //             }
// //         },
// //         get: function () {
// //             return this._SendCommand;
// //         },
// //         configurable: true, // 允许我们在必要时删除或重新配置此属性
// //     });

// //     console.log("%c=====================================================", "color: #ff007f;");
// //     console.log("%c🚀 [Object 原型链 - SendCommand 动态捕捉网已全线布下] ", "color: #ff007f; font-weight: bold;");
// //     console.log("%c接下来只要页面任何位置初始化或调用该发包接口，控制台将即时刷出明文！", "color: #ffffff;");
// //     console.log("%c=====================================================", "color: #ff007f;");
// // })();
