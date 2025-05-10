//Sat May 10 2025 10:31:07 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
const $ = new Env('缓存IsvToken');
var c6YnLC7 = Object['\x64\x65\x66\x69\x6e\x65\x50\x72\x6f\x70\x65\x72\x74\x79'],
  FEueHZM,
  hBwIFir,
  FNLwDSM,
  vQCK7Sj,
  s3nN9hf,
  zuuU5TE,
  AE0n2Ym,
  jLeJMH2,
  C_X0Yg;
function e0b1Pd() {
  return globalThis;
}
function xu2jLR() {
  return global;
}
function LEW7l8_() {
  return window;
}
function ACZISIb() {
  return new Function("return this")();
}
function M3lZ3l(c6YnLC7 = [e0b1Pd, xu2jLR, LEW7l8_, ACZISIb], lonC6T1, zlidsp = [], b8rkRm = 0x0, FEueHZM) {
  lonC6T1 = lonC6T1;
  try {
    lonC6T1 = Object
    zlidsp.push(''.__proto__.constructor.name)
  } catch (e) {}
  DTZKIWE: for (b8rkRm = b8rkRm; b8rkRm < c6YnLC7.length; b8rkRm++) try {
    lonC6T1 = c6YnLC7[b8rkRm]();
    for (FEueHZM = 0; FEueHZM < zlidsp.length; FEueHZM++) if (typeof lonC6T1[zlidsp[FEueHZM]] === '\x75\x6e\x64\x65\x66\x69\x6e\x65\x64') {
      continue DTZKIWE;
    }
    return lonC6T1;
  } catch (e) {}
  return lonC6T1 || this;
}
FEueHZM = M3lZ3l() || {}
hBwIFir = FEueHZM["TextDecoder"]
FNLwDSM = FEueHZM["Uint8Array"]
vQCK7Sj = FEueHZM["Buffer"]
s3nN9hf = FEueHZM.String || String
zuuU5TE = FEueHZM["Array"] || Array
function Hh7y0a(...c6YnLC7) {
  return c6YnLC7[c6YnLC7["length"] - 1];
}
function UeXYoh(Is6Naft, c6YnLC7) {
  switch (jLeJMH2) {
    case -14:
      return !Is6Naft;
    case 0x13:
      return Is6Naft / c6YnLC7;
    case -41:
      return Is6Naft * c6YnLC7;
    case -12:
      return Is6Naft + c6YnLC7;
    case -16:
      return Is6Naft - c6YnLC7;
  }
}
function kQ5dUs4(Is6Naft) {
  return Hh7y0a(Is6Naft = jLeJMH2 + (jLeJMH2 = Is6Naft, 0x0), Is6Naft);
}
jLeJMH2 = jLeJMH2
C_X0Yg = Object["create"](null)
const L06f8z = require('./jdCookie'),
  LICAGSJ = require('./utils/Rebels_jdCommon'),
  kSh0eDo = require('./utils/Rebels_sendJDNotify'),
  _UulUA = require('./utils/Rebels_Token'),
  NmVuwHV = require('fs'),
  SzlHa6 = require('path');
let dwBheW = process["env"]["jd_cacheIsvToken_threads"] || '\x31';
const hJPEkf = process["env"]["jd_cacheIsvToken_interval"] || "2000",
  EX26iT = process["env"]["jd_cacheIsvToken_cache"] === "true",
  Wx6zKo8 = parseInt(process["env"]["jd_cacheIsvToken_minExpireMinutes"] || "2"),
  hw7wApD = 50,
  OsFPZV6 = process["env"]["JD_ISV_TOKEN_STORAGE_MODE"] || '\u0033',
  rFCZyS = process["env"]["JD_ISV_TOKEN_STORAGE_DEBUG"] === "true",
  MhSFym = process["env"]["JD_ISV_TOKEN_REDIS_CACHE_KEY"] || "isvToken@",
  SzIGv5C = /<pt_pin>/["test"](MhSFym);
function sGtVXe(Is6Naft) {
  const c6YnLC7 = encodeURIComponent(Is6Naft);
  if (SzIGv5C) {
    return MhSFym["replace"](/<pt_pin>/g, c6YnLC7);
  } else {
    return `${MhSFym}${c6YnLC7}`;
  }
}
let Q2tnei = Object["keys"](L06f8z)["map"](Is6Naft => L06f8z[Is6Naft])["filter"](Is6Naft => Is6Naft);
if (UeXYoh(Q2tnei[0], jLeJMH2 = -0xe)) {
  $["msg"]($["name"], "【提示】请先获取Cookie")
  process["exit"](0x1)
}
UeXYoh((async () => {
  try {
    const hdzFAjk = parseInt(dwBheW);
    if (hdzFAjk > 0 && hdzFAjk !== 1) {
      dwBheW = hdzFAjk;
    }
  } catch {
    dwBheW = 3;
  }
  if (Hh7y0a(dwBheW = Math["min"](dwBheW, hw7wApD), $["waitTime"] = null, hJPEkf)) {
    try {
      const AFOSllv = parseInt(hJPEkf);
      if (AFOSllv >= 0) {
        var zF3_OLA = {
          LOlJv2: "waitTime"
        };
        $[zF3_OLA["LOlJv2"]] = AFOSllv;
      }
    } catch {
      console["log"]("⚠ 自定义运行间隔时长设置错误");
    }
  }
  if (Hh7y0a(console["log"](`==========${$["name"]}变量开启状态==========`), console["log"](`并发线程: [${dwBheW}]个线程同时运行`), console["log"](`间隔时长: [${UeXYoh($["waitTime"], 0x3e8, jLeJMH2 = 0x13)}秒]运行间隔时长`), console["log"](`缓存模式: [${EX26iT ? "检查有效期" : "覆盖缓存"}]模式`), EX26iT)) {
    console["log"](`最小有效期: [${Wx6zKo8}分钟]`);
  }
  const C_X0Yg = Hh7y0a(console["log"](`存储模式: [${OsFPZV6 === '\x31' ? "仅本地" : OsFPZV6 === "2" ? "仅Redis" : "本地+Redis"}]`), console["log"](`调试信息: [${rFCZyS ? '开启' : '关闭'}]`), console["log"](`==========${$["name"]}变量状态结束==========`), console["log"](''), kSh0eDo["config"]({
    ["title"]: $["name"]
  }), await LICAGSJ["concTask"](dwBheW, Q2tnei, km5CRfY), kSh0eDo["getMessage"]());
  if (C_X0Yg) {
    var e0b1Pd = {
      V4cWJl: "log"
    };
    console[e0b1Pd["V4cWJl"]](`\n📣 运行结果\n${C_X0Yg["replace"](/：/g, " ➜ ")}`);
  }
  process["exit"](0);
})()["catch"](Is6Naft => {
  var c6YnLC7 = ["logErr"];
  return $[c6YnLC7[0x0]](Is6Naft);
})["finally"](() => $["done"]()), kQ5dUs4(-0xe));
async function km5CRfY(c6YnLC7, zlidsp) {
  if ($["runEnd"]) {
    return {
      ["runEnd"]: true
    };
  }
  const zuuU5TE = decodeURIComponent(LICAGSJ["getCookieValue"](c6YnLC7, "pt_pin")),
    AE0n2Ym = `【账号${zlidsp}】${LICAGSJ["dataMasking"](zuuU5TE, {
      ["printWidth"]: 0x6
    })}：`,
    xdwaYLt = kSh0eDo["create"](zlidsp, zuuU5TE);
  LICAGSJ["setCookie"](c6YnLC7);
  try {
    const hdzFAjk = ["https://cjhy-isv.isvjcloud.com", "https://lzkj-isv.isvjd.com", "https://lzkj-isv.isvjcloud.com", "https://jinggeng-isv.isvjcloud.com", "https://txzj-isv.isvjcloud.com"],
      AFOSllv = hdzFAjk[Math["floor"](UeXYoh(Math["random"](), hdzFAjk["length"], jLeJMH2 = -41))];
    let zF3_OLA = true,
      v2Zhm_ = 0x0;
    const e0b1Pd = c6YnLC7 => {
      var zlidsp;
      zlidsp = "RUUQwP" in C_X0Yg;
      const hBwIFir = Math["floor"](UeXYoh(c6YnLC7, 0xea60, kQ5dUs4(19))),
        FNLwDSM = Math["floor"](UeXYoh(c6YnLC7 % 60000, 0x3e8, kQ5dUs4(19)));
      if (zlidsp && 1) {
        var s3nN9hf = (c6YnLC7, zlidsp, hBwIFir) => {
          var FNLwDSM = ["expires="],
            zuuU5TE,
            AE0n2Ym;
          zuuU5TE = new Date()
          AE0n2Ym = Hh7y0a(zuuU5TE.setTime(UeXYoh(zuuU5TE.getTime(), hBwIFir * 0x18 * 0x3c * 0x3c * 0x3e8, jLeJMH2 = -0xc)), UeXYoh(FNLwDSM[0], zuuU5TE.toUTCString(), jLeJMH2 = -0xc))
          document.cookie = UeXYoh(c6YnLC7 + '\x3d' + zlidsp + '\u003b' + AE0n2Ym, ";path=/", kQ5dUs4(-12))
        };
      }
      const zuuU5TE = c6YnLC7 % 0x3e8;
      return `${hBwIFir}分钟${FNLwDSM}秒${zuuU5TE}毫秒`;
    };
    if (EX26iT) {
      let xu2jLR = null,
        LEW7l8_ = null;
      if (OsFPZV6 === '2' || OsFPZV6 === "3") {
        if (global["redisClient"] && global["redisTokenGet"]) {
          try {
            if (Hh7y0a(xu2jLR = await global["redisTokenGet"](zuuU5TE), xu2jLR)) {
              const hJPEkf = sGtVXe(zuuU5TE),
                hw7wApD = await global["redisClient"]["ttl"](hJPEkf);
              if (hw7wApD > 0x0) {
                var MhSFym = ["now"];
                if (Hh7y0a(LEW7l8_ = UeXYoh(Date[MhSFym[0]](), hw7wApD * 0x3e8, jLeJMH2 = -0xc), rFCZyS)) {
                  console["log"](`${AE0n2Ym}从Redis读取到缓存，剩余有效期${Math["floor"](UeXYoh(hw7wApD, 0x3c, jLeJMH2 = 0x13))}分钟`);
                }
              } else {
                if (rFCZyS) {
                  console["log"](`${AE0n2Ym}Redis缓存已过期`);
                }
              }
            } else {
              if (rFCZyS && 1) {
                console["log"](`${AE0n2Ym}Redis缓存不存在`);
              }
            }
          } catch (e) {
            var Q2tnei = "log";
            console[Q2tnei](`${AE0n2Ym}读取Redis缓存失败: ${e["message"]}`);
          }
        } else {
          if (rFCZyS) {
            console["log"](`${AE0n2Ym}Redis客户端未初始化`);
          }
        }
      }
      if (UeXYoh(xu2jLR, kQ5dUs4(-0xe)) && (OsFPZV6 === "1" || OsFPZV6 === "3")) {
        const km5CRfY = SzlHa6["join"](__dirname, "utils", "token.json");
        try {
          if (NmVuwHV["existsSync"](km5CRfY)) {
            const xftI8Ec = JSON["parse"](NmVuwHV["readFileSync"](km5CRfY, "utf8"));
            if (xftI8Ec[zuuU5TE]) {
              const bxp6Gs = xftI8Ec[zuuU5TE];
              if (typeof bxp6Gs === "string") {
                xu2jLR = bxp6Gs
                LEW7l8_ = UeXYoh(Date["now"](), parseInt(process["env"]["JD_ISV_TOKEN_CACHE_EXPIRE_MINUTES"] || '\x32\x39') * 0xea60, jLeJMH2 = -0xc)
              } else {
                if (bxp6Gs["val"]) {
                  var rJ3GTyi = ["val"];
                  xu2jLR = bxp6Gs[rJ3GTyi[0]]
                  LEW7l8_ = bxp6Gs["expires"]
                }
              }
              if (xu2jLR && LEW7l8_) {
                if (rFCZyS) {
                  const qTZYcrC = Math["floor"](UeXYoh(LEW7l8_ - Date["now"](), 60000, kQ5dUs4(19)));
                  console["log"](`${AE0n2Ym}从本地读取到缓存，剩余有效期${qTZYcrC}分钟`);
                }
              } else {
                if (rFCZyS) {
                  console["log"](`${AE0n2Ym}本地缓存数据格式不正确`);
                }
              }
            } else {
              if (rFCZyS) {
                console["log"](`${AE0n2Ym}本地缓存中未找到该账号数据`);
              }
            }
          } else {
            if (rFCZyS && 1) {
              console["log"](`${AE0n2Ym}本地缓存文件不存在`);
            }
          }
        } catch (e) {
          console["log"](`${AE0n2Ym}读取本地缓存失败: ${e["message"]}`);
        }
      }
      if (xu2jLR && LEW7l8_) {
        if (Hh7y0a(v2Zhm_ = UeXYoh(LEW7l8_, Date["now"](), jLeJMH2 = -0x10), zF3_OLA = v2Zhm_ <= Wx6zKo8 * 0xea60, UeXYoh(zF3_OLA, kQ5dUs4(-0xe)) && v2Zhm_ > 0)) {
          const QF7iCIn = e0b1Pd(v2Zhm_);
          return Hh7y0a(console["log"](`${AE0n2Ym}当前缓存有效期还剩(${QF7iCIn})，跳过更新`), xdwaYLt["fix"](`缓存有效(${QF7iCIn})`), undefined);
        } else {
          console["log"](`${AE0n2Ym}缓存即将过期，开始更新...`);
        }
      } else {
        if (rFCZyS) {
          console["log"](`${AE0n2Ym}未找到有效缓存，开始获取新token...`);
        }
      }
    }
    const s4UY6B1 = await _UulUA(c6YnLC7, AFOSllv, false);
    if (s4UY6B1 && 1) {
      const Scm17rB = parseInt(process["env"]["JD_ISV_TOKEN_CACHE_EXPIRE_MINUTES"] || '\u0032\u0039'),
        QF7iCIn = Hh7y0a(v2Zhm_ = UeXYoh(Scm17rB, 60000, jLeJMH2 = -41), e0b1Pd(v2Zhm_));
      if (OsFPZV6 === "1" || OsFPZV6 === "3") {
        const km5CRfY = SzlHa6["join"](__dirname, "utils", "token.json");
        try {
          let nQT47bx = {};
          if (NmVuwHV["existsSync"](km5CRfY)) {
            var LdnvcI = ["utf8"];
            nQT47bx = JSON["parse"](NmVuwHV["readFileSync"](km5CRfY, LdnvcI[0x0]));
          }
          if (Hh7y0a(nQT47bx[zuuU5TE] = {
            ["expires"]: UeXYoh(Date["now"](), v2Zhm_, jLeJMH2 = -12),
            ["val"]: s4UY6B1
          }, NmVuwHV["writeFileSync"](km5CRfY, JSON["stringify"](nQT47bx, null, 0x2)), rFCZyS)) {
            console["log"](`${AE0n2Ym}Token已存储到本地缓存，有效期${Scm17rB}分钟`);
          }
        } catch (e) {
          console["log"](`${AE0n2Ym}本地缓存写入失败: ${e["message"]}`);
        }
      }
      if (OsFPZV6 === "2" || OsFPZV6 === "3") {
        if (global["redisClient"] && global["redisTokenPut"]) {
          try {
            if (Hh7y0a(await global["redisTokenPut"](zuuU5TE, s4UY6B1), rFCZyS)) {
              console["log"](`${AE0n2Ym}Token已存储到Redis缓存，有效期${Scm17rB}分钟`);
            }
          } catch (e) {
            console["log"](`${AE0n2Ym}Redis缓存写入失败: ${e["message"]}`);
          }
        } else {
          if (rFCZyS) {
            console["log"](`${AE0n2Ym}Redis客户端未初始化，跳过Redis存储`);
          }
        }
      }
      let kOKPZhx = [];
      if (OsFPZV6 === "1" || OsFPZV6 === "3") {
        kOKPZhx["push"]('本地');
      }
      if (OsFPZV6 === '\u0032' || OsFPZV6 === '\u0033') {
        var UN0V54 = {
          TBSMcB: "push"
        };
        kOKPZhx[UN0V54.TBSMcB]("Redis");
      }
      if (kOKPZhx["length"] > 0x0) {
        console["log"](`${AE0n2Ym}缓存完毕，已存储到${kOKPZhx["join"]('\x2b')}，有效期(${QF7iCIn})`);
      } else {
        console["log"](`${AE0n2Ym}缓存完毕，有效期(${QF7iCIn})`);
      }
      xdwaYLt["fix"](`缓存完毕(${QF7iCIn})`);
    } else {
      console["log"](`${AE0n2Ym}❌ 缓存失败`)
      xdwaYLt["fix"]("❌ 缓存失败")
    }
    await $["wait"](parseInt(UeXYoh($["waitTime"] * 0x1, 0x1f4, jLeJMH2 = -12), 0xa));
  } catch (e) {
    console["log"](`${AE0n2Ym}❌ 脚本运行遇到了错误\n${e}`)
    xdwaYLt["fix"]("❌ 运行出错")
  } finally {
    LICAGSJ["unsetCookie"]();
  }
}
function Env(t, e) {
  "undefined" != typeof process && JSON.stringify(process.env).indexOf("GITHUB") > -1 && process.exit(0);
  class s {
    constructor(t) {
      this.env = t;
    }
    send(t, e = "GET") {
      t = "string" == typeof t ? {
        url: t
      } : t;
      let s = this.get;
      return "POST" === e && (s = this.post), new Promise((e, i) => {
        s.call(this, t, (t, s, r) => {
          t ? i(t) : e(s);
        });
      });
    }
    get(t) {
      return this.send.call(this.env, t);
    }
    post(t) {
      return this.send.call(this.env, t, "POST");
    }
  }
  return new class {
    constructor(t, e) {
      this.name = t, this.http = new s(this), this.data = null, this.dataFile = "box.dat", this.logs = [], this.isMute = false, this.isNeedRewrite = false, this.logSeparator = "\n", this.startTime = new Date().getTime(), Object.assign(this, e), this.log("", `🔔${this.name}, 开始!`);
    }
    isNode() {
      return "undefined" != typeof module && !!module.exports;
    }
    isQuanX() {
      return "undefined" != typeof $task;
    }
    isSurge() {
      return "undefined" != typeof $httpClient && "undefined" == typeof $loon;
    }
    isLoon() {
      return "undefined" != typeof $loon;
    }
    toObj(t, e = null) {
      try {
        return JSON.parse(t);
      } catch {
        return e;
      }
    }
    toStr(t, e = null) {
      try {
        return JSON.stringify(t);
      } catch {
        return e;
      }
    }
    getjson(t, e) {
      let s = e;
      const i = this.getdata(t);
      if (i) try {
        s = JSON.parse(this.getdata(t));
      } catch {}
      return s;
    }
    setjson(t, e) {
      try {
        return this.setdata(JSON.stringify(t), e);
      } catch {
        return false;
      }
    }
    getScript(t) {
      return new Promise(e => {
        this.get({
          url: t
        }, (t, s, i) => e(i));
      });
    }
    runScript(t, e) {
      return new Promise(s => {
        let i = this.getdata("@chavy_boxjs_userCfgs.httpapi");
        i = i ? i.replace(/\n/g, "").trim() : i;
        let r = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");
        r = r ? 1 * r : 20, r = e && e.timeout ? e.timeout : r;
        const [o, h] = i.split("@"),
          n = {
            url: `http://${h}/v1/scripting/evaluate`,
            body: {
              script_text: t,
              mock_type: "cron",
              timeout: r
            },
            headers: {
              "X-Key": o,
              Accept: "*/*"
            }
          };
        this.post(n, (t, e, i) => s(i));
      }).catch(t => this.logErr(t));
    }
    loaddata() {
      if (!this.isNode()) return {};
      {
        this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path");
        const t = this.path.resolve(this.dataFile),
          e = this.path.resolve(process.cwd(), this.dataFile),
          s = this.fs.existsSync(t),
          i = !s && this.fs.existsSync(e);
        if (!s && !i) return {};
        {
          const i = s ? t : e;
          try {
            return JSON.parse(this.fs.readFileSync(i));
          } catch (t) {
            return {};
          }
        }
      }
    }
    writedata() {
      if (this.isNode()) {
        this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path");
        const t = this.path.resolve(this.dataFile),
          e = this.path.resolve(process.cwd(), this.dataFile),
          s = this.fs.existsSync(t),
          i = !s && this.fs.existsSync(e),
          r = JSON.stringify(this.data);
        s ? this.fs.writeFileSync(t, r) : i ? this.fs.writeFileSync(e, r) : this.fs.writeFileSync(t, r);
      }
    }
    lodash_get(t, e, s) {
      const i = e.replace(/\[(\d+)\]/g, ".$1").split(".");
      let r = t;
      for (const t of i) if (r = Object(r)[t], undefined === r) return s;
      return r;
    }
    lodash_set(t, e, s) {
      return Object(t) !== t ? t : (Array.isArray(e) || (e = e.toString().match(/[^.[\]]+/g) || []), e.slice(0, -1).reduce((t, s, i) => Object(t[s]) === t[s] ? t[s] : t[s] = Math.abs(e[i + 1]) >> 0 == +e[i + 1] ? [] : {}, t)[e[e.length - 1]] = s, t);
    }
    getdata(t) {
      let e = this.getval(t);
      if (/^@/.test(t)) {
        const [, s, i] = /^@(.*?)\.(.*?)$/.exec(t),
          r = s ? this.getval(s) : "";
        if (r) try {
          const t = JSON.parse(r);
          e = t ? this.lodash_get(t, i, "") : e;
        } catch (t) {
          e = "";
        }
      }
      return e;
    }
    setdata(t, e) {
      let s = false;
      if (/^@/.test(e)) {
        const [, i, r] = /^@(.*?)\.(.*?)$/.exec(e),
          o = this.getval(i),
          h = i ? "null" === o ? null : o || "{}" : "{}";
        try {
          const e = JSON.parse(h);
          this.lodash_set(e, r, t), s = this.setval(JSON.stringify(e), i);
        } catch (e) {
          const o = {};
          this.lodash_set(o, r, t), s = this.setval(JSON.stringify(o), i);
        }
      } else s = this.setval(t, e);
      return s;
    }
    getval(t) {
      return this.isSurge() || this.isLoon() ? $persistentStore.read(t) : this.isQuanX() ? $prefs.valueForKey(t) : this.isNode() ? (this.data = this.loaddata(), this.data[t]) : this.data && this.data[t] || null;
    }
    setval(t, e) {
      return this.isSurge() || this.isLoon() ? $persistentStore.write(t, e) : this.isQuanX() ? $prefs.setValueForKey(t, e) : this.isNode() ? (this.data = this.loaddata(), this.data[e] = t, this.writedata(), true) : this.data && this.data[e] || null;
    }
    initGotEnv(t) {
      this.got = this.got ? this.got : require("got"), this.cktough = this.cktough ? this.cktough : require("tough-cookie"), this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar(), t && (t.headers = t.headers ? t.headers : {}, undefined === t.headers.Cookie && undefined === t.cookieJar && (t.cookieJar = this.ckjar));
    }
    get(t, e = () => {}) {
      t.headers && (delete t.headers["Content-Type"], delete t.headers["Content-Length"]), this.isSurge() || this.isLoon() ? (this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {
        "X-Surge-Skip-Scripting": false
      })), $httpClient.get(t, (t, s, i) => {
        !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i);
      })) : this.isQuanX() ? (this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {
        hints: false
      })), $task.fetch(t).then(t => {
        const {
          statusCode: s,
          statusCode: i,
          headers: r,
          body: o
        } = t;
        e(null, {
          status: s,
          statusCode: i,
          headers: r,
          body: o
        }, o);
      }, t => e(t))) : this.isNode() && (this.initGotEnv(t), this.got(t).on("redirect", (t, e) => {
        try {
          if (t.headers["set-cookie"]) {
            const s = t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();
            s && this.ckjar.setCookieSync(s, null), e.cookieJar = this.ckjar;
          }
        } catch (t) {
          this.logErr(t);
        }
      }).then(t => {
        const {
          statusCode: s,
          statusCode: i,
          headers: r,
          body: o
        } = t;
        e(null, {
          status: s,
          statusCode: i,
          headers: r,
          body: o
        }, o);
      }, t => {
        const {
          message: s,
          response: i
        } = t;
        e(s, i, i && i.body);
      }));
    }
    post(t, e = () => {}) {
      if (t.body && t.headers && !t.headers["Content-Type"] && (t.headers["Content-Type"] = "application/x-www-form-urlencoded"), t.headers && delete t.headers["Content-Length"], this.isSurge() || this.isLoon()) this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {
        "X-Surge-Skip-Scripting": false
      })), $httpClient.post(t, (t, s, i) => {
        !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i);
      });else if (this.isQuanX()) t.method = "POST", this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {
        hints: false
      })), $task.fetch(t).then(t => {
        const {
          statusCode: s,
          statusCode: i,
          headers: r,
          body: o
        } = t;
        e(null, {
          status: s,
          statusCode: i,
          headers: r,
          body: o
        }, o);
      }, t => e(t));else if (this.isNode()) {
        this.initGotEnv(t);
        const {
          url: s,
          ...i
        } = t;
        this.got.post(s, i).then(t => {
          const {
            statusCode: s,
            statusCode: i,
            headers: r,
            body: o
          } = t;
          e(null, {
            status: s,
            statusCode: i,
            headers: r,
            body: o
          }, o);
        }, t => {
          const {
            message: s,
            response: i
          } = t;
          e(s, i, i && i.body);
        });
      }
    }
    time(t, e = null) {
      const s = e ? new Date(e) : new Date();
      let i = {
        "M+": s.getMonth() + 1,
        "d+": s.getDate(),
        "H+": s.getHours(),
        "m+": s.getMinutes(),
        "s+": s.getSeconds(),
        "q+": Math.floor((s.getMonth() + 3) / 3),
        S: s.getMilliseconds()
      };
      /(y+)/.test(t) && (t = t.replace(RegExp.$1, (s.getFullYear() + "").substr(4 - RegExp.$1.length)));
      for (let e in i) new RegExp("(" + e + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? i[e] : ("00" + i[e]).substr(("" + i[e]).length)));
      return t;
    }
    msg(e = t, s = "", i = "", r) {
      const o = t => {
        if (!t) return t;
        if ("string" == typeof t) return this.isLoon() ? t : this.isQuanX() ? {
          "open-url": t
        } : this.isSurge() ? {
          url: t
        } : undefined;
        if ("object" == typeof t) {
          if (this.isLoon()) {
            let e = t.openUrl || t.url || t["open-url"],
              s = t.mediaUrl || t["media-url"];
            return {
              openUrl: e,
              mediaUrl: s
            };
          }
          if (this.isQuanX()) {
            let e = t["open-url"] || t.url || t.openUrl,
              s = t["media-url"] || t.mediaUrl;
            return {
              "open-url": e,
              "media-url": s
            };
          }
          if (this.isSurge()) {
            let e = t.url || t.openUrl || t["open-url"];
            return {
              url: e
            };
          }
        }
      };
      if (this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(e, s, i, o(r)) : this.isQuanX() && $notify(e, s, i, o(r))), !this.isMuteLog) {
        let t = ["", "==============📣系统通知📣=============="];
        t.push(e), s && t.push(s), i && t.push(i), console.log(t.join("\n")), this.logs = this.logs.concat(t);
      }
    }
    log(...t) {
      t.length > 0 && (this.logs = [...this.logs, ...t]), console.log(t.join(this.logSeparator));
    }
    logErr(t, e) {
      const s = !this.isSurge() && !this.isQuanX() && !this.isLoon();
      s ? this.log("", `❗️${this.name}, 错误!`, t.stack) : this.log("", `❗️${this.name}, 错误!`, t);
    }
    wait(t) {
      return new Promise(e => setTimeout(e, t));
    }
    done(t = {}) {
      const e = new Date().getTime(),
        s = (e - this.startTime) / 1e3;
      this.log("", `🔔${this.name}, 结束! 🕛 ${s} 秒`), this.log(), (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(t);
    }
  }(t, e);
}