(function(){"use strict";try{if(typeof document<"u"){var r=document.createElement("style");r.appendChild(document.createTextNode(".ar-line-control{position:relative;height:8px;border-radius:5px;background-color:#e6e6e6}.ar-line-control__head{position:absolute;height:inherit;background-color:#616161;border-radius:inherit}.ar-volume{display:flex;align-items:center;line-height:10px}.ar-volume-bar{width:50px;height:6px;background:#e6e6e6;border-radius:4px;position:relative}.ar-volume__icon{fill:#747474;width:24px;height:24px;border:0;border-radius:0;padding:0;background-color:unset;margin-right:3px}.ar-player{width:380px;height:unset;border:0;border-radius:0;display:flex;flex-direction:row;align-items:center;justify-content:center;background-color:unset;font-family:Roboto,sans-serif}.ar-player>.ar-player-bar{border:1px solid #E8E8E8;border-radius:24px;margin:0 0 0 5px}.ar-player>.ar-player-bar>.ar-player__progress{width:125px}.ar-player-bar{display:flex;align-items:center;height:38px;padding:0 12px;margin:0 5px}.ar-player-actions{width:55%;display:flex;align-items:center;justify-content:space-around}.ar-player__progress{width:160px;margin:0 8px}.ar-player__time{color:#54545480;font-size:16px;width:41px}.ar-player__play{width:45px;height:45px;background-color:#fff;box-shadow:0 2px 11px 11px #00000012}.ar-player__play--active{fill:#fff!important;background-color:#05cbcd!important}.ar-player__play--active:hover{fill:#505050!important}.ar{width:420px;font-family:Roboto,sans-serif;border-radius:16px;background-color:#fafafa;box-shadow:0 4px 18px #0000002b;position:relative;box-sizing:content-box}.ar-content{padding:16px;display:flex;flex-direction:column;align-items:center}.ar-records{height:138px;padding-top:1px;overflow-y:auto;margin-bottom:20px}.ar-records__record{width:320px;height:45px;padding:0 10px;margin:0 auto;line-height:45px;display:flex;justify-content:space-between;border-bottom:1px solid #e8e8e8;position:relative}.ar-records__record--selected{border:1px solid #e8e8e8;border-radius:24px;background-color:#fff;margin-top:-1px;padding:0 34px}.ar-recorder{position:relative;display:flex;flex-direction:column;align-items:center}.ar-recorder__duration{color:#aeaeae;font-size:32px;font-weight:500;margin-top:20px;margin-bottom:16px}.ar-recorder__stop{position:absolute;top:10px;right:-52px}.ar-recorder__time-limit{position:absolute;color:#aeaeae;font-size:12px;top:128px}.ar-recorder__records-limit{position:absolute;color:#aeaeae;font-size:13px;top:78px}.ar-spinner{display:flex;height:30px;position:absolute;left:0;right:0;top:0;bottom:0;margin:auto;width:144px;z-index:10}.ar-spinner__dot{display:block;margin:0 8px;border-radius:50%;width:30px;height:30px;background:#05cbcd;animation-name:blink;animation-duration:1.4s;animation-iteration-count:infinite;animation-fill-mode:both}.ar-spinner__dot:nth-child(2){animation-delay:.2s}.ar-spinner__dot:nth-child(3){animation-delay:.4s}@keyframes blink{0%{opacity:.2}20%{opacity:1}to{opacity:.2}}.ar__text{color:#54545480;font-size:16px}.ar__blur{filter:blur(2px);opacity:.7}.ar__overlay{position:absolute;width:100%;height:100%;z-index:10}.ar__upload-status{text-align:center;font-size:10px;padding:2px;letter-spacing:1px;position:absolute;bottom:0}.ar__upload-status--success{color:green}.ar__upload-status--fail{color:red}.ar__rm{cursor:pointer;position:absolute;width:6px;height:6px;padding:6px;line-height:6px;margin:auto;left:10px;bottom:0;top:0;color:#f4785a}.ar__downloader,.ar__uploader{position:absolute;top:0;bottom:0;margin:auto}.ar__downloader{right:115px}.ar__uploader{right:85px}.ar-icon{fill:#747474;border-radius:50%;border:1px solid #05CBCD;background-color:#fff;padding:5px;cursor:pointer;transition:.2s}.ar-icon:hover{fill:#505050}.ar-icon--no-border{border:0;border-radius:0;padding:0}.ar-icon--rec{fill:#fff;background-color:#ff6b64;border-color:transparent}.ar-icon--pulse{animation:ripple .5s linear infinite}@keyframes ripple{0%{box-shadow:0 0 #ff00001a,0 0 0 1px #ff00001a,0 0 0 5px #ff00001a}to{box-shadow:0 0 #ff00001a,0 0 0 10px #ff00001a,0 0 0 20px #f000}}.ar-icon__xs{width:18px;height:18px;line-height:18px}.ar-icon__sm{width:30px;height:30px;line-height:30px}.ar-icon__lg{width:45px;height:45px;line-height:45px;box-shadow:0 2px 5px 1px #9e9e9e80}")),document.head.appendChild(r)}}catch(o){console.error("vite-plugin-css-injected-by-js",o)}})();
import { openBlock as ae, createElementBlock as de, createElementVNode as re, normalizeStyle as $a, resolveComponent as Me, createVNode as Ve, normalizeClass as ut, toDisplayString as xe, createBlock as pt, createCommentVNode as De, Fragment as es, renderList as ts } from "vue";
const Ye = (p, E) => {
  const A = p.__vccOpts || p;
  for (const [j, K] of E)
    A[j] = K;
  return A;
}, as = {
  name: "IconButton",
  props: {
    name: { type: String }
  },
  data: function() {
    return {
      icons: {
        download: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M19 12v7H5v-7H3v7c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-7h-2zm-6 .67l2.59-2.58L17 11.5l-5 5-5-5 1.41-1.41L11 12.67V3h2z"/><path fill="none" d="M0 0h24v24H0z"/></svg>',
        mic: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 14c1.66 0 2.99-1.34 2.99-3L15 5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3zm5.3-3c0 3-2.54 5.1-5.3 5.1S6.7 14 6.7 11H5c0 3.41 2.72 6.23 6 6.72V21h2v-3.28c3.28-.48 6-3.3 6-6.72h-1.7z"/><path d="M0 0h24v24H0z" fill="none"/></svg>',
        pause: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/><path d="M0 0h24v24H0z" fill="none"/></svg>',
        play: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/><path d="M0 0h24v24H0z" fill="none"/></svg>',
        save: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path d="M17 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V7l-4-4zm-5 16c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm3-10H5V5h10v4z"/></svg>',
        stop: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path d="M6 6h12v12H6z"/></svg>',
        volume: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/><path d="M0 0h24v24H0z" fill="none"/></svg>'
      }
    };
  }
}, ss = ["innerHTML"];
function rs(p, E, A, j, K, D) {
  return ae(), de("div", {
    innerHTML: p.icons[A.name]
  }, null, 8, ss);
}
const st = /* @__PURE__ */ Ye(as, [["render", rs]]);
function Tt(p, E) {
  const A = E.getBoundingClientRect().width, j = p.target.getBoundingClientRect().left;
  let K = (p.clientX - j) / A;
  try {
    if (!p.target.className.match(/^ar-line-control/))
      return;
  } catch {
    return;
  }
  return K = K < 0 ? 0 : K, K = K > 1 ? 1 : K, K;
}
function Pe(p) {
  return new Date(p * 1e3).toISOString().substr(14, 5);
}
const ns = {
  name: "LineControl",
  props: {
    refId: { type: String },
    eventName: { type: String },
    percentage: { type: Number, default: 0 },
    rowDirection: { type: Boolean, default: !0 }
  },
  methods: {
    onMouseDown(p) {
      const E = Tt(p, this.$refs[this.refId]);
      this.$emit("change-linehead", E), document.addEventListener("mousemove", this.onMouseMove), document.addEventListener("mouseup", this.onMouseUp);
    },
    onMouseUp(p) {
      document.removeEventListener("mouseup", this.onMouseUp), document.removeEventListener("mousemove", this.onMouseMove);
      const E = Tt(p, this.$refs[this.refId]);
      this.$emit("change-linehead", E);
    },
    onMouseMove(p) {
      const E = Tt(p, this.$refs[this.refId]);
      this.$emit("change-linehead", E);
    }
  },
  computed: {
    calculateSize() {
      const p = this.percentage < 1 ? this.percentage * 100 : this.percentage;
      return `${this.rowDirection ? "width" : "height"}: ${p}%`;
    }
  }
};
function is(p, E, A, j, K, D) {
  return ae(), de("div", {
    ref: A.refId,
    class: "ar-line-control",
    onMousedown: E[0] || (E[0] = (...Z) => D.onMouseDown && D.onMouseDown(...Z))
  }, [
    re("div", {
      class: "ar-line-control__head",
      style: $a(D.calculateSize)
    }, null, 4)
  ], 544);
}
const Ta = /* @__PURE__ */ Ye(ns, [["render", is]]), _s = {
  name: "VolumeControl",
  data() {
    return {
      volume: 0.8
    };
  },
  components: {
    IconButton: st,
    LineControl: Ta
  },
  methods: {
    onChangeLinehead(p) {
      this.$emit("change-volume", p), this.volume = p;
    }
  }
}, os = { class: "ar-volume" };
function ls(p, E, A, j, K, D) {
  const Z = Me("icon-button"), Y = Me("line-control");
  return ae(), de("div", os, [
    Ve(Z, {
      class: "ar-volume__icon",
      name: "volume"
    }),
    Ve(Y, {
      class: "ar-volume-bar",
      "ref-id": "volume",
      percentage: K.volume,
      onChangeLinehead: D.onChangeLinehead
    }, null, 8, ["percentage", "onChangeLinehead"])
  ]);
}
const fs = /* @__PURE__ */ Ye(_s, [["render", ls]]), cs = {
  name: "AudioPlayer",
  props: {
    src: { type: String },
    record: { type: Object },
    filename: { type: String }
  },
  data() {
    return {
      isPlaying: !1,
      duration: Pe(0),
      playedTime: Pe(0),
      progress: 0
    };
  },
  components: {
    IconButton: st,
    LineControl: Ta,
    VolumeControl: fs
  },
  mounted: function() {
    this.player = document.getElementById(this.playerUniqId), this.player.addEventListener("ended", () => {
      this.isPlaying = !1;
    }), this.player.addEventListener("loadeddata", () => {
      this._resetProgress(), this.duration = Pe(this.player.duration);
    }), this.player.addEventListener("timeupdate", this._onTimeUpdate);
  },
  computed: {
    audioSource() {
      const p = this.src || this.record.url;
      return p || (this._resetProgress(), null);
    },
    playBtnIcon() {
      return this.isPlaying ? "pause" : "play";
    },
    playerUniqId() {
      return `audio-player${this._uid}`;
    }
  },
  methods: {
    playback() {
      this.audioSource && (this.isPlaying ? this.player.pause() : setTimeout(() => {
        this.player.play();
      }, 0), this.isPlaying = !this.isPlaying);
    },
    _resetProgress() {
      this.isPlaying && this.player.pause(), this.duration = Pe(0), this.playedTime = Pe(0), this.progress = 0, this.isPlaying = !1;
    },
    _onTimeUpdate() {
      this.playedTime = Pe(this.player.currentTime), this.progress = this.player.currentTime / this.player.duration * 100;
    },
    _onUpdateProgress(p) {
      p && (this.player.currentTime = p * this.player.duration);
    },
    _onChangeVolume(p) {
      p && (this.player.volume = p);
    }
  }
}, hs = { class: "ar-player" }, us = { class: "ar-player-actions" }, ps = { class: "ar-player-bar" }, ms = { class: "ar-player__time" }, bs = { class: "ar-player__time" }, ds = ["id", "src"];
function gs(p, E, A, j, K, D) {
  const Z = Me("icon-button"), Y = Me("line-control"), $ = Me("volume-control");
  return ae(), de("div", hs, [
    re("div", us, [
      Ve(Z, {
        id: "play",
        class: ut(["ar-icon ar-icon__lg ar-player__play", { "ar-player__play--active": K.isPlaying }]),
        name: D.playBtnIcon,
        onClick: D.playback
      }, null, 8, ["name", "class", "onClick"])
    ]),
    re("div", ps, [
      re("div", ms, xe(K.playedTime), 1),
      Ve(Y, {
        class: "ar-player__progress",
        "ref-id": "progress",
        percentage: K.progress,
        onChangeLinehead: D._onUpdateProgress
      }, null, 8, ["percentage", "onChangeLinehead"]),
      re("div", bs, xe(K.duration), 1),
      Ve($, { onChangeVolume: D._onChangeVolume }, null, 8, ["onChangeVolume"])
    ]),
    re("audio", {
      id: D.playerUniqId,
      src: D.audioSource
    }, null, 8, ds)
  ]);
}
const Yt = /* @__PURE__ */ Ye(cs, [["render", gs]]), vs = {
  name: "Downloader",
  props: {
    record: { type: Object },
    filename: { type: String }
  },
  components: {
    IconButton: st
  },
  methods: {
    download() {
      if (!this.record.url)
        return;
      const p = this.record.blob.type.split("/")[1], E = document.createElement("a");
      E.href = this.record.url, E.download = `${this.filename}.${p}`, E.click();
    }
  }
};
function ws(p, E, A, j, K, D) {
  const Z = Me("icon-button");
  return ae(), pt(Z, {
    id: "download",
    class: "ar-icon ar-icon__xs ar-icon--no-border",
    name: "download",
    onClick: D.download
  }, null, 8, ["onClick"]);
}
const Ms = /* @__PURE__ */ Ye(vs, [["render", ws]]), ka = {
  props: {
    filename: { type: String, default: "record" },
    format: { type: String, default: "mp3" },
    headers: { type: Object, default: () => ({}) },
    uploadUrl: { type: String }
  }
}, Ss = {
  name: "Uploader",
  mixins: [ka],
  props: {
    record: { type: Object },
    customUploader: { type: Function }
  },
  emits: ["start-upload", "end-upload"],
  components: {
    IconButton: st
  },
  methods: {
    upload() {
      if (this.customUploader) {
        this.customUploader(this.record);
        return;
      }
      if (!this.record.url)
        return;
      this.$emit("start-upload");
      const p = new FormData();
      p.append("audio", this.record.blob, `${this.filename}.mp3`);
      const E = Object.assign(this.headers, {});
      E["Content-Type"] = `multipart/form-data; boundary=${p._boundary}`, this.$http.post(this.uploadUrl, p, { headers: E }).then((A) => {
        this.$emit("end-upload", { status: "success", response: A });
      }).catch((A) => {
        this.$emit("end-upload", { status: "fail", response: A });
      });
    }
  }
};
function Rs(p, E, A, j, K, D) {
  const Z = Me("icon-button");
  return ae(), pt(Z, {
    name: "save",
    class: "ar-icon ar-icon__xs ar-icon--no-border",
    onClick: D.upload
  }, null, 8, ["onClick"]);
}
const Bs = /* @__PURE__ */ Ye(Ss, [["render", Rs]]);
function As(p) {
  return new Int8Array(p);
}
function Ea(p) {
  return new Int16Array(p);
}
function xa(p) {
  return new Int32Array(p);
}
function Pa(p) {
  return new Float32Array(p);
}
function ys(p) {
  return new Float64Array(p);
}
function Va(p) {
  if (p.length == 1)
    return Pa(p[0]);
  var E = p[0];
  p = p.slice(1);
  for (var A = [], j = 0; j < E; j++)
    A.push(Va(p));
  return A;
}
function Ia(p) {
  if (p.length == 1)
    return xa(p[0]);
  var E = p[0];
  p = p.slice(1);
  for (var A = [], j = 0; j < E; j++)
    A.push(Ia(p));
  return A;
}
function La(p) {
  if (p.length == 1)
    return Ea(p[0]);
  var E = p[0];
  p = p.slice(1);
  for (var A = [], j = 0; j < E; j++)
    A.push(La(p));
  return A;
}
function Da(p) {
  if (p.length == 1)
    return new Array(p[0]);
  var E = p[0];
  p = p.slice(1);
  for (var A = [], j = 0; j < E; j++)
    A.push(Da(p));
  return A;
}
var Na = {};
Na.fill = function(p, E, A, j) {
  if (arguments.length == 2)
    for (var K = 0; K < p.length; K++)
      p[K] = arguments[1];
  else
    for (var K = E; K < A; K++)
      p[K] = j;
};
var rt = {};
rt.arraycopy = function(p, E, A, j, K) {
  for (var D = E + K; E < D; )
    A[j++] = p[E++];
};
rt.out = {};
rt.out.println = function(p) {
  console.log(p);
};
rt.out.printf = function() {
  console.log.apply(console, arguments);
};
var mt = {};
mt.SQRT2 = 1.4142135623730951;
mt.FAST_LOG10 = function(p) {
  return Math.log10(p);
};
mt.FAST_LOG10_X = function(p, E) {
  return Math.log10(p) * E;
};
function Te(p) {
  this.ordinal = p;
}
Te.short_block_allowed = new Te(0);
Te.short_block_coupled = new Te(1);
Te.short_block_dispensed = new Te(2);
Te.short_block_forced = new Te(3);
var Xa = {};
Xa.MAX_VALUE = 34028235e31;
function ue(p) {
  this.ordinal = p;
}
ue.vbr_off = new ue(0);
ue.vbr_mt = new ue(1);
ue.vbr_rh = new ue(2);
ue.vbr_abr = new ue(3);
ue.vbr_mtrh = new ue(4);
ue.vbr_default = ue.vbr_mtrh;
var Ts = function(p) {
}, G1 = {
  System: rt,
  VbrMode: ue,
  Float: Xa,
  ShortBlock: Te,
  Util: mt,
  Arrays: Na,
  new_array_n: Da,
  new_byte: As,
  new_double: ys,
  new_float: Pa,
  new_float_n: Va,
  new_int: xa,
  new_int_n: Ia,
  new_short: Ea,
  new_short_n: La,
  assert: Ts
}, kt, ea;
function ks() {
  if (ea)
    return kt;
  ea = 1;
  var p = G1, E = p.System, A = p.Util, j = p.Arrays, K = p.new_float, D = se();
  function Z() {
    var Y = [
      -0.1482523854003001,
      32.308141959636465,
      296.40344946382766,
      883.1344870032432,
      11113.947376231741,
      1057.2713659324597,
      305.7402417275812,
      30.825928907280012,
      /* 15 */
      3.8533188138216365,
      59.42900443849514,
      709.5899960123345,
      5281.91112291017,
      -5829.66483675846,
      -817.6293103748613,
      -76.91656988279972,
      -4.594269939176596,
      0.9063471690191471,
      0.1960342806591213,
      -0.15466694054279598,
      34.324387823855965,
      301.8067566458425,
      817.599602898885,
      11573.795901679885,
      1181.2520595540152,
      321.59731579894424,
      31.232021761053772,
      /* 14 */
      3.7107095756221318,
      53.650946155329365,
      684.167428119626,
      5224.56624370173,
      -6366.391851890084,
      -908.9766368219582,
      -89.83068876699639,
      -5.411397422890401,
      0.8206787908286602,
      0.3901806440322567,
      -0.16070888947830023,
      36.147034243915876,
      304.11815768187864,
      732.7429163887613,
      11989.60988270091,
      1300.012278487897,
      335.28490093152146,
      31.48816102859945,
      /* 13 */
      3.373875931311736,
      47.232241542899175,
      652.7371796173471,
      5132.414255594984,
      -6909.087078780055,
      -1001.9990371107289,
      -103.62185754286375,
      -6.104916304710272,
      0.7416505462720353,
      0.5805693545089249,
      -0.16636367662261495,
      37.751650073343995,
      303.01103387567713,
      627.9747488785183,
      12358.763425278165,
      1412.2779918482834,
      346.7496836825721,
      31.598286663170416,
      /* 12 */
      3.1598635433980946,
      40.57878626349686,
      616.1671130880391,
      5007.833007176154,
      -7454.040671756168,
      -1095.7960341867115,
      -118.24411666465777,
      -6.818469345853504,
      0.6681786379192989,
      0.7653668647301797,
      -0.1716176790982088,
      39.11551877123304,
      298.3413246578966,
      503.5259106886539,
      12679.589408408976,
      1516.5821921214542,
      355.9850766329023,
      31.395241710249053,
      /* 11 */
      2.9164211881972335,
      33.79716964664243,
      574.8943997801362,
      4853.234992253242,
      -7997.57021486075,
      -1189.7624067269965,
      -133.6444792601766,
      -7.7202770609839915,
      0.5993769336819237,
      0.9427934736519954,
      -0.17645823955292173,
      40.21879108166477,
      289.9982036694474,
      359.3226160751053,
      12950.259102786438,
      1612.1013903507662,
      362.85067106591504,
      31.045922092242872,
      /* 10 */
      2.822222032597987,
      26.988862316190684,
      529.8996541764288,
      4671.371946949588,
      -8535.899136645805,
      -1282.5898586244496,
      -149.58553632943463,
      -8.643494270763135,
      0.5345111359507916,
      1.111140466039205,
      -0.36174739330527045,
      41.04429910497807,
      277.5463268268618,
      195.6386023135583,
      13169.43812144731,
      1697.6433561479398,
      367.40983966190305,
      30.557037410382826,
      /* 9 */
      2.531473372857427,
      20.070154905927314,
      481.50208566532336,
      4464.970341588308,
      -9065.36882077239,
      -1373.62841526722,
      -166.1660487028118,
      -9.58289321133207,
      0.4729647758913199,
      1.268786568327291,
      -0.36970682634889585,
      41.393213350082036,
      261.2935935556502,
      12.935476055240873,
      13336.131683328815,
      1772.508612059496,
      369.76534388639965,
      29.751323653701338,
      2.4023193045459172,
      13.304795348228817,
      430.5615775526625,
      4237.0568611071185,
      -9581.931701634761,
      -1461.6913552409758,
      -183.12733958476446,
      -10.718010163869403,
      0.41421356237309503,
      /* tan(PI/8) */
      1.414213562373095,
      -0.37677560326535325,
      41.619486213528496,
      241.05423794991074,
      -187.94665032361226,
      13450.063605744153,
      1836.153896465782,
      369.4908799925761,
      29.001847876923147,
      /* 7 */
      2.0714759319987186,
      6.779591200894186,
      377.7767837205709,
      3990.386575512536,
      -10081.709459700915,
      -1545.947424837898,
      -200.3762958015653,
      -11.864482073055006,
      0.3578057213145241,
      1.546020906725474,
      -0.3829366947518991,
      41.1516456456653,
      216.47684307105183,
      -406.1569483347166,
      13511.136535077321,
      1887.8076599260432,
      367.3025214564151,
      28.136213436723654,
      /* 6 */
      1.913880671464418,
      0.3829366947518991,
      323.85365704338597,
      3728.1472257487526,
      -10561.233882199509,
      -1625.2025997821418,
      -217.62525175416,
      -13.015432208941645,
      0.3033466836073424,
      1.66293922460509,
      -0.5822628872992417,
      40.35639251440489,
      188.20071124269245,
      -640.2706748618148,
      13519.21490106562,
      1927.6022433578062,
      362.8197642637487,
      26.968821921868447,
      /* 5 */
      1.7463817695935329,
      -5.62650678237171,
      269.3016715297017,
      3453.386536448852,
      -11016.145278780888,
      -1698.6569643425091,
      -234.7658734267683,
      -14.16351421663124,
      0.2504869601913055,
      1.76384252869671,
      -0.5887180101749253,
      39.23429103868072,
      155.76096234403798,
      -889.2492977967378,
      13475.470561874661,
      1955.0535223723712,
      356.4450994756727,
      25.894952980042156,
      /* 4 */
      1.5695032905781554,
      -11.181939564328772,
      214.80884394039484,
      3169.1640829158237,
      -11443.321309975563,
      -1765.1588461316153,
      -251.68908574481912,
      -15.49755935939164,
      0.198912367379658,
      1.847759065022573,
      -0.7912582233652842,
      37.39369355329111,
      119.699486012458,
      -1151.0956593239027,
      13380.446257078214,
      1970.3952110853447,
      348.01959814116185,
      24.731487364283044,
      /* 3 */
      1.3850130831637748,
      -16.421408865300393,
      161.05030052864092,
      2878.3322807850063,
      -11838.991423510031,
      -1823.985884688674,
      -268.2854986386903,
      -16.81724543849939,
      0.1483359875383474,
      1.913880671464418,
      -0.7960642926861912,
      35.2322109610459,
      80.01928065061526,
      -1424.0212633405113,
      13235.794061869668,
      1973.804052543835,
      337.9908651258184,
      23.289159354463873,
      1.3934255946442087,
      -21.099669467133474,
      108.48348407242611,
      2583.700758091299,
      -12199.726194855148,
      -1874.2780658979746,
      -284.2467154529415,
      -18.11369784385905,
      0.09849140335716425,
      1.961570560806461,
      -0.998795456205172,
      32.56307803611191,
      36.958364584370486,
      -1706.075448829146,
      13043.287458812016,
      1965.3831106103316,
      326.43182772364605,
      22.175018750622293,
      1.198638339011324,
      -25.371248002043963,
      57.53505923036915,
      2288.41886619975,
      -12522.674544337233,
      -1914.8400385312243,
      -299.26241273417224,
      -19.37805630698734,
      0.04912684976946725,
      1.990369453344394,
      0.035780907 * A.SQRT2 * 0.5 / 2384e-9,
      0.017876148 * A.SQRT2 * 0.5 / 2384e-9,
      3134727e-9 * A.SQRT2 * 0.5 / 2384e-9,
      2457142e-9 * A.SQRT2 * 0.5 / 2384e-9,
      971317e-9 * A.SQRT2 * 0.5 / 2384e-9,
      218868e-9 * A.SQRT2 * 0.5 / 2384e-9,
      101566e-9 * A.SQRT2 * 0.5 / 2384e-9,
      13828e-9 * A.SQRT2 * 0.5 / 2384e-9,
      12804.797818791945,
      1945.5515939597317,
      313.4244966442953,
      20.801593959731544,
      1995.1556208053692,
      9.000838926174497,
      -29.20218120805369
      /* 2.384e-06/2.384e-06 */
    ], $ = 12, u1 = 36, g = [
      [
        2382191739347913e-28,
        6423305872147834e-28,
        9400849094049688e-28,
        1122435026096556e-27,
        1183840321267481e-27,
        1122435026096556e-27,
        940084909404969e-27,
        6423305872147839e-28,
        2382191739347918e-28,
        5456116108943412e-27,
        4878985199565852e-27,
        4240448995017367e-27,
        3559909094758252e-27,
        2858043359288075e-27,
        2156177623817898e-27,
        1475637723558783e-27,
        8371015190102974e-28,
        2599706096327376e-28,
        -5456116108943412e-27,
        -4878985199565852e-27,
        -4240448995017367e-27,
        -3559909094758252e-27,
        -2858043359288076e-27,
        -2156177623817898e-27,
        -1475637723558783e-27,
        -8371015190102975e-28,
        -2599706096327376e-28,
        -2382191739347923e-28,
        -6423305872147843e-28,
        -9400849094049696e-28,
        -1122435026096556e-27,
        -1183840321267481e-27,
        -1122435026096556e-27,
        -9400849094049694e-28,
        -642330587214784e-27,
        -2382191739347918e-28
      ],
      [
        2382191739347913e-28,
        6423305872147834e-28,
        9400849094049688e-28,
        1122435026096556e-27,
        1183840321267481e-27,
        1122435026096556e-27,
        9400849094049688e-28,
        6423305872147841e-28,
        2382191739347918e-28,
        5456116108943413e-27,
        4878985199565852e-27,
        4240448995017367e-27,
        3559909094758253e-27,
        2858043359288075e-27,
        2156177623817898e-27,
        1475637723558782e-27,
        8371015190102975e-28,
        2599706096327376e-28,
        -5461314069809755e-27,
        -4921085770524055e-27,
        -4343405037091838e-27,
        -3732668368707687e-27,
        -3093523840190885e-27,
        -2430835727329465e-27,
        -1734679010007751e-27,
        -974825365660928e-27,
        -2797435120168326e-28,
        0,
        0,
        0,
        0,
        0,
        0,
        -2283748241799531e-28,
        -4037858874020686e-28,
        -2146547464825323e-28
      ],
      [
        0.1316524975873958,
        /* win[SHORT_TYPE] */
        0.414213562373095,
        0.7673269879789602,
        1.091308501069271,
        /* tantab_l */
        1.303225372841206,
        1.56968557711749,
        1.920982126971166,
        2.414213562373094,
        3.171594802363212,
        4.510708503662055,
        7.595754112725146,
        22.90376554843115,
        0.984807753012208,
        /* cx */
        0.6427876096865394,
        0.3420201433256688,
        0.9396926207859084,
        -0.1736481776669303,
        -0.7660444431189779,
        0.8660254037844387,
        0.5,
        -0.5144957554275265,
        /* ca */
        -0.4717319685649723,
        -0.3133774542039019,
        -0.1819131996109812,
        -0.09457419252642064,
        -0.04096558288530405,
        -0.01419856857247115,
        -0.003699974673760037,
        0.8574929257125442,
        /* cs */
        0.8817419973177052,
        0.9496286491027329,
        0.9833145924917901,
        0.9955178160675857,
        0.9991605581781475,
        0.999899195244447,
        0.9999931550702802
      ],
      [
        0,
        0,
        0,
        0,
        0,
        0,
        2283748241799531e-28,
        4037858874020686e-28,
        2146547464825323e-28,
        5461314069809755e-27,
        4921085770524055e-27,
        4343405037091838e-27,
        3732668368707687e-27,
        3093523840190885e-27,
        2430835727329466e-27,
        1734679010007751e-27,
        974825365660928e-27,
        2797435120168326e-28,
        -5456116108943413e-27,
        -4878985199565852e-27,
        -4240448995017367e-27,
        -3559909094758253e-27,
        -2858043359288075e-27,
        -2156177623817898e-27,
        -1475637723558782e-27,
        -8371015190102975e-28,
        -2599706096327376e-28,
        -2382191739347913e-28,
        -6423305872147834e-28,
        -9400849094049688e-28,
        -1122435026096556e-27,
        -1183840321267481e-27,
        -1122435026096556e-27,
        -9400849094049688e-28,
        -6423305872147841e-28,
        -2382191739347918e-28
      ]
    ], m = g[D.SHORT_TYPE], N = g[D.SHORT_TYPE], n1 = g[D.SHORT_TYPE], U = g[D.SHORT_TYPE], r1 = [
      0,
      1,
      16,
      17,
      8,
      9,
      24,
      25,
      4,
      5,
      20,
      21,
      12,
      13,
      28,
      29,
      2,
      3,
      18,
      19,
      10,
      11,
      26,
      27,
      6,
      7,
      22,
      23,
      14,
      15,
      30,
      31
    ];
    function W(h, w, e) {
      for (var l = 10, R = w + 238 - 14 - 286, P = -15; P < 0; P++) {
        var O, y, x;
        O = Y[l + -10], y = h[R + -224] * O, x = h[w + 224] * O, O = Y[l + -9], y += h[R + -160] * O, x += h[w + 160] * O, O = Y[l + -8], y += h[R + -96] * O, x += h[w + 96] * O, O = Y[l + -7], y += h[R + -32] * O, x += h[w + 32] * O, O = Y[l + -6], y += h[R + 32] * O, x += h[w + -32] * O, O = Y[l + -5], y += h[R + 96] * O, x += h[w + -96] * O, O = Y[l + -4], y += h[R + 160] * O, x += h[w + -160] * O, O = Y[l + -3], y += h[R + 224] * O, x += h[w + -224] * O, O = Y[l + -2], y += h[w + -256] * O, x -= h[R + 256] * O, O = Y[l + -1], y += h[w + -192] * O, x -= h[R + 192] * O, O = Y[l + 0], y += h[w + -128] * O, x -= h[R + 128] * O, O = Y[l + 1], y += h[w + -64] * O, x -= h[R + 64] * O, O = Y[l + 2], y += h[w + 0] * O, x -= h[R + 0] * O, O = Y[l + 3], y += h[w + 64] * O, x -= h[R + -64] * O, O = Y[l + 4], y += h[w + 128] * O, x -= h[R + -128] * O, O = Y[l + 5], y += h[w + 192] * O, x -= h[R + -192] * O, y *= Y[l + 6], O = x - y, e[30 + P * 2] = x + y, e[31 + P * 2] = Y[l + 7] * O, l += 18, w--, R++;
      }
      {
        var y, x, _1, b;
        x = h[w + -16] * Y[l + -10], y = h[w + -32] * Y[l + -2], x += (h[w + -48] - h[w + 16]) * Y[l + -9], y += h[w + -96] * Y[l + -1], x += (h[w + -80] + h[w + 48]) * Y[l + -8], y += h[w + -160] * Y[l + 0], x += (h[w + -112] - h[w + 80]) * Y[l + -7], y += h[w + -224] * Y[l + 1], x += (h[w + -144] + h[w + 112]) * Y[l + -6], y -= h[w + 32] * Y[l + 2], x += (h[w + -176] - h[w + 144]) * Y[l + -5], y -= h[w + 96] * Y[l + 3], x += (h[w + -208] + h[w + 176]) * Y[l + -4], y -= h[w + 160] * Y[l + 4], x += (h[w + -240] - h[w + 208]) * Y[l + -3], y -= h[w + 224], _1 = y - x, b = y + x, x = e[14], y = e[15] - x, e[31] = b + x, e[30] = _1 + y, e[15] = _1 - y, e[14] = b - x;
      }
      {
        var a;
        a = e[28] - e[0], e[0] += e[28], e[28] = a * Y[l + -2 * 18 + 7], a = e[29] - e[1], e[1] += e[29], e[29] = a * Y[l + -2 * 18 + 7], a = e[26] - e[2], e[2] += e[26], e[26] = a * Y[l + -4 * 18 + 7], a = e[27] - e[3], e[3] += e[27], e[27] = a * Y[l + -4 * 18 + 7], a = e[24] - e[4], e[4] += e[24], e[24] = a * Y[l + -6 * 18 + 7], a = e[25] - e[5], e[5] += e[25], e[25] = a * Y[l + -6 * 18 + 7], a = e[22] - e[6], e[6] += e[22], e[22] = a * A.SQRT2, a = e[23] - e[7], e[7] += e[23], e[23] = a * A.SQRT2 - e[7], e[7] -= e[6], e[22] -= e[7], e[23] -= e[22], a = e[6], e[6] = e[31] - a, e[31] = e[31] + a, a = e[7], e[7] = e[30] - a, e[30] = e[30] + a, a = e[22], e[22] = e[15] - a, e[15] = e[15] + a, a = e[23], e[23] = e[14] - a, e[14] = e[14] + a, a = e[20] - e[8], e[8] += e[20], e[20] = a * Y[l + -10 * 18 + 7], a = e[21] - e[9], e[9] += e[21], e[21] = a * Y[l + -10 * 18 + 7], a = e[18] - e[10], e[10] += e[18], e[18] = a * Y[l + -12 * 18 + 7], a = e[19] - e[11], e[11] += e[19], e[19] = a * Y[l + -12 * 18 + 7], a = e[16] - e[12], e[12] += e[16], e[16] = a * Y[l + -14 * 18 + 7], a = e[17] - e[13], e[13] += e[17], e[17] = a * Y[l + -14 * 18 + 7], a = -e[20] + e[24], e[20] += e[24], e[24] = a * Y[l + -12 * 18 + 7], a = -e[21] + e[25], e[21] += e[25], e[25] = a * Y[l + -12 * 18 + 7], a = e[4] - e[8], e[4] += e[8], e[8] = a * Y[l + -12 * 18 + 7], a = e[5] - e[9], e[5] += e[9], e[9] = a * Y[l + -12 * 18 + 7], a = e[0] - e[12], e[0] += e[12], e[12] = a * Y[l + -4 * 18 + 7], a = e[1] - e[13], e[1] += e[13], e[13] = a * Y[l + -4 * 18 + 7], a = e[16] - e[28], e[16] += e[28], e[28] = a * Y[l + -4 * 18 + 7], a = -e[17] + e[29], e[17] += e[29], e[29] = a * Y[l + -4 * 18 + 7], a = A.SQRT2 * (e[2] - e[10]), e[2] += e[10], e[10] = a, a = A.SQRT2 * (e[3] - e[11]), e[3] += e[11], e[11] = a, a = A.SQRT2 * (-e[18] + e[26]), e[18] += e[26], e[26] = a - e[18], a = A.SQRT2 * (-e[19] + e[27]), e[19] += e[27], e[27] = a - e[19], a = e[2], e[19] -= e[3], e[3] -= a, e[2] = e[31] - a, e[31] += a, a = e[3], e[11] -= e[19], e[18] -= a, e[3] = e[30] - a, e[30] += a, a = e[18], e[27] -= e[11], e[19] -= a, e[18] = e[15] - a, e[15] += a, a = e[19], e[10] -= a, e[19] = e[14] - a, e[14] += a, a = e[10], e[11] -= a, e[10] = e[23] - a, e[23] += a, a = e[11], e[26] -= a, e[11] = e[22] - a, e[22] += a, a = e[26], e[27] -= a, e[26] = e[7] - a, e[7] += a, a = e[27], e[27] = e[6] - a, e[6] += a, a = A.SQRT2 * (e[0] - e[4]), e[0] += e[4], e[4] = a, a = A.SQRT2 * (e[1] - e[5]), e[1] += e[5], e[5] = a, a = A.SQRT2 * (e[16] - e[20]), e[16] += e[20], e[20] = a, a = A.SQRT2 * (e[17] - e[21]), e[17] += e[21], e[21] = a, a = -A.SQRT2 * (e[8] - e[12]), e[8] += e[12], e[12] = a - e[8], a = -A.SQRT2 * (e[9] - e[13]), e[9] += e[13], e[13] = a - e[9], a = -A.SQRT2 * (e[25] - e[29]), e[25] += e[29], e[29] = a - e[25], a = -A.SQRT2 * (e[24] + e[28]), e[24] -= e[28], e[28] = a - e[24], a = e[24] - e[16], e[24] = a, a = e[20] - a, e[20] = a, a = e[28] - a, e[28] = a, a = e[25] - e[17], e[25] = a, a = e[21] - a, e[21] = a, a = e[29] - a, e[29] = a, a = e[17] - e[1], e[17] = a, a = e[9] - a, e[9] = a, a = e[25] - a, e[25] = a, a = e[5] - a, e[5] = a, a = e[21] - a, e[21] = a, a = e[13] - a, e[13] = a, a = e[29] - a, e[29] = a, a = e[1] - e[0], e[1] = a, a = e[16] - a, e[16] = a, a = e[17] - a, e[17] = a, a = e[8] - a, e[8] = a, a = e[9] - a, e[9] = a, a = e[24] - a, e[24] = a, a = e[25] - a, e[25] = a, a = e[4] - a, e[4] = a, a = e[5] - a, e[5] = a, a = e[20] - a, e[20] = a, a = e[21] - a, e[21] = a, a = e[12] - a, e[12] = a, a = e[13] - a, e[13] = a, a = e[28] - a, e[28] = a, a = e[29] - a, e[29] = a, a = e[0], e[0] += e[31], e[31] -= a, a = e[1], e[1] += e[30], e[30] -= a, a = e[16], e[16] += e[15], e[15] -= a, a = e[17], e[17] += e[14], e[14] -= a, a = e[8], e[8] += e[23], e[23] -= a, a = e[9], e[9] += e[22], e[22] -= a, a = e[24], e[24] += e[7], e[7] -= a, a = e[25], e[25] += e[6], e[6] -= a, a = e[4], e[4] += e[27], e[27] -= a, a = e[5], e[5] += e[26], e[26] -= a, a = e[20], e[20] += e[11], e[11] -= a, a = e[21], e[21] += e[10], e[10] -= a, a = e[12], e[12] += e[19], e[19] -= a, a = e[13], e[13] += e[18], e[18] -= a, a = e[28], e[28] += e[3], e[3] -= a, a = e[29], e[29] += e[2], e[2] -= a;
      }
    }
    function M(h, w) {
      for (var e = 0; e < 3; e++) {
        var l, R, P, O, y, x;
        O = h[w + 2 * 3] * g[D.SHORT_TYPE][0] - h[w + 5 * 3], l = h[w + 0 * 3] * g[D.SHORT_TYPE][2] - h[w + 3 * 3], R = O + l, P = O - l, O = h[w + 5 * 3] * g[D.SHORT_TYPE][0] + h[w + 2 * 3], l = h[w + 3 * 3] * g[D.SHORT_TYPE][2] + h[w + 0 * 3], y = O + l, x = -O + l, l = (h[w + 1 * 3] * g[D.SHORT_TYPE][1] - h[w + 4 * 3]) * 2069978111953089e-26, O = (h[w + 4 * 3] * g[D.SHORT_TYPE][1] + h[w + 1 * 3]) * 2069978111953089e-26, h[w + 3 * 0] = R * 190752519173728e-25 + l, h[w + 3 * 5] = -y * 190752519173728e-25 + O, P = P * 0.8660254037844387 * 1907525191737281e-26, y = y * 0.5 * 1907525191737281e-26 + O, h[w + 3 * 1] = P - y, h[w + 3 * 2] = P + y, R = R * 0.5 * 1907525191737281e-26 - l, x = x * 0.8660254037844387 * 1907525191737281e-26, h[w + 3 * 3] = R + x, h[w + 3 * 4] = R - x, w++;
      }
    }
    function f(h, w, e) {
      var l, R;
      {
        var P, O, y, x, _1, b, a, v;
        P = e[17] - e[9], y = e[15] - e[11], x = e[14] - e[12], _1 = e[0] + e[8], b = e[1] + e[7], a = e[2] + e[6], v = e[3] + e[5], h[w + 17] = _1 + a - v - (b - e[4]), R = (_1 + a - v) * N[19] + (b - e[4]), l = (P - y - x) * N[18], h[w + 5] = l + R, h[w + 6] = l - R, O = (e[16] - e[10]) * N[18], b = b * N[19] + e[4], l = P * N[12] + O + y * N[13] + x * N[14], R = -_1 * N[16] + b - a * N[17] + v * N[15], h[w + 1] = l + R, h[w + 2] = l - R, l = P * N[13] - O - y * N[14] + x * N[12], R = -_1 * N[17] + b - a * N[15] + v * N[16], h[w + 9] = l + R, h[w + 10] = l - R, l = P * N[14] - O + y * N[12] - x * N[13], R = _1 * N[15] - b + a * N[16] - v * N[17], h[w + 13] = l + R, h[w + 14] = l - R;
      }
      {
        var V, L, I, G, B, n, r, t;
        V = e[8] - e[0], I = e[6] - e[2], G = e[5] - e[3], B = e[17] + e[9], n = e[16] + e[10], r = e[15] + e[11], t = e[14] + e[12], h[w + 0] = B + r + t + (n + e[13]), l = (B + r + t) * N[19] - (n + e[13]), R = (V - I + G) * N[18], h[w + 11] = l + R, h[w + 12] = l - R, L = (e[7] - e[1]) * N[18], n = e[13] - n * N[19], l = B * N[15] - n + r * N[16] + t * N[17], R = V * N[14] + L + I * N[12] + G * N[13], h[w + 3] = l + R, h[w + 4] = l - R, l = -B * N[17] + n - r * N[15] - t * N[16], R = V * N[13] + L - I * N[14] - G * N[12], h[w + 7] = l + R, h[w + 8] = l - R, l = -B * N[16] + n - r * N[17] - t * N[15], R = V * N[12] - L + I * N[13] - G * N[14], h[w + 15] = l + R, h[w + 16] = l - R;
      }
    }
    this.mdct_sub48 = function(h, w, e) {
      for (var l = w, R = 286, P = 0; P < h.channels_out; P++) {
        for (var O = 0; O < h.mode_gr; O++) {
          for (var y, x = h.l3_side.tt[O][P], _1 = x.xr, b = 0, a = h.sb_sample[P][1 - O], v = 0, V = 0; V < 18 / 2; V++)
            for (W(l, R, a[v]), W(l, R + 32, a[v + 1]), v += 2, R += 64, y = 1; y < 32; y += 2)
              a[v - 1][y] *= -1;
          for (y = 0; y < 32; y++, b += 18) {
            var L = x.block_type, I = h.sb_sample[P][O], G = h.sb_sample[P][1 - O];
            if (x.mixed_block_flag != 0 && y < 2 && (L = 0), h.amp_filter[y] < 1e-12)
              j.fill(
                _1,
                b + 0,
                b + 18,
                0
              );
            else {
              if (h.amp_filter[y] < 1)
                for (var V = 0; V < 18; V++)
                  G[V][r1[y]] *= h.amp_filter[y];
              if (L == D.SHORT_TYPE) {
                for (var V = -$ / 4; V < 0; V++) {
                  var B = g[D.SHORT_TYPE][V + 3];
                  _1[b + V * 3 + 9] = I[9 + V][r1[y]] * B - I[8 - V][r1[y]], _1[b + V * 3 + 18] = I[14 - V][r1[y]] * B + I[15 + V][r1[y]], _1[b + V * 3 + 10] = I[15 + V][r1[y]] * B - I[14 - V][r1[y]], _1[b + V * 3 + 19] = G[2 - V][r1[y]] * B + G[3 + V][r1[y]], _1[b + V * 3 + 11] = G[3 + V][r1[y]] * B - G[2 - V][r1[y]], _1[b + V * 3 + 20] = G[8 - V][r1[y]] * B + G[9 + V][r1[y]];
                }
                M(_1, b);
              } else {
                for (var n = K(18), V = -u1 / 4; V < 0; V++) {
                  var r, t;
                  r = g[L][V + 27] * G[V + 9][r1[y]] + g[L][V + 36] * G[8 - V][r1[y]], t = g[L][V + 9] * I[V + 9][r1[y]] - g[L][V + 18] * I[8 - V][r1[y]], n[V + 9] = r - t * m[3 + V + 9], n[V + 18] = r * m[3 + V + 9] + t;
                }
                f(_1, b, n);
              }
            }
            if (L != D.SHORT_TYPE && y != 0)
              for (var V = 7; V >= 0; --V) {
                var i, u;
                i = _1[b + V] * n1[20 + V] + _1[b + -1 - V] * U[28 + V], u = _1[b + V] * U[28 + V] - _1[b + -1 - V] * n1[20 + V], _1[b + -1 - V] = i, _1[b + V] = u;
              }
          }
        }
        if (l = e, R = 286, h.mode_gr == 1)
          for (var F = 0; F < 18; F++)
            E.arraycopy(
              h.sb_sample[P][1][F],
              0,
              h.sb_sample[P][0][F],
              0,
              32
            );
      }
    };
  }
  return kt = Z, kt;
}
var Et, ta;
function Oa() {
  if (ta)
    return Et;
  ta = 1;
  var p = se(), E = G1, A = E.System, j = E.new_float, K = E.new_float_n;
  function D() {
    this.l = j(p.SBMAX_l), this.s = K([p.SBMAX_s, 3]);
    var Z = this;
    this.assign = function(Y) {
      A.arraycopy(Y.l, 0, Z.l, 0, p.SBMAX_l);
      for (var $ = 0; $ < p.SBMAX_s; $++)
        for (var u1 = 0; u1 < 3; u1++)
          Z.s[$][u1] = Y.s[$][u1];
    };
  }
  return Et = D, Et;
}
var xt, aa;
function Es() {
  if (aa)
    return xt;
  aa = 1;
  var p = Oa();
  function E() {
    this.thm = new p(), this.en = new p();
  }
  return xt = E, xt;
}
function Se(p) {
  var E = p;
  this.ordinal = function() {
    return E;
  };
}
Se.STEREO = new Se(0);
Se.JOINT_STEREO = new Se(1);
Se.DUAL_CHANNEL = new Se(2);
Se.MONO = new Se(3);
Se.NOT_SET = new Se(4);
var nt = Se, Pt, sa;
function se() {
  if (sa)
    return Pt;
  sa = 1;
  var p = G1, E = p.System, A = p.VbrMode, j = p.new_array_n, K = p.new_float, D = p.new_float_n, Z = p.new_int, Y = p.assert;
  $.ENCDELAY = 576, $.POSTDELAY = 1152, $.MDCTDELAY = 48, $.FFTOFFSET = 224 + $.MDCTDELAY, $.DECDELAY = 528, $.SBLIMIT = 32, $.CBANDS = 64, $.SBPSY_l = 21, $.SBPSY_s = 12, $.SBMAX_l = 22, $.SBMAX_s = 13, $.PSFB21 = 6, $.PSFB12 = 6, $.BLKSIZE = 1024, $.HBLKSIZE = $.BLKSIZE / 2 + 1, $.BLKSIZE_s = 256, $.HBLKSIZE_s = $.BLKSIZE_s / 2 + 1, $.NORM_TYPE = 0, $.START_TYPE = 1, $.SHORT_TYPE = 2, $.STOP_TYPE = 3, $.MPG_MD_LR_LR = 0, $.MPG_MD_LR_I = 1, $.MPG_MD_MS_LR = 2, $.MPG_MD_MS_I = 3, $.fircoef = [
    -0.0207887 * 5,
    -0.0378413 * 5,
    -0.0432472 * 5,
    -0.031183 * 5,
    779609e-23 * 5,
    0.0467745 * 5,
    0.10091 * 5,
    0.151365 * 5,
    0.187098 * 5
  ];
  function $() {
    var u1 = ks(), g = Es(), m = nt, N = $.FFTOFFSET, n1 = $.MPG_MD_MS_LR, U = null;
    this.psy = null;
    var r1 = null, W = null, M = null;
    this.setModules = function(l, R, P, O) {
      U = l, this.psy = R, r1 = R, W = O, M = P;
    };
    var f = new u1();
    function h(l) {
      var R, P;
      if (l.ATH.useAdjust == 0) {
        l.ATH.adjust = 1;
        return;
      }
      if (P = l.loudness_sq[0][0], R = l.loudness_sq[1][0], l.channels_out == 2 ? (P += l.loudness_sq[0][1], R += l.loudness_sq[1][1]) : (P += P, R += R), l.mode_gr == 2 && (P = Math.max(P, R)), P *= 0.5, P *= l.ATH.aaSensitivityP, P > 0.03125)
        l.ATH.adjust >= 1 ? l.ATH.adjust = 1 : l.ATH.adjust < l.ATH.adjustLimit && (l.ATH.adjust = l.ATH.adjustLimit), l.ATH.adjustLimit = 1;
      else {
        var O = 31.98 * P + 625e-6;
        l.ATH.adjust >= O ? (l.ATH.adjust *= O * 0.075 + 0.925, l.ATH.adjust < O && (l.ATH.adjust = O)) : l.ATH.adjustLimit >= O ? l.ATH.adjust = O : l.ATH.adjust < l.ATH.adjustLimit && (l.ATH.adjust = l.ATH.adjustLimit), l.ATH.adjustLimit = O;
      }
    }
    function w(l) {
      var R, P;
      for (Y(0 <= l.bitrate_index && l.bitrate_index < 16), Y(0 <= l.mode_ext && l.mode_ext < 4), l.bitrate_stereoMode_Hist[l.bitrate_index][4]++, l.bitrate_stereoMode_Hist[15][4]++, l.channels_out == 2 && (l.bitrate_stereoMode_Hist[l.bitrate_index][l.mode_ext]++, l.bitrate_stereoMode_Hist[15][l.mode_ext]++), R = 0; R < l.mode_gr; ++R)
        for (P = 0; P < l.channels_out; ++P) {
          var O = l.l3_side.tt[R][P].block_type | 0;
          l.l3_side.tt[R][P].mixed_block_flag != 0 && (O = 4), l.bitrate_blockType_Hist[l.bitrate_index][O]++, l.bitrate_blockType_Hist[l.bitrate_index][5]++, l.bitrate_blockType_Hist[15][O]++, l.bitrate_blockType_Hist[15][5]++;
        }
    }
    function e(l, R) {
      var P = l.internal_flags, O, y;
      if (P.lame_encode_frame_init == 0) {
        var x, _1, b = K(2014), a = K(2014);
        for (P.lame_encode_frame_init = 1, x = 0, _1 = 0; x < 286 + 576 * (1 + P.mode_gr); ++x)
          x < 576 * P.mode_gr ? (b[x] = 0, P.channels_out == 2 && (a[x] = 0)) : (b[x] = R[0][_1], P.channels_out == 2 && (a[x] = R[1][_1]), ++_1);
        for (y = 0; y < P.mode_gr; y++)
          for (O = 0; O < P.channels_out; O++)
            P.l3_side.tt[y][O].block_type = $.SHORT_TYPE;
        f.mdct_sub48(P, b, a), Y(576 >= $.FFTOFFSET), Y(P.mf_size >= $.BLKSIZE + l.framesize - $.FFTOFFSET), Y(P.mf_size >= 512 + l.framesize - 32);
      }
    }
    this.lame_encode_mp3_frame = function(l, R, P, O, y, x) {
      var _1, b = j([2, 2]);
      b[0][0] = new g(), b[0][1] = new g(), b[1][0] = new g(), b[1][1] = new g();
      var a = j([2, 2]);
      a[0][0] = new g(), a[0][1] = new g(), a[1][0] = new g(), a[1][1] = new g();
      var v, V = [null, null], L = l.internal_flags, I = D([2, 4]), G = [0.5, 0.5], B = [[0, 0], [0, 0]], n = [[0, 0], [0, 0]], r, t, i;
      if (V[0] = R, V[1] = P, L.lame_encode_frame_init == 0 && e(l, V), L.padding = 0, (L.slot_lag -= L.frac_SpF) < 0 && (L.slot_lag += l.out_samplerate, L.padding = 1), L.psymodel != 0) {
        var u, F = [null, null], e1 = 0, T = Z(2);
        for (i = 0; i < L.mode_gr; i++) {
          for (t = 0; t < L.channels_out; t++)
            F[t] = V[t], e1 = 576 + i * 576 - $.FFTOFFSET;
          if (l.VBR == A.vbr_mtrh || l.VBR == A.vbr_mt ? u = r1.L3psycho_anal_vbr(
            l,
            F,
            e1,
            i,
            b,
            a,
            B[i],
            n[i],
            I[i],
            T
          ) : u = r1.L3psycho_anal_ns(
            l,
            F,
            e1,
            i,
            b,
            a,
            B[i],
            n[i],
            I[i],
            T
          ), u != 0)
            return -4;
          for (l.mode == m.JOINT_STEREO && (G[i] = I[i][2] + I[i][3], G[i] > 0 && (G[i] = I[i][3] / G[i])), t = 0; t < L.channels_out; t++) {
            var q = L.l3_side.tt[i][t];
            q.block_type = T[t], q.mixed_block_flag = 0;
          }
        }
      } else
        for (i = 0; i < L.mode_gr; i++)
          for (t = 0; t < L.channels_out; t++)
            L.l3_side.tt[i][t].block_type = $.NORM_TYPE, L.l3_side.tt[i][t].mixed_block_flag = 0, n[i][t] = B[i][t] = 700;
      if (h(L), f.mdct_sub48(L, V[0], V[1]), L.mode_ext = $.MPG_MD_LR_LR, l.force_ms)
        L.mode_ext = $.MPG_MD_MS_LR;
      else if (l.mode == m.JOINT_STEREO) {
        var i1 = 0, h1 = 0;
        for (i = 0; i < L.mode_gr; i++)
          for (t = 0; t < L.channels_out; t++)
            i1 += n[i][t], h1 += B[i][t];
        if (i1 <= 1 * h1) {
          var g1 = L.l3_side.tt[0], S1 = L.l3_side.tt[L.mode_gr - 1];
          g1[0].block_type == g1[1].block_type && S1[0].block_type == S1[1].block_type && (L.mode_ext = $.MPG_MD_MS_LR);
        }
      }
      if (L.mode_ext == n1 ? (v = a, r = n) : (v = b, r = B), l.analysis && L.pinfo != null)
        for (i = 0; i < L.mode_gr; i++)
          for (t = 0; t < L.channels_out; t++)
            L.pinfo.ms_ratio[i] = L.ms_ratio[i], L.pinfo.ms_ener_ratio[i] = G[i], L.pinfo.blocktype[i][t] = L.l3_side.tt[i][t].block_type, L.pinfo.pe[i][t] = r[i][t], E.arraycopy(
              L.l3_side.tt[i][t].xr,
              0,
              L.pinfo.xr[i][t],
              0,
              576
            ), L.mode_ext == n1 && (L.pinfo.ers[i][t] = L.pinfo.ers[i][t + 2], E.arraycopy(
              L.pinfo.energy[i][t + 2],
              0,
              L.pinfo.energy[i][t],
              0,
              L.pinfo.energy[i][t].length
            ));
      if (l.VBR == A.vbr_off || l.VBR == A.vbr_abr) {
        var v1, w1;
        for (v1 = 0; v1 < 18; v1++)
          L.nsPsy.pefirbuf[v1] = L.nsPsy.pefirbuf[v1 + 1];
        for (w1 = 0, i = 0; i < L.mode_gr; i++)
          for (t = 0; t < L.channels_out; t++)
            w1 += r[i][t];
        for (L.nsPsy.pefirbuf[18] = w1, w1 = L.nsPsy.pefirbuf[9], v1 = 0; v1 < 9; v1++)
          w1 += (L.nsPsy.pefirbuf[v1] + L.nsPsy.pefirbuf[18 - v1]) * $.fircoef[v1];
        for (w1 = 670 * 5 * L.mode_gr * L.channels_out / w1, i = 0; i < L.mode_gr; i++)
          for (t = 0; t < L.channels_out; t++)
            r[i][t] *= w1;
      }
      if (L.iteration_loop.iteration_loop(l, r, G, v), U.format_bitstream(l), _1 = U.copy_buffer(L, O, y, x, 1), l.bWriteVbrTag && W.addVbrFrame(l), l.analysis && L.pinfo != null) {
        for (t = 0; t < L.channels_out; t++) {
          var y1;
          for (y1 = 0; y1 < N; y1++)
            L.pinfo.pcmdata[t][y1] = L.pinfo.pcmdata[t][y1 + l.framesize];
          for (y1 = N; y1 < 1600; y1++)
            L.pinfo.pcmdata[t][y1] = V[t][y1 - N];
        }
        M.set_frame_pinfo(l, v);
      }
      return w(L), _1;
    };
  }
  return Pt = $, Pt;
}
var Ha = G1, ra = Ha.Util, na = Ha.new_float, J1 = se();
function xs() {
  var p = na(J1.BLKSIZE), E = na(J1.BLKSIZE_s / 2), A = [
    0.9238795325112867,
    0.3826834323650898,
    0.9951847266721969,
    0.0980171403295606,
    0.9996988186962042,
    0.02454122852291229,
    0.9999811752826011,
    0.006135884649154475
  ];
  function j(D, Z, Y) {
    var $ = 0, u1, g, m;
    Y <<= 1;
    var N = Z + Y;
    u1 = 4;
    do {
      var n1, U, r1, W, M, f, h;
      h = u1 >> 1, W = u1, M = u1 << 1, f = M + W, u1 = M << 1, g = Z, m = g + h;
      do {
        var w, e, l, R;
        e = D[g + 0] - D[g + W], w = D[g + 0] + D[g + W], R = D[g + M] - D[g + f], l = D[g + M] + D[g + f], D[g + M] = w - l, D[g + 0] = w + l, D[g + f] = e - R, D[g + W] = e + R, e = D[m + 0] - D[m + W], w = D[m + 0] + D[m + W], R = ra.SQRT2 * D[m + f], l = ra.SQRT2 * D[m + M], D[m + M] = w - l, D[m + 0] = w + l, D[m + f] = e - R, D[m + W] = e + R, m += u1, g += u1;
      } while (g < N);
      for (U = A[$ + 0], n1 = A[$ + 1], r1 = 1; r1 < h; r1++) {
        var P, O;
        P = 1 - 2 * n1 * n1, O = 2 * n1 * U, g = Z + r1, m = Z + W - r1;
        do {
          var y, x, _1, w, e, b, l, a, R, v;
          x = O * D[g + W] - P * D[m + W], y = P * D[g + W] + O * D[m + W], e = D[g + 0] - y, w = D[g + 0] + y, b = D[m + 0] - x, _1 = D[m + 0] + x, x = O * D[g + f] - P * D[m + f], y = P * D[g + f] + O * D[m + f], R = D[g + M] - y, l = D[g + M] + y, v = D[m + M] - x, a = D[m + M] + x, x = n1 * l - U * v, y = U * l + n1 * v, D[g + M] = w - y, D[g + 0] = w + y, D[m + f] = b - x, D[m + W] = b + x, x = U * a - n1 * R, y = n1 * a + U * R, D[m + M] = _1 - y, D[m + 0] = _1 + y, D[g + f] = e - x, D[g + W] = e + x, m += u1, g += u1;
        } while (g < N);
        P = U, U = P * A[$ + 0] - n1 * A[$ + 1], n1 = P * A[$ + 1] + n1 * A[$ + 0];
      }
      $ += 2;
    } while (u1 < Y);
  }
  var K = [
    0,
    128,
    64,
    192,
    32,
    160,
    96,
    224,
    16,
    144,
    80,
    208,
    48,
    176,
    112,
    240,
    8,
    136,
    72,
    200,
    40,
    168,
    104,
    232,
    24,
    152,
    88,
    216,
    56,
    184,
    120,
    248,
    4,
    132,
    68,
    196,
    36,
    164,
    100,
    228,
    20,
    148,
    84,
    212,
    52,
    180,
    116,
    244,
    12,
    140,
    76,
    204,
    44,
    172,
    108,
    236,
    28,
    156,
    92,
    220,
    60,
    188,
    124,
    252,
    2,
    130,
    66,
    194,
    34,
    162,
    98,
    226,
    18,
    146,
    82,
    210,
    50,
    178,
    114,
    242,
    10,
    138,
    74,
    202,
    42,
    170,
    106,
    234,
    26,
    154,
    90,
    218,
    58,
    186,
    122,
    250,
    6,
    134,
    70,
    198,
    38,
    166,
    102,
    230,
    22,
    150,
    86,
    214,
    54,
    182,
    118,
    246,
    14,
    142,
    78,
    206,
    46,
    174,
    110,
    238,
    30,
    158,
    94,
    222,
    62,
    190,
    126,
    254
  ];
  this.fft_short = function(D, Z, Y, $, u1) {
    for (var g = 0; g < 3; g++) {
      var m = J1.BLKSIZE_s / 2, N = 65535 & 576 / 3 * (g + 1), n1 = J1.BLKSIZE_s / 8 - 1;
      do {
        var U, r1, W, M, f, h = K[n1 << 2] & 255;
        U = E[h] * $[Y][u1 + h + N], f = E[127 - h] * $[Y][u1 + h + N + 128], r1 = U - f, U = U + f, W = E[h + 64] * $[Y][u1 + h + N + 64], f = E[63 - h] * $[Y][u1 + h + N + 192], M = W - f, W = W + f, m -= 4, Z[g][m + 0] = U + W, Z[g][m + 2] = U - W, Z[g][m + 1] = r1 + M, Z[g][m + 3] = r1 - M, U = E[h + 1] * $[Y][u1 + h + N + 1], f = E[126 - h] * $[Y][u1 + h + N + 129], r1 = U - f, U = U + f, W = E[h + 65] * $[Y][u1 + h + N + 65], f = E[62 - h] * $[Y][u1 + h + N + 193], M = W - f, W = W + f, Z[g][m + J1.BLKSIZE_s / 2 + 0] = U + W, Z[g][m + J1.BLKSIZE_s / 2 + 2] = U - W, Z[g][m + J1.BLKSIZE_s / 2 + 1] = r1 + M, Z[g][m + J1.BLKSIZE_s / 2 + 3] = r1 - M;
      } while (--n1 >= 0);
      j(Z[g], m, J1.BLKSIZE_s / 2);
    }
  }, this.fft_long = function(D, Z, Y, $, u1) {
    var g = J1.BLKSIZE / 8 - 1, m = J1.BLKSIZE / 2;
    do {
      var N, n1, U, r1, W, M = K[g] & 255;
      N = p[M] * $[Y][u1 + M], W = p[M + 512] * $[Y][u1 + M + 512], n1 = N - W, N = N + W, U = p[M + 256] * $[Y][u1 + M + 256], W = p[M + 768] * $[Y][u1 + M + 768], r1 = U - W, U = U + W, m -= 4, Z[m + 0] = N + U, Z[m + 2] = N - U, Z[m + 1] = n1 + r1, Z[m + 3] = n1 - r1, N = p[M + 1] * $[Y][u1 + M + 1], W = p[M + 513] * $[Y][u1 + M + 513], n1 = N - W, N = N + W, U = p[M + 257] * $[Y][u1 + M + 257], W = p[M + 769] * $[Y][u1 + M + 769], r1 = U - W, U = U + W, Z[m + J1.BLKSIZE / 2 + 0] = N + U, Z[m + J1.BLKSIZE / 2 + 2] = N - U, Z[m + J1.BLKSIZE / 2 + 1] = n1 + r1, Z[m + J1.BLKSIZE / 2 + 3] = n1 - r1;
    } while (--g >= 0);
    j(Z, m, J1.BLKSIZE / 2);
  }, this.init_fft = function(D) {
    for (var Z = 0; Z < J1.BLKSIZE; Z++)
      p[Z] = 0.42 - 0.5 * Math.cos(2 * Math.PI * (Z + 0.5) / J1.BLKSIZE) + 0.08 * Math.cos(4 * Math.PI * (Z + 0.5) / J1.BLKSIZE);
    for (var Z = 0; Z < J1.BLKSIZE_s / 2; Z++)
      E[Z] = 0.5 * (1 - Math.cos(2 * Math.PI * (Z + 0.5) / J1.BLKSIZE_s));
  };
}
var Ps = xs, ke = G1, je = ke.VbrMode, ia = ke.Float, qe = ke.ShortBlock, _e = ke.Util, Vs = ke.Arrays, $1 = ke.new_float, me = ke.new_float_n, Ne = ke.new_int, N1 = ke.assert, Is = Ps, s1 = se();
function Ls() {
  var p = nt, E = new Is(), A = 2.302585092994046, j = 2, K = 16, D = 2, Z = 16, Y = 0.34, $ = 1 / (14752 * 14752) / (s1.BLKSIZE / 2), u1 = 0.01, g = 0.8, m = 0.6, N = 0.3, n1 = 3.5, U = 21, r1 = 0.2302585093;
  function W(o, c) {
    for (var S = 0, k = 0; k < s1.BLKSIZE / 2; ++k)
      S += o[k] * c.ATH.eql_w[k];
    return S *= $, S;
  }
  function M(o, c, S, k, H, d, C, z, X, a1, Q) {
    var t1 = o.internal_flags;
    if (X < 2)
      E.fft_long(t1, k[H], X, a1, Q), E.fft_short(t1, d[C], X, a1, Q);
    else if (X == 2) {
      for (var p1 = s1.BLKSIZE - 1; p1 >= 0; --p1) {
        var x1 = k[H + 0][p1], o1 = k[H + 1][p1];
        k[H + 0][p1] = (x1 + o1) * _e.SQRT2 * 0.5, k[H + 1][p1] = (x1 - o1) * _e.SQRT2 * 0.5;
      }
      for (var E1 = 2; E1 >= 0; --E1)
        for (var p1 = s1.BLKSIZE_s - 1; p1 >= 0; --p1) {
          var x1 = d[C + 0][E1][p1], o1 = d[C + 1][E1][p1];
          d[C + 0][E1][p1] = (x1 + o1) * _e.SQRT2 * 0.5, d[C + 1][E1][p1] = (x1 - o1) * _e.SQRT2 * 0.5;
        }
    }
    c[0] = k[H + 0][0], c[0] *= c[0];
    for (var p1 = s1.BLKSIZE / 2 - 1; p1 >= 0; --p1) {
      var J = k[H + 0][s1.BLKSIZE / 2 - p1], M1 = k[H + 0][s1.BLKSIZE / 2 + p1];
      c[s1.BLKSIZE / 2 - p1] = (J * J + M1 * M1) * 0.5;
    }
    for (var E1 = 2; E1 >= 0; --E1) {
      S[E1][0] = d[C + 0][E1][0], S[E1][0] *= S[E1][0];
      for (var p1 = s1.BLKSIZE_s / 2 - 1; p1 >= 0; --p1) {
        var J = d[C + 0][E1][s1.BLKSIZE_s / 2 - p1], M1 = d[C + 0][E1][s1.BLKSIZE_s / 2 + p1];
        S[E1][s1.BLKSIZE_s / 2 - p1] = (J * J + M1 * M1) * 0.5;
      }
    }
    {
      for (var X1 = 0, p1 = 11; p1 < s1.HBLKSIZE; p1++)
        X1 += c[p1];
      t1.tot_ener[X] = X1;
    }
    if (o.analysis) {
      for (var p1 = 0; p1 < s1.HBLKSIZE; p1++)
        t1.pinfo.energy[z][X][p1] = t1.pinfo.energy_save[X][p1], t1.pinfo.energy_save[X][p1] = c[p1];
      t1.pinfo.pe[z][X] = t1.pe[X];
    }
    o.athaa_loudapprox == 2 && X < 2 && (t1.loudness_sq[z][X] = t1.loudness_sq_save[X], t1.loudness_sq_save[X] = W(c, t1));
  }
  var f = 8, h = 23, w = 15, e, l, R, P = [
    1,
    0.79433,
    0.63096,
    0.63096,
    0.63096,
    0.63096,
    0.63096,
    0.25119,
    0.11749
  ];
  function O() {
    e = Math.pow(10, (f + 1) / 16), l = Math.pow(10, (h + 1) / 16), R = Math.pow(10, w / 10);
  }
  var y = [
    3.3246 * 3.3246,
    3.23837 * 3.23837,
    3.15437 * 3.15437,
    3.00412 * 3.00412,
    2.86103 * 2.86103,
    2.65407 * 2.65407,
    2.46209 * 2.46209,
    2.284 * 2.284,
    2.11879 * 2.11879,
    1.96552 * 1.96552,
    1.82335 * 1.82335,
    1.69146 * 1.69146,
    1.56911 * 1.56911,
    1.46658 * 1.46658,
    1.37074 * 1.37074,
    1.31036 * 1.31036,
    1.25264 * 1.25264,
    1.20648 * 1.20648,
    1.16203 * 1.16203,
    1.12765 * 1.12765,
    1.09428 * 1.09428,
    1.0659 * 1.0659,
    1.03826 * 1.03826,
    1.01895 * 1.01895,
    1
  ], x = [
    1.33352 * 1.33352,
    1.35879 * 1.35879,
    1.38454 * 1.38454,
    1.39497 * 1.39497,
    1.40548 * 1.40548,
    1.3537 * 1.3537,
    1.30382 * 1.30382,
    1.22321 * 1.22321,
    1.14758 * 1.14758,
    1
  ], _1 = [
    2.35364 * 2.35364,
    2.29259 * 2.29259,
    2.23313 * 2.23313,
    2.12675 * 2.12675,
    2.02545 * 2.02545,
    1.87894 * 1.87894,
    1.74303 * 1.74303,
    1.61695 * 1.61695,
    1.49999 * 1.49999,
    1.39148 * 1.39148,
    1.29083 * 1.29083,
    1.19746 * 1.19746,
    1.11084 * 1.11084,
    1.03826 * 1.03826
  ];
  function b(o, c, S, k, H, d) {
    var C;
    if (c > o)
      if (c < o * l)
        C = c / o;
      else
        return o + c;
    else {
      if (o >= c * l)
        return o + c;
      C = o / c;
    }
    if (o += c, k + 3 <= 6) {
      if (C >= e)
        return o;
      var z = 0 | _e.FAST_LOG10_X(C, 16);
      return o * x[z];
    }
    var z = 0 | _e.FAST_LOG10_X(C, 16);
    if (c = H.ATH.cb_l[S] * H.ATH.adjust, o < R * c) {
      if (o > c) {
        var X, a1;
        return X = 1, z <= 13 && (X = _1[z]), a1 = _e.FAST_LOG10_X(o / c, 10 / 15), o * ((y[z] - X) * a1 + X);
      }
      return z > 13 ? o : o * _1[z];
    }
    return o * y[z];
  }
  var a = [
    1.33352 * 1.33352,
    1.35879 * 1.35879,
    1.38454 * 1.38454,
    1.39497 * 1.39497,
    1.40548 * 1.40548,
    1.3537 * 1.3537,
    1.30382 * 1.30382,
    1.22321 * 1.22321,
    1.14758 * 1.14758,
    1
  ];
  function v(o, c, S) {
    var k;
    if (o < 0 && (o = 0), c < 0 && (c = 0), o <= 0)
      return c;
    if (c <= 0)
      return o;
    if (c > o ? k = c / o : k = o / c, -2 <= S && S <= 2) {
      if (k >= e)
        return o + c;
      var H = 0 | _e.FAST_LOG10_X(k, 16);
      return (o + c) * a[H];
    }
    return k < l ? o + c : (o < c && (o = c), o);
  }
  function V(o, c) {
    var S = o.internal_flags;
    if (S.channels_out > 1) {
      for (var k = 0; k < s1.SBMAX_l; k++) {
        var H = S.thm[0].l[k], d = S.thm[1].l[k];
        S.thm[0].l[k] += d * c, S.thm[1].l[k] += H * c;
      }
      for (var k = 0; k < s1.SBMAX_s; k++)
        for (var C = 0; C < 3; C++) {
          var H = S.thm[0].s[k][C], d = S.thm[1].s[k][C];
          S.thm[0].s[k][C] += d * c, S.thm[1].s[k][C] += H * c;
        }
    }
  }
  function L(o) {
    for (var c = 0; c < s1.SBMAX_l; c++)
      if (!(o.thm[0].l[c] > 1.58 * o.thm[1].l[c] || o.thm[1].l[c] > 1.58 * o.thm[0].l[c])) {
        var S = o.mld_l[c] * o.en[3].l[c], k = Math.max(
          o.thm[2].l[c],
          Math.min(o.thm[3].l[c], S)
        );
        S = o.mld_l[c] * o.en[2].l[c];
        var H = Math.max(
          o.thm[3].l[c],
          Math.min(o.thm[2].l[c], S)
        );
        o.thm[2].l[c] = k, o.thm[3].l[c] = H;
      }
    for (var c = 0; c < s1.SBMAX_s; c++)
      for (var d = 0; d < 3; d++)
        if (!(o.thm[0].s[c][d] > 1.58 * o.thm[1].s[c][d] || o.thm[1].s[c][d] > 1.58 * o.thm[0].s[c][d])) {
          var S = o.mld_s[c] * o.en[3].s[c][d], k = Math.max(
            o.thm[2].s[c][d],
            Math.min(o.thm[3].s[c][d], S)
          );
          S = o.mld_s[c] * o.en[2].s[c][d];
          var H = Math.max(
            o.thm[3].s[c][d],
            Math.min(o.thm[2].s[c][d], S)
          );
          o.thm[2].s[c][d] = k, o.thm[3].s[c][d] = H;
        }
  }
  function I(o, c, S) {
    var k = c, H = Math.pow(10, S);
    c *= 2, k *= 2;
    for (var d = 0; d < s1.SBMAX_l; d++) {
      var C, z, X, a1;
      if (a1 = o.ATH.cb_l[o.bm_l[d]] * H, C = Math.min(
        Math.max(o.thm[0].l[d], a1),
        Math.max(o.thm[1].l[d], a1)
      ), z = Math.max(o.thm[2].l[d], a1), X = Math.max(o.thm[3].l[d], a1), C * c < z + X) {
        var Q = C * k / (z + X);
        z *= Q, X *= Q;
      }
      o.thm[2].l[d] = Math.min(z, o.thm[2].l[d]), o.thm[3].l[d] = Math.min(X, o.thm[3].l[d]);
    }
    H *= s1.BLKSIZE_s / s1.BLKSIZE;
    for (var d = 0; d < s1.SBMAX_s; d++)
      for (var t1 = 0; t1 < 3; t1++) {
        var C, z, X, a1;
        if (a1 = o.ATH.cb_s[o.bm_s[d]] * H, C = Math.min(
          Math.max(o.thm[0].s[d][t1], a1),
          Math.max(o.thm[1].s[d][t1], a1)
        ), z = Math.max(o.thm[2].s[d][t1], a1), X = Math.max(o.thm[3].s[d][t1], a1), C * c < z + X) {
          var Q = C * c / (z + X);
          z *= Q, X *= Q;
        }
        o.thm[2].s[d][t1] = Math.min(
          o.thm[2].s[d][t1],
          z
        ), o.thm[3].s[d][t1] = Math.min(
          o.thm[3].s[d][t1],
          X
        );
      }
  }
  function G(o, c, S, k, H) {
    var d, C, z = 0, X = 0;
    for (d = C = 0; d < s1.SBMAX_s; ++C, ++d) {
      for (var a1 = o.bo_s[d], Q = o.npart_s, t1 = a1 < Q ? a1 : Q; C < t1; )
        N1(c[C] >= 0), N1(S[C] >= 0), z += c[C], X += S[C], C++;
      if (o.en[k].s[d][H] = z, o.thm[k].s[d][H] = X, C >= Q) {
        ++d;
        break;
      }
      N1(c[C] >= 0), N1(S[C] >= 0);
      {
        var p1 = o.PSY.bo_s_weight[d], x1 = 1 - p1;
        z = p1 * c[C], X = p1 * S[C], o.en[k].s[d][H] += z, o.thm[k].s[d][H] += X, z = x1 * c[C], X = x1 * S[C];
      }
    }
    for (; d < s1.SBMAX_s; ++d)
      o.en[k].s[d][H] = 0, o.thm[k].s[d][H] = 0;
  }
  function B(o, c, S, k) {
    var H, d, C = 0, z = 0;
    for (H = d = 0; H < s1.SBMAX_l; ++d, ++H) {
      for (var X = o.bo_l[H], a1 = o.npart_l, Q = X < a1 ? X : a1; d < Q; )
        N1(c[d] >= 0), N1(S[d] >= 0), C += c[d], z += S[d], d++;
      if (o.en[k].l[H] = C, o.thm[k].l[H] = z, d >= a1) {
        ++H;
        break;
      }
      N1(c[d] >= 0), N1(S[d] >= 0);
      {
        var t1 = o.PSY.bo_l_weight[H], p1 = 1 - t1;
        C = t1 * c[d], z = t1 * S[d], o.en[k].l[H] += C, o.thm[k].l[H] += z, C = p1 * c[d], z = p1 * S[d];
      }
    }
    for (; H < s1.SBMAX_l; ++H)
      o.en[k].l[H] = 0, o.thm[k].l[H] = 0;
  }
  function n(o, c, S, k, H, d) {
    var C = o.internal_flags, z, X;
    for (X = z = 0; X < C.npart_s; ++X) {
      for (var a1 = 0, Q = C.numlines_s[X], t1 = 0; t1 < Q; ++t1, ++z) {
        var p1 = c[d][z];
        a1 += p1;
      }
      S[X] = a1;
    }
    for (N1(X == C.npart_s), z = X = 0; X < C.npart_s; X++) {
      var x1 = C.s3ind_s[X][0], o1 = C.s3_ss[z++] * S[x1];
      for (++x1; x1 <= C.s3ind_s[X][1]; )
        o1 += C.s3_ss[z] * S[x1], ++z, ++x1;
      {
        var E1 = D * C.nb_s1[H][X];
        k[X] = Math.min(o1, E1);
      }
      if (C.blocktype_old[H & 1] == s1.SHORT_TYPE) {
        var E1 = Z * C.nb_s2[H][X], J = k[X];
        k[X] = Math.min(E1, J);
      }
      C.nb_s2[H][X] = C.nb_s1[H][X], C.nb_s1[H][X] = o1, N1(k[X] >= 0);
    }
    for (; X <= s1.CBANDS; ++X)
      S[X] = 0, k[X] = 0;
  }
  function r(o, c, S, k) {
    var H = o.internal_flags;
    o.short_blocks == qe.short_block_coupled && !(c[0] != 0 && c[1] != 0) && (c[0] = c[1] = 0);
    for (var d = 0; d < H.channels_out; d++)
      k[d] = s1.NORM_TYPE, o.short_blocks == qe.short_block_dispensed && (c[d] = 1), o.short_blocks == qe.short_block_forced && (c[d] = 0), c[d] != 0 ? (N1(H.blocktype_old[d] != s1.START_TYPE), H.blocktype_old[d] == s1.SHORT_TYPE && (k[d] = s1.STOP_TYPE)) : (k[d] = s1.SHORT_TYPE, H.blocktype_old[d] == s1.NORM_TYPE && (H.blocktype_old[d] = s1.START_TYPE), H.blocktype_old[d] == s1.STOP_TYPE && (H.blocktype_old[d] = s1.SHORT_TYPE)), S[d] = H.blocktype_old[d], H.blocktype_old[d] = k[d];
  }
  function t(o, c, S) {
    return S >= 1 ? o : S <= 0 ? c : c > 0 ? Math.pow(o / c, S) * c : 0;
  }
  var i = [
    11.8,
    13.6,
    17.2,
    32,
    46.5,
    51.3,
    57.5,
    67.1,
    71.5,
    84.6,
    97.6,
    130
    /* 255.8 */
  ];
  function u(o, c) {
    for (var S = 309.07, k = 0; k < s1.SBMAX_s - 1; k++)
      for (var H = 0; H < 3; H++) {
        var d = o.thm.s[k][H];
        if (d > 0) {
          var C = d * c, z = o.en.s[k][H];
          z > C && (z > C * 1e10 ? S += i[k] * (10 * A) : S += i[k] * _e.FAST_LOG10(z / C));
        }
      }
    return S;
  }
  var F = [
    6.8,
    5.8,
    5.8,
    6.4,
    6.5,
    9.9,
    12.1,
    14.4,
    15,
    18.9,
    21.6,
    26.9,
    34.2,
    40.2,
    46.8,
    56.5,
    60.7,
    73.9,
    85.7,
    93.4,
    126.1
    /* 241.3 */
  ];
  function e1(o, c) {
    for (var S = 281.0575, k = 0; k < s1.SBMAX_l - 1; k++) {
      var H = o.thm.l[k];
      if (H > 0) {
        var d = H * c, C = o.en.l[k];
        C > d && (C > d * 1e10 ? S += F[k] * (10 * A) : S += F[k] * _e.FAST_LOG10(C / d));
      }
    }
    return S;
  }
  function T(o, c, S, k, H) {
    var d, C;
    for (d = C = 0; d < o.npart_l; ++d) {
      var z = 0, X = 0, a1;
      for (a1 = 0; a1 < o.numlines_l[d]; ++a1, ++C) {
        var Q = c[C];
        z += Q, X < Q && (X = Q);
      }
      S[d] = z, k[d] = X, H[d] = z * o.rnumlines_l[d], N1(o.rnumlines_l[d] >= 0), N1(S[d] >= 0), N1(k[d] >= 0), N1(H[d] >= 0);
    }
  }
  function q(o, c, S, k) {
    var H = P.length - 1, d = 0, C = S[d] + S[d + 1];
    if (C > 0) {
      var z = c[d];
      z < c[d + 1] && (z = c[d + 1]), N1(o.numlines_l[d] + o.numlines_l[d + 1] - 1 > 0), C = 20 * (z * 2 - C) / (C * (o.numlines_l[d] + o.numlines_l[d + 1] - 1));
      var X = 0 | C;
      X > H && (X = H), k[d] = X;
    } else
      k[d] = 0;
    for (d = 1; d < o.npart_l - 1; d++)
      if (C = S[d - 1] + S[d] + S[d + 1], C > 0) {
        var z = c[d - 1];
        z < c[d] && (z = c[d]), z < c[d + 1] && (z = c[d + 1]), N1(o.numlines_l[d - 1] + o.numlines_l[d] + o.numlines_l[d + 1] - 1 > 0), C = 20 * (z * 3 - C) / (C * (o.numlines_l[d - 1] + o.numlines_l[d] + o.numlines_l[d + 1] - 1));
        var X = 0 | C;
        X > H && (X = H), k[d] = X;
      } else
        k[d] = 0;
    if (N1(d == o.npart_l - 1), C = S[d - 1] + S[d], C > 0) {
      var z = c[d - 1];
      z < c[d] && (z = c[d]), N1(o.numlines_l[d - 1] + o.numlines_l[d] - 1 > 0), C = 20 * (z * 2 - C) / (C * (o.numlines_l[d - 1] + o.numlines_l[d] - 1));
      var X = 0 | C;
      X > H && (X = H), k[d] = X;
    } else
      k[d] = 0;
    N1(d == o.npart_l - 1);
  }
  var i1 = [
    -865163e-23 * 2,
    -851586e-8 * 2,
    -674764e-23 * 2,
    0.0209036 * 2,
    -336639e-22 * 2,
    -0.0438162 * 2,
    -154175e-22 * 2,
    0.0931738 * 2,
    -552212e-22 * 2,
    -0.313819 * 2
  ];
  this.L3psycho_anal_ns = function(o, c, S, k, H, d, C, z, X, a1) {
    var Q = o.internal_flags, t1 = me([2, s1.BLKSIZE]), p1 = me([2, 3, s1.BLKSIZE_s]), x1 = $1(s1.CBANDS + 1), o1 = $1(s1.CBANDS + 1), E1 = $1(s1.CBANDS + 2), J = Ne(2), M1 = Ne(2), X1, l1, B1, f1, V1, j1, b1, D1, O1 = me([2, 576]), q1, fe = Ne(s1.CBANDS + 2), K1 = Ne(s1.CBANDS + 2);
    for (Vs.fill(K1, 0), X1 = Q.channels_out, o.mode == p.JOINT_STEREO && (X1 = 4), o.VBR == je.vbr_off ? q1 = Q.ResvMax == 0 ? 0 : Q.ResvSize / Q.ResvMax * 0.5 : o.VBR == je.vbr_rh || o.VBR == je.vbr_mtrh || o.VBR == je.vbr_mt ? q1 = 0.6 : q1 = 1, l1 = 0; l1 < Q.channels_out; l1++) {
      var z1 = c[l1], ne = S + 576 - 350 - U + 192;
      for (f1 = 0; f1 < 576; f1++) {
        var ce, he;
        for (ce = z1[ne + f1 + 10], he = 0, V1 = 0; V1 < (U - 1) / 2 - 1; V1 += 2)
          ce += i1[V1] * (z1[ne + f1 + V1] + z1[ne + f1 + U - V1]), he += i1[V1 + 1] * (z1[ne + f1 + V1 + 1] + z1[ne + f1 + U - V1 - 1]);
        O1[l1][f1] = ce + he;
      }
      H[k][l1].en.assign(Q.en[l1]), H[k][l1].thm.assign(Q.thm[l1]), X1 > 2 && (d[k][l1].en.assign(Q.en[l1 + 2]), d[k][l1].thm.assign(Q.thm[l1 + 2]));
    }
    for (l1 = 0; l1 < X1; l1++) {
      var ge, ve, te = $1(12), Re = [0, 0, 0, 0], Fe = $1(12), vt = 1, Qt, Ut = $1(s1.CBANDS), Wt = $1(s1.CBANDS), Z1 = [0, 0, 0, 0], Kt = $1(s1.HBLKSIZE), Jt = me([3, s1.HBLKSIZE_s]);
      for (N1(Q.npart_s <= s1.CBANDS), N1(Q.npart_l <= s1.CBANDS), f1 = 0; f1 < 3; f1++)
        te[f1] = Q.nsPsy.last_en_subshort[l1][f1 + 6], N1(Q.nsPsy.last_en_subshort[l1][f1 + 4] > 0), Fe[f1] = te[f1] / Q.nsPsy.last_en_subshort[l1][f1 + 4], Re[0] += te[f1];
      if (l1 == 2)
        for (f1 = 0; f1 < 576; f1++) {
          var wt, Mt;
          wt = O1[0][f1], Mt = O1[1][f1], O1[0][f1] = wt + Mt, O1[1][f1] = wt - Mt;
        }
      {
        var $t = O1[l1 & 1], We = 0;
        for (f1 = 0; f1 < 9; f1++) {
          for (var Ja = We + 64, ee = 1; We < Ja; We++)
            ee < Math.abs($t[We]) && (ee = Math.abs($t[We]));
          Q.nsPsy.last_en_subshort[l1][f1] = te[f1 + 3] = ee, Re[1 + f1 / 3] += ee, ee > te[f1 + 3 - 2] ? (N1(te[f1 + 3 - 2] > 0), ee = ee / te[f1 + 3 - 2]) : te[f1 + 3 - 2] > ee * 10 ? ee = te[f1 + 3 - 2] / (ee * 10) : ee = 0, Fe[f1 + 3] = ee;
        }
      }
      if (o.analysis) {
        var St = Fe[0];
        for (f1 = 1; f1 < 12; f1++)
          St < Fe[f1] && (St = Fe[f1]);
        Q.pinfo.ers[k][l1] = Q.pinfo.ers_save[l1], Q.pinfo.ers_save[l1] = St;
      }
      for (Qt = l1 == 3 ? Q.nsPsy.attackthre_s : Q.nsPsy.attackthre, f1 = 0; f1 < 12; f1++)
        Z1[f1 / 3] == 0 && Fe[f1] > Qt && (Z1[f1 / 3] = f1 % 3 + 1);
      for (f1 = 1; f1 < 4; f1++) {
        var Rt;
        Re[f1 - 1] > Re[f1] ? (N1(Re[f1] > 0), Rt = Re[f1 - 1] / Re[f1]) : (N1(Re[f1 - 1] > 0), Rt = Re[f1] / Re[f1 - 1]), Rt < 1.7 && (Z1[f1] = 0, f1 == 1 && (Z1[0] = 0));
      }
      for (Z1[0] != 0 && Q.nsPsy.lastAttacks[l1] != 0 && (Z1[0] = 0), (Q.nsPsy.lastAttacks[l1] == 3 || Z1[0] + Z1[1] + Z1[2] + Z1[3] != 0) && (vt = 0, Z1[1] != 0 && Z1[0] != 0 && (Z1[1] = 0), Z1[2] != 0 && Z1[1] != 0 && (Z1[2] = 0), Z1[3] != 0 && Z1[2] != 0 && (Z1[3] = 0)), l1 < 2 ? M1[l1] = vt : vt == 0 && (M1[0] = M1[1] = 0), X[l1] = Q.tot_ener[l1], ve = p1, ge = t1, M(
        o,
        Kt,
        Jt,
        ge,
        l1 & 1,
        ve,
        l1 & 1,
        k,
        l1,
        c,
        S
      ), T(Q, Kt, x1, Ut, Wt), q(Q, Ut, Wt, fe), D1 = 0; D1 < 3; D1++) {
        var Bt, ie;
        for (n(o, Jt, o1, E1, l1, D1), G(Q, o1, E1, l1, D1), b1 = 0; b1 < s1.SBMAX_s; b1++) {
          if (ie = Q.thm[l1].s[b1][D1], ie *= g, Z1[D1] >= 2 || Z1[D1 + 1] == 1) {
            var Ke = D1 != 0 ? D1 - 1 : 2, ee = t(
              Q.thm[l1].s[b1][Ke],
              ie,
              m * q1
            );
            ie = Math.min(ie, ee);
          }
          if (Z1[D1] == 1) {
            var Ke = D1 != 0 ? D1 - 1 : 2, ee = t(
              Q.thm[l1].s[b1][Ke],
              ie,
              N * q1
            );
            ie = Math.min(ie, ee);
          } else if (D1 != 0 && Z1[D1 - 1] == 3 || D1 == 0 && Q.nsPsy.lastAttacks[l1] == 3) {
            var Ke = D1 != 2 ? D1 + 1 : 0, ee = t(
              Q.thm[l1].s[b1][Ke],
              ie,
              N * q1
            );
            ie = Math.min(ie, ee);
          }
          Bt = te[D1 * 3 + 3] + te[D1 * 3 + 4] + te[D1 * 3 + 5], te[D1 * 3 + 5] * 6 < Bt && (ie *= 0.5, te[D1 * 3 + 4] * 6 < Bt && (ie *= 0.5)), Q.thm[l1].s[b1][D1] = ie;
        }
      }
      for (Q.nsPsy.lastAttacks[l1] = Z1[2], j1 = 0, B1 = 0; B1 < Q.npart_l; B1++) {
        for (var Ie = Q.s3ind[B1][0], At = x1[Ie] * P[fe[Ie]], Le = Q.s3_ll[j1++] * At; ++Ie <= Q.s3ind[B1][1]; )
          At = x1[Ie] * P[fe[Ie]], Le = b(
            Le,
            Q.s3_ll[j1++] * At,
            Ie,
            Ie - B1,
            Q
          );
        Le *= 0.158489319246111, Q.blocktype_old[l1 & 1] == s1.SHORT_TYPE ? E1[B1] = Le : E1[B1] = t(
          Math.min(Le, Math.min(j * Q.nb_1[l1][B1], K * Q.nb_2[l1][B1])),
          Le,
          q1
        ), Q.nb_2[l1][B1] = Q.nb_1[l1][B1], Q.nb_1[l1][B1] = Le;
      }
      for (; B1 <= s1.CBANDS; ++B1)
        x1[B1] = 0, E1[B1] = 0;
      B(Q, x1, E1, l1);
    }
    if ((o.mode == p.STEREO || o.mode == p.JOINT_STEREO) && o.interChRatio > 0 && V(o, o.interChRatio), o.mode == p.JOINT_STEREO) {
      var yt;
      L(Q), yt = o.msfix, Math.abs(yt) > 0 && I(Q, yt, o.ATHlower * Q.ATH.adjust);
    }
    for (r(o, M1, a1, J), l1 = 0; l1 < X1; l1++) {
      var Je, $e = 0, it, _t;
      l1 > 1 ? (Je = z, $e = -2, it = s1.NORM_TYPE, (a1[0] == s1.SHORT_TYPE || a1[1] == s1.SHORT_TYPE) && (it = s1.SHORT_TYPE), _t = d[k][l1 - 2]) : (Je = C, $e = 0, it = a1[l1], _t = H[k][l1]), it == s1.SHORT_TYPE ? Je[$e + l1] = u(_t, Q.masking_lower) : Je[$e + l1] = e1(_t, Q.masking_lower), o.analysis && (Q.pinfo.pe[k][l1] = Je[$e + l1]);
    }
    return 0;
  };
  function h1(o, c, S, k, H, d, C, z) {
    var X = o.internal_flags;
    if (k < 2)
      E.fft_long(X, C[z], k, c, S);
    else if (k == 2)
      for (var a1 = s1.BLKSIZE - 1; a1 >= 0; --a1) {
        var Q = C[z + 0][a1], t1 = C[z + 1][a1];
        C[z + 0][a1] = (Q + t1) * _e.SQRT2 * 0.5, C[z + 1][a1] = (Q - t1) * _e.SQRT2 * 0.5;
      }
    d[0] = C[z + 0][0], d[0] *= d[0];
    for (var a1 = s1.BLKSIZE / 2 - 1; a1 >= 0; --a1) {
      var p1 = C[z + 0][s1.BLKSIZE / 2 - a1], x1 = C[z + 0][s1.BLKSIZE / 2 + a1];
      d[s1.BLKSIZE / 2 - a1] = (p1 * p1 + x1 * x1) * 0.5;
    }
    {
      for (var o1 = 0, a1 = 11; a1 < s1.HBLKSIZE; a1++)
        o1 += d[a1];
      X.tot_ener[k] = o1;
    }
    if (o.analysis) {
      for (var a1 = 0; a1 < s1.HBLKSIZE; a1++)
        X.pinfo.energy[H][k][a1] = X.pinfo.energy_save[k][a1], X.pinfo.energy_save[k][a1] = d[a1];
      X.pinfo.pe[H][k] = X.pe[k];
    }
  }
  function g1(o, c, S, k, H, d, C, z) {
    var X = o.internal_flags;
    if (H == 0 && k < 2 && E.fft_short(X, C[z], k, c, S), k == 2)
      for (var a1 = s1.BLKSIZE_s - 1; a1 >= 0; --a1) {
        var Q = C[z + 0][H][a1], t1 = C[z + 1][H][a1];
        C[z + 0][H][a1] = (Q + t1) * _e.SQRT2 * 0.5, C[z + 1][H][a1] = (Q - t1) * _e.SQRT2 * 0.5;
      }
    d[H][0] = C[z + 0][H][0], d[H][0] *= d[H][0];
    for (var a1 = s1.BLKSIZE_s / 2 - 1; a1 >= 0; --a1) {
      var p1 = C[z + 0][H][s1.BLKSIZE_s / 2 - a1], x1 = C[z + 0][H][s1.BLKSIZE_s / 2 + a1];
      d[H][s1.BLKSIZE_s / 2 - a1] = (p1 * p1 + x1 * x1) * 0.5;
    }
  }
  function S1(o, c, S, k) {
    var H = o.internal_flags;
    o.athaa_loudapprox == 2 && S < 2 && (H.loudness_sq[c][S] = H.loudness_sq_save[S], H.loudness_sq_save[S] = W(k, H));
  }
  var v1 = [
    -865163e-23 * 2,
    -851586e-8 * 2,
    -674764e-23 * 2,
    0.0209036 * 2,
    -336639e-22 * 2,
    -0.0438162 * 2,
    -154175e-22 * 2,
    0.0931738 * 2,
    -552212e-22 * 2,
    -0.313819 * 2
  ];
  function w1(o, c, S, k, H, d, C, z, X, a1) {
    for (var Q = me([2, 576]), t1 = o.internal_flags, p1 = t1.channels_out, x1 = o.mode == p.JOINT_STEREO ? 4 : p1, o1 = 0; o1 < p1; o1++) {
      firbuf = c[o1];
      for (var E1 = S + 576 - 350 - U + 192, J = 0; J < 576; J++) {
        var M1, X1;
        M1 = firbuf[E1 + J + 10], X1 = 0;
        for (var l1 = 0; l1 < (U - 1) / 2 - 1; l1 += 2)
          M1 += v1[l1] * (firbuf[E1 + J + l1] + firbuf[E1 + J + U - l1]), X1 += v1[l1 + 1] * (firbuf[E1 + J + l1 + 1] + firbuf[E1 + J + U - l1 - 1]);
        Q[o1][J] = M1 + X1;
      }
      H[k][o1].en.assign(t1.en[o1]), H[k][o1].thm.assign(t1.thm[o1]), x1 > 2 && (d[k][o1].en.assign(t1.en[o1 + 2]), d[k][o1].thm.assign(t1.thm[o1 + 2]));
    }
    for (var o1 = 0; o1 < x1; o1++) {
      var B1 = $1(12), f1 = $1(12), V1 = [0, 0, 0, 0], j1 = Q[o1 & 1], b1 = 0, D1 = o1 == 3 ? t1.nsPsy.attackthre_s : t1.nsPsy.attackthre, O1 = 1;
      if (o1 == 2)
        for (var J = 0, l1 = 576; l1 > 0; ++J, --l1) {
          var q1 = Q[0][J], fe = Q[1][J];
          Q[0][J] = q1 + fe, Q[1][J] = q1 - fe;
        }
      for (var J = 0; J < 3; J++)
        f1[J] = t1.nsPsy.last_en_subshort[o1][J + 6], N1(t1.nsPsy.last_en_subshort[o1][J + 4] > 0), B1[J] = f1[J] / t1.nsPsy.last_en_subshort[o1][J + 4], V1[0] += f1[J];
      for (var J = 0; J < 9; J++) {
        for (var K1 = b1 + 64, z1 = 1; b1 < K1; b1++)
          z1 < Math.abs(j1[b1]) && (z1 = Math.abs(j1[b1]));
        t1.nsPsy.last_en_subshort[o1][J] = f1[J + 3] = z1, V1[1 + J / 3] += z1, z1 > f1[J + 3 - 2] ? (N1(f1[J + 3 - 2] > 0), z1 = z1 / f1[J + 3 - 2]) : f1[J + 3 - 2] > z1 * 10 ? z1 = f1[J + 3 - 2] / (z1 * 10) : z1 = 0, B1[J + 3] = z1;
      }
      for (var J = 0; J < 3; ++J) {
        var ne = f1[J * 3 + 3] + f1[J * 3 + 4] + f1[J * 3 + 5], ce = 1;
        f1[J * 3 + 5] * 6 < ne && (ce *= 0.5, f1[J * 3 + 4] * 6 < ne && (ce *= 0.5)), z[o1][J] = ce;
      }
      if (o.analysis) {
        for (var he = B1[0], J = 1; J < 12; J++)
          he < B1[J] && (he = B1[J]);
        t1.pinfo.ers[k][o1] = t1.pinfo.ers_save[o1], t1.pinfo.ers_save[o1] = he;
      }
      for (var J = 0; J < 12; J++)
        X[o1][J / 3] == 0 && B1[J] > D1 && (X[o1][J / 3] = J % 3 + 1);
      for (var J = 1; J < 4; J++) {
        var ge = V1[J - 1], ve = V1[J], te = Math.max(ge, ve);
        te < 4e4 && ge < 1.7 * ve && ve < 1.7 * ge && (J == 1 && X[o1][0] <= X[o1][J] && (X[o1][0] = 0), X[o1][J] = 0);
      }
      X[o1][0] <= t1.nsPsy.lastAttacks[o1] && (X[o1][0] = 0), (t1.nsPsy.lastAttacks[o1] == 3 || X[o1][0] + X[o1][1] + X[o1][2] + X[o1][3] != 0) && (O1 = 0, X[o1][1] != 0 && X[o1][0] != 0 && (X[o1][1] = 0), X[o1][2] != 0 && X[o1][1] != 0 && (X[o1][2] = 0), X[o1][3] != 0 && X[o1][2] != 0 && (X[o1][3] = 0)), o1 < 2 ? a1[o1] = O1 : O1 == 0 && (a1[0] = a1[1] = 0), C[o1] = t1.tot_ener[o1];
    }
  }
  function y1(o, c, S) {
    if (S == 0)
      for (var k = 0; k < o.npart_s; k++)
        o.nb_s2[c][k] = o.nb_s1[c][k], o.nb_s1[c][k] = 0;
  }
  function F1(o, c) {
    for (var S = 0; S < o.npart_l; S++)
      o.nb_2[c][S] = o.nb_1[c][S], o.nb_1[c][S] = 0;
  }
  function pe(o, c, S, k) {
    var H = P.length - 1, d = 0, C = S[d] + S[d + 1];
    if (C > 0) {
      var z = c[d];
      z < c[d + 1] && (z = c[d + 1]), N1(o.numlines_s[d] + o.numlines_s[d + 1] - 1 > 0), C = 20 * (z * 2 - C) / (C * (o.numlines_s[d] + o.numlines_s[d + 1] - 1));
      var X = 0 | C;
      X > H && (X = H), k[d] = X;
    } else
      k[d] = 0;
    for (d = 1; d < o.npart_s - 1; d++)
      if (C = S[d - 1] + S[d] + S[d + 1], N1(d + 1 < o.npart_s), C > 0) {
        var z = c[d - 1];
        z < c[d] && (z = c[d]), z < c[d + 1] && (z = c[d + 1]), N1(o.numlines_s[d - 1] + o.numlines_s[d] + o.numlines_s[d + 1] - 1 > 0), C = 20 * (z * 3 - C) / (C * (o.numlines_s[d - 1] + o.numlines_s[d] + o.numlines_s[d + 1] - 1));
        var X = 0 | C;
        X > H && (X = H), k[d] = X;
      } else
        k[d] = 0;
    if (N1(d == o.npart_s - 1), C = S[d - 1] + S[d], C > 0) {
      var z = c[d - 1];
      z < c[d] && (z = c[d]), N1(o.numlines_s[d - 1] + o.numlines_s[d] - 1 > 0), C = 20 * (z * 2 - C) / (C * (o.numlines_s[d - 1] + o.numlines_s[d] - 1));
      var X = 0 | C;
      X > H && (X = H), k[d] = X;
    } else
      k[d] = 0;
    N1(d == o.npart_s - 1);
  }
  function s(o, c, S, k, H, d) {
    var C = o.internal_flags, z = new float[s1.CBANDS](), X = $1(s1.CBANDS), a1, Q, t1, p1 = new int[s1.CBANDS]();
    for (t1 = Q = 0; t1 < C.npart_s; ++t1) {
      var x1 = 0, o1 = 0, E1 = C.numlines_s[t1];
      for (a1 = 0; a1 < E1; ++a1, ++Q) {
        var J = c[d][Q];
        x1 += J, o1 < J && (o1 = J);
      }
      S[t1] = x1, z[t1] = o1, X[t1] = x1 / E1, N1(X[t1] >= 0);
    }
    for (N1(t1 == C.npart_s); t1 < s1.CBANDS; ++t1)
      z[t1] = 0, X[t1] = 0;
    for (pe(C, z, X, p1), Q = t1 = 0; t1 < C.npart_s; t1++) {
      var M1 = C.s3ind_s[t1][0], X1 = C.s3ind_s[t1][1], l1, B1, f1, V1, j1;
      for (l1 = p1[M1], B1 = 1, V1 = C.s3_ss[Q] * S[M1] * P[p1[M1]], ++Q, ++M1; M1 <= X1; )
        l1 += p1[M1], B1 += 1, f1 = C.s3_ss[Q] * S[M1] * P[p1[M1]], V1 = v(V1, f1, M1 - t1), ++Q, ++M1;
      l1 = (1 + 2 * l1) / (2 * B1), j1 = P[l1] * 0.5, V1 *= j1, k[t1] = V1, C.nb_s2[H][t1] = C.nb_s1[H][t1], C.nb_s1[H][t1] = V1, f1 = z[t1], f1 *= C.minval_s[t1], f1 *= j1, k[t1] > f1 && (k[t1] = f1), C.masking_lower > 1 && (k[t1] *= C.masking_lower), k[t1] > S[t1] && (k[t1] = S[t1]), C.masking_lower < 1 && (k[t1] *= C.masking_lower), N1(k[t1] >= 0);
    }
    for (; t1 < s1.CBANDS; ++t1)
      S[t1] = 0, k[t1] = 0;
  }
  function _(o, c, S, k, H) {
    var d = $1(s1.CBANDS), C = $1(s1.CBANDS), z = Ne(s1.CBANDS + 2), X;
    T(o, c, S, d, C), q(o, d, C, z);
    var a1 = 0;
    for (X = 0; X < o.npart_l; X++) {
      var Q, t1, p1, x1, o1 = o.s3ind[X][0], E1 = o.s3ind[X][1], J = 0, M1 = 0;
      for (J = z[o1], M1 += 1, t1 = o.s3_ll[a1] * S[o1] * P[z[o1]], ++a1, ++o1; o1 <= E1; )
        J += z[o1], M1 += 1, Q = o.s3_ll[a1] * S[o1] * P[z[o1]], x1 = v(t1, Q, o1 - X), t1 = x1, ++a1, ++o1;
      if (J = (1 + 2 * J) / (2 * M1), p1 = P[J] * 0.5, t1 *= p1, o.blocktype_old[H & 1] == s1.SHORT_TYPE) {
        var X1 = j * o.nb_1[H][X];
        X1 > 0 ? k[X] = Math.min(t1, X1) : k[X] = Math.min(t1, S[X] * N);
      } else {
        var l1 = K * o.nb_2[H][X], B1 = j * o.nb_1[H][X], X1;
        l1 <= 0 && (l1 = t1), B1 <= 0 && (B1 = t1), o.blocktype_old[H & 1] == s1.NORM_TYPE ? X1 = Math.min(B1, l1) : X1 = B1, k[X] = Math.min(t1, X1);
      }
      o.nb_2[H][X] = o.nb_1[H][X], o.nb_1[H][X] = t1, Q = d[X], Q *= o.minval_l[X], Q *= p1, k[X] > Q && (k[X] = Q), o.masking_lower > 1 && (k[X] *= o.masking_lower), k[X] > S[X] && (k[X] = S[X]), o.masking_lower < 1 && (k[X] *= o.masking_lower), N1(k[X] >= 0);
    }
    for (; X < s1.CBANDS; ++X)
      S[X] = 0, k[X] = 0;
  }
  function d1(o, c) {
    var S = o.internal_flags;
    o.short_blocks == qe.short_block_coupled && !(c[0] != 0 && c[1] != 0) && (c[0] = c[1] = 0);
    for (var k = 0; k < S.channels_out; k++)
      o.short_blocks == qe.short_block_dispensed && (c[k] = 1), o.short_blocks == qe.short_block_forced && (c[k] = 0);
  }
  function R1(o, c, S) {
    for (var k = o.internal_flags, H = 0; H < k.channels_out; H++) {
      var d = s1.NORM_TYPE;
      c[H] != 0 ? (N1(k.blocktype_old[H] != s1.START_TYPE), k.blocktype_old[H] == s1.SHORT_TYPE && (d = s1.STOP_TYPE)) : (d = s1.SHORT_TYPE, k.blocktype_old[H] == s1.NORM_TYPE && (k.blocktype_old[H] = s1.START_TYPE), k.blocktype_old[H] == s1.STOP_TYPE && (k.blocktype_old[H] = s1.SHORT_TYPE)), S[H] = k.blocktype_old[H], k.blocktype_old[H] = d;
    }
  }
  function I1(o, c, S, k, H, d, C) {
    for (var z = d * 2, X = d > 0 ? Math.pow(10, H) : 1, a1, Q, t1 = 0; t1 < C; ++t1) {
      var p1 = o[2][t1], x1 = o[3][t1], o1 = c[0][t1], E1 = c[1][t1], J = c[2][t1], M1 = c[3][t1];
      if (o1 <= 1.58 * E1 && E1 <= 1.58 * o1) {
        var X1 = S[t1] * x1, l1 = S[t1] * p1;
        Q = Math.max(J, Math.min(M1, X1)), a1 = Math.max(M1, Math.min(J, l1));
      } else
        Q = J, a1 = M1;
      if (d > 0) {
        var B1, f1, V1 = k[t1] * X;
        if (B1 = Math.min(Math.max(o1, V1), Math.max(E1, V1)), J = Math.max(Q, V1), M1 = Math.max(a1, V1), f1 = J + M1, f1 > 0 && B1 * z < f1) {
          var j1 = B1 * z / f1;
          J *= j1, M1 *= j1;
        }
        Q = Math.min(J, Q), a1 = Math.min(M1, a1);
      }
      Q > p1 && (Q = p1), a1 > x1 && (a1 = x1), c[2][t1] = Q, c[3][t1] = a1;
    }
  }
  this.L3psycho_anal_vbr = function(o, c, S, k, H, d, C, z, X, a1) {
    var Q = o.internal_flags, t1, p1, x1 = $1(s1.HBLKSIZE), o1 = me([3, s1.HBLKSIZE_s]), E1 = me([2, s1.BLKSIZE]), J = me([2, 3, s1.BLKSIZE_s]), M1 = me([4, s1.CBANDS]), X1 = me([4, s1.CBANDS]), l1 = me([4, 3]), B1 = 0.6, f1 = [
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0]
    ], V1 = Ne(2), j1 = o.mode == p.JOINT_STEREO ? 4 : Q.channels_out;
    w1(
      o,
      c,
      S,
      k,
      H,
      d,
      X,
      l1,
      f1,
      V1
    ), d1(o, V1);
    {
      for (var b1 = 0; b1 < j1; b1++) {
        var D1 = b1 & 1;
        t1 = E1, h1(
          o,
          c,
          S,
          b1,
          k,
          x1,
          t1,
          D1
        ), S1(
          o,
          k,
          b1,
          x1
        ), V1[D1] != 0 ? _(
          Q,
          x1,
          M1[b1],
          X1[b1],
          b1
        ) : F1(Q, b1);
      }
      V1[0] + V1[1] == 2 && o.mode == p.JOINT_STEREO && I1(
        M1,
        X1,
        Q.mld_cb_l,
        Q.ATH.cb_l,
        o.ATHlower * Q.ATH.adjust,
        o.msfix,
        Q.npart_l
      );
      for (var b1 = 0; b1 < j1; b1++) {
        var D1 = b1 & 1;
        V1[D1] != 0 && B(Q, M1[b1], X1[b1], b1);
      }
    }
    {
      for (var O1 = 0; O1 < 3; O1++) {
        for (var b1 = 0; b1 < j1; ++b1) {
          var D1 = b1 & 1;
          V1[D1] != 0 ? y1(Q, b1, O1) : (p1 = J, g1(
            o,
            c,
            S,
            b1,
            O1,
            o1,
            p1,
            D1
          ), s(
            o,
            o1,
            M1[b1],
            X1[b1],
            b1,
            O1
          ));
        }
        V1[0] + V1[1] == 0 && o.mode == p.JOINT_STEREO && I1(
          M1,
          X1,
          Q.mld_cb_s,
          Q.ATH.cb_s,
          o.ATHlower * Q.ATH.adjust,
          o.msfix,
          Q.npart_s
        );
        for (var b1 = 0; b1 < j1; ++b1) {
          var D1 = b1 & 1;
          V1[D1] == 0 && G(
            Q,
            M1[b1],
            X1[b1],
            b1,
            O1
          );
        }
      }
      for (var b1 = 0; b1 < j1; b1++) {
        var D1 = b1 & 1;
        if (V1[D1] == 0)
          for (var q1 = 0; q1 < s1.SBMAX_s; q1++) {
            for (var fe = $1(3), O1 = 0; O1 < 3; O1++) {
              var K1 = Q.thm[b1].s[q1][O1];
              if (K1 *= g, f1[b1][O1] >= 2 || f1[b1][O1 + 1] == 1) {
                var z1 = O1 != 0 ? O1 - 1 : 2, ne = t(
                  Q.thm[b1].s[q1][z1],
                  K1,
                  m * B1
                );
                K1 = Math.min(K1, ne);
              } else if (f1[b1][O1] == 1) {
                var z1 = O1 != 0 ? O1 - 1 : 2, ne = t(
                  Q.thm[b1].s[q1][z1],
                  K1,
                  N * B1
                );
                K1 = Math.min(K1, ne);
              } else if (O1 != 0 && f1[b1][O1 - 1] == 3 || O1 == 0 && Q.nsPsy.lastAttacks[b1] == 3) {
                var z1 = O1 != 2 ? O1 + 1 : 0, ne = t(
                  Q.thm[b1].s[q1][z1],
                  K1,
                  N * B1
                );
                K1 = Math.min(K1, ne);
              }
              K1 *= l1[b1][O1], fe[O1] = K1;
            }
            for (var O1 = 0; O1 < 3; O1++)
              Q.thm[b1].s[q1][O1] = fe[O1];
          }
      }
    }
    for (var b1 = 0; b1 < j1; b1++)
      Q.nsPsy.lastAttacks[b1] = f1[b1][2];
    R1(o, V1, a1);
    for (var b1 = 0; b1 < j1; b1++) {
      var ce, he, ge, ve;
      b1 > 1 ? (ce = z, he = -2, ge = s1.NORM_TYPE, (a1[0] == s1.SHORT_TYPE || a1[1] == s1.SHORT_TYPE) && (ge = s1.SHORT_TYPE), ve = d[k][b1 - 2]) : (ce = C, he = 0, ge = a1[b1], ve = H[k][b1]), ge == s1.SHORT_TYPE ? ce[he + b1] = u(ve, Q.masking_lower) : ce[he + b1] = e1(ve, Q.masking_lower), o.analysis && (Q.pinfo.pe[k][b1] = ce[he + b1]);
    }
    return 0;
  };
  function k1(o, c) {
    var S = o, k;
    return S >= 0 ? k = -S * 27 : k = S * c, k <= -72 ? 0 : Math.exp(k * r1);
  }
  function T1(o) {
    var c = 0, S = 0;
    {
      var k = 0, H, d;
      for (k = 0; k1(k, o) > 1e-20; k -= 1)
        ;
      for (H = k, d = 0; Math.abs(d - H) > 1e-12; )
        k = (d + H) / 2, k1(k, o) > 0 ? d = k : H = k;
      c = H;
    }
    {
      var k = 0, H, d;
      for (k = 0; k1(k, o) > 1e-20; k += 1)
        ;
      for (H = 0, d = k; Math.abs(d - H) > 1e-12; )
        k = (d + H) / 2, k1(k, o) > 0 ? H = k : d = k;
      S = d;
    }
    {
      var C = 0, z = 1e3, X;
      for (X = 0; X <= z; ++X) {
        var k = c + X * (S - c) / z, a1 = k1(k, o);
        C += a1;
      }
      {
        var Q = (z + 1) / (C * (S - c));
        return Q;
      }
    }
  }
  function A1(o) {
    var c, S, k, H;
    return c = o, c >= 0 ? c *= 3 : c *= 1.5, c >= 0.5 && c <= 2.5 ? (H = c - 0.5, S = 8 * (H * H - 2 * H)) : S = 0, c += 0.474, k = 15.811389 + 7.5 * c - 17.5 * Math.sqrt(1 + c * c), k <= -60 ? 0 : (c = Math.exp((S + k) * r1), c /= 0.6609193, c);
  }
  function L1(o) {
    return o < 0 && (o = 0), o = o * 1e-3, 13 * Math.atan(0.76 * o) + 3.5 * Math.atan(o * o / (7.5 * 7.5));
  }
  function P1(o, c, S, k, H, d, C, z, X, a1, Q, t1) {
    var p1 = $1(s1.CBANDS + 1), x1 = z / (t1 > 15 ? 2 * 576 : 2 * 192), o1 = Ne(s1.HBLKSIZE), E1;
    z /= X;
    var J = 0, M1 = 0;
    for (E1 = 0; E1 < s1.CBANDS; E1++) {
      var X1, l1;
      for (X1 = L1(z * J), p1[E1] = z * J, l1 = J; L1(z * l1) - X1 < Y && l1 <= X / 2; l1++)
        ;
      for (o[E1] = l1 - J, M1 = E1 + 1; J < l1; )
        N1(J < s1.HBLKSIZE), o1[J++] = E1;
      if (J > X / 2) {
        J = X / 2, ++E1;
        break;
      }
    }
    N1(E1 < s1.CBANDS), p1[E1] = z * J;
    for (var B1 = 0; B1 < t1; B1++) {
      var f1, V1, j1, b1, D1;
      j1 = a1[B1], b1 = a1[B1 + 1], f1 = 0 | Math.floor(0.5 + Q * (j1 - 0.5)), f1 < 0 && (f1 = 0), V1 = 0 | Math.floor(0.5 + Q * (b1 - 0.5)), V1 > X / 2 && (V1 = X / 2), S[B1] = (o1[f1] + o1[V1]) / 2, c[B1] = o1[V1];
      var O1 = x1 * b1;
      C[B1] = (O1 - p1[c[B1]]) / (p1[c[B1] + 1] - p1[c[B1]]), C[B1] < 0 ? C[B1] = 0 : C[B1] > 1 && (C[B1] = 1), D1 = L1(z * a1[B1] * Q), D1 = Math.min(D1, 15.5) / 15.5, d[B1] = Math.pow(
        10,
        1.25 * (1 - Math.cos(Math.PI * D1)) - 2.5
      );
    }
    J = 0;
    for (var q1 = 0; q1 < M1; q1++) {
      var fe = o[q1], X1, K1;
      X1 = L1(z * J), K1 = L1(z * (J + fe - 1)), k[q1] = 0.5 * (X1 + K1), X1 = L1(z * (J - 0.5)), K1 = L1(z * (J + fe - 0.5)), H[q1] = K1 - X1, J += fe;
    }
    return M1;
  }
  function m1(o, c, S, k, H, d) {
    var C = me([s1.CBANDS, s1.CBANDS]), z, X = 0;
    if (d)
      for (var a1 = 0; a1 < c; a1++)
        for (z = 0; z < c; z++) {
          var Q = A1(S[a1] - S[z]) * k[z];
          C[a1][z] = Q * H[a1];
        }
    else
      for (z = 0; z < c; z++)
        for (var t1 = 15 + Math.min(21 / S[z], 12), p1 = T1(t1), a1 = 0; a1 < c; a1++) {
          var Q = p1 * k1(S[a1] - S[z], t1) * k[z];
          C[a1][z] = Q * H[a1];
        }
    for (var a1 = 0; a1 < c; a1++) {
      for (z = 0; z < c && !(C[a1][z] > 0); z++)
        ;
      for (o[a1][0] = z, z = c - 1; z > 0 && !(C[a1][z] > 0); z--)
        ;
      o[a1][1] = z, X += o[a1][1] - o[a1][0] + 1;
    }
    for (var x1 = $1(X), o1 = 0, a1 = 0; a1 < c; a1++)
      for (z = o[a1][0]; z <= o[a1][1]; z++)
        x1[o1++] = C[a1][z];
    return x1;
  }
  function Y1(o) {
    var c = L1(o);
    return c = Math.min(c, 15.5) / 15.5, Math.pow(
      10,
      1.25 * (1 - Math.cos(Math.PI * c)) - 2.5
    );
  }
  this.psymodel_init = function(o) {
    var c = o.internal_flags, S, k = !0, H = 13, d = 24, C = 0, z = 0, X = -8.25, a1 = -4.5, Q = $1(s1.CBANDS), t1 = $1(s1.CBANDS), p1 = $1(s1.CBANDS), x1 = o.out_samplerate;
    switch (o.experimentalZ) {
      default:
      case 0:
        k = !0;
        break;
      case 1:
        k = !(o.VBR == je.vbr_mtrh || o.VBR == je.vbr_mt);
        break;
      case 2:
        k = !1;
        break;
      case 3:
        H = 8, C = -1.75, z = -0.0125, X = -8.25, a1 = -2.25;
        break;
    }
    for (c.ms_ener_ratio_old = 0.25, c.blocktype_old[0] = c.blocktype_old[1] = s1.NORM_TYPE, S = 0; S < 4; ++S) {
      for (var J = 0; J < s1.CBANDS; ++J)
        c.nb_1[S][J] = 1e20, c.nb_2[S][J] = 1e20, c.nb_s1[S][J] = c.nb_s2[S][J] = 1;
      for (var o1 = 0; o1 < s1.SBMAX_l; o1++)
        c.en[S].l[o1] = 1e20, c.thm[S].l[o1] = 1e20;
      for (var J = 0; J < 3; ++J) {
        for (var o1 = 0; o1 < s1.SBMAX_s; o1++)
          c.en[S].s[o1][J] = 1e20, c.thm[S].s[o1][J] = 1e20;
        c.nsPsy.lastAttacks[S] = 0;
      }
      for (var J = 0; J < 9; J++)
        c.nsPsy.last_en_subshort[S][J] = 10;
    }
    for (c.loudness_sq_save[0] = c.loudness_sq_save[1] = 0, c.npart_l = P1(
      c.numlines_l,
      c.bo_l,
      c.bm_l,
      Q,
      t1,
      c.mld_l,
      c.PSY.bo_l_weight,
      x1,
      s1.BLKSIZE,
      c.scalefac_band.l,
      s1.BLKSIZE / (2 * 576),
      s1.SBMAX_l
    ), N1(c.npart_l < s1.CBANDS), S = 0; S < c.npart_l; S++) {
      var E1 = C;
      Q[S] >= H && (E1 = z * (Q[S] - H) / (d - H) + C * (d - Q[S]) / (d - H)), p1[S] = Math.pow(10, E1 / 10), c.numlines_l[S] > 0 ? c.rnumlines_l[S] = 1 / c.numlines_l[S] : c.rnumlines_l[S] = 0;
    }
    c.s3_ll = m1(
      c.s3ind,
      c.npart_l,
      Q,
      t1,
      p1,
      k
    );
    var J = 0;
    for (S = 0; S < c.npart_l; S++) {
      var M1;
      M1 = ia.MAX_VALUE;
      for (var X1 = 0; X1 < c.numlines_l[S]; X1++, J++) {
        var l1 = x1 * J / (1e3 * s1.BLKSIZE), B1;
        B1 = this.ATHformula(l1 * 1e3, o) - 20, B1 = Math.pow(10, 0.1 * B1), B1 *= c.numlines_l[S], M1 > B1 && (M1 = B1);
      }
      c.ATH.cb_l[S] = M1, M1 = -20 + Q[S] * 20 / 10, M1 > 6 && (M1 = 100), M1 < -15 && (M1 = -15), M1 -= 8, c.minval_l[S] = Math.pow(10, M1 / 10) * c.numlines_l[S];
    }
    for (c.npart_s = P1(
      c.numlines_s,
      c.bo_s,
      c.bm_s,
      Q,
      t1,
      c.mld_s,
      c.PSY.bo_s_weight,
      x1,
      s1.BLKSIZE_s,
      c.scalefac_band.s,
      s1.BLKSIZE_s / (2 * 192),
      s1.SBMAX_s
    ), N1(c.npart_s < s1.CBANDS), J = 0, S = 0; S < c.npart_s; S++) {
      var M1, E1 = X;
      Q[S] >= H && (E1 = a1 * (Q[S] - H) / (d - H) + X * (d - Q[S]) / (d - H)), p1[S] = Math.pow(10, E1 / 10), M1 = ia.MAX_VALUE;
      for (var X1 = 0; X1 < c.numlines_s[S]; X1++, J++) {
        var l1 = x1 * J / (1e3 * s1.BLKSIZE_s), B1;
        B1 = this.ATHformula(l1 * 1e3, o) - 20, B1 = Math.pow(10, 0.1 * B1), B1 *= c.numlines_s[S], M1 > B1 && (M1 = B1);
      }
      c.ATH.cb_s[S] = M1, M1 = -7 + Q[S] * 7 / 12, Q[S] > 12 && (M1 *= 1 + Math.log(1 + M1) * 3.1), Q[S] < 12 && (M1 *= 1 + Math.log(1 - M1) * 2.3), M1 < -15 && (M1 = -15), M1 -= 8, c.minval_s[S] = Math.pow(10, M1 / 10) * c.numlines_s[S];
    }
    c.s3_ss = m1(
      c.s3ind_s,
      c.npart_s,
      Q,
      t1,
      p1,
      k
    ), O(), E.init_fft(c), c.decay = Math.exp(-1 * A / (u1 * x1 / 192));
    {
      var f1;
      f1 = n1, o.exp_nspsytune & 2 && (f1 = 1), Math.abs(o.msfix) > 0 && (f1 = o.msfix), o.msfix = f1;
      for (var V1 = 0; V1 < c.npart_l; V1++)
        c.s3ind[V1][1] > c.npart_l - 1 && (c.s3ind[V1][1] = c.npart_l - 1);
    }
    var j1 = 576 * c.mode_gr / x1;
    if (c.ATH.decay = Math.pow(10, -12 / 10 * j1), c.ATH.adjust = 0.01, c.ATH.adjustLimit = 1, N1(c.bo_l[s1.SBMAX_l - 1] <= c.npart_l), N1(c.bo_s[s1.SBMAX_s - 1] <= c.npart_s), o.ATHtype != -1) {
      var l1, b1 = o.out_samplerate / s1.BLKSIZE, D1 = 0;
      for (l1 = 0, S = 0; S < s1.BLKSIZE / 2; ++S)
        l1 += b1, c.ATH.eql_w[S] = 1 / Math.pow(10, this.ATHformula(l1, o) / 10), D1 += c.ATH.eql_w[S];
      for (D1 = 1 / D1, S = s1.BLKSIZE / 2; --S >= 0; )
        c.ATH.eql_w[S] *= D1;
    }
    {
      for (var V1 = J = 0; V1 < c.npart_s; ++V1)
        for (S = 0; S < c.numlines_s[V1]; ++S)
          ++J;
      for (var V1 = J = 0; V1 < c.npart_l; ++V1)
        for (S = 0; S < c.numlines_l[V1]; ++S)
          ++J;
    }
    for (J = 0, S = 0; S < c.npart_l; S++) {
      var l1 = x1 * (J + c.numlines_l[S] / 2) / (1 * s1.BLKSIZE);
      c.mld_cb_l[S] = Y1(l1), J += c.numlines_l[S];
    }
    for (; S < s1.CBANDS; ++S)
      c.mld_cb_l[S] = 1;
    for (J = 0, S = 0; S < c.npart_s; S++) {
      var l1 = x1 * (J + c.numlines_s[S] / 2) / (1 * s1.BLKSIZE_s);
      c.mld_cb_s[S] = Y1(l1), J += c.numlines_s[S];
    }
    for (; S < s1.CBANDS; ++S)
      c.mld_cb_s[S] = 1;
    return 0;
  };
  function Q1(o, c) {
    o < -0.3 && (o = 3410), o /= 1e3, o = Math.max(0.1, o);
    var S = 3.64 * Math.pow(o, -0.8) - 6.8 * Math.exp(-0.6 * Math.pow(o - 3.4, 2)) + 6 * Math.exp(-0.15 * Math.pow(o - 8.7, 2)) + (0.6 + 0.04 * c) * 1e-3 * Math.pow(o, 4);
    return S;
  }
  this.ATHformula = function(o, c) {
    var S;
    switch (c.ATHtype) {
      case 0:
        S = Q1(o, 9);
        break;
      case 1:
        S = Q1(o, -1);
        break;
      case 2:
        S = Q1(o, 0);
        break;
      case 3:
        S = Q1(o, 1) + 6;
        break;
      case 4:
        S = Q1(o, c.ATHcurve);
        break;
      default:
        S = Q1(o, 0);
        break;
    }
    return S;
  };
}
var Ds = Ls, Ns = nt;
function Xs() {
  this.class_id = 0, this.num_samples = 0, this.num_channels = 0, this.in_samplerate = 0, this.out_samplerate = 0, this.scale = 0, this.scale_left = 0, this.scale_right = 0, this.analysis = !1, this.bWriteVbrTag = !1, this.decode_only = !1, this.quality = 0, this.mode = Ns.STEREO, this.force_ms = !1, this.free_format = !1, this.findReplayGain = !1, this.decode_on_the_fly = !1, this.write_id3tag_automatic = !1, this.brate = 0, this.compression_ratio = 0, this.copyright = 0, this.original = 0, this.extension = 0, this.emphasis = 0, this.error_protection = 0, this.strict_ISO = !1, this.disable_reservoir = !1, this.quant_comp = 0, this.quant_comp_short = 0, this.experimentalY = !1, this.experimentalZ = 0, this.exp_nspsytune = 0, this.preset = 0, this.VBR = null, this.VBR_q_frac = 0, this.VBR_q = 0, this.VBR_mean_bitrate_kbps = 0, this.VBR_min_bitrate_kbps = 0, this.VBR_max_bitrate_kbps = 0, this.VBR_hard_min = 0, this.lowpassfreq = 0, this.highpassfreq = 0, this.lowpasswidth = 0, this.highpasswidth = 0, this.maskingadjust = 0, this.maskingadjust_short = 0, this.ATHonly = !1, this.ATHshort = !1, this.noATH = !1, this.ATHtype = 0, this.ATHcurve = 0, this.ATHlower = 0, this.athaa_type = 0, this.athaa_loudapprox = 0, this.athaa_sensitivity = 0, this.short_blocks = null, this.useTemporal = !1, this.interChRatio = 0, this.msfix = 0, this.tune = !1, this.tune_value_a = 0, this.version = 0, this.encoder_delay = 0, this.encoder_padding = 0, this.framesize = 0, this.frameNum = 0, this.lame_allocated_gfp = 0, this.internal_flags = null;
}
var Os = Xs, Hs = se(), Ca = {};
Ca.SFBMAX = Hs.SBMAX_s * 3;
var bt = Ca, Ya = G1, Cs = Ya.new_float, Xe = Ya.new_int, Vt = bt;
function Ys() {
  this.xr = Cs(576), this.l3_enc = Xe(576), this.scalefac = Xe(Vt.SFBMAX), this.xrpow_max = 0, this.part2_3_length = 0, this.big_values = 0, this.count1 = 0, this.global_gain = 0, this.scalefac_compress = 0, this.block_type = 0, this.mixed_block_flag = 0, this.table_select = Xe(3), this.subblock_gain = Xe(4), this.region0_count = 0, this.region1_count = 0, this.preflag = 0, this.scalefac_scale = 0, this.count1table_select = 0, this.part2_length = 0, this.sfb_lmax = 0, this.sfb_smin = 0, this.psy_lmax = 0, this.sfbmax = 0, this.psymax = 0, this.sfbdivide = 0, this.width = Xe(Vt.SFBMAX), this.window = Xe(Vt.SFBMAX), this.count1bits = 0, this.sfb_partition_table = null, this.slen = Xe(4), this.max_nonzero_coeff = 0;
  var p = this;
  function E(j) {
    return new Int32Array(j);
  }
  function A(j) {
    return new Float32Array(j);
  }
  this.assign = function(j) {
    p.xr = A(j.xr), p.l3_enc = E(j.l3_enc), p.scalefac = E(j.scalefac), p.xrpow_max = j.xrpow_max, p.part2_3_length = j.part2_3_length, p.big_values = j.big_values, p.count1 = j.count1, p.global_gain = j.global_gain, p.scalefac_compress = j.scalefac_compress, p.block_type = j.block_type, p.mixed_block_flag = j.mixed_block_flag, p.table_select = E(j.table_select), p.subblock_gain = E(j.subblock_gain), p.region0_count = j.region0_count, p.region1_count = j.region1_count, p.preflag = j.preflag, p.scalefac_scale = j.scalefac_scale, p.count1table_select = j.count1table_select, p.part2_length = j.part2_length, p.sfb_lmax = j.sfb_lmax, p.sfb_smin = j.sfb_smin, p.psy_lmax = j.psy_lmax, p.sfbmax = j.sfbmax, p.psymax = j.psymax, p.sfbdivide = j.sfbdivide, p.width = E(j.width), p.window = E(j.window), p.count1bits = j.count1bits, p.sfb_partition_table = j.sfb_partition_table.slice(0), p.slen = E(j.slen), p.max_nonzero_coeff = j.max_nonzero_coeff;
  };
}
var Ft = Ys, Fs = G1, _a = Fs.new_int, js = Ft;
function qs() {
  this.tt = [[null, null], [null, null]], this.main_data_begin = 0, this.private_bits = 0, this.resvDrain_pre = 0, this.resvDrain_post = 0, this.scfsi = [_a(4), _a(4)];
  for (var p = 0; p < 2; p++)
    for (var E = 0; E < 2; E++)
      this.tt[p][E] = new js();
}
var zs = qs, Fa = G1, ot = Fa.System, lt = Fa.new_int, ft = se();
function Zs(p, E, A, j) {
  this.l = lt(1 + ft.SBMAX_l), this.s = lt(1 + ft.SBMAX_s), this.psfb21 = lt(1 + ft.PSFB21), this.psfb12 = lt(1 + ft.PSFB12);
  var K = this.l, D = this.s;
  arguments.length == 4 && (this.arrL = arguments[0], this.arrS = arguments[1], this.arr21 = arguments[2], this.arr12 = arguments[3], ot.arraycopy(this.arrL, 0, K, 0, Math.min(this.arrL.length, this.l.length)), ot.arraycopy(this.arrS, 0, D, 0, Math.min(this.arrS.length, this.s.length)), ot.arraycopy(this.arr21, 0, this.psfb21, 0, Math.min(this.arr21.length, this.psfb21.length)), ot.arraycopy(this.arr12, 0, this.psfb12, 0, Math.min(this.arr12.length, this.psfb12.length)));
}
var ja = Zs, jt = G1, It = jt.new_float, Gs = jt.new_float_n, Qs = jt.new_int, oa = se();
function Us() {
  this.last_en_subshort = Gs([4, 9]), this.lastAttacks = Qs(4), this.pefirbuf = It(19), this.longfact = It(oa.SBMAX_l), this.shortfact = It(oa.SBMAX_s), this.attackthre = 0, this.attackthre_s = 0;
}
var Ws = Us;
function Ks() {
  this.sum = 0, this.seen = 0, this.want = 0, this.pos = 0, this.size = 0, this.bag = null, this.nVbrNumFrames = 0, this.nBytesWritten = 0, this.TotalFrameSize = 0;
}
var Js = Ks, Ge = G1, $s = Ge.new_byte, e0 = Ge.new_double, be = Ge.new_float, Oe = Ge.new_float_n, we = Ge.new_int, ct = Ge.new_int_n, t0 = zs, a0 = ja, s0 = Ws, r0 = Js, la = Oa(), U1 = se(), n0 = bt;
ye.MFSIZE = 3 * 1152 + U1.ENCDELAY - U1.MDCTDELAY;
ye.MAX_HEADER_BUF = 256;
ye.MAX_BITS_PER_CHANNEL = 4095;
ye.MAX_BITS_PER_GRANULE = 7680;
ye.BPC = 320;
function ye() {
  var p = 40;
  this.Class_ID = 0, this.lame_encode_frame_init = 0, this.iteration_init_init = 0, this.fill_buffer_resample_init = 0, this.mfbuf = Oe([2, ye.MFSIZE]), this.mode_gr = 0, this.channels_in = 0, this.channels_out = 0, this.resample_ratio = 0, this.mf_samples_to_encode = 0, this.mf_size = 0, this.VBR_min_bitrate = 0, this.VBR_max_bitrate = 0, this.bitrate_index = 0, this.samplerate_index = 0, this.mode_ext = 0, this.lowpass1 = 0, this.lowpass2 = 0, this.highpass1 = 0, this.highpass2 = 0, this.noise_shaping = 0, this.noise_shaping_amp = 0, this.substep_shaping = 0, this.psymodel = 0, this.noise_shaping_stop = 0, this.subblock_gain = 0, this.use_best_huffman = 0, this.full_outer_loop = 0, this.l3_side = new t0(), this.ms_ratio = be(2), this.padding = 0, this.frac_SpF = 0, this.slot_lag = 0, this.tag_spec = null, this.nMusicCRC = 0, this.OldValue = we(2), this.CurrentStep = we(2), this.masking_lower = 0, this.bv_scf = we(576), this.pseudohalf = we(n0.SFBMAX), this.sfb21_extra = !1, this.inbuf_old = new Array(2), this.blackfilt = new Array(2 * ye.BPC + 1), this.itime = e0(2), this.sideinfo_len = 0, this.sb_sample = Oe([2, 2, 18, U1.SBLIMIT]), this.amp_filter = be(32);
  function E() {
    this.write_timing = 0, this.ptr = 0, this.buf = $s(p);
  }
  this.header = new Array(ye.MAX_HEADER_BUF), this.h_ptr = 0, this.w_ptr = 0, this.ancillary_flag = 0, this.ResvSize = 0, this.ResvMax = 0, this.scalefac_band = new a0(), this.minval_l = be(U1.CBANDS), this.minval_s = be(U1.CBANDS), this.nb_1 = Oe([4, U1.CBANDS]), this.nb_2 = Oe([4, U1.CBANDS]), this.nb_s1 = Oe([4, U1.CBANDS]), this.nb_s2 = Oe([4, U1.CBANDS]), this.s3_ss = null, this.s3_ll = null, this.decay = 0, this.thm = new Array(4), this.en = new Array(4), this.tot_ener = be(4), this.loudness_sq = Oe([2, 2]), this.loudness_sq_save = be(2), this.mld_l = be(U1.SBMAX_l), this.mld_s = be(U1.SBMAX_s), this.bm_l = we(U1.SBMAX_l), this.bo_l = we(U1.SBMAX_l), this.bm_s = we(U1.SBMAX_s), this.bo_s = we(U1.SBMAX_s), this.npart_l = 0, this.npart_s = 0, this.s3ind = ct([U1.CBANDS, 2]), this.s3ind_s = ct([U1.CBANDS, 2]), this.numlines_s = we(U1.CBANDS), this.numlines_l = we(U1.CBANDS), this.rnumlines_l = be(U1.CBANDS), this.mld_cb_l = be(U1.CBANDS), this.mld_cb_s = be(U1.CBANDS), this.numlines_s_num1 = 0, this.numlines_l_num1 = 0, this.pe = be(4), this.ms_ratio_s_old = 0, this.ms_ratio_l_old = 0, this.ms_ener_ratio_old = 0, this.blocktype_old = we(2), this.nsPsy = new s0(), this.VBR_seek_table = new r0(), this.ATH = null, this.PSY = null, this.nogap_total = 0, this.nogap_current = 0, this.decode_on_the_fly = !0, this.findReplayGain = !0, this.findPeakSample = !0, this.PeakSample = 0, this.RadioGain = 0, this.AudiophileGain = 0, this.rgdata = null, this.noclipGainChange = 0, this.noclipScale = 0, this.bitrate_stereoMode_Hist = ct([16, 5]), this.bitrate_blockType_Hist = ct([16, 6]), this.pinfo = null, this.hip = null, this.in_buffer_nsamples = 0, this.in_buffer_0 = null, this.in_buffer_1 = null, this.iteration_loop = null;
  for (var A = 0; A < this.en.length; A++)
    this.en[A] = new la();
  for (var A = 0; A < this.thm.length; A++)
    this.thm[A] = new la();
  for (var A = 0; A < this.header.length; A++)
    this.header[A] = new E();
}
var dt = ye, i0 = G1, He = i0.new_float, Ce = se();
function _0() {
  this.useAdjust = 0, this.aaSensitivityP = 0, this.adjust = 0, this.adjustLimit = 0, this.decay = 0, this.floor = 0, this.l = He(Ce.SBMAX_l), this.s = He(Ce.SBMAX_s), this.psfb21 = He(Ce.PSFB21), this.psfb12 = He(Ce.PSFB12), this.cb_l = He(Ce.CBANDS), this.cb_s = He(Ce.CBANDS), this.eql_w = He(Ce.BLKSIZE / 2);
}
var o0 = _0, qa = G1, oe = qa.System, fa = qa.Arrays;
W1.STEPS_per_dB = 100;
W1.MAX_dB = 120;
W1.GAIN_NOT_ENOUGH_SAMPLES = -24601;
W1.GAIN_ANALYSIS_ERROR = 0;
W1.GAIN_ANALYSIS_OK = 1;
W1.INIT_GAIN_ANALYSIS_ERROR = 0;
W1.INIT_GAIN_ANALYSIS_OK = 1;
W1.YULE_ORDER = 10;
W1.MAX_ORDER = W1.YULE_ORDER;
W1.MAX_SAMP_FREQ = 48e3;
W1.RMS_WINDOW_TIME_NUMERATOR = 1;
W1.RMS_WINDOW_TIME_DENOMINATOR = 20;
W1.MAX_SAMPLES_PER_WINDOW = W1.MAX_SAMP_FREQ * W1.RMS_WINDOW_TIME_NUMERATOR / W1.RMS_WINDOW_TIME_DENOMINATOR + 1;
function W1() {
  var p = 64.82, E = 0.95, A = W1.RMS_WINDOW_TIME_NUMERATOR, j = W1.RMS_WINDOW_TIME_DENOMINATOR, K = [
    [
      0.038575994352,
      -3.84664617118067,
      -0.02160367184185,
      7.81501653005538,
      -0.00123395316851,
      -11.34170355132042,
      -9291677959e-14,
      13.05504219327545,
      -0.01655260341619,
      -12.28759895145294,
      0.02161526843274,
      9.4829380631979,
      -0.02074045215285,
      -5.87257861775999,
      0.00594298065125,
      2.75465861874613,
      0.00306428023191,
      -0.86984376593551,
      12025322027e-14,
      0.13919314567432,
      0.00288463683916
    ],
    [
      0.0541865640643,
      -3.47845948550071,
      -0.02911007808948,
      6.36317777566148,
      -0.00848709379851,
      -8.54751527471874,
      -0.00851165645469,
      9.4769360780128,
      -0.00834990904936,
      -8.81498681370155,
      0.02245293253339,
      6.85401540936998,
      -0.02596338512915,
      -4.39470996079559,
      0.01624864962975,
      2.19611684890774,
      -0.00240879051584,
      -0.75104302451432,
      0.00674613682247,
      0.13149317958808,
      -0.00187763777362
    ],
    [
      0.15457299681924,
      -2.37898834973084,
      -0.09331049056315,
      2.84868151156327,
      -0.06247880153653,
      -2.64577170229825,
      0.02163541888798,
      2.23697657451713,
      -0.05588393329856,
      -1.67148153367602,
      0.04781476674921,
      1.00595954808547,
      0.00222312597743,
      -0.45953458054983,
      0.03174092540049,
      0.16378164858596,
      -0.01390589421898,
      -0.05032077717131,
      0.00651420667831,
      0.0234789740702,
      -0.00881362733839
    ],
    [
      0.30296907319327,
      -1.61273165137247,
      -0.22613988682123,
      1.0797749225997,
      -0.08587323730772,
      -0.2565625775407,
      0.03282930172664,
      -0.1627671912044,
      -0.00915702933434,
      -0.22638893773906,
      -0.02364141202522,
      0.39120800788284,
      -0.00584456039913,
      -0.22138138954925,
      0.06276101321749,
      0.04500235387352,
      -828086748e-14,
      0.02005851806501,
      0.00205861885564,
      0.00302439095741,
      -0.02950134983287
    ],
    [
      0.33642304856132,
      -1.49858979367799,
      -0.2557224142557,
      0.87350271418188,
      -0.11828570177555,
      0.12205022308084,
      0.11921148675203,
      -0.80774944671438,
      -0.07834489609479,
      0.47854794562326,
      -0.0046997791438,
      -0.12453458140019,
      -0.0058950022444,
      -0.04067510197014,
      0.05724228140351,
      0.08333755284107,
      0.00832043980773,
      -0.04237348025746,
      -0.0163538138454,
      0.02977207319925,
      -0.0176017656815
    ],
    [
      0.4491525660845,
      -0.62820619233671,
      -0.14351757464547,
      0.29661783706366,
      -0.22784394429749,
      -0.372563729424,
      -0.01419140100551,
      0.00213767857124,
      0.04078262797139,
      -0.42029820170918,
      -0.12398163381748,
      0.22199650564824,
      0.04097565135648,
      0.00613424350682,
      0.10478503600251,
      0.06747620744683,
      -0.01863887810927,
      0.05784820375801,
      -0.03193428438915,
      0.03222754072173,
      0.00541907748707
    ],
    [
      0.56619470757641,
      -1.04800335126349,
      -0.75464456939302,
      0.29156311971249,
      0.1624213774223,
      -0.26806001042947,
      0.16744243493672,
      0.00819999645858,
      -0.18901604199609,
      0.45054734505008,
      0.3093178284183,
      -0.33032403314006,
      -0.27562961986224,
      0.0673936833311,
      0.00647310677246,
      -0.04784254229033,
      0.08647503780351,
      0.01639907836189,
      -0.0378898455484,
      0.01807364323573,
      -0.00588215443421
    ],
    [
      0.58100494960553,
      -0.51035327095184,
      -0.53174909058578,
      -0.31863563325245,
      -0.14289799034253,
      -0.20256413484477,
      0.17520704835522,
      0.1472815413433,
      0.02377945217615,
      0.38952639978999,
      0.15558449135573,
      -0.23313271880868,
      -0.25344790059353,
      -0.05246019024463,
      0.01628462406333,
      -0.02505961724053,
      0.06920467763959,
      0.02442357316099,
      -0.03721611395801,
      0.01818801111503,
      -0.00749618797172
    ],
    [
      0.53648789255105,
      -0.2504987195602,
      -0.42163034350696,
      -0.43193942311114,
      -0.00275953611929,
      -0.03424681017675,
      0.04267842219415,
      -0.04678328784242,
      -0.10214864179676,
      0.26408300200955,
      0.14590772289388,
      0.15113130533216,
      -0.02459864859345,
      -0.17556493366449,
      -0.11202315195388,
      -0.18823009262115,
      -0.04060034127,
      0.05477720428674,
      0.0478866554818,
      0.0470440968812,
      -0.02217936801134
    ]
  ], D = [
    [
      0.98621192462708,
      -1.97223372919527,
      -1.97242384925416,
      0.97261396931306,
      0.98621192462708
    ],
    [
      0.98500175787242,
      -1.96977855582618,
      -1.97000351574484,
      0.9702284756635,
      0.98500175787242
    ],
    [
      0.97938932735214,
      -1.95835380975398,
      -1.95877865470428,
      0.95920349965459,
      0.97938932735214
    ],
    [
      0.97531843204928,
      -1.95002759149878,
      -1.95063686409857,
      0.95124613669835,
      0.97531843204928
    ],
    [
      0.97316523498161,
      -1.94561023566527,
      -1.94633046996323,
      0.94705070426118,
      0.97316523498161
    ],
    [
      0.96454515552826,
      -1.92783286977036,
      -1.92909031105652,
      0.93034775234268,
      0.96454515552826
    ],
    [
      0.96009142950541,
      -1.91858953033784,
      -1.92018285901082,
      0.92177618768381,
      0.96009142950541
    ],
    [
      0.95856916599601,
      -1.9154210807478,
      -1.91713833199203,
      0.91885558323625,
      0.95856916599601
    ],
    [
      0.94597685600279,
      -1.88903307939452,
      -1.89195371200558,
      0.89487434461664,
      0.94597685600279
    ]
  ];
  function Z(m, N, n1, U, r1, W) {
    for (; r1-- != 0; )
      n1[U] = 1e-10 + m[N + 0] * W[0] - n1[U - 1] * W[1] + m[N - 1] * W[2] - n1[U - 2] * W[3] + m[N - 2] * W[4] - n1[U - 3] * W[5] + m[N - 3] * W[6] - n1[U - 4] * W[7] + m[N - 4] * W[8] - n1[U - 5] * W[9] + m[N - 5] * W[10] - n1[U - 6] * W[11] + m[N - 6] * W[12] - n1[U - 7] * W[13] + m[N - 7] * W[14] - n1[U - 8] * W[15] + m[N - 8] * W[16] - n1[U - 9] * W[17] + m[N - 9] * W[18] - n1[U - 10] * W[19] + m[N - 10] * W[20], ++U, ++N;
  }
  function Y(m, N, n1, U, r1, W) {
    for (; r1-- != 0; )
      n1[U] = m[N + 0] * W[0] - n1[U - 1] * W[1] + m[N - 1] * W[2] - n1[U - 2] * W[3] + m[N - 2] * W[4], ++U, ++N;
  }
  function $(m, N) {
    for (var n1 = 0; n1 < MAX_ORDER; n1++)
      m.linprebuf[n1] = m.lstepbuf[n1] = m.loutbuf[n1] = m.rinprebuf[n1] = m.rstepbuf[n1] = m.routbuf[n1] = 0;
    switch (0 | N) {
      case 48e3:
        m.reqindex = 0;
        break;
      case 44100:
        m.reqindex = 1;
        break;
      case 32e3:
        m.reqindex = 2;
        break;
      case 24e3:
        m.reqindex = 3;
        break;
      case 22050:
        m.reqindex = 4;
        break;
      case 16e3:
        m.reqindex = 5;
        break;
      case 12e3:
        m.reqindex = 6;
        break;
      case 11025:
        m.reqindex = 7;
        break;
      case 8e3:
        m.reqindex = 8;
        break;
      default:
        return INIT_GAIN_ANALYSIS_ERROR;
    }
    return m.sampleWindow = 0 | (N * A + j - 1) / j, m.lsum = 0, m.rsum = 0, m.totsamp = 0, fa.ill(m.A, 0), INIT_GAIN_ANALYSIS_OK;
  }
  this.InitGainAnalysis = function(m, N) {
    return $(m, N) != INIT_GAIN_ANALYSIS_OK ? INIT_GAIN_ANALYSIS_ERROR : (m.linpre = MAX_ORDER, m.rinpre = MAX_ORDER, m.lstep = MAX_ORDER, m.rstep = MAX_ORDER, m.lout = MAX_ORDER, m.rout = MAX_ORDER, fa.fill(m.B, 0), INIT_GAIN_ANALYSIS_OK);
  };
  function u1(m) {
    return m * m;
  }
  this.AnalyzeSamples = function(m, N, n1, U, r1, W, M) {
    var f, h, w, e, l, R, P;
    if (W == 0)
      return GAIN_ANALYSIS_OK;
    switch (P = 0, l = W, M) {
      case 1:
        U = N, r1 = n1;
        break;
      case 2:
        break;
      default:
        return GAIN_ANALYSIS_ERROR;
    }
    for (W < MAX_ORDER ? (oe.arraycopy(
      N,
      n1,
      m.linprebuf,
      MAX_ORDER,
      W
    ), oe.arraycopy(
      U,
      r1,
      m.rinprebuf,
      MAX_ORDER,
      W
    )) : (oe.arraycopy(
      N,
      n1,
      m.linprebuf,
      MAX_ORDER,
      MAX_ORDER
    ), oe.arraycopy(
      U,
      r1,
      m.rinprebuf,
      MAX_ORDER,
      MAX_ORDER
    )); l > 0; ) {
      R = l > m.sampleWindow - m.totsamp ? m.sampleWindow - m.totsamp : l, P < MAX_ORDER ? (f = m.linpre + P, h = m.linprebuf, w = m.rinpre + P, e = m.rinprebuf, R > MAX_ORDER - P && (R = MAX_ORDER - P)) : (f = n1 + P, h = N, w = r1 + P, e = U), Z(h, f, m.lstepbuf, m.lstep + m.totsamp, R, K[m.reqindex]), Z(e, w, m.rstepbuf, m.rstep + m.totsamp, R, K[m.reqindex]), Y(
        m.lstepbuf,
        m.lstep + m.totsamp,
        m.loutbuf,
        m.lout + m.totsamp,
        R,
        D[m.reqindex]
      ), Y(
        m.rstepbuf,
        m.rstep + m.totsamp,
        m.routbuf,
        m.rout + m.totsamp,
        R,
        D[m.reqindex]
      ), f = m.lout + m.totsamp, h = m.loutbuf, w = m.rout + m.totsamp, e = m.routbuf;
      for (var O = R % 8; O-- != 0; )
        m.lsum += u1(h[f++]), m.rsum += u1(e[w++]);
      for (O = R / 8; O-- != 0; )
        m.lsum += u1(h[f + 0]) + u1(h[f + 1]) + u1(h[f + 2]) + u1(h[f + 3]) + u1(h[f + 4]) + u1(h[f + 5]) + u1(h[f + 6]) + u1(h[f + 7]), f += 8, m.rsum += u1(e[w + 0]) + u1(e[w + 1]) + u1(e[w + 2]) + u1(e[w + 3]) + u1(e[w + 4]) + u1(e[w + 5]) + u1(e[w + 6]) + u1(e[w + 7]), w += 8;
      if (l -= R, P += R, m.totsamp += R, m.totsamp == m.sampleWindow) {
        var y = W1.STEPS_per_dB * 10 * Math.log10((m.lsum + m.rsum) / m.totsamp * 0.5 + 1e-37), x = y <= 0 ? 0 : 0 | y;
        x >= m.A.length && (x = m.A.length - 1), m.A[x]++, m.lsum = m.rsum = 0, oe.arraycopy(
          m.loutbuf,
          m.totsamp,
          m.loutbuf,
          0,
          MAX_ORDER
        ), oe.arraycopy(
          m.routbuf,
          m.totsamp,
          m.routbuf,
          0,
          MAX_ORDER
        ), oe.arraycopy(
          m.lstepbuf,
          m.totsamp,
          m.lstepbuf,
          0,
          MAX_ORDER
        ), oe.arraycopy(
          m.rstepbuf,
          m.totsamp,
          m.rstepbuf,
          0,
          MAX_ORDER
        ), m.totsamp = 0;
      }
      if (m.totsamp > m.sampleWindow)
        return GAIN_ANALYSIS_ERROR;
    }
    return W < MAX_ORDER ? (oe.arraycopy(
      m.linprebuf,
      W,
      m.linprebuf,
      0,
      MAX_ORDER - W
    ), oe.arraycopy(
      m.rinprebuf,
      W,
      m.rinprebuf,
      0,
      MAX_ORDER - W
    ), oe.arraycopy(
      N,
      n1,
      m.linprebuf,
      MAX_ORDER - W,
      W
    ), oe.arraycopy(
      U,
      r1,
      m.rinprebuf,
      MAX_ORDER - W,
      W
    )) : (oe.arraycopy(N, n1 + W - MAX_ORDER, m.linprebuf, 0, MAX_ORDER), oe.arraycopy(U, r1 + W - MAX_ORDER, m.rinprebuf, 0, MAX_ORDER)), GAIN_ANALYSIS_OK;
  };
  function g(m, N) {
    var n1, U = 0;
    for (n1 = 0; n1 < N; n1++)
      U += m[n1];
    if (U == 0)
      return GAIN_NOT_ENOUGH_SAMPLES;
    var r1 = 0 | Math.ceil(U * (1 - E));
    for (n1 = N; n1-- > 0 && !((r1 -= m[n1]) <= 0); )
      ;
    return p - n1 / W1.STEPS_per_dB;
  }
  this.GetTitleGain = function(m) {
    for (var N = g(m.A, m.A.length), n1 = 0; n1 < m.A.length; n1++)
      m.B[n1] += m.A[n1], m.A[n1] = 0;
    for (var n1 = 0; n1 < MAX_ORDER; n1++)
      m.linprebuf[n1] = m.lstepbuf[n1] = m.loutbuf[n1] = m.rinprebuf[n1] = m.rstepbuf[n1] = m.routbuf[n1] = 0;
    return m.totsamp = 0, m.lsum = m.rsum = 0, N;
  };
}
var za = W1, Za = G1, ze = Za.new_float, ca = Za.new_int, le = za;
function l0() {
  this.linprebuf = ze(le.MAX_ORDER * 2), this.linpre = 0, this.lstepbuf = ze(le.MAX_SAMPLES_PER_WINDOW + le.MAX_ORDER), this.lstep = 0, this.loutbuf = ze(le.MAX_SAMPLES_PER_WINDOW + le.MAX_ORDER), this.lout = 0, this.rinprebuf = ze(le.MAX_ORDER * 2), this.rinpre = 0, this.rstepbuf = ze(le.MAX_SAMPLES_PER_WINDOW + le.MAX_ORDER), this.rstep = 0, this.routbuf = ze(le.MAX_SAMPLES_PER_WINDOW + le.MAX_ORDER), this.rout = 0, this.sampleWindow = 0, this.totsamp = 0, this.lsum = 0, this.rsum = 0, this.freqindex = 0, this.first = 0, this.A = ca(0 | le.STEPS_per_dB * le.MAX_dB), this.B = ca(0 | le.STEPS_per_dB * le.MAX_dB);
}
var f0 = l0;
function c0(p) {
  this.bits = p;
}
var Ga = c0, qt = G1, ha = qt.new_float, h0 = qt.new_int, ua = qt.assert, u0 = Ga, pa = se(), p0 = bt, m0 = dt;
function b0(p) {
  var E = p;
  this.quantize = E, this.iteration_loop = function(A, j, K, D) {
    var Z = A.internal_flags, Y = ha(p0.SFBMAX), $ = ha(576), u1 = h0(2), g = 0, m, N = Z.l3_side, n1 = new u0(g);
    this.quantize.rv.ResvFrameBegin(A, n1), g = n1.bits;
    for (var U = 0; U < Z.mode_gr; U++) {
      m = this.quantize.qupvt.on_pe(
        A,
        j,
        u1,
        g,
        U,
        U
      ), Z.mode_ext == pa.MPG_MD_MS_LR && (this.quantize.ms_convert(Z.l3_side, U), this.quantize.qupvt.reduce_side(
        u1,
        K[U],
        g,
        m
      ));
      for (var r1 = 0; r1 < Z.channels_out; r1++) {
        var W, M, f = N.tt[U][r1];
        f.block_type != pa.SHORT_TYPE ? (W = 0, M = Z.PSY.mask_adjust - W) : (W = 0, M = Z.PSY.mask_adjust_short - W), Z.masking_lower = Math.pow(
          10,
          M * 0.1
        ), this.quantize.init_outer_loop(Z, f), this.quantize.init_xrpow(Z, f, $) && (this.quantize.qupvt.calc_xmin(
          A,
          D[U][r1],
          f,
          Y
        ), this.quantize.outer_loop(
          A,
          f,
          Y,
          $,
          r1,
          u1[r1]
        )), this.quantize.iteration_finish_one(Z, U, r1), ua(f.part2_3_length <= m0.MAX_BITS_PER_CHANNEL), ua(f.part2_3_length <= u1[r1]);
      }
    }
    this.quantize.rv.ResvFrameEnd(Z, g);
  };
}
var d0 = b0;
function H1(p, E, A, j) {
  this.xlen = p, this.linmax = E, this.table = A, this.hlen = j;
}
var c1 = {};
c1.t1HB = [
  1,
  1,
  1,
  0
];
c1.t2HB = [
  1,
  2,
  1,
  3,
  1,
  1,
  3,
  2,
  0
];
c1.t3HB = [
  3,
  2,
  1,
  1,
  1,
  1,
  3,
  2,
  0
];
c1.t5HB = [
  1,
  2,
  6,
  5,
  3,
  1,
  4,
  4,
  7,
  5,
  7,
  1,
  6,
  1,
  1,
  0
];
c1.t6HB = [
  7,
  3,
  5,
  1,
  6,
  2,
  3,
  2,
  5,
  4,
  4,
  1,
  3,
  3,
  2,
  0
];
c1.t7HB = [
  1,
  2,
  10,
  19,
  16,
  10,
  3,
  3,
  7,
  10,
  5,
  3,
  11,
  4,
  13,
  17,
  8,
  4,
  12,
  11,
  18,
  15,
  11,
  2,
  7,
  6,
  9,
  14,
  3,
  1,
  6,
  4,
  5,
  3,
  2,
  0
];
c1.t8HB = [
  3,
  4,
  6,
  18,
  12,
  5,
  5,
  1,
  2,
  16,
  9,
  3,
  7,
  3,
  5,
  14,
  7,
  3,
  19,
  17,
  15,
  13,
  10,
  4,
  13,
  5,
  8,
  11,
  5,
  1,
  12,
  4,
  4,
  1,
  1,
  0
];
c1.t9HB = [
  7,
  5,
  9,
  14,
  15,
  7,
  6,
  4,
  5,
  5,
  6,
  7,
  7,
  6,
  8,
  8,
  8,
  5,
  15,
  6,
  9,
  10,
  5,
  1,
  11,
  7,
  9,
  6,
  4,
  1,
  14,
  4,
  6,
  2,
  6,
  0
];
c1.t10HB = [
  1,
  2,
  10,
  23,
  35,
  30,
  12,
  17,
  3,
  3,
  8,
  12,
  18,
  21,
  12,
  7,
  11,
  9,
  15,
  21,
  32,
  40,
  19,
  6,
  14,
  13,
  22,
  34,
  46,
  23,
  18,
  7,
  20,
  19,
  33,
  47,
  27,
  22,
  9,
  3,
  31,
  22,
  41,
  26,
  21,
  20,
  5,
  3,
  14,
  13,
  10,
  11,
  16,
  6,
  5,
  1,
  9,
  8,
  7,
  8,
  4,
  4,
  2,
  0
];
c1.t11HB = [
  3,
  4,
  10,
  24,
  34,
  33,
  21,
  15,
  5,
  3,
  4,
  10,
  32,
  17,
  11,
  10,
  11,
  7,
  13,
  18,
  30,
  31,
  20,
  5,
  25,
  11,
  19,
  59,
  27,
  18,
  12,
  5,
  35,
  33,
  31,
  58,
  30,
  16,
  7,
  5,
  28,
  26,
  32,
  19,
  17,
  15,
  8,
  14,
  14,
  12,
  9,
  13,
  14,
  9,
  4,
  1,
  11,
  4,
  6,
  6,
  6,
  3,
  2,
  0
];
c1.t12HB = [
  9,
  6,
  16,
  33,
  41,
  39,
  38,
  26,
  7,
  5,
  6,
  9,
  23,
  16,
  26,
  11,
  17,
  7,
  11,
  14,
  21,
  30,
  10,
  7,
  17,
  10,
  15,
  12,
  18,
  28,
  14,
  5,
  32,
  13,
  22,
  19,
  18,
  16,
  9,
  5,
  40,
  17,
  31,
  29,
  17,
  13,
  4,
  2,
  27,
  12,
  11,
  15,
  10,
  7,
  4,
  1,
  27,
  12,
  8,
  12,
  6,
  3,
  1,
  0
];
c1.t13HB = [
  1,
  5,
  14,
  21,
  34,
  51,
  46,
  71,
  42,
  52,
  68,
  52,
  67,
  44,
  43,
  19,
  3,
  4,
  12,
  19,
  31,
  26,
  44,
  33,
  31,
  24,
  32,
  24,
  31,
  35,
  22,
  14,
  15,
  13,
  23,
  36,
  59,
  49,
  77,
  65,
  29,
  40,
  30,
  40,
  27,
  33,
  42,
  16,
  22,
  20,
  37,
  61,
  56,
  79,
  73,
  64,
  43,
  76,
  56,
  37,
  26,
  31,
  25,
  14,
  35,
  16,
  60,
  57,
  97,
  75,
  114,
  91,
  54,
  73,
  55,
  41,
  48,
  53,
  23,
  24,
  58,
  27,
  50,
  96,
  76,
  70,
  93,
  84,
  77,
  58,
  79,
  29,
  74,
  49,
  41,
  17,
  47,
  45,
  78,
  74,
  115,
  94,
  90,
  79,
  69,
  83,
  71,
  50,
  59,
  38,
  36,
  15,
  72,
  34,
  56,
  95,
  92,
  85,
  91,
  90,
  86,
  73,
  77,
  65,
  51,
  44,
  43,
  42,
  43,
  20,
  30,
  44,
  55,
  78,
  72,
  87,
  78,
  61,
  46,
  54,
  37,
  30,
  20,
  16,
  53,
  25,
  41,
  37,
  44,
  59,
  54,
  81,
  66,
  76,
  57,
  54,
  37,
  18,
  39,
  11,
  35,
  33,
  31,
  57,
  42,
  82,
  72,
  80,
  47,
  58,
  55,
  21,
  22,
  26,
  38,
  22,
  53,
  25,
  23,
  38,
  70,
  60,
  51,
  36,
  55,
  26,
  34,
  23,
  27,
  14,
  9,
  7,
  34,
  32,
  28,
  39,
  49,
  75,
  30,
  52,
  48,
  40,
  52,
  28,
  18,
  17,
  9,
  5,
  45,
  21,
  34,
  64,
  56,
  50,
  49,
  45,
  31,
  19,
  12,
  15,
  10,
  7,
  6,
  3,
  48,
  23,
  20,
  39,
  36,
  35,
  53,
  21,
  16,
  23,
  13,
  10,
  6,
  1,
  4,
  2,
  16,
  15,
  17,
  27,
  25,
  20,
  29,
  11,
  17,
  12,
  16,
  8,
  1,
  1,
  0,
  1
];
c1.t15HB = [
  7,
  12,
  18,
  53,
  47,
  76,
  124,
  108,
  89,
  123,
  108,
  119,
  107,
  81,
  122,
  63,
  13,
  5,
  16,
  27,
  46,
  36,
  61,
  51,
  42,
  70,
  52,
  83,
  65,
  41,
  59,
  36,
  19,
  17,
  15,
  24,
  41,
  34,
  59,
  48,
  40,
  64,
  50,
  78,
  62,
  80,
  56,
  33,
  29,
  28,
  25,
  43,
  39,
  63,
  55,
  93,
  76,
  59,
  93,
  72,
  54,
  75,
  50,
  29,
  52,
  22,
  42,
  40,
  67,
  57,
  95,
  79,
  72,
  57,
  89,
  69,
  49,
  66,
  46,
  27,
  77,
  37,
  35,
  66,
  58,
  52,
  91,
  74,
  62,
  48,
  79,
  63,
  90,
  62,
  40,
  38,
  125,
  32,
  60,
  56,
  50,
  92,
  78,
  65,
  55,
  87,
  71,
  51,
  73,
  51,
  70,
  30,
  109,
  53,
  49,
  94,
  88,
  75,
  66,
  122,
  91,
  73,
  56,
  42,
  64,
  44,
  21,
  25,
  90,
  43,
  41,
  77,
  73,
  63,
  56,
  92,
  77,
  66,
  47,
  67,
  48,
  53,
  36,
  20,
  71,
  34,
  67,
  60,
  58,
  49,
  88,
  76,
  67,
  106,
  71,
  54,
  38,
  39,
  23,
  15,
  109,
  53,
  51,
  47,
  90,
  82,
  58,
  57,
  48,
  72,
  57,
  41,
  23,
  27,
  62,
  9,
  86,
  42,
  40,
  37,
  70,
  64,
  52,
  43,
  70,
  55,
  42,
  25,
  29,
  18,
  11,
  11,
  118,
  68,
  30,
  55,
  50,
  46,
  74,
  65,
  49,
  39,
  24,
  16,
  22,
  13,
  14,
  7,
  91,
  44,
  39,
  38,
  34,
  63,
  52,
  45,
  31,
  52,
  28,
  19,
  14,
  8,
  9,
  3,
  123,
  60,
  58,
  53,
  47,
  43,
  32,
  22,
  37,
  24,
  17,
  12,
  15,
  10,
  2,
  1,
  71,
  37,
  34,
  30,
  28,
  20,
  17,
  26,
  21,
  16,
  10,
  6,
  8,
  6,
  2,
  0
];
c1.t16HB = [
  1,
  5,
  14,
  44,
  74,
  63,
  110,
  93,
  172,
  149,
  138,
  242,
  225,
  195,
  376,
  17,
  3,
  4,
  12,
  20,
  35,
  62,
  53,
  47,
  83,
  75,
  68,
  119,
  201,
  107,
  207,
  9,
  15,
  13,
  23,
  38,
  67,
  58,
  103,
  90,
  161,
  72,
  127,
  117,
  110,
  209,
  206,
  16,
  45,
  21,
  39,
  69,
  64,
  114,
  99,
  87,
  158,
  140,
  252,
  212,
  199,
  387,
  365,
  26,
  75,
  36,
  68,
  65,
  115,
  101,
  179,
  164,
  155,
  264,
  246,
  226,
  395,
  382,
  362,
  9,
  66,
  30,
  59,
  56,
  102,
  185,
  173,
  265,
  142,
  253,
  232,
  400,
  388,
  378,
  445,
  16,
  111,
  54,
  52,
  100,
  184,
  178,
  160,
  133,
  257,
  244,
  228,
  217,
  385,
  366,
  715,
  10,
  98,
  48,
  91,
  88,
  165,
  157,
  148,
  261,
  248,
  407,
  397,
  372,
  380,
  889,
  884,
  8,
  85,
  84,
  81,
  159,
  156,
  143,
  260,
  249,
  427,
  401,
  392,
  383,
  727,
  713,
  708,
  7,
  154,
  76,
  73,
  141,
  131,
  256,
  245,
  426,
  406,
  394,
  384,
  735,
  359,
  710,
  352,
  11,
  139,
  129,
  67,
  125,
  247,
  233,
  229,
  219,
  393,
  743,
  737,
  720,
  885,
  882,
  439,
  4,
  243,
  120,
  118,
  115,
  227,
  223,
  396,
  746,
  742,
  736,
  721,
  712,
  706,
  223,
  436,
  6,
  202,
  224,
  222,
  218,
  216,
  389,
  386,
  381,
  364,
  888,
  443,
  707,
  440,
  437,
  1728,
  4,
  747,
  211,
  210,
  208,
  370,
  379,
  734,
  723,
  714,
  1735,
  883,
  877,
  876,
  3459,
  865,
  2,
  377,
  369,
  102,
  187,
  726,
  722,
  358,
  711,
  709,
  866,
  1734,
  871,
  3458,
  870,
  434,
  0,
  12,
  10,
  7,
  11,
  10,
  17,
  11,
  9,
  13,
  12,
  10,
  7,
  5,
  3,
  1,
  3
];
c1.t24HB = [
  15,
  13,
  46,
  80,
  146,
  262,
  248,
  434,
  426,
  669,
  653,
  649,
  621,
  517,
  1032,
  88,
  14,
  12,
  21,
  38,
  71,
  130,
  122,
  216,
  209,
  198,
  327,
  345,
  319,
  297,
  279,
  42,
  47,
  22,
  41,
  74,
  68,
  128,
  120,
  221,
  207,
  194,
  182,
  340,
  315,
  295,
  541,
  18,
  81,
  39,
  75,
  70,
  134,
  125,
  116,
  220,
  204,
  190,
  178,
  325,
  311,
  293,
  271,
  16,
  147,
  72,
  69,
  135,
  127,
  118,
  112,
  210,
  200,
  188,
  352,
  323,
  306,
  285,
  540,
  14,
  263,
  66,
  129,
  126,
  119,
  114,
  214,
  202,
  192,
  180,
  341,
  317,
  301,
  281,
  262,
  12,
  249,
  123,
  121,
  117,
  113,
  215,
  206,
  195,
  185,
  347,
  330,
  308,
  291,
  272,
  520,
  10,
  435,
  115,
  111,
  109,
  211,
  203,
  196,
  187,
  353,
  332,
  313,
  298,
  283,
  531,
  381,
  17,
  427,
  212,
  208,
  205,
  201,
  193,
  186,
  177,
  169,
  320,
  303,
  286,
  268,
  514,
  377,
  16,
  335,
  199,
  197,
  191,
  189,
  181,
  174,
  333,
  321,
  305,
  289,
  275,
  521,
  379,
  371,
  11,
  668,
  184,
  183,
  179,
  175,
  344,
  331,
  314,
  304,
  290,
  277,
  530,
  383,
  373,
  366,
  10,
  652,
  346,
  171,
  168,
  164,
  318,
  309,
  299,
  287,
  276,
  263,
  513,
  375,
  368,
  362,
  6,
  648,
  322,
  316,
  312,
  307,
  302,
  292,
  284,
  269,
  261,
  512,
  376,
  370,
  364,
  359,
  4,
  620,
  300,
  296,
  294,
  288,
  282,
  273,
  266,
  515,
  380,
  374,
  369,
  365,
  361,
  357,
  2,
  1033,
  280,
  278,
  274,
  267,
  264,
  259,
  382,
  378,
  372,
  367,
  363,
  360,
  358,
  356,
  0,
  43,
  20,
  19,
  17,
  15,
  13,
  11,
  9,
  7,
  6,
  4,
  7,
  5,
  3,
  1,
  3
];
c1.t32HB = [
  1,
  10,
  8,
  20,
  12,
  20,
  16,
  32,
  14,
  12,
  24,
  0,
  28,
  16,
  24,
  16
];
c1.t33HB = [
  15,
  28,
  26,
  48,
  22,
  40,
  36,
  64,
  14,
  24,
  20,
  32,
  12,
  16,
  8,
  0
];
c1.t1l = [
  1,
  4,
  3,
  5
];
c1.t2l = [
  1,
  4,
  7,
  4,
  5,
  7,
  6,
  7,
  8
];
c1.t3l = [
  2,
  3,
  7,
  4,
  4,
  7,
  6,
  7,
  8
];
c1.t5l = [
  1,
  4,
  7,
  8,
  4,
  5,
  8,
  9,
  7,
  8,
  9,
  10,
  8,
  8,
  9,
  10
];
c1.t6l = [
  3,
  4,
  6,
  8,
  4,
  4,
  6,
  7,
  5,
  6,
  7,
  8,
  7,
  7,
  8,
  9
];
c1.t7l = [
  1,
  4,
  7,
  9,
  9,
  10,
  4,
  6,
  8,
  9,
  9,
  10,
  7,
  7,
  9,
  10,
  10,
  11,
  8,
  9,
  10,
  11,
  11,
  11,
  8,
  9,
  10,
  11,
  11,
  12,
  9,
  10,
  11,
  12,
  12,
  12
];
c1.t8l = [
  2,
  4,
  7,
  9,
  9,
  10,
  4,
  4,
  6,
  10,
  10,
  10,
  7,
  6,
  8,
  10,
  10,
  11,
  9,
  10,
  10,
  11,
  11,
  12,
  9,
  9,
  10,
  11,
  12,
  12,
  10,
  10,
  11,
  11,
  13,
  13
];
c1.t9l = [
  3,
  4,
  6,
  7,
  9,
  10,
  4,
  5,
  6,
  7,
  8,
  10,
  5,
  6,
  7,
  8,
  9,
  10,
  7,
  7,
  8,
  9,
  9,
  10,
  8,
  8,
  9,
  9,
  10,
  11,
  9,
  9,
  10,
  10,
  11,
  11
];
c1.t10l = [
  1,
  4,
  7,
  9,
  10,
  10,
  10,
  11,
  4,
  6,
  8,
  9,
  10,
  11,
  10,
  10,
  7,
  8,
  9,
  10,
  11,
  12,
  11,
  11,
  8,
  9,
  10,
  11,
  12,
  12,
  11,
  12,
  9,
  10,
  11,
  12,
  12,
  12,
  12,
  12,
  10,
  11,
  12,
  12,
  13,
  13,
  12,
  13,
  9,
  10,
  11,
  12,
  12,
  12,
  13,
  13,
  10,
  10,
  11,
  12,
  12,
  13,
  13,
  13
];
c1.t11l = [
  2,
  4,
  6,
  8,
  9,
  10,
  9,
  10,
  4,
  5,
  6,
  8,
  10,
  10,
  9,
  10,
  6,
  7,
  8,
  9,
  10,
  11,
  10,
  10,
  8,
  8,
  9,
  11,
  10,
  12,
  10,
  11,
  9,
  10,
  10,
  11,
  11,
  12,
  11,
  12,
  9,
  10,
  11,
  12,
  12,
  13,
  12,
  13,
  9,
  9,
  9,
  10,
  11,
  12,
  12,
  12,
  9,
  9,
  10,
  11,
  12,
  12,
  12,
  12
];
c1.t12l = [
  4,
  4,
  6,
  8,
  9,
  10,
  10,
  10,
  4,
  5,
  6,
  7,
  9,
  9,
  10,
  10,
  6,
  6,
  7,
  8,
  9,
  10,
  9,
  10,
  7,
  7,
  8,
  8,
  9,
  10,
  10,
  10,
  8,
  8,
  9,
  9,
  10,
  10,
  10,
  11,
  9,
  9,
  10,
  10,
  10,
  11,
  10,
  11,
  9,
  9,
  9,
  10,
  10,
  11,
  11,
  12,
  10,
  10,
  10,
  11,
  11,
  11,
  11,
  12
];
c1.t13l = [
  1,
  5,
  7,
  8,
  9,
  10,
  10,
  11,
  10,
  11,
  12,
  12,
  13,
  13,
  14,
  14,
  4,
  6,
  8,
  9,
  10,
  10,
  11,
  11,
  11,
  11,
  12,
  12,
  13,
  14,
  14,
  14,
  7,
  8,
  9,
  10,
  11,
  11,
  12,
  12,
  11,
  12,
  12,
  13,
  13,
  14,
  15,
  15,
  8,
  9,
  10,
  11,
  11,
  12,
  12,
  12,
  12,
  13,
  13,
  13,
  13,
  14,
  15,
  15,
  9,
  9,
  11,
  11,
  12,
  12,
  13,
  13,
  12,
  13,
  13,
  14,
  14,
  15,
  15,
  16,
  10,
  10,
  11,
  12,
  12,
  12,
  13,
  13,
  13,
  13,
  14,
  13,
  15,
  15,
  16,
  16,
  10,
  11,
  12,
  12,
  13,
  13,
  13,
  13,
  13,
  14,
  14,
  14,
  15,
  15,
  16,
  16,
  11,
  11,
  12,
  13,
  13,
  13,
  14,
  14,
  14,
  14,
  15,
  15,
  15,
  16,
  18,
  18,
  10,
  10,
  11,
  12,
  12,
  13,
  13,
  14,
  14,
  14,
  14,
  15,
  15,
  16,
  17,
  17,
  11,
  11,
  12,
  12,
  13,
  13,
  13,
  15,
  14,
  15,
  15,
  16,
  16,
  16,
  18,
  17,
  11,
  12,
  12,
  13,
  13,
  14,
  14,
  15,
  14,
  15,
  16,
  15,
  16,
  17,
  18,
  19,
  12,
  12,
  12,
  13,
  14,
  14,
  14,
  14,
  15,
  15,
  15,
  16,
  17,
  17,
  17,
  18,
  12,
  13,
  13,
  14,
  14,
  15,
  14,
  15,
  16,
  16,
  17,
  17,
  17,
  18,
  18,
  18,
  13,
  13,
  14,
  15,
  15,
  15,
  16,
  16,
  16,
  16,
  16,
  17,
  18,
  17,
  18,
  18,
  14,
  14,
  14,
  15,
  15,
  15,
  17,
  16,
  16,
  19,
  17,
  17,
  17,
  19,
  18,
  18,
  13,
  14,
  15,
  16,
  16,
  16,
  17,
  16,
  17,
  17,
  18,
  18,
  21,
  20,
  21,
  18
];
c1.t15l = [
  3,
  5,
  6,
  8,
  8,
  9,
  10,
  10,
  10,
  11,
  11,
  12,
  12,
  12,
  13,
  14,
  5,
  5,
  7,
  8,
  9,
  9,
  10,
  10,
  10,
  11,
  11,
  12,
  12,
  12,
  13,
  13,
  6,
  7,
  7,
  8,
  9,
  9,
  10,
  10,
  10,
  11,
  11,
  12,
  12,
  13,
  13,
  13,
  7,
  8,
  8,
  9,
  9,
  10,
  10,
  11,
  11,
  11,
  12,
  12,
  12,
  13,
  13,
  13,
  8,
  8,
  9,
  9,
  10,
  10,
  11,
  11,
  11,
  11,
  12,
  12,
  12,
  13,
  13,
  13,
  9,
  9,
  9,
  10,
  10,
  10,
  11,
  11,
  11,
  11,
  12,
  12,
  13,
  13,
  13,
  14,
  10,
  9,
  10,
  10,
  10,
  11,
  11,
  11,
  11,
  12,
  12,
  12,
  13,
  13,
  14,
  14,
  10,
  10,
  10,
  11,
  11,
  11,
  11,
  12,
  12,
  12,
  12,
  12,
  13,
  13,
  13,
  14,
  10,
  10,
  10,
  11,
  11,
  11,
  11,
  12,
  12,
  12,
  12,
  13,
  13,
  14,
  14,
  14,
  10,
  10,
  11,
  11,
  11,
  11,
  12,
  12,
  12,
  13,
  13,
  13,
  13,
  14,
  14,
  14,
  11,
  11,
  11,
  11,
  12,
  12,
  12,
  12,
  12,
  13,
  13,
  13,
  13,
  14,
  15,
  14,
  11,
  11,
  11,
  11,
  12,
  12,
  12,
  12,
  13,
  13,
  13,
  13,
  14,
  14,
  14,
  15,
  12,
  12,
  11,
  12,
  12,
  12,
  13,
  13,
  13,
  13,
  13,
  13,
  14,
  14,
  15,
  15,
  12,
  12,
  12,
  12,
  12,
  13,
  13,
  13,
  13,
  14,
  14,
  14,
  14,
  14,
  15,
  15,
  13,
  13,
  13,
  13,
  13,
  13,
  13,
  13,
  14,
  14,
  14,
  14,
  15,
  15,
  14,
  15,
  13,
  13,
  13,
  13,
  13,
  13,
  13,
  14,
  14,
  14,
  14,
  14,
  15,
  15,
  15,
  15
];
c1.t16_5l = [
  1,
  5,
  7,
  9,
  10,
  10,
  11,
  11,
  12,
  12,
  12,
  13,
  13,
  13,
  14,
  11,
  4,
  6,
  8,
  9,
  10,
  11,
  11,
  11,
  12,
  12,
  12,
  13,
  14,
  13,
  14,
  11,
  7,
  8,
  9,
  10,
  11,
  11,
  12,
  12,
  13,
  12,
  13,
  13,
  13,
  14,
  14,
  12,
  9,
  9,
  10,
  11,
  11,
  12,
  12,
  12,
  13,
  13,
  14,
  14,
  14,
  15,
  15,
  13,
  10,
  10,
  11,
  11,
  12,
  12,
  13,
  13,
  13,
  14,
  14,
  14,
  15,
  15,
  15,
  12,
  10,
  10,
  11,
  11,
  12,
  13,
  13,
  14,
  13,
  14,
  14,
  15,
  15,
  15,
  16,
  13,
  11,
  11,
  11,
  12,
  13,
  13,
  13,
  13,
  14,
  14,
  14,
  14,
  15,
  15,
  16,
  13,
  11,
  11,
  12,
  12,
  13,
  13,
  13,
  14,
  14,
  15,
  15,
  15,
  15,
  17,
  17,
  13,
  11,
  12,
  12,
  13,
  13,
  13,
  14,
  14,
  15,
  15,
  15,
  15,
  16,
  16,
  16,
  13,
  12,
  12,
  12,
  13,
  13,
  14,
  14,
  15,
  15,
  15,
  15,
  16,
  15,
  16,
  15,
  14,
  12,
  13,
  12,
  13,
  14,
  14,
  14,
  14,
  15,
  16,
  16,
  16,
  17,
  17,
  16,
  13,
  13,
  13,
  13,
  13,
  14,
  14,
  15,
  16,
  16,
  16,
  16,
  16,
  16,
  15,
  16,
  14,
  13,
  14,
  14,
  14,
  14,
  15,
  15,
  15,
  15,
  17,
  16,
  16,
  16,
  16,
  18,
  14,
  15,
  14,
  14,
  14,
  15,
  15,
  16,
  16,
  16,
  18,
  17,
  17,
  17,
  19,
  17,
  14,
  14,
  15,
  13,
  14,
  16,
  16,
  15,
  16,
  16,
  17,
  18,
  17,
  19,
  17,
  16,
  14,
  11,
  11,
  11,
  12,
  12,
  13,
  13,
  13,
  14,
  14,
  14,
  14,
  14,
  14,
  14,
  12
];
c1.t16l = [
  1,
  5,
  7,
  9,
  10,
  10,
  11,
  11,
  12,
  12,
  12,
  13,
  13,
  13,
  14,
  10,
  4,
  6,
  8,
  9,
  10,
  11,
  11,
  11,
  12,
  12,
  12,
  13,
  14,
  13,
  14,
  10,
  7,
  8,
  9,
  10,
  11,
  11,
  12,
  12,
  13,
  12,
  13,
  13,
  13,
  14,
  14,
  11,
  9,
  9,
  10,
  11,
  11,
  12,
  12,
  12,
  13,
  13,
  14,
  14,
  14,
  15,
  15,
  12,
  10,
  10,
  11,
  11,
  12,
  12,
  13,
  13,
  13,
  14,
  14,
  14,
  15,
  15,
  15,
  11,
  10,
  10,
  11,
  11,
  12,
  13,
  13,
  14,
  13,
  14,
  14,
  15,
  15,
  15,
  16,
  12,
  11,
  11,
  11,
  12,
  13,
  13,
  13,
  13,
  14,
  14,
  14,
  14,
  15,
  15,
  16,
  12,
  11,
  11,
  12,
  12,
  13,
  13,
  13,
  14,
  14,
  15,
  15,
  15,
  15,
  17,
  17,
  12,
  11,
  12,
  12,
  13,
  13,
  13,
  14,
  14,
  15,
  15,
  15,
  15,
  16,
  16,
  16,
  12,
  12,
  12,
  12,
  13,
  13,
  14,
  14,
  15,
  15,
  15,
  15,
  16,
  15,
  16,
  15,
  13,
  12,
  13,
  12,
  13,
  14,
  14,
  14,
  14,
  15,
  16,
  16,
  16,
  17,
  17,
  16,
  12,
  13,
  13,
  13,
  13,
  14,
  14,
  15,
  16,
  16,
  16,
  16,
  16,
  16,
  15,
  16,
  13,
  13,
  14,
  14,
  14,
  14,
  15,
  15,
  15,
  15,
  17,
  16,
  16,
  16,
  16,
  18,
  13,
  15,
  14,
  14,
  14,
  15,
  15,
  16,
  16,
  16,
  18,
  17,
  17,
  17,
  19,
  17,
  13,
  14,
  15,
  13,
  14,
  16,
  16,
  15,
  16,
  16,
  17,
  18,
  17,
  19,
  17,
  16,
  13,
  10,
  10,
  10,
  11,
  11,
  12,
  12,
  12,
  13,
  13,
  13,
  13,
  13,
  13,
  13,
  10
];
c1.t24l = [
  4,
  5,
  7,
  8,
  9,
  10,
  10,
  11,
  11,
  12,
  12,
  12,
  12,
  12,
  13,
  10,
  5,
  6,
  7,
  8,
  9,
  10,
  10,
  11,
  11,
  11,
  12,
  12,
  12,
  12,
  12,
  10,
  7,
  7,
  8,
  9,
  9,
  10,
  10,
  11,
  11,
  11,
  11,
  12,
  12,
  12,
  13,
  9,
  8,
  8,
  9,
  9,
  10,
  10,
  10,
  11,
  11,
  11,
  11,
  12,
  12,
  12,
  12,
  9,
  9,
  9,
  9,
  10,
  10,
  10,
  10,
  11,
  11,
  11,
  12,
  12,
  12,
  12,
  13,
  9,
  10,
  9,
  10,
  10,
  10,
  10,
  11,
  11,
  11,
  11,
  12,
  12,
  12,
  12,
  12,
  9,
  10,
  10,
  10,
  10,
  10,
  11,
  11,
  11,
  11,
  12,
  12,
  12,
  12,
  12,
  13,
  9,
  11,
  10,
  10,
  10,
  11,
  11,
  11,
  11,
  12,
  12,
  12,
  12,
  12,
  13,
  13,
  10,
  11,
  11,
  11,
  11,
  11,
  11,
  11,
  11,
  11,
  12,
  12,
  12,
  12,
  13,
  13,
  10,
  11,
  11,
  11,
  11,
  11,
  11,
  11,
  12,
  12,
  12,
  12,
  12,
  13,
  13,
  13,
  10,
  12,
  11,
  11,
  11,
  11,
  12,
  12,
  12,
  12,
  12,
  12,
  13,
  13,
  13,
  13,
  10,
  12,
  12,
  11,
  11,
  11,
  12,
  12,
  12,
  12,
  12,
  12,
  13,
  13,
  13,
  13,
  10,
  12,
  12,
  12,
  12,
  12,
  12,
  12,
  12,
  12,
  12,
  13,
  13,
  13,
  13,
  13,
  10,
  12,
  12,
  12,
  12,
  12,
  12,
  12,
  12,
  13,
  13,
  13,
  13,
  13,
  13,
  13,
  10,
  13,
  12,
  12,
  12,
  12,
  12,
  12,
  13,
  13,
  13,
  13,
  13,
  13,
  13,
  13,
  10,
  9,
  9,
  9,
  9,
  9,
  9,
  9,
  9,
  9,
  9,
  9,
  10,
  10,
  10,
  10,
  6
];
c1.t32l = [
  1,
  5,
  5,
  7,
  5,
  8,
  7,
  9,
  5,
  7,
  7,
  9,
  7,
  9,
  9,
  10
];
c1.t33l = [
  4,
  5,
  5,
  6,
  5,
  6,
  6,
  7,
  5,
  6,
  6,
  7,
  6,
  7,
  7,
  8
];
c1.ht = [
  /* xlen, linmax, table, hlen */
  new H1(0, 0, null, null),
  new H1(2, 0, c1.t1HB, c1.t1l),
  new H1(3, 0, c1.t2HB, c1.t2l),
  new H1(3, 0, c1.t3HB, c1.t3l),
  new H1(0, 0, null, null),
  /* Apparently not used */
  new H1(4, 0, c1.t5HB, c1.t5l),
  new H1(4, 0, c1.t6HB, c1.t6l),
  new H1(6, 0, c1.t7HB, c1.t7l),
  new H1(6, 0, c1.t8HB, c1.t8l),
  new H1(6, 0, c1.t9HB, c1.t9l),
  new H1(8, 0, c1.t10HB, c1.t10l),
  new H1(8, 0, c1.t11HB, c1.t11l),
  new H1(8, 0, c1.t12HB, c1.t12l),
  new H1(16, 0, c1.t13HB, c1.t13l),
  new H1(0, 0, null, c1.t16_5l),
  /* Apparently not used */
  new H1(16, 0, c1.t15HB, c1.t15l),
  new H1(1, 1, c1.t16HB, c1.t16l),
  new H1(2, 3, c1.t16HB, c1.t16l),
  new H1(3, 7, c1.t16HB, c1.t16l),
  new H1(4, 15, c1.t16HB, c1.t16l),
  new H1(6, 63, c1.t16HB, c1.t16l),
  new H1(8, 255, c1.t16HB, c1.t16l),
  new H1(10, 1023, c1.t16HB, c1.t16l),
  new H1(13, 8191, c1.t16HB, c1.t16l),
  new H1(4, 15, c1.t24HB, c1.t24l),
  new H1(5, 31, c1.t24HB, c1.t24l),
  new H1(6, 63, c1.t24HB, c1.t24l),
  new H1(7, 127, c1.t24HB, c1.t24l),
  new H1(8, 255, c1.t24HB, c1.t24l),
  new H1(9, 511, c1.t24HB, c1.t24l),
  new H1(11, 2047, c1.t24HB, c1.t24l),
  new H1(13, 8191, c1.t24HB, c1.t24l),
  new H1(0, 0, c1.t32HB, c1.t32l),
  new H1(0, 0, c1.t33HB, c1.t33l)
];
c1.largetbl = [
  65540,
  327685,
  458759,
  589832,
  655369,
  655370,
  720906,
  720907,
  786443,
  786444,
  786444,
  851980,
  851980,
  851980,
  917517,
  655370,
  262149,
  393222,
  524295,
  589832,
  655369,
  720906,
  720906,
  720907,
  786443,
  786443,
  786444,
  851980,
  917516,
  851980,
  917516,
  655370,
  458759,
  524295,
  589832,
  655369,
  720905,
  720906,
  786442,
  786443,
  851979,
  786443,
  851979,
  851980,
  851980,
  917516,
  917517,
  720905,
  589832,
  589832,
  655369,
  720905,
  720906,
  786442,
  786442,
  786443,
  851979,
  851979,
  917515,
  917516,
  917516,
  983052,
  983052,
  786441,
  655369,
  655369,
  720905,
  720906,
  786442,
  786442,
  851978,
  851979,
  851979,
  917515,
  917516,
  917516,
  983052,
  983052,
  983053,
  720905,
  655370,
  655369,
  720906,
  720906,
  786442,
  851978,
  851979,
  917515,
  851979,
  917515,
  917516,
  983052,
  983052,
  983052,
  1048588,
  786441,
  720906,
  720906,
  720906,
  786442,
  851978,
  851979,
  851979,
  851979,
  917515,
  917516,
  917516,
  917516,
  983052,
  983052,
  1048589,
  786441,
  720907,
  720906,
  786442,
  786442,
  851979,
  851979,
  851979,
  917515,
  917516,
  983052,
  983052,
  983052,
  983052,
  1114125,
  1114125,
  786442,
  720907,
  786443,
  786443,
  851979,
  851979,
  851979,
  917515,
  917515,
  983051,
  983052,
  983052,
  983052,
  1048588,
  1048589,
  1048589,
  786442,
  786443,
  786443,
  786443,
  851979,
  851979,
  917515,
  917515,
  983052,
  983052,
  983052,
  983052,
  1048588,
  983053,
  1048589,
  983053,
  851978,
  786444,
  851979,
  786443,
  851979,
  917515,
  917516,
  917516,
  917516,
  983052,
  1048588,
  1048588,
  1048589,
  1114125,
  1114125,
  1048589,
  786442,
  851980,
  851980,
  851979,
  851979,
  917515,
  917516,
  983052,
  1048588,
  1048588,
  1048588,
  1048588,
  1048589,
  1048589,
  983053,
  1048589,
  851978,
  851980,
  917516,
  917516,
  917516,
  917516,
  983052,
  983052,
  983052,
  983052,
  1114124,
  1048589,
  1048589,
  1048589,
  1048589,
  1179661,
  851978,
  983052,
  917516,
  917516,
  917516,
  983052,
  983052,
  1048588,
  1048588,
  1048589,
  1179661,
  1114125,
  1114125,
  1114125,
  1245197,
  1114125,
  851978,
  917517,
  983052,
  851980,
  917516,
  1048588,
  1048588,
  983052,
  1048589,
  1048589,
  1114125,
  1179661,
  1114125,
  1245197,
  1114125,
  1048589,
  851978,
  655369,
  655369,
  655369,
  720905,
  720905,
  786441,
  786441,
  786441,
  851977,
  851977,
  851977,
  851978,
  851978,
  851978,
  851978,
  655366
];
c1.table23 = [
  65538,
  262147,
  458759,
  262148,
  327684,
  458759,
  393222,
  458759,
  524296
];
c1.table56 = [
  65539,
  262148,
  458758,
  524296,
  262148,
  327684,
  524294,
  589831,
  458757,
  524294,
  589831,
  655368,
  524295,
  524295,
  589832,
  655369
];
c1.bitrate_table = [
  [0, 8, 16, 24, 32, 40, 48, 56, 64, 80, 96, 112, 128, 144, 160, -1],
  /* MPEG 2 */
  [0, 32, 40, 48, 56, 64, 80, 96, 112, 128, 160, 192, 224, 256, 320, -1],
  /* MPEG 1 */
  [0, 8, 16, 24, 32, 40, 48, 56, 64, -1, -1, -1, -1, -1, -1, -1]
  /* MPEG 2.5 */
];
c1.samplerate_table = [
  [22050, 24e3, 16e3, -1],
  [44100, 48e3, 32e3, -1],
  [11025, 12e3, 8e3, -1]
];
c1.scfsi_band = [0, 6, 11, 16, 21];
var zt = c1, Lt, ma;
function Qa() {
  if (ma)
    return Lt;
  ma = 1;
  var p = ja, E = G1, A = E.VbrMode, j = E.Float, K = E.Util, D = E.new_float, Z = E.new_int, Y = E.assert, $ = se(), u1 = Ga, g = dt;
  m.Q_MAX = 257, m.Q_MAX2 = 116, m.LARGE_BITS = 1e5, m.IXMAX_VAL = 8206;
  function m() {
    var N = Zt(), n1 = null, U = null, r1 = null;
    this.setModules = function(v, V, L) {
      n1 = v, U = V, r1 = L;
    };
    function W(v) {
      return Y(0 <= v + m.Q_MAX2 && v < m.Q_MAX), P[v + m.Q_MAX2];
    }
    this.IPOW20 = function(v) {
      return Y(0 <= v && v < m.Q_MAX), O[v];
    };
    var M = 2220446049250313e-31, f = m.IXMAX_VAL, h = f + 2, w = m.Q_MAX, e = m.Q_MAX2;
    m.LARGE_BITS;
    var l = 100;
    this.nr_of_sfb_block = [
      [[6, 5, 5, 5], [9, 9, 9, 9], [6, 9, 9, 9]],
      [[6, 5, 7, 3], [9, 9, 12, 6], [6, 9, 12, 6]],
      [[11, 10, 0, 0], [18, 18, 0, 0], [15, 18, 0, 0]],
      [[7, 7, 7, 0], [12, 12, 12, 0], [6, 15, 12, 0]],
      [[6, 6, 6, 3], [12, 9, 9, 6], [6, 12, 9, 6]],
      [[8, 8, 5, 0], [15, 12, 9, 0], [6, 18, 9, 0]]
    ];
    var R = [
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      1,
      1,
      1,
      1,
      2,
      2,
      3,
      3,
      3,
      2,
      0
    ];
    this.pretab = R, this.sfBandIndex = [
      // Table B.2.b: 22.05 kHz
      new p(
        [
          0,
          6,
          12,
          18,
          24,
          30,
          36,
          44,
          54,
          66,
          80,
          96,
          116,
          140,
          168,
          200,
          238,
          284,
          336,
          396,
          464,
          522,
          576
        ],
        [0, 4, 8, 12, 18, 24, 32, 42, 56, 74, 100, 132, 174, 192],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0]
        //  sfb12 pseudo sub bands
      ),
      /* Table B.2.c: 24 kHz */
      /* docs: 332. mpg123(broken): 330 */
      new p(
        [
          0,
          6,
          12,
          18,
          24,
          30,
          36,
          44,
          54,
          66,
          80,
          96,
          114,
          136,
          162,
          194,
          232,
          278,
          332,
          394,
          464,
          540,
          576
        ],
        [0, 4, 8, 12, 18, 26, 36, 48, 62, 80, 104, 136, 180, 192],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0]
        /*  sfb12 pseudo sub bands */
      ),
      /* Table B.2.a: 16 kHz */
      new p(
        [
          0,
          6,
          12,
          18,
          24,
          30,
          36,
          44,
          54,
          66,
          80,
          96,
          116,
          140,
          168,
          200,
          238,
          284,
          336,
          396,
          464,
          522,
          576
        ],
        [0, 4, 8, 12, 18, 26, 36, 48, 62, 80, 104, 134, 174, 192],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0]
        /*  sfb12 pseudo sub bands */
      ),
      /* Table B.8.b: 44.1 kHz */
      new p(
        [
          0,
          4,
          8,
          12,
          16,
          20,
          24,
          30,
          36,
          44,
          52,
          62,
          74,
          90,
          110,
          134,
          162,
          196,
          238,
          288,
          342,
          418,
          576
        ],
        [0, 4, 8, 12, 16, 22, 30, 40, 52, 66, 84, 106, 136, 192],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0]
        /*  sfb12 pseudo sub bands */
      ),
      /* Table B.8.c: 48 kHz */
      new p(
        [
          0,
          4,
          8,
          12,
          16,
          20,
          24,
          30,
          36,
          42,
          50,
          60,
          72,
          88,
          106,
          128,
          156,
          190,
          230,
          276,
          330,
          384,
          576
        ],
        [0, 4, 8, 12, 16, 22, 28, 38, 50, 64, 80, 100, 126, 192],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0]
        /*  sfb12 pseudo sub bands */
      ),
      /* Table B.8.a: 32 kHz */
      new p(
        [
          0,
          4,
          8,
          12,
          16,
          20,
          24,
          30,
          36,
          44,
          54,
          66,
          82,
          102,
          126,
          156,
          194,
          240,
          296,
          364,
          448,
          550,
          576
        ],
        [0, 4, 8, 12, 16, 22, 30, 42, 58, 78, 104, 138, 180, 192],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0]
        /*  sfb12 pseudo sub bands */
      ),
      /* MPEG-2.5 11.025 kHz */
      new p(
        [
          0,
          6,
          12,
          18,
          24,
          30,
          36,
          44,
          54,
          66,
          80,
          96,
          116,
          140,
          168,
          200,
          238,
          284,
          336,
          396,
          464,
          522,
          576
        ],
        [
          0 / 3,
          12 / 3,
          24 / 3,
          36 / 3,
          54 / 3,
          78 / 3,
          108 / 3,
          144 / 3,
          186 / 3,
          240 / 3,
          312 / 3,
          402 / 3,
          522 / 3,
          576 / 3
        ],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0]
        /*  sfb12 pseudo sub bands */
      ),
      /* MPEG-2.5 12 kHz */
      new p(
        [
          0,
          6,
          12,
          18,
          24,
          30,
          36,
          44,
          54,
          66,
          80,
          96,
          116,
          140,
          168,
          200,
          238,
          284,
          336,
          396,
          464,
          522,
          576
        ],
        [
          0 / 3,
          12 / 3,
          24 / 3,
          36 / 3,
          54 / 3,
          78 / 3,
          108 / 3,
          144 / 3,
          186 / 3,
          240 / 3,
          312 / 3,
          402 / 3,
          522 / 3,
          576 / 3
        ],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0]
        /*  sfb12 pseudo sub bands */
      ),
      /* MPEG-2.5 8 kHz */
      new p(
        [
          0,
          12,
          24,
          36,
          48,
          60,
          72,
          88,
          108,
          132,
          160,
          192,
          232,
          280,
          336,
          400,
          476,
          566,
          568,
          570,
          572,
          574,
          576
        ],
        [
          0 / 3,
          24 / 3,
          48 / 3,
          72 / 3,
          108 / 3,
          156 / 3,
          216 / 3,
          288 / 3,
          372 / 3,
          480 / 3,
          486 / 3,
          492 / 3,
          498 / 3,
          576 / 3
        ],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0]
        /*  sfb12 pseudo sub bands */
      )
    ];
    var P = D(w + e + 1), O = D(w), y = D(h), x = D(h);
    this.adj43 = x;
    function _1(v, V) {
      var L = r1.ATHformula(V, v);
      return L -= l, L = Math.pow(10, L / 10 + v.ATHlower), L;
    }
    function b(v) {
      for (var V = v.internal_flags.ATH.l, L = v.internal_flags.ATH.psfb21, I = v.internal_flags.ATH.s, G = v.internal_flags.ATH.psfb12, B = v.internal_flags, n = v.out_samplerate, r = 0; r < $.SBMAX_l; r++) {
        var t = B.scalefac_band.l[r], i = B.scalefac_band.l[r + 1];
        V[r] = j.MAX_VALUE;
        for (var u = t; u < i; u++) {
          var F = u * n / 1152, e1 = _1(v, F);
          V[r] = Math.min(V[r], e1);
        }
      }
      for (var r = 0; r < $.PSFB21; r++) {
        var t = B.scalefac_band.psfb21[r], i = B.scalefac_band.psfb21[r + 1];
        L[r] = j.MAX_VALUE;
        for (var u = t; u < i; u++) {
          var F = u * n / 1152, e1 = _1(v, F);
          L[r] = Math.min(L[r], e1);
        }
      }
      for (var r = 0; r < $.SBMAX_s; r++) {
        var t = B.scalefac_band.s[r], i = B.scalefac_band.s[r + 1];
        I[r] = j.MAX_VALUE;
        for (var u = t; u < i; u++) {
          var F = u * n / 384, e1 = _1(v, F);
          I[r] = Math.min(I[r], e1);
        }
        I[r] *= B.scalefac_band.s[r + 1] - B.scalefac_band.s[r];
      }
      for (var r = 0; r < $.PSFB12; r++) {
        var t = B.scalefac_band.psfb12[r], i = B.scalefac_band.psfb12[r + 1];
        G[r] = j.MAX_VALUE;
        for (var u = t; u < i; u++) {
          var F = u * n / 384, e1 = _1(v, F);
          G[r] = Math.min(G[r], e1);
        }
        G[r] *= B.scalefac_band.s[13] - B.scalefac_band.s[12];
      }
      if (v.noATH) {
        for (var r = 0; r < $.SBMAX_l; r++)
          V[r] = 1e-20;
        for (var r = 0; r < $.PSFB21; r++)
          L[r] = 1e-20;
        for (var r = 0; r < $.SBMAX_s; r++)
          I[r] = 1e-20;
        for (var r = 0; r < $.PSFB12; r++)
          G[r] = 1e-20;
      }
      B.ATH.floor = 10 * Math.log10(_1(v, -1));
    }
    this.iteration_init = function(v) {
      var V = v.internal_flags, L = V.l3_side, I;
      if (V.iteration_init_init == 0) {
        for (V.iteration_init_init = 1, L.main_data_begin = 0, b(v), y[0] = 0, I = 1; I < h; I++)
          y[I] = Math.pow(I, 4 / 3);
        for (I = 0; I < h - 1; I++)
          x[I] = I + 1 - Math.pow(
            0.5 * (y[I] + y[I + 1]),
            0.75
          );
        for (x[I] = 0.5, I = 0; I < w; I++)
          O[I] = Math.pow(2, (I - 210) * -0.1875);
        for (I = 0; I <= w + e; I++)
          P[I] = Math.pow(2, (I - 210 - e) * 0.25);
        n1.huffman_init(V);
        {
          var G, B, n, r;
          for (I = v.exp_nspsytune >> 2 & 63, I >= 32 && (I -= 64), G = Math.pow(10, I / 4 / 10), I = v.exp_nspsytune >> 8 & 63, I >= 32 && (I -= 64), B = Math.pow(10, I / 4 / 10), I = v.exp_nspsytune >> 14 & 63, I >= 32 && (I -= 64), n = Math.pow(10, I / 4 / 10), I = v.exp_nspsytune >> 20 & 63, I >= 32 && (I -= 64), r = n * Math.pow(10, I / 4 / 10), I = 0; I < $.SBMAX_l; I++) {
            var t;
            I <= 6 ? t = G : I <= 13 ? t = B : I <= 20 ? t = n : t = r, V.nsPsy.longfact[I] = t;
          }
          for (I = 0; I < $.SBMAX_s; I++) {
            var t;
            I <= 5 ? t = G : I <= 10 ? t = B : I <= 11 ? t = n : t = r, V.nsPsy.shortfact[I] = t;
          }
        }
      }
    }, this.on_pe = function(v, V, L, I, G, B) {
      var n = v.internal_flags, r = 0, t, i = Z(2), u, F = new u1(r), e1 = U.ResvMaxBits(v, I, F, B);
      r = F.bits;
      var T = r + e1;
      for (T > g.MAX_BITS_PER_GRANULE && (T = g.MAX_BITS_PER_GRANULE), t = 0, u = 0; u < n.channels_out; ++u)
        L[u] = Math.min(
          g.MAX_BITS_PER_CHANNEL,
          r / n.channels_out
        ), i[u] = 0 | L[u] * V[G][u] / 700 - L[u], i[u] > I * 3 / 4 && (i[u] = I * 3 / 4), i[u] < 0 && (i[u] = 0), i[u] + L[u] > g.MAX_BITS_PER_CHANNEL && (i[u] = Math.max(
          0,
          g.MAX_BITS_PER_CHANNEL - L[u]
        )), t += i[u];
      if (t > e1)
        for (u = 0; u < n.channels_out; ++u)
          i[u] = e1 * i[u] / t;
      for (u = 0; u < n.channels_out; ++u)
        L[u] += i[u], e1 -= i[u];
      for (t = 0, u = 0; u < n.channels_out; ++u)
        t += L[u];
      if (t > g.MAX_BITS_PER_GRANULE) {
        var q = 0;
        for (u = 0; u < n.channels_out; ++u)
          L[u] *= g.MAX_BITS_PER_GRANULE, L[u] /= t, q += L[u];
      }
      return T;
    }, this.reduce_side = function(v, V, L, I) {
      Y(v[0] + v[1] <= g.MAX_BITS_PER_GRANULE);
      var G = 0.33 * (0.5 - V) / 0.5;
      G < 0 && (G = 0), G > 0.5 && (G = 0.5);
      var B = 0 | G * 0.5 * (v[0] + v[1]);
      B > g.MAX_BITS_PER_CHANNEL - v[0] && (B = g.MAX_BITS_PER_CHANNEL - v[0]), B < 0 && (B = 0), v[1] >= 125 && (v[1] - B > 125 ? (v[0] < L && (v[0] += B), v[1] -= B) : (v[0] += v[1] - 125, v[1] = 125)), B = v[0] + v[1], B > I && (v[0] = I * v[0] / B, v[1] = I * v[1] / B), Y(v[0] <= g.MAX_BITS_PER_CHANNEL), Y(v[1] <= g.MAX_BITS_PER_CHANNEL), Y(v[0] + v[1] <= g.MAX_BITS_PER_GRANULE);
    }, this.athAdjust = function(v, V, L) {
      var I = 90.30873362, G = 94.82444863, B = K.FAST_LOG10_X(V, 10), n = v * v, r = 0;
      return B -= L, n > 1e-20 && (r = 1 + K.FAST_LOG10_X(n, 10 / I)), r < 0 && (r = 0), B *= r, B += L + I - G, Math.pow(10, 0.1 * B);
    }, this.calc_xmin = function(v, V, L, I) {
      var G = 0, B = v.internal_flags, n, r = 0, t = 0, i = B.ATH, u = L.xr, F = v.VBR == A.vbr_mtrh ? 1 : 0, e1 = B.masking_lower;
      for ((v.VBR == A.vbr_mtrh || v.VBR == A.vbr_mt) && (e1 = 1), n = 0; n < L.psy_lmax; n++) {
        var T, q, i1, h1, g1, S1;
        v.VBR == A.vbr_rh || v.VBR == A.vbr_mtrh ? q = athAdjust(i.adjust, i.l[n], i.floor) : q = i.adjust * i.l[n], g1 = L.width[n], i1 = q / g1, h1 = M, S1 = g1 >> 1, T = 0;
        do {
          var v1, w1;
          v1 = u[r] * u[r], T += v1, h1 += v1 < i1 ? v1 : i1, r++, w1 = u[r] * u[r], T += w1, h1 += w1 < i1 ? w1 : i1, r++;
        } while (--S1 > 0);
        if (T > q && t++, n == $.SBPSY_l) {
          var y1 = q * B.nsPsy.longfact[n];
          h1 < y1 && (h1 = y1);
        }
        if (F != 0 && (q = h1), !v.ATHonly) {
          var F1 = V.en.l[n];
          if (F1 > 0) {
            var y1;
            y1 = T * V.thm.l[n] * e1 / F1, F != 0 && (y1 *= B.nsPsy.longfact[n]), q < y1 && (q = y1);
          }
        }
        F != 0 ? I[G++] = q : I[G++] = q * B.nsPsy.longfact[n];
      }
      var pe = 575;
      if (L.block_type != $.SHORT_TYPE)
        for (var s = 576; s-- != 0 && N.EQ(u[s], 0); )
          pe = s;
      L.max_nonzero_coeff = pe;
      for (var _ = L.sfb_smin; n < L.psymax; _++, n += 3) {
        var g1, d1, R1;
        for (v.VBR == A.vbr_rh || v.VBR == A.vbr_mtrh ? R1 = athAdjust(i.adjust, i.s[_], i.floor) : R1 = i.adjust * i.s[_], g1 = L.width[n], d1 = 0; d1 < 3; d1++) {
          var T = 0, q, i1, h1, S1 = g1 >> 1;
          i1 = R1 / g1, h1 = M;
          do {
            var v1, w1;
            v1 = u[r] * u[r], T += v1, h1 += v1 < i1 ? v1 : i1, r++, w1 = u[r] * u[r], T += w1, h1 += w1 < i1 ? w1 : i1, r++;
          } while (--S1 > 0);
          if (T > R1 && t++, _ == $.SBPSY_s) {
            var y1 = R1 * B.nsPsy.shortfact[_];
            h1 < y1 && (h1 = y1);
          }
          if (F != 0 ? q = h1 : q = R1, !v.ATHonly && !v.ATHshort) {
            var F1 = V.en.s[_][d1];
            if (F1 > 0) {
              var y1;
              y1 = T * V.thm.s[_][d1] * e1 / F1, F != 0 && (y1 *= B.nsPsy.shortfact[_]), q < y1 && (q = y1);
            }
          }
          F != 0 ? I[G++] = q : I[G++] = q * B.nsPsy.shortfact[_];
        }
        v.useTemporal && (I[G - 3] > I[G - 3 + 1] && (I[G - 3 + 1] += (I[G - 3] - I[G - 3 + 1]) * B.decay), I[G - 3 + 1] > I[G - 3 + 2] && (I[G - 3 + 2] += (I[G - 3 + 1] - I[G - 3 + 2]) * B.decay));
      }
      return t;
    };
    function a(v) {
      this.s = v;
    }
    this.calc_noise_core = function(v, V, L, I) {
      var G = 0, B = V.s, n = v.l3_enc;
      if (B > v.count1)
        for (; L-- != 0; ) {
          var r;
          r = v.xr[B], B++, G += r * r, r = v.xr[B], B++, G += r * r;
        }
      else if (B > v.big_values) {
        var t = D(2);
        for (t[0] = 0, t[1] = I; L-- != 0; ) {
          var r;
          r = Math.abs(v.xr[B]) - t[n[B]], B++, G += r * r, r = Math.abs(v.xr[B]) - t[n[B]], B++, G += r * r;
        }
      } else
        for (; L-- != 0; ) {
          var r;
          r = Math.abs(v.xr[B]) - y[n[B]] * I, B++, G += r * r, r = Math.abs(v.xr[B]) - y[n[B]] * I, B++, G += r * r;
        }
      return V.s = B, G;
    }, this.calc_noise = function(v, V, L, I, G) {
      var B = 0, n = 0, r, t, i = 0, u = 0, F = 0, e1 = -20, T = 0, q = v.scalefac, i1 = 0;
      for (I.over_SSD = 0, r = 0; r < v.psymax; r++) {
        var h1 = v.global_gain - (q[i1++] + (v.preflag != 0 ? R[r] : 0) << v.scalefac_scale + 1) - v.subblock_gain[v.window[r]] * 8, g1 = 0;
        if (G != null && G.step[r] == h1)
          g1 = G.noise[r], T += v.width[r], L[B++] = g1 / V[n++], g1 = G.noise_log[r];
        else {
          var S1 = W(h1);
          if (t = v.width[r] >> 1, T + v.width[r] > v.max_nonzero_coeff) {
            var v1;
            v1 = v.max_nonzero_coeff - T + 1, v1 > 0 ? t = v1 >> 1 : t = 0;
          }
          var w1 = new a(T);
          g1 = this.calc_noise_core(v, w1, t, S1), T = w1.s, G != null && (G.step[r] = h1, G.noise[r] = g1), g1 = L[B++] = g1 / V[n++], g1 = K.FAST_LOG10(Math.max(g1, 1e-20)), G != null && (G.noise_log[r] = g1);
        }
        if (G != null && (G.global_gain = v.global_gain), F += g1, g1 > 0) {
          var y1;
          y1 = Math.max(0 | g1 * 10 + 0.5, 1), I.over_SSD += y1 * y1, i++, u += g1;
        }
        e1 = Math.max(e1, g1);
      }
      return I.over_count = i, I.tot_noise = F, I.over_noise = u, I.max_noise = e1, i;
    }, this.set_pinfo = function(v, V, L, I, G) {
      var B = v.internal_flags, n, r, t, i, u, F = V.scalefac_scale == 0 ? 0.5 : 1, e1 = V.scalefac, T = D(L3Side.SFBMAX), q = D(L3Side.SFBMAX), i1 = new CalcNoiseResult();
      calc_xmin(v, L, V, T), calc_noise(V, T, q, i1, null);
      var h1 = 0;
      for (r = V.sfb_lmax, V.block_type != $.SHORT_TYPE && V.mixed_block_flag == 0 && (r = 22), n = 0; n < r; n++) {
        var g1 = B.scalefac_band.l[n], S1 = B.scalefac_band.l[n + 1], v1 = S1 - g1;
        for (i = 0; h1 < S1; h1++)
          i += V.xr[h1] * V.xr[h1];
        i /= v1, u = 1e15, B.pinfo.en[I][G][n] = u * i, B.pinfo.xfsf[I][G][n] = u * T[n] * q[n] / v1, L.en.l[n] > 0 && !v.ATHonly ? i = i / L.en.l[n] : i = 0, B.pinfo.thr[I][G][n] = u * Math.max(i * L.thm.l[n], B.ATH.l[n]), B.pinfo.LAMEsfb[I][G][n] = 0, V.preflag != 0 && n >= 11 && (B.pinfo.LAMEsfb[I][G][n] = -F * R[n]), n < $.SBPSY_l && (Y(e1[n] >= 0), B.pinfo.LAMEsfb[I][G][n] -= F * e1[n]);
      }
      if (V.block_type == $.SHORT_TYPE)
        for (r = n, n = V.sfb_smin; n < $.SBMAX_s; n++)
          for (var g1 = B.scalefac_band.s[n], S1 = B.scalefac_band.s[n + 1], v1 = S1 - g1, w1 = 0; w1 < 3; w1++) {
            for (i = 0, t = g1; t < S1; t++)
              i += V.xr[h1] * V.xr[h1], h1++;
            i = Math.max(i / v1, 1e-20), u = 1e15, B.pinfo.en_s[I][G][3 * n + w1] = u * i, B.pinfo.xfsf_s[I][G][3 * n + w1] = u * T[r] * q[r] / v1, L.en.s[n][w1] > 0 ? i = i / L.en.s[n][w1] : i = 0, (v.ATHonly || v.ATHshort) && (i = 0), B.pinfo.thr_s[I][G][3 * n + w1] = u * Math.max(
              i * L.thm.s[n][w1],
              B.ATH.s[n]
            ), B.pinfo.LAMEsfb_s[I][G][3 * n + w1] = -2 * V.subblock_gain[w1], n < $.SBPSY_s && (B.pinfo.LAMEsfb_s[I][G][3 * n + w1] -= F * e1[r]), r++;
          }
      B.pinfo.LAMEqss[I][G] = V.global_gain, B.pinfo.LAMEmainbits[I][G] = V.part2_3_length + V.part2_length, B.pinfo.LAMEsfbits[I][G] = V.part2_length, B.pinfo.over[I][G] = i1.over_count, B.pinfo.max_noise[I][G] = i1.max_noise * 10, B.pinfo.over_noise[I][G] = i1.over_noise * 10, B.pinfo.tot_noise[I][G] = i1.tot_noise * 10, B.pinfo.over_SSD[I][G] = i1.over_SSD;
    };
  }
  return Lt = m, Lt;
}
var Dt, ba;
function Ua() {
  if (ba)
    return Dt;
  ba = 1;
  var p = G1, E = p.System, A = p.Arrays, j = p.new_int, K = p.assert, D = se(), Z = zt, Y = Ft, $ = Qa();
  function u1() {
    var g = null;
    this.qupvt = null, this.setModules = function(B) {
      this.qupvt = B, g = B;
    };
    function m(B) {
      this.bits = 0 | B;
    }
    var N = [
      [0, 0],
      /* 0 bands */
      [0, 0],
      /* 1 bands */
      [0, 0],
      /* 2 bands */
      [0, 0],
      /* 3 bands */
      [0, 0],
      /* 4 bands */
      [0, 1],
      /* 5 bands */
      [1, 1],
      /* 6 bands */
      [1, 1],
      /* 7 bands */
      [1, 2],
      /* 8 bands */
      [2, 2],
      /* 9 bands */
      [2, 3],
      /* 10 bands */
      [2, 3],
      /* 11 bands */
      [3, 4],
      /* 12 bands */
      [3, 4],
      /* 13 bands */
      [3, 4],
      /* 14 bands */
      [4, 5],
      /* 15 bands */
      [4, 5],
      /* 16 bands */
      [4, 6],
      /* 17 bands */
      [5, 6],
      /* 18 bands */
      [5, 6],
      /* 19 bands */
      [5, 7],
      /* 20 bands */
      [6, 7],
      /* 21 bands */
      [6, 7]
      /* 22 bands */
    ];
    function n1(B, n, r, t, i, u) {
      var F = 0.5946 / n;
      for (B = B >> 1; B-- != 0; )
        i[u++] = F > r[t++] ? 0 : 1, i[u++] = F > r[t++] ? 0 : 1;
    }
    function U(B, n, r, t, i, u) {
      B = B >> 1;
      var F = B % 2;
      for (B = B >> 1; B-- != 0; ) {
        var e1, T, q, i1, h1, g1, S1, v1;
        e1 = r[t++] * n, T = r[t++] * n, h1 = 0 | e1, q = r[t++] * n, g1 = 0 | T, i1 = r[t++] * n, S1 = 0 | q, e1 += g.adj43[h1], v1 = 0 | i1, T += g.adj43[g1], i[u++] = 0 | e1, q += g.adj43[S1], i[u++] = 0 | T, i1 += g.adj43[v1], i[u++] = 0 | q, i[u++] = 0 | i1;
      }
      if (F != 0) {
        var e1, T, h1, g1;
        e1 = r[t++] * n, T = r[t++] * n, h1 = 0 | e1, g1 = 0 | T, e1 += g.adj43[h1], T += g.adj43[g1], i[u++] = 0 | e1, i[u++] = 0 | T;
      }
    }
    function r1(B, n, r, t, i) {
      var u, F, e1 = 0, T, q = 0, i1 = 0, h1 = 0, g1 = n, S1 = 0, v1 = g1, w1 = 0, y1 = B, F1 = 0;
      for (T = i != null && t.global_gain == i.global_gain, t.block_type == D.SHORT_TYPE ? F = 38 : F = 21, u = 0; u <= F; u++) {
        var pe = -1;
        if ((T || t.block_type == D.NORM_TYPE) && (pe = t.global_gain - (t.scalefac[u] + (t.preflag != 0 ? g.pretab[u] : 0) << t.scalefac_scale + 1) - t.subblock_gain[t.window[u]] * 8), K(t.width[u] >= 0), T && i.step[u] == pe)
          q != 0 && (U(
            q,
            r,
            y1,
            F1,
            v1,
            w1
          ), q = 0), i1 != 0 && (n1(
            i1,
            r,
            y1,
            F1,
            v1,
            w1
          ), i1 = 0);
        else {
          var s = t.width[u];
          if (e1 + t.width[u] > t.max_nonzero_coeff) {
            var _;
            _ = t.max_nonzero_coeff - e1 + 1, A.fill(n, t.max_nonzero_coeff, 576, 0), s = _, s < 0 && (s = 0), u = F + 1;
          }
          if (q == 0 && i1 == 0 && (v1 = g1, w1 = S1, y1 = B, F1 = h1), i != null && i.sfb_count1 > 0 && u >= i.sfb_count1 && i.step[u] > 0 && pe >= i.step[u] ? (q != 0 && (U(
            q,
            r,
            y1,
            F1,
            v1,
            w1
          ), q = 0, v1 = g1, w1 = S1, y1 = B, F1 = h1), i1 += s) : (i1 != 0 && (n1(
            i1,
            r,
            y1,
            F1,
            v1,
            w1
          ), i1 = 0, v1 = g1, w1 = S1, y1 = B, F1 = h1), q += s), s <= 0) {
            i1 != 0 && (n1(
              i1,
              r,
              y1,
              F1,
              v1,
              w1
            ), i1 = 0), q != 0 && (U(
              q,
              r,
              y1,
              F1,
              v1,
              w1
            ), q = 0);
            break;
          }
        }
        u <= F && (S1 += t.width[u], h1 += t.width[u], e1 += t.width[u]);
      }
      q != 0 && (U(
        q,
        r,
        y1,
        F1,
        v1,
        w1
      ), q = 0), i1 != 0 && (n1(
        i1,
        r,
        y1,
        F1,
        v1,
        w1
      ), i1 = 0);
    }
    function W(B, n, r) {
      var t = 0, i = 0;
      do {
        var u = B[n++], F = B[n++];
        t < u && (t = u), i < F && (i = F);
      } while (n < r);
      return t < i && (t = i), t;
    }
    function M(B, n, r, t, i, u) {
      var F = Z.ht[t].xlen * 65536 + Z.ht[i].xlen, e1 = 0, T;
      do {
        var q = B[n++], i1 = B[n++];
        q != 0 && (q > 14 && (q = 15, e1 += F), q *= 16), i1 != 0 && (i1 > 14 && (i1 = 15, e1 += F), q += i1), e1 += Z.largetbl[q];
      } while (n < r);
      return T = e1 & 65535, e1 >>= 16, e1 > T && (e1 = T, t = i), u.bits += e1, t;
    }
    function f(B, n, r, t) {
      var i = 0, u = Z.ht[1].hlen;
      do {
        var F = B[n + 0] * 2 + B[n + 1];
        n += 2, i += u[F];
      } while (n < r);
      return t.bits += i, 1;
    }
    function h(B, n, r, t, i) {
      var u = 0, F, e1 = Z.ht[t].xlen, T;
      t == 2 ? T = Z.table23 : T = Z.table56;
      do {
        var q = B[n + 0] * e1 + B[n + 1];
        n += 2, u += T[q];
      } while (n < r);
      return F = u & 65535, u >>= 16, u > F && (u = F, t++), i.bits += u, t;
    }
    function w(B, n, r, t, i) {
      var u = 0, F = 0, e1 = 0, T = Z.ht[t].xlen, q = Z.ht[t].hlen, i1 = Z.ht[t + 1].hlen, h1 = Z.ht[t + 2].hlen;
      do {
        var g1 = B[n + 0] * T + B[n + 1];
        n += 2, u += q[g1], F += i1[g1], e1 += h1[g1];
      } while (n < r);
      var S1 = t;
      return u > F && (u = F, S1++), u > e1 && (u = e1, S1 = t + 2), i.bits += u, S1;
    }
    var e = [
      1,
      2,
      5,
      7,
      7,
      10,
      10,
      13,
      13,
      13,
      13,
      13,
      13,
      13,
      13
    ];
    function l(B, n, r, t) {
      var i = W(B, n, r);
      switch (i) {
        case 0:
          return i;
        case 1:
          return f(B, n, r, t);
        case 2:
        case 3:
          return h(
            B,
            n,
            r,
            e[i - 1],
            t
          );
        case 4:
        case 5:
        case 6:
        case 7:
        case 8:
        case 9:
        case 10:
        case 11:
        case 12:
        case 13:
        case 14:
        case 15:
          return w(
            B,
            n,
            r,
            e[i - 1],
            t
          );
        default:
          if (i > $.IXMAX_VAL)
            return t.bits = $.LARGE_BITS, -1;
          i -= 15;
          var u;
          for (u = 24; u < 32 && !(Z.ht[u].linmax >= i); u++)
            ;
          var F;
          for (F = u - 8; F < 24 && !(Z.ht[F].linmax >= i); F++)
            ;
          return M(B, n, r, F, u, t);
      }
    }
    this.noquant_count_bits = function(B, n, r) {
      var t = n.l3_enc, i = Math.min(576, n.max_nonzero_coeff + 2 >> 1 << 1);
      for (r != null && (r.sfb_count1 = 0); i > 1 && !(t[i - 1] | t[i - 2]); i -= 2)
        ;
      n.count1 = i;
      for (var u = 0, F = 0; i > 3; i -= 4) {
        var e1;
        if (((t[i - 1] | t[i - 2] | t[i - 3] | t[i - 4]) & 2147483647) > 1)
          break;
        e1 = ((t[i - 4] * 2 + t[i - 3]) * 2 + t[i - 2]) * 2 + t[i - 1], u += Z.t32l[e1], F += Z.t33l[e1];
      }
      var T = u;
      if (n.count1table_select = 0, u > F && (T = F, n.count1table_select = 1), n.count1bits = T, n.big_values = i, i == 0)
        return T;
      if (n.block_type == D.SHORT_TYPE)
        u = 3 * B.scalefac_band.s[3], u > n.big_values && (u = n.big_values), F = n.big_values;
      else if (n.block_type == D.NORM_TYPE) {
        if (u = n.region0_count = B.bv_scf[i - 2], F = n.region1_count = B.bv_scf[i - 1], K(u + F + 2 < D.SBPSY_l), F = B.scalefac_band.l[u + F + 2], u = B.scalefac_band.l[u + 1], F < i) {
          var q = new m(T);
          n.table_select[2] = l(t, F, i, q), T = q.bits;
        }
      } else
        n.region0_count = 7, n.region1_count = D.SBMAX_l - 1 - 7 - 1, u = B.scalefac_band.l[8], F = i, u > F && (u = F);
      if (u = Math.min(u, i), F = Math.min(F, i), 0 < u) {
        var q = new m(T);
        n.table_select[0] = l(t, 0, u, q), T = q.bits;
      }
      if (u < F) {
        var q = new m(T);
        n.table_select[1] = l(t, u, F, q), T = q.bits;
      }
      if (B.use_best_huffman == 2 && (n.part2_3_length = T, best_huffman_divide(B, n), T = n.part2_3_length), r != null && n.block_type == D.NORM_TYPE) {
        for (var i1 = 0; B.scalefac_band.l[i1] < n.big_values; )
          i1++;
        r.sfb_count1 = i1;
      }
      return T;
    }, this.count_bits = function(B, n, r, t) {
      var i = r.l3_enc, u = $.IXMAX_VAL / g.IPOW20(r.global_gain);
      if (r.xrpow_max > u)
        return $.LARGE_BITS;
      if (r1(n, i, g.IPOW20(r.global_gain), r, t), B.substep_shaping & 2)
        for (var F = 0, e1 = r.global_gain + r.scalefac_scale, T = 0.634521682242439 / g.IPOW20(e1), q = 0; q < r.sfbmax; q++) {
          var i1 = r.width[q];
          if (B.pseudohalf[q] == 0)
            F += i1;
          else {
            var h1;
            for (h1 = F, F += i1; h1 < F; ++h1)
              i[h1] = n[h1] >= T ? i[h1] : 0;
          }
        }
      return this.noquant_count_bits(B, r, t);
    };
    function R(B, n, r, t, i, u, F) {
      for (var e1 = n.big_values, T = 0; T <= 22; T++)
        t[T] = $.LARGE_BITS;
      for (var T = 0; T < 16; T++) {
        var q = B.scalefac_band.l[T + 1];
        if (q >= e1)
          break;
        var i1 = 0, h1 = new m(i1), g1 = l(r, 0, q, h1);
        i1 = h1.bits;
        for (var S1 = 0; S1 < 8; S1++) {
          var v1 = B.scalefac_band.l[T + S1 + 2];
          if (v1 >= e1)
            break;
          var w1 = i1;
          h1 = new m(w1);
          var y1 = l(r, q, v1, h1);
          w1 = h1.bits, t[T + S1] > w1 && (t[T + S1] = w1, i[T + S1] = T, u[T + S1] = g1, F[T + S1] = y1);
        }
      }
    }
    function P(B, n, r, t, i, u, F, e1) {
      for (var T = n.big_values, q = 2; q < D.SBMAX_l + 1; q++) {
        var i1 = B.scalefac_band.l[q];
        if (i1 >= T)
          break;
        var h1 = i[q - 2] + n.count1bits;
        if (r.part2_3_length <= h1)
          break;
        var g1 = new m(h1), S1 = l(t, i1, T, g1);
        h1 = g1.bits, !(r.part2_3_length <= h1) && (r.assign(n), r.part2_3_length = h1, r.region0_count = u[q - 2], r.region1_count = q - 2 - u[q - 2], r.table_select[0] = F[q - 2], r.table_select[1] = e1[q - 2], r.table_select[2] = S1);
      }
    }
    this.best_huffman_divide = function(B, n) {
      var r = new Y(), t = n.l3_enc, i = j(23), u = j(23), F = j(23), e1 = j(23);
      if (!(n.block_type == D.SHORT_TYPE && B.mode_gr == 1)) {
        r.assign(n), n.block_type == D.NORM_TYPE && (R(B, n, t, i, u, F, e1), P(
          B,
          r,
          n,
          t,
          i,
          u,
          F,
          e1
        ));
        var T = r.big_values;
        if (!(T == 0 || (t[T - 2] | t[T - 1]) > 1) && (T = n.count1 + 2, !(T > 576))) {
          r.assign(n), r.count1 = T;
          for (var q = 0, i1 = 0; T > r.big_values; T -= 4) {
            var h1 = ((t[T - 4] * 2 + t[T - 3]) * 2 + t[T - 2]) * 2 + t[T - 1];
            q += Z.t32l[h1], i1 += Z.t33l[h1];
          }
          if (r.big_values = T, r.count1table_select = 0, q > i1 && (q = i1, r.count1table_select = 1), r.count1bits = q, r.block_type == D.NORM_TYPE)
            P(
              B,
              r,
              n,
              t,
              i,
              u,
              F,
              e1
            );
          else {
            if (r.part2_3_length = q, q = B.scalefac_band.l[8], q > T && (q = T), q > 0) {
              var g1 = new m(r.part2_3_length);
              r.table_select[0] = l(t, 0, q, g1), r.part2_3_length = g1.bits;
            }
            if (T > q) {
              var g1 = new m(r.part2_3_length);
              r.table_select[1] = l(t, q, T, g1), r.part2_3_length = g1.bits;
            }
            n.part2_3_length > r.part2_3_length && n.assign(r);
          }
        }
      }
    };
    var O = [1, 1, 1, 1, 8, 2, 2, 2, 4, 4, 4, 8, 8, 8, 16, 16], y = [1, 2, 4, 8, 1, 2, 4, 8, 2, 4, 8, 2, 4, 8, 4, 8], x = [0, 0, 0, 0, 3, 1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4], _1 = [0, 1, 2, 3, 0, 1, 2, 3, 1, 2, 3, 1, 2, 3, 2, 3];
    u1.slen1_tab = x, u1.slen2_tab = _1;
    function b(B, n) {
      for (var r, t = n.tt[1][B], i = n.tt[0][B], u = 0; u < Z.scfsi_band.length - 1; u++) {
        for (r = Z.scfsi_band[u]; r < Z.scfsi_band[u + 1] && !(i.scalefac[r] != t.scalefac[r] && t.scalefac[r] >= 0); r++)
          ;
        if (r == Z.scfsi_band[u + 1]) {
          for (r = Z.scfsi_band[u]; r < Z.scfsi_band[u + 1]; r++)
            t.scalefac[r] = -1;
          n.scfsi[B][u] = 1;
        }
      }
      var F = 0, e1 = 0;
      for (r = 0; r < 11; r++)
        t.scalefac[r] != -1 && (e1++, F < t.scalefac[r] && (F = t.scalefac[r]));
      for (var T = 0, q = 0; r < D.SBPSY_l; r++)
        t.scalefac[r] != -1 && (q++, T < t.scalefac[r] && (T = t.scalefac[r]));
      for (var u = 0; u < 16; u++)
        if (F < O[u] && T < y[u]) {
          var i1 = x[u] * e1 + _1[u] * q;
          t.part2_length > i1 && (t.part2_length = i1, t.scalefac_compress = u);
        }
    }
    this.best_scalefac_store = function(B, n, r, t) {
      var i = t.tt[n][r], u, F, e1, T, q = 0;
      for (e1 = 0, u = 0; u < i.sfbmax; u++) {
        var i1 = i.width[u];
        for (e1 += i1, T = -i1; T < 0 && i.l3_enc[T + e1] == 0; T++)
          ;
        T == 0 && (i.scalefac[u] = q = -2);
      }
      if (i.scalefac_scale == 0 && i.preflag == 0) {
        var h1 = 0;
        for (u = 0; u < i.sfbmax; u++)
          i.scalefac[u] > 0 && (h1 |= i.scalefac[u]);
        if (!(h1 & 1) && h1 != 0) {
          for (u = 0; u < i.sfbmax; u++)
            i.scalefac[u] > 0 && (i.scalefac[u] >>= 1);
          i.scalefac_scale = q = 1;
        }
      }
      if (i.preflag == 0 && i.block_type != D.SHORT_TYPE && B.mode_gr == 2) {
        for (u = 11; u < D.SBPSY_l && !(i.scalefac[u] < g.pretab[u] && i.scalefac[u] != -2); u++)
          ;
        if (u == D.SBPSY_l) {
          for (u = 11; u < D.SBPSY_l; u++)
            i.scalefac[u] > 0 && (i.scalefac[u] -= g.pretab[u]);
          i.preflag = q = 1;
        }
      }
      for (F = 0; F < 4; F++)
        t.scfsi[r][F] = 0;
      for (B.mode_gr == 2 && n == 1 && t.tt[0][r].block_type != D.SHORT_TYPE && t.tt[1][r].block_type != D.SHORT_TYPE && (b(r, t), q = 0), u = 0; u < i.sfbmax; u++)
        i.scalefac[u] == -2 && (i.scalefac[u] = 0);
      q != 0 && (B.mode_gr == 2 ? this.scale_bitcount(i) : this.scale_bitcount_lsf(B, i));
    };
    function a(B, n) {
      for (var r = 0; r < n; ++r)
        if (B[r] < 0)
          return !1;
      return !0;
    }
    var v = [
      0,
      18,
      36,
      54,
      54,
      36,
      54,
      72,
      54,
      72,
      90,
      72,
      90,
      108,
      108,
      126
    ], V = [
      0,
      18,
      36,
      54,
      51,
      35,
      53,
      71,
      52,
      70,
      88,
      69,
      87,
      105,
      104,
      122
    ], L = [
      0,
      10,
      20,
      30,
      33,
      21,
      31,
      41,
      32,
      42,
      52,
      43,
      53,
      63,
      64,
      74
    ];
    this.scale_bitcount = function(B) {
      var n, r, t = 0, i = 0, u, F = B.scalefac;
      if (K(a(F, B.sfbmax)), B.block_type == D.SHORT_TYPE)
        u = v, B.mixed_block_flag != 0 && (u = V);
      else if (u = L, B.preflag == 0) {
        for (r = 11; r < D.SBPSY_l && !(F[r] < g.pretab[r]); r++)
          ;
        if (r == D.SBPSY_l)
          for (B.preflag = 1, r = 11; r < D.SBPSY_l; r++)
            F[r] -= g.pretab[r];
      }
      for (r = 0; r < B.sfbdivide; r++)
        t < F[r] && (t = F[r]);
      for (; r < B.sfbmax; r++)
        i < F[r] && (i = F[r]);
      for (B.part2_length = $.LARGE_BITS, n = 0; n < 16; n++)
        t < O[n] && i < y[n] && B.part2_length > u[n] && (B.part2_length = u[n], B.scalefac_compress = n);
      return B.part2_length == $.LARGE_BITS;
    };
    var I = [
      [15, 15, 7, 7],
      [15, 15, 7, 0],
      [7, 3, 0, 0],
      [15, 31, 31, 0],
      [7, 7, 7, 0],
      [3, 3, 0, 0]
    ];
    this.scale_bitcount_lsf = function(B, n) {
      var r, t, i, u, F, e1, T, q, i1 = j(4), h1 = n.scalefac;
      for (n.preflag != 0 ? r = 2 : r = 0, T = 0; T < 4; T++)
        i1[T] = 0;
      if (n.block_type == D.SHORT_TYPE) {
        t = 1;
        var g1 = g.nr_of_sfb_block[r][t];
        for (q = 0, i = 0; i < 4; i++)
          for (u = g1[i] / 3, T = 0; T < u; T++, q++)
            for (F = 0; F < 3; F++)
              h1[q * 3 + F] > i1[i] && (i1[i] = h1[q * 3 + F]);
      } else {
        t = 0;
        var g1 = g.nr_of_sfb_block[r][t];
        for (q = 0, i = 0; i < 4; i++)
          for (u = g1[i], T = 0; T < u; T++, q++)
            h1[q] > i1[i] && (i1[i] = h1[q]);
      }
      for (e1 = !1, i = 0; i < 4; i++)
        i1[i] > I[r][i] && (e1 = !0);
      if (!e1) {
        var S1, v1, w1, y1;
        for (n.sfb_partition_table = g.nr_of_sfb_block[r][t], i = 0; i < 4; i++)
          n.slen[i] = G[i1[i]];
        switch (S1 = n.slen[0], v1 = n.slen[1], w1 = n.slen[2], y1 = n.slen[3], r) {
          case 0:
            n.scalefac_compress = (S1 * 5 + v1 << 4) + (w1 << 2) + y1;
            break;
          case 1:
            n.scalefac_compress = 400 + (S1 * 5 + v1 << 2) + w1;
            break;
          case 2:
            n.scalefac_compress = 500 + S1 * 3 + v1;
            break;
          default:
            E.err.printf(`intensity stereo not implemented yet
`);
            break;
        }
      }
      if (!e1)
        for (K(n.sfb_partition_table != null), n.part2_length = 0, i = 0; i < 4; i++)
          n.part2_length += n.slen[i] * n.sfb_partition_table[i];
      return e1;
    };
    var G = [
      0,
      1,
      2,
      2,
      3,
      3,
      3,
      3,
      4,
      4,
      4,
      4,
      4,
      4,
      4,
      4
    ];
    this.huffman_init = function(B) {
      for (var n = 2; n <= 576; n += 2) {
        for (var r = 0, t; B.scalefac_band.l[++r] < n; )
          ;
        for (t = N[r][0]; B.scalefac_band.l[t + 1] > n; )
          t--;
        for (t < 0 && (t = N[r][0]), B.bv_scf[n - 2] = t, t = N[r][1]; B.scalefac_band.l[t + B.bv_scf[n - 2] + 2] > n; )
          t--;
        t < 0 && (t = N[r][1]), B.bv_scf[n - 1] = t;
      }
    };
  }
  return Dt = u1, Dt;
}
var Nt, da;
function Zt() {
  if (da)
    return Nt;
  da = 1;
  var p = G1, E = p.System, A = p.Arrays, j = p.new_byte, K = p.new_float_n, D = p.new_int, Z = p.assert, Y = Ua(), $ = zt, u1 = se(), g = dt;
  m.EQ = function(N, n1) {
    return Math.abs(N) > Math.abs(n1) ? Math.abs(N - n1) <= Math.abs(N) * 1e-6 : Math.abs(N - n1) <= Math.abs(n1) * 1e-6;
  }, m.NEQ = function(N, n1) {
    return !m.EQ(N, n1);
  };
  function m() {
    var N = Gt(), n1 = this, U = 32773, r1 = null, W = null, M = null, f = null;
    this.setModules = function(n, r, t, i) {
      r1 = n, W = r, M = t, f = i;
    };
    var h = null, w = 0, e = 0, l = 0;
    this.getframebits = function(n) {
      var r = n.internal_flags, t;
      r.bitrate_index != 0 ? t = $.bitrate_table[n.version][r.bitrate_index] : t = n.brate;
      var i = 0 | (n.version + 1) * 72e3 * t / n.out_samplerate + r.padding;
      return 8 * i;
    };
    function R(n) {
      E.arraycopy(n.header[n.w_ptr].buf, 0, h, e, n.sideinfo_len), e += n.sideinfo_len, w += n.sideinfo_len * 8, n.w_ptr = n.w_ptr + 1 & g.MAX_HEADER_BUF - 1;
    }
    function P(n, r, t) {
      for (; t > 0; ) {
        var i;
        l == 0 && (l = 8, e++, Z(e < N.LAME_MAXMP3BUFFER), Z(n.header[n.w_ptr].write_timing >= w), n.header[n.w_ptr].write_timing == w && R(n), h[e] = 0), i = Math.min(t, l), t -= i, l -= i, h[e] |= r >> t << l, w += i;
      }
    }
    function O(n, r, t) {
      for (; t > 0; ) {
        var i;
        l == 0 && (l = 8, e++, Z(e < N.LAME_MAXMP3BUFFER), h[e] = 0), i = Math.min(t, l), t -= i, l -= i, h[e] |= r >> t << l, w += i;
      }
    }
    function y(n, r) {
      var t = n.internal_flags, i;
      if (r >= 8 && (P(t, 76, 8), r -= 8), r >= 8 && (P(t, 65, 8), r -= 8), r >= 8 && (P(t, 77, 8), r -= 8), r >= 8 && (P(t, 69, 8), r -= 8), r >= 32) {
        var u = M.getLameShortVersion();
        if (r >= 32)
          for (i = 0; i < u.length && r >= 8; ++i)
            r -= 8, P(t, u.charAt(i), 8);
      }
      for (; r >= 1; r -= 1)
        P(t, t.ancillary_flag, 1), t.ancillary_flag ^= n.disable_reservoir ? 0 : 1;
    }
    function x(n, r, t) {
      for (var i = n.header[n.h_ptr].ptr; t > 0; ) {
        var u = Math.min(t, 8 - (i & 7));
        t -= u, n.header[n.h_ptr].buf[i >> 3] |= r >> t << 8 - (i & 7) - u, i += u;
      }
      n.header[n.h_ptr].ptr = i;
    }
    function _1(n, r) {
      n <<= 8;
      for (var t = 0; t < 8; t++)
        n <<= 1, r <<= 1, (r ^ n) & 65536 && (r ^= U);
      return r;
    }
    this.CRC_writeheader = function(n, r) {
      var t = 65535;
      t = _1(r[2] & 255, t), t = _1(r[3] & 255, t);
      for (var i = 6; i < n.sideinfo_len; i++)
        t = _1(r[i] & 255, t);
      r[4] = byte(t >> 8), r[5] = byte(t & 255);
    };
    function b(n, r) {
      var t = n.internal_flags, i, u, F;
      if (i = t.l3_side, t.header[t.h_ptr].ptr = 0, A.fill(t.header[t.h_ptr].buf, 0, t.sideinfo_len, 0), n.out_samplerate < 16e3 ? x(t, 4094, 12) : x(t, 4095, 12), x(t, n.version, 1), x(t, 1, 2), x(t, n.error_protection ? 0 : 1, 1), x(t, t.bitrate_index, 4), x(t, t.samplerate_index, 2), x(t, t.padding, 1), x(t, n.extension, 1), x(t, n.mode.ordinal(), 2), x(t, t.mode_ext, 2), x(t, n.copyright, 1), x(t, n.original, 1), x(t, n.emphasis, 2), n.error_protection && x(t, 0, 16), n.version == 1) {
        for (Z(i.main_data_begin >= 0), x(t, i.main_data_begin, 9), t.channels_out == 2 ? x(t, i.private_bits, 3) : x(t, i.private_bits, 5), F = 0; F < t.channels_out; F++) {
          var e1;
          for (e1 = 0; e1 < 4; e1++)
            x(t, i.scfsi[F][e1], 1);
        }
        for (u = 0; u < 2; u++)
          for (F = 0; F < t.channels_out; F++) {
            var T = i.tt[u][F];
            x(t, T.part2_3_length + T.part2_length, 12), x(t, T.big_values / 2, 9), x(t, T.global_gain, 8), x(t, T.scalefac_compress, 4), T.block_type != u1.NORM_TYPE ? (x(t, 1, 1), x(t, T.block_type, 2), x(t, T.mixed_block_flag, 1), T.table_select[0] == 14 && (T.table_select[0] = 16), x(t, T.table_select[0], 5), T.table_select[1] == 14 && (T.table_select[1] = 16), x(t, T.table_select[1], 5), x(t, T.subblock_gain[0], 3), x(t, T.subblock_gain[1], 3), x(t, T.subblock_gain[2], 3)) : (x(t, 0, 1), T.table_select[0] == 14 && (T.table_select[0] = 16), x(t, T.table_select[0], 5), T.table_select[1] == 14 && (T.table_select[1] = 16), x(t, T.table_select[1], 5), T.table_select[2] == 14 && (T.table_select[2] = 16), x(t, T.table_select[2], 5), Z(0 <= T.region0_count && T.region0_count < 16), Z(0 <= T.region1_count && T.region1_count < 8), x(t, T.region0_count, 4), x(t, T.region1_count, 3)), x(t, T.preflag, 1), x(t, T.scalefac_scale, 1), x(t, T.count1table_select, 1);
          }
      } else
        for (Z(i.main_data_begin >= 0), x(t, i.main_data_begin, 8), x(t, i.private_bits, t.channels_out), u = 0, F = 0; F < t.channels_out; F++) {
          var T = i.tt[u][F];
          x(t, T.part2_3_length + T.part2_length, 12), x(t, T.big_values / 2, 9), x(t, T.global_gain, 8), x(t, T.scalefac_compress, 9), T.block_type != u1.NORM_TYPE ? (x(t, 1, 1), x(t, T.block_type, 2), x(t, T.mixed_block_flag, 1), T.table_select[0] == 14 && (T.table_select[0] = 16), x(t, T.table_select[0], 5), T.table_select[1] == 14 && (T.table_select[1] = 16), x(t, T.table_select[1], 5), x(t, T.subblock_gain[0], 3), x(t, T.subblock_gain[1], 3), x(t, T.subblock_gain[2], 3)) : (x(t, 0, 1), T.table_select[0] == 14 && (T.table_select[0] = 16), x(t, T.table_select[0], 5), T.table_select[1] == 14 && (T.table_select[1] = 16), x(t, T.table_select[1], 5), T.table_select[2] == 14 && (T.table_select[2] = 16), x(t, T.table_select[2], 5), Z(0 <= T.region0_count && T.region0_count < 16), Z(0 <= T.region1_count && T.region1_count < 8), x(t, T.region0_count, 4), x(t, T.region1_count, 3)), x(t, T.scalefac_scale, 1), x(t, T.count1table_select, 1);
        }
      n.error_protection && CRC_writeheader(t, t.header[t.h_ptr].buf);
      {
        var q = t.h_ptr;
        Z(t.header[q].ptr == t.sideinfo_len * 8), t.h_ptr = q + 1 & g.MAX_HEADER_BUF - 1, t.header[t.h_ptr].write_timing = t.header[q].write_timing + r, t.h_ptr == t.w_ptr && E.err.println(`Error: MAX_HEADER_BUF too small in bitstream.c 
`);
      }
    }
    function a(n, r) {
      var t = $.ht[r.count1table_select + 32], i, u = 0, F = r.big_values, e1 = r.big_values;
      for (Z(r.count1table_select < 2), i = (r.count1 - r.big_values) / 4; i > 0; --i) {
        var T = 0, q = 0, i1;
        i1 = r.l3_enc[F + 0], i1 != 0 && (q += 8, r.xr[e1 + 0] < 0 && T++), i1 = r.l3_enc[F + 1], i1 != 0 && (q += 4, T *= 2, r.xr[e1 + 1] < 0 && T++), i1 = r.l3_enc[F + 2], i1 != 0 && (q += 2, T *= 2, r.xr[e1 + 2] < 0 && T++), i1 = r.l3_enc[F + 3], i1 != 0 && (q++, T *= 2, r.xr[e1 + 3] < 0 && T++), F += 4, e1 += 4, P(n, T + t.table[q], t.hlen[q]), u += t.hlen[q];
      }
      return u;
    }
    function v(n, r, t, i, u) {
      var F = $.ht[r], e1 = 0;
      if (r == 0)
        return e1;
      for (var T = t; T < i; T += 2) {
        var q = 0, i1 = 0, h1 = F.xlen, g1 = F.xlen, S1 = 0, v1 = u.l3_enc[T], w1 = u.l3_enc[T + 1];
        if (v1 != 0 && (u.xr[T] < 0 && S1++, q--), r > 15) {
          if (v1 > 14) {
            var y1 = v1 - 15;
            Z(y1 <= F.linmax), S1 |= y1 << 1, i1 = h1, v1 = 15;
          }
          if (w1 > 14) {
            var F1 = w1 - 15;
            Z(F1 <= F.linmax), S1 <<= h1, S1 |= F1, i1 += h1, w1 = 15;
          }
          g1 = 16;
        }
        w1 != 0 && (S1 <<= 1, u.xr[T + 1] < 0 && S1++, q--), v1 = v1 * g1 + w1, i1 -= q, q += F.hlen[v1], P(n, F.table[v1], q), P(n, S1, i1), e1 += q + i1;
      }
      return e1;
    }
    function V(n, r) {
      var t = 3 * n.scalefac_band.s[3];
      t > r.big_values && (t = r.big_values);
      var i = v(n, r.table_select[0], 0, t, r);
      return i += v(
        n,
        r.table_select[1],
        t,
        r.big_values,
        r
      ), i;
    }
    function L(n, r) {
      var t, i, u, F;
      t = r.big_values;
      var e1 = r.region0_count + 1;
      return Z(e1 < n.scalefac_band.l.length), u = n.scalefac_band.l[e1], e1 += r.region1_count + 1, Z(e1 < n.scalefac_band.l.length), F = n.scalefac_band.l[e1], u > t && (u = t), F > t && (F = t), i = v(n, r.table_select[0], 0, u, r), i += v(
        n,
        r.table_select[1],
        u,
        F,
        r
      ), i += v(
        n,
        r.table_select[2],
        F,
        t,
        r
      ), i;
    }
    function I(n) {
      var r, t, i, u, F = 0, e1 = n.internal_flags, T = e1.l3_side;
      if (n.version == 1)
        for (r = 0; r < 2; r++)
          for (t = 0; t < e1.channels_out; t++) {
            var q = T.tt[r][t], i1 = Y.slen1_tab[q.scalefac_compress], h1 = Y.slen2_tab[q.scalefac_compress];
            for (u = 0, i = 0; i < q.sfbdivide; i++)
              q.scalefac[i] != -1 && (P(e1, q.scalefac[i], i1), u += i1);
            for (; i < q.sfbmax; i++)
              q.scalefac[i] != -1 && (P(e1, q.scalefac[i], h1), u += h1);
            Z(u == q.part2_length), q.block_type == u1.SHORT_TYPE ? u += V(e1, q) : u += L(e1, q), u += a(e1, q), Z(u == q.part2_3_length + q.part2_length), F += u;
          }
      else
        for (r = 0, t = 0; t < e1.channels_out; t++) {
          var q = T.tt[r][t], g1, S1, v1 = 0;
          if (Z(q.sfb_partition_table != null), u = 0, i = 0, S1 = 0, q.block_type == u1.SHORT_TYPE) {
            for (; S1 < 4; S1++) {
              var w1 = q.sfb_partition_table[S1] / 3, y1 = q.slen[S1];
              for (g1 = 0; g1 < w1; g1++, i++)
                P(
                  e1,
                  Math.max(q.scalefac[i * 3 + 0], 0),
                  y1
                ), P(
                  e1,
                  Math.max(q.scalefac[i * 3 + 1], 0),
                  y1
                ), P(
                  e1,
                  Math.max(q.scalefac[i * 3 + 2], 0),
                  y1
                ), v1 += 3 * y1;
            }
            u += V(e1, q);
          } else {
            for (; S1 < 4; S1++) {
              var w1 = q.sfb_partition_table[S1], y1 = q.slen[S1];
              for (g1 = 0; g1 < w1; g1++, i++)
                P(e1, Math.max(q.scalefac[i], 0), y1), v1 += y1;
            }
            u += L(e1, q);
          }
          u += a(e1, q), Z(u == q.part2_3_length), Z(v1 == q.part2_length), F += v1 + u;
        }
      return F;
    }
    function G() {
      this.total = 0;
    }
    function B(n, r) {
      var t = n.internal_flags, i, u, F, e1, T;
      return T = t.w_ptr, e1 = t.h_ptr - 1, e1 == -1 && (e1 = g.MAX_HEADER_BUF - 1), i = t.header[e1].write_timing - w, r.total = i, i >= 0 && (u = 1 + e1 - T, e1 < T && (u = 1 + e1 - T + g.MAX_HEADER_BUF), i -= u * 8 * t.sideinfo_len), F = n1.getframebits(n), i += F, r.total += F, r.total % 8 != 0 ? r.total = 1 + r.total / 8 : r.total = r.total / 8, r.total += e + 1, i < 0 && E.err.println(`strange error flushing buffer ... 
`), i;
    }
    this.flush_bitstream = function(n) {
      var r = n.internal_flags, t, i, u = r.h_ptr - 1;
      if (u == -1 && (u = g.MAX_HEADER_BUF - 1), t = r.l3_side, !((i = B(n, new G())) < 0)) {
        if (y(n, i), Z(r.header[u].write_timing + this.getframebits(n) == w), r.ResvSize = 0, t.main_data_begin = 0, r.findReplayGain) {
          var F = r1.GetTitleGain(r.rgdata);
          Z(NEQ(F, GainAnalysis.GAIN_NOT_ENOUGH_SAMPLES)), r.RadioGain = Math.floor(F * 10 + 0.5) | 0;
        }
        r.findPeakSample && (r.noclipGainChange = Math.ceil(Math.log10(r.PeakSample / 32767) * 20 * 10) | 0, r.noclipGainChange > 0 && (EQ(n.scale, 1) || EQ(n.scale, 0)) ? r.noclipScale = Math.floor(32767 / r.PeakSample * 100) / 100 : r.noclipScale = -1);
      }
    }, this.add_dummy_byte = function(n, r, t) {
      for (var i = n.internal_flags, u; t-- > 0; )
        for (O(i, r, 8), u = 0; u < g.MAX_HEADER_BUF; ++u)
          i.header[u].write_timing += 8;
    }, this.format_bitstream = function(n) {
      var r = n.internal_flags, t;
      t = r.l3_side;
      var i = this.getframebits(n);
      y(n, t.resvDrain_pre), b(n, i);
      var u = 8 * r.sideinfo_len;
      if (u += I(n), y(n, t.resvDrain_post), u += t.resvDrain_post, t.main_data_begin += (i - u) / 8, B(n, new G()) != r.ResvSize && E.err.println("Internal buffer inconsistency. flushbits <> ResvSize"), t.main_data_begin * 8 != r.ResvSize && (E.err.printf(
        `bit reservoir error: 
l3_side.main_data_begin: %d 
Resvoir size:             %d 
resv drain (post)         %d 
resv drain (pre)          %d 
header and sideinfo:      %d 
data bits:                %d 
total bits:               %d (remainder: %d) 
bitsperframe:             %d 
`,
        8 * t.main_data_begin,
        r.ResvSize,
        t.resvDrain_post,
        t.resvDrain_pre,
        8 * r.sideinfo_len,
        u - t.resvDrain_post - 8 * r.sideinfo_len,
        u,
        u % 8,
        i
      ), E.err.println("This is a fatal error.  It has several possible causes:"), E.err.println("90%%  LAME compiled with buggy version of gcc using advanced optimizations"), E.err.println(" 9%%  Your system is overclocked"), E.err.println(" 1%%  bug in LAME encoding library"), r.ResvSize = t.main_data_begin * 8), w > 1e9) {
        var F;
        for (F = 0; F < g.MAX_HEADER_BUF; ++F)
          r.header[F].write_timing -= w;
        w = 0;
      }
      return 0;
    }, this.copy_buffer = function(n, r, t, i, u) {
      var F = e + 1;
      if (F <= 0)
        return 0;
      if (i != 0 && F > i)
        return -1;
      if (E.arraycopy(h, 0, r, t, F), e = -1, l = 0, u != 0) {
        var e1 = D(1);
        if (e1[0] = n.nMusicCRC, f.updateMusicCRC(e1, r, t, F), n.nMusicCRC = e1[0], F > 0 && (n.VBR_seek_table.nBytesWritten += F), n.decode_on_the_fly) {
          for (var T = K([2, 1152]), q = F, i1 = -1, h1; i1 != 0; )
            if (i1 = W.hip_decode1_unclipped(
              n.hip,
              r,
              t,
              q,
              T[0],
              T[1]
            ), q = 0, i1 == -1 && (i1 = 0), i1 > 0) {
              if (n.findPeakSample) {
                for (h1 = 0; h1 < i1; h1++)
                  T[0][h1] > n.PeakSample ? n.PeakSample = T[0][h1] : -T[0][h1] > n.PeakSample && (n.PeakSample = -T[0][h1]);
                if (n.channels_out > 1)
                  for (h1 = 0; h1 < i1; h1++)
                    T[1][h1] > n.PeakSample ? n.PeakSample = T[1][h1] : -T[1][h1] > n.PeakSample && (n.PeakSample = -T[1][h1]);
              }
              if (n.findReplayGain && r1.AnalyzeSamples(
                n.rgdata,
                T[0],
                0,
                T[1],
                0,
                i1,
                n.channels_out
              ) == GainAnalysis.GAIN_ANALYSIS_ERROR)
                return -6;
            }
        }
      }
      return F;
    }, this.init_bit_stream_w = function(n) {
      h = j(N.LAME_MAXMP3BUFFER), n.h_ptr = n.w_ptr = 0, n.header[n.h_ptr].write_timing = 0, e = -1, l = 0, w = 0;
    };
  }
  return Nt = m, Nt;
}
var Xt, ga;
function Gt() {
  if (ga)
    return Xt;
  ga = 1;
  var p = G1, E = p.System, A = p.VbrMode, j = p.ShortBlock, K = p.new_float, D = p.new_int_n, Z = p.new_short_n, Y = p.assert, $ = Ds, u1 = Os, g = dt, m = o0, N = f0, n1 = d0, U = Zt(), r1 = zt, W = se();
  function M() {
    var f = nt, h = this, w = 128 * 1024;
    M.V9 = 410, M.V8 = 420, M.V7 = 430, M.V6 = 440, M.V5 = 450, M.V4 = 460, M.V3 = 470, M.V2 = 480, M.V1 = 490, M.V0 = 500, M.R3MIX = 1e3, M.STANDARD = 1001, M.EXTREME = 1002, M.INSANE = 1003, M.STANDARD_FAST = 1004, M.EXTREME_FAST = 1005, M.MEDIUM = 1006, M.MEDIUM_FAST = 1007;
    var e = 16384 + w;
    M.LAME_MAXMP3BUFFER = e;
    var l, R, P, O, y, x = new $(), _1, b, a;
    this.enc = new W(), this.setModules = function(s, _, d1, R1, I1, k1, T1, A1, L1) {
      l = s, R = _, P = d1, O = R1, y = I1, _1 = k1, b = A1, a = L1, this.enc.setModules(R, x, O, _1);
    };
    function v() {
      this.mask_adjust = 0, this.mask_adjust_short = 0, this.bo_l_weight = K(W.SBMAX_l), this.bo_s_weight = K(W.SBMAX_s);
    }
    function V() {
      this.lowerlimit = 0;
    }
    function L(s, _) {
      this.lowpass = _;
    }
    var I = 4294479419;
    function G(s) {
      var _;
      return s.class_id = I, _ = s.internal_flags = new g(), s.mode = f.NOT_SET, s.original = 1, s.in_samplerate = 44100, s.num_channels = 2, s.num_samples = -1, s.bWriteVbrTag = !0, s.quality = -1, s.short_blocks = null, _.subblock_gain = -1, s.lowpassfreq = 0, s.highpassfreq = 0, s.lowpasswidth = -1, s.highpasswidth = -1, s.VBR = A.vbr_off, s.VBR_q = 4, s.ATHcurve = -1, s.VBR_mean_bitrate_kbps = 128, s.VBR_min_bitrate_kbps = 0, s.VBR_max_bitrate_kbps = 0, s.VBR_hard_min = 0, _.VBR_min_bitrate = 1, _.VBR_max_bitrate = 13, s.quant_comp = -1, s.quant_comp_short = -1, s.msfix = -1, _.resample_ratio = 1, _.OldValue[0] = 180, _.OldValue[1] = 180, _.CurrentStep[0] = 4, _.CurrentStep[1] = 4, _.masking_lower = 1, _.nsPsy.attackthre = -1, _.nsPsy.attackthre_s = -1, s.scale = -1, s.athaa_type = -1, s.ATHtype = -1, s.athaa_loudapprox = -1, s.athaa_sensitivity = 0, s.useTemporal = null, s.interChRatio = -1, _.mf_samples_to_encode = W.ENCDELAY + W.POSTDELAY, s.encoder_padding = 0, _.mf_size = W.ENCDELAY - W.MDCTDELAY, s.findReplayGain = !1, s.decode_on_the_fly = !1, _.decode_on_the_fly = !1, _.findReplayGain = !1, _.findPeakSample = !1, _.RadioGain = 0, _.AudiophileGain = 0, _.noclipGainChange = 0, _.noclipScale = -1, s.preset = 0, s.write_id3tag_automatic = !0, 0;
    }
    this.lame_init = function() {
      var s = new u1();
      return G(s), s.lame_allocated_gfp = 1, s;
    };
    function B(s) {
      return s > 1 ? 0 : s <= 0 ? 1 : Math.cos(Math.PI / 2 * s);
    }
    this.nearestBitrateFullIndex = function(s) {
      var _ = [
        8,
        16,
        24,
        32,
        40,
        48,
        56,
        64,
        80,
        96,
        112,
        128,
        160,
        192,
        224,
        256,
        320
      ], d1 = 0, R1 = 0, I1 = 0, k1 = 0;
      k1 = _[16], I1 = 16, R1 = _[16], d1 = 16;
      for (var T1 = 0; T1 < 16; T1++)
        if (Math.max(s, _[T1 + 1]) != s) {
          k1 = _[T1 + 1], I1 = T1 + 1, R1 = _[T1], d1 = T1;
          break;
        }
      return k1 - s > s - R1 ? d1 : I1;
    };
    function n(s, _) {
      var d1 = 44100;
      return _ >= 48e3 ? d1 = 48e3 : _ >= 44100 ? d1 = 44100 : _ >= 32e3 ? d1 = 32e3 : _ >= 24e3 ? d1 = 24e3 : _ >= 22050 ? d1 = 22050 : _ >= 16e3 ? d1 = 16e3 : _ >= 12e3 ? d1 = 12e3 : _ >= 11025 ? d1 = 11025 : _ >= 8e3 && (d1 = 8e3), s == -1 ? d1 : (s <= 15960 && (d1 = 44100), s <= 15250 && (d1 = 32e3), s <= 11220 && (d1 = 24e3), s <= 9970 && (d1 = 22050), s <= 7230 && (d1 = 16e3), s <= 5420 && (d1 = 12e3), s <= 4510 && (d1 = 11025), s <= 3970 && (d1 = 8e3), _ < d1 ? _ > 44100 ? 48e3 : _ > 32e3 ? 44100 : _ > 24e3 ? 32e3 : _ > 22050 ? 24e3 : _ > 16e3 ? 22050 : _ > 12e3 ? 16e3 : _ > 11025 ? 12e3 : _ > 8e3 ? 11025 : 8e3 : d1);
    }
    function r(s, _) {
      switch (s) {
        case 44100:
          return _.version = 1, 0;
        case 48e3:
          return _.version = 1, 1;
        case 32e3:
          return _.version = 1, 2;
        case 22050:
          return _.version = 0, 0;
        case 24e3:
          return _.version = 0, 1;
        case 16e3:
          return _.version = 0, 2;
        case 11025:
          return _.version = 0, 0;
        case 12e3:
          return _.version = 0, 1;
        case 8e3:
          return _.version = 0, 2;
        default:
          return _.version = 0, -1;
      }
    }
    function t(s, _, d1) {
      d1 < 16e3 && (_ = 2);
      for (var R1 = r1.bitrate_table[_][1], I1 = 2; I1 <= 14; I1++)
        r1.bitrate_table[_][I1] > 0 && Math.abs(r1.bitrate_table[_][I1] - s) < Math.abs(R1 - s) && (R1 = r1.bitrate_table[_][I1]);
      return R1;
    }
    function i(s, _, d1) {
      d1 < 16e3 && (_ = 2);
      for (var R1 = 0; R1 <= 14; R1++)
        if (r1.bitrate_table[_][R1] > 0 && r1.bitrate_table[_][R1] == s)
          return R1;
      return -1;
    }
    function u(s, _) {
      var d1 = [
        new L(8, 2e3),
        new L(16, 3700),
        new L(24, 3900),
        new L(32, 5500),
        new L(40, 7e3),
        new L(48, 7500),
        new L(56, 1e4),
        new L(64, 11e3),
        new L(80, 13500),
        new L(96, 15100),
        new L(112, 15600),
        new L(128, 17e3),
        new L(160, 17500),
        new L(192, 18600),
        new L(224, 19400),
        new L(256, 19700),
        new L(320, 20500)
      ], R1 = h.nearestBitrateFullIndex(_);
      s.lowerlimit = d1[R1].lowpass;
    }
    function F(s) {
      var _ = s.internal_flags, d1 = 32, R1 = -1;
      if (_.lowpass1 > 0) {
        for (var I1 = 999, k1 = 0; k1 <= 31; k1++) {
          var T1 = k1 / 31;
          T1 >= _.lowpass2 && (d1 = Math.min(d1, k1)), _.lowpass1 < T1 && T1 < _.lowpass2 && (I1 = Math.min(I1, k1));
        }
        I1 == 999 ? _.lowpass1 = (d1 - 0.75) / 31 : _.lowpass1 = (I1 - 0.75) / 31, _.lowpass2 = d1 / 31;
      }
      if (_.highpass2 > 0 && _.highpass2 < 0.9 * (0.75 / 31) && (_.highpass1 = 0, _.highpass2 = 0, E.err.println(`Warning: highpass filter disabled.  highpass frequency too small
`)), _.highpass2 > 0) {
        for (var A1 = -1, k1 = 0; k1 <= 31; k1++) {
          var T1 = k1 / 31;
          T1 <= _.highpass1 && (R1 = Math.max(R1, k1)), _.highpass1 < T1 && T1 < _.highpass2 && (A1 = Math.max(A1, k1));
        }
        _.highpass1 = R1 / 31, A1 == -1 ? _.highpass2 = (R1 + 0.75) / 31 : _.highpass2 = (A1 + 0.75) / 31;
      }
      for (var k1 = 0; k1 < 32; k1++) {
        var L1, P1, T1 = k1 / 31;
        _.highpass2 > _.highpass1 ? L1 = B((_.highpass2 - T1) / (_.highpass2 - _.highpass1 + 1e-20)) : L1 = 1, _.lowpass2 > _.lowpass1 ? P1 = B((T1 - _.lowpass1) / (_.lowpass2 - _.lowpass1 + 1e-20)) : P1 = 1, _.amp_filter[k1] = L1 * P1;
      }
    }
    function e1(s) {
      var _ = s.internal_flags;
      switch (s.quality) {
        default:
        case 9:
          _.psymodel = 0, _.noise_shaping = 0, _.noise_shaping_amp = 0, _.noise_shaping_stop = 0, _.use_best_huffman = 0, _.full_outer_loop = 0;
          break;
        case 8:
          s.quality = 7;
        case 7:
          _.psymodel = 1, _.noise_shaping = 0, _.noise_shaping_amp = 0, _.noise_shaping_stop = 0, _.use_best_huffman = 0, _.full_outer_loop = 0;
          break;
        case 6:
          _.psymodel = 1, _.noise_shaping == 0 && (_.noise_shaping = 1), _.noise_shaping_amp = 0, _.noise_shaping_stop = 0, _.subblock_gain == -1 && (_.subblock_gain = 1), _.use_best_huffman = 0, _.full_outer_loop = 0;
          break;
        case 5:
          _.psymodel = 1, _.noise_shaping == 0 && (_.noise_shaping = 1), _.noise_shaping_amp = 0, _.noise_shaping_stop = 0, _.subblock_gain == -1 && (_.subblock_gain = 1), _.use_best_huffman = 0, _.full_outer_loop = 0;
          break;
        case 4:
          _.psymodel = 1, _.noise_shaping == 0 && (_.noise_shaping = 1), _.noise_shaping_amp = 0, _.noise_shaping_stop = 0, _.subblock_gain == -1 && (_.subblock_gain = 1), _.use_best_huffman = 1, _.full_outer_loop = 0;
          break;
        case 3:
          _.psymodel = 1, _.noise_shaping == 0 && (_.noise_shaping = 1), _.noise_shaping_amp = 1, _.noise_shaping_stop = 1, _.subblock_gain == -1 && (_.subblock_gain = 1), _.use_best_huffman = 1, _.full_outer_loop = 0;
          break;
        case 2:
          _.psymodel = 1, _.noise_shaping == 0 && (_.noise_shaping = 1), _.substep_shaping == 0 && (_.substep_shaping = 2), _.noise_shaping_amp = 1, _.noise_shaping_stop = 1, _.subblock_gain == -1 && (_.subblock_gain = 1), _.use_best_huffman = 1, _.full_outer_loop = 0;
          break;
        case 1:
          _.psymodel = 1, _.noise_shaping == 0 && (_.noise_shaping = 1), _.substep_shaping == 0 && (_.substep_shaping = 2), _.noise_shaping_amp = 2, _.noise_shaping_stop = 1, _.subblock_gain == -1 && (_.subblock_gain = 1), _.use_best_huffman = 1, _.full_outer_loop = 0;
          break;
        case 0:
          _.psymodel = 1, _.noise_shaping == 0 && (_.noise_shaping = 1), _.substep_shaping == 0 && (_.substep_shaping = 2), _.noise_shaping_amp = 2, _.noise_shaping_stop = 1, _.subblock_gain == -1 && (_.subblock_gain = 1), _.use_best_huffman = 1, _.full_outer_loop = 0;
          break;
      }
    }
    function T(s) {
      var _ = s.internal_flags;
      s.frameNum = 0, s.write_id3tag_automatic && b.id3tag_write_v2(s), _.bitrate_stereoMode_Hist = D([16, 5]), _.bitrate_blockType_Hist = D([16, 6]), _.PeakSample = 0, s.bWriteVbrTag && _1.InitVbrTag(s);
    }
    this.lame_init_params = function(s) {
      var _ = s.internal_flags;
      if (_.Class_ID = 0, _.ATH == null && (_.ATH = new m()), _.PSY == null && (_.PSY = new v()), _.rgdata == null && (_.rgdata = new N()), _.channels_in = s.num_channels, _.channels_in == 1 && (s.mode = f.MONO), _.channels_out = s.mode == f.MONO ? 1 : 2, _.mode_ext = W.MPG_MD_MS_LR, s.mode == f.MONO && (s.force_ms = !1), s.VBR == A.vbr_off && s.VBR_mean_bitrate_kbps != 128 && s.brate == 0 && (s.brate = s.VBR_mean_bitrate_kbps), s.VBR == A.vbr_off || s.VBR == A.vbr_mtrh || s.VBR == A.vbr_mt || (s.free_format = !1), s.VBR == A.vbr_off && s.brate == 0 && U.EQ(s.compression_ratio, 0) && (s.compression_ratio = 11.025), s.VBR == A.vbr_off && s.compression_ratio > 0 && (s.out_samplerate == 0 && (s.out_samplerate = map2MP3Frequency(int(0.97 * s.in_samplerate))), s.brate = 0 | s.out_samplerate * 16 * _.channels_out / (1e3 * s.compression_ratio), _.samplerate_index = r(s.out_samplerate, s), s.free_format || (s.brate = t(
        s.brate,
        s.version,
        s.out_samplerate
      ))), s.out_samplerate != 0 && (s.out_samplerate < 16e3 ? (s.VBR_mean_bitrate_kbps = Math.max(
        s.VBR_mean_bitrate_kbps,
        8
      ), s.VBR_mean_bitrate_kbps = Math.min(
        s.VBR_mean_bitrate_kbps,
        64
      )) : s.out_samplerate < 32e3 ? (s.VBR_mean_bitrate_kbps = Math.max(
        s.VBR_mean_bitrate_kbps,
        8
      ), s.VBR_mean_bitrate_kbps = Math.min(
        s.VBR_mean_bitrate_kbps,
        160
      )) : (s.VBR_mean_bitrate_kbps = Math.max(
        s.VBR_mean_bitrate_kbps,
        32
      ), s.VBR_mean_bitrate_kbps = Math.min(
        s.VBR_mean_bitrate_kbps,
        320
      ))), s.lowpassfreq == 0) {
        var d1 = 16e3;
        switch (s.VBR) {
          case A.vbr_off: {
            var R1 = new V();
            u(R1, s.brate), d1 = R1.lowerlimit;
            break;
          }
          case A.vbr_abr: {
            var R1 = new V();
            u(R1, s.VBR_mean_bitrate_kbps), d1 = R1.lowerlimit;
            break;
          }
          case A.vbr_rh: {
            var I1 = [
              19500,
              19e3,
              18600,
              18e3,
              17500,
              16e3,
              15600,
              14900,
              12500,
              1e4,
              3950
            ];
            if (0 <= s.VBR_q && s.VBR_q <= 9) {
              var k1 = I1[s.VBR_q], T1 = I1[s.VBR_q + 1], A1 = s.VBR_q_frac;
              d1 = linear_int(k1, T1, A1);
            } else
              d1 = 19500;
            break;
          }
          default: {
            var I1 = [
              19500,
              19e3,
              18500,
              18e3,
              17500,
              16500,
              15500,
              14500,
              12500,
              9500,
              3950
            ];
            if (0 <= s.VBR_q && s.VBR_q <= 9) {
              var k1 = I1[s.VBR_q], T1 = I1[s.VBR_q + 1], A1 = s.VBR_q_frac;
              d1 = linear_int(k1, T1, A1);
            } else
              d1 = 19500;
          }
        }
        s.mode == f.MONO && (s.VBR == A.vbr_off || s.VBR == A.vbr_abr) && (d1 *= 1.5), s.lowpassfreq = d1 | 0;
      }
      if (s.out_samplerate == 0 && (2 * s.lowpassfreq > s.in_samplerate && (s.lowpassfreq = s.in_samplerate / 2), s.out_samplerate = n(
        s.lowpassfreq | 0,
        s.in_samplerate
      )), s.lowpassfreq = Math.min(20500, s.lowpassfreq), s.lowpassfreq = Math.min(s.out_samplerate / 2, s.lowpassfreq), s.VBR == A.vbr_off && (s.compression_ratio = s.out_samplerate * 16 * _.channels_out / (1e3 * s.brate)), s.VBR == A.vbr_abr && (s.compression_ratio = s.out_samplerate * 16 * _.channels_out / (1e3 * s.VBR_mean_bitrate_kbps)), s.bWriteVbrTag || (s.findReplayGain = !1, s.decode_on_the_fly = !1, _.findPeakSample = !1), _.findReplayGain = s.findReplayGain, _.decode_on_the_fly = s.decode_on_the_fly, _.decode_on_the_fly && (_.findPeakSample = !0), _.findReplayGain && l.InitGainAnalysis(_.rgdata, s.out_samplerate) == GainAnalysis.INIT_GAIN_ANALYSIS_ERROR)
        return s.internal_flags = null, -6;
      switch (_.decode_on_the_fly && !s.decode_only && (_.hip != null && a.hip_decode_exit(_.hip), _.hip = a.hip_decode_init()), _.mode_gr = s.out_samplerate <= 24e3 ? 1 : 2, s.framesize = 576 * _.mode_gr, s.encoder_delay = W.ENCDELAY, _.resample_ratio = s.in_samplerate / s.out_samplerate, s.VBR) {
        case A.vbr_mt:
        case A.vbr_rh:
        case A.vbr_mtrh:
          {
            var L1 = [
              5.7,
              6.5,
              7.3,
              8.2,
              10,
              11.9,
              13,
              14,
              15,
              16.5
            ];
            s.compression_ratio = L1[s.VBR_q];
          }
          break;
        case A.vbr_abr:
          s.compression_ratio = s.out_samplerate * 16 * _.channels_out / (1e3 * s.VBR_mean_bitrate_kbps);
          break;
        default:
          s.compression_ratio = s.out_samplerate * 16 * _.channels_out / (1e3 * s.brate);
          break;
      }
      if (s.mode == f.NOT_SET && (s.mode = f.JOINT_STEREO), s.highpassfreq > 0 ? (_.highpass1 = 2 * s.highpassfreq, s.highpasswidth >= 0 ? _.highpass2 = 2 * (s.highpassfreq + s.highpasswidth) : _.highpass2 = 1 * 2 * s.highpassfreq, _.highpass1 /= s.out_samplerate, _.highpass2 /= s.out_samplerate) : (_.highpass1 = 0, _.highpass2 = 0), s.lowpassfreq > 0 ? (_.lowpass2 = 2 * s.lowpassfreq, s.lowpasswidth >= 0 ? (_.lowpass1 = 2 * (s.lowpassfreq - s.lowpasswidth), _.lowpass1 < 0 && (_.lowpass1 = 0)) : _.lowpass1 = 1 * 2 * s.lowpassfreq, _.lowpass1 /= s.out_samplerate, _.lowpass2 /= s.out_samplerate) : (_.lowpass1 = 0, _.lowpass2 = 0), F(s), _.samplerate_index = r(s.out_samplerate, s), _.samplerate_index < 0)
        return s.internal_flags = null, -1;
      if (s.VBR == A.vbr_off) {
        if (s.free_format)
          _.bitrate_index = 0;
        else if (s.brate = t(
          s.brate,
          s.version,
          s.out_samplerate
        ), _.bitrate_index = i(
          s.brate,
          s.version,
          s.out_samplerate
        ), _.bitrate_index <= 0)
          return s.internal_flags = null, -1;
      } else
        _.bitrate_index = 1;
      s.analysis && (s.bWriteVbrTag = !1), _.pinfo != null && (s.bWriteVbrTag = !1), R.init_bit_stream_w(_);
      for (var P1 = _.samplerate_index + 3 * s.version + 6 * (s.out_samplerate < 16e3 ? 1 : 0), m1 = 0; m1 < W.SBMAX_l + 1; m1++)
        _.scalefac_band.l[m1] = O.sfBandIndex[P1].l[m1];
      for (var m1 = 0; m1 < W.PSFB21 + 1; m1++) {
        var Y1 = (_.scalefac_band.l[22] - _.scalefac_band.l[21]) / W.PSFB21, Q1 = _.scalefac_band.l[21] + m1 * Y1;
        _.scalefac_band.psfb21[m1] = Q1;
      }
      _.scalefac_band.psfb21[W.PSFB21] = 576;
      for (var m1 = 0; m1 < W.SBMAX_s + 1; m1++)
        _.scalefac_band.s[m1] = O.sfBandIndex[P1].s[m1];
      for (var m1 = 0; m1 < W.PSFB12 + 1; m1++) {
        var Y1 = (_.scalefac_band.s[13] - _.scalefac_band.s[12]) / W.PSFB12, Q1 = _.scalefac_band.s[12] + m1 * Y1;
        _.scalefac_band.psfb12[m1] = Q1;
      }
      _.scalefac_band.psfb12[W.PSFB12] = 192, s.version == 1 ? _.sideinfo_len = _.channels_out == 1 ? 21 : 36 : _.sideinfo_len = _.channels_out == 1 ? 13 : 21, s.error_protection && (_.sideinfo_len += 2), T(s), _.Class_ID = I;
      {
        var o;
        for (o = 0; o < 19; o++)
          _.nsPsy.pefirbuf[o] = 700 * _.mode_gr * _.channels_out;
        s.ATHtype == -1 && (s.ATHtype = 4);
      }
      switch (Y(s.VBR_q <= 9), Y(s.VBR_q >= 0), s.VBR) {
        case A.vbr_mt:
          s.VBR = A.vbr_mtrh;
        case A.vbr_mtrh: {
          s.useTemporal == null && (s.useTemporal = !1), P.apply_preset(s, 500 - s.VBR_q * 10, 0), s.quality < 0 && (s.quality = LAME_DEFAULT_QUALITY), s.quality < 5 && (s.quality = 0), s.quality > 5 && (s.quality = 5), _.PSY.mask_adjust = s.maskingadjust, _.PSY.mask_adjust_short = s.maskingadjust_short, s.experimentalY ? _.sfb21_extra = !1 : _.sfb21_extra = s.out_samplerate > 44e3, _.iteration_loop = new VBRNewIterationLoop(y);
          break;
        }
        case A.vbr_rh: {
          P.apply_preset(s, 500 - s.VBR_q * 10, 0), _.PSY.mask_adjust = s.maskingadjust, _.PSY.mask_adjust_short = s.maskingadjust_short, s.experimentalY ? _.sfb21_extra = !1 : _.sfb21_extra = s.out_samplerate > 44e3, s.quality > 6 && (s.quality = 6), s.quality < 0 && (s.quality = LAME_DEFAULT_QUALITY), _.iteration_loop = new VBROldIterationLoop(y);
          break;
        }
        default: {
          var c;
          _.sfb21_extra = !1, s.quality < 0 && (s.quality = LAME_DEFAULT_QUALITY), c = s.VBR, c == A.vbr_off && (s.VBR_mean_bitrate_kbps = s.brate), P.apply_preset(s, s.VBR_mean_bitrate_kbps, 0), s.VBR = c, _.PSY.mask_adjust = s.maskingadjust, _.PSY.mask_adjust_short = s.maskingadjust_short, c == A.vbr_off ? _.iteration_loop = new n1(y) : _.iteration_loop = new ABRIterationLoop(y);
          break;
        }
      }
      if (Y(s.scale >= 0), s.VBR != A.vbr_off) {
        if (_.VBR_min_bitrate = 1, _.VBR_max_bitrate = 14, s.out_samplerate < 16e3 && (_.VBR_max_bitrate = 8), s.VBR_min_bitrate_kbps != 0 && (s.VBR_min_bitrate_kbps = t(
          s.VBR_min_bitrate_kbps,
          s.version,
          s.out_samplerate
        ), _.VBR_min_bitrate = i(
          s.VBR_min_bitrate_kbps,
          s.version,
          s.out_samplerate
        ), _.VBR_min_bitrate < 0) || s.VBR_max_bitrate_kbps != 0 && (s.VBR_max_bitrate_kbps = t(
          s.VBR_max_bitrate_kbps,
          s.version,
          s.out_samplerate
        ), _.VBR_max_bitrate = i(
          s.VBR_max_bitrate_kbps,
          s.version,
          s.out_samplerate
        ), _.VBR_max_bitrate < 0))
          return -1;
        s.VBR_min_bitrate_kbps = r1.bitrate_table[s.version][_.VBR_min_bitrate], s.VBR_max_bitrate_kbps = r1.bitrate_table[s.version][_.VBR_max_bitrate], s.VBR_mean_bitrate_kbps = Math.min(
          r1.bitrate_table[s.version][_.VBR_max_bitrate],
          s.VBR_mean_bitrate_kbps
        ), s.VBR_mean_bitrate_kbps = Math.max(
          r1.bitrate_table[s.version][_.VBR_min_bitrate],
          s.VBR_mean_bitrate_kbps
        );
      }
      return s.tune && (_.PSY.mask_adjust += s.tune_value_a, _.PSY.mask_adjust_short += s.tune_value_a), e1(s), Y(s.scale >= 0), s.athaa_type < 0 ? _.ATH.useAdjust = 3 : _.ATH.useAdjust = s.athaa_type, _.ATH.aaSensitivityP = Math.pow(10, s.athaa_sensitivity / -10), s.short_blocks == null && (s.short_blocks = j.short_block_allowed), s.short_blocks == j.short_block_allowed && (s.mode == f.JOINT_STEREO || s.mode == f.STEREO) && (s.short_blocks = j.short_block_coupled), s.quant_comp < 0 && (s.quant_comp = 1), s.quant_comp_short < 0 && (s.quant_comp_short = 0), s.msfix < 0 && (s.msfix = 0), s.exp_nspsytune = s.exp_nspsytune | 1, s.internal_flags.nsPsy.attackthre < 0 && (s.internal_flags.nsPsy.attackthre = $.NSATTACKTHRE), s.internal_flags.nsPsy.attackthre_s < 0 && (s.internal_flags.nsPsy.attackthre_s = $.NSATTACKTHRE_S), Y(s.scale >= 0), s.scale < 0 && (s.scale = 1), s.ATHtype < 0 && (s.ATHtype = 4), s.ATHcurve < 0 && (s.ATHcurve = 4), s.athaa_loudapprox < 0 && (s.athaa_loudapprox = 2), s.interChRatio < 0 && (s.interChRatio = 0), s.useTemporal == null && (s.useTemporal = !0), _.slot_lag = _.frac_SpF = 0, s.VBR == A.vbr_off && (_.slot_lag = _.frac_SpF = (s.version + 1) * 72e3 * s.brate % s.out_samplerate | 0), O.iteration_init(s), x.psymodel_init(s), Y(s.scale >= 0), 0;
    };
    function q(s, _) {
      (s.in_buffer_0 == null || s.in_buffer_nsamples < _) && (s.in_buffer_0 = K(_), s.in_buffer_1 = K(_), s.in_buffer_nsamples = _);
    }
    this.lame_encode_flush = function(s, _, d1, R1) {
      var I1 = s.internal_flags, k1 = Z([2, 1152]), T1 = 0, A1, L1, P1, m1, Y1 = I1.mf_samples_to_encode - W.POSTDELAY, Q1 = i1(s);
      if (I1.mf_samples_to_encode < 1)
        return 0;
      for (A1 = 0, s.in_samplerate != s.out_samplerate && (Y1 += 16 * s.out_samplerate / s.in_samplerate), P1 = s.framesize - Y1 % s.framesize, P1 < 576 && (P1 += s.framesize), s.encoder_padding = P1, m1 = (Y1 + P1) / s.framesize; m1 > 0 && T1 >= 0; ) {
        var o = Q1 - I1.mf_size, c = s.frameNum;
        o *= s.in_samplerate, o /= s.out_samplerate, o > 1152 && (o = 1152), o < 1 && (o = 1), L1 = R1 - A1, R1 == 0 && (L1 = 0), T1 = this.lame_encode_buffer(
          s,
          k1[0],
          k1[1],
          o,
          _,
          d1,
          L1
        ), d1 += T1, A1 += T1, m1 -= c != s.frameNum ? 1 : 0;
      }
      if (I1.mf_samples_to_encode = 0, T1 < 0 || (L1 = R1 - A1, R1 == 0 && (L1 = 0), R.flush_bitstream(s), T1 = R.copy_buffer(
        I1,
        _,
        d1,
        L1,
        1
      ), T1 < 0))
        return T1;
      if (d1 += T1, A1 += T1, L1 = R1 - A1, R1 == 0 && (L1 = 0), s.write_id3tag_automatic) {
        if (b.id3tag_write_v1(s), T1 = R.copy_buffer(
          I1,
          _,
          d1,
          L1,
          0
        ), T1 < 0)
          return T1;
        A1 += T1;
      }
      return A1;
    }, this.lame_encode_buffer = function(s, _, d1, R1, I1, k1, T1) {
      var A1 = s.internal_flags, L1 = [null, null];
      if (A1.Class_ID != I)
        return -3;
      if (R1 == 0)
        return 0;
      q(A1, R1), L1[0] = A1.in_buffer_0, L1[1] = A1.in_buffer_1;
      for (var P1 = 0; P1 < R1; P1++)
        L1[0][P1] = _[P1], A1.channels_in > 1 && (L1[1][P1] = d1[P1]);
      return h1(
        s,
        L1[0],
        L1[1],
        R1,
        I1,
        k1,
        T1
      );
    };
    function i1(s) {
      var _ = W.BLKSIZE + s.framesize - W.FFTOFFSET;
      return _ = Math.max(_, 512 + s.framesize - 32), _;
    }
    function h1(s, _, d1, R1, I1, k1, T1) {
      var A1 = s.internal_flags, L1 = 0, P1, m1, Y1, Q1, o, c = [null, null], S = [null, null];
      if (A1.Class_ID != I)
        return -3;
      if (R1 == 0)
        return 0;
      if (o = R.copy_buffer(A1, I1, k1, T1, 0), o < 0)
        return o;
      if (k1 += o, L1 += o, S[0] = _, S[1] = d1, U.NEQ(s.scale, 0) && U.NEQ(s.scale, 1))
        for (m1 = 0; m1 < R1; ++m1)
          S[0][m1] *= s.scale, A1.channels_out == 2 && (S[1][m1] *= s.scale);
      if (U.NEQ(s.scale_left, 0) && U.NEQ(s.scale_left, 1))
        for (m1 = 0; m1 < R1; ++m1)
          S[0][m1] *= s.scale_left;
      if (U.NEQ(s.scale_right, 0) && U.NEQ(s.scale_right, 1))
        for (m1 = 0; m1 < R1; ++m1)
          S[1][m1] *= s.scale_right;
      if (s.num_channels == 2 && A1.channels_out == 1)
        for (m1 = 0; m1 < R1; ++m1)
          S[0][m1] = 0.5 * (S[0][m1] + S[1][m1]), S[1][m1] = 0;
      Q1 = i1(s), c[0] = A1.mfbuf[0], c[1] = A1.mfbuf[1];
      for (var k = 0; R1 > 0; ) {
        var H = [null, null], d = 0, C = 0;
        H[0] = S[0], H[1] = S[1];
        var z = new S1();
        if (pe(
          s,
          c,
          H,
          k,
          R1,
          z
        ), d = z.n_in, C = z.n_out, A1.findReplayGain && !A1.decode_on_the_fly && l.AnalyzeSamples(
          A1.rgdata,
          c[0],
          A1.mf_size,
          c[1],
          A1.mf_size,
          C,
          A1.channels_out
        ) == GainAnalysis.GAIN_ANALYSIS_ERROR)
          return -6;
        if (R1 -= d, k += d, A1.channels_out == 2, A1.mf_size += C, Y(A1.mf_size <= g.MFSIZE), A1.mf_samples_to_encode < 1 && (A1.mf_samples_to_encode = W.ENCDELAY + W.POSTDELAY), A1.mf_samples_to_encode += C, A1.mf_size >= Q1) {
          var X = T1 - L1;
          if (T1 == 0 && (X = 0), P1 = g1(
            s,
            c[0],
            c[1],
            I1,
            k1,
            X
          ), P1 < 0)
            return P1;
          for (k1 += P1, L1 += P1, A1.mf_size -= s.framesize, A1.mf_samples_to_encode -= s.framesize, Y1 = 0; Y1 < A1.channels_out; Y1++)
            for (m1 = 0; m1 < A1.mf_size; m1++)
              c[Y1][m1] = c[Y1][m1 + s.framesize];
        }
      }
      return L1;
    }
    function g1(s, _, d1, R1, I1, k1) {
      var T1 = h.enc.lame_encode_mp3_frame(
        s,
        _,
        d1,
        R1,
        I1,
        k1
      );
      return s.frameNum++, T1;
    }
    function S1() {
      this.n_in = 0, this.n_out = 0;
    }
    function v1() {
      this.num_used = 0;
    }
    function w1(s, _) {
      return _ != 0 ? w1(_, s % _) : s;
    }
    function y1(s, _, d1) {
      var R1 = Math.PI * _;
      s /= d1, s < 0 && (s = 0), s > 1 && (s = 1);
      var I1 = s - 0.5, k1 = 0.42 - 0.5 * Math.cos(2 * s * Math.PI) + 0.08 * Math.cos(4 * s * Math.PI);
      return Math.abs(I1) < 1e-9 ? R1 / Math.PI : k1 * Math.sin(d1 * R1 * I1) / (Math.PI * d1 * I1);
    }
    function F1(s, _, d1, R1, I1, k1, T1, A1, L1) {
      var P1 = s.internal_flags, m1, Y1 = 0, Q1, o = s.out_samplerate / w1(s.out_samplerate, s.in_samplerate);
      o > g.BPC && (o = g.BPC);
      var c = Math.abs(P1.resample_ratio - Math.floor(0.5 + P1.resample_ratio)) < 1e-4 ? 1 : 0, S = 1 / P1.resample_ratio;
      S > 1 && (S = 1);
      var k = 31;
      k % 2 == 0 && --k, k += c;
      var H = k + 1;
      if (P1.fill_buffer_resample_init == 0) {
        for (P1.inbuf_old[0] = K(H), P1.inbuf_old[1] = K(H), m1 = 0; m1 <= 2 * o; ++m1)
          P1.blackfilt[m1] = K(H);
        for (P1.itime[0] = 0, P1.itime[1] = 0, Y1 = 0; Y1 <= 2 * o; Y1++) {
          var d = 0, C = (Y1 - o) / (2 * o);
          for (m1 = 0; m1 <= k; m1++)
            d += P1.blackfilt[Y1][m1] = y1(
              m1 - C,
              S,
              k
            );
          for (m1 = 0; m1 <= k; m1++)
            P1.blackfilt[Y1][m1] /= d;
        }
        P1.fill_buffer_resample_init = 1;
      }
      var z = P1.inbuf_old[L1];
      for (Q1 = 0; Q1 < R1; Q1++) {
        var X, a1;
        if (X = Q1 * P1.resample_ratio, Y1 = 0 | Math.floor(X - P1.itime[L1]), k + Y1 - k / 2 >= T1)
          break;
        var C = X - P1.itime[L1] - (Y1 + 0.5 * (k % 2));
        a1 = 0 | Math.floor(C * 2 * o + o + 0.5);
        var Q = 0;
        for (m1 = 0; m1 <= k; ++m1) {
          var t1 = 0 | m1 + Y1 - k / 2, p1;
          p1 = t1 < 0 ? z[H + t1] : I1[k1 + t1], Q += p1 * P1.blackfilt[a1][m1];
        }
        _[d1 + Q1] = Q;
      }
      if (A1.num_used = Math.min(T1, k + Y1 - k / 2), P1.itime[L1] += A1.num_used - Q1 * P1.resample_ratio, A1.num_used >= H)
        for (m1 = 0; m1 < H; m1++)
          z[m1] = I1[k1 + A1.num_used + m1 - H];
      else {
        var x1 = H - A1.num_used;
        for (m1 = 0; m1 < x1; ++m1)
          z[m1] = z[m1 + A1.num_used];
        for (Y1 = 0; m1 < H; ++m1, ++Y1)
          z[m1] = I1[k1 + Y1];
        Y(Y1 == A1.num_used);
      }
      return Q1;
    }
    function pe(s, _, d1, R1, I1, k1) {
      var T1 = s.internal_flags;
      if (T1.resample_ratio < 0.9999 || T1.resample_ratio > 1.0001)
        for (var A1 = 0; A1 < T1.channels_out; A1++) {
          var L1 = new v1();
          k1.n_out = F1(
            s,
            _[A1],
            T1.mf_size,
            s.framesize,
            d1[A1],
            R1,
            I1,
            L1,
            A1
          ), k1.n_in = L1.num_used;
        }
      else {
        k1.n_out = Math.min(s.framesize, I1), k1.n_in = k1.n_out;
        for (var P1 = 0; P1 < k1.n_out; ++P1)
          _[0][T1.mf_size + P1] = d1[0][R1 + P1], T1.channels_out == 2 && (_[1][T1.mf_size + P1] = d1[1][R1 + P1]);
      }
    }
  }
  return Xt = M, Xt;
}
var g0 = G1, Be = g0.VbrMode;
function v0() {
  var p = Gt();
  function E(g, m, N, n1, U, r1, W, M, f, h, w, e, l, R, P) {
    this.vbr_q = g, this.quant_comp = m, this.quant_comp_s = N, this.expY = n1, this.st_lrm = U, this.st_s = r1, this.masking_adj = W, this.masking_adj_short = M, this.ath_lower = f, this.ath_curve = h, this.ath_sensitivity = w, this.interch = e, this.safejoint = l, this.sfb21mod = R, this.msfix = P;
  }
  function A(g, m, N, n1, U, r1, W, M, f, h, w, e, l, R) {
    this.quant_comp = m, this.quant_comp_s = N, this.safejoint = n1, this.nsmsfix = U, this.st_lrm = r1, this.st_s = W, this.nsbass = M, this.scale = f, this.masking_adj = h, this.ath_lower = w, this.ath_curve = e, this.interch = l, this.sfscale = R;
  }
  var j;
  this.setModules = function(g) {
    j = g;
  };
  var K = [
    new E(0, 9, 9, 0, 5.2, 125, -4.2, -6.3, 4.8, 1, 0, 0, 2, 21, 0.97),
    new E(1, 9, 9, 0, 5.3, 125, -3.6, -5.6, 4.5, 1.5, 0, 0, 2, 21, 1.35),
    new E(2, 9, 9, 0, 5.6, 125, -2.2, -3.5, 2.8, 2, 0, 0, 2, 21, 1.49),
    new E(3, 9, 9, 1, 5.8, 130, -1.8, -2.8, 2.6, 3, -4, 0, 2, 20, 1.64),
    new E(4, 9, 9, 1, 6, 135, -0.7, -1.1, 1.1, 3.5, -8, 0, 2, 0, 1.79),
    new E(5, 9, 9, 1, 6.4, 140, 0.5, 0.4, -7.5, 4, -12, 2e-4, 0, 0, 1.95),
    new E(6, 9, 9, 1, 6.6, 145, 0.67, 0.65, -14.7, 6.5, -19, 4e-4, 0, 0, 2.3),
    new E(7, 9, 9, 1, 6.6, 145, 0.8, 0.75, -19.7, 8, -22, 6e-4, 0, 0, 2.7),
    new E(8, 9, 9, 1, 6.6, 145, 1.2, 1.15, -27.5, 10, -23, 7e-4, 0, 0, 0),
    new E(9, 9, 9, 1, 6.6, 145, 1.6, 1.6, -36, 11, -25, 8e-4, 0, 0, 0),
    new E(10, 9, 9, 1, 6.6, 145, 2, 2, -36, 12, -25, 8e-4, 0, 0, 0)
  ], D = [
    new E(0, 9, 9, 0, 4.2, 25, -7, -4, 7.5, 1, 0, 0, 2, 26, 0.97),
    new E(1, 9, 9, 0, 4.2, 25, -5.6, -3.6, 4.5, 1.5, 0, 0, 2, 21, 1.35),
    new E(2, 9, 9, 0, 4.2, 25, -4.4, -1.8, 2, 2, 0, 0, 2, 18, 1.49),
    new E(3, 9, 9, 1, 4.2, 25, -3.4, -1.25, 1.1, 3, -4, 0, 2, 15, 1.64),
    new E(4, 9, 9, 1, 4.2, 25, -2.2, 0.1, 0, 3.5, -8, 0, 2, 0, 1.79),
    new E(5, 9, 9, 1, 4.2, 25, -1, 1.65, -7.7, 4, -12, 2e-4, 0, 0, 1.95),
    new E(6, 9, 9, 1, 4.2, 25, -0, 2.47, -7.7, 6.5, -19, 4e-4, 0, 0, 2),
    new E(7, 9, 9, 1, 4.2, 25, 0.5, 2, -14.5, 8, -22, 6e-4, 0, 0, 2),
    new E(8, 9, 9, 1, 4.2, 25, 1, 2.4, -22, 10, -23, 7e-4, 0, 0, 2),
    new E(9, 9, 9, 1, 4.2, 25, 1.5, 2.95, -30, 11, -25, 8e-4, 0, 0, 2),
    new E(10, 9, 9, 1, 4.2, 25, 2, 2.95, -36, 12, -30, 8e-4, 0, 0, 2)
  ];
  function Z(g, m, N) {
    var n1 = g.VBR == Be.vbr_rh ? K : D, U = g.VBR_q_frac, r1 = n1[m], W = n1[m + 1], M = r1;
    r1.st_lrm = r1.st_lrm + U * (W.st_lrm - r1.st_lrm), r1.st_s = r1.st_s + U * (W.st_s - r1.st_s), r1.masking_adj = r1.masking_adj + U * (W.masking_adj - r1.masking_adj), r1.masking_adj_short = r1.masking_adj_short + U * (W.masking_adj_short - r1.masking_adj_short), r1.ath_lower = r1.ath_lower + U * (W.ath_lower - r1.ath_lower), r1.ath_curve = r1.ath_curve + U * (W.ath_curve - r1.ath_curve), r1.ath_sensitivity = r1.ath_sensitivity + U * (W.ath_sensitivity - r1.ath_sensitivity), r1.interch = r1.interch + U * (W.interch - r1.interch), r1.msfix = r1.msfix + U * (W.msfix - r1.msfix), u1(g, M.vbr_q), N != 0 ? g.quant_comp = M.quant_comp : Math.abs(g.quant_comp - -1) > 0 || (g.quant_comp = M.quant_comp), N != 0 ? g.quant_comp_short = M.quant_comp_s : Math.abs(g.quant_comp_short - -1) > 0 || (g.quant_comp_short = M.quant_comp_s), M.expY != 0 && (g.experimentalY = M.expY != 0), N != 0 ? g.internal_flags.nsPsy.attackthre = M.st_lrm : Math.abs(g.internal_flags.nsPsy.attackthre - -1) > 0 || (g.internal_flags.nsPsy.attackthre = M.st_lrm), N != 0 ? g.internal_flags.nsPsy.attackthre_s = M.st_s : Math.abs(g.internal_flags.nsPsy.attackthre_s - -1) > 0 || (g.internal_flags.nsPsy.attackthre_s = M.st_s), N != 0 ? g.maskingadjust = M.masking_adj : Math.abs(g.maskingadjust - 0) > 0 || (g.maskingadjust = M.masking_adj), N != 0 ? g.maskingadjust_short = M.masking_adj_short : Math.abs(g.maskingadjust_short - 0) > 0 || (g.maskingadjust_short = M.masking_adj_short), N != 0 ? g.ATHlower = -M.ath_lower / 10 : Math.abs(-g.ATHlower * 10 - 0) > 0 || (g.ATHlower = -M.ath_lower / 10), N != 0 ? g.ATHcurve = M.ath_curve : Math.abs(g.ATHcurve - -1) > 0 || (g.ATHcurve = M.ath_curve), N != 0 ? g.athaa_sensitivity = M.ath_sensitivity : Math.abs(g.athaa_sensitivity - -1) > 0 || (g.athaa_sensitivity = M.ath_sensitivity), M.interch > 0 && (N != 0 ? g.interChRatio = M.interch : Math.abs(g.interChRatio - -1) > 0 || (g.interChRatio = M.interch)), M.safejoint > 0 && (g.exp_nspsytune = g.exp_nspsytune | M.safejoint), M.sfb21mod > 0 && (g.exp_nspsytune = g.exp_nspsytune | M.sfb21mod << 20), N != 0 ? g.msfix = M.msfix : Math.abs(g.msfix - -1) > 0 || (g.msfix = M.msfix), N == 0 && (g.VBR_q = m, g.VBR_q_frac = U);
  }
  var Y = [
    new A(8, 9, 9, 0, 0, 6.6, 145, 0, 0.95, 0, -30, 11, 12e-4, 1),
    /*   8, impossible to use in stereo */
    new A(16, 9, 9, 0, 0, 6.6, 145, 0, 0.95, 0, -25, 11, 1e-3, 1),
    /*  16 */
    new A(24, 9, 9, 0, 0, 6.6, 145, 0, 0.95, 0, -20, 11, 1e-3, 1),
    /*  24 */
    new A(32, 9, 9, 0, 0, 6.6, 145, 0, 0.95, 0, -15, 11, 1e-3, 1),
    /*  32 */
    new A(40, 9, 9, 0, 0, 6.6, 145, 0, 0.95, 0, -10, 11, 9e-4, 1),
    /*  40 */
    new A(48, 9, 9, 0, 0, 6.6, 145, 0, 0.95, 0, -10, 11, 9e-4, 1),
    /*  48 */
    new A(56, 9, 9, 0, 0, 6.6, 145, 0, 0.95, 0, -6, 11, 8e-4, 1),
    /*  56 */
    new A(64, 9, 9, 0, 0, 6.6, 145, 0, 0.95, 0, -2, 11, 8e-4, 1),
    /*  64 */
    new A(80, 9, 9, 0, 0, 6.6, 145, 0, 0.95, 0, 0, 8, 7e-4, 1),
    /*  80 */
    new A(96, 9, 9, 0, 2.5, 6.6, 145, 0, 0.95, 0, 1, 5.5, 6e-4, 1),
    /*  96 */
    new A(112, 9, 9, 0, 2.25, 6.6, 145, 0, 0.95, 0, 2, 4.5, 5e-4, 1),
    /* 112 */
    new A(128, 9, 9, 0, 1.95, 6.4, 140, 0, 0.95, 0, 3, 4, 2e-4, 1),
    /* 128 */
    new A(160, 9, 9, 1, 1.79, 6, 135, 0, 0.95, -2, 5, 3.5, 0, 1),
    /* 160 */
    new A(192, 9, 9, 1, 1.49, 5.6, 125, 0, 0.97, -4, 7, 3, 0, 0),
    /* 192 */
    new A(224, 9, 9, 1, 1.25, 5.2, 125, 0, 0.98, -6, 9, 2, 0, 0),
    /* 224 */
    new A(256, 9, 9, 1, 0.97, 5.2, 125, 0, 1, -8, 10, 1, 0, 0),
    /* 256 */
    new A(320, 9, 9, 1, 0.9, 5.2, 125, 0, 1, -10, 12, 0, 0, 0)
    /* 320 */
  ];
  function $(g, m, N) {
    var n1 = m, U = j.nearestBitrateFullIndex(m);
    if (g.VBR = Be.vbr_abr, g.VBR_mean_bitrate_kbps = n1, g.VBR_mean_bitrate_kbps = Math.min(g.VBR_mean_bitrate_kbps, 320), g.VBR_mean_bitrate_kbps = Math.max(g.VBR_mean_bitrate_kbps, 8), g.brate = g.VBR_mean_bitrate_kbps, g.VBR_mean_bitrate_kbps > 320 && (g.disable_reservoir = !0), Y[U].safejoint > 0 && (g.exp_nspsytune = g.exp_nspsytune | 2), Y[U].sfscale > 0 && (g.internal_flags.noise_shaping = 2), Math.abs(Y[U].nsbass) > 0) {
      var r1 = int(Y[U].nsbass * 4);
      r1 < 0 && (r1 += 64), g.exp_nspsytune = g.exp_nspsytune | r1 << 2;
    }
    return N != 0 ? g.quant_comp = Y[U].quant_comp : Math.abs(g.quant_comp - -1) > 0 || (g.quant_comp = Y[U].quant_comp), N != 0 ? g.quant_comp_short = Y[U].quant_comp_s : Math.abs(g.quant_comp_short - -1) > 0 || (g.quant_comp_short = Y[U].quant_comp_s), N != 0 ? g.msfix = Y[U].nsmsfix : Math.abs(g.msfix - -1) > 0 || (g.msfix = Y[U].nsmsfix), N != 0 ? g.internal_flags.nsPsy.attackthre = Y[U].st_lrm : Math.abs(g.internal_flags.nsPsy.attackthre - -1) > 0 || (g.internal_flags.nsPsy.attackthre = Y[U].st_lrm), N != 0 ? g.internal_flags.nsPsy.attackthre_s = Y[U].st_s : Math.abs(g.internal_flags.nsPsy.attackthre_s - -1) > 0 || (g.internal_flags.nsPsy.attackthre_s = Y[U].st_s), N != 0 ? g.scale = Y[U].scale : Math.abs(g.scale - -1) > 0 || (g.scale = Y[U].scale), N != 0 ? g.maskingadjust = Y[U].masking_adj : Math.abs(g.maskingadjust - 0) > 0 || (g.maskingadjust = Y[U].masking_adj), Y[U].masking_adj > 0 ? N != 0 ? g.maskingadjust_short = Y[U].masking_adj * 0.9 : Math.abs(g.maskingadjust_short - 0) > 0 || (g.maskingadjust_short = Y[U].masking_adj * 0.9) : N != 0 ? g.maskingadjust_short = Y[U].masking_adj * 1.1 : Math.abs(g.maskingadjust_short - 0) > 0 || (g.maskingadjust_short = Y[U].masking_adj * 1.1), N != 0 ? g.ATHlower = -Y[U].ath_lower / 10 : Math.abs(-g.ATHlower * 10 - 0) > 0 || (g.ATHlower = -Y[U].ath_lower / 10), N != 0 ? g.ATHcurve = Y[U].ath_curve : Math.abs(g.ATHcurve - -1) > 0 || (g.ATHcurve = Y[U].ath_curve), N != 0 ? g.interChRatio = Y[U].interch : Math.abs(g.interChRatio - -1) > 0 || (g.interChRatio = Y[U].interch), m;
  }
  this.apply_preset = function(g, m, N) {
    switch (m) {
      case p.R3MIX: {
        m = p.V3, g.VBR = Be.vbr_mtrh;
        break;
      }
      case p.MEDIUM: {
        m = p.V4, g.VBR = Be.vbr_rh;
        break;
      }
      case p.MEDIUM_FAST: {
        m = p.V4, g.VBR = Be.vbr_mtrh;
        break;
      }
      case p.STANDARD: {
        m = p.V2, g.VBR = Be.vbr_rh;
        break;
      }
      case p.STANDARD_FAST: {
        m = p.V2, g.VBR = Be.vbr_mtrh;
        break;
      }
      case p.EXTREME: {
        m = p.V0, g.VBR = Be.vbr_rh;
        break;
      }
      case p.EXTREME_FAST: {
        m = p.V0, g.VBR = Be.vbr_mtrh;
        break;
      }
      case p.INSANE:
        return m = 320, g.preset = m, $(g, m, N), g.VBR = Be.vbr_off, m;
    }
    switch (g.preset = m, m) {
      case p.V9:
        return Z(g, 9, N), m;
      case p.V8:
        return Z(g, 8, N), m;
      case p.V7:
        return Z(g, 7, N), m;
      case p.V6:
        return Z(g, 6, N), m;
      case p.V5:
        return Z(g, 5, N), m;
      case p.V4:
        return Z(g, 4, N), m;
      case p.V3:
        return Z(g, 3, N), m;
      case p.V2:
        return Z(g, 2, N), m;
      case p.V1:
        return Z(g, 1, N), m;
      case p.V0:
        return Z(g, 0, N), m;
    }
    return 8 <= m && m <= 320 ? $(g, m, N) : (g.preset = 0, m);
  };
  function u1(g, m) {
    var N = 0;
    return 0 > m && (N = -1, m = 0), 9 < m && (N = -1, m = 9), g.VBR_q = m, g.VBR_q_frac = 0, N;
  }
}
var w0 = v0;
function M0() {
  this.setModules = function(p, E) {
  };
}
var S0 = M0;
function R0() {
  this.over_noise = 0, this.tot_noise = 0, this.max_noise = 0, this.over_count = 0, this.over_SSD = 0, this.bits = 0;
}
var B0 = R0, Wa = G1, va = Wa.new_float, A0 = Wa.new_int;
function y0() {
  this.global_gain = 0, this.sfb_count1 = 0, this.step = A0(39), this.noise = va(39), this.noise_log = va(39);
}
var T0 = y0, Qe = G1, Ee = Qe.System, wa = Qe.VbrMode, Ot = Qe.Util, Ze = Qe.Arrays, et = Qe.new_float, tt = Qe.assert, k0 = S0, Ht = B0, E0 = T0, C1 = se(), Ma = Ft, Sa = bt;
function x0() {
  var p;
  this.rv = null;
  var E;
  this.qupvt = null;
  var A, j = new k0(), K;
  this.setModules = function(M, f, h, w) {
    p = M, E = f, this.rv = f, A = h, this.qupvt = h, K = w, j.setModules(A, K);
  }, this.ms_convert = function(M, f) {
    for (var h = 0; h < 576; ++h) {
      var w = M.tt[f][0].xr[h], e = M.tt[f][1].xr[h];
      M.tt[f][0].xr[h] = (w + e) * (Ot.SQRT2 * 0.5), M.tt[f][1].xr[h] = (w - e) * (Ot.SQRT2 * 0.5);
    }
  };
  function D(M, f, h, w) {
    w = 0;
    for (var e = 0; e <= h; ++e) {
      var l = Math.abs(M.xr[e]);
      w += l, f[e] = Math.sqrt(l * Math.sqrt(l)), f[e] > M.xrpow_max && (M.xrpow_max = f[e]);
    }
    return w;
  }
  this.init_xrpow = function(M, f, h) {
    var w = 0, e = 0 | f.max_nonzero_coeff;
    if (f.xrpow_max = 0, Ze.fill(h, e, 576, 0), w = D(f, h, e, w), w > 1e-20) {
      var l = 0;
      M.substep_shaping & 2 && (l = 1);
      for (var R = 0; R < f.psymax; R++)
        M.pseudohalf[R] = l;
      return !0;
    }
    return Ze.fill(f.l3_enc, 0, 576, 0), !1;
  };
  function Z(M, f) {
    var h = M.ATH, w = f.xr;
    if (f.block_type != C1.SHORT_TYPE)
      for (var e = !1, l = C1.PSFB21 - 1; l >= 0 && !e; l--) {
        var R = M.scalefac_band.psfb21[l], P = M.scalefac_band.psfb21[l + 1], O = A.athAdjust(
          h.adjust,
          h.psfb21[l],
          h.floor
        );
        M.nsPsy.longfact[21] > 1e-12 && (O *= M.nsPsy.longfact[21]);
        for (var y = P - 1; y >= R; y--)
          if (Math.abs(w[y]) < O)
            w[y] = 0;
          else {
            e = !0;
            break;
          }
      }
    else
      for (var x = 0; x < 3; x++)
        for (var e = !1, l = C1.PSFB12 - 1; l >= 0 && !e; l--) {
          var R = M.scalefac_band.s[12] * 3 + (M.scalefac_band.s[13] - M.scalefac_band.s[12]) * x + (M.scalefac_band.psfb12[l] - M.scalefac_band.psfb12[0]), P = R + (M.scalefac_band.psfb12[l + 1] - M.scalefac_band.psfb12[l]), _1 = A.athAdjust(
            h.adjust,
            h.psfb12[l],
            h.floor
          );
          M.nsPsy.shortfact[12] > 1e-12 && (_1 *= M.nsPsy.shortfact[12]);
          for (var y = P - 1; y >= R; y--)
            if (Math.abs(w[y]) < _1)
              w[y] = 0;
            else {
              e = !0;
              break;
            }
        }
  }
  this.init_outer_loop = function(M, f) {
    f.part2_3_length = 0, f.big_values = 0, f.count1 = 0, f.global_gain = 210, f.scalefac_compress = 0, f.table_select[0] = 0, f.table_select[1] = 0, f.table_select[2] = 0, f.subblock_gain[0] = 0, f.subblock_gain[1] = 0, f.subblock_gain[2] = 0, f.subblock_gain[3] = 0, f.region0_count = 0, f.region1_count = 0, f.preflag = 0, f.scalefac_scale = 0, f.count1table_select = 0, f.part2_length = 0, f.sfb_lmax = C1.SBPSY_l, f.sfb_smin = C1.SBPSY_s, f.psy_lmax = M.sfb21_extra ? C1.SBMAX_l : C1.SBPSY_l, f.psymax = f.psy_lmax, f.sfbmax = f.sfb_lmax, f.sfbdivide = 11;
    for (var h = 0; h < C1.SBMAX_l; h++)
      f.width[h] = M.scalefac_band.l[h + 1] - M.scalefac_band.l[h], f.window[h] = 3;
    if (f.block_type == C1.SHORT_TYPE) {
      var w = et(576);
      f.sfb_smin = 0, f.sfb_lmax = 0, f.mixed_block_flag != 0 && (f.sfb_smin = 3, f.sfb_lmax = M.mode_gr * 2 + 4), f.psymax = f.sfb_lmax + 3 * ((M.sfb21_extra ? C1.SBMAX_s : C1.SBPSY_s) - f.sfb_smin), f.sfbmax = f.sfb_lmax + 3 * (C1.SBPSY_s - f.sfb_smin), f.sfbdivide = f.sfbmax - 18, f.psy_lmax = f.sfb_lmax;
      var e = M.scalefac_band.l[f.sfb_lmax];
      Ee.arraycopy(f.xr, 0, w, 0, 576);
      for (var h = f.sfb_smin; h < C1.SBMAX_s; h++)
        for (var l = M.scalefac_band.s[h], R = M.scalefac_band.s[h + 1], P = 0; P < 3; P++)
          for (var O = l; O < R; O++)
            f.xr[e++] = w[3 * O + P];
      for (var y = f.sfb_lmax, h = f.sfb_smin; h < C1.SBMAX_s; h++)
        f.width[y] = f.width[y + 1] = f.width[y + 2] = M.scalefac_band.s[h + 1] - M.scalefac_band.s[h], f.window[y] = 0, f.window[y + 1] = 1, f.window[y + 2] = 2, y += 3;
    }
    f.count1bits = 0, f.sfb_partition_table = A.nr_of_sfb_block[0][0], f.slen[0] = 0, f.slen[1] = 0, f.slen[2] = 0, f.slen[3] = 0, f.max_nonzero_coeff = 575, Ze.fill(f.scalefac, 0), Z(M, f);
  };
  function Y(M) {
    this.ordinal = M;
  }
  Y.BINSEARCH_NONE = new Y(0), Y.BINSEARCH_UP = new Y(1), Y.BINSEARCH_DOWN = new Y(2);
  function $(M, f, h, w, e) {
    var l, R = M.CurrentStep[w], P = !1, O = M.OldValue[w], y = Y.BINSEARCH_NONE;
    for (f.global_gain = O, h -= f.part2_length; ; ) {
      var x;
      if (l = K.count_bits(M, e, f, null), R == 1 || l == h)
        break;
      l > h ? (y == Y.BINSEARCH_DOWN && (P = !0), P && (R /= 2), y = Y.BINSEARCH_UP, x = R) : (y == Y.BINSEARCH_UP && (P = !0), P && (R /= 2), y = Y.BINSEARCH_DOWN, x = -R), f.global_gain += x, f.global_gain < 0 && (f.global_gain = 0, P = !0), f.global_gain > 255 && (f.global_gain = 255, P = !0);
    }
    for (tt(f.global_gain >= 0), tt(f.global_gain < 256); l > h && f.global_gain < 255; )
      f.global_gain++, l = K.count_bits(M, e, f, null);
    return M.CurrentStep[w] = O - f.global_gain >= 4 ? 4 : 2, M.OldValue[w] = f.global_gain, f.part2_3_length = l, l;
  }
  this.trancate_smallspectrums = function(M, f, h, w) {
    var e = et(Sa.SFBMAX);
    if (!(!(M.substep_shaping & 4) && f.block_type == C1.SHORT_TYPE || M.substep_shaping & 128)) {
      A.calc_noise(f, h, e, new Ht(), null);
      for (var R = 0; R < 576; R++) {
        var l = 0;
        f.l3_enc[R] != 0 && (l = Math.abs(f.xr[R])), w[R] = l;
      }
      var R = 0, P = 8;
      f.block_type == C1.SHORT_TYPE && (P = 6);
      do {
        var O, y, x, _1, b = f.width[P];
        if (R += b, !(e[P] >= 1) && (Ze.sort(w, R - b, b), !BitStream.EQ(w[R - 1], 0))) {
          O = (1 - e[P]) * h[P], y = 0, _1 = 0;
          do {
            var a;
            for (x = 1; _1 + x < b && !BitStream.NEQ(w[_1 + R - b], w[_1 + R + x - b]); x++)
              ;
            if (a = w[_1 + R - b] * w[_1 + R - b] * x, O < a) {
              _1 != 0 && (y = w[_1 + R - b - 1]);
              break;
            }
            O -= a, _1 += x;
          } while (_1 < b);
          if (!BitStream.EQ(y, 0))
            do
              Math.abs(f.xr[R - b]) <= y && (f.l3_enc[R - b] = 0);
            while (--b > 0);
        }
      } while (++P < f.psymax);
      f.part2_3_length = K.noquant_count_bits(M, f, null);
    }
  };
  function u1(M) {
    for (var f = 0; f < M.sfbmax; f++)
      if (M.scalefac[f] + M.subblock_gain[M.window[f]] == 0)
        return !1;
    return !0;
  }
  function g(M) {
    return Ot.FAST_LOG10(0.368 + 0.632 * M * M * M);
  }
  function m(M, f) {
    for (var h = 1e-37, w = 0; w < f.psymax; w++)
      h += g(M[w]);
    return Math.max(1e-20, h);
  }
  function N(M, f, h, w, e) {
    var l;
    switch (M) {
      default:
      case 9: {
        f.over_count > 0 ? (l = h.over_SSD <= f.over_SSD, h.over_SSD == f.over_SSD && (l = h.bits < f.bits)) : l = h.max_noise < 0 && h.max_noise * 10 + h.bits <= f.max_noise * 10 + f.bits;
        break;
      }
      case 0:
        l = h.over_count < f.over_count || h.over_count == f.over_count && h.over_noise < f.over_noise || h.over_count == f.over_count && BitStream.EQ(h.over_noise, f.over_noise) && h.tot_noise < f.tot_noise;
        break;
      case 8:
        h.max_noise = m(e, w);
      case 1:
        l = h.max_noise < f.max_noise;
        break;
      case 2:
        l = h.tot_noise < f.tot_noise;
        break;
      case 3:
        l = h.tot_noise < f.tot_noise && h.max_noise < f.max_noise;
        break;
      case 4:
        l = h.max_noise <= 0 && f.max_noise > 0.2 || h.max_noise <= 0 && f.max_noise < 0 && f.max_noise > h.max_noise - 0.2 && h.tot_noise < f.tot_noise || h.max_noise <= 0 && f.max_noise > 0 && f.max_noise > h.max_noise - 0.2 && h.tot_noise < f.tot_noise + f.over_noise || h.max_noise > 0 && f.max_noise > -0.05 && f.max_noise > h.max_noise - 0.1 && h.tot_noise + h.over_noise < f.tot_noise + f.over_noise || h.max_noise > 0 && f.max_noise > -0.1 && f.max_noise > h.max_noise - 0.15 && h.tot_noise + h.over_noise + h.over_noise < f.tot_noise + f.over_noise + f.over_noise;
        break;
      case 5:
        l = h.over_noise < f.over_noise || BitStream.EQ(h.over_noise, f.over_noise) && h.tot_noise < f.tot_noise;
        break;
      case 6:
        l = h.over_noise < f.over_noise || BitStream.EQ(h.over_noise, f.over_noise) && (h.max_noise < f.max_noise || BitStream.EQ(h.max_noise, f.max_noise) && h.tot_noise <= f.tot_noise);
        break;
      case 7:
        l = h.over_count < f.over_count || h.over_noise < f.over_noise;
        break;
    }
    return f.over_count == 0 && (l = l && h.bits < f.bits), l;
  }
  function n1(M, f, h, w, e) {
    var l = M.internal_flags, R;
    f.scalefac_scale == 0 ? R = 1.2968395546510096 : R = 1.6817928305074292;
    for (var P = 0, O = 0; O < f.sfbmax; O++)
      P < h[O] && (P = h[O]);
    var y = l.noise_shaping_amp;
    switch (y == 3 && (e ? y = 2 : y = 1), y) {
      case 2:
        break;
      case 1:
        P > 1 ? P = Math.pow(P, 0.5) : P *= 0.95;
        break;
      case 0:
      default:
        P > 1 ? P = 1 : P *= 0.95;
        break;
    }
    for (var x = 0, O = 0; O < f.sfbmax; O++) {
      var _1 = f.width[O], b;
      if (x += _1, !(h[O] < P)) {
        if (l.substep_shaping & 2 && (l.pseudohalf[O] = l.pseudohalf[O] == 0 ? 1 : 0, l.pseudohalf[O] == 0 && l.noise_shaping_amp == 2))
          return;
        for (f.scalefac[O]++, b = -_1; b < 0; b++)
          w[x + b] *= R, w[x + b] > f.xrpow_max && (f.xrpow_max = w[x + b]);
        if (l.noise_shaping_amp == 2)
          return;
      }
    }
  }
  function U(M, f) {
    for (var h = 1.2968395546510096, w = 0, e = 0; e < M.sfbmax; e++) {
      var l = M.width[e], R = M.scalefac[e];
      if (M.preflag != 0 && (R += A.pretab[e]), w += l, R & 1) {
        R++;
        for (var P = -l; P < 0; P++)
          f[w + P] *= h, f[w + P] > M.xrpow_max && (M.xrpow_max = f[w + P]);
      }
      M.scalefac[e] = R >> 1;
    }
    M.preflag = 0, M.scalefac_scale = 1;
  }
  function r1(M, f, h) {
    var w, e = f.scalefac;
    for (w = 0; w < f.sfb_lmax; w++)
      if (e[w] >= 16)
        return !0;
    for (var l = 0; l < 3; l++) {
      var R = 0, P = 0;
      for (w = f.sfb_lmax + l; w < f.sfbdivide; w += 3)
        R < e[w] && (R = e[w]);
      for (; w < f.sfbmax; w += 3)
        P < e[w] && (P = e[w]);
      if (!(R < 16 && P < 8)) {
        if (f.subblock_gain[l] >= 7)
          return !0;
        f.subblock_gain[l]++;
        var O = M.scalefac_band.l[f.sfb_lmax];
        for (w = f.sfb_lmax + l; w < f.sfbmax; w += 3) {
          var y, x = f.width[w], _1 = e[w];
          if (_1 = _1 - (4 >> f.scalefac_scale), _1 >= 0) {
            e[w] = _1, O += x * 3;
            continue;
          }
          e[w] = 0;
          {
            var b = 210 + (_1 << f.scalefac_scale + 1);
            y = A.IPOW20(b);
          }
          O += x * (l + 1);
          for (var a = -x; a < 0; a++)
            h[O + a] *= y, h[O + a] > f.xrpow_max && (f.xrpow_max = h[O + a]);
          O += x * (3 - l - 1);
        }
        {
          var y = A.IPOW20(202);
          O += f.width[w] * (l + 1);
          for (var a = -f.width[w]; a < 0; a++)
            h[O + a] *= y, h[O + a] > f.xrpow_max && (f.xrpow_max = h[O + a]);
        }
      }
    }
    return !1;
  }
  function W(M, f, h, w, e) {
    var l = M.internal_flags;
    n1(M, f, h, w, e);
    var R = u1(f);
    return R ? !1 : (l.mode_gr == 2 ? R = K.scale_bitcount(f) : R = K.scale_bitcount_lsf(l, f), R ? (l.noise_shaping > 1 && (Ze.fill(l.pseudohalf, 0), f.scalefac_scale == 0 ? (U(f, w), R = !1) : f.block_type == C1.SHORT_TYPE && l.subblock_gain > 0 && (R = r1(l, f, w) || u1(f))), R || (l.mode_gr == 2 ? R = K.scale_bitcount(f) : R = K.scale_bitcount_lsf(l, f)), !R) : !0);
  }
  this.outer_loop = function(M, f, h, w, e, l) {
    var R = M.internal_flags, P = new Ma(), O = et(576), y = et(Sa.SFBMAX), x = new Ht(), _1, b = new E0(), a = 9999999, v = !1, V = !1, L = 0;
    if ($(R, f, l, e, w), R.noise_shaping == 0)
      return 100;
    A.calc_noise(
      f,
      h,
      y,
      x,
      b
    ), x.bits = f.part2_3_length, P.assign(f);
    var I = 0;
    for (Ee.arraycopy(w, 0, O, 0, 576); !v; ) {
      do {
        var G = new Ht(), B, n = 255;
        if (R.substep_shaping & 2 ? B = 20 : B = 3, R.sfb21_extra && (y[P.sfbmax] > 1 || P.block_type == C1.SHORT_TYPE && (y[P.sfbmax + 1] > 1 || y[P.sfbmax + 2] > 1)) || !W(M, P, y, w, V))
          break;
        P.scalefac_scale != 0 && (n = 254);
        var r = l - P.part2_length;
        if (r <= 0)
          break;
        for (; (P.part2_3_length = K.count_bits(
          R,
          w,
          P,
          b
        )) > r && P.global_gain <= n; )
          P.global_gain++;
        if (P.global_gain > n)
          break;
        if (x.over_count == 0) {
          for (; (P.part2_3_length = K.count_bits(
            R,
            w,
            P,
            b
          )) > a && P.global_gain <= n; )
            P.global_gain++;
          if (P.global_gain > n)
            break;
        }
        if (A.calc_noise(
          P,
          h,
          y,
          G,
          b
        ), G.bits = P.part2_3_length, f.block_type != C1.SHORT_TYPE ? _1 = M.quant_comp : _1 = M.quant_comp_short, _1 = N(
          _1,
          x,
          G,
          P,
          y
        ) ? 1 : 0, _1 != 0)
          a = f.part2_3_length, x = G, f.assign(P), I = 0, Ee.arraycopy(w, 0, O, 0, 576);
        else if (R.full_outer_loop == 0 && (++I > B && x.over_count == 0 || R.noise_shaping_amp == 3 && V && I > 30 || R.noise_shaping_amp == 3 && V && P.global_gain - L > 15))
          break;
      } while (P.global_gain + P.scalefac_scale < 255);
      R.noise_shaping_amp == 3 ? V ? v = !0 : (P.assign(f), Ee.arraycopy(O, 0, w, 0, 576), I = 0, L = P.global_gain, V = !0) : v = !0;
    }
    return tt(f.global_gain + f.scalefac_scale <= 255), M.VBR == wa.vbr_rh || M.VBR == wa.vbr_mtrh ? Ee.arraycopy(O, 0, w, 0, 576) : R.substep_shaping & 1 && trancate_smallspectrums(R, f, h, w), x.over_count;
  }, this.iteration_finish_one = function(M, f, h) {
    var w = M.l3_side, e = w.tt[f][h];
    K.best_scalefac_store(M, f, h, w), M.use_best_huffman == 1 && K.best_huffman_divide(M, e), E.ResvAdjust(M, e);
  }, this.VBR_encode_granule = function(M, f, h, w, e, l, R) {
    var P = M.internal_flags, O = new Ma(), y = et(576), x = R, _1 = R + 1, b = (R + l) / 2, a, v, V = 0, L = P.sfb21_extra;
    tt(x <= LameInternalFlags.MAX_BITS_PER_CHANNEL), Ze.fill(O.l3_enc, 0);
    do
      b > x - 42 ? P.sfb21_extra = !1 : P.sfb21_extra = L, v = outer_loop(M, f, h, w, e, b), v <= 0 ? (V = 1, _1 = f.part2_3_length, O.assign(f), Ee.arraycopy(w, 0, y, 0, 576), R = _1 - 32, a = R - l, b = (R + l) / 2) : (l = b + 32, a = R - l, b = (R + l) / 2, V != 0 && (V = 2, f.assign(O), Ee.arraycopy(y, 0, w, 0, 576)));
    while (a > 12);
    P.sfb21_extra = L, V == 2 && Ee.arraycopy(O.l3_enc, 0, f.l3_enc, 0, 576), tt(f.part2_3_length <= x);
  }, this.get_framebits = function(M, f) {
    var h = M.internal_flags;
    h.bitrate_index = h.VBR_min_bitrate;
    var w = p.getframebits(M);
    h.bitrate_index = 1, w = p.getframebits(M);
    for (var e = 1; e <= h.VBR_max_bitrate; e++) {
      h.bitrate_index = e;
      var l = new MeanBits(w);
      f[e] = E.ResvFrameBegin(M, l), w = l.bits;
    }
  }, this.VBR_old_prepare = function(M, f, h, w, e, l, R, P, O) {
    var y = M.internal_flags, x, _1 = 0, b = 1, a = 0;
    y.bitrate_index = y.VBR_max_bitrate;
    var v = E.ResvFrameBegin(M, new MeanBits(0)) / y.mode_gr;
    get_framebits(M, l);
    for (var V = 0; V < y.mode_gr; V++) {
      var L = A.on_pe(M, f, P[V], v, V, 0);
      y.mode_ext == C1.MPG_MD_MS_LR && (ms_convert(y.l3_side, V), A.reduce_side(P[V], h[V], v, L));
      for (var I = 0; I < y.channels_out; ++I) {
        var G = y.l3_side.tt[V][I];
        G.block_type != C1.SHORT_TYPE ? (_1 = 1.28 / (1 + Math.exp(3.5 - f[V][I] / 300)) - 0.05, x = y.PSY.mask_adjust - _1) : (_1 = 2.56 / (1 + Math.exp(3.5 - f[V][I] / 300)) - 0.14, x = y.PSY.mask_adjust_short - _1), y.masking_lower = Math.pow(
          10,
          x * 0.1
        ), init_outer_loop(y, G), O[V][I] = A.calc_xmin(
          M,
          w[V][I],
          G,
          e[V][I]
        ), O[V][I] != 0 && (b = 0), R[V][I] = 126, a += P[V][I];
      }
    }
    for (var V = 0; V < y.mode_gr; V++)
      for (var I = 0; I < y.channels_out; I++)
        a > l[y.VBR_max_bitrate] && (P[V][I] *= l[y.VBR_max_bitrate], P[V][I] /= a), R[V][I] > P[V][I] && (R[V][I] = P[V][I]);
    return b;
  }, this.bitpressure_strategy = function(M, f, h, w) {
    for (var e = 0; e < M.mode_gr; e++)
      for (var l = 0; l < M.channels_out; l++) {
        for (var R = M.l3_side.tt[e][l], P = f[e][l], O = 0, y = 0; y < R.psy_lmax; y++)
          P[O++] *= 1 + 0.029 * y * y / C1.SBMAX_l / C1.SBMAX_l;
        if (R.block_type == C1.SHORT_TYPE)
          for (var y = R.sfb_smin; y < C1.SBMAX_s; y++)
            P[O++] *= 1 + 0.029 * y * y / C1.SBMAX_s / C1.SBMAX_s, P[O++] *= 1 + 0.029 * y * y / C1.SBMAX_s / C1.SBMAX_s, P[O++] *= 1 + 0.029 * y * y / C1.SBMAX_s / C1.SBMAX_s;
        w[e][l] = 0 | Math.max(
          h[e][l],
          0.9 * w[e][l]
        );
      }
  }, this.VBR_new_prepare = function(M, f, h, w, e, l) {
    var R = M.internal_flags, P = 1, O = 0, y = 0, x;
    if (M.free_format) {
      R.bitrate_index = 0;
      var _1 = new MeanBits(O);
      x = E.ResvFrameBegin(M, _1), O = _1.bits, e[0] = x;
    } else {
      R.bitrate_index = R.VBR_max_bitrate;
      var _1 = new MeanBits(O);
      E.ResvFrameBegin(M, _1), O = _1.bits, get_framebits(M, e), x = e[R.VBR_max_bitrate];
    }
    for (var b = 0; b < R.mode_gr; b++) {
      A.on_pe(M, f, l[b], O, b, 0), R.mode_ext == C1.MPG_MD_MS_LR && ms_convert(R.l3_side, b);
      for (var a = 0; a < R.channels_out; ++a) {
        var v = R.l3_side.tt[b][a];
        R.masking_lower = Math.pow(
          10,
          R.PSY.mask_adjust * 0.1
        ), init_outer_loop(R, v), A.calc_xmin(
          M,
          h[b][a],
          v,
          w[b][a]
        ) != 0 && (P = 0), y += l[b][a];
      }
    }
    for (var b = 0; b < R.mode_gr; b++)
      for (var a = 0; a < R.channels_out; a++)
        y > x && (l[b][a] *= x, l[b][a] /= y);
    return P;
  }, this.calc_target_bits = function(M, f, h, w, e, l) {
    var R = M.internal_flags, P = R.l3_side, O, y, x, _1, b = 0;
    R.bitrate_index = R.VBR_max_bitrate;
    var a = new MeanBits(b);
    for (l[0] = E.ResvFrameBegin(M, a), b = a.bits, R.bitrate_index = 1, b = p.getframebits(M) - R.sideinfo_len * 8, e[0] = b / (R.mode_gr * R.channels_out), b = M.VBR_mean_bitrate_kbps * M.framesize * 1e3, R.substep_shaping & 1 && (b *= 1.09), b /= M.out_samplerate, b -= R.sideinfo_len * 8, b /= R.mode_gr * R.channels_out, O = 0.93 + 0.07 * (11 - M.compression_ratio) / (11 - 5.5), O < 0.9 && (O = 0.9), O > 1 && (O = 1), y = 0; y < R.mode_gr; y++) {
      var v = 0;
      for (x = 0; x < R.channels_out; x++) {
        if (w[y][x] = int(O * b), f[y][x] > 700) {
          var V = int((f[y][x] - 700) / 1.4), L = P.tt[y][x];
          w[y][x] = int(O * b), L.block_type == C1.SHORT_TYPE && V < b / 2 && (V = b / 2), V > b * 3 / 2 ? V = b * 3 / 2 : V < 0 && (V = 0), w[y][x] += V;
        }
        w[y][x] > LameInternalFlags.MAX_BITS_PER_CHANNEL && (w[y][x] = LameInternalFlags.MAX_BITS_PER_CHANNEL), v += w[y][x];
      }
      if (v > LameInternalFlags.MAX_BITS_PER_GRANULE)
        for (x = 0; x < R.channels_out; ++x)
          w[y][x] *= LameInternalFlags.MAX_BITS_PER_GRANULE, w[y][x] /= v;
    }
    if (R.mode_ext == C1.MPG_MD_MS_LR)
      for (y = 0; y < R.mode_gr; y++)
        A.reduce_side(
          w[y],
          h[y],
          b * R.channels_out,
          LameInternalFlags.MAX_BITS_PER_GRANULE
        );
    for (_1 = 0, y = 0; y < R.mode_gr; y++)
      for (x = 0; x < R.channels_out; x++)
        w[y][x] > LameInternalFlags.MAX_BITS_PER_CHANNEL && (w[y][x] = LameInternalFlags.MAX_BITS_PER_CHANNEL), _1 += w[y][x];
    if (_1 > l[0])
      for (y = 0; y < R.mode_gr; y++)
        for (x = 0; x < R.channels_out; x++)
          w[y][x] *= l[0], w[y][x] /= _1;
  };
}
var P0 = x0, V0 = G1, Ra = V0.assert;
function I0() {
  var p;
  this.setModules = function(E) {
    p = E;
  }, this.ResvFrameBegin = function(E, A) {
    var j = E.internal_flags, K, D = j.l3_side, Z = p.getframebits(E);
    A.bits = (Z - j.sideinfo_len * 8) / j.mode_gr;
    var Y = 8 * 256 * j.mode_gr - 8;
    E.brate > 320 ? K = 8 * int(E.brate * 1e3 / (E.out_samplerate / 1152) / 8 + 0.5) : (K = 8 * 1440, E.strict_ISO && (K = 8 * int(32e4 / (E.out_samplerate / 1152) / 8 + 0.5))), j.ResvMax = K - Z, j.ResvMax > Y && (j.ResvMax = Y), (j.ResvMax < 0 || E.disable_reservoir) && (j.ResvMax = 0);
    var $ = A.bits * j.mode_gr + Math.min(j.ResvSize, j.ResvMax);
    return $ > K && ($ = K), Ra(j.ResvMax % 8 == 0), Ra(j.ResvMax >= 0), D.resvDrain_pre = 0, j.pinfo != null && (j.pinfo.mean_bits = A.bits / 2, j.pinfo.resvsize = j.ResvSize), $;
  }, this.ResvMaxBits = function(E, A, j, K) {
    var D = E.internal_flags, Z, Y = D.ResvSize, $ = D.ResvMax;
    K != 0 && (Y += A), D.substep_shaping & 1 && ($ *= 0.9), j.bits = A, Y * 10 > $ * 9 ? (Z = Y - $ * 9 / 10, j.bits += Z, D.substep_shaping |= 128) : (Z = 0, D.substep_shaping &= 127, !E.disable_reservoir && !(D.substep_shaping & 1) && (j.bits -= 0.1 * A));
    var u1 = Y < D.ResvMax * 6 / 10 ? Y : D.ResvMax * 6 / 10;
    return u1 -= Z, u1 < 0 && (u1 = 0), u1;
  }, this.ResvAdjust = function(E, A) {
    E.ResvSize -= A.part2_3_length + A.part2_length;
  }, this.ResvFrameEnd = function(E, A) {
    var j, K = E.l3_side;
    E.ResvSize += A * E.mode_gr;
    var D = 0;
    K.resvDrain_post = 0, K.resvDrain_pre = 0, (j = E.ResvSize % 8) != 0 && (D += j), j = E.ResvSize - D - E.ResvMax, j > 0 && (D += j);
    {
      var Z = Math.min(K.main_data_begin * 8, D) / 8;
      K.resvDrain_pre += 8 * Z, D -= 8 * Z, E.ResvSize -= 8 * Z, K.main_data_begin -= Z;
    }
    K.resvDrain_post += D, E.ResvSize -= D;
  };
}
var L0 = I0;
function D0() {
  var p = "http://www.mp3dev.org/", E = 3, A = 98, j = 4, K = 0, D = 93;
  this.getLameVersion = function() {
    return E + "." + A + "." + j;
  }, this.getLameShortVersion = function() {
    return E + "." + A + "." + j;
  }, this.getLameVeryShortVersion = function() {
    return "LAME" + E + "." + A + "r";
  }, this.getPsyVersion = function() {
    return K + "." + D;
  }, this.getLameUrl = function() {
    return p;
  }, this.getLameOsBitness = function() {
    return "32bits";
  };
}
var N0 = D0, Ue = G1, X0 = Ue.System, Ct = Ue.VbrMode, Ba = Ue.ShortBlock, O0 = Ue.Arrays, ht = Ue.new_byte, H0 = Ue.assert;
at.NUMTOCENTRIES = 100;
at.MAXFRAMESIZE = 2880;
function at() {
  var p, E, A;
  this.setModules = function(b, a, v) {
    p = b, E = a, A = v;
  };
  var j = 1, K = 2, D = 4, Z = 8, Y = at.NUMTOCENTRIES, $ = at.MAXFRAMESIZE, u1 = Y + 4 + 4 + 4 + 4 + 4, g = u1 + 9 + 1 + 1 + 8 + 1 + 1 + 3 + 1 + 1 + 2 + 4 + 2 + 2, m = 128, N = 64, n1 = 32, U = null, r1 = "Xing", W = "Info", M = [
    0,
    49345,
    49537,
    320,
    49921,
    960,
    640,
    49729,
    50689,
    1728,
    1920,
    51009,
    1280,
    50625,
    50305,
    1088,
    52225,
    3264,
    3456,
    52545,
    3840,
    53185,
    52865,
    3648,
    2560,
    51905,
    52097,
    2880,
    51457,
    2496,
    2176,
    51265,
    55297,
    6336,
    6528,
    55617,
    6912,
    56257,
    55937,
    6720,
    7680,
    57025,
    57217,
    8e3,
    56577,
    7616,
    7296,
    56385,
    5120,
    54465,
    54657,
    5440,
    55041,
    6080,
    5760,
    54849,
    53761,
    4800,
    4992,
    54081,
    4352,
    53697,
    53377,
    4160,
    61441,
    12480,
    12672,
    61761,
    13056,
    62401,
    62081,
    12864,
    13824,
    63169,
    63361,
    14144,
    62721,
    13760,
    13440,
    62529,
    15360,
    64705,
    64897,
    15680,
    65281,
    16320,
    16e3,
    65089,
    64001,
    15040,
    15232,
    64321,
    14592,
    63937,
    63617,
    14400,
    10240,
    59585,
    59777,
    10560,
    60161,
    11200,
    10880,
    59969,
    60929,
    11968,
    12160,
    61249,
    11520,
    60865,
    60545,
    11328,
    58369,
    9408,
    9600,
    58689,
    9984,
    59329,
    59009,
    9792,
    8704,
    58049,
    58241,
    9024,
    57601,
    8640,
    8320,
    57409,
    40961,
    24768,
    24960,
    41281,
    25344,
    41921,
    41601,
    25152,
    26112,
    42689,
    42881,
    26432,
    42241,
    26048,
    25728,
    42049,
    27648,
    44225,
    44417,
    27968,
    44801,
    28608,
    28288,
    44609,
    43521,
    27328,
    27520,
    43841,
    26880,
    43457,
    43137,
    26688,
    30720,
    47297,
    47489,
    31040,
    47873,
    31680,
    31360,
    47681,
    48641,
    32448,
    32640,
    48961,
    32e3,
    48577,
    48257,
    31808,
    46081,
    29888,
    30080,
    46401,
    30464,
    47041,
    46721,
    30272,
    29184,
    45761,
    45953,
    29504,
    45313,
    29120,
    28800,
    45121,
    20480,
    37057,
    37249,
    20800,
    37633,
    21440,
    21120,
    37441,
    38401,
    22208,
    22400,
    38721,
    21760,
    38337,
    38017,
    21568,
    39937,
    23744,
    23936,
    40257,
    24320,
    40897,
    40577,
    24128,
    23040,
    39617,
    39809,
    23360,
    39169,
    22976,
    22656,
    38977,
    34817,
    18624,
    18816,
    35137,
    19200,
    35777,
    35457,
    19008,
    19968,
    36545,
    36737,
    20288,
    36097,
    19904,
    19584,
    35905,
    17408,
    33985,
    34177,
    17728,
    34561,
    18368,
    18048,
    34369,
    33281,
    17088,
    17280,
    33601,
    16640,
    33217,
    32897,
    16448
  ];
  function f(b, a) {
    if (b.nVbrNumFrames++, b.sum += a, b.seen++, !(b.seen < b.want) && (b.pos < b.size && (b.bag[b.pos] = b.sum, b.pos++, b.seen = 0), b.pos == b.size)) {
      for (var v = 1; v < b.size; v += 2)
        b.bag[v / 2] = b.bag[v];
      b.want *= 2, b.pos /= 2;
    }
  }
  function h(b, a) {
    if (!(b.pos <= 0))
      for (var v = 1; v < Y; ++v) {
        var V = v / Y, L, I, G = 0 | Math.floor(V * b.pos);
        G > b.pos - 1 && (G = b.pos - 1), L = b.bag[G], I = b.sum;
        var B = 0 | 256 * L / I;
        B > 255 && (B = 255), a[v] = 255 & B;
      }
  }
  this.addVbrFrame = function(b) {
    var a = b.internal_flags, v = Tables.bitrate_table[b.version][a.bitrate_index];
    H0(a.VBR_seek_table.bag != null), f(a.VBR_seek_table, v);
  };
  function w(b, a) {
    var v = b[a + 0] & 255;
    return v <<= 8, v |= b[a + 1] & 255, v <<= 8, v |= b[a + 2] & 255, v <<= 8, v |= b[a + 3] & 255, v;
  }
  function e(b, a, v) {
    b[a + 0] = 255 & (v >> 24 & 255), b[a + 1] = 255 & (v >> 16 & 255), b[a + 2] = 255 & (v >> 8 & 255), b[a + 3] = 255 & (v & 255);
  }
  function l(b, a, v) {
    b[a + 0] = 255 & (v >> 8 & 255), b[a + 1] = 255 & (v & 255);
  }
  function R(b, a) {
    return new String(b, a, r1.length(), U).equals(r1) || new String(b, a, W.length(), U).equals(W);
  }
  function P(b, a, v) {
    return 255 & (b << a | v & ~(-1 << a));
  }
  function O(b, a) {
    var v = b.internal_flags;
    a[0] = P(a[0], 8, 255), a[1] = P(a[1], 3, 7), a[1] = P(
      a[1],
      1,
      b.out_samplerate < 16e3 ? 0 : 1
    ), a[1] = P(a[1], 1, b.version), a[1] = P(a[1], 2, 1), a[1] = P(a[1], 1, b.error_protection ? 0 : 1), a[2] = P(a[2], 4, v.bitrate_index), a[2] = P(a[2], 2, v.samplerate_index), a[2] = P(a[2], 1, 0), a[2] = P(a[2], 1, b.extension), a[3] = P(a[3], 2, b.mode.ordinal()), a[3] = P(a[3], 2, v.mode_ext), a[3] = P(a[3], 1, b.copyright), a[3] = P(a[3], 1, b.original), a[3] = P(a[3], 2, b.emphasis), a[0] = 255;
    var V = 255 & (a[1] & 241), L;
    b.version == 1 ? L = m : b.out_samplerate < 16e3 ? L = n1 : L = N, b.VBR == Ct.vbr_off && (L = b.brate);
    var I;
    b.free_format ? I = 0 : I = 255 & 16 * p.BitrateIndex(
      L,
      b.version,
      b.out_samplerate
    ), b.version == 1 ? (a[1] = 255 & (V | 10), V = 255 & (a[2] & 13), a[2] = 255 & (I | V)) : (a[1] = 255 & (V | 2), V = 255 & (a[2] & 13), a[2] = 255 & (I | V));
  }
  this.getVbrTag = function(b) {
    var a = new VBRTagData(), v = 0;
    a.flags = 0;
    var V = b[v + 1] >> 3 & 1, L = b[v + 2] >> 2 & 3, I = b[v + 3] >> 6 & 3, G = b[v + 2] >> 4 & 15;
    if (G = Tables.bitrate_table[V][G], b[v + 1] >> 4 == 14 ? a.samprate = Tables.samplerate_table[2][L] : a.samprate = Tables.samplerate_table[V][L], V != 0 ? I != 3 ? v += 36 : v += 21 : I != 3 ? v += 21 : v += 13, !R(b, v))
      return null;
    v += 4, a.hId = V;
    var B = a.flags = w(b, v);
    if (v += 4, B & j && (a.frames = w(b, v), v += 4), B & K && (a.bytes = w(b, v), v += 4), B & D) {
      if (a.toc != null)
        for (var n = 0; n < Y; n++)
          a.toc[n] = b[v + n];
      v += Y;
    }
    a.vbrScale = -1, B & Z && (a.vbrScale = w(b, v), v += 4), a.headersize = (V + 1) * 72e3 * G / a.samprate, v += 21;
    var r = b[v + 0] << 4;
    r += b[v + 1] >> 4;
    var t = (b[v + 1] & 15) << 8;
    return t += b[v + 2] & 255, (r < 0 || r > 3e3) && (r = -1), (t < 0 || t > 3e3) && (t = -1), a.encDelay = r, a.encPadding = t, a;
  }, this.InitVbrTag = function(b) {
    var a = b.internal_flags, v;
    b.version == 1 ? v = m : b.out_samplerate < 16e3 ? v = n1 : v = N, b.VBR == Ct.vbr_off && (v = b.brate);
    var V = (b.version + 1) * 72e3 * v / b.out_samplerate, L = a.sideinfo_len + g;
    if (a.VBR_seek_table.TotalFrameSize = V, V < L || V > $) {
      b.bWriteVbrTag = !1;
      return;
    }
    a.VBR_seek_table.nVbrNumFrames = 0, a.VBR_seek_table.nBytesWritten = 0, a.VBR_seek_table.sum = 0, a.VBR_seek_table.seen = 0, a.VBR_seek_table.want = 1, a.VBR_seek_table.pos = 0, a.VBR_seek_table.bag == null && (a.VBR_seek_table.bag = new int[400](), a.VBR_seek_table.size = 400);
    var I = ht($);
    O(b, I);
    for (var G = a.VBR_seek_table.TotalFrameSize, B = 0; B < G; ++B)
      E.add_dummy_byte(b, I[B] & 255, 1);
  };
  function y(b, a) {
    var v = a ^ b;
    return a = a >> 8 ^ M[v & 255], a;
  }
  this.updateMusicCRC = function(b, a, v, V) {
    for (var L = 0; L < V; ++L)
      b[0] = y(a[v + L], b[0]);
  };
  function x(b, a, v, V, L) {
    var I = b.internal_flags, G = 0, B = b.encoder_delay, n = b.encoder_padding, r = 100 - 10 * b.VBR_q - b.quality, t = A.getLameVeryShortVersion(), i, u = 0, F, e1 = [1, 5, 3, 2, 4, 0, 3], T = 0 | (b.lowpassfreq / 100 + 0.5 > 255 ? 255 : b.lowpassfreq / 100 + 0.5), q = 0, i1 = 0, h1 = 0, g1 = b.internal_flags.noise_shaping, S1 = 0, v1 = 0, w1 = 0, y1 = 0, F1 = 0, pe = (b.exp_nspsytune & 1) != 0, s = (b.exp_nspsytune & 2) != 0, _ = !1, d1 = !1, R1 = b.internal_flags.nogap_total, I1 = b.internal_flags.nogap_current, k1 = b.ATHtype, T1 = 0, A1;
    switch (b.VBR) {
      case vbr_abr:
        A1 = b.VBR_mean_bitrate_kbps;
        break;
      case vbr_off:
        A1 = b.brate;
        break;
      default:
        A1 = b.VBR_min_bitrate_kbps;
    }
    switch (b.VBR.ordinal() < e1.length ? i = e1[b.VBR.ordinal()] : i = 0, F = 16 * u + i, I.findReplayGain && (I.RadioGain > 510 && (I.RadioGain = 510), I.RadioGain < -510 && (I.RadioGain = -510), i1 = 8192, i1 |= 3072, I.RadioGain >= 0 ? i1 |= I.RadioGain : (i1 |= 512, i1 |= -I.RadioGain)), I.findPeakSample && (q = Math.abs(0 | I.PeakSample / 32767 * Math.pow(2, 23) + 0.5)), R1 != -1 && (I1 > 0 && (d1 = !0), I1 < R1 - 1 && (_ = !0)), T1 = k1 + ((pe ? 1 : 0) << 4) + ((s ? 1 : 0) << 5) + ((_ ? 1 : 0) << 6) + ((d1 ? 1 : 0) << 7), r < 0 && (r = 0), b.mode) {
      case MONO:
        S1 = 0;
        break;
      case STEREO:
        S1 = 1;
        break;
      case DUAL_CHANNEL:
        S1 = 2;
        break;
      case JOINT_STEREO:
        b.force_ms ? S1 = 4 : S1 = 3;
        break;
      case NOT_SET:
      default:
        S1 = 7;
        break;
    }
    b.in_samplerate <= 32e3 ? w1 = 0 : b.in_samplerate == 48e3 ? w1 = 2 : b.in_samplerate > 48e3 ? w1 = 3 : w1 = 1, (b.short_blocks == Ba.short_block_forced || b.short_blocks == Ba.short_block_dispensed || b.lowpassfreq == -1 && b.highpassfreq == -1 || /* "-k" */
    b.scale_left < b.scale_right || b.scale_left > b.scale_right || b.disable_reservoir && b.brate < 320 || b.noATH || b.ATHonly || k1 == 0 || b.in_samplerate <= 32e3) && (v1 = 1), y1 = g1 + (S1 << 2) + (v1 << 5) + (w1 << 6), F1 = I.nMusicCRC, e(v, V + G, r), G += 4;
    for (var L1 = 0; L1 < 9; L1++)
      v[V + G + L1] = 255 & t.charAt(L1);
    G += 9, v[V + G] = 255 & F, G++, v[V + G] = 255 & T, G++, e(
      v,
      V + G,
      q
    ), G += 4, l(
      v,
      V + G,
      i1
    ), G += 2, l(
      v,
      V + G,
      h1
    ), G += 2, v[V + G] = 255 & T1, G++, A1 >= 255 ? v[V + G] = 255 : v[V + G] = 255 & A1, G++, v[V + G] = 255 & B >> 4, v[V + G + 1] = 255 & (B << 4) + (n >> 8), v[V + G + 2] = 255 & n, G += 3, v[V + G] = 255 & y1, G++, v[V + G++] = 0, l(v, V + G, b.preset), G += 2, e(v, V + G, a), G += 4, l(v, V + G, F1), G += 2;
    for (var P1 = 0; P1 < G; P1++)
      L = y(v[V + P1], L);
    return l(v, V + G, L), G += 2, G;
  }
  function _1(b) {
    b.seek(0);
    var a = ht(10);
    b.readFully(a);
    var v;
    return new String(a, "ISO-8859-1").startsWith("ID3") ? v = 0 : v = ((a[6] & 127) << 21 | (a[7] & 127) << 14 | (a[8] & 127) << 7 | a[9] & 127) + a.length, v;
  }
  this.getLameTagFrame = function(b, a) {
    var v = b.internal_flags;
    if (!b.bWriteVbrTag || v.Class_ID != Lame.LAME_ID || v.VBR_seek_table.pos <= 0)
      return 0;
    if (a.length < v.VBR_seek_table.TotalFrameSize)
      return v.VBR_seek_table.TotalFrameSize;
    O0.fill(a, 0, v.VBR_seek_table.TotalFrameSize, 0), O(b, a);
    var V = ht(Y);
    if (b.free_format)
      for (var L = 1; L < Y; ++L)
        V[L] = 255 & 255 * L / 100;
    else
      h(v.VBR_seek_table, V);
    var I = v.sideinfo_len;
    b.error_protection && (I -= 2), b.VBR == Ct.vbr_off ? (a[I++] = 255 & W.charAt(0), a[I++] = 255 & W.charAt(1), a[I++] = 255 & W.charAt(2), a[I++] = 255 & W.charAt(3)) : (a[I++] = 255 & r1.charAt(0), a[I++] = 255 & r1.charAt(1), a[I++] = 255 & r1.charAt(2), a[I++] = 255 & r1.charAt(3)), e(a, I, j + K + D + Z), I += 4, e(a, I, v.VBR_seek_table.nVbrNumFrames), I += 4;
    var G = v.VBR_seek_table.nBytesWritten + v.VBR_seek_table.TotalFrameSize;
    e(a, I, 0 | G), I += 4, X0.arraycopy(V, 0, a, I, V.length), I += V.length, b.error_protection && E.CRC_writeheader(v, a);
    for (var B = 0, L = 0; L < I; L++)
      B = y(a[L], B);
    return I += x(b, G, a, I, B), v.VBR_seek_table.TotalFrameSize;
  }, this.putVbrTag = function(b, a) {
    var v = b.internal_flags;
    if (v.VBR_seek_table.pos <= 0 || (a.seek(a.length()), a.length() == 0))
      return -1;
    var V = _1(a);
    a.seek(V);
    var L = ht($), I = getLameTagFrame(b, L);
    return I > L.length ? -1 : (I < 1 || a.write(L, 0, I), 0);
  };
}
var C0 = at, Ka = G1, Aa = Ka.new_byte, Y0 = Ka.assert, F0 = Gt(), j0 = w0, q0 = za, z0 = Qa(), Z0 = P0, G0 = Ua(), Q0 = L0, U0 = nt, W0 = Zt();
se();
var K0 = N0, J0 = C0;
function $0() {
  this.setModules = function(p, E) {
  };
}
function er() {
  this.setModules = function(p, E, A) {
  };
}
function tr() {
}
function ar() {
  this.setModules = function(p, E) {
  };
}
function sr(p, E, A) {
  arguments.length != 3 && (console.error("WARN: Mp3Encoder(channels, samplerate, kbps) not specified"), p = 1, E = 44100, A = 128);
  var j = new F0(), K = new $0(), D = new q0(), Z = new W0(), Y = new j0(), $ = new z0(), u1 = new Z0(), g = new J0(), m = new K0(), N = new ar(), n1 = new Q0(), U = new G0(), r1 = new er(), W = new tr();
  j.setModules(D, Z, Y, $, u1, g, m, N, W), Z.setModules(D, W, m, g), N.setModules(Z, m), Y.setModules(j), u1.setModules(Z, n1, $, U), $.setModules(U, n1, j.enc.psy), n1.setModules(Z), U.setModules($), g.setModules(j, Z, m), K.setModules(r1, W), r1.setModules(m, N, Y);
  var M = j.lame_init();
  M.num_channels = p, M.in_samplerate = E, M.brate = A, M.mode = U0.STEREO, M.quality = 3, M.bWriteVbrTag = !1, M.disable_reservoir = !0, M.write_id3tag_automatic = !1, j.lame_init_params(M);
  var f = 1152, h = 0 | 1.25 * f + 7200, w = Aa(h);
  this.encodeBuffer = function(e, l) {
    p == 1 && (l = e), Y0(e.length == l.length), e.length > f && (f = e.length, h = 0 | 1.25 * f + 7200, w = Aa(h));
    var R = j.lame_encode_buffer(M, e, l, e.length, w, 0, h);
    return new Int8Array(w.subarray(0, R));
  }, this.flush = function() {
    var e = j.lame_encode_flush(M, w, 0, h);
    return new Int8Array(w.subarray(0, e));
  };
}
function Ae() {
  this.dataOffset = 0, this.dataLen = 0, this.channels = 0, this.sampleRate = 0;
}
function gt(p) {
  return p.charCodeAt(0) << 24 | p.charCodeAt(1) << 16 | p.charCodeAt(2) << 8 | p.charCodeAt(3);
}
Ae.RIFF = gt("RIFF");
Ae.WAVE = gt("WAVE");
Ae.fmt_ = gt("fmt ");
Ae.data = gt("data");
Ae.readHeader = function(p) {
  var E = new Ae(), A = p.getUint32(0, !1);
  if (Ae.RIFF == A && (p.getUint32(4, !0), Ae.WAVE == p.getUint32(8, !1) && Ae.fmt_ == p.getUint32(12, !1))) {
    var j = p.getUint32(16, !0), K = 20;
    switch (j) {
      case 16:
      case 18:
        E.channels = p.getUint16(K + 2, !0), E.sampleRate = p.getUint32(K + 4, !0);
        break;
      default:
        throw "extended fmt chunk not implemented";
    }
    K += j;
    for (var D = Ae.data, Z = 0; D != A && (A = p.getUint32(K, !1), Z = p.getUint32(K + 4, !0), D != A); )
      K += Z + 8;
    return E.dataLen = Z, E.dataOffset = K + 8, E;
  }
};
var rr = sr;
class nr {
  constructor(E) {
    this.bitRate = E.bitRate, this.sampleRate = E.sampleRate, this.dataBuffer = [], this.encoder = new rr(1, this.sampleRate, this.bitRate);
  }
  encode(E) {
    const j = this._convertBuffer(E);
    let K = j.length;
    for (let D = 0; K >= 0; D += 1152) {
      const Z = j.subarray(D, D + 1152), Y = this.encoder.encodeBuffer(Z);
      this.dataBuffer.push(new Int8Array(Y)), K -= 1152;
    }
  }
  finish() {
    this.dataBuffer.push(this.encoder.flush());
    const E = new Blob(this.dataBuffer, { type: "audio/mp3" });
    return this.dataBuffer = [], {
      id: Date.now(),
      blob: E,
      url: URL.createObjectURL(E)
    };
  }
  _floatTo16BitPCM(E, A) {
    for (let j = 0; j < E.length; j++) {
      const K = Math.max(-1, Math.min(1, E[j]));
      A[j] = K < 0 ? K * 32768 : K * 32767;
    }
  }
  _convertBuffer(E) {
    const A = new Float32Array(E), j = new Int16Array(E.length);
    return this._floatTo16BitPCM(A, j), j;
  }
}
class ir {
  constructor(E) {
    this.bufferSize = E.bufferSize || 4096, this.sampleRate = E.sampleRate, this.samples = E.samples;
  }
  finish() {
    this._joinSamples();
    let E = new ArrayBuffer(44 + this.samples.length * 2), A = new DataView(E);
    this._writeString(A, 0, "RIFF"), A.setUint32(4, 36 + this.samples.length * 2, !0), this._writeString(A, 8, "WAVE"), this._writeString(A, 12, "fmt "), A.setUint32(16, 16, !0), A.setUint16(20, 1, !0), A.setUint16(22, 1, !0), A.setUint32(24, this.sampleRate, !0), A.setUint32(28, this.sampleRate * 4, !0), A.setUint16(32, 4, !0), A.setUint16(34, 16, !0), this._writeString(A, 36, "data"), A.setUint32(40, this.samples.length * 2, !0), this._floatTo16BitPCM(A, 44, this.samples);
    const j = new Blob([A], { type: "audio/wav" });
    return {
      id: Date.now(),
      blob: j,
      url: URL.createObjectURL(j)
    };
  }
  _floatTo16BitPCM(E, A, j) {
    for (let K = 0; K < j.length; K++, A += 2) {
      let D = Math.max(-1, Math.min(1, j[K]));
      E.setInt16(A, D < 0 ? D * 32768 : D * 32767, !0);
    }
  }
  _joinSamples() {
    let E = this.samples.length * this.bufferSize, A = new Float64Array(E), j = 0;
    for (let K = 0; K < this.samples.length; K++) {
      let D = this.samples[K];
      A.set(D, j), j += D.length;
    }
    this.samples = A;
  }
  _writeString(E, A, j) {
    for (let K = 0; K < j.length; K++)
      E.setUint8(A + K, j.charCodeAt(K));
  }
}
class _r {
  constructor(E = {}) {
    this.beforeRecording = E.beforeRecording, this.pauseRecording = E.pauseRecording, this.afterRecording = E.afterRecording, this.micFailed = E.micFailed, this.format = E.format, this.encoderOptions = {
      bitRate: E.bitRate,
      sampleRate: E.sampleRate
    }, this.bufferSize = 4096, this.records = [], this.isPause = !1, this.isRecording = !1, this.duration = 0, this.volume = 0, this.wavSamples = [], this._duration = 0;
  }
  start() {
    const E = {
      video: !1,
      audio: {
        channelCount: 1,
        echoCancellation: !1
      }
    };
    this.beforeRecording && this.beforeRecording("start recording"), navigator.mediaDevices.getUserMedia(E).then(this._micCaptured.bind(this)).catch(this._micError.bind(this)), this.isPause = !1, this.isRecording = !0, this._isMp3() && !this.lameEncoder && (this.lameEncoder = new nr(this.encoderOptions));
  }
  stop() {
    this.stream.getTracks().forEach((A) => A.stop()), this.input.disconnect(), this.processor.disconnect(), this.context.close();
    let E = null;
    this._isMp3() ? E = this.lameEncoder.finish() : (E = new ir({
      bufferSize: this.bufferSize,
      sampleRate: this.encoderOptions.sampleRate,
      samples: this.wavSamples
    }).finish(), this.wavSamples = []), E.duration = Pe(this.duration), this.records.push(E), this._duration = 0, this.duration = 0, this.isPause = !1, this.isRecording = !1, this.afterRecording && this.afterRecording(E);
  }
  pause() {
    this.stream.getTracks().forEach((E) => E.stop()), this.input.disconnect(), this.processor.disconnect(), this._duration = this.duration, this.isPause = !0, this.pauseRecording && this.pauseRecording("pause recording");
  }
  recordList() {
    return this.records;
  }
  lastRecord() {
    return this.records.slice(-1).pop();
  }
  _micCaptured(E) {
    this.context = new (window.AudioContext || window.webkitAudioContext)(), this.duration = this._duration, this.input = this.context.createMediaStreamSource(E), this.processor = this.context.createScriptProcessor(this.bufferSize, 1, 1), this.stream = E, this.processor.onaudioprocess = (A) => {
      const j = A.inputBuffer.getChannelData(0);
      let K = 0;
      this._isMp3() ? this.lameEncoder.encode(j) : this.wavSamples.push(new Float32Array(j));
      for (let D = 0; D < j.length; ++D)
        K += j[D] * j[D];
      this.duration = parseFloat(this._duration) + parseFloat(this.context.currentTime.toFixed(2)), this.volume = Math.sqrt(K / j.length).toFixed(2);
    }, this.input.connect(this.processor), this.processor.connect(this.context.destination);
  }
  _micError(E) {
    this.micFailed && this.micFailed(E);
  }
  _isMp3() {
    return this.format.toLowerCase() === "mp3";
  }
}
const or = {
  name: "AudioRecorder",
  mixins: [ka],
  props: {
    attempts: { type: Number },
    time: { type: Number },
    bitRate: { type: Number, default: 128 },
    sampleRate: { type: Number, default: 44100 },
    showDownloadButton: { type: Boolean, default: !0 },
    showUploadButton: { type: Boolean, default: !0 },
    micFailed: { type: Function },
    beforeRecording: { type: Function },
    pauseRecording: { type: Function },
    afterRecording: { type: Function },
    failedUpload: { type: Function },
    beforeUpload: { type: Function },
    successfulUpload: { type: Function },
    selectRecord: { type: Function },
    customUploader: { type: Function }
  },
  data() {
    return {
      isUploading: !1,
      recorder: this._initRecorder(),
      recordList: [],
      selected: {},
      uploadStatus: null
    };
  },
  components: {
    AudioPlayer: Yt,
    Downloader: Ms,
    IconButton: st,
    Uploader: Bs
  },
  beforeUnmount() {
    this.stopRecorder();
  },
  methods: {
    onStartUpload() {
      this.isUploading = !0, this.beforeUpload && this.beforeUpload("before upload");
    },
    onEndUpload(p) {
      this.isUploading = !1, p.status === "success" ? this.successfulUpload && this.successfulUpload(p.response) : this.failedUpload && this.failedUpload(p.response);
    },
    toggleRecorder() {
      this.attempts && this.recorder.records.length >= this.attempts || (!this.isRecording || this.isRecording && this.isPause ? this.recorder.start() : this.recorder.pause());
    },
    stopRecorder() {
      this.isRecording && (this.recorder.stop(), this.recordList = this.recorder.recordList());
    },
    removeRecord(p) {
      this.recordList.splice(p, 1), this.selected.url = null, this.$refs.player._resetProgress();
    },
    choiceRecord(p) {
      this.selected !== p && (this.selected = p, this.selectRecord && this.selectRecord(p));
    },
    _initRecorder() {
      return new _r({
        beforeRecording: this.beforeRecording,
        afterRecording: this.afterRecording,
        pauseRecording: this.pauseRecording,
        micFailed: this.micFailed,
        bitRate: this.bitRate,
        sampleRate: this.sampleRate,
        format: this.format
      });
    }
  },
  computed: {
    attemptsLeft() {
      return this.attempts - this.recordList.length;
    },
    iconButtonType() {
      return this.isRecording && this.isPause ? "mic" : this.isRecording ? "pause" : "mic";
    },
    isPause() {
      return this.recorder.isPause;
    },
    isRecording() {
      return this.recorder.isRecording;
    },
    recordedTime() {
      return this.time && this.recorder.duration >= this.time * 60 && this.stopRecorder(), Pe(this.recorder.duration);
    },
    volume() {
      return parseFloat(this.recorder.volume);
    }
  }
}, lr = { class: "ar" }, fr = {
  key: 0,
  class: "ar__overlay"
}, cr = {
  key: 1,
  class: "ar-spinner"
}, hr = /* @__PURE__ */ re("div", { class: "ar-spinner__dot" }, null, -1), ur = /* @__PURE__ */ re("div", { class: "ar-spinner__dot" }, null, -1), pr = /* @__PURE__ */ re("div", { class: "ar-spinner__dot" }, null, -1), mr = [
  hr,
  ur,
  pr
], br = { class: "ar-recorder" }, dr = {
  key: 0,
  class: "ar-recorder__records-limit"
}, gr = { class: "ar-recorder__duration" }, vr = {
  key: 1,
  class: "ar-recorder__time-limit"
}, wr = { class: "ar-records" }, Mr = ["onClick"], Sr = ["onClick"], Rr = { class: "ar__text" }, Br = { class: "ar__text" };
function Ar(p, E, A, j, K, D) {
  const Z = Me("icon-button"), Y = Me("downloader"), $ = Me("uploader"), u1 = Me("audio-player");
  return ae(), de("div", lr, [
    K.isUploading ? (ae(), de("div", fr)) : De("", !0),
    K.isUploading ? (ae(), de("div", cr, mr)) : De("", !0),
    re("div", {
      class: ut(["ar-content", { ar__blur: K.isUploading }])
    }, [
      re("div", br, [
        Ve(Z, {
          class: ut(["ar-icon ar-icon__lg", {
            "ar-icon--rec": D.isRecording,
            "ar-icon--pulse": D.isRecording && D.volume > 0.02
          }]),
          name: D.iconButtonType,
          onClick: D.toggleRecorder
        }, null, 8, ["name", "class", "onClick"]),
        Ve(Z, {
          class: "ar-icon ar-icon__sm ar-recorder__stop",
          name: "stop",
          onClick: D.stopRecorder
        }, null, 8, ["onClick"])
      ]),
      A.attempts ? (ae(), de("div", dr, " Attempts: " + xe(D.attemptsLeft) + "/" + xe(A.attempts), 1)) : De("", !0),
      re("div", gr, xe(D.recordedTime), 1),
      A.time ? (ae(), de("div", vr, " Record duration is limited: " + xe(A.time) + "m ", 1)) : De("", !0),
      re("div", wr, [
        (ae(!0), de(es, null, ts(K.recordList, (g, m) => (ae(), de("div", {
          class: ut(["ar-records__record", { "ar-records__record--selected": g.id === K.selected.id }]),
          key: g.id,
          onClick: (N) => D.choiceRecord(g)
        }, [
          g.id === K.selected.id ? (ae(), de("div", {
            key: 0,
            class: "ar__rm",
            onClick: (N) => D.removeRecord(m)
          }, " × ", 8, Sr)) : De("", !0),
          re("div", Rr, "Record " + xe(m + 1), 1),
          re("div", Br, xe(g.duration), 1),
          g.id === K.selected.id && A.showDownloadButton ? (ae(), pt(Y, {
            key: 1,
            class: "ar__downloader",
            record: g,
            filename: p.filename
          }, null, 8, ["record", "filename"])) : De("", !0),
          g.id === K.selected.id && A.showUploadButton ? (ae(), pt($, {
            key: 2,
            class: "ar__uploader",
            record: g,
            filename: p.filename,
            headers: p.headers,
            "upload-url": p.uploadUrl,
            onStartUpload: D.onStartUpload,
            onEndUpload: D.onEndUpload,
            customUploader: A.customUploader
          }, null, 8, ["record", "filename", "headers", "upload-url", "onStartUpload", "onEndUpload", "customUploader"])) : De("", !0)
        ], 10, Mr))), 128))
      ]),
      Ve(u1, {
        ref: "player",
        record: K.selected
      }, null, 8, ["record"])
    ], 2)
  ]);
}
const ya = /* @__PURE__ */ Ye(or, [["render", Ar]]), Tr = {
  install(p) {
    p.component(ya.name, ya), p.component(Yt.name, Yt);
  }
};
export {
  Tr as default
};
