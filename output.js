//Sat May 10 2025 17:33:36 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
const $ = new Env('订单评价');
var VBiKE3 = Object['\x64\x65\x66\x69\x6e\x65\x50\x72\x6f\x70\x65\x72\x74\x79'],
  KWprcuU,
  iicBa6z,
  EpPR9J,
  Ql9zaNt,
  jeXUXBk,
  hHjFjuX,
  FXGdr7U,
  GyXvv0,
  IhkvLup,
  OGBtjo,
  CeY0j9S,
  xhOkUK;
function fem3rIi() {
  return globalThis;
}
function b6hGF7() {
  return global;
}
function Ef5KlvL() {
  return window;
}
function BRFIw0() {
  return new Function("return this")();
}
function oxCnTsJ(VBiKE3 = [fem3rIi, b6hGF7, Ef5KlvL, BRFIw0], KzKNoYl, zpeKMx = [], KWprcuU = 0x0, iicBa6z) {
  KzKNoYl = KzKNoYl;
  try {
    KzKNoYl = Object
    zpeKMx["push"](''.__proto__.constructor["name"])
  } catch (e) {}
  QxMzjS5: for (KWprcuU = KWprcuU; KWprcuU < VBiKE3.length; KWprcuU++) try {
    KzKNoYl = VBiKE3[KWprcuU]();
    for (iicBa6z = 0; iicBa6z < zpeKMx["length"]; iicBa6z++) if (typeof KzKNoYl[zpeKMx[iicBa6z]] === "undefined") {
      continue QxMzjS5;
    }
    return KzKNoYl;
  } catch (e) {}
  return KzKNoYl || this;
}
KWprcuU = oxCnTsJ() || {}
iicBa6z = KWprcuU.TextDecoder
EpPR9J = KWprcuU.Uint8Array
Ql9zaNt = KWprcuU.Buffer
jeXUXBk = KWprcuU.String || String
hHjFjuX = KWprcuU.Array || Array
function azla3t(...VBiKE3) {
  return VBiKE3[VBiKE3["length"] - 1];
}
function oizBcO0(CP2DFtT, VBiKE3) {
  switch (GyXvv0) {
    case -0xa:
      return !CP2DFtT;
    case -35:
      return CP2DFtT - VBiKE3;
    case -33:
      return -CP2DFtT;
    case 0x1e:
      return CP2DFtT / VBiKE3;
    case 0xd:
      return CP2DFtT + VBiKE3;
    case -17:
      return CP2DFtT * VBiKE3;
  }
}
function EdDidf(CP2DFtT) {
  return azla3t(CP2DFtT = GyXvv0 + (GyXvv0 = CP2DFtT, 0x0), CP2DFtT);
}
GyXvv0 = GyXvv0
IhkvLup = Object["create"](null)
function qr4tsGT(CP2DFtT, VBiKE3) {
  return azla3t(OGBtjo(CP2DFtT, "length", {
    ["value"]: VBiKE3,
    ["configurable"]: true
  }), CP2DFtT);
}
OGBtjo = Object["defineProperty"]
CeY0j9S = Object.create(null)
xhOkUK = []
const mgpsUrq = require('./jdCookie'),
  __8acX = require('./utils/Rebels_sendJDNotify'),
  LuPInE = require('./utils/Rebels_jdCommon'),
  {
    ["H5st"]: LIVxe2h
  } = require('./utils/Rebels_H'),
  kD3fVO = process["version"],
  fUQbAo = azla3t(console["log"](`\n当前 Node.js 版本: ${kD3fVO}`), "v18.17.0");
if ((xhOkUK = [kD3fVO, fUQbAo], new CBFvJL("KayHr4", undefined, "JLopCHO").fyGNgb) >= 0) {
  console["log"](`Node.js 版本满足要求 (>= ${fUQbAo})\n`)
} else {
  console["log"](`Node.js 版本过低，建议升级到 ${fUQbAo} 或更高版本\n`)
}
let K6ioiVS;
try {
  const CP2DFtT = azla3t(K6ioiVS = require('sharp'), require('sharp/package.json')["version"]);
  console["log"](`sharp 模块的版本是: ${CP2DFtT}\n`);
} catch (error) {
  console["log"](`请安装sharp依赖，否则无法运行！推荐安装sharp@0.31.2或者sharp@0.32.6`)
  process["exit"](1)
}
const mI9eyk = require('fs'),
  rtCcvdl = (process["env"]["jd_evaluation_notify"] || process["env"]["jd_evaluation_Notify"]) === "true",
  Ne72oK = process["env"]["jd_evaluation_prizeNotify"] === "true",
  N5c4Nd = (process["env"]["jd_evaluation_pinFilter"] || '')["split"]('\u0040'),
  vqvYv57 = (process["env"]["jd_evaluation_appointpin"] || '')["split"]('\x40')["filter"](CP2DFtT => CP2DFtT),
  vyycYX = process["env"]["jd_evaluation_signapi"] || '',
  yX6SFTx = process["env"]["jd_evaluation_cknum"] || "1-10000";
if (LuPInE["getProxyStatus"]() === '关闭') {
  $["waitTime"] = 0xbb8;
} else {
  $["waitTime"] = 0x7d0;
}
let QZbyZfZ = '',
  emmhZH3 = '',
  Z0NStv = ['赠品', '权益', "非实物", "非卖品", "增值服务", '服务', '券包', "只换不修"],
  iYzX2PJ = ['垃圾', "质量差", '差评', '好差', '欺骗', '拉胯'],
  dTidbm7 = ["物流速度很快，非常满意！", "快递小哥服务态度很好，及时送达。", "物流速度很快，而且包装得很仔细。", "物流速度超出预期，值得称赞。", "包装完好，快递速度很快，非常满意。", "物流非常快，第二天就到了，给个大大的赞！", "物流小哥服务很到位，送货速度很快。"],
  nSG3xHe = ["客服服务很周到，解决了我的问题。", "客服回复及时，态度友好。", "客服耐心解答了我的疑问，服务很好。", "客服服务很专业，解决了我的投诉。", "客服态度很好，问题处理得很及时。", "客服回复速度快，解决问题效率高。"],
  yh6bnH = ["产品质量非常好，做工精细。", "产品使用起来很顺手，质量可靠。", "产品质量很不错，性价比高。", "产品外观精美，质量有保障。", "产品质量很稳定，使用了很长时间都没有问题。", "产品质量非常棒，超出我的预期。"],
  ZYjpco = ["京东的服务一如既往的好，值得信赖。", "会一直支持京东，购物体验很好。", "京东的商品质量一直很稳定，购物体验很好。"],
  HWvuHA6 = 50,
  vsJNVp1,
  cpn1uy,
  knmcmRP = [],
  AchL07 = false;
if (vqvYv57 && vqvYv57["length"] > 0x0) {
  if (azla3t(knmcmRP = Object["keys"](mgpsUrq)["map"](CP2DFtT => mgpsUrq[CP2DFtT])["filter"](CP2DFtT => CP2DFtT), oizBcO0(knmcmRP[0], EdDidf(-10)))) {
    $["msg"]($["name"], "【提示】请先获取Cookie")
    process["exit"](0x1)
  }
} else {
  ;
  if (azla3t([vsJNVp1, cpn1uy] = yX6SFTx["split"]('\u002d')["map"](Number), isNaN(vsJNVp1) || isNaN(cpn1uy) || Math["abs"](cpn1uy - vsJNVp1) + 0x1 > 0x2710) && true) {
    console["error"]("【错误】无效的账号序号范围或范围过大(不得超过20个序号差)，请确保格式为\"起始序号-结束序号\"，如\"1-10\"")
    process["exit"](1)
  }
  const VBiKE3 = vsJNVp1 <= cpn1uy ? oizBcO0(vsJNVp1, 0x1, GyXvv0 = -35) : oizBcO0(cpn1uy, 0x1, EdDidf(-35)),
    KzKNoYl = vsJNVp1 <= cpn1uy ? cpn1uy : vsJNVp1,
    KWprcuU = VBiKE3 < KzKNoYl ? 0x1 : oizBcO0(1, EdDidf(-0x21)),
    iicBa6z = Object["keys"](mgpsUrq)["map"](VBiKE3 => mgpsUrq[VBiKE3])["filter"](VBiKE3 => VBiKE3);
  for (let EpPR9J = azla3t(knmcmRP = [], VBiKE3); KWprcuU > 0x0 ? EpPR9J < KzKNoYl : EpPR9J > KzKNoYl; EpPR9J += KWprcuU) {
    if (EpPR9J >= 0x0 && EpPR9J < iicBa6z["length"]) {
      var yG4EpEG = {
        ["bAyPePV"]: "push"
      };
      knmcmRP[yG4EpEG.bAyPePV](iicBa6z[EpPR9J]);
    }
  }
  if (oizBcO0(knmcmRP["length"], EdDidf(-0xa))) {
    console["log"](`【提示】请确保有编号在${vsJNVp1}-${cpn1uy}之间的有效Cookie，当前共有账号${iicBa6z["length"]}个`)
    process["exit"](0x1)
  }
}
oizBcO0((async () => {
  if (azla3t(console["log"](`==========${$["name"]}变量开启状态==========`), console["log"]("活动入口: APP-我的-待评价"), console["log"]("注意事项: 必须使用WIKI文档搭建的SIGN"), console["log"](`SIGN开关: [${vyycYX ? `开启(${vyycYX})` : "关闭[必须填写SIGN的API地址]"}]`), console["log"](`间隔时长: [${oizBcO0($["waitTime"], 0x3e8, GyXvv0 = 30)}秒]运行间隔时长`), console["log"](`运行账号: [${vqvYv57["length"] ? vqvYv57["join"]('\u002c\u0020') : `${vsJNVp1}-${cpn1uy}][共计${knmcmRP["length"]}个账号`}]`), console["log"](`代理开关: [${LuPInE["getProxyStatus"]()}]`), console["log"](`通知推送: [${rtCcvdl ? '开启' : "关闭"}], 单独推送: [${Ne72oK ? '开启' : "关闭"}]`), console["log"](`账号过滤: [${N5c4Nd["join"]('\x2c\x20')}]`), console["log"](`频道通知：https://t.me/Rebels_channel`), console["log"](`==========${$["name"]}变量状态结束==========`), __8acX["config"]({
    ["title"]: $["name"]
  }), oizBcO0(vyycYX, GyXvv0 = -10))) {
    return azla3t(console["log"]("\n⚠ 请先定义SIGN环境变量后再运行脚本！必须使用WIKI文档搭建的SIGN！"), undefined);
  }
  for (let EpPR9J = 0; EpPR9J < knmcmRP["length"]; EpPR9J++) {
    if (azla3t($["index"] = oizBcO0(EpPR9J, 1, EdDidf(13)), emmhZH3 = knmcmRP[EpPR9J], LuPInE["setCookie"](emmhZH3), $["UserName"] = decodeURIComponent(LuPInE["getCookieValue"](emmhZH3, "pt_pin")), $["message"] = __8acX["create"]($["index"], $["UserName"]), $["nickName"] = '', $.UA = "okhttp/3.12.16;jdmall;android;version/12.2.2;build/168923;", vqvYv57 && vqvYv57["length"] > 0x0)) {
      var FXGdr7U = ["includes"];
      if (vqvYv57[FXGdr7U[0x0]](encodeURIComponent($["UserName"]))) {
        console["log"](`\n******开始【京东账号${$["index"]}】${$["nickName"] || $["UserName"]}******\n`)
        await E5hrYx()
        AchL07 = true
      } else {
        QZbyZfZ = `\n账号[${vqvYv57}] 不在账号列表中，请检查环境变量是否配置正确\n`;
        continue;
      }
    } else {
      console["log"](`\n******开始【京东账号${$["index"]}】${$["nickName"] || $["UserName"]}******\n`)
      await E5hrYx()
    }
    if (azla3t(LuPInE["unsetCookie"](), $["runEnd"]) && true) {
      break;
    }
    await $["wait"](0x3e8);
  }
  if (oizBcO0(AchL07, GyXvv0 = -0xa) && QZbyZfZ) {
    console["log"](QZbyZfZ);
  }
  const FqhfrR = __8acX["getMessage"]();
  if (FqhfrR) {
    if (azla3t(console["log"](`\n📣 运行结果\n${FqhfrR["replace"](/：/g, " ➜ ")}`), rtCcvdl)) {
      await __8acX["push"]();
    }
  }
})()["catch"](CP2DFtT => $["logErr"](CP2DFtT))["finally"](() => $["done"]()), GyXvv0 = -10);
async function E5hrYx() {
  const VBiKE3 = await LuPInE["getLoginStatus"](emmhZH3);
  if (oizBcO0(VBiKE3, EdDidf(-10)) && typeof VBiKE3 === "boolean" && 1) {
    return azla3t(console["log"](`账号无效`), undefined);
  }
  try {
    if (azla3t($["redhot"] = false, N5c4Nd["length"] > 0x0 && (N5c4Nd["includes"]($["UserName"]) || N5c4Nd["includes"](encodeURIComponent($["UserName"]))))) {
      console["log"]("已设置当前账号不进行订单评价");
    } else {
      let KWprcuU = azla3t($["getCommentWareList"] = '', $["status"] = 1, $["pageIndex"] = 0x1, $["commentWareList"] = [], $["eastereggList"] = [], []),
        iicBa6z;
      if (azla3t(await iiA3D0("getCommentWareList"), await $["wait"](parseInt(oizBcO0($["waitTime"] * 0x1, 500, EdDidf(0xd)), 10)), $["getCommentWareList"])) {
        if (azla3t(iicBa6z = $["getCommentWareList"]["commentWareListInfo"], $["commentFinishedCount"] = iicBa6z["commentFinishedCount"], $["wait4CommentCount"] = iicBa6z["wait4CommentCount"], $["maxPage"] = iicBa6z["maxPage"], $["commentWareList"] = iicBa6z["commentWareList"] || [], console["log"](`已评价[${$["commentFinishedCount"]}]，未评价[${$["wait4CommentCount"]}]`), $["message"]["insert"](`已评价[${$["commentFinishedCount"]}]，未评价[${$["wait4CommentCount"]}]`), $["maxPage"]) > 1) {
          if (azla3t($["commentWareList"] = [], $["status"] = 0x1, $["pageIndex"] = $["maxPage"], await iiA3D0("getCommentWareList_old"), await $["wait"](parseInt(oizBcO0($["waitTime"] * 0x1, 0x1f4, EdDidf(13)), 10)), iicBa6z = $["getCommentWareList_old"]["commentWareListInfo"], $["commentWareList"] = iicBa6z?.["commentWareList"] || [], $["commentWareList"]["length"]) <= 0x0) {
            $["commentWareList"] = []
            $["status"] = 0x1
            $["pageIndex"] = oizBcO0($["maxPage"], 0x1, EdDidf(-35))
            await iiA3D0("getCommentWareList_old")
            await $["wait"](parseInt(oizBcO0($["waitTime"] * 0x1, 0x1f4, GyXvv0 = 0xd), 0xa))
            iicBa6z = $["getCommentWareList_old"]["commentWareListInfo"]
            $["commentWareList"] = iicBa6z["commentWareList"] || []
          }
          $["status"] = 0x4
          $["pageIndex"] = 1
          $["getCommentWareList_old"] = ''
          await iiA3D0("getCommentWareList_old")
          await $["wait"](parseInt(oizBcO0($["waitTime"] * 1, 500, EdDidf(13)), 0xa))
          iicBa6z = $["getCommentWareList_old"]["commentWareListInfo"]
          $["eastereggList"] = iicBa6z?.["commentWareList"] || []
        }
        console["log"](`从最后一页获取到有${$["commentWareList"]["length"]}个晒单评价，有${$["eastereggList"]["length"]}个彩蛋评价`)
        $["commentWareList"] = $["commentWareList"]["concat"]($["eastereggList"])
        console["log"](`共获取到需要评价的${$["commentWareList"]["length"]}个晒单评价`)
        for (let woHje1 of $["commentWareList"]["reverse"]()) {
          if (azla3t($["wordMatch"] = '', $["picMatch"] = '', $["runponse"] = false, $["itme"] = woHje1, console["log"](`\n开始评价晒单：[${woHje1["wname"]}]`), $["message"]["insert"](`[${woHje1["wname"]}]`), woHje1["commentRewardStatus"]) === '\u0031') {
            if (azla3t($["commentEditInfo"] = '', await iiA3D0("commentEditInfo"), await $["wait"](parseInt(oizBcO0($["waitTime"] * 1, 0x1f4, EdDidf(0xd)), 0xa)), $["commentEditInfo"])) {
              let ASnLCR = $["commentEditInfo"]["commentFloorList"][0]["productCommentFloor"]?.["newCommentRewardMap"]?.["bannerInfo"] || $["commentEditInfo"]["commentFloorList"][0x0]["commentRewardFloor"]?.["bannerInfo"] || "评价有礼",
                IhkvLup = azla3t(console["log"](`${ASnLCR}`), JSON["stringify"]($["commentEditInfo"]));
              $["wordMatch"] = (IhkvLup["match"](/(?<![\\d\\w])(\d+)字/) || [, '60'])[1]
              $["picMatch"] = (IhkvLup["match"](/(?<![\\d\\w])(\d+)晒图/) || [, "2"])[1]
              console["log"](`获得奖励的要求：需满足至少${$["wordMatch"]}字+${$["picMatch"]}晒图`)
            }
          } else {
            if (woHje1["estJingBean"] > 0x0) {
              console["log"](`当前晒单奖励有${woHje1["estJingBean"]}京豆`)
              $["message"]["insert"](`晒单奖励有${woHje1["estJingBean"]}京豆`)
            }
          }
          if (azla3t(console["log"]("开始获取好评和晒图"), await $["wait"](parseInt(oizBcO0($["waitTime"] * 1, 500, EdDidf(0xd)), 0xa)), $["categoryId"] = (xhOkUK = [woHje1["categoryList"]], CBFvJL("fc74nsa")), $["getCommentListPage"] = '', $["commentInfos"] = [], await iiA3D0("getCommentListPage"), $["redhot"])) {
            break;
          }
          if (azla3t(await $["wait"](parseInt(oizBcO0($["waitTime"] * 0x2, 0x64, EdDidf(0xd)), 0xa)), $["getCommentListPage"])) {
            if (azla3t($["floorId"] = $["getCommentListPage"]["result"]["floors"]["filter"](VBiKE3 => VBiKE3["floorId"] === "flo_11103"), $["floorId"]["length"]) > 0x0) {
              $["commentInfos"] = $["floorId"][0]["data"]
              console["log"](`本次获取到${$["commentInfos"]["length"]}条评论`)
            }
            let Ef5KlvL = [],
              BRFIw0 = [];
            for (let oxCnTsJ of $["commentInfos"]) {
              let qr4tsGT = oxCnTsJ["commentInfo"];
              if (oizBcO0(qr4tsGT, GyXvv0 = -10)) {
                continue;
              }
              if (qr4tsGT["pictureInfoList"]) {
                for (let mgpsUrq of qr4tsGT["pictureInfoList"]) if (mgpsUrq["mediaType"] !== '2' && 1) {
                  let kD3fVO = mgpsUrq["picURL"]["replace"](/s\d{3}x\d{3}_(.*)(\.dpg)/, '$1');
                  if (oizBcO0(kD3fVO, GyXvv0 = -0xa)) {
                    kD3fVO = mgpsUrq["picURL"]["replace"](/s\d{3}x\d{3}_(.*)(\.webp)/, '$1');
                  }
                  if (oizBcO0(kD3fVO, EdDidf(-0xa))) {
                    kD3fVO = mgpsUrq["picURL"]["replace"](/s\d{3}x\d{3}_(.*)(\.avif)/, '\u0024\u0031');
                  }
                  if (kD3fVO) {
                    Ef5KlvL["push"](kD3fVO);
                  }
                }
              }
              if (qr4tsGT["commentScore"] === "5" && qr4tsGT["commentData"] && qr4tsGT["commentData"]["length"] > HWvuHA6) {
                BRFIw0["push"](qr4tsGT["commentData"]);
              }
            }
            let mvb9sf7 = Ef5KlvL["length"] >= 2 ? [{
                ["picUrl"]: Ef5KlvL[0]
              }, {
                ["picUrl"]: Ef5KlvL[0x1]
              }] : [],
              fIiQ1NI = BRFIw0["filter"](VBiKE3 => oizBcO0(iYzX2PJ["some"](KzKNoYl => VBiKE3["includes"](KzKNoYl)), GyXvv0 = -10)),
              K6ioiVS;
            K6ioiVS = fIiQ1NI["length"] > 0x0 ? fIiQ1NI[Math["floor"](oizBcO0(Math["random"](), fIiQ1NI["length"], EdDidf(-0x11)))] : BRFIw0["length"] > 0 ? BRFIw0[Math["floor"](oizBcO0(Math["random"](), BRFIw0["length"], EdDidf(-17)))] : (xhOkUK = [woHje1["wname"]], new CBFvJL("JwDSGiL", undefined, "JLopCHO").fyGNgb);
            if ($["wordMatch"]) {
              if (K6ioiVS["length"] < $["wordMatch"]) {
                let tViNGJ = azla3t(console["log"](`评论字数不足，需增加${oizBcO0($["wordMatch"], K6ioiVS["length"], GyXvv0 = -0x23)}字`), "好评了，好评了，好评了！必须好评！好评！好评！好评！好评！好评！好评！");
                K6ioiVS += tViNGJ;
              }
            }
            let KUHsC8 = azla3t(await $["wait"](parseInt(oizBcO0($["waitTime"] * 1, 0x1f4, GyXvv0 = 13), 0xa)), undefined),
              ysSmUp;
            if (Ef5KlvL["length"] >= 0x2 && BRFIw0["length"] >= 2) {
              $["commentData"] = K6ioiVS
              $["pictureInfoList"] = mvb9sf7
              console["log"]("执行模式：爬取带图文字评价")
            } else {
              if (Ef5KlvL["length"] >= 0x2 && BRFIw0["length"] < 0x2) {
                KUHsC8 = (xhOkUK = [woHje1["wname"]], CBFvJL("JwDSGiL"))
                $["commentData"] = KUHsC8
                $["pictureInfoList"] = mvb9sf7
                console["log"]("执行模式：爬取图片，脚本随机评价")
              } else {
                if (Ef5KlvL["length"] < 2 && BRFIw0["length"] >= 2) {
                  let KUHsC8 = (xhOkUK = [woHje1["wname"]], new CBFvJL("JwDSGiL", undefined, "JLopCHO").fyGNgb);
                  if (azla3t($["getSkuMainPic"] = '', ysSmUp = [], await iiA3D0("getSkuMainPic"), await $["wait"](parseInt(oizBcO0($["waitTime"] * 0x1, 0x1f4, GyXvv0 = 0xd), 10)), $["getSkuMainPic"])) {
                    let mRl1EI = $["getSkuMainPic"]?.["data"]?.["skuPage"]?.["result"] || [];
                    for (const mI9eyk of mRl1EI) {
                      const rtCcvdl = mI9eyk["imgList"];
                      for (const vqvYv57 of rtCcvdl) if (vqvYv57["indexOf"]("360buyimg.com") === oizBcO0(0x1, EdDidf(-33))) {
                        const vyycYX = oizBcO0("https://img11.360buyimg.com/cms/", vqvYv57, GyXvv0 = 13);
                        ysSmUp["push"]({
                          ["picUrl"]: vyycYX
                        });
                      }
                    }
                  }
                  $["commentData"] = KUHsC8
                  $["pictureInfoList"] = mvb9sf7 || ysSmUp
                  console["log"]("执行模式：爬取评价，无图")
                } else {
                  let KUHsC8 = (xhOkUK = [woHje1["wname"]], new CBFvJL("JwDSGiL", undefined, "JLopCHO").fyGNgb);
                  if (azla3t($["getSkuMainPic"] = '', ysSmUp = [], await iiA3D0("getSkuMainPic"), await $["wait"](parseInt(oizBcO0($["waitTime"] * 1, 500, EdDidf(0xd)), 0xa)), $["getSkuMainPic"])) {
                    let mRl1EI = $["getSkuMainPic"]?.["data"]?.["skuPage"]?.["result"] || [];
                    for (const mI9eyk of mRl1EI) {
                      const rtCcvdl = mI9eyk["imgList"];
                      for (const vqvYv57 of rtCcvdl) if (vqvYv57["indexOf"]("360buyimg.com") === oizBcO0(0x1, EdDidf(-33))) {
                        const vyycYX = oizBcO0("https://img11.360buyimg.com/cms/", vqvYv57, EdDidf(13));
                        ysSmUp["push"]({
                          ["picUrl"]: vyycYX
                        });
                      }
                    }
                  }
                  console["log"]("执行模式：脚本随机评价，爬取主图/无图")
                  $["commentData"] = KUHsC8
                  $["pictureInfoList"] = mvb9sf7 || ysSmUp
                }
              }
            }
            if ($["picMatch"] && $["pictureInfoList"]["length"] < $["picMatch"]) {
              let Z0NStv = azla3t(console["log"](`晒图数量不足，需增加${oizBcO0($["picMatch"], $["pictureInfoList"]["length"], GyXvv0 = -35)}图`), $["getSkuMainPic"] = '', await iiA3D0("getSkuMainPic"), await $["wait"](parseInt(oizBcO0($["waitTime"] * 1, 0x1f4, EdDidf(0xd)), 10)), oizBcO0($["picMatch"], $["pictureInfoList"]["length"], EdDidf(-35))),
                mRl1EI = $["getSkuMainPic"]?.["data"]?.["skuPage"]?.["result"] || [],
                dTidbm7 = [{
                  ["picUrl"]: "https://img30.360buyimg.com/shaidan/jfs/t1/169124/31/25110/42459/61a586c7Ec6b49656/1549ee98784f868d.jpg"
                }, {
                  ["picUrl"]: "https://img30.360buyimg.com/shaidan/jfs/t1/220117/4/6009/64307/61a586d6E0d3462c9/2d49512023e40761.jpg"
                }, {
                  ["picUrl"]: "https://img30.360buyimg.com/shaidan/jfs/t1/213046/15/6166/10322/61a586e5Ea4397e3d/d143a8d0a0d96bd8.jpg"
                }, {
                  ["picUrl"]: "https://img30.360buyimg.com/shaidan/jfs/t1/169124/31/25110/42459/61a586c7Ec6b49656/1549ee98784f868d.jpg"
                }, {
                  ["picUrl"]: "https://img30.360buyimg.com/shaidan/jfs/t1/220117/4/6009/64307/61a586d6E0d3462c9/2d49512023e40761.jpg"
                }, {
                  ["picUrl"]: "https://img30.360buyimg.com/shaidan/jfs/t1/156957/9/27398/4391/61bb2a3cEca6a4bab/20005aabe0573a0a.jpg"
                }, {
                  ["picUrl"]: "https://img30.360buyimg.com/shaidan/jfs/t1/143995/15/24443/5327/61860ba4Ecba97817/d7faafa606f76b1f.jpg"
                }];
              if (mRl1EI["length"]) {
                for (const mI9eyk of mRl1EI) {
                  for (const vqvYv57 of mI9eyk["imgList"]) {
                    if (vqvYv57["indexOf"]("360buyimg.com") === oizBcO0(0x1, EdDidf(-0x21))) {
                      const vyycYX = oizBcO0("https://img11.360buyimg.com/cms/", vqvYv57, GyXvv0 = 13);
                      if (azla3t($["pictureInfoList"]["push"]({
                        ["picUrl"]: vyycYX
                      }), Z0NStv--, Z0NStv) <= 0x0) {
                        break;
                      }
                    }
                  }
                  if (Z0NStv <= 0) {
                    break;
                  }
                }
              }
              if (Z0NStv > 0) {
                for (let ZYjpco = azla3t(console["log"]("获取主图失败，使用自定义图片补充"), 0x0); ZYjpco < Z0NStv; ZYjpco++) $["pictureInfoList"]["push"](dTidbm7[ZYjpco % dTidbm7["length"]]);
              }
            }
            if (azla3t($["uppictureInfoList"] = [], $["pictureInfoList"] && $["pictureInfoList"]["length"] > 0x0)) {
              for (let mI9eyk of $["pictureInfoList"]) {
                const cpn1uy = azla3t($["base64Image"] = '', mI9eyk["picUrl"]);
                if (azla3t($["base64Image"] = await gNIdgj(cpn1uy), oizBcO0($["base64Image"], GyXvv0 = -10))) {
                  console["log"]("图片处理失败，跳过");
                  continue;
                }
                $["getShaidanUploadUrl"] = '';
                try {
                  await iiA3D0("getShaidanUploadUrl");
                } catch (error) {
                  console["error"]("图片处理时发生错误，跳过：", error);
                  continue;
                }
                if ($["getShaidanUploadUrl"]) {
                  $["uploadUrl"] = $["getShaidanUploadUrl"]?.["url"]
                  $["uppictureInfoList"]["push"]({
                    ["picUrl"]: $["uploadUrl"]
                  })
                } else {
                  console["log"]("图片处理失败，跳过");
                }
              }
            }
            if ($["uppictureInfoList"]["length"] < $["pictureInfoList"]["length"]) {
              console["log"]("评价图片未经过处理成功，本次不进行评价");
              continue;
            }
            if (azla3t(await iiA3D0("pubComment"), await $["wait"](parseInt(oizBcO0($["waitTime"] * 1, 0x64, GyXvv0 = 0xd), 10)), await iiA3D0("SendDSR"), $["runEnd"])) {
              return;
            }
            if ($["runponse"]) {
              let knmcmRP = azla3t(console["log"](`评价内容(${$["commentData"]["length"]}个字)：${$["commentData"]}`), $["uppictureInfoList"]["length"] != 0x0 && (console["log"]("晒图内容："), $["uppictureInfoList"]["forEach"](VBiKE3 => console["log"](VBiKE3["picUrl"]))), $["message"]["insert"](`评价内容(${$["commentData"]["length"]}个字)：${$["commentData"]}`), `[${woHje1["wname"]}],晒单奖励有${woHje1["estJingBean"] || 0}京豆,评价内容(${$["commentData"]["length"]}个字)：${$["commentData"]}`);
              KWprcuU["push"](knmcmRP);
            }
            if (azla3t(await $["wait"](parseInt(oizBcO0($["waitTime"] * 5, 0x3e8, GyXvv0 = 13), 10)), $["redhot"]) && true) {
              break;
            }
          } else {
            await $["wait"](parseInt(oizBcO0($["waitTime"] * 0x3, 0x2710, GyXvv0 = 13), 0xa));
          }
        }
        if (Ne72oK && KWprcuU["length"] > 0x0) {
          await __8acX["sendNotify"](`${$["name"]}通知`, `【京东账号${$["index"]}】${$["UserName"]}：已评价[${$["commentFinishedCount"]}]，未评价[${$["wait4CommentCount"]}]，${KWprcuU["join"]('，')}`);
        }
      }
    }
  } catch (e) {
    console["log"](`❌ 脚本运行遇到了错误\n${e}`);
  }
}
async function ESluWZh(VBiKE3, YF8C0Yl) {
  try {
    switch (VBiKE3) {
      case "getCommentWareList":
        if (YF8C0Yl["code"] === "0") {
          $["getCommentWareList"] = YF8C0Yl;
        } else {
          msg = LuPInE["getErrorMsg"](YF8C0Yl)
          console["log"](`评价页面失败：${msg}`)
        }
        break;
      case "getCommentWareList_old":
        if (YF8C0Yl["code"] === '\x30') {
          $["getCommentWareList_old"] = YF8C0Yl;
        } else {
          msg = LuPInE["getErrorMsg"](YF8C0Yl)
          console["log"](`评价页面失败：${msg}`)
        }
        break;
      case "commentEditInfo":
        if (YF8C0Yl["code"] === "0") {
          $["commentEditInfo"] = YF8C0Yl;
        } else {
          msg = LuPInE["getErrorMsg"](YF8C0Yl)
          console["log"](`评价页面失败：${msg}`)
        }
        break;
      case "getCommentListPage":
        if (YF8C0Yl["code"] === '\x30') {
          $["getCommentListPage"] = YF8C0Yl;
        } else {
          msg = LuPInE["getErrorMsg"](YF8C0Yl)
          console["log"](`好评查找失败：${msg}`)
        }
        break;
      case "getShaidanUploadUrl":
        if (YF8C0Yl["code"] === "0" && true) {
          $["getShaidanUploadUrl"] = YF8C0Yl;
        } else {
          msg = LuPInE["getErrorMsg"](YF8C0Yl)
          console["log"](`上传图片失败：${msg}`)
        }
        break;
      case "getCommentListWithCard":
        if (YF8C0Yl["code"] === 200 && YF8C0Yl["message"] && true) {
          $["getCommentListWithCard"] = YF8C0Yl;
        } else {
          msg = LuPInE["getErrorMsg"](YF8C0Yl)
          console["log"](`晒图页面失败：${msg}`)
        }
        break;
      case "tradeComment":
        if (!(YF8C0Yl["code"] === '\x30')) msg = LuPInE["getErrorMsg"](YF8C0Yl), console["log"](`物流评价失败：${msg}`);
        break;
      case "pubComment":
        if (YF8C0Yl["code"] === '\u0030') {
          $["runponse"] = true;
        } else {
          if (azla3t(msg = LuPInE["getErrorMsg"](YF8C0Yl), ["failed", "signature"]["some"](VBiKE3 => msg["includes"](VBiKE3))) && true) {
            console["log"](`评价失败：SIGN服务异常，必须使用WIKI文档搭建的SIGN服务`)
            $["runEnd"] = true
          } else {
            console["log"](`评价失败：${msg}`);
          }
        }
        break;
      case "SendDSR":
        if (YF8C0Yl["iRet"] === "0" && YF8C0Yl["data"]) {
          let KzKNoYl = (YF8C0Yl["data"]["jingdong_club_tradecomment_save_responce"] || {})["resultCode"] || '\x30',
            KWprcuU = (YF8C0Yl["data"]["jingdong_club_tradecomment_save_responce"] || {})["success"] || false;
          if (KWprcuU && KzKNoYl === '\x31') {
            console["log"](`订单[${$["itme"]["orderId"]}]物流服务评价成功`);
          } else {
            if (KzKNoYl === "2") {
              console["log"](`订单[${$["itme"]["orderId"]}]物流服务评价失败：该商品物流服务评价已完成`);
            } else {
              console["log"](`订单[${$["itme"]["orderId"]}]物流服务评价失败：${JSON["stringify"](YF8C0Yl)}`);
            }
          }
        } else {
          msg = LuPInE["getErrorMsg"](YF8C0Yl)
          console["log"](`物流服务评价失败：${msg}`)
        }
    }
  } catch (e) {
    console["log"](`❌ 未能正确处理 ${VBiKE3} 请求响应 ${e["message"] || e}`);
  }
}
async function iiA3D0(VBiKE3) {
  if ($["runEnd"]) {
    return;
  }
  let iicBa6z = '',
    EpPR9J = null,
    Ql9zaNt = null,
    hHjFjuX = {},
    FXGdr7U = {},
    XBUvEE = {};
  switch (VBiKE3) {
    case "getCommentWareList":
      iicBa6z = "https://api.m.jd.com/client.action"
      hHjFjuX = {
        ["pageIndex"]: $["pageIndex"],
        ["pageSize"]: '\u0031\u0030',
        ["planType"]: "1",
        ["status"]: $["status"]
      }
      Ql9zaNt = {
        ["functionId"]: "getCommentWareList"
      }
      EpPR9J = LuPInE["queryStringToObject"](await OIshiu7("getCommentWareList", hHjFjuX))
      break;
    case "getCommentWareList_old":
      iicBa6z = "https://api.m.jd.com/client.action"
      hHjFjuX = {
        ["pageIndex"]: $["pageIndex"],
        ["pageSize"]: '10',
        ["planType"]: "1",
        ["status"]: $["status"]
      }
      Ql9zaNt = {
        ["functionId"]: "getCommentWareList"
      }
      EpPR9J = LuPInE["queryStringToObject"](await OIshiu7("getCommentWareList", hHjFjuX))
      break;
    case "commentEditInfo":
      iicBa6z = "https://api.m.jd.com/client.action"
      hHjFjuX = {
        ["allFloorsFlag"]: null,
        ["business"]: '\x31',
        ["evaAuraVersion"]: "120602",
        ["lowSaleQuantity"]: null,
        ["orderId"]: $["itme"]["orderId"],
        ["qrType"]: '1',
        ["sku"]: $["itme"]["wareId"]
      }
      Ql9zaNt = {
        ["functionId"]: "commentEditInfo"
      }
      EpPR9J = LuPInE["queryStringToObject"](await OIshiu7("commentEditInfo", hHjFjuX))
      break;
    case "getCommentListPage":
      iicBa6z = "https://api.m.jd.com/client.action"
      hHjFjuX = {
        ["category"]: $["categoryId"],
        ["channel"]: null,
        ["extInfo"]: {
          ["bbtf"]: ''
        },
        ["isCurrentSku"]: false,
        ["isFirstRequest"]: true,
        ["num"]: '20',
        ["offset"]: '\x31',
        ["pageNum"]: "1",
        ["pageSize"]: '\u0032\u0030',
        ["pictureCommentType"]: '\u0041',
        ["scval"]: null,
        ["shadowMainSku"]: '\x30',
        ["shieldCurrentComment"]: '\x31',
        ["shopType"]: '\u0030',
        ["sku"]: $["itme"]["wareId"],
        ["sortType"]: 5,
        ["tagId"]: '',
        ["tagType"]: '',
        ["type"]: "0"
      }
      Ql9zaNt = {
        ["functionId"]: "getCommentListPage"
      }
      EpPR9J = await OIshiu7("getCommentListPage", hHjFjuX)
      break;
    case "getCommentListWithCard":
      iicBa6z = "https://api.m.jd.com/client.action"
      hHjFjuX = {
        ["sortType"]: "5",
        ["isCurrentSku"]: false,
        ["sku"]: $["itme"]["wareId"],
        ["pictureCommentType"]: '\x41',
        ["shieldCurrentComment"]: '\x31',
        ["shopType"]: "0",
        ["type"]: '\x34',
        ["shadowMainSku"]: '0',
        ["num"]: '\x31\x30',
        ["offset"]: 0x1,
        ["pageNum"]: 1,
        ["pageSize"]: '\u0031\u0030'
      }
      Ql9zaNt = {
        ["functionId"]: "getCommentListWithCard"
      }
      EpPR9J = await OIshiu7("getCommentListWithCard", hHjFjuX)
      break;
    case "getShaidanUploadUrl":
      iicBa6z = "https://api.m.jd.com/client.action"
      hHjFjuX = {
        ["imgData"]: $["base64Image"]
      }
      Ql9zaNt = {
        ["functionId"]: "getShaidanUploadUrl"
      }
      EpPR9J = await OIshiu7("getShaidanUploadUrl", hHjFjuX)
      break;
    case "tradeComment":
      iicBa6z = "https://api.m.jd.com/client.action"
      hHjFjuX = {
        ["shopId"]: $["itme"]["shopId"],
        ["orderId"]: $["itme"]["orderId"],
        ["shopType"]: '\u0030',
        ["surveyJson"]: "{\"id\":\"186194\",\"listAnswer\":\"[{\\\"key\\\":\\\"186194X32X591\\\",\\\"value\\\":\\\"A1\\\"},{\\\"key\\\":\\\"186194X32X592\\\",\\\"value\\\":\\\"A1\\\"},{\\\"key\\\":\\\"186194X32X593\\\",\\\"value\\\":\\\"A1\\\"},{\\\"key\\\":\\\"186194X32X899\\\",\\\"value\\\":\\\"A1\\\"},{\\\"key\\\":\\\"186194X32X900\\\",\\\"value\\\":\\\"A1\\\"}]\"}",
        ["content"]: '',
        ["bizType"]: "1",
        ["tags"]: ''
      }
      Ql9zaNt = {
        ["functionId"]: "tradeComment"
      }
      EpPR9J = await LuPInE["getSign"]("tradeComment", hHjFjuX)
      break;
    case "pubComment":
      iicBa6z = "https://api.m.jd.com/client.action"
      hHjFjuX = {
        ["productId"]: $["itme"]["wareId"],
        ["category"]: $["categoryId"],
        ["extInfo"]: {
          ["showShop"]: '\x30'
        },
        ["categoryList"]: $["itme"]["categoryList"],
        ["commentType"]: '',
        ["voucherStatus"]: '\x30',
        ["officerScore"]: "1699",
        ["anonymousFlag"]: "1",
        ["commentScore"]: "5",
        ["shopType"]: '\x30',
        ["orderId"]: $["itme"]["orderId"],
        ["shopId"]: $["itme"]["shopId"],
        ["addPictureFlag"]: '\x30',
        ["commentData"]: $["commentData"],
        ["pictureInfoList"]: $["uppictureInfoList"],
        ["officerLevel"]: '3',
        ["isCommentTagContent"]: "0"
      }
      Ql9zaNt = {
        ["functionId"]: "pubComment"
      }
      EpPR9J = await OIshiu7("pubComment", hHjFjuX)
      break;
    case "getSkuMainPic":
      XBUvEE = {
        ["appId"]: "65c24",
        ["functionId"]: "unionSearch",
        ["appid"]: 'u',
        ["clientVersion"]: LuPInE["getLatestAppVersion"](),
        ["client"]: "apple",
        ["body"]: {
          ["funName"]: "search",
          ["version"]: '\u0076\u0032',
          ["param"]: {
            ["keyWord"]: $["itme"]["wareId"]
          },
          ["unionId"]: '',
          ["clientPageId"]: "jingfen_mp"
        },
        ua: $.UA,
        t: true
      }
      FXGdr7U = await LIVxe2h["getH5st"](XBUvEE)
      iicBa6z = "https://api.m.jd.com/client.action"
      EpPR9J = FXGdr7U["paramsData"]
      break;
    case "SendDSR":
      XBUvEE = {
        ["appId"]: "c397b",
        ["functionId"]: "sendDSR",
        ["appid"]: "jd-cphdeveloper-m",
        ["body"]: {
          ["tenantCode"]: "jgm",
          ["bizModeClientType"]: '\u004d',
          ["bizModeFramework"]: '\u0048\u0035',
          ["appId"]: "m91d27dbf599dff74",
          ["token"]: "3852b12f8c4d869b7ed3e2b3c68c9436",
          ["uuid"]: '',
          ["externalLoginType"]: "1",
          ["sourceType"]: "wx_inter_order_comment",
          ["pin"]: $["UserName"],
          ["userclient"]: 29,
          ["orderId"]: $["itme"]["orderId"],
          ["otype"]: "0",
          ["DSR1"]: 5,
          ["DSR2"]: 0x5,
          ["DSR3"]: 0x5
        },
        ua: $.UA,
        t: true
      }
      FXGdr7U = await LIVxe2h["getH5st"](XBUvEE)
      iicBa6z = "https://api.m.jd.com/client.action"
      Ql9zaNt = Object["assign"]({}, FXGdr7U["paramsData"])
      break;
    default:
      console["log"](`❌ 未知请求 ${VBiKE3}`);
      return;
  }
  if (VBiKE3 !== "SendDSR" && (oizBcO0(EpPR9J, GyXvv0 = -0xa) || Object["keys"](EpPR9J)["length"] === 0)) {
    return;
  }
  const FqhfrR = {
    ["url"]: iicBa6z,
    ["method"]: "GET",
    ["headers"]: {
      ["Host"]: "api.m.jd.com",
      ["accept"]: "*/*",
      ["user-agent"]: $.UA,
      ["accept-language"]: "zh-Hans-JP;q=1, en-JP;q=0.9, zh-Hant-TW;q=0.8, ja-JP;q=0.7, en-US;q=0.6",
      ["Cookie"]: emmhZH3
    },
    ["params"]: Ql9zaNt,
    ["data"]: EpPR9J,
    ["timeout"]: 0xafc8,
    ["httpsTlsOptions"]: {
      ["secureProtocol"]: "TLSv1_2_method",
      ["ciphers"]: "ECDHE-RSA-AES256-GCM-SHA384"
    }
  };
  {
    delete (delete FqhfrR["data"], FqhfrR["headers"]["Content-Type"]);
  }
  if (VBiKE3 === "SendDSR") {
    FqhfrR["headers"]["origin"] = "https://comment.m.jd.com"
    FqhfrR["headers"]["referer"] = `https://comment.m.jd.com/evalProduct/index.html?source=wx_inter_order_comment&orderid=${$["itme"]["orderId"]}&ordertype=0&sceneval=2&refresh=yes`
  }
  if (VBiKE3 === "pubComment") {
    FqhfrR["headers"]["x-rp-client"] = "android_4.0.0"
    FqhfrR["headers"]["x-referer-package"] = "com.jingdong.app.mall"
  }
  const QhDBslY = 0x1;
  let yuCbXn = 0x0,
    zfjXhU = null;
  while (yuCbXn < QhDBslY) {
    const eKAtm6 = await LuPInE["request"](FqhfrR);
    if (oizBcO0(eKAtm6["success"], EdDidf(-0xa))) {
      if (azla3t(zfjXhU = `🚫 ${VBiKE3} 请求失败 ➜ ${eKAtm6["error"]}`, yuCbXn++, eKAtm6["status"]) && true) {
        if ([0x193, 0x1ed]["includes"](eKAtm6["status"])) {
          $["redhot"] = true;
        }
      }
      continue;
    }
    if (oizBcO0(eKAtm6?.["data"], GyXvv0 = -10)) {
      zfjXhU = `🚫 ${VBiKE3} 请求失败 ➜ 无响应数据`
      yuCbXn++
      continue;
    }
    await ESluWZh(VBiKE3, eKAtm6["data"]);
    break;
  }
  if (yuCbXn >= QhDBslY) {
    console["log"](zfjXhU);
  }
}
async function gNIdgj(VBiKE3) {
  const KzKNoYl = {
      ["url"]: VBiKE3,
      ["method"]: "GET",
      ["responseType"]: "arraybuffer",
      ["proxy"]: null,
      ["debug"]: false,
      ["timeout"]: 0xafc8
    },
    KWprcuU = 0x1;
  let iicBa6z = 0,
    EpPR9J = null;
  while (iicBa6z < KWprcuU) try {
    const Ql9zaNt = await LuPInE["request"](KzKNoYl);
    if (oizBcO0(Ql9zaNt["success"], EdDidf(-10))) {
      EpPR9J = `❌ 请求失败 ➜ ${Ql9zaNt["error"]}`
      iicBa6z++
      continue;
    }
    if (oizBcO0(Ql9zaNt?.["data"], GyXvv0 = -0xa)) {
      EpPR9J = `❌ 请求失败 ➜ 无响应数据`
      iicBa6z++
      continue;
    }
    if (oizBcO0(Ql9zaNt, EdDidf(-10)) || typeof Ql9zaNt !== "object") {
      EpPR9J = `❌ 请求返回值不正确`
      iicBa6z++
      continue;
    }
    const jeXUXBk = Buffer["from"](Ql9zaNt["data"], "binary"),
      hHjFjuX = await K6ioiVS(jeXUXBk)["metadata"]();
    if (oizBcO0(hHjFjuX, EdDidf(-10)) || oizBcO0(hHjFjuX["width"], GyXvv0 = -0xa) || oizBcO0(hHjFjuX["height"], EdDidf(-0xa))) {
      return azla3t(console["log"]("❌ 获取图片元数据失败"), null);
    }
    const FXGdr7U = hHjFjuX["width"],
      XBUvEE = hHjFjuX["height"],
      FqhfrR = 0x438,
      QhDBslY = Math["min"](0x1, oizBcO0(FqhfrR, Math["max"](FXGdr7U, XBUvEE), GyXvv0 = 0x1e)),
      yuCbXn = Math["floor"](oizBcO0(FXGdr7U, QhDBslY, GyXvv0 = -17)),
      zfjXhU = Math["floor"](oizBcO0(XBUvEE, QhDBslY, EdDidf(-0x11))),
      eKAtm6 = Math["max"](0x1, oizBcO0(yuCbXn, 20, GyXvv0 = -35)),
      woHje1 = Math["max"](1, oizBcO0(zfjXhU, 0x14, GyXvv0 = -35)),
      fDOOb49 = await K6ioiVS(jeXUXBk)["resize"](yuCbXn, zfjXhU)["extract"]({
        ["left"]: 0x0,
        ["top"]: 0x0,
        ["width"]: eKAtm6,
        ["height"]: woHje1
      })["jpeg"]({
        ["quality"]: 0x50
      })["toBuffer"](),
      NStCteO = fDOOb49["toString"]("base64");
    return NStCteO;
  } catch (error) {
    EpPR9J = `❌ 处理图片时发生错误: ${error["message"]}`
    iicBa6z++
  }
  if (iicBa6z >= KWprcuU) {
    console["log"](EpPR9J);
  }
  return null;
}
async function OIshiu7(CP2DFtT, VBiKE3) {
  const YF8C0Yl = await LuPInE["request"]({
      ["url"]: vyycYX,
      ["method"]: "POST",
      ["headers"]: {
        ["Content-Type"]: "application/json"
      },
      ["body"]: JSON["stringify"]({
        fn: CP2DFtT,
        ["body"]: VBiKE3
      }),
      ["proxy"]: null,
      ["debug"]: false,
      ["timeout"]: 0xea60
    }),
    KzKNoYl = YF8C0Yl["data"];
  if (KzKNoYl && KzKNoYl["body"]) {
    return KzKNoYl["body"];
  }
}
function CBFvJL(VBiKE3, YF8C0Yl, KzKNoYl, KWprcuU, iicBa6z, EpPR9J) {
  KWprcuU = {
    ["fc74nsa"]: () => {
      var [VBiKE3] = xhOkUK;
      let YF8C0Yl = VBiKE3["replace"]('\x5b', '')["replace"](']', ''),
        KzKNoYl = YF8C0Yl["split"]('\u0020')["map"](Number)["filter"](Number["isInteger"]),
        KWprcuU = KzKNoYl["join"]('\x3b');
      return KWprcuU;
    },
    ["JwDSGiL"]: () => {
      var [VBiKE3] = xhOkUK;
      const YF8C0Yl = dTidbm7[Math["floor"](oizBcO0(Math["random"](), dTidbm7["length"], EdDidf(-0x11)))],
        KzKNoYl = nSG3xHe[Math["floor"](oizBcO0(Math["random"](), nSG3xHe["length"], GyXvv0 = -17))],
        KWprcuU = yh6bnH[Math["floor"](oizBcO0(Math["random"](), yh6bnH["length"], EdDidf(-0x11)))],
        iicBa6z = ZYjpco[Math["floor"](oizBcO0(Math["random"](), ZYjpco["length"], EdDidf(-0x11)))],
        EpPR9J = `${VBiKE3},${YF8C0Yl}${KzKNoYl}${KWprcuU}${iicBa6z}`;
      return EpPR9J;
    },
    ["KayHr4"]: () => {
      var [VBiKE3, YF8C0Yl] = xhOkUK;
      const KzKNoYl = VBiKE3["slice"](1)["split"]('\u002e')["map"](Number),
        KWprcuU = YF8C0Yl["slice"](0x1)["split"]('\x2e')["map"](Number);
      for (let iicBa6z = 0; iicBa6z < Math["max"](KzKNoYl["length"], KWprcuU["length"]); iicBa6z++) {
        const EpPR9J = KzKNoYl[iicBa6z] || 0,
          Ql9zaNt = KWprcuU[iicBa6z] || 0x0;
        if (EpPR9J > Ql9zaNt && true) {
          return 1;
        }
        if (EpPR9J < Ql9zaNt) {
          return oizBcO0(1, EdDidf(-33));
        }
      }
      return 0x0;
    }
  }
  iicBa6z = iicBa6z
  if (YF8C0Yl == "GvB6WSb") {
    xhOkUK = [];
  }
  EpPR9J = {
    ["fc74nsa"]: 0x1,
    ["JwDSGiL"]: 1,
    ["KayHr4"]: 2
  };
  function Ql9zaNt(YF8C0Yl) {
    YF8C0Yl = "YxrErk" in IhkvLup;
    var KzKNoYl = function (...YF8C0Yl) {
        return azla3t(xhOkUK = YF8C0Yl, KWprcuU[VBiKE3].call(this));
      },
      iicBa6z = EpPR9J[VBiKE3];
    if (YF8C0Yl) {
      var Ql9zaNt = () => {
        var YF8C0Yl = redacted.useState(false);
        return x(ErrorBoundary, null, x(DisplayName, null));
      };
    }
    if (iicBa6z) {
      return qr4tsGT(KzKNoYl, iicBa6z);
    }
    return KzKNoYl;
  }
  iicBa6z = YF8C0Yl == "nbSqYpK" ? CeY0j9S[VBiKE3] || (CeY0j9S[VBiKE3] = Ql9zaNt()) : KWprcuU[VBiKE3]();
  return KzKNoYl == "JLopCHO" ? {
    fyGNgb: iicBa6z
  } : iicBa6z;
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