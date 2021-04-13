/*!

  - Slider Revolution 6.3.2 JavaScript Plugin -

..........................xXXXXX.................
................. xXXXXX..xXXXXX..xXXXXX.........
..................xXXXXX..xXXXXX..xXXXXX.........
..........xXXXXX..xXXXXX..xXXXXX..xXXXXX.........
..........xXXXXX..xXXXXX..xXXXXX..xXXXXX.........
..........xXXXXX..xXXXXX..xXXXXX..xXXXXX.........
..........xXXXXX..xXXXXX..xXXXXX..xXXXXX.........
..........xXXXXX..xXXXXX..xXXXXX..xXXXXX.........
.........,xXXXXX..xXXXXX..xXXXXX..xXXXXX.........
.........,xXXXXX..xXXXXX..xXXXXX..xXXXXX.........
.........,xXXXXX..xXXXXX..xXXXXX..xXXXXX.........
..........xXXXXX..xXXXXX..xXXXXX..xXXXXX.........
.....................xxxxxxxxxxxxxxxxxxx.........
.....................xxxxxxxxxxxxxxxxxxx.........
.....................xxxxxxxxxxxxxxxxxxx.........

				VERSION: 6.3.2
			   DATE: 2020-12-01
    @author: Krisztian Horvath, ThemePunch OHG.


UPDATES AND DOCS AT: 
https://www.themepunch.com/support-center
			
GET LICENSE AT: 
https://www.themepunch.com/links/slider_revolution_wordpress_regular_license

LICENSE:
Copyright (c) 2009-2019, ThemePunch. All rights reserved.
This work is subject to the terms at https://www.themepunch.com/links/slider_revolution_wordpress_regular_license (Regular / Extended)

*/
var my="background: linear-gradient(150deg, rgb(111 160 73) 0%, rgb(105 102 24) 100%);width: 100%;height: 100%;opacity: 1;transform: translate(0px, 0px);visibility: inherit;z-index: 20;";
! function (e, t) {
	"use strict";
	var i;
	window.RSANYID = window.RSANYID === t ? [] : window.RSANYID, window.RSANYID_sliderID = window.RSANYID_sliderID === t ? [] : window.RSANYID_sliderID, e.fn.extend({
		revolution: function (s) {
			return this.each(function () {
				i = e.fn.revolution;
				for (var n = document.getElementsByClassName("rs-p-wp-fix"); n[0];) n[0].parentNode.removeChild(n[0]);
				this.id !== t ? (i[l] = {
					anyid: []
				}, this.id = i.revCheckIDS(l, this, !0)) : this.id = "rs_module_" + Math.round(1e7 * Math.random());
				var l = this.id,
					d = i.clone(s);
				i[l] = F(s), i[l].ignoreHeightChange = a && "fullscreen" === i[l].sliderLayout && i[l].ignoreHeightChange, i[l].option_export = d, i[l].anyid = [], i[l]._Lshortcuts = {}, i[l].computedStyle = {}, i[l].c = e(this), i[l].cpar = i[l].c.parent(), i[l].canvas = i[l].c.find("rs-slides"), i[l].caches = {
					calcResponsiveLayersList: [],
					contWidthManager: {}
				}, window.RSBrowser = window.RSBrowser === t ? i.get_browser() : window.RSBrowser, i.setIsIOS(), i[l].noDetach = i[l].BUG_ie_clipPath = "Edge" === window.RSBrowser || "IE" === window.RSBrowser, i.getByTag = r(), i[l].indexhelper = 0, i[l].fullScreenOffsetResult = 0, i[l].level = 0, i[l].rtl = e("body").hasClass("rtl"), i[l]._L = i[l]._L === t ? {} : i[l]._L, i[l].emptyObject = "{}", i[l].dimensionReCheck = {}, i.globalListener === t && i.pageHandler(l), i[l].stopAfterLoops != t && i[l].stopAfterLoops > -1 ? i[l].looptogo = i[l].stopAfterLoops : i[l].looptogo = "disabled", window.T = i[l], i[l].BUG_safari_clipPath = "Safari" === i.get_browser() && i.get_browser_version() > "12", i[l].minHeight = "fullwidth" === i[l].sliderLayout ? 0 : i[l].minHeight != t && "" !== i[l].minHeight ? parseInt(i[l].minHeight, 0) : 0, i[l].minHeight = i[l].minHeight === t ? 0 : i[l].minHeight, i[l].isEdge = "Edge" === i.get_browser(), o(l), i.updateVisibleArea(l), H(l), window.requestAnimationFrame(function () {
					if ("fullscreen" === i[l].sliderLayout) {
						var e = i.getFullscreenOffsets(l);
						0 !== e && i[l].cpar.height(i.getWinH(l) - e)
					}
					i[l].cpar[0].style.visibility = "visible"
				}), "hero" == i[l].sliderType && i[l].c.find("rs-slide").each(function (t) {
					t > 0 && e(this).remove()
				}), i[l].navigation.use = "hero" !== i[l].sliderType && ("carousel" == i[l].sliderType || i[l].navigation.keyboardNavigation || "on" == i[l].navigation.mouseScrollNavigation || "carousel" == i[l].navigation.mouseScrollNavigation || i[l].navigation.touch.touchenabled || i[l].navigation.arrows.enable || i[l].navigation.bullets.enable || i[l].navigation.thumbnails.enable || i[l].navigation.tabs.enable), i[l].c.find("rs-bgvideo").each(function () {
					"RS-BGVIDEO" !== this.tagName || this.id !== t && "" !== this.id || (this.id = "rs-bg-video-" + Math.round(1e6 * Math.random()))
				}), tpGS.force3D = "auto", !0 === i[l].modal.useAsModal && -1 === i.RS_prioList.indexOf(l) && (i.RS_toInit[l] = !1, i.RS_prioList.push(l)), i.RS_killedlist !== t && -1 !== i.RS_killedlist.indexOf(l) && (i.RS_toInit[l] = !1, i.RS_prioList.push(l)), !0 === i.RS_prioListFirstInit && !0 !== i[l].modal.useAsModal && -1 === i.RS_prioList.indexOf(l) && (i.RS_toInit[l] = !1, i.RS_prioList.push(l)), i.initNextRevslider(l)
			})
		},
		getRSJASONOptions: function (e) {
			console.log(JSON.stringify(i[e].option_export))
		},
		getRSVersion: function (e) {
			var t, i, a = window.SliderRevolutionVersion;
			if (!e) {
				for (var r in t = i = "---------------------------------------------------------\n", t += "    Currently Loaded Slider Revolution & SR Modules :\n" + i, a) a.hasOwnProperty(r) && (t += a[r].alias + ": " + a[r].ver + "\n");
				t += i
			}
			return e ? a : t
		},
		revremoveslide: function (t) {
			return this.each(function () {
				var a = this.id;
				if (!(t < 0 || t > i[a].slideamount) && i[a] && i[a].slides.length > 0 && (t > 0 || t <= i[a].slides.length)) {
					var r = i.gA(i[a].slides[t], "key");
					i[a].slideamount = i[a].slideamount - 1, i[a].realslideamount = i[a].realslideamount - 1, n("rs-bullet", r, a), n("rs-tab", r, a), n("rs-thumb", r, a), e(i[a].slides[t]).remove(), i[a].thumbs = s(i[a].thumbs, t), i.updateNavIndexes && i.updateNavIndexes(a), t <= i[a].pr_active_key && (i[a].pr_active_key = i[a].pr_active_key - 1)
				}
			})
		},
		revaddcallback: function (e) {
			return this.each(function () {
				i[this.id] && (i[this.id].callBackArray === t && (i[this.id].callBackArray = []), i[this.id].callBackArray.push(e))
			})
		},
		revgetparallaxproc: function () {
			if (i[this[0].id]) return i[this[0].id].scrollproc
		},
		revdebugmode: function () {},
		revscroll: function (t) {
			return this.each(function () {
				var i = e(this);
				e("body,html").animate({
					scrollTop: i.offset().top + i.height() - t + "px"
				}, {
					duration: 400
				})
			})
		},
		revredraw: function () {
			return this.each(function () {
				h(this.id, t, !0)
			})
		},
		revkill: function () {
			return this.each(function () {
				var a = this.id;
				i[a].c.data("conthover", 1), i[a].c.data("conthoverchanged", 1), i[a].c.trigger("revolution.slide.onpause"), i[a].tonpause = !0, i[a].c.trigger("stoptimer"), i[a].sliderisrunning = !1;
				var r = "updateContainerSizes." + i[a].c.attr("id");
				i.window.unbind(r), tpGS.gsap.killTweensOf(i[a].c.find("*"), !1), tpGS.gsap.killTweensOf(i[a].c, !1), i[a].c.unbind("hover, mouseover, mouseenter,mouseleave, resize"), i[a].c.find("*").each(function () {
					var i = e(this);
					i.unbind("on, hover, mouseenter,mouseleave,mouseover, resize,restarttimer, stoptimer"), i.off("on, hover, mouseenter,mouseleave,mouseover, resize"), i.data("mySplitText", null), i.data("ctl", null), i.data("tween") != t && i.data("tween").kill(), i.data("pztl") != t && i.data("pztl").kill(), i.data("timeline_out") != t && i.data("timeline_out").kill(), i.data("timeline") != t && i.data("timeline").kill(), i.remove(), i.empty(), i = null
				}), tpGS.gsap.killTweensOf(i[a].c.find("*"), !1), tpGS.gsap.killTweensOf(i[a].c, !1), i[a].progressC.remove();
				try {
					i[a].c.closest(".rev_slider_wrapper").detach()
				} catch (e) {}
				try {
					i[a].c.closest("rs-fullwidth-wrap").remove()
				} catch (e) {}
				try {
					i[a].c.closest("rs-module-wrap").remove()
				} catch (e) {}
				try {
					i[a].c.remove()
				} catch (e) {}
				i[a].cpar.detach(), i[a].c.html(""), i[a].c = null, delete i[a], i.RS_prioList.splice(i.RS_prioList.indexOf(a), 1), i.RS_toInit[a] = !1, i.RS_killedlist = i.RS_killedlist === t ? [] : i.RS_killedlist, -1 === i.RS_killedlist.indexOf(a) && i.RS_killedlist.push(a)
			})
		},
		revpause: function () {
			return this.each(function () {
				var a = e(this);
				a != t && a.length > 0 && e("body").find("#" + a.attr("id")).length > 0 && (a.data("conthover", 1), a.data("conthoverchanged", 1), a.trigger("revolution.slide.onpause"), i[this.id].tonpause = !0, a.trigger("stoptimer"))
			})
		},
		revresume: function () {
			return this.each(function () {
				if (i[this.id] !== t) {
					var a = e(this);
					a.data("conthover", 0), a.data("conthoverchanged", 1), a.trigger("revolution.slide.onresume"), i[this.id].tonpause = !1, a.trigger("starttimer")
				}
			})
		},
		revmodal: function (a) {
			var r = this instanceof e ? this[0] : this,
				o = r.id;
			i[r.id] !== t && i.revModal(o, a)
		},
		revstart: function () {
			var a = this instanceof e ? this[0] : this;
			return i[a.id] === t ? (console.log("Slider is Not Existing"), !1) : i[a.id].sliderisrunning || !0 === i[a.id].initEnded ? (console.log("Slider Is Running Already"), !1) : (i[a.id].c = e(a), i[a.id].canvas = i[a.id].c.find("rs-slides"), u(a.id), !0)
		},
		revnext: function () {
			return this.each(function () {
				i[this.id] !== t && i.callingNewSlide(this.id, 1, "carousel" === i[this.id].sliderType)
			})
		},
		revprev: function () {
			return this.each(function () {
				i[this.id] !== t && i.callingNewSlide(this.id, -1, "carousel" === i[this.id].sliderType)
			})
		},
		revmaxslide: function () {
			return e(this).find("rs-slide").length
		},
		revcurrentslide: function () {
			if (i[e(this)[0].id] !== t) return parseInt(i[e(this)[0].id].pr_active_key, 0) + 1
		},
		revlastslide: function () {
			return e(this).find("rs-slide").length
		},
		revshowslide: function (e) {
			return this.each(function () {
				i[this.id] !== t && e !== t && i.callingNewSlide(this.id, "to" + (e - 1))
			})
		},
		revcallslidewithid: function (e) {
			return this.each(function () {
				i[this.id] !== t && i.callingNewSlide(this.id, e, "carousel" === i[this.id].sliderType)
			})
		}
	}), i = e.fn.revolution, e.extend(!0, i, {
		isNumeric: function (e) {
			return !isNaN(parseFloat(e)) && isFinite(e)
		},
		trim: function (e) {
			return e !== t && null !== e && "string" == typeof e ? e.trim() : e
		},
		pageHandler: function (r) {
			i.globalListener = !0, i.window = e(window), i.document = e(document), i.RS_toInit = {}, i.RS_prioList = [], i.RS_swapping = [], i.RS_swapList = {}, window.isSafari11 === t && (window.isSafari11 = i.isSafari11()), a && window.addEventListener("orientationchange", function () {
				i.getWindowDimension(!1, !0), setTimeout(function () {
					i.getWindowDimension(!0, !0)
				}, 400)
			}), (navigator === t || null === navigator || "object" != typeof navigator || navigator.maxTouchPoints <= 1) && window.addEventListener("resize", i.getWindowDimension), i.getWindowDimension(!1), i.stickySupported = !1, "IE" !== window.RSBrowser && (i.stickySupported = !0), i.checkParrentOverflows(r);
			var o = i.getByTag(document, "RS-MODULE");
			for (var s in o) o.hasOwnProperty(s) && (i.RS_toInit[o[s].id] = !1, i.RS_prioList.push(o[s].id));
			i.nextSlider = r, i.RS_prioListFirstInit = !0
		},
		checkParrentOverflows: function (e) {
			window.requestAnimationFrame(function () {
				for (var t = i[e].cpar[0]; t.parentNode && !1 !== i.stickySupported;) {
					if ("RS-MODULE-WRAP" !== t.tagName && "RS-FULLWIDTH-WRAP" !== t.tagName && "RS-MODULE-WRAP" !== t.tagName && -1 === t.className.indexOf("wp-block-themepunch-revslider")) {
						var a = window.getComputedStyle(t);
						i.stickySupported = "hidden" !== a.overflow && "hidden" !== a.overflowX && "hidden" !== a.overflowY
					}
					t = t.parentNode
				}
			})
		},
		initNextRevslider: function (e) {
			i.RS_prioList[0] === e && !1 === i.RS_toInit[e] ? (i.RS_toInit[e] = "waiting", c(e), setTimeout(function () {
				i.initNextRevslider(e)
			}, 19)) : i.RS_prioList[0] === e && "waiting" === i.RS_toInit[e] ? setTimeout(function () {
				i.initNextRevslider(e)
			}, 19) : i.RS_prioList[0] === e && !0 === i.RS_toInit[e] ? (i.RS_prioList.shift(), 0 !== i.RS_prioList.length && setTimeout(function () {
				i.initNextRevslider(e)
			}, 19)) : i.RS_prioList[0] !== e && !1 === i.RS_toInit[e] ? setTimeout(function () {
				i.initNextRevslider(e)
			}, 19) : 0 === i.RS_prioList.length && !0 === i.RS_toInit[e] && c(e)
		},
		scrollTicker: function (e) {
			1 != i.scrollTickerAdded && (i.slidersToScroll = [], i.scrollTickerAdded = !0, a ? (tpGS.gsap.ticker.fps(150), tpGS.gsap.ticker.add(function () {
				i.generalObserver()
			})) : document.addEventListener("scroll", function (e) {
				i.scrollRaF === t && (i.scrollRaF = requestAnimationFrame(i.generalObserver.bind(this, !0)))
			}, {
				passive: !0
			})), i.slidersToScroll.push(e), i.generalObserver(a)
		},
		generalObserver: function (e, a) {
			for (var r in i.scrollRaF && (i.scrollRaF = cancelAnimationFrame(i.scrollRaF)), i.lastwindowheight = i.lastwindowheight || i.winH, i.scrollY = window.scrollY, i.slidersToScroll) i.slidersToScroll.hasOwnProperty(r) && i.scrollHandling(i.slidersToScroll[r], e, t, a)
		},
		wrapObserver: {
			targets: [],
			init: function (e) {
				var t = 1,
					a = 0,
					r = 0,
					o = s.bind(i.wrapObserver);

				function s() {
					if (r++, requestAnimationFrame(o), !(r - a < 30 / t))
						for (var s in a = r, i.wrapObserver.targets)
							if (i.wrapObserver.targets.hasOwnProperty(s)) {
								var n = i.wrapObserver.targets[s],
									l = n.elem.getBoundingClientRect();
								n.lw === l.width && n.lh === l.height || 0 === l.width || (n.callback && (n.callback.pause(), n.callback.kill(), n.callback = null), n.callback = tpGS.gsap.to({}, {
									duration: .2,
									onComplete: e.bind(window, n.elem, n.id)
								})), n.lw = l.width, n.lh = l.height
							}
				}
				s()
			},
			observe: function (e, t) {
				if ("" !== (e = e.getBoundingClientRect ? e : e[0].getBoundingClientRect ? e[0] : "")) {
					var a = e.getBoundingClientRect();
					i.wrapObserver.targets.push({
						elem: e,
						id: t,
						lw: a.width,
						lh: a.height
					})
				}
			}
		},
		enterViewPort: function (a, r) {
			!0 !== i[a].started ? (i[a].started = !0, setTimeout(function () {
				O(a), "hero" !== i[a].sliderType && i.manageNavigation && i[a].navigation.use && !0 === i[a].navigation.createNavigationDone && i.manageNavigation(a), i[a].slideamount > 1 && B(a), setTimeout(function () {
					i[a] !== t && (i[a].revolutionSlideOnLoaded = !0, i[a].c.trigger("revolution.slide.onloaded"))
				}, 50)
			}, i[a].startDelay), i[a].startDelay = 0, window.requestAnimationFrame(function () {
				m(a)
			})) : (i[a].waitForCountDown && (B(a), i[a].waitForCountDown = !1), "playing" != i[a].sliderlaststatus && i[a].sliderlaststatus != t || i[a].c.trigger("starttimer"), i[a].lastplayedvideos != t && i[a].lastplayedvideos.length > 0 && e.each(i[a].lastplayedvideos, function (e, t) {
				i.playVideo(t, a)
			}))
		},
		leaveViewPort: function (a) {
			i[a].sliderlaststatus = i[a].sliderstatus, i[a].c.trigger("stoptimer"), i[a].playingvideos != t && i[a].playingvideos.length > 0 && (i[a].lastplayedvideos = e.extend(!0, [], i[a].playingvideos), i[a].playingvideos && e.each(i[a].playingvideos, function (e, t) {
				i[a].leaveViewPortBasedStop = !0, i.stopVideo && i.stopVideo(t, a)
			}))
		},
		scrollHandling: function (e, a, r, o) {
			if (i[e] !== t) {
				var s = i[e].topc !== t ? i[e].topc[0].getBoundingClientRect() : 0 === i[e].canv.height ? i[e].cpar[0].getBoundingClientRect() : i[e].c[0].getBoundingClientRect();
				s.hheight = 0 === s.height ? 0 === i[e].canv.height ? i[e].module.height : i[e].canv.height : s.height, i[e].scrollproc = s.top < 0 || s.hheight > i.lastwindowheight && s.top < i.lastwindowheight ? s.top / s.hheight : s.bottom > i.lastwindowheight ? (s.bottom - i.lastwindowheight) / s.hheight : 0;
				var n = Math.max(0, 1 - Math.abs(i[e].scrollproc));
				i[e].viewPort.enable && ("%" === i[e].viewPort.vaType[i[e].level] && (i[e].viewPort.visible_area[i[e].level] <= n || n >= 0 && n <= 1 && i[e].sbtimeline.fixed) || "px" === i[e].viewPort.vaType[i[e].level] && (s.top <= 0 && s.bottom >= i.lastwindowheight || s.top >= 0 && s.bottom <= i.lastwindowheight || s.top >= 0 && s.top < i.lastwindowheight - i[e].viewPort.visible_area[i[e].level] || s.bottom >= i[e].viewPort.visible_area[i[e].level] && s.bottom < i.lastwindowheight) ? i[e].inviewport || (i[e].inviewport = !0, i.enterViewPort(e, !0), i[e].c.trigger("enterviewport")) : i[e].inviewport && (i[e].inviewport = !1, i.leaveViewPort(e), i[e].c.trigger("leftviewport"))), i[e].inviewport && (i.callBackHandling && i.callBackHandling(e, "parallax", "start"), requestAnimationFrame(function () {
					"fullscreen" === i[e].sliderLayout && i.getFullscreenOffsets(e)
				}), i.parallaxProcesses(e, s, o, r), i.callBackHandling && i.callBackHandling(e, "parallax", "end"))
			}
		},
		clone: function (e, i) {
			if (i === t && e === t) return {};
			return function e(i, a) {
				var r = Array.isArray(i) ? [] : {};
				for (var o in i) i.hasOwnProperty(o) && (i[o] !== t && "object" == typeof i[o] && a ? r[o] = e(i[o], !0) : i[o] !== t && (r[o] = i[o]));
				return r
			}(e, i)
		},
		closest: function (e, t) {
			return e && (t(e) ? e : i.closest(e.parentNode, t))
		},
		closestNode: function (e, t) {
			return i.closest(e, function (e) {
				return e.nodeName === t
			})
		},
		closestClass: function (e, t) {
			return i.closest(e, function (e) {
				return (" " + e.className + " ").indexOf(" " + t + " ") >= 0
			})
		},
		getWinH: function (e) {
			return i[e].ignoreHeightChange ? i.mobileWinH : i.winH
		},
		getWindowDimension: function (e, r) {
			!1 === e ? (i.winWAll = window.innerWidth, i.winWSbar = document.documentElement.clientWidth, a ? (i.zoom = r ? 1 : i.winWSbar / i.winWAll, i.winW = 1 !== i.zoom ? i.winWSbar * i.zoom : Math.min(i.winWAll, i.winWSbar), i.winH = 1 !== i.zoom ? window.innerHeight * i.zoom : window.innerHeight, r && window.visualViewport && (i.winH *= window.visualViewport.scale, i.winWAll *= window.visualViewport.scale), i.scrollBarWidth = 0) : (i.scrollBarWidth = i.winWAll - i.winWSbar, i.winW = Math.min(i.winWAll, i.winWSbar), i.winH = window.innerHeight), a && i.winH > 125 && (i.lastwindowheight !== t && Math.abs(i.lastwindowheight - i.winH) < 125 ? i.mobileWinH = i.lastwindowheight : i.mobileWinH = i.winH)) : clearTimeout(i.windowDimenstionDelay), i.windowDimenstionDelay = setTimeout(function () {
				i.winWAll = window.innerWidth, i.winWSbar = document.documentElement.clientWidth, a ? (i.zoom = r ? 1 : i.winWSbar / i.winWAll, i.RS_px_ratio = window.devicePixelRatio || window.screen.availWidth / document.documentElement.clientWidth, i.winW = 1 !== i.zoom ? i.winWSbar * i.zoom : Math.min(i.winWAll, i.winWSbar), i.winH = 1 !== i.zoom ? window.innerHeight * i.zoom : window.innerHeight, r && window.visualViewport && (i.winH *= window.visualViewport.scale, i.winWAll *= window.visualViewport.scale), i.scrollBarWidth = 0, r && tpGS.gsap.delayedCall(.1, function () {
					i.getWindowDimension()
				})) : (i.scrollBarWidth = i.winWAll - i.winWSbar, i.winW = Math.min(i.winWAll, i.winWSbar), i.winH = window.innerHeight), a && i.winH > 125 && (i.lastwindowheight !== t && Math.abs(i.lastwindowheight - i.winH) < 125 ? i.mobileWinH = i.lastwindowheight : i.mobileWinH = i.winH), !1 !== e && i.document.trigger("updateContainerSizes")
			}, 100)
		},
		sA: function (e, t, i) {
			e && e.setAttribute && e.setAttribute("data-" + t, i)
		},
		gA: function (e, i, a) {
			return e === t ? t : e.hasAttribute && e.hasAttribute("data-" + i) && e.getAttribute("data-" + i) !== t && null !== e.getAttribute("data-" + i) ? e.getAttribute("data-" + i) : a !== t ? a : t
		},
		iWA: function (e, a) {
			return i[e].justifyCarousel ? "static" === a ? i[e].carousel.wrapwidth : i[e].carousel.slide_widths[a !== t ? a : i[e].carousel.focused] : i[e].gridwidth[i[e].level]
		},
		iHE: function (e, t) {
			return i[e].useFullScreenHeight ? i[e].canv.height : Math.max(i[e].currentRowsHeight, i[e].gridheight[i[e].level])
		},
		updateFixedScrollTimes: function (e) {
			!0 === i[e].sbtimeline.set && !0 === i[e].sbtimeline.fixed && "auto" !== i[e].sliderLayout && (i[e].sbtimeline.rest = i[e].duration - i[e].sbtimeline.fixEnd, i[e].sbtimeline.time = i[e].duration - (i[e].sbtimeline.fixStart + i[e].sbtimeline.rest), i[e].sbtimeline.extended = i[e].sbtimeline.time / 10)
		},
		addSafariFix: function (e) {
			!0 === window.isSafari11 && !0 !== i[e].safari3dFix && (i[e].safari3dFix = !0, i[e].c[0].className += " safarifix")
		},
		showModalCover: function (a, r, o) {
			switch (o) {
				case "show":
					var s;
					if (r.spin !== t && "off" !== r.spin && (s = i.buildSpinner(a, "spinner" + r.spin, r.spinc, "modalspinner")), r.bg !== t && !1 !== r.bg && "false" !== r.bg && "transparent" !== r.bg) {
						var n = e('<rs-modal-cover data-alias="' + r.alias + '" data-rid="' + a + '" id="' + a + '_modal_bg" style="display:none;opacity:0;background:' + r.bg + '"></rs-modal-cover>');
						e("body").append(n), r.speed = parseFloat(r.speed), r.speed = r.speed > 200 ? r.speed / 1e3 : r.speed, r.speed = Math.max(Math.min(3, r.speed), .3), tpGS.gsap.to(n, r.speed, {
							display: "block",
							opacity: 1,
							ease: "power3.inOut"
						}), i.isModalOpen = !0, s !== t && n.append(s)
					} else s !== t && i[a].c.append(s);
					break;
				case "hide":
					(n = e('rs-modal-cover[data-alias="' + r.alias + '"] .modalspinner')) !== t && n.length > 0 ? n.remove() : i[a].c.find(".modalspinner").remove()
			}
		},
		revModal: function (a, r) {
			if (a !== t && i[a] !== t && "clicked" !== i[a].modal.closeProtection) {
				if (!0 === i[a].modal.closeProtection) return i[a].modal.closeProtection, void setTimeout(function () {
					i[a].modal.closeProtection = !1, i.revModal(a, r)
				}, 750);
				switch (r.mode) {
					case "show":
						if (!0 === i[a].modal.isLive) return;
						i[a].modal.isLive = !0, r.slide = r.slide === t ? "to0" : r.slide, i[a].modal.bodyclass !== t && i[a].modal.bodyclass.length >= 0 && document.body.classList.add(i[a].modal.bodyclass), tpGS.gsap.to(i[a].modal.bg, i[a].modal.coverSpeed, {
							display: "block",
							opacity: 1,
							ease: "power3.inOut"
						}), tpGS.gsap.set(i[a].modal.c, {
							display: "auto" === i[a].sliderLayout ? "inline-block" : "block",
							opacity: 0
						}), i[a].cpar.removeClass("hideallscrollbars"), tpGS.gsap.set(i[a].cpar, {
							display: "block",
							opacity: 1
						});
						var o = {
							a: 0
						};
						i.isModalOpen = !0, tpGS.gsap.fromTo(o, i[a].modal.coverSpeed / 5, {
							a: 0
						}, {
							a: 10,
							ease: "power3.inOut",
							onComplete: function () {
								i.openModalId = a, i[a].sliderisrunning ? i.callingNewSlide(a, r.slide) : ("to0" !== r.slide && (i[a].startWithSlideKey = r.slide), u(a))
							}
						}), tpGS.gsap.fromTo([i[a].modal.c], .01, {
							opacity: 0
						}, {
							opacity: 1,
							delay: i[a].modal.coverSpeed / 4,
							ease: "power3.inOut",
							onComplete: function () {}
						}), window.overscrollhistory = document.body.style.overflow, setTimeout(function () {
							document.body.style.overflow = "hidden"
						}, 250), i.getWindowDimension();
						break;
					case "close":
						i.openModalId = t, R(a), document.body.style.overflow = window.overscrollhistory, i[a].cpar.addClass("hideallscrollbars"), i[a].modal.bodyclass !== t && i[a].modal.bodyclass.length >= 0 && document.body.classList.remove(i[a].modal.bodyclass), tpGS.gsap.to(i[a].modal.bg, i[a].modal.coverSpeed, {
							display: "none",
							opacity: 0,
							ease: "power3.inOut"
						}), tpGS.gsap.to(i[a].modal.c, i[a].modal.coverSpeed / 6.5, {
							display: "none",
							delay: i[a].modal.coverSpeed / 4,
							opacity: 0,
							onComplete: function () {
								tpGS.gsap.set(i[a].cpar, {
									display: "none",
									opacity: 0
								}), i.document.trigger("revolution.all.resize"), i.getWindowDimension(), i.isModalOpen = !1
							}
						}), i[a].modal.closeProtection = !0, setTimeout(function () {
							i[a].modal.isLive = !1, i[a].modal.closeProtection = !1
						}, 750);
						break;
					case "init":
						if (window.RS_60_MODALS = window.RS_60_MODALS === t ? [] : window.RS_60_MODALS, -1 === e.inArray(i[a].modal.alias, window.RS_60_MODALS) && window.RS_60_MODALS.push(i[a].modal.alias), i[a].modal.listener === t && (i[a].modal.c = e("#" + a + "_modal"), !1 !== i[a].modal.cover && "false" !== i[a].modal.cover || (i[a].modal.coverColor = "transparent"), i[a].modal.bg = e('rs-modal-cover[data-alias="' + r.alias + '"]'), i[a].modal.bg !== t && 0 !== i[a].modal.bg.length || (i[a].modal.bg = e('<rs-modal-cover style="display:none;opacity:0;background:' + i[a].modal.coverColor + '" data-rid="' + a + '" id="' + a + '_modal_bg"></rs-modal-cover>'), "auto" === i[a].sliderLayout && i[a].modal.cover ? e("body").append(i[a].modal.bg) : i[a].modal.c.append(i[a].modal.bg)), i[a].modal.c[0].className += "rs-modal-" + i[a].sliderLayout, i[a].modal.calibration = {
								left: "auto" === i[a].sliderLayout ? "center" === i[a].modal.horizontal ? "50%" : "left" === i[a].modal.horizontal ? "0px" : "auto" : "0px",
								right: "auto" === i[a].sliderLayout ? "center" === i[a].modal.horizontal ? "auto" : "left" === i[a].modal.horizontal ? "auto" : "0px" : "0px",
								top: "auto" === i[a].sliderLayout || "fullwidth" === i[a].sliderLayout ? "middle" === i[a].modal.vertical ? "50%" : "top" === i[a].modal.vertical ? "0px" : "auto" : "0px",
								bottom: "auto" === i[a].sliderLayout || "fullwidth" === i[a].sliderLayout ? "middle" === i[a].modal.vertical ? "auto" : "top" === i[a].modal.vertical ? "auto" : "0px" : "0px",
								y: ("auto" === i[a].sliderLayout || "fullwidth" === i[a].sliderLayout) && "middle" === i[a].modal.vertical ? "-50%" : 0,
								x: "auto" === i[a].sliderLayout && "center" === i[a].modal.horizontal ? "-50%" : 0
							}, "-50%" === i[a].modal.calibration.y && (i[a].modal.calibration.filter = "blur(0px)"), tpGS.gsap.set(i[a].modal.c, "auto" === i[a].sliderLayout || "fullscreen" === i[a].sliderLayout ? e.extend(!0, i[a].modal.calibration, {
								opacity: 0,
								display: "none"
							}) : {
								opacity: 0,
								display: "none"
							}), "fullwidth" === i[a].sliderLayout && tpGS.gsap.set(i[a].modal.c.find("rs-module-wrap"), i[a].modal.calibration), i.document.on("RS_OPENMODAL_" + i[a].modal.alias, function (e, t) {
								i.revModal(a, {
									mode: "show",
									slide: t
								})
							}), i.document.on("click", "rs-modal-cover", function () {
								i.revModal(i.gA(this, "rid"), {
									mode: "close"
								})
							}), i[a].modal.listener = !0, i[a].modal.trigger !== t)) {
							var s, n = i[a].modal.trigger.split(";");
							for (o in i[a].modal.trigger = {}, n)
								if (n.hasOwnProperty(o)) switch ((s = n[o].split(":"))[0]) {
									case "t":
										i[a].modal.trigger.time = parseInt(s[1], 0);
										break;
									case "s":
										i[a].modal.trigger.scroll = s[1];
										break;
									case "so":
										i[a].modal.trigger.scrollo = parseInt(s[1], 0);
										break;
									case "e":
										i[a].modal.trigger.event = s[1]
								}
							if (i[a].modal.trigger.time !== t && 0 !== i[a].modal.trigger.time && setTimeout(function () {
									i.document.trigger("RS_OPENMODAL_" + i[a].modal.alias)
								}, i[a].modal.trigger.time), i[a].modal.trigger.scrollo !== t || i[a].modal.trigger.scroll !== t) {
								i[a].modal.trigger.scroll !== t && e(i[a].modal.trigger.scroll)[0] !== t && (i[a].modal.trigger.scroll = e(i[a].modal.trigger.scroll)[0]);
								var l = function () {
									if (i[a].modal.trigger.scroll !== t) var e = i[a].modal.trigger.scroll.getBoundingClientRect();
									(i[a].modal.trigger.scroll !== t && Math.abs(e.top + (e.bottom - e.top) / 2 - i.getWinH(a) / 2) < 50 || i[a].modal.trigger.scrollo !== t && Math.abs(i[a].modal.trigger.scrollo - (i.scrollY !== t ? i.scrollY : window.scrollY)) < 100) && (i.document.trigger("RS_OPENMODAL_" + i[a].modal.alias), document.removeEventListener("scroll", l))
								};
								document.addEventListener("scroll", l, {
									id: a,
									passive: !0
								})
							}
							i[a].modal.trigger.event !== t && i.document.on(i[a].modal.trigger.event, function () {
								i.document.trigger("RS_OPENMODAL_" + i[a].modal.alias)
							})
						}
				}
			}
		},
		smartConvertDivs: function (e) {
			var t = "";
			if ("string" == typeof e && e.indexOf("#") >= 0) {
				var i = e.split(","),
					a = i.length - 1;
				for (var r in i) t = "string" == typeof i[r] && "#" === i[r][0] ? t + i[r][1] / i[r][3] * 100 + "%" + (r < a ? "," : "") : t + i[r] + (r < a ? "," : "")
			} else t = e;
			return t
		},
		revToResp: function (e, i, a, r) {
			if ((e = e === t ? a : e) !== t) {
				if (r = r === t ? "," : r, "boolean" != typeof e && ("object" != typeof e || Array.isArray(e))) {
					try {
						e = e.replace(/[[\]]/g, "").replace(/\'/g, "").split(r)
					} catch (e) {}
					for (e = Array.isArray(e) ? e : [e]; e.length < i;) e[e.length] = e[e.length - 1]
				}
				return e
			}
		},
		loadImages: function (a, r, o, s) {
			if (a !== t && 0 !== a.length) {
				var n = [];
				if (Array.isArray(a))
					for (var l in a) a.hasOwnProperty(l) && a[l] !== t && n.push(a[l]);
				else n.push(a);
				for (var d in n)
					if (n.hasOwnProperty(d)) {
						var c = n[d].querySelectorAll("img, rs-sbg, .rs-svg");
						for (var l in c)
							if (c.hasOwnProperty(l)) {
								var p = g(c[l], t, r),
									u = p !== t ? p : i.gA(c[l], "svg_src") != t ? i.gA(c[l], "svg_src") : c[l].src === t ? e(c[l]).data("src") : c[l].src,
									m = i.gA(c[l], "svg_src") != t ? "svg" : "img";
								u !== t && i[r].loadqueue !== t && 0 == i[r].loadqueue.filter(function (e) {
									return e.src === u
								}).length && i[r].loadqueue.push({
									src: u,
									index: l,
									starttoload: e.now(),
									type: m || "img",
									prio: o,
									progress: c[l].complete && u === c[l].src ? "loaded" : "prepared",
									static: s,
									width: c[l].complete && u === c[l].src ? c[l].width : t,
									height: c[l].complete && u === c[l].src ? c[l].height : t
								})
							}
					}
				S(r)
			}
		},
		waitForCurrentImages: function (r, o, s) {
			if (r !== t && 0 !== r.length && i[o] !== t) {
				var n = !1,
					l = [];
				if (Array.isArray(r))
					for (var d in r) r.hasOwnProperty(d) && r[d] !== t && l.push(r[d]);
				else l.push(r);
				for (var c in l)
					if (l.hasOwnProperty(c)) {
						var p = l[c].querySelectorAll("img, rs-sbg, .rs-svg");
						for (d in p)
							if (p.hasOwnProperty(d) && "length" !== d && !(p[d].className.indexOf("rs-pzimg") >= 0)) {
								var u = e(p[d]).data(),
									m = g(p[d], t, o),
									h = m !== t ? m : i.gA(p[d], "svg_src") != t ? i.gA(p[d], "svg_src") : p[d].src === t ? u.src : p[d].src,
									f = i.getLoadObj(o, h);
								if (i.sA(p[d], "src-rs-ref", h), u.loaded === t && f !== t && f.progress && "loaded" == f.progress) {
									if (p[d].src = f.src, "img" == f.type) {
										if (u.slidebgimage) {
											-1 == f.src.indexOf("images/transparent.png") && -1 == f.src.indexOf("assets/transparent.png") || u.bgcolor === t ? p[d].style.backgroundImage = 'url("' + f.src + '")' : u.bgcolor !== t && (p[d].style.background = u.bgcolor), i.sA(l[c], "owidth", f.width), i.sA(l[c], "oheight", f.height);
											var v = i.getByTag(l[c], "RS-SBG-WRAP");
											if (v.length > 0 && (i.sA(v[0], "owidth", f.width), i.sA(v[0], "oheight", f.height)), "carousel" === i[o].sliderType) {
												var y = e(v),
													b = i.getSlideIndex(o, i.gA(l[c], "key"));
												y.data("panzoom") === t || i[o].panzoomTLs !== t && i[o].panzoomTLs[b] !== t || i.startPanZoom(y, o, 0, b, "prepare")
											}
										}
									} else "svg" == f.type && "loaded" == f.progress && (p[d].innerHTML = f.innerHTML);
									u.loaded = !0
								}
								f && f.progress && f.progress.match(/inprogress|inload|prepared/g) && (!f.error && e.now() - f.starttoload < 3e3 ? n = !0 : (f.progress = "failed", f.reported_img || (f.reported_img = !0, console.log(h + "  Could not be loaded !")))), 1 != i[o].youtubeapineeded || window.YT && YT.Player != t || (n = T("youtube", o)), 1 != i[o].vimeoapineeded || window.Vimeo || (n = T("vimeo", o))
							}
					}!a && i[o].audioqueue && i[o].audioqueue.length > 0 && e.each(i[o].audioqueue, function (t, i) {
					i.status && "prepared" === i.status && e.now() - i.start < i.waittime && (n = !0)
				}), e.each(i[o].loadqueue, function (t, i) {
					!0 === i.static && ("loaded" != i.progress && "done" !== i.progress || "failed" === i.progress) && ("failed" != i.progress || i.reported ? !i.error && e.now() - i.starttoload < 5e3 ? n = !0 : i.reported || (i.reported = L(i.src, i.error)) : i.reported = L(i.src, i.error))
				}), n ? tpGS.gsap.delayedCall(.02, i.waitForCurrentImages, [r, o, s]) : s !== t && tpGS.gsap.delayedCall(1e-4, s)
			}
		},
		updateVisibleArea: function (e) {
			for (var a in i[e].viewPort.visible_area = i.revToResp(i[e].viewPort.visible_area, i[e].rle, "0px"), i[e].viewPort.vaType = new Array(4), i[e].viewPort.visible_area) i[e].viewPort.visible_area.hasOwnProperty(a) && (i.isNumeric(i[e].viewPort.visible_area[a]) && (i[e].viewPort.visible_area[a] += "%"), i[e].viewPort.visible_area[a] !== t && (i[e].viewPort.vaType[a] = i[e].viewPort.visible_area[a].indexOf("%") >= 0 ? "%" : "px"), i[e].viewPort.visible_area[a] = parseInt(i[e].viewPort.visible_area[a], 0), i[e].viewPort.visible_area[a] = "%" == i[e].viewPort.vaType[a] ? i[e].viewPort.visible_area[a] / 100 : i[e].viewPort.visible_area[a])
		},
		observeFonts: function (e, a, r) {
			r = r === t ? 0 : r, i.fonts === t && (i.fonts = {}, i.monoWidth = l("monospace"), i.sansWidth = l("sans-serif"), i.serifWidth = l("serif")), r++;
			var o = i.fonts[e];
			!0 !== i.fonts[e] && (i.fonts[e] = i.monoWidth !== l(e + ",monospace") || i.sansWidth !== l(e + ",sans-serif") || i.serifWidth !== l(e + ",serif")), 100 === r || (!1 === o || o === t) && !0 === i.fonts[e] ? (l(e + ",monospace", !0), l(e + ",sans-serif", !0), l(e + ",serif", !0), a()) : setTimeout(function () {
				i.observeFonts(e, a, r)
			}, 19)
		},
		getversion: function () {
			return "Slider Revolution 6.3.2"
		},
		currentSlideIndex: function (e) {
			return i[e].pr_active_key
		},
		iOSVersion: function () {
			return !!(navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/iPad/i)) && navigator.userAgent.match(/OS 4_\d like Mac OS X/i)
		},
		setIsIOS: function () {
			i.isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream || "MacIntel" === navigator.platform && void 0 !== navigator.standalone
		},
		isIE: function () {
			if (i.isIERes === t) {
				var a = e('<div style="display:none;"/>').appendTo(e("body"));
				a.html("\x3c!--[if IE 8]><a>&nbsp;</a><![endif]--\x3e"), i.isIERes = a.find("a").length, a.remove()
			}
			return i.isIERes
		},
		is_mobile: function () {
			var e = ["android", "webos", "iphone", "ipad", "blackberry", "Android", "webos", "iPod", "iPhone", "iPad", "Blackberry", "BlackBerry"],
				i = !1;
			if (window.orientation !== t) i = !0;
			else
				for (var a in e) e.hasOwnProperty(a) && (i = !!(i || navigator.userAgent.split(e[a]).length > 1) || i);
			return i
		},
		is_android: function () {
			var e = ["android", "Android"],
				t = !1;
			for (var i in e) e.hasOwnProperty(i) && (t = !!(t || navigator.userAgent.split(e[i]).length > 1) || t);
			return t
		},
		callBackHandling: function (t, a, r) {
			i[t].callBackArray && e.each(i[t].callBackArray, function (e, t) {
				t && t.inmodule && t.inmodule === a && t.atposition && t.atposition === r && t.callback && t.callback.call()
			})
		},
		get_browser: function () {
			var e, t = navigator.userAgent,
				i = t.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
			return /trident/i.test(i[1]) ? (e = /\brv[ :]+(\d+)/g.exec(t) || [], "IE") : "Chrome" === i[1] && null != (e = t.match(/\b(OPR|Edge)\/(\d+)/)) ? e[1].replace("OPR", "Opera") : (i = i[2] ? [i[1], i[2]] : [navigator.appName, navigator.appVersion, "-?"], null != (e = t.match(/version\/(\d+)/i)) && i.splice(1, 1, e[1]), i[0])
		},
		get_browser_version: function () {
			var e, t = navigator.appName,
				i = navigator.userAgent,
				a = i.match(/(edge|opera|chrome|safari|firefox|msie)\/?\s*(\.?\d+(\.\d+)*)/i);
			return a && null != (e = i.match(/version\/([\.\d]+)/i)) && (a[2] = e[1]), (a = a ? [a[1], a[2]] : [t, navigator.appVersion, "-?"])[1]
		},
		isFirefox: function (e) {
			return i[e].isFirefox = i[e].isFirefox === t ? "Firefox" === i.get_browser() : i[e].isFirefox, i[e].isFirefox
		},
		isSafari11: function () {
			return "safari" === i.trim(i.get_browser().toLowerCase()) && parseFloat(i.get_browser_version()) >= 11
		},
		isWebkit: function () {
			var e = /(webkit)[ \/]([\w.]+)/.exec(navigator.userAgent.toLowerCase());
			return e && e[1] && "webkit" === e[1]
		},
		isIE11: function () {
			return i.IE11 = i.IE11 === t ? !!navigator.userAgent.match(/Trident.*rv\:11\./) : i.IE11, i.IE11
		},
		deepLink: function (e, a) {
			var r;
			if (a !== t && a.length < 9)
				if (a.split("slide").length > 1 && -1 == a.indexOf("slider")) {
					var o = parseInt(a.split("slide")[1], 0);
					i.isNumeric(parseInt(o, 0)) && ((o = parseInt(o, 0)) < 1 && (o = 1), o > i[e].slideamount && (o = i[e].slideamount), r = o)
				} else
					for (var s in i[e].slides) i[e].slides.hasOwnProperty(s) && i.gA(i[e].slides[s], "deeplink") == a && (r = parseInt(s) + 1);
			return r
		},
		getHorizontalOffset: function (e, t) {
			var i = d(e, ".outer-left"),
				a = d(e, ".outer-right");
			return "left" == t ? i : "right" == t ? a : "all" == t ? {
				left: i,
				right: a,
				both: i + a,
				inuse: i + a != 0
			} : i + a
		},
		getComingSlide: function (e, a) {
			var r = i[e].pr_next_key !== t ? i[e].pr_next_key : i[e].pr_processing_key !== t ? i[e].pr_processing_key : i[e].pr_active_key,
				o = 0;
			if (o = 0, i[e].pr_active_slide !== t && "true" == i.gA(i[e].pr_active_slide[0], "not_in_nav") && (r = i[e].pr_lastshown_key), a !== t && i.isNumeric(a) || a !== t && a.match(/to/g)) o = 1 === a || -1 === a ? parseInt(r, 0) + a < 0 ? i[e].slideamount - 1 : parseInt(r, 0) + a >= i[e].slideamount ? 0 : parseInt(r, 0) + a : (a = i.isNumeric(a) ? a : parseInt(a.split("to")[1], 0)) < 0 ? 0 : a > i[e].slideamount - 1 ? i[e].slideamount - 1 : a;
			else if (a)
				for (var s in i[e].slides) i[e].slides.hasOwnProperty(s) && (o = i[e].slides && i[e].slides[s] && i.gA(i[e].slides[s], "key") === a ? s : o);
			return {
				nindex: o,
				aindex: r
			}
		},
		callingNewSlide: function (e, a, r) {
			var o = i.getComingSlide(e, a);
			i[e].pr_next_key = o.nindex, i[e].sdir = i[e].pr_next_key < i[e].pr_active_key ? 1 : 0, r && i[e].carousel !== t && (i[e].carousel.focused = i[e].pr_next_key), i[e].ctNavElement ? i[e].ctNavElement = !1 : i[e].c.trigger("revolution.nextslide.waiting"), (i[e].started && o.aindex === i[e].pr_next_key && o.aindex === i[e].pr_lastshown_key || i[e].pr_next_key !== o.aindex && -1 != i[e].pr_next_key && i[e].pr_lastshown_key !== t) && O(e, r)
		},
		getLoadObj: function (e, a) {
			var r = i[e].loadqueue !== t && i[e].loadqueue.filter(function (e) {
				return e.src === a
			})[0];
			return r === t ? {
				src: a
			} : r
		},
		getResponsiveLevel: function (e) {
			var t = 9999,
				a = 0,
				r = 0,
				o = 0;
			if (i[e].responsiveLevels && i[e].responsiveLevels.length)
				for (var s in i[e].responsiveLevels) i[e].responsiveLevels.hasOwnProperty(s) && (i.winWAll < i[e].responsiveLevels[s] && (0 == a || a > parseInt(i[e].responsiveLevels[s])) && (t = parseInt(i[e].responsiveLevels[s]), o = parseInt(s), a = parseInt(i[e].responsiveLevels[s])), i.winWAll > i[e].responsiveLevels[s] && a < i[e].responsiveLevels[s] && (a = parseInt(i[e].responsiveLevels[s]), r = parseInt(s)));
			return a < t ? r : o
		},
		getSizeMultpilicator: function (e, t, a) {
			var r = {
				h: 0,
				w: 0
			};
			return i[e].justifyCarousel ? r.h = r.w = 1 : (r.w = a.width / i[e].gridwidth[i[e].level], r.h = a.height / i[e].gridheight[i[e].level], r.w = isNaN(r.w) ? 1 : r.w, r.h = isNaN(r.h) ? 1 : r.h, 1 == i[e].enableUpscaling ? r.h = r.w : (r.h > r.w ? r.h = r.w : r.w = r.h, (r.h > 1 || r.w > 1) && (r.w = 1, r.h = 1))), r
		},
		updateDims: function (e, a) {
			var r = i[e].pr_processing_key || i[e].pr_active_key || 0,
				o = i[e].pr_active_key || 0,
				s = i[e].modal !== t && i[e].modal.useAsModal,
				n = s ? i.winWAll : i.winW,
				l = !1;
			if (i[e].redraw = i[e].redraw === t ? {} : i[e].redraw, i[e].module = i[e].module === t ? {} : i[e].module, i[e].canv = i[e].canv === t ? {} : i[e].canv, i[e].content = i[e].content === t ? {} : i[e].content, i[e].drawUpdates = {
					c: {},
					cpar: {},
					canv: {}
				}, "carousel" == i[e].sliderType ? i[e].module.margins = {
					top: parseInt(i[e].carousel.padding_top || 0, 0),
					bottom: parseInt(i[e].carousel.padding_bottom || 0, 0)
				} : i[e].module.margins = {
					top: 0,
					bottom: 0
				}, i[e].module.paddings === t && (i[e].module.paddings = {
					top: parseInt(i[e].cpar.css("paddingTop"), 0) || 0,
					bottom: parseInt(i[e].cpar.css("paddingBottom"), 0) || 0
				}), i[e].blockSpacing !== t ? (i[e].block = {
					bottom: i[e].blockSpacing.bottom !== t ? parseInt(i[e].blockSpacing.bottom[i[e].level], 0) : 0,
					top: i[e].blockSpacing.top !== t ? parseInt(i[e].blockSpacing.top[i[e].level], 0) : 0,
					left: i[e].blockSpacing.left !== t ? parseInt(i[e].blockSpacing.left[i[e].level], 0) : 0,
					right: i[e].blockSpacing.right !== t ? parseInt(i[e].blockSpacing.right[i[e].level], 0) : 0
				}, i[e].block.hor = i[e].block.left + i[e].block.right, i[e].block.ver = i[e].block.top + i[e].block.bottom) : i[e].block === t && (i[e].block = {
					top: 0,
					left: 0,
					right: 0,
					bottom: 0,
					hor: 0,
					ver: 0
				}), i[e].blockSpacing !== t) {
				var d = {
						paddingLeft: i[e].block.left,
						paddingRight: i[e].block.right,
						marginTop: i[e].block.top,
						marginBottom: i[e].block.bottom
					},
					c = JSON.stringify(d);
				d !== i[e].emptyObject && c !== i[e].caches.setsizeBLOCKOBJ && (tpGS.gsap.set(i[e].blockSpacing.block, d), i[e].caches.setsizeBLOCKOBJ = c, l = !0)
			}
			if (i[e].levelForced = i[e].level = i.getResponsiveLevel(e), i[e].rowHeights = i.getRowHeights(e), i[e].aratio = i[e].gridheight[i[e].level] / i[e].gridwidth[i[e].level], i[e].module.width = "auto" === i[e].sliderLayout || 1 == i[e].disableForceFullWidth ? i[e].cpar.width() : n - i[e].block.hor, i[e].outNavDims = i.getOuterNavDimension(e), i[e].canv.width = i[e].module.width - i[e].outNavDims.horizontal - (s ? i.scrollBarWidth : 0), s && "auto" === i[e].sliderLayout && (i[e].canv.width = Math.min(i[e].gridwidth[i[e].level], n)), "fullscreen" === i[e].sliderLayout || i[e].infullscreenmode) {
				var p = i.getWinH(e) - i.getFullscreenOffsets(e);
				i[e].canv.height = Math.max(i[e].rowHeights.cur, Math.max(p - i[e].outNavDims.vertical, i[e].minHeight)), o !== r && (i[e].currentSlideHeight = Math.max(i[e].rowHeights.last, Math.max(p - i[e].outNavDims.vertical, i[e].minHeight)), i[e].redraw.maxHeightOld = !0), i[e].drawUpdates.c.height = "100%"
			} else i[e].canv.height = i[e].keepBPHeight ? i[e].gridheight[i[e].level] : Math.round(i[e].canv.width * i[e].aratio), i[e].canv.height = i[e].autoHeight ? i[e].canv.height : Math.min(i[e].canv.height, i[e].gridheight[i[e].level]), i[e].canv.height = Math.max(Math.max(i[e].rowHeights.cur, i[e].canv.height), i[e].minHeight), i[e].drawUpdates.c.height = i[e].canv.height;
			i[e].module.height = i[e].canv.height, "fullwidth" != i[e].sliderLayout || i[e].autoHeight || (i[e].drawUpdates.c.maxHeight = 0 != i[e].maxHeight ? Math.min(i[e].canv.height, i[e].maxHeight) : i[e].canv.height), i[e].CM = i.getSizeMultpilicator(e, i[e].enableUpscaling, {
				width: i[e].canv.width,
				height: i[e].canv.height
			}), i[e].content.width = i[e].gridwidth[i[e].level] * i[e].CM.w, i[e].content.height = Math.round(Math.max(i[e].rowHeights.cur, i[e].gridheight[i[e].level] * i[e].CM.h));
			var g = i[e].module.margins.top + i[e].module.margins.bottom + i[e].outNavDims.vertical + i[e].canv.height + i[e].module.paddings.top + i[e].module.paddings.bottom;
			i[e].drawUpdates.cpar.height = g, i[e].drawUpdates.cpar.width = "auto" === i[e].sliderLayout ? "auto" : i[e].module.width, "auto" === i[e].sliderLayout || "fullscreen" === i[e].sliderLayout && !0 === i[e].disableForceFullWidth || i[e].rsFullWidthWrap === t ? "fullscreen" == i[e].sliderLayout && 1 == i[e].disableForceFullWidth && (i[e].drawUpdates.cpar.left = 0) : i[e].drawUpdates.cpar.left = 0 - Math.ceil(i[e].rsFullWidthWrap.offset().left - (i[e].outNavDims.left + i[e].block.left)), i[e].sbtimeline.set && i[e].sbtimeline.fixed ? (i[e].sbtimeline.extended === t && i.updateFixedScrollTimes(e), i[e].forcerHeight = 2 * g + i[e].sbtimeline.extended) : i[e].forcerHeight = g, i[e].forcerHeight !== i[e].caches.setsizeForcerHeight && i[e].forcer !== t && (i[e].caches.setsizeForcerHeight = i[e].forcerHeight, l = !0, i[e].redraw.forcer = !0), i[e].drawUpdates.c.width = i[e].canv.width, "auto" === i[e].sliderLayout && (i[e].drawUpdates.c.left = i[e].outNavDims.left), i[e].drawUpdates.c !== i[e].emptyObject && JSON.stringify(i[e].drawUpdates.c) !== i[e].caches.setsizeCOBJ && (i[e].caches.setsizeCOBJ = JSON.stringify(i[e].drawUpdates.c), l = !0, i[e].redraw.c = !0), i[e].drawUpdates.cpar !== i[e].emptyObject && JSON.stringify(i[e].drawUpdates.cpar) !== i[e].caches.setsizeCPAROBJ && (i[e].caches.setsizeCPAROBJ = JSON.stringify(i[e].drawUpdates.cpar), l = !0, i[e].redraw.cpar = !0), s && "auto" === i[e].sliderLayout && i[e].caches.canWidth !== i[e].canv.width && (i[e].caches.canWidth = i[e].canv.width, l = !0, i[e].redraw.modalcanvas = !0), i[e].slayers && i[e].slayers.length > 0 && i[e].outNavDims.left !== i[e].caches.outNavDimsLeft && "fullwidth" != i[e].sliderLayout && "fullscreen" != i[e].sliderLayout && (i[e].caches.outNavDimsLeft = i[e].outNavDims.left, i[e].redraw.slayers = !0), s && i[e].modal.calibration !== t && "middle" === i[e].modal.vertical && (i[e].modal.calibration.top = i.getWinH(e) < g ? "0%" : "50%", i[e].modal.calibration.y = i.getWinH(e) < g ? "0px" : "-50%", "fullwidth" === i[e].sliderLayout && (l = !0, i[e].redraw.modulewrap = !0)), i[e].gridOffsetWidth = (i[e].module.width - i[e].gridwidth[i[e].level]) / 2, i[e].gridOffsetHeight = (i[e].module.height - i[e].content.height) / 2, i[e].caches.curRowsHeight = i[e].currentRowsHeight = i[e].rowHeights.cur, i[e].caches.moduleWidth = i[e].width = i[e].module.width, i[e].caches.moduleHeight = i[e].height = i[e].module.height, i[e].caches.canWidth = i[e].conw = i[e].canv.width, i[e].caches.canHeight = i[e].conh = i[e].canv.height, i[e].bw = i[e].CM.w, i[e].bh = i[e].CM.h, i[e].caches.outNavDimsLeft = i[e].outNavDims.left, window.requestAnimationFrame(function () {
				i[e].redraw.forcer && tpGS.gsap.set(i[e].forcer, {
					height: i[e].forcerHeight
				}), i[e].redraw.c && tpGS.gsap.set(i[e].c, i[e].drawUpdates.c), i[e].redraw.cpar && tpGS.gsap.set(i[e].cpar, i[e].drawUpdates.cpar), i[e].redraw.modalcanvas && tpGS.gsap.set([i[e].modal.c, i[e].canvas], {
					width: i[e].canv.width
				}), i[e].redraw.maxHeightOld && (i[e].slides[o].style.maxHeight = i[e].currentSlideHeight !== i[e].canv.height ? i[e].currentSlideHeight + "px" : "none"), i[e].redraw.slayers && tpGS.gsap.set(i[e].slayers, {
					left: i[e].outNavDims.left
				}), i[e].redraw.modulewrap && tpGS.gsap.set(i[e].modal.c.find("rs-module-wrap"), i[e].modal.calibration), !0 !== i[e].navigation.initialised && "prepared" === a && ("hero" !== i[e].sliderType && i.createNavigation && i[e].navigation.use && !0 !== i[e].navigation.createNavigationDone && i.createNavigation(e), i.resizeThumbsTabs && i.resizeThumbsTabs && i[e].navigation.use && i.resizeThumbsTabs(e)), i[e].rebuildProgressBar && C(e), i[e].redraw = {}
			});
			var u = i[e].inviewport && (i[e].heightInLayers !== t && i[e].module.height !== i[e].heightInLayers || i[e].widthInLayers !== t && i[e].module.width !== i[e].widthInLayers);
			return "ignore" !== a && u && (i[e].heightInLayers = t, i[e].widthInLayers = t, "carousel" !== i[e].sliderType && (i[e].pr_next_key !== t ? i.animateTheLayers({
				slide: i[e].pr_next_key,
				id: e,
				mode: "rebuild",
				caller: "swapSlideProgress_1"
			}) : i[e].pr_processing_key !== t ? i.animateTheLayers({
				slide: i[e].pr_processing_key,
				id: e,
				mode: "rebuild",
				caller: "swapSlideProgress_2"
			}) : i[e].pr_active_key !== t && i.animateTheLayers({
				slide: i[e].pr_active_key,
				id: e,
				mode: "rebuild",
				caller: "swapSlideProgress_3"
			})), l = !0), l && "ignore" !== a && i.requestLayerUpdates(e, "enterstage"), l
		},
		getSlideIndex: function (e, t) {
			var a = !1;
			for (var r in i[e].slides) {
				if (!i[e].slides.hasOwnProperty(r) || !1 !== a) continue;
				a = i.gA(i[e].slides[r], "key") === t ? r : a
			}
			return !1 === a ? 0 : a
		},
		loadUpcomingContent: function (e) {
			if ("smart" == i[e].lazyType) {
				var t = [],
					a = parseInt(i.getSlideIndex(e, i.gA(i[e].pr_next_slide[0], "key")), 0),
					r = a - 1 < 0 ? i[e].realslideamount - 1 : a - 1,
					o = a + 1 == i[e].realslideamount ? 0 : a + 1;
				r !== a && t.push(i[e].slides[r]), o !== a && t.push(i[e].slides[o]), t.length > 0 && (i.loadImages(t, e, 2), i.waitForCurrentImages(t, e, function () {}))
			}
		},
		getFullscreenOffsets: function (a) {
			var r = 0;
			if (i[a].fullScreenOffsetContainer != t) {
				var o = ("" + i[a].fullScreenOffsetContainer).split(",");
				for (var s in o) o.hasOwnProperty(s) && (r += e(o[s]).outerHeight(!0) || 0)
			}
			return i[a].fullScreenOffset != t && (!i.isNumeric(i[a].fullScreenOffset) && i[a].fullScreenOffset.split("%").length > 1 ? r += i.getWinH(a) * parseInt(i[a].fullScreenOffset, 0) / 100 : i.isNumeric(parseInt(i[a].fullScreenOffset, 0)) && (r += parseInt(i[a].fullScreenOffset, 0) || 0)), i[a].fullScreenOffsetResult = r, r
		},
		unToggleState: function (e) {
			if (e !== t)
				for (var i = 0; i < e.length; i++) try {
					document.getElementById(e[i]).classList.remove("rs-tc-active")
				} catch (e) {}
		},
		toggleState: function (e) {
			if (e !== t)
				for (var i = 0; i < e.length; i++) try {
					document.getElementById(e[i]).classList.add("rs-tc-active")
				} catch (e) {}
		},
		swaptoggleState: function (e) {
			if (e != t && e.length > 0)
				for (var a = 0; a < e.length; a++) {
					var r = document.getElementById(e[a]);
					if (i.gA(r, "toggletimestamp") !== t && (new Date).getTime() - i.gA(r, "toggletimestamp") < 250) return;
					i.sA(r, "toggletimestamp", (new Date).getTime()), null !== r && (r.className.indexOf("rs-tc-active") >= 0 ? r.classList.remove("rs-tc-active") : r.classList.add("rs-tc-active"))
				}
		},
		lastToggleState: function (e) {
			var i;
			if (e !== t)
				for (var a = 0; a < e.length; a++) {
					var r = document.getElementById(e[a]);
					i = !0 === i || null !== r && r.className.indexOf("rs-tc-active") >= 0 || i
				}
			return i
		},
		revCheckIDS: function (a, r) {
			if (i.gA(r, "idcheck") === t) {
				r.id;
				var o = e.inArray(r.id, window.RSANYID),
					s = -1; - 1 !== o && (s = e.inArray(r.id, i[a].anyid), window.RSANYID_sliderID[o] === a && -1 === s || (r.id = r.id + "_" + Math.round(9999 * Math.random()), o = s = -1)), -1 === s && i[a].anyid.push(r.id), -1 === o && (window.RSANYID.push(r.id), window.RSANYID_sliderID.push(a))
			}
			return i.sA(r, "idcheck", !0), r.id
		},
		buildSpinner: function (i, a, r, o) {
			var s;
			if ("off" !== a) {
				o = o === t ? "" : o, r = r === t ? "#ffffff" : r;
				var n = parseInt(a.replace("spinner", ""), 10);
				if (isNaN(n) || n < 6) {
					var l = 'style="background-color:' + r + '"',
						d = o === t || 3 !== n && 4 != n ? "" : l;
					s = e("<rs-loader " + (o === t || 1 !== n && 2 != n ? "" : l) + ' class="' + a + " " + o + '"><div ' + d + ' class="dot1"></div><div ' + d + ' class="dot2"></div><div ' + d + ' class="bounce1"></div><div ' + d + ' class="bounce2"></div><div ' + d + ' class="bounce3"></div></rs-loader>')
				} else {
					var c, p = '<div class="rs-spinner-inner"';
					if (7 === n) - 1 !== r.search("#") ? (c = r.replace("#", ""), c = "rgba(" + parseInt(c.substring(0, 2), 16) + ", " + parseInt(c.substring(2, 4), 16) + ", " + parseInt(c.substring(4, 6), 16) + ", ") : -1 !== r.search("rgb") && (c = r.substring(r.indexOf("(") + 1, r.lastIndexOf(")")).split(",")).length > 2 && (c = "rgba(" + c[0].trim() + ", " + c[1].trim() + ", " + c[2].trim() + ", "), c && "string" == typeof c && (p += ' style="border-top-color: ' + c + "0.65); border-bottom-color: " + c + "0.15); border-left-color: " + c + "0.65); border-right-color: " + c + '0.15)"');
					else 12 === n && (p += ' style="background:' + r + '"');
					p += ">";
					for (var g = [10, 0, 4, 2, 5, 9, 0, 4, 4, 2][n - 6], u = 0; u < g; u++) u > 0 && (p += " "), p += '<span style="background:' + r + '"></span>';
					s = e('<rs-loader class="' + a + " " + o + '">' + (p += "</div>") + "</div></rs-loader>")
				}
				return s
			}
		},
		playBGVideos: function (r, o) {
			i[r].pr_next_slide.find("rs-bgvideo").each(function (s) {
				if (a && !i[r].fallbacks.allowHTML5AutoPlayOnAndroid) return !1;
				if (!0 !== i[r].videos[this.id].waitToSlideTrans || "swapSlideProgress" !== o) {
					var n = e(this);
					i.resetVideo(n, r, !1, !0), i[r].videoOutAnim !== t && i[r].videoOutAnim[this.id] !== t && i[r].videoOutAnim[this.id].pause(), tpGS.gsap.to(n, .01, {
						autoAlpha: 1,
						ease: "power3.out",
						onComplete: function () {
							i.animcompleted(n, r, !0)
						}
					})
				} else {
					n = e(this);
					i.resetVideo(n, r, !1, !0)
				}
			})
		},
		addStaticLayerTo: function (e, t, a) {
			if (i[e].slayers.length < 2) {
				var r = document.createElement("rs-static-layers");
				r.className = "rs-stl-" + t, r.appendChild(a[0]), i[e].c[0].appendChild(r), i[e].slayers.push(r)
			} else i[e].slayers[1].appendChild(a[0])
		}
	});
	var a = i.is_mobile(),
		r = (i.is_android(), function () {
			return i.isIE11() ? function (e, t) {
				return e.querySelectorAll(t)
			} : function (e, t) {
				return e.getElementsByTagName(t)
			}
		}),
		o = function (e) {
			i[e].responsiveLevels = i.revToResp(i[e].responsiveLevels, i[e].rle), i[e].visibilityLevels = i.revToResp(i[e].visibilityLevels, i[e].rle), i[e].responsiveLevels[0] = 9999, i[e].rle = i[e].responsiveLevels.length || 1, i[e].gridwidth = i.revToResp(i[e].gridwidth, i[e].rle), i[e].gridheight = i.revToResp(i[e].gridheight, i[e].rle), i[e].editorheight !== t && (i[e].editorheight = i.revToResp(i[e].editorheight, i[e].rle)), i.updateDims(e)
		},
		s = function (t, i) {
			var a = [];
			return e.each(t, function (e, t) {
				e != i && a.push(t)
			}), a
		},
		n = function (t, a, r) {
			i[r].c.find(t).each(function () {
				var t = e(this);
				t.data("key") === a && t.remove()
			})
		},
		l = function (e, a) {
			if (i["rsfont_" + e] == t && (i["rsfont_" + e] = document.createElement("span"), i["rsfont_" + e].innerHTML = Array(100).join("wi"), i["rsfont_" + e].style.cssText = ["position:absolute", "width:auto", "font-size:128px", "left:-99999px"].join(" !important;"), i["rsfont_" + e].style.fontFamily = e, document.body.appendChild(i["rsfont_" + e])), a === t) return i["rsfont_" + e].clientWidth;
			document.body.removeChild(i["rsfont_" + e])
		},
		d = function (t, i) {
			var a = 0;
			return t.find(i).each(function () {
				var t = e(this);
				!t.hasClass("tp-forcenotvisible") && a < t.outerWidth() && (a = t.outerWidth())
			}), a
		},
		c = function (r) {
			if (r === t || i[r] === t || i[r].c === t) return !1;
			if (i[r].cpar !== t && i[r].cpar.data("aimg") != t && ("enabled" == i[r].cpar.data("aie8") && i.isIE(8) || "enabled" == i[r].cpar.data("amobile") && a)) i[r].c.html('<img class="tp-slider-alternative-image" src="' + i[r].cpar.data("aimg") + '">');
			else {
				window._rs_firefox13 = !1, window._rs_ie = window._rs_ie === t ? !e.support.opacity : window._rs_ie, window._rs_ie9 = window._rs_ie9 === t ? 9 == document.documentMode : window._rs_ie9;
				var o = e.fn.jquery.split("."),
					s = parseFloat(o[0]),
					n = parseFloat(o[1]);
				1 == s && n < 7 && i[r].c.html('<div style="text-align:center; padding:40px 0px; font-size:20px; color:#992222;"> The Current Version of jQuery:' + o + " <br>Please update your jQuery Version to min. 1.7 in Case you wish to use the Revolution Slider Plugin</div>"), s > 1 && (window._rs_ie = !1), i[r].realslideamount = i[r].slideamount = 0;
				var l = i.getByTag(i[r].canvas[0], "RS-SLIDE"),
					d = [];
				for (var c in i[r].notInNav = [], i[r].slides = [], l) l.hasOwnProperty(c) && ("on" == i.gA(l[c], "hsom") && a ? d.push(l[c]) : (i.gA(l[c], "invisible") || 1 == i.gA(l[c], "invisible") ? i[r].notInNav.push(l[c]) : (i[r].slides.push(l[c]), i[r].slideamount++), i[r].realslideamount++, i.sA(l[c], "originalindex", i[r].realslideamount), i.sA(l[c], "origindex", i[r].realslideamount - 1)));
				for (c in d) d.hasOwnProperty(c) && d[c].remove();
				for (c in i[r].notInNav) i[r].notInNav.hasOwnProperty(c) && (i.sA(i[r].notInNav[c], "not_in_nav", !0), i[r].canvas[0].appendChild(i[r].notInNav[c]));
				if (i[r].canvas.css({
						visibility: "visible"
					}), i[r].slayers = i[r].c.find("rs-static-layers"), i[r].slayers.length > 0 && i.sA(i[r].slayers[0], "key", "staticlayers"), !0 === i[r].modal.useAsModal && (i[r].cpar.wrap('<rs-modal id="' + i[r].c[0].id + '_modal"></rs-modal>'), i[r].modal.c = e(i.closestNode(i[r].cpar[0], "RS-MODAL")), i[r].modal.c.appendTo(e("body")), i[r].modal !== t && i[r].modal.alias !== t && i.revModal(r, {
						mode: "init"
					})), 1 == i[r].waitForInit || 1 == i[r].modal.useAsModal) return i.RS_toInit !== t && (i.RS_toInit[r] = !0), i[r].c.trigger("revolution.slide.waitingforinit"), void(i[r].waitingForInit = !0);
				window.requestAnimationFrame(function () {
					u(r)
				}), i[r].initEnded = !0
			}
		},
		p = function () {
			e("body").data("rs-fullScreenMode", !e("body").data("rs-fullScreenMode")), e("body").data("rs-fullScreenMode") && setTimeout(function () {
				i.window.trigger("resize")
			}, 200)
		},
		g = function (e, a, r) {
			return i.gA(e, "lazyload") !== t ? i.gA(e, "lazyload") : i[r].lazyloaddata !== t && i[r].lazyloaddata.length > 0 && i.gA(e, i[r].lazyloaddata) !== t ? i.gA(e, i[r].lazyloaddata) : i.gA(e, "lazy-src") !== t ? i.gA(e, "lazy-src") : i.gA(e, "lazy-wpfc-original-src") !== t ? i.gA(e, "lazy-wpfc-original-src") : i.gA(e, "lazy") !== t ? i.gA(e, "lazy") : a
		},
		u = function (r) {
			if (i[r] !== t) {
				if (i[r].sliderisrunning = !0, !0 !== i[r].noDetach && i[r].c.detach(), i[r].shuffle) {
					for (var o = i[r].canvas.find("rs-slide:first-child"), s = i.gA(o[0], "firstanim"), n = 0; n < i[r].slideamount; n++) i[r].canvas.find("rs-slide:eq(" + Math.round(Math.random() * i[r].slideamount) + ")").prependTo(i[r].canvas);
					i.sA(i[r].canvas.find("rs-slide:first-child")[0], "firstanim", s)
				}
				i[r].slides = i.getByTag(i[r].canvas[0], "RS-SLIDE"), i[r].thumbs = new Array(i[r].slides.length), i[r].slots = 4, i[r].firststart = 1, i[r].loadqueue = [], i[r].syncload = 0;
				var l = 0,
					d = "carousel" === i[r].sliderType && i[r].carousel.border_radius !== t ? parseInt(i[r].carousel.border_radius, 0) : 0;
				for (var c in i[r].slides)
					if (i[r].slides.hasOwnProperty(c) && "length" !== c) {
						var u = i[r].slides[c],
							m = i.getByTag(u, "IMG")[0];
						i.gA(u, "key") === t && i.sA(u, "key", "rs-" + Math.round(999999 * Math.random()));
						var f = {
							params: Array(12),
							id: i.gA(u, "key"),
							src: i.gA(u, "thumb") !== t ? i.gA(u, "thumb") : g(m, m !== t ? m.src : t, r)
						};
						i.gA(u, "title") === t && i.sA(u, "title", ""), i.gA(u, "description") === t && i.sA(u, "description", ""), f.params[0] = {
							from: RegExp("\\{\\{title\\}\\}", "g"),
							to: i.gA(u, "title")
						}, f.params[1] = {
							from: RegExp("\\{\\{description\\}\\}", "g"),
							to: i.gA(u, "description")
						};
						for (var y = 1; y <= 10; y++) i.gA(u, "p" + y) !== t ? f.params[y + 1] = {
							from: RegExp("\\{\\{param" + y + "\\}\\}", "g"),
							to: i.gA(u, "p" + y)
						} : f.params[y + 1] = {
							from: RegExp("\\{\\{param" + y + "\\}\\}", "g"),
							to: ""
						};
						if (i[r].thumbs[l] = e.extend({}, !0, f), d > 0 && tpGS.gsap.set(u, {
								borderRadius: d + "px"
							}), i.gA(u, "link") != t || i.gA(u, "linktoslide") !== t) {
							var b = i.gA(u, "link") !== t ? i.gA(u, "link") : "slide",
								w = "slide" != b ? "no" : i.gA(u, "linktoslide"),
								_ = i.gA(u, "seoz");
							if (w != t && "no" != w && "next" != w && "prev" != w)
								for (var x in i[r].slides) i[r].slides.hasOwnProperty(x) && parseInt(i.gA(i[r].slides[x], "origindex"), 0) + 1 == i.gA(u, "linktoslide") && (w = i.gA(i[r].slides[x], "key"));
							e(u).prepend('<rs-layer class="rs-layer slidelink" id="rs_slidelink_' + Math.round(1e5 * Math.random()) + '" data-zindex="' + ("back" === _ ? 0 : "front" === _ ? 95 : _ !== t ? parseInt(_, 0) : 100) + '" dataxy="x:c;y:c" data-dim="w:100%;h:100%" data-basealign="slide"' + ("no" == w ? "slide" == b || a ? "" : "  data-actions='o:click;a:simplelink;target:" + (i.gA(u, "target") || "_self") + ";url:" + b + ";'" : "  data-actions='" + ("scroll_under" === w ? "o:click;a:scrollbelow;offset:100px;" : "prev" === w ? "o:click;a:jumptoslide;slide:prev;d:0.2;" : "next" === w ? "o:click;a:jumptoslide;slide:next;d:0.2;" : "o:click;a:jumptoslide;slide:" + w + ";d:0.2;") + "'") + " data-frame_1='e:power3.inOut;st:100;sp:100' data-frame_999='e:power3.inOut;o:0;st:w;sp:100'>" + (a ? "<a " + ("slide" != b ? ("_blank" === i.gA(u, "target") ? 'rel="noopener" ' : "") + 'target="' + (i.gA(u, "target") || "_self") + '" href="' + b + '"' : "") + "><span></span></a>" : "") + "</rs-layer>")
						}
						l++
					}
				if (i[r].simplifyAll && (i.isIE(8) || i.iOSVersion()) && (i[r].c.find(".rs-layer").each(function () {
						var t = e(this);
						t.removeClass("customin customout").addClass("fadein fadeout"), t.data("splitin", ""), t.data("speed", 400)
					}), i[r].c.find("rs-slide").each(function () {
						var t = e(this);
						t.data("transition", "fade"), t.data("masterspeed", 500), t.data("slotamount", 1), (t.find(".rev-slidebg") || t.find(">img").first()).data("panzoom", null)
					})), window._rs_desktop = window._rs_desktop === t ? !navigator.userAgent.match(/(iPhone|iPod|iPad|Android|BlackBerry|BB10|mobi|tablet|opera mini|nexus 7)/i) : window._rs_desktop, i[r].autoHeight = "fullscreen" == i[r].sliderLayout || i[r].autoHeight, "fullwidth" != i[r].sliderLayout || i[r].autoHeight || i[r].c.css({
						maxHeight: i[r].gridheight[i[r].level] + "px"
					}), "auto" == i[r].sliderLayout || null !== i.closestNode(i[r].c[0], "RS-FULLWIDTH-WRAP") || "fullscreen" === i[r].sliderLayout && 1 == i[r].disableForceFullWidth) i[r].topc = i[r].cpar;
				else {
					var k = i[r].cpar[0].style.marginTop,
						S = i[r].cpar[0].style.marginBottom;
					k = k === t || "" === k ? "" : "margin-top:" + k + ";", S = S === t || "" === S ? "" : "margin-bottom:" + S + ";", i[r].rsFullWidthWrap = i[r].topc = e('<rs-fullwidth-wrap id="' + i[r].c[0].id + '_forcefullwidth" style="' + k + S + '"></rs-fullwidth-wrap>'), i[r].forcer = e('<rs-fw-forcer style="height:' + (i[r].forcerHeight === t ? i[r].cpar.height() : i[r].forcerHeight) + 'px"></rs-fw-forcer>'), i[r].topc.append(i[r].forcer), i[r].topc.insertBefore(i[r].cpar), i[r].cpar.detach(), i[r].cpar.css({
						marginTop: "0px",
						marginBottom: "0px",
						position: "absolute"
					}), i[r].cpar.prependTo(i[r].topc)
				}
				if (i[r].forceOverflow && i[r].topc[0].classList.add("rs-forceoverflow"), "carousel" === i[r].sliderType && !0 !== i[r].overflowHidden && i[r].c.css({
						overflow: "visible"
					}), 0 !== i[r].maxHeight && tpGS.gsap.set([i[r].cpar, i[r].c, i[r].topc], {
						maxHeight: i[r].maxHeight + "px"
					}), i[r].fixedOnTop && tpGS.gsap.set(i[r].blockSpacing !== t && i[r].blockSpacing.block !== t ? i[r].blockSpacing.block : i[r].topc, {
						position: "fixed",
						top: "0px",
						left: "0px",
						pointerEvents: "none",
						zIndex: 5e3
					}), i[r].shadow !== t && i[r].shadow > 0 && i[r].cpar.addClass("tp-shadow" + i[r].shadow).append('<div class="tp-shadowcover" style="background-color:' + i[r].cpar.css("backgroundColor") + ";background-image:" + i[r].cpar.css("backgroundImage") + '"></div>'), i.updateDims(r, "prepared"), i.observeWraps === t && (i.observeWraps = new i.wrapObserver.init(function (e, i) {
						h(i, t, !0)
					})), !i[r].c.hasClass("revslider-initialised")) {
					i[r].c[0].classList.add("revslider-initialised"), i[r].c[0].id = i[r].c[0].id === t ? "revslider-" + Math.round(1e3 * Math.random() + 5) : i[r].c[0].id, i.revCheckIDS(r, i[r].c[0]), i[r].origcd = parseInt(i[r].duration, 0), i[r].scrolleffect._L = [], i[r].sbas = i[r].sbas === t ? {} : i[r].sbas, i[r].layers = i[r].layers || {}, i[r].sortedLayers = i[r].sortedLayers || {};
					var L = i[r].c[0].querySelectorAll("rs-layer, rs-row, rs-column, rs-group,  rs-bgvideo, .rs-layer");
					for (var T in L)
						if (L.hasOwnProperty(T)) {
							var R, O, A = e(L[T]),
								I = A.data();
							if (I.startclasses = L[T].className, I.startclasses = I.startclasses === t || null === I.startclasses ? "" : I.startclasses, I.animationonscroll = !!i[r].sbtimeline.set && i[r].sbtimeline.layers, I.animationonscroll = !0 === I.animationonscroll || "true" == I.animationonscroll, I.filteronscroll = !!i[r].scrolleffect.set && i[r].scrolleffect.layers, I.pxundermask = I.startclasses.indexOf("rs-pxmask") >= 0 && "off" !== i[r].parallax.type && I.startclasses.indexOf("rs-pxl-") >= 0, I.noPevents = I.startclasses.indexOf("rs-noevents") >= 0, I.sba)
								for (var y in R = I.sba.split(";")) R.hasOwnProperty(y) && ("t" == (O = R[y].split(":"))[0] && (I.animationonscroll = O[1], "false" == O[1] && (I.animOnScrollForceDisable = !0)), "e" == O[0] && (I.filteronscroll = O[1]), "so" == O[0] && (I.scrollBasedOffset = parseInt(O[1]) / 1e3));
							if ("true" != I.animationonscroll && 1 != I.animationonscroll || (I.startclasses += " rs-sba", A[0].className += " rs-sba"), I.startclasses.indexOf("rs-layer-static") >= 0 && i.handleStaticLayers && i.handleStaticLayers(A, r), "RS-BGVIDEO" !== A[0].tagName) {
								if (A[0].classList.add("rs-layer"), "column" === I.type && (I.columnwidth = "33.33%", I.verticalalign = "top", I.column !== t))
									for (var C in R = I.column.split(";")) R.hasOwnProperty(C) && ("w" === (O = R[C].split(":"))[0] && (I.columnwidth = O[1]), "a" === O[0] && (I.verticalalign = O[1]));
								var z = I.startclasses.indexOf("slidelink") >= 0 ? "z-index:" + I.zindex + ";width:100% !important;height:100% !important;" : "",
									P = "column" !== I.type ? "" : I.verticalalign === t ? " vertical-align:top;" : " vertical-align:" + I.verticalalign + ";",
									B = "row" === I.type || "column" === I.type ? "position:relative;" : "position:absolute;",
									M = "",
									G = "row" === I.type ? "rs-row-wrap" : "column" === I.type ? "rs-column-wrap" : "group" === I.type ? "rs-group-wrap" : "rs-layer-wrap",
									H = "",
									W = "",
									F = (I.noPevents, ";pointer-events:none");
								"row" === I.type || "column" === I.type || "group" === I.type ? (A[0].classList.remove("tp-resizeme"), "column" === I.type && (I.width = "auto", A[0].group = "row", tpGS.gsap.set(A, {
									width: "auto"
								}), I.filteronscroll = !1)) : (H = "display:" + ("inline-block" === A[0].style.display ? "inline-block" : "block") + ";", null !== i.closestNode(A[0], "RS-COLUMN") ? (A[0].group = "column", I.filteronscroll = !1) : null !== i.closestNode(A[0], "RS-GROUP-WRAP") && (A[0].group = "group", I.filteronscroll = !1)), I.wrpcls !== t && (M = M + " " + I.wrpcls), I.wrpid !== t && (W = 'id="' + I.wrpid + '"'), A.wrap("<" + G + " " + W + ' class="rs-parallax-wrap ' + M + '" style="' + P + " " + z + B + H + F + '"><rs-loop-wrap style="' + z + B + H + '"><rs-mask-wrap style="' + z + B + H + '">' + (I.pxundermask ? "<rs-px-mask></rs-px-mask>" : "") + "</rs-mask-wrap></rs-loop-wrap></" + G + ">"), !0 !== I.filteronscroll && "true" != I.filteronscroll || i[r].scrolleffect._L.push(A.parent()), A[0].id = A[0].id === t ? "layer-" + Math.round(999999999 * Math.random()) : A[0].id, i.revCheckIDS(r, A[0]), I.pxundermask ? i[r]._Lshortcuts[A[0].id] = {
									p: e(A[0].parentNode.parentNode.parentNode.parentNode),
									lp: e(A[0].parentNode.parentNode.parentNode),
									m: e(A[0].parentNode.parentNode)
								} : i[r]._Lshortcuts[A[0].id] = {
									p: e(A[0].parentNode.parentNode.parentNode),
									lp: e(A[0].parentNode.parentNode),
									m: e(A[0].parentNode)
								}, "column" === I.type && i[r]._Lshortcuts[A[0].id].p.append('<rs-cbg-mask-wrap><rs-column-bg id="' + A[0].id + '_rs_cbg"></rs-column-bg></rs-cbg-mask-wrap>'), "text" === I.type && i.getByTag(A[0], "IFRAME").length > 0 && (i[r].slideHasIframe = !0, A[0].classList.add("rs-ii-o")), i[r].BUG_safari_clipPath && "true" != I.animationonscroll && 1 != I.animationonscroll && A[0].classList.add("rs-pelock"), A[0].dataset.staticz !== t && "row" !== I.type && "row" !== A[0].group && "column" !== A[0].group && i.addStaticLayerTo(r, A[0].dataset.staticz, i[r]._Lshortcuts[A[0].id].p)
							}
							i.gA(A[0], "actions") && i.checkActions && i.checkActions(A, r, i[r]), !i.checkVideoApis || window.rs_addedvim && window.rs_addedyt || i[r].youtubeapineeded && i[r].vimeoapineeded || i.checkVideoApis(A, r)
						}
					i.checkActions && i.checkActions(t, r), i[r].c[0].addEventListener("mousedown", function () {
						if (!0 !== i[r].onceClicked && (i[r].onceClicked = !0, !0 !== i[r].onceVideoPlayed && i[r].activeRSSlide !== t && i[r].slides !== t && i[r].slides[i[r].activeRSSlide] !== t)) {
							var a = e(i[r].slides[i[r].activeRSSlide]).find("rs-bgvideo");
							a !== t && null !== a && a.length > 0 && i.playVideo(a, r)
						}
					}), i[r].c[0].addEventListener("mouseenter", function () {
						i[r].c.trigger("tp-mouseenter"), i[r].overcontainer = !0
					}, {
						passive: !0
					}), i[r].c[0].addEventListener("mouseover", function () {
						i[r].c.trigger("tp-mouseover"), i[r].overcontainer = !0
					}, {
						passive: !0
					}), i[r].c[0].addEventListener("mouseleave", function () {
						i[r].c.trigger("tp-mouseleft"), i[r].overcontainer = !1
					}, {
						passive: !0
					}), i[r].c.find(".rs-layer video").each(function (t) {
						var i = e(this);
						i.removeClass("video-js vjs-default-skin"), i.attr("preload", ""), i.css({
							display: "none"
						})
					}), i[r].rs_static_layer = i.getByTag(i[r].c[0], "RS-STATIC-LAYERS"), i.preLoadAudio && i[r].rs_static_layer.length > 0 && i.preLoadAudio(e(i[r].rs_static_layer), r, 1), i[r].rs_static_layer.length > 0 && (i.loadImages(i[r].rs_static_layer[0], r, 0, !0), i.waitForCurrentImages(i[r].rs_static_layer[0], r, function () {
						i[r] !== t && i[r].c.find("rs-static-layers img").each(function () {
							this.src = i.getLoadObj(r, i.gA(this, "src") != t ? i.gA(this, "src") : this.src).src
						})
					})), i[r].rowzones = [], i[r].rowzonesHeights = [], i[r].middleZones = [];
					let a = i.deepLink(r, N("#")[0]);
					a !== t && (i[r].startWithSlide = a, i[r].deepLinkListener = !0, window.addEventListener("hashchange", function () {
						if (!0 !== i[r].ignoreDeeplinkChange) {
							let e = i.deepLink(r, N("#")[0]);
							e !== t && i.callingNewSlide(r, e, !0)
						}
						i[r].ignoreDeeplinkChange = !1
					})), i[r].loader = i.buildSpinner(r, i[r].spinner, i[r].spinnerclr), i[r].loaderVisible = !0, i[r].c.append(i[r].loader), v(r), ("off" !== i[r].parallax.type || i[r].scrolleffect.set || i[r].sbtimeline.set) && i.checkForParallax && i.checkForParallax(r), i[r].fallbacks.disableFocusListener || "true" == i[r].fallbacks.disableFocusListener || !0 === i[r].fallbacks.disableFocusListener || (i[r].c.addClass("rev_redraw_on_blurfocus"), D());
					var j = i[r].viewPort;
					for (var y in "on" === i[r].navigation.mouseScrollNavigation && (j.enable = !0), i[r].slides)
						if (i[r].slides.hasOwnProperty(y)) {
							var E = e(i[r].slides[y]);
							i[r].rowzones[y] = [], i[r].rowzonesHeights[y] = [], i[r].middleZones[y] = [], E.find("rs-zone").each(function () {
								i[r].rowzones[y].push(e(this)), this.className.indexOf("rev_row_zone_middle") >= 0 && i[r].middleZones[y].push(this)
							}), (j.enable && i[r].inviewport || !j.enable) && "all" == i[r].lazyType && (i.loadImages(E[0], r, y), i.waitForCurrentImages(E[0], r, function () {}))
						}
					i[r].srowzones = [], i[r].smiddleZones = [], i[r].slayers && i[r].slayers.find("rs-zone").each(function () {
						i[r].srowzones.push(e(this)), this.className.indexOf("rev_row_zone_middle") >= 0 && i[r].smiddleZones.push(this)
					}), "carousel" === i[r].sliderType && tpGS.gsap.set(i[r].canvas, {
						scale: 1,
						perspective: 1200,
						transformStyle: "flat",
						opacity: 0
					}), i[r].c.prependTo(i[r].cpar), e("body").data("rs-fullScreenMode", !1), window.addEventListener("fullscreenchange", p, {
						passive: !0
					}), window.addEventListener("mozfullscreenchange", p, {
						passive: !0
					}), window.addEventListener("webkitfullscreenchange", p, {
						passive: !0
					}), i.document.on("updateContainerSizes." + i[r].c.attr("id"), function () {
						if (i[r] !== t) return i[r].c != t && void(i.updateDims(r, "ignore") && window.requestAnimationFrame(function () {
							i.updateDims(r, "ignore"), i[r].fullScreenMode = i.checkfullscreenEnabled(r), i.lastwindowheight = i.getWinH(r), h(r)
						}))
					}), j.presize && (i[r].pr_next_slide = e(i[r].slides[0]), i.loadImages(i[r].pr_next_slide[0], r, 0, !0), i.waitForCurrentImages(i[r].pr_next_slide.find(".tp-layers"), r, function () {
						i.animateTheLayers && i.animateTheLayers({
							slide: i[r].pr_next_key,
							id: r,
							mode: "preset",
							caller: "runSlider"
						})
					})), ("off" != i[r].parallax.type || i[r].sbtimeline.set || !0 === j.enable) && i.scrollTicker(r), !0 !== j.enable && (i[r].inviewport = !0, i.enterViewPort(r)), i.RS_toInit !== t && (i.RS_toInit[r] = !0), i[r].observeWrap && i.observeWraps && i.wrapObserver.observe(i[r].rsFullWidthWrap !== t ? i[r].rsFullWidthWrap[0] : i[r].cpar[0], r)
				}
			}
		},
		m = function (e, a) {
			i.winW < i[e].hideSliderAtLimit ? (i[e].c.trigger("stoptimer"), !0 !== i[e].sliderIsHidden && (i.sA(i[e].cpar[0], "displaycache", "none" != i[e].cpar.css("display") ? i[e].cpar.css("display") : i.gA(i[e].cpar[0], "displaycache")), i[e].cpar.css({
				display: "none"
			}), i[e].sliderIsHidden = !0)) : (!0 === i[e].sliderIsHidden || i[e].sliderIsHidden === t && i[e].c.is(":hidden")) && a && (i[e].cpar[0].style.display = i.gA(i[e].cpar[0], "displaycache") != t && "none" != i.gA(i[e].cpar[0], "displaycache") ? i.gA(i[e].cpar[0], "displaycache") : "block", i[e].sliderIsHidden = !1, i[e].c.trigger("restarttimer"), window.requestAnimationFrame(function () {
				h(e, !0)
			})), i.hideUnHideNav && i[e].navigation.use && i.hideUnHideNav(e)
		},
		h = function (e, r, o) {
			if (i[e].c === t) return !1;
			if (i[e].dimensionReCheck = {}, i[e].c.trigger("revolution.slide.beforeredraw"), 1 == i[e].infullscreenmode && (i[e].minHeight = i.getWinH(e)), a && (i[e].lastMobileHeight = i.getWinH(e)), o && i.updateDims(e), !i.resizeThumbsTabs || !0 === i.resizeThumbsTabs(e)) {
				if (window.requestAnimationFrame(function () {
						m(e, !0 !== r), C(e)
					}), i[e].started) {
					if ("carousel" == i[e].sliderType && i.prepareCarousel(e), "standard" === i[e].sliderType && i[e].mtl !== t && i.animateSlide({
							recall: !0,
							id: e
						}), "carousel" === i[e].sliderType && i[e].carCheckconW != i[e].canv.width && (clearTimeout(i[e].pcartimer), i[e].pcartimer = setTimeout(function () {
							i.prepareCarousel(e), i.animateTheLayers({
								slide: "individual",
								id: e,
								mode: "rebuild",
								caller: "containerResized_1"
							}), i[e].carCheckconW = i[e].canv.width
						}, 100), i[e].lastconw = i[e].canv.width), i.animateTheLayers && (i[e].pr_processing_key !== t ? i.animateTheLayers({
							slide: i[e].pr_processing_key,
							id: e,
							mode: "rebuild",
							caller: "containerResized_2"
						}) : i[e].pr_active_key !== t && i.animateTheLayers({
							slide: i[e].pr_active_key,
							id: e,
							mode: "rebuild",
							caller: "containerResized_3"
						})), "carousel" === i[e].sliderType)
						for (var s in i[e].panzoomTLs) i[e].panzoomTLs.hasOwnProperty(s) && i.startPanZoom(i[e].panzoomBGs[s], e, i[e].panzoomTLs[s].progress(), s, i[e].panzoomTLs[s].isActive() ? "play" : "reset");
					else f(e, i[e].pr_active_bg), f(e, i[e].pr_next_bg);
					clearTimeout(i[e].mNavigTimeout), i.manageNavigation && (i[e].mNavigTimeout = setTimeout(function () {
						i.manageNavigation(e)
					}, 20))
				}
				i.prepareCoveredVideo(e)
			}
			i[e].c.trigger("revolution.slide.afterdraw")
		},
		f = function (e, a) {
			if (a && a.data("panzoom") !== t) {
				var r = i.getSlideIndex(e, i.gA(i[e].slides[i[e].pr_active_key], "key"));
				i.startPanZoom(a, e, i[e].panzoomTLs[r] !== t ? i[e].panzoomTLs[r].progress() : 0, r, "play")
			}
		},
		v = function (a) {
			if (!0 !== i[a].noDetach && i[a].canvas.detach(), i[a].autoHeight && tpGS.gsap.set([i[a].c, i[a].cpar], {
					maxHeight: "none"
				}), tpGS.gsap.set(i[a].canvas, i[a].modal !== t && i[a].modal.useAsModal ? {
					overflow: "hidden",
					width: "100%",
					height: "100%"
				} : {
					overflow: "hidden",
					width: "100%",
					height: "100%",
					maxHeight: i[a].autoHeight ? "none" : i[a].cpar.css("maxHeight")
				}), "carousel" === i[a].sliderType) {
				var r = "margin-top:" + parseInt(i[a].carousel.padding_top || 0, 0) + "px;";
				i[a].canvas.css({
					overflow: "visible"
				}).wrap('<rs-carousel-wrap style="' + r + '"></rs-carousel-wrap>'), i[a].cpar.prepend("<rs-carousel-space></rs-carousel-space>").append("<rs-carousel-space></rs-carousel-space>"), i.defineCarouselElements(a)
			}
			i[a].startWithSlide = i[a].startWithSlide === t ? t : Math.max(1, (i[a].sliderType, parseInt(i[a].startWithSlide))), i[a].cpar.css({
				overflow: "visible"
			}), i[a].scrolleffect.bgs = [];
			for (var o = 0; o < i[a].slides.length; o++) {
				var s = e(i[a].slides[o]),
					n = s.find(">img"),
					l = s.find("rs-bgvideo");
				n.detach(), l.detach(), (i[a].startWithSlide != t && i.gA(i[a].slides[o], "originalindex") == i[a].startWithSlide || i[a].startWithSlide === t && 0 == o) && (i[a].pr_next_key = s.index()), tpGS.gsap.set(s, {
					width: "100%",
					height: "100%",
					overflow: "hidden"
				}), n.wrap("<rs-sbg-px><rs-sbg-wrap></rs-sbg-wrap></rs-sbg-px>");
      
				var d = e(i.closestNode(n[0], "RS-SBG-WRAP")),
					c = s.data("mediafilter"),
					p = y(n.data(), a),
					u = p.bgcolor !== t && p.bgcolor.indexOf("gradient") >= 0,
					m = p.bgcolor !== t && p.bgcolor.indexOf("gradient") >= 0 ? "background:" + p.bgcolor + ";" : "background-color:" + p.bgcolor + ";";
        
				p.src = n[0].src, p.lazyload = g(n[0], t, a), p.slidebgimage = !0, c = "none" === c || c === t ? "" : c, l.length > 0 && (l.addClass("defaultvid").css({
					zIndex: 30
				}), c !== t && "" !== c && "none" !== c && l.addClass(c), l.appendTo(d), p.parallax != t && (l.data("parallax", p.parallax), l.data("showcoveronpause", "on"), l.data("mediafilter", c))), "none" != i[a].dottedOverlay && i[a].dottedOverlay != t && d.append('<rs-dotted class="' + i[a].dottedOverlay + '"></rs-dotted>'), m += (u ? "" : "background-repeat:" + p.bgrepeat + ";background-image:url(" + p.src + ");background-size:" + p.bgfit + ";background-position:" + p.bgposition + ";") + "width:100%;height:100%;", m += "standard" === i[a].sliderType || "undefined" === i[a].sliderType ? "opacity:0;" : "", n.data("mediafilter", c), c = n.data("panzoom") !== t ? "" : c;
				var h = e("<rs-sbg " + (p.lazyload !== t ? 'data-lazyload="' + p.lazyload + '"' : "") + ' src="' + p.src + '" class="' + c + '" data-bgcolor=linear-gradient(150deg, rgba(19,28,119,1) 0%, rgba(0,8,87,1) 100%)"'  + '" style="' + my + '"></rs-sbg>');
				d.append(h);
				var f = document.createComment("Runtime Modification - Img tag is Still Available for SEO Goals in Source - " + n.get(0).outerHTML);
				n.replaceWith(f), d.data(p), h.data(p), i.gA(s[0], "sba") === t && i.sA(s[0], "sba", "");
				var v = {},
					b = i.gA(s[0], "sba").split(";");
				for (var w in b)
					if (b.hasOwnProperty(w)) {
						var _ = b[w].split(":");
						switch (_[0]) {
							case "f":
								v.f = _[1];
								break;
							case "b":
								v.b = _[1];
								break;
							case "g":
								v.g = _[1];
								break;
							case "t":
								v.s = _[1]
						}
					}
				i.sA(s[0], "scroll-based", !!i[a].sbtimeline.set && (v.s !== t && v.s)), i[a].scrolleffect.set ? (i[a].scrolleffect.bgs.push({
					fade: v.f !== t ? v.f : !!i[a].scrolleffect.slide && i[a].scrolleffect.fade,
					blur: v.b !== t ? v.b : !!i[a].scrolleffect.slide && i[a].scrolleffect.blur,
					grayscale: v.g !== t ? v.g : !!i[a].scrolleffect.slide && i[a].scrolleffect.grayscale,
					c: d.wrap("<rs-sbg-effectwrap></rs-sbg-effectwrap>").parent()
				}), s.prepend(d.parent().parent())) : s.prepend(d.parent())
			}
			"carousel" === i[a].sliderType ? (tpGS.gsap.set(i[a].carousel.wrap, {
				opacity: 0
			}), i[a].c[0].appendChild(i[a].carousel.wrap[0])) : i[a].c[0].appendChild(i[a].canvas[0])
		},
		y = function (r, o) {
			r.bg = r.bg === t ? "" : r.bg;
			var s = r.bg.split(";"),
				n = {
					bgposition: "50% 50%",
					bgfit: "cover",
					bgrepeat: "no-repeat",
					bgcolor: "transparent"
				};
			for (var l in s)
				if (s.hasOwnProperty(l)) {
					var d = s[l].split(":"),
						c = d[0],
						p = d[1],
						g = "";
					switch (c) {
						case "p":
							g = "bgposition";
							break;
						case "f":
							g = "bgfit";
							break;
						case "r":
							g = "bgrepeat";
							break;
						case "c":
							g = "bgcolor"
					}
					g !== t && (n[g] = p)
				}
			return i[o].fallbacks.panZoomDisableOnMobile && a && (n.panzoom = null, n.bgfit = "cover"), e.extend(!0, r, n)
		},
		b = function (t, a) {
			a.find(".slot, .slot-circle-wrapper").each(function () {
				e(this).remove()
			}), i[t].transition = 0
		},
		w = function (e) {
			var i = e;
			return e != t && e.length > 0 && (i = e.split("?")[0]), i
		},
		_ = function (e) {
			var i = e;
			return e != t && e.length > 0 && (i = i.replace(document.location.protocol, "")), i
		},
		x = function (e, t) {
			var i = e.split("/"),
				a = t.split("/");
			i.pop();
			for (var r = 0; r < a.length; r++) "." != a[r] && (".." == a[r] ? i.pop() : i.push(a[r]));
			return i.join("/")
		},
		k = function (e, a, r) {
			if (i[a] !== t) {
				for (var o in i[a].syncload--, i[a].loadqueue)
					if (i[a].loadqueue.hasOwnProperty(o) && "loaded" !== i[a].loadqueue[o].progress) {
						var s = i[a].loadqueue[o].src !== t ? i[a].loadqueue[o].src.replace(/\.\.\/\.\.\//gi, "") : i[a].loadqueue[o].src;
						s.indexOf("www.") < 13 && (s = s.replace("www.", ""));
						var n = e.src.indexOf("www.") < 13 ? e.src.replace("www.", "") : e.src;
						(s === e.src || _(s) === _(n) || w(document.location.protocol + s) === w(decodeURIComponent(n)) || w(document.location.origin + s) === w(decodeURIComponent(n)) || w(document.location.origin.replace("/www.", "/") + s) === w(decodeURIComponent(n)) || w(document.location.origin.replace("/www.", "/") + s) === w(decodeURIComponent(n).replace("/www.", "/")) || w(self.location.href.substring(0, self.location.href.length - 1) + s) === w(decodeURIComponent(n)) || w(x(self.location.href, i[a].loadqueue[o].src)) === w(decodeURIComponent(n)) || w(document.location.origin + "/" + s) === w(decodeURIComponent(n)) || w(self.location.href.substring(0, self.location.href.length - 1) + "/" + s) === w(decodeURIComponent(n)) || w(i[a].loadqueue[o].src) === w(decodeURIComponent(n)) || "file://" === window.location.origin && w(e.src).match(new RegExp(s))) && (i[a].loadqueue[o].img = e, i[a].loadqueue[o].progress = r, i[a].loadqueue[o].width = e.width, i[a].loadqueue[o].height = e.height)
					}
				S(a)
			}
		},
		S = function (a) {
			4 != i[a].syncload && i[a].loadqueue && e.each(i[a].loadqueue, function (r, o) {
				if ("prepared" == o.progress && i[a].syncload <= 4) {
					if (i[a].syncload++, "img" == o.type) {
						var s = new Image;
						/^([\w]+\:)?\/\//.test(o.src) && -1 === o.src.indexOf(location.host) && "" !== i[a].imgCrossOrigin && i[a].imgCrossOrigin !== t && (s.crossOrigin = i[a].imgCrossOrigin), s.onload = function () {
							k(this, a, "loaded"), o.error = !1
						}, s.onerror = function () {
							k(this, a, "failed"), o.error = !0
						}, s.src = o.src, o.starttoload = e.now()
					} else e.get(o.src, function (e) {
						o.innerHTML = (new XMLSerializer).serializeToString(e.documentElement), o.progress = "loaded", i[a].syncload--, S(a)
					}).fail(function () {
						o.progress = "failed", i[a].syncload--, S(a)
					});
					o.progress = "inload"
				}
			})
		},
		L = function (e, t) {
			return console.log("Static Image " + e + "  Could not be loaded in time. Error Exists:" + t), !0
		},
		T = function (t, a) {
			if (e.now() - i[a][t + "starttime"] > 5e3 && 1 != i[a][t + "warning"]) {
				i[a][t + "warning"] = !0;
				var r = t + " Api Could not be loaded !";
				"https:" === location.protocol && (r += " Please Check and Renew SSL Certificate !"), console.error(r), i[a].c.append('<div style="position:absolute;top:50%;width:100%;color:#e74c3c;  font-size:16px; text-align:center; padding:15px;background:#000; display:block;"><strong>' + r + "</strong></div>")
			}
			return !0
		},
		R = function (a) {
			i[a] !== t && (i[a].pr_active_slide = e(i[a].slides[i[a].pr_active_key]), i[a].pr_next_slide = e(i[a].slides[i[a].pr_processing_key]), i[a].pr_active_bg = i[a].pr_active_slide.find("rs-sbg-wrap"), i[a].pr_next_bg = i[a].pr_next_slide.find("rs-sbg-wrap"), i[a].pr_active_bg !== t && i[a].pr_active_bg.length > 0 && tpGS.gsap.to(i[a].pr_active_bg, .5, {
				opacity: 0
			}), i[a].pr_next_bg !== t && i[a].pr_next_bg.length > 0 && tpGS.gsap.to(i[a].pr_next_bg, .5, {
				opacity: 0
			}), tpGS.gsap.set(i[a].pr_active_slide, {
				zIndex: 18
			}), i[a].pr_next_slide !== t && i[a].pr_next_slide.length > 0 && tpGS.gsap.set(i[a].pr_next_slide, {
				autoAlpha: 0,
				zIndex: 20
			}), i[a].tonpause = !1, i[a].pr_active_key !== t && i.removeTheLayers(i[a].pr_active_slide, a, !0), i[a].firststart = 1, setTimeout(function () {
				delete i[a].pr_active_key, delete i[a].pr_processing_key
			}, 200))
		},
		O = function (a, r) {
			if (i[a] !== t)
				if (clearTimeout(i[a].waitWithSwapSlide), i[a].pr_processing_key === t || !0 !== i[a].firstSlideShown) {
					if (clearTimeout(i[a].waitWithSwapSlide), i[a].startWithSlideKey !== t && (i[a].pr_next_key = i.getComingSlide(a, i[a].startWithSlideKey).nindex, delete i[a].startWithSlideKey), i[a].pr_active_slide = e(i[a].slides[i[a].pr_active_key]), i[a].pr_next_slide = e(i[a].slides[i[a].pr_next_key]), i[a].pr_next_key == i[a].pr_active_key) return delete i[a].pr_next_key;
					i[a].pr_processing_key = i[a].pr_next_key, i[a].pr_cache_pr_next_key = i[a].pr_next_key, delete i[a].pr_next_key, i[a].pr_next_slide !== t && i[a].pr_next_slide[0] !== t && i.gA(i[a].pr_next_slide[0], "hal") !== t && i.sA(i[a].pr_next_slide[0], "sofacounter", i.gA(i[a].pr_next_slide[0], "sofacounter") === t ? 1 : parseInt(i.gA(i[a].pr_next_slide[0], "sofacounter"), 0) + 1), i[a].stopLoop && i[a].pr_processing_key == i[a].lastslidetoshow - 1 && (i[a].progressC.css({
						visibility: "hidden"
					}), i[a].c.trigger("revolution.slide.onstop"), i[a].noloopanymore = 1), i[a].pr_next_slide.index() === i[a].slideamount - 1 && i[a].looptogo > 0 && "disabled" !== i[a].looptogo && (i[a].looptogo--, i[a].looptogo <= 0 && (i[a].stopLoop = !0)), i[a].tonpause = !0, i[a].slideInSwapTimer = !0, i[a].c.trigger("stoptimer"), "off" === i[a].spinner ? i[a].loader !== t && !0 === i[a].loaderVisible && (i[a].loader.css({
						display: "none"
					}), i[a].loaderVisible = !1) : i[a].loadertimer = setTimeout(function () {
						i[a].loader !== t && !0 !== i[a].loaderVisible && (i[a].loader.css({
							display: "block"
						}), i[a].loaderVisible = !0)
					}, 50);
					var o = "carousel" === i[a].sliderType && "all" !== i[a].lazyType ? i.loadVisibleCarouselItems(a) : i[a].pr_next_slide[0];
					i.loadImages(o, a, 1), i.preLoadAudio && i.preLoadAudio(i[a].pr_next_slide, a, 1), i.waitForCurrentImages(o, a, function () {
						i[a].firstSlideShown = !0, i[a].pr_next_slide.find("rs-bgvideo").each(function () {
							var t = e(this);
							t.hasClass("HasListener") || (t.data("bgvideo", 1), i.manageVideoLayer(t, a, i.gA(i[a].pr_next_slide[0], "key")), i.prepareCoveredVideo(a)), 0 == t.find(".rs-fullvideo-cover").length && t.append('<div class="rs-fullvideo-cover"></div>')
						}), i.loadUpcomingContent(a), window.requestAnimationFrame(function () {
							A(i[a].pr_next_slide.find("rs-sbg"), a, r)
						})
					})
				} else i[a].waitWithSwapSlide = setTimeout(function () {
					O(a, r)
				}, 18)
		},
		A = function (a, r, o) {
			if (i[r] !== t) {
				if (C(r), i[r].pr_active_slide = e(i[r].slides[i[r].pr_active_key]), i[r].pr_next_slide = e(i[r].slides[i[r].pr_processing_key]), i[r].pr_active_bg = i[r].pr_active_slide.find("rs-sbg-wrap"), i[r].pr_next_bg = i[r].pr_next_slide.find("rs-sbg-wrap"), i[r].tonpause = !1, clearTimeout(i[r].loadertimer), i[r].loader !== t && !0 === i[r].loaderVisible && (window.requestAnimationFrame(function () {
						i[r].loader.css({
							display: "none"
						})
					}), i[r].loaderVisible = !1), i[r].onBeforeSwap = {
						slider: r,
						slideIndex: parseInt(i[r].pr_active_key, 0) + 1,
						slideLIIndex: i[r].pr_active_key,
						nextSlideIndex: parseInt(i[r].pr_processing_key, 0) + 1,
						nextSlideLIIndex: i[r].pr_processing_key,
						nextslide: i[r].pr_next_slide,
						slide: i[r].pr_active_slide,
						currentslide: i[r].pr_active_slide,
						prevslide: i[r].pr_lastshown_key !== t ? i[r].slides[i[r].pr_lastshown_key] : ""
					}, i[r].c.trigger("revolution.slide.onbeforeswap", i[r].onBeforeSwap), i[r].transition = 1, i[r].stopByVideo = !1, i[r].pr_next_slide[0] !== t && i.gA(i[r].pr_next_slide[0], "duration") != t && "" != i.gA(i[r].pr_next_slide[0], "duration") ? i[r].duration = parseInt(i.gA(i[r].pr_next_slide[0], "duration"), 0) : i[r].duration = i[r].origcd, i[r].pr_next_slide[0] === t || "true" != i.gA(i[r].pr_next_slide[0], "ssop") && !0 !== i.gA(i[r].pr_next_slide[0], "ssop") ? i[r].ssop = !1 : i[r].ssop = !0, i[r].sbtimeline.set && i[r].sbtimeline.fixed && i.updateFixedScrollTimes(r), i[r].c.trigger("nulltimer"), i[r].sdir = i[r].pr_processing_key < i[r].pr_active_key ? 1 : 0, "arrow" == i[r].sc_indicator && (0 == i[r].pr_active_key && i[r].pr_processing_key == i[r].slideamount - 1 && (i[r].sdir = 1), i[r].pr_active_key == i[r].slideamount - 1 && 0 == i[r].pr_processing_key && (i[r].sdir = 0)), i[r].lsdir = i[r].sdir, i[r].pr_active_key != i[r].pr_processing_key && 1 != i[r].firststart && "carousel" !== i[r].sliderType && i.removeTheLayers && i.removeTheLayers(i[r].pr_active_slide, r), 1 !== i.gA(i[r].pr_next_slide[0], "rspausetimeronce") && 1 !== i.gA(i[r].pr_next_slide[0], "rspausetimeralways") ? i[r].c.trigger("restarttimer") : (i[r].stopByVideo = !0, i.unToggleState(i[r].slidertoggledby)), i.sA(i[r].pr_next_slide[0], "rspausetimeronce", 0), i[r].pr_next_slide[0] !== t && i.sA(i[r].c[0], "slideactive", i.gA(i[r].pr_next_slide[0], "key")), "carousel" == i[r].sliderType) i[r].mtl = tpGS.gsap.timeline(), i.prepareCarousel(r), I(r), i.playBGVideos(r, "carousel"), i[r].transition = 0;
				else {
					i[r].mtl = tpGS.gsap.timeline({
						paused: !0,
						onComplete: function () {
							I(r)
						}
					}), i[r].mtl.add(tpGS.gsap.set(i[r].pr_next_bg.find("rs-sbg"), {
						opacity: 0
					})), i[r].pr_next_key !== t ? i.animateTheLayers({
						slide: i[r].pr_next_key,
						id: r,
						mode: "preset",
						caller: "swapSlideProgress_1"
					}) : i[r].pr_processing_key !== t ? i.animateTheLayers({
						slide: i[r].pr_processing_key,
						id: r,
						mode: "preset",
						caller: "swapSlideProgress_2"
					}) : i[r].pr_active_key !== t && i.animateTheLayers({
						slide: i[r].pr_active_key,
						id: r,
						mode: "preset",
						caller: "swapSlideProgress_3"
					}), 1 == i[r].firststart && (i[r].pr_active_slide[0] !== t && tpGS.gsap.set(i[r].pr_active_slide, {
						autoAlpha: 0
					}), i[r].firststart = 0), i[r].pr_active_slide[0] !== t && tpGS.gsap.set(i[r].pr_active_slide, {
						zIndex: 18
					}), i[r].pr_next_slide[0] !== t && tpGS.gsap.set(i[r].pr_next_slide, {
						autoAlpha: 0,
						zIndex: 20
					}), "prepared" == i.gA(i[r].pr_next_slide[0], "differentissplayed") && (i.sA(i[r].pr_next_slide[0], "differentissplayed", "done"), i.sA(i[r].pr_next_slide[0], "anim", i.gA(i[r].pr_next_slide[0], "savedanim"))), i.gA(i[r].pr_next_slide[0], "firstanim") != t && "done" != i.gA(i[r].pr_next_slide[0], "differentissplayed") && (i.sA(i[r].pr_next_slide[0], "savedanim", i.gA(i[r].pr_next_slide[0], "anim")), i.sA(i[r].pr_next_slide[0], "anim", i.gA(i[r].pr_next_slide[0], "firstanim")), i.sA(i[r].pr_next_slide[0], "differentissplayed", "prepared"));
					var s = function (e) {
						var i = (e = e === t ? "t:random" : e).split(";"),
							a = {};
						for (var r in i)
							if (i.hasOwnProperty(r)) {
								var o = i[r].split(":"),
									s = o[0],
									n = o[1],
									l = "transition";
								switch (s) {
									case "ei":
										l = "easein";
										break;
									case "eo":
										l = "easeout";
										break;
									case "s":
										l = "masterspeed";
										break;
									case "sl":
										l = "slotamount";
										break;
									case "r":
										l = "rotate";
										break;
									case "t":
										l = "transition";
										break;
									case "ax":
										l = "axis";
										break;
									case "ro":
										l = "row";
										break;
									case "co":
										l = "column";
										break;
									case "fr":
										l = "from"
								}
								s !== t && n !== t && (a[l] = n.split(","))
							}
						a.transition === t && (a = {
							transition: ["fade"]
						});
						return a
					}(i.gA(i[r].pr_next_slide[0], "anim"));
					i.sA(i[r].pr_next_slide[0], "ntrid", "on" == i.gA(i[r].pr_next_slide[0], "rndtrans") ? Math.round(80 * Math.random()) : parseInt(i.gA(i[r].pr_next_slide[0], "ntrid"), 0) + 1 || 0), i.sA(i[r].pr_next_slide[0], "ntrid", s.transition === t || i.gA(i[r].pr_next_slide[0], "ntrid") == s.transition.length ? 0 : i.gA(i[r].pr_next_slide[0], "ntrid")), i.animateSlide({
						animation: s,
						ntrid: i.gA(i[r].pr_next_slide[0], "ntrid"),
						id: r
					}), i.playBGVideos(r, "swapSlideProgress"), i[r].pr_next_bg.data("panzoom") !== t && (requestAnimationFrame(function () {
						i.startPanZoom(i[r].pr_next_bg, r, 0, i.getSlideIndex(r, i.gA(i[r].pr_next_slide[0], "key")), "first")
					}), i[r].mtl.add(tpGS.gsap.set(i[r].pr_next_bg, {
						autoAlpha: 0,
						immediateRender: !0
					}), 0)), i[r].mtl.pause()
				}
				i.animateTheLayers ? "carousel" === i[r].sliderType ? (!1 !== i[r].carousel.showLayersAllTime && (i[r].carousel.allLayersStarted ? i.animateTheLayers({
					slide: "individual",
					id: r,
					mode: "rebuild",
					caller: "swapSlideProgress_5"
				}) : i.animateTheLayers({
					slide: "individual",
					id: r,
					mode: "start",
					caller: "swapSlideProgress_4"
				}), i[r].carousel.allLayersStarted = !0), 0 !== i[r].firststart ? i.animateTheLayers({
					slide: 0,
					id: r,
					mode: "start",
					caller: "swapSlideProgress_6"
				}) : !0 !== o && i.animateTheLayers({
					slide: i[r].pr_next_key !== t ? i[r].pr_next_key : i[r].pr_processing_key !== t ? i[r].pr_processing_key : i[r].pr_active_key,
					id: r,
					mode: "start",
					caller: "swapSlideProgress_7"
				}), i[r].firststart = 0) : i.animateTheLayers({
					slide: i[r].pr_next_key !== t ? i[r].pr_next_key : i[r].pr_processing_key !== t ? i[r].pr_processing_key : i[r].pr_active_key,
					id: r,
					mode: "start",
					caller: "swapSlideProgress_8"
				}) : i[r].mtl != t && setTimeout(function () {
					i[r].mtl.resume()
				}, 18), "carousel" !== i[r].sliderType && tpGS.gsap.to(i[r].pr_next_slide, .001, {
					autoAlpha: 1
				})
			}
		};
	var I = function (r) {
			if (i[r] !== t) {
				if ("done" !== i.RS_swapList[r]) {
					i.RS_swapList[r] = "done";
					var o = e.inArray(r, i.RS_swapping);
					i.RS_swapping.splice(o, 1)
				}
				if (i[r].firstSlideAvailable === t && (i[r].firstSlideAvailable = !0, window.requestAnimationFrame(function () {
						"hero" !== i[r].sliderType && i.createNavigation && i[r].navigation.use && !0 !== i[r].navigation.createNavigationDone && i.createNavigation(r)
					})), "carousel" === i[r].sliderType ? tpGS.gsap.to(i[r].carousel.wrap, 1, {
						opacity: 1
					}) : (tpGS.gsap.set(i[r].pr_next_bg.find("rs-sbg"), {
						zIndex: 20,
						autoAlpha: 1
					}), b(r, i[r].pr_next_slide), i[r].pr_next_slide.index() != i[r].pr_active_slide.index() && i[r].pr_active_slide[0] !== t && (tpGS.gsap.set(i[r].pr_active_slide, {
						zIndex: 18,
						autoAlpha: 0
					}), b(r, i[r].pr_active_slide))), i[r].pr_active_key = i[r].pr_processing_key !== t ? i[r].pr_processing_key : i[r].pr_active_key, delete i[r].pr_processing_key, "scroll" != i[r].parallax.type && "scroll+mouse" != i[r].parallax.type && "mouse+scroll" != i[r].parallax.type || (i[r].lastscrolltop = -999, i.generalObserver(a)), i[r].mtldiff = i[r].mtl.time(), delete i[r].mtl, i[r].pr_active_key !== t) {
					i.gA(i[r].slides[i[r].pr_active_key], "sloop") !== t && function (e) {
						if (i[e] !== t) {
							i[e].sloops = i[e].sloops === t ? {} : i[e].sloops;
							var a = i.gA(i[e].slides[i[e].pr_active_key], "key"),
								r = i[e].sloops[a];
							if (r === t) {
								r = {
									s: 2500,
									e: 4500,
									r: "unlimited"
								};
								var o = i.gA(i[e].slides[i[e].pr_active_key], "sloop").split(";");
								for (var s in o)
									if (o.hasOwnProperty(s)) {
										var n = o[s].split(":");
										switch (n[0]) {
											case "s":
												r.s = parseInt(n[1], 0) / 1e3;
												break;
											case "e":
												r.e = parseInt(n[1], 0) / 1e3;
												break;
											case "r":
												r.r = n[1]
										}
									}
								r.r = "unlimited" === r.r ? -1 : parseInt(r.r, 0), i[e].sloops[a] = r, r.key = a
							}
							r.ct = {
								time: r.s
							}, r.tl = tpGS.gsap.timeline({}), r.timer = tpGS.gsap.fromTo(r.ct, r.e - r.s, {
								time: r.s
							}, {
								time: r.e,
								ease: "none",
								onRepeat: function () {
									for (var a in i[e].layers[r.key]) i[e].layers[r.key].hasOwnProperty(a) && i[e]._L[a].timeline.play(r.s);
									var o = i[e].progressC;
									o !== t && o[0] !== t && o[0].tween !== t && o[0].tween.time(r.s)
								},
								onUpdate: function () {},
								onComplete: function () {}
							}).repeat(r.r), r.tl.add(r.timer, r.s), r.tl.time(i[e].mtldiff)
						}
					}(r), i.sA(i[r].slides[i[r].activeRSSlide], "isactiveslide", !1), i[r].activeRSSlide = i[r].pr_active_key, i.sA(i[r].slides[i[r].activeRSSlide], "isactiveslide", !0);
					var s = i.gA(i[r].slides[i[r].pr_active_key], "key"),
						n = i.gA(i[r].slides[i[r].pr_lastshown_key], "key");
					i.sA(i[r].c[0], "slideactive", s), n !== t && i[r].panzoomTLs !== t && i[r].panzoomTLs[i.getSlideIndex(r, n)] !== t && (i[r].panzoomTLs[i.getSlideIndex(r, n)].timeScale(3), i[r].panzoomTLs[i.getSlideIndex(r, n)].reverse()), i[r].pr_next_bg.data("panzoom") !== t && (i[r].panzoomTLs !== t && i[r].panzoomTLs[i.getSlideIndex(r, s)] !== t ? (i[r].panzoomTLs[i.getSlideIndex(r, s)].timeScale(1), i[r].panzoomTLs[i.getSlideIndex(r, s)].play()) : i.startPanZoom(i[r].pr_next_bg, r, 0, i.getSlideIndex(r, s), "play")), "carousel" !== i[r].sliderType && i.playBGVideos(r, "letItFree"), i[r].pr_active_bg.find("rs-bgvideo").each(function (o) {
						if (a && !i[r].fallbacks.allowHTML5AutoPlayOnAndroid) return !1;
						var s = e(this);
						i.stopVideo && (i.resetVideo(s, r), i.stopVideo(s, r)), i[r].videoOutAnim = i[r].videoOutAnim === t ? {} : i[r].videoOutAnim, i[r].videoOutAnim[this.id] = tpGS.gsap.to(s, 1, {
							autoAlpha: 1,
							ease: "power3.inOut",
							delay: .2
						})
					});
					var l = {
						slider: r,
						slideIndex: parseInt(i[r].pr_active_key, 0) + 1,
						slideLIIndex: i[r].pr_active_key,
						slide: i[r].pr_next_slide,
						currentslide: i[r].pr_next_slide,
						prevSlideIndex: i[r].pr_lastshown_key !== t && parseInt(i[r].pr_lastshown_key, 0) + 1,
						prevSlideLIIndex: i[r].pr_lastshown_key !== t && parseInt(i[r].pr_lastshown_key, 0),
						prevSlide: i[r].pr_lastshown_key !== t && i[r].slides[i[r].pr_lastshown_key]
					};
					if (i[r].c.trigger("revolution.slide.onchange", l), i[r].c.trigger("revolution.slide.onafterswap", l), i[r].deepLinkListener || i[r].enableDeeplinkHash) {
						let e = i.gA(i[r].slides[i[r].pr_active_key], "deeplink");
						e !== t && e.length > 0 && (i[r].ignoreDeeplinkChange = !0, window.location.hash = i.gA(i[r].slides[i[r].pr_active_key], "deeplink"))
					}
					i[r].pr_lastshown_key = i[r].pr_active_key, i[r].startWithSlide !== t && "done" !== i[r].startWithSlide && "carousel" === i[r].sliderType && (i[r].firststart = 0), i[r].duringslidechange = !1, i[r].pr_active_slide.length > 0 && 0 != i.gA(i[r].pr_active_slide[0], "hal") && i.gA(i[r].pr_active_slide[0], "hal") <= i.gA(i[r].pr_active_slide[0], "sofacounter") && i[r].c.revremoveslide(i[r].pr_active_slide.index());
					var d = i[r].pr_processing_key || i[r].pr_active_key || 0;
					i[r].rowzones != t && (d = d > i[r].rowzones.length ? i[r].rowzones.length : d), (i[r].rowzones != t && i[r].rowzones.length > 0 && i[r].rowzones[d] != t && d >= 0 && d <= i[r].rowzones.length && i[r].rowzones[d].length > 0 || i.winH < i[r].module.height) && i.updateDims(r), delete i[r].sc_indicator, delete i[r].sc_indicator_dir, i[r].firstLetItFree === t && (i.generalObserver(a), i[r].firstLetItFree = !0)
				}
			}
		},
		C = function (a) {
			var r = i[a].progressBar;
			if (i[a].progressC === t || 0 == i[a].progressC.length)
				if (i[a].progressC = e('<rs-progress style="visibility:hidden;"></rs-progress>'), "horizontal" === r.style || "vertical" === r.style) {
					if ("module" === r.basedon) {
						for (var o = "", s = 0; s < i[a].slideamount; s++) o += "<rs-progress-bar></rs-progress-bar>";
						o += "<rs-progress-bgs>";
						for (s = 0; s < i[a].slideamount; s++) o += "<rs-progress-bg></rs-progress-bg>";
						if (o += "</rs-progress-bgs>", "nogap" !== r.gaptype)
							for (s = 0; s < i[a].slideamount; s++) o += "<rs-progress-gap></rs-progress-gap>";
						i[a].progressC[0].innerHTML = o, !0 === i[a].noDetach && i[a].c.append(i[a].progressC), i[a].progressCBarBGS = i.getByTag(i[a].progressC[0], "RS-PROGRESS-BG"), i[a].progressCBarGAPS = i.getByTag(i[a].progressC[0], "RS-PROGRESS-GAP"), "nogap" !== r.gaptype && tpGS.gsap.set(i[a].progressCBarGAPS, {
							backgroundColor: r.gapcolor,
							zIndex: "gapbg" === r.gaptype ? 17 : 27
						}), tpGS.gsap.set(i[a].progressCBarBGS, {
							backgroundColor: r.bgcolor
						})
					} else i[a].progressC[0].innerHTML = "<rs-progress-bar></rs-progress-bar>", !0 === i[a].noDetach && i[a].c.append(i[a].progressC);
					i[a].progressCBarInner = i.getByTag(i[a].progressC[0], "RS-PROGRESS-BAR"), tpGS.gsap.set(i[a].progressCBarInner, {
						background: r.color
					})
				} else i[a].progressC[0].innerHTML = '<canvas width="' + 2 * r.radius + '" height="' + 2 * r.radius + '" style="position:absolute" class="rs-progress-bar"></canvas>', !0 === i[a].noDetach && i[a].c.append(i[a].progressC), i[a].progressCBarInner = i[a].progressC[0].getElementsByClassName("rs-progress-bar")[0], i[a].progressBCanvas = i[a].progressCBarInner.getContext("2d"), i[a].progressBar.degree = "cw" === i[a].progressBar.style ? 360 : 0, z(a);
			if (!0 !== i[a].noDetach && i[a].progressC.detach(), i[a].progressBar.visibility[i[a].level] && 1 != i[a].progressBar.disableProgressBar)
				if ("horizontal" === r.style || "vertical" === r.style) {
					var n, l, d = i[a].slideamount - 1;
					if ("horizontal" === r.style) {
						var c = "grid" === r.alignby ? i[a].gridwidth[i[a].level] : i[a].module.width;
						n = Math.ceil(c / i[a].slideamount), l = Math.ceil((c - d * r.gapsize) / i[a].slideamount), tpGS.gsap.set(i[a].progressC, {
							visibility: "visible",
							top: "top" === r.vertical ? r.y + ("grid" === r.alignby && i[a].gridOffsetHeight !== t ? Math.max(0, i[a].gridOffsetHeight) : 0) : "center" === r.vertical ? "50%" : "auto",
							bottom: "top" === r.vertical || "center" === r.vertical ? "auto" : r.y + ("grid" === r.alignby && i[a].gridOffsetHeight !== t ? Math.max(0, i[a].gridOffsetHeight) : 0),
							left: "left" === r.horizontal && "grid" === r.alignby && i[a].gridOffsetWidth !== t ? Math.max(0, i[a].gridOffsetWidth) : "auto",
							right: "right" === r.horizontal && "grid" === r.alignby && i[a].gridOffsetWidth !== t ? Math.max(0, i[a].gridOffsetWidth) : "auto",
							y: "center" === r.vertical ? r.y : 0,
							height: r.size,
							backgroundColor: "module" === r.basedon ? "transparent" : r.bgcolor,
							marginTop: "bottom" === r.vertical ? 0 : "top" === r.vertical ? 0 : parseInt(r.size, 0) / 2,
							width: "grid" === r.alignby ? i[a].gridwidth[i[a].level] : "100%"
						}), tpGS.gsap.set(i[a].progressCBarInner, {
							x: "module" === r.basedon ? r.gap ? function (e) {
								return ("right" === r.horizontal ? d - e : e) * (l + r.gapsize)
							} : function (e) {
								return ("right" === r.horizontal ? d - e : e) * n
							} : 0,
							width: "module" === r.basedon ? r.gap ? l + "px" : 100 / i[a].slideamount + "%" : "100%"
						}), "module" === r.basedon && (tpGS.gsap.set(i[a].progressCBarBGS, {
							x: "module" === r.basedon ? r.gap ? function (e) {
								return e * (l + r.gapsize)
							} : function (e) {
								return e * n
							} : 0,
							width: "module" === r.basedon ? r.gap ? l + "px" : 100 / i[a].slideamount + "%" : "100%"
						}), tpGS.gsap.set(i[a].progressCBarGAPS, {
							width: r.gap ? r.gapsize + "px" : 0,
							x: r.gap ? function (e) {
								return (e + 1) * l + parseInt(r.gapsize, 0) * e
							} : 0
						}))
					} else if ("vertical" === r.style) {
						c = "grid" === r.alignby ? i[a].gridheight[i[a].level] : i[a].module.height;
						n = Math.ceil(c / i[a].slideamount), l = Math.ceil((c - d * r.gapsize) / i[a].slideamount), tpGS.gsap.set(i[a].progressC, {
							visibility: "visible",
							left: "left" === r.horizontal ? r.x + ("grid" === r.alignby && i[a].gridOffsetWidth !== t ? Math.max(0, i[a].gridOffsetWidth) : 0) : "center" === r.horizontal ? "50%" : "auto",
							right: "left" === r.horizontal || "center" === r.horizontal ? "auto" : r.x + ("grid" === r.alignby && i[a].gridOffsetWidth !== t ? Math.max(0, i[a].gridOffsetWidth) : 0),
							x: "center" === r.horizontal ? r.x : 0,
							top: "top" === r.vertical && "grid" === r.alignby && i[a].gridOffsetHeight !== t ? Math.max(i[a].gridOffsetHeight, 0) : "auto",
							bottom: "bottom" === r.vertical && "grid" === r.alignby && i[a].gridOffsetHeight !== t ? Math.max(i[a].gridOffsetHeight, 0) : "auto",
							width: r.size,
							marginLeft: "left" === r.horizontal ? 0 : "right" === r.horizontal ? 0 : parseInt(r.size, 0) / 2,
							backgroundColor: "module" === r.basedon ? "transparent" : r.bgcolor,
							height: "grid" === r.alignby ? i[a].gridheight[i[a].level] : "100%"
						}), tpGS.gsap.set(i[a].progressCBarInner, {
							y: "module" === r.basedon ? r.gap ? function (e) {
								return ("bottom" === r.vertical ? d - e : e) * (l + r.gapsize)
							} : function (e) {
								return ("bottom" === r.vertical ? d - e : e) * n
							} : 0,
							height: "module" === r.basedon ? r.gap ? l + "px" : 100 / i[a].slideamount + "%" : "100%"
						}), "module" === r.basedon && (tpGS.gsap.set(i[a].progressCBarBGS, {
							y: "module" === r.basedon ? r.gap ? function (e) {
								return e * (l + r.gapsize)
							} : function (e) {
								return e * n
							} : 0,
							height: "module" === r.basedon ? r.gap ? l + "px" : 100 / i[a].slideamount + "%" : "100%"
						}), tpGS.gsap.set(i[a].progressCBarGAPS, {
							height: r.gap ? r.gapsize + "px" : 0,
							y: r.gap ? function (e) {
								return (e + 1) * l + parseInt(r.gapsize, 0) * e
							} : 0
						}))
					}
				} else tpGS.gsap.set(i[a].progressC, {
					top: "top" === r.vertical ? r.y + ("grid" === r.alignby && i[a].gridOffsetHeight !== t ? Math.max(0, i[a].gridOffsetHeight) : 0) : "center" === r.vertical ? "50%" : "auto",
					bottom: "top" === r.vertical || "center" === r.vertical ? "auto" : r.y + ("grid" === r.alignby && i[a].gridOffsetHeight !== t ? Math.max(0, i[a].gridOffsetHeight) : 0),
					left: "left" === r.horizontal ? r.x + ("grid" === r.alignby && i[a].gridOffsetWidth !== t ? Math.max(0, i[a].gridOffsetWidth) : 0) : "center" === r.horizontal ? "50%" : "auto",
					right: "left" === r.horizontal || "center" === r.horizontal ? "auto" : r.x + ("grid" === r.alignby && i[a].gridOffsetWidth !== t ? Math.max(0, i[a].gridOffsetWidth) : 0),
					y: "center" === r.vertical ? r.y : 0,
					x: "center" === r.horizontal ? r.x : 0,
					width: 2 * r.radius,
					height: 2 * r.radius,
					marginTop: "center" === r.vertical ? 0 - r.radius : 0,
					marginLeft: "center" === r.horizontal ? 0 - r.radius : 0,
					backgroundColor: "transparent",
					visibility: "visible"
				});
			else i[a].progressC[0].style.visibility = "hidden";
			!0 !== i[a].noDetach && i[a].c.append(i[a].progressC), i[a].gridOffsetWidth === t && "grid" === r.alignby ? i[a].rebuildProgressBar = !0 : i[a].rebuildProgressBar = !1
		},
		z = function (e) {
			var t = i[e].progressBar,
				a = parseInt(t.radius),
				r = parseInt(t.radius);
			i[e].progressBCanvas.lineCap = "round", i[e].progressBCanvas.clearRect(0, 0, 2 * t.radius, 2 * t.radius), i[e].progressBCanvas.beginPath(), i[e].progressBCanvas.arc(a, r, t.radius - parseInt(t.size, 0), Math.PI / 180 * 270, Math.PI / 180 * 630), i[e].progressBCanvas.strokeStyle = t.bgcolor, i[e].progressBCanvas.lineWidth = parseInt(t.size, 0) - 1, i[e].progressBCanvas.stroke(), i[e].progressBCanvas.beginPath(), i[e].progressBCanvas.strokeStyle = t.color, i[e].progressBCanvas.lineWidth = parseInt(t.size, 0), i[e].progressBCanvas.arc(a, r, t.radius - parseInt(t.size, 0), Math.PI / 180 * 270, Math.PI / 180 * (270 + i[e].progressBar.degree), "cw" !== t.style), i[e].progressBCanvas.stroke()
		},
		P = function (a) {
			var r = function () {
					a !== t && i !== t && i[a] !== t && (0 == e("body").find(i[a].c).length || null === i[a] || null === i[a].c || i[a].c === t || 0 === i[a].length ? (! function (t) {
						i[t].c.children().each(function () {
							try {
								e(this).die("click")
							} catch (e) {}
							try {
								e(this).die("mouseenter")
							} catch (e) {}
							try {
								e(this).die("mouseleave")
							} catch (e) {}
							try {
								e(this).unbind("hover")
							} catch (e) {}
						});
						try {
							i[t].c.die("click", "mouseenter", "mouseleave")
						} catch (e) {}
						clearInterval(i[t].cdint), i[t].c = null
					}(a), clearInterval(i[a].cdint)) : (i[a].c.trigger("revolution.slide.slideatend"), 1 == i[a].c.data("conthoverchanged") && (i[a].conthover = i[a].c.data("conthover"), i[a].c.data("conthoverchanged", 0)), i.callingNewSlide(a, 1, !0)))
				},
				o = tpGS.gsap.timeline({
					paused: !0
				}),
				s = "reset" === i[a].progressBar.reset || i[a].progressBar.notnew === t ? 0 : .2,
				n = "slide" === i[a].progressBar.basedon ? 0 : i[a].pr_processing_key !== t ? i[a].pr_processing_key : i[a].pr_active_key;
			if (n = n === t ? 0 : n, "horizontal" === i[a].progressBar.style) {
				if (o.add(tpGS.gsap.to(i[a].progressCBarInner[n], s, {
						scaleX: 0,
						transformOrigin: "right" === i[a].progressBar.horizontal ? "100% 50%" : "0% 50%"
					})), o.add(tpGS.gsap.to(i[a].progressCBarInner[n], i[a].duration / 1e3, {
						transformOrigin: "right" === i[a].progressBar.horizontal ? "100% 50%" : "0% 50%",
						force3D: "auto",
						scaleX: 1,
						onComplete: r,
						delay: .5,
						ease: i[a].progressBar.ease
					})), "module" === i[a].progressBar.basedon)
					for (var l = 0; l < i[a].slideamount; l++) l !== n && o.add(tpGS.gsap.set(i[a].progressCBarInner[l], {
						scaleX: l < n ? 1 : 0,
						transformOrigin: "right" === i[a].progressBar.horizontal ? "100% 50%" : "0% 50%"
					}), 0)
			} else if ("vertical" === i[a].progressBar.style) {
				if (i[a].progressCBarInner[n] !== t && o.add(tpGS.gsap.to(i[a].progressCBarInner[n], s, {
						scaleY: 0,
						transformOrigin: "bottom" === i[a].progressBar.vertical ? "50% 100%" : "50% 0%"
					})), i[a].progressCBarInner[n] !== t && o.add(tpGS.gsap.to(i[a].progressCBarInner[n], i[a].duration / 1e3, {
						transformOrigin: "bottom" === i[a].progressBar.vertical ? "50% 100%" : "50% 0%",
						force3D: "auto",
						scaleY: 1,
						onComplete: r,
						delay: .5,
						ease: i[a].progressBar.ease
					})), "module" === i[a].progressBar.basedon)
					for (l = 0; l < i[a].slideamount; l++) l !== n && i[a].progressCBarInner[l] !== t && o.add(tpGS.gsap.set(i[a].progressCBarInner[l], {
						scaleY: l < n ? 1 : 0,
						transformOrigin: "bottom" === i[a].progressBar.vertical ? "50% 100%" : "50% 0%"
					}), 0)
			} else {
				var d = "slide" === i[a].progressBar.basedon ? 0 : Math.max(0, 360 / i[a].slideamount * n),
					c = "slide" === i[a].progressBar.basedon ? 360 : 360 / i[a].slideamount * (n + 1);
				"ccw" === i[a].progressBar.style && "slide" !== i[a].progressBar.basedon && (d = 360 - c, c = 360 - 360 / i[a].slideamount * n), o.add(tpGS.gsap.to(i[a].progressBar, s, {
					degree: "cw" === i[a].progressBar.style ? d : c,
					onUpdate: function () {
						z(a)
					}
				})), o.add(tpGS.gsap.to(i[a].progressBar, i[a].duration / 1e3, {
					degree: "cw" === i[a].progressBar.style ? c : d,
					onUpdate: function () {
						z(a)
					},
					onComplete: r,
					delay: .5,
					ease: i[a].progressBar.ease
				}))
			}
			return i[a].progressBar.notnew = !0, o
		},
		B = function (e) {
			i[e].progressC == t && C(e), i[e].loop = 0, i[e].stopAtSlide != t && i[e].stopAtSlide > -1 ? i[e].lastslidetoshow = i[e].stopAtSlide : i[e].lastslidetoshow = 999, i[e].stopLoop = !1, 0 == i[e].looptogo && (i[e].stopLoop = !0), i[e].c.on("stoptimer", function () {
				i[e].progressC != t && (i[e].progressC[0].tween.pause(), i[e].progressBar.disableProgressBar && (i[e].progressC[0].style.visibility = "hidden"), i[e].sliderstatus = "paused", i[e].slideInSwapTimer || i.unToggleState(i[e].slidertoggledby), i[e].slideInSwapTimer = !1)
			}), i[e].c.on("starttimer", function () {
				i[e].progressC != t && (i[e].forcepaused || (1 != i[e].conthover && 1 != i[e].stopByVideo && i[e].module.width > i[e].hideSliderAtLimit && 1 != i[e].tonpause && 1 != i[e].overnav && 1 != i[e].ssop && (1 === i[e].noloopanymore || i[e].viewPort.enable && !i[e].inviewport || (i[e].progressBar.visibility[i[e].level] || (i[e].progressC[0].style.visibility = "visible"), i[e].progressC[0].tween.resume(), i[e].sliderstatus = "playing")), !i[e].progressBar.disableProgressBar && i[e].progressBar.visibility[i[e].level] || (i[e].progressC[0].style.visibility = "hidden"), i.toggleState(i[e].slidertoggledby)))
			}), i[e].c.on("restarttimer", function () {
				if (i[e].progressC != t && !i[e].forcepaused) {
					if (i[e].mouseoncontainer && "on" == i[e].navigation.onHoverStop && !a) return !1;
					1 === i[e].noloopanymore || i[e].viewPort.enable && !i[e].inviewport || 1 == i[e].ssop ? i.unToggleState(i[e].slidertoggledby) : (i[e].progressBar.visibility[i[e].level] || (i[e].progressC[0].style.visibility = "visible"), i[e].progressC[0].tween !== t && i[e].progressC[0].tween.kill(), i[e].progressC[0].tween = P(e), i[e].progressC[0].tween.play(), i[e].sliderstatus = "playing", i.toggleState(i[e].slidertoggledby)), !i[e].progressBar.disableProgressBar && i[e].progressBar.visibility[i[e].level] || (i[e].progressC[0].style.visibility = "hidden"), i[e].mouseoncontainer && 1 == i[e].navigation.onHoverStop && !a && (i[e].c.trigger("stoptimer"), i[e].c.trigger("revolution.slide.onpause"))
				}
			}), i[e].c.on("nulltimer", function () {
				i[e].progressC != t && i[e].progressC[0] !== t && (i[e].progressC[0].tween !== t && i[e].progressC[0].tween.kill(), i[e].progressC[0].tween = P(e), i[e].progressC[0].tween.pause(0), !i[e].progressBar.disableProgressBar && i[e].progressBar.visibility[i[e].level] || (i[e].progressC[0].style.visibility = "hidden"), i[e].sliderstatus = "paused")
			}), i[e].progressC !== t && (i[e].progressC[0].tween = P(e)), i[e].slideamount > 1 && (0 != i[e].stopAfterLoops || 1 != i[e].stopAtSlide) ? i[e].c.trigger("starttimer") : (i[e].noloopanymore = 1, i[e].c.trigger("nulltimer")), i[e].c.on("tp-mouseenter", function () {
				i[e].mouseoncontainer = !0, 1 != i[e].navigation.onHoverStop || a || (i[e].c.trigger("stoptimer"), i[e].c.trigger("revolution.slide.onpause"))
			}), i[e].c.on("tp-mouseleft", function () {
				i[e].mouseoncontainer = !1, 1 != i[e].c.data("conthover") && 1 == i[e].navigation.onHoverStop && (1 == i[e].viewPort.enable && i[e].inviewport || 0 == i[e].viewPort.enable) && (i[e].c.trigger("revolution.slide.onresume"), i[e].c.trigger("starttimer"))
			})
		},
		M = function () {
			e(".rev_redraw_on_blurfocus").each(function () {
				var e = this.id;
				if (i[e] == t || i[e].c == t || 0 === i[e].c.length) return !1;
				1 != i[e].windowfocused && (i[e].windowfocused = !0, tpGS.gsap.delayedCall(.1, function () {
					i[e].fallbacks.nextSlideOnWindowFocus && i[e].c.revnext(), i[e].c.revredraw(), "playing" == i[e].lastsliderstatus && i[e].c.revresume(), i[e].c.trigger("revolution.slide.tabfocused")
				}))
			})
		},
		G = function () {
			document.hasFocus() || e(".rev_redraw_on_blurfocus").each(function (e) {
				var a = this.id;
				i[a].windowfocused = !1, i[a].lastsliderstatus = i[a].sliderstatus, i[a].c.revpause(), i[a].pr_next_bg !== t && i[a].pr_next_bg.data("panzoom") !== t && i.stopPanZoom(i[a].pr_next_bg, i[a]), i[a].pr_active_bg !== t && i[a].pr_active_bg.data("panzoom") !== t && i.stopPanZoom(i[a].pr_active_bg, i[a]), i[a].c.trigger("revolution.slide.tabblured")
			})
		},
		D = function () {
			var e = document.documentMode === t,
				a = window.chrome;
			1 !== i.revslider_focus_blur_listener && (i.revslider_focus_blur_listener = 1, e && !a ? i.window.on("focusin", function () {
				!0 !== i.windowIsFocused && M(), i.windowIsFocused = !0
			}).on("focusout", function () {
				!0 !== i.windowIsFocused && i.windowIsFocused !== t || G(), i.windowIsFocused = !1
			}) : window.addEventListener ? (window.addEventListener("focus", function (e) {
				!0 !== i.windowIsFocused && M(), i.windowIsFocused = !0
			}, {
				capture: !1,
				passive: !0
			}), window.addEventListener("blur", function (e) {
				!0 !== i.windowIsFocused && i.windowIsFocused !== t || G(), i.windowIsFocused = !1
			}, {
				capture: !1,
				passive: !0
			})) : (window.attachEvent("focus", function (e) {
				!0 !== i.windowIsFocused && M(), i.windowIsFocused = !0
			}), window.attachEvent("blur", function (e) {
				!0 !== i.windowIsFocused && i.windowIsFocused !== t || G(), i.windowIsFocused = !1
			})))
		},
		N = function (e) {
			for (var t, i = [], a = window.location.href.slice(window.location.href.indexOf(e) + 1).split("_"), r = 0; r < a.length; r++) a[r] = a[r].replace("%3D", "="), t = a[r].split("="), i.push(t[0]), i[t[0]] = t[1];
			return i
		},
		H = function (a) {
			if (i[a].blockSpacing !== t) {
				var r = i[a].blockSpacing.split(";");
				for (var o in i[a].blockSpacing = {}, r)
					if (r.hasOwnProperty(o)) {
						var s = r[o].split(":");
						switch (s[0]) {
							case "t":
								i[a].blockSpacing.top = i.revToResp(s[1], 4, 0);
								break;
							case "b":
								i[a].blockSpacing.bottom = i.revToResp(s[1], 4, 0);
								break;
							case "l":
								i[a].blockSpacing.left = i.revToResp(s[1], 4, 0);
								break;
							case "r":
								i[a].blockSpacing.right = i.revToResp(s[1], 4, 0)
						}
					}
				i[a].blockSpacing.block = e(i.closestClass(i[a].c[0], "wp-block-themepunch-revslider")), i[a].level !== t && i[a].blockSpacing !== t && tpGS.gsap.set(i[a].blockSpacing.block, {
					paddingLeft: i[a].blockSpacing.left[i[a].level],
					paddingRight: i[a].blockSpacing.right[i[a].level],
					marginTop: i[a].blockSpacing.top[i[a].level],
					marginBottom: i[a].blockSpacing.bottom[i[a].level]
				})
			}
		},
		W = function (e) {
			return e.charAt(0).toUpperCase() + e.slice(1)
		},
		F = function (a) {
			return function (e) {
				for (var a in e.minHeight = e.minHeight !== t ? "none" === e.minHeight || "0" === e.minHeight || "0px" === e.minHeight || "" == e.minHeight || " " == e.minHeight ? 0 : parseInt(e.minHeight, 0) : 0, e.maxHeight = "none" === e.maxHeight || "0" === e.maxHeight ? 0 : parseInt(e.maxHeight, 0), e.carousel.maxVisibleItems = e.carousel.maxVisibleItems < 1 ? 999 : e.carousel.maxVisibleItems, e.carousel.vertical_align = "top" === e.carousel.vertical_align ? "0%" : "bottom" === e.carousel.vertical_align ? "100%" : "50%", e.carousel.space = parseInt(e.carousel.space, 0), e.carousel.maxOpacity = parseInt(e.carousel.maxOpacity, 0), e.carousel.maxOpacity = e.carousel.maxOpacity > 1 ? e.carousel.maxOpacity / 100 : e.carousel.maxOpacity, e.carousel.showLayersAllTime = "true" === e.carousel.showLayersAllTime || !0 === e.carousel.showLayersAllTime ? "all" : e.carousel.showLayersAllTime, e.carousel.maxRotation = parseInt(e.carousel.maxRotation, 0), e.carousel.minScale = parseInt(e.carousel.minScale, 0), e.carousel.minScale = e.carousel.minScale > .9 ? e.carousel.minScale / 100 : e.carousel.minScale, e.carousel.speed = parseInt(e.carousel.speed, 0), e.navigation.maintypes = ["arrows", "tabs", "thumbnails", "bullets"], e.perspective = parseInt(e.perspective, 0), e.navigation.maintypes) e.navigation.maintypes.hasOwnProperty(a) && e.navigation[e.navigation.maintypes[a]] !== t && (e.navigation[e.navigation.maintypes[a]].animDelay = e.navigation[e.navigation.maintypes[a]].animDelay === t ? 1e3 : e.navigation[e.navigation.maintypes[a]].animDelay, e.navigation[e.navigation.maintypes[a]].animSpeed = e.navigation[e.navigation.maintypes[a]].animSpeed === t ? 1e3 : e.navigation[e.navigation.maintypes[a]].animSpeed, e.navigation[e.navigation.maintypes[a]].animDelay = parseInt(e.navigation[e.navigation.maintypes[a]].animDelay, 0) / 1e3, e.navigation[e.navigation.maintypes[a]].animSpeed = parseInt(e.navigation[e.navigation.maintypes[a]].animSpeed, 0) / 1e3);
				if (i.isNumeric(e.scrolleffect.tilt) || -1 !== e.scrolleffect.tilt.indexOf("%") && (e.scrolleffect.tilt = parseInt(e.scrolleffect.tilt)), e.scrolleffect.tilt = e.scrolleffect.tilt / 100, e.navigation.thumbnails.position = "outer-horizontal" == e.navigation.thumbnails.position ? "bottom" == e.navigation.thumbnails.v_align ? "outer-bottom" : "outer-top" : "outer-vertical" == e.navigation.thumbnails.position ? "left" == e.navigation.thumbnails.h_align ? "outer-left" : "outer-right" : e.navigation.thumbnails.position, e.navigation.tabs.position = "outer-horizontal" == e.navigation.tabs.position ? "bottom" == e.navigation.tabs.v_align ? "outer-bottom" : "outer-top" : "outer-vertical" == e.navigation.tabs.position ? "left" == e.navigation.tabs.h_align ? "outer-left" : "outer-right" : e.navigation.tabs.position, e.sbtimeline.speed = parseInt(e.sbtimeline.speed, 0) / 1e3 || .5, !0 === e.sbtimeline.set && !0 === e.sbtimeline.fixed && "auto" !== e.sliderLayout ? (e.sbtimeline.fixStart = parseInt(e.sbtimeline.fixStart), e.sbtimeline.fixEnd = parseInt(e.sbtimeline.fixEnd)) : e.sbtimeline.fixed = !1, e.progressBar === t || "true" != e.progressBar.disableProgressBar && 1 != e.progressBar.disableProgressBar || (e.progressBar.disableProgressBar = !0), e.startDelay = parseInt(e.startDelay, 0) || 0, e.navigation !== t && e.navigation.arrows != t && e.navigation.arrows.hide_under != t && (e.navigation.arrows.hide_under = parseInt(e.navigation.arrows.hide_under)), e.navigation !== t && e.navigation.bullets != t && e.navigation.bullets.hide_under != t && (e.navigation.bullets.hide_under = parseInt(e.navigation.bullets.hide_under)), e.navigation !== t && e.navigation.thumbnails != t && e.navigation.thumbnails.hide_under != t && (e.navigation.thumbnails.hide_under = parseInt(e.navigation.thumbnails.hide_under)), e.navigation !== t && e.navigation.tabs != t && e.navigation.tabs.hide_under != t && (e.navigation.tabs.hide_under = parseInt(e.navigation.tabs.hide_under)), e.navigation !== t && e.navigation.arrows != t && e.navigation.arrows.hide_over != t && (e.navigation.arrows.hide_over = parseInt(e.navigation.arrows.hide_over)), e.navigation !== t && e.navigation.bullets != t && e.navigation.bullets.hide_over != t && (e.navigation.bullets.hide_over = parseInt(e.navigation.bullets.hide_over)), e.navigation !== t && e.navigation.thumbnails != t && e.navigation.thumbnails.hide_over != t && (e.navigation.thumbnails.hide_over = parseInt(e.navigation.thumbnails.hide_over)), e.navigation !== t && e.navigation.tabs != t && e.navigation.tabs.hide_over != t && (e.navigation.tabs.hide_over = parseInt(e.navigation.tabs.hide_over)), e.lazyloaddata !== t && e.lazyloaddata.length > 0 && e.lazyloaddata.indexOf("-") > 0) {
					var r = e.lazyloaddata.split("-");
					for (e.lazyloaddata = r[0], a = 1; a < r.length; a++) e.lazyloaddata += W(r[a])
				}
				return e.duration = parseInt(e.duration), "single" === e.lazyType && "carousel" === e.sliderType && (e.lazyType = "smart"), "carousel" === e.sliderType && e.carousel.justify && (e.justifyCarousel = !0, e.keepBPHeight = !0), e.enableUpscaling = 1 == e.enableUpscaling && "carousel" !== e.sliderType && "fullwidth" === e.sliderLayout, e.useFullScreenHeight = "carousel" === e.sliderType && "fullscreen" === e.sliderLayout && !0 === e.useFullScreenHeight, e.progressBar.y = parseInt(e.progressBar.y, 0), e.progressBar.x = parseInt(e.progressBar.x, 0),
					/*! Custom Eases */
					"IE" !== window.RSBrowser && e.customEases !== t && (!e.customEases.SFXBounceLite && "true" != e.customEases.SFXBounceLite || tpGS.SFXBounceLite !== t || (tpGS.SFXBounceLite = tpGS.CustomBounce.create("SFXBounceLite", {
						strength: .3,
						squash: 1,
						squashID: "SFXBounceLite-squash"
					})), !e.customEases.SFXBounceSolid && "true" != e.customEases.SFXBounceSolid || tpGS.SFXBounceSolid !== t || (tpGS.SFXBounceSolid = tpGS.CustomBounce.create("SFXBounceSolid", {
						strength: .5,
						squash: 2,
						squashID: "SFXBounceSolid-squash"
					})), !e.customEases.SFXBounceStrong && "true" != e.customEases.SFXBounceStrong || tpGS.SFXBounceStrong !== t || (tpGS.SFXBounceStrong = tpGS.CustomBounce.create("SFXBounceStrong", {
						strength: .7,
						squash: 3,
						squashID: "SFXBounceStrong-squash"
					})), !e.customEases.SFXBounceExtrem && "true" != e.customEases.SFXBounceExtrem || tpGS.SFXBounceExtrem !== t || (tpGS.SFXBounceExtrem = tpGS.CustomBounce.create("SFXBounceExtrem", {
						strength: .9,
						squash: 4,
						squashID: "SFXBounceExtrem-squash"
					})), !e.customEases.BounceLite && "true" != e.customEases.BounceLite || tpGS.BounceLite !== t || (tpGS.BounceLite = tpGS.CustomBounce.create("BounceLite", {
						strength: .3
					})), !e.customEases.BounceSolid && "true" != e.customEases.BounceSolid || tpGS.BounceSolid !== t || (tpGS.BounceSolid = tpGS.CustomBounce.create("BounceSolid", {
						strength: .5
					})), !e.customEases.BounceStrong && "true" != e.customEases.BounceStrong || tpGS.BounceStrong !== t || (tpGS.BounceStrong = tpGS.CustomBounce.create("BounceStrong", {
						strength: .7
					})), !e.customEases.BounceExtrem && "true" != e.customEases.BounceExtrem || tpGS.BounceExtrem !== t || (tpGS.BounceExtrem = tpGS.CustomBounce.create("BounceExtrem", {
						strength: .9
					}))), e.modal.coverSpeed = parseFloat(e.modal.coverSpeed), e.modal.coverSpeed = e.modal.coverSpeed > 200 ? e.modal.coverSpeed / 1e3 : e.modal.coverSpeed, e.modal.coverSpeed = Math.max(Math.min(3, e.modal.coverSpeed), .3), e.navigation.wheelViewPort = e.navigation.wheelViewPort === t ? .5 : e.navigation.wheelViewPort / 100, e.navigation.wheelCallDelay = e.navigation.wheelCallDelay === t ? 1e3 : parseInt(e.navigation.wheelCallDelay), e
			}(e.extend(!0, {
				sliderType: "standard",
				sliderLayout: "auto",
				dottedOverlay: "none",
				duration: 9e3,
				imgCrossOrigin: "",
				modal: {
					useAsModal: !1,
					cover: !0,
					coverColor: "rgba(0,0,0,0.5)",
					horizontal: "center",
					vertical: "middle",
					coverSpeed: 1
				},
				navigation: {
					keyboardNavigation: !1,
					keyboard_direction: "horizontal",
					mouseScrollNavigation: "off",
					wheelViewPort: 50,
					wheelCallDelay: "1000ms",
					onHoverStop: !0,
					mouseScrollReverse: "default",
					touch: {
						touchenabled: !1,
						touchOnDesktop: !1,
						swipe_treshold: 75,
						swipe_min_touches: 1,
						swipe_direction: "horizontal",
						drag_block_vertical: !1,
						mobileCarousel: !0,
						desktopCarousel: !0
					},
					arrows: {
						style: "",
						enable: !1,
						hide_onmobile: !1,
						hide_under: 0,
						hide_onleave: !1,
						hide_delay: 200,
						hide_delay_mobile: 1200,
						hide_over: 9999,
						tmp: "",
						rtl: !1,
						left: {
							h_align: "left",
							v_align: "center",
							h_offset: 20,
							v_offset: 0,
							container: "slider"
						},
						right: {
							h_align: "right",
							v_align: "center",
							h_offset: 20,
							v_offset: 0,
							container: "slider"
						}
					},
					bullets: {
						enable: !1,
						hide_onmobile: !1,
						hide_onleave: !1,
						hide_delay: 200,
						hide_delay_mobile: 1200,
						hide_under: 0,
						hide_over: 9999,
						direction: "horizontal",
						h_align: "center",
						v_align: "bottom",
						space: 5,
						h_offset: 0,
						v_offset: 20,
						tmp: '<span class="tp-bullet-image"></span><span class="tp-bullet-title"></span>',
						container: "slider",
						rtl: !1,
						style: ""
					},
					thumbnails: {
						container: "slider",
						rtl: !1,
						style: "",
						enable: !1,
						width: 100,
						height: 50,
						min_width: 100,
						wrapper_padding: 2,
						wrapper_color: "transparent",
						tmp: '<span class="tp-thumb-image"></span><span class="tp-thumb-title"></span>',
						visibleAmount: 5,
						hide_onmobile: !1,
						hide_onleave: !1,
						hide_delay: 200,
						hide_delay_mobile: 1200,
						hide_under: 0,
						hide_over: 9999,
						direction: "horizontal",
						span: !1,
						position: "inner",
						space: 2,
						h_align: "center",
						v_align: "bottom",
						h_offset: 0,
						v_offset: 20,
						mhoff: 0,
						mvoff: 0
					},
					tabs: {
						container: "slider",
						rtl: !1,
						style: "",
						enable: !1,
						width: 100,
						min_width: 100,
						height: 50,
						wrapper_padding: 10,
						wrapper_color: "transparent",
						tmp: '<span class="tp-tab-image"></span>',
						visibleAmount: 5,
						hide_onmobile: !1,
						hide_onleave: !1,
						hide_delay: 200,
						hide_delay_mobile: 1200,
						hide_under: 0,
						hide_over: 9999,
						direction: "horizontal",
						span: !1,
						space: 0,
						position: "inner",
						h_align: "center",
						v_align: "bottom",
						h_offset: 0,
						v_offset: 20,
						mhoff: 0,
						mvoff: 0
					}
				},
				responsiveLevels: 4064,
				visibilityLevels: [2048, 1024, 778, 480],
				gridwidth: 960,
				gridheight: 500,
				minHeight: 0,
				maxHeight: 0,
				keepBPHeight: !1,
				useFullScreenHeight: !0,
				overflowHidden: !1,
				forceOverflow: !1,
				fixedOnTop: !1,
				autoHeight: !1,
				gridEQModule: !1,
				disableForceFullWidth: !1,
				fullScreenOffsetContainer: "",
				fullScreenOffset: "0",
				hideLayerAtLimit: 0,
				hideAllLayerAtLimit: 0,
				hideSliderAtLimit: 0,
				progressBar: {
					disableProgressBar: !1,
					style: "horizontal",
					size: "5px",
					radius: 10,
					vertical: "bottom",
					horizontal: "left",
					x: 0,
					y: 0,
					color: "rgba(255,255,255,0.5)",
					bgcolor: "transparent",
					basedon: "slide",
					gapsize: 0,
					reset: "reset",
					gaptype: "gapboth",
					gapcolor: "rgba(255,255,255,0.5)",
					ease: "none",
					visibility: {
						0: !0,
						1: !0,
						2: !0,
						3: !0
					}
				},
				stopAtSlide: -1,
				stopAfterLoops: 0,
				shadow: 0,
				startDelay: 0,
				lazyType: "none",
				spinner: "off",
				shuffle: !1,
				perspective: "600px",
				perspectiveType: "local",
				viewPort: {
					enable: !1,
					outof: "wait",
					visible_area: "200px",
					presize: !1
				},
				fallbacks: {
					isJoomla: !1,
					panZoomDisableOnMobile: !1,
					simplifyAll: !0,
					nextSlideOnWindowFocus: !1,
					disableFocusListener: !1,
					allowHTML5AutoPlayOnAndroid: !0
				},
				parallax: {
					type: "off",
					levels: [10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85],
					origo: "enterpoint",
					disable_onmobile: !1,
					ddd_shadow: !1,
					ddd_bgfreeze: !1,
					ddd_overflow: "visible",
					ddd_layer_overflow: "visible",
					ddd_z_correction: 65,
					speed: 400,
					speedbg: 0,
					speedls: 0
				},
				scrolleffect: {
					set: !1,
					fade: !1,
					blur: !1,
					scale: !1,
					grayscale: !1,
					maxblur: 10,
					layers: !1,
					slide: !1,
					direction: "both",
					multiplicator: 1.35,
					multiplicator_layers: .5,
					tilt: 30,
					disable_onmobile: !1
				},
				sbtimeline: {
					set: !1,
					fixed: !1,
					fixStart: 0,
					fixEnd: 0,
					layers: !1,
					slide: !1,
					ease: "none",
					speed: 500
				},
				carousel: {
					easing: "power3.inOut",
					speed: 800,
					showLayersAllTime: !1,
					horizontal_align: "center",
					vertical_align: "center",
					infinity: !1,
					space: 0,
					maxVisibleItems: 3,
					stretch: !1,
					fadeout: !0,
					maxRotation: 0,
					maxOpacity: 100,
					minScale: 0,
					offsetScale: !1,
					vary_fade: !1,
					vary_rotation: !1,
					vary_scale: !1,
					border_radius: "0px",
					padding_top: 0,
					padding_bottom: 0
				},
				observeWrap: !1,
				extensions: "extensions/",
				extensions_suffix: ".min.js",
				stopLoop: !1,
				waitForInit: !1,
				ignoreHeightChange: !0
			}, a))
		}
}(jQuery),
function ($, undefined) {
	"use strict";
	var _R = jQuery.fn.revolution,
		_ISM = _R.is_mobile();
	jQuery.extend(!0, _R, {
		checkActions: function (e, t) {
			e === undefined ? moduleEnterLeaveActions(t) : checkActions_intern(e, t)
		},
		getURLDetails: function (e) {
			(e = e === undefined ? {} : e).url = e.url === undefined ? window.location.href : e.url, e.url = e.url.replace("www", ""), e.protocol = 0 === e.url.indexOf("http://") ? "http://" : 0 === e.url.indexOf("https://") ? "https://" : 0 === e.url.indexOf("//") ? "//" : "relative";
			var t = e.url.replace("https://", "");
			t = t.replace("http://", ""), "relative" === e.protocol && (t = t.replace("//", "")), t = t.split("#"), e.anchor = (e.anchor === undefined || "" == e.anchor || 0 == e.anchor.length) && t.length > 1 ? t[1] : e.anchor === undefined ? "" : e.anchor.replace("#", ""), e.anchor = e.anchor.split("?"), e.queries = t[0].split("?"), e.queries = e.queries.length > 1 ? e.queries[1] : "", e.queries = e.queries.length > 1 ? e.queries[1] : e.anchor.length > 1 ? e.anchor[1] : e.queries, e.anchor = e.anchor[0];
			(t = t[0]).split("/");
			var i = t.split("/");
			return e.host = i[0], i.splice(0, 1), e.path = "/" + i.join("/"), "/" == e.path[e.path.length - 1] && (e.path = e.path.slice(0, -1)), e.origin = "relative" !== e.protocol ? e.protocol + e.host : window.location.origin.replace("www", "") + window.location.pathname, e.hash = ("" !== e.queries && e.queries !== undefined ? "?" + e.queries : "") + ("" !== e.anchor && e.anchor !== undefined ? "#" + e.anchor : ""), e
		},
		scrollToId: function (e) {
			var t = "scrollbelow" === e.action ? (getOffContH(_R[e.id].fullScreenOffsetContainer) || 0) - (parseInt(e.offset, 0) || 0) || 0 : 0 - (parseInt(e.offset, 0) || 0),
				i = "scrollbelow" === e.action ? _R[e.id].c : jQuery("#" + e.anchor),
				a = i.length > 0 ? i.offset().top : 0,
				r = {
					_y: _R[e.id].modal.useAsModal ? _R[e.id].cpar[0].scrollTop : window.pageYOffset !== document.documentElement.scrollTop ? 0 !== window.pageYOffset ? window.pageYOffset : document.documentElement.scrollTop : window.pageYOffset
				};
			a += "scrollbelow" === e.action ? _R[e.id].sbtimeline.fixed ? _R[e.id].cpar.parent().height() + _R[e.id].fullScreenOffsetResult : jQuery(_R[e.id].slides[0]).height() : 0, tpGS.gsap.to(r, e.speed / 1e3, {
				_y: a - t,
				ease: e.ease,
				onUpdate: function () {
					_R[e.id].modal.useAsModal ? _R[e.id].cpar.scrollTop(r._y) : _R.document.scrollTop(r._y)
				},
				onComplete: function () {
					e.hash !== undefined && (window.location.hash = e.hash)
				}
			})
		}
	});
	var moduleEnterLeaveActions = function (e) {
			!_R[e].moduleActionsPrepared && _R[e].c[0].getElementsByClassName("rs-on-sh").length > 0 && (_R[e].c.on("tp-mouseenter", function () {
				_R[e].mouseoncontainer = !0;
				var t, i = _R[e].pr_next_key !== undefined ? _R[e].pr_next_key : _R[e].pr_processing_key !== undefined ? _R[e].pr_processing_key : _R[e].pr_active_key !== undefined ? _R[e].pr_active_key : _R[e].pr_next_key;
				if ("none" !== i && i !== undefined) {
					if ((i = _R.gA(_R[e].slides[i], "key")) !== undefined && _R[e].layers[i])
						for (t in _R[e].layers[i]) _R[e].layers[i][t].className.indexOf("rs-on-sh") >= 0 && _R.renderLayerAnimation({
							layer: jQuery(_R[e].layers[i][t]),
							frame: "frame_1",
							mode: "trigger",
							id: e
						});
					for (t in _R[e].layers.static) _R[e].layers.static[t].className.indexOf("rs-on-sh") >= 0 && _R.renderLayerAnimation({
						layer: jQuery(_R[e].layers.static[t]),
						frame: "frame_1",
						mode: "trigger",
						id: e
					})
				}
			}), _R[e].c.on("tp-mouseleft", function () {
				_R[e].mouseoncontainer = !0;
				var t, i = _R[e].pr_next_key !== undefined ? _R[e].pr_next_key : _R[e].pr_processing_key !== undefined ? _R[e].pr_processing_key : _R[e].pr_active_key !== undefined ? _R[e].pr_active_key : _R[e].pr_next_key;
				if ("none" !== i && i !== undefined) {
					if ((i = _R.gA(_R[e].slides[i], "key")) !== undefined && _R[e].layers[i])
						for (t in _R[e].layers[i]) _R[e].layers[i][t].className.indexOf("rs-on-sh") >= 0 && _R.renderLayerAnimation({
							layer: jQuery(_R[e].layers[i][t]),
							frame: "frame_999",
							mode: "trigger",
							id: e
						});
					for (t in _R[e].layers.static) _R[e].layers.static[t].className.indexOf("rs-on-sh") >= 0 && _R.renderLayerAnimation({
						layer: jQuery(_R[e].layers.static[t]),
						frame: "frame_999",
						mode: "trigger",
						id: e
					})
				}
			})), _R[e].moduleActionsPrepared = !0
		},
		checkActions_intern = function (layer, id) {
			var actions = _R.gA(layer[0], "actions"),
				_L = layer.data();
			for (var ei in actions = actions.split("||"), layer.addClass("rs-waction"), _L.events = _L.events === undefined ? [] : _L.events, _R[id].lastMouseDown = {}, actions)
				if (actions.hasOwnProperty(ei)) {
					var event = getEventParams(actions[ei].split(";"));
					_L.events.push(event), "click" === event.on && layer[0].classList.add("rs-wclickaction"), _R[id].fullscreen_esclistener || "exitfullscreen" != event.action && "togglefullscreen" != event.action || (_R.document.keyup(function (e) {
						27 == e.keyCode && jQuery("#rs-go-fullscreen").length > 0 && layer.trigger(event.on)
					}), _R[id].fullscreen_esclistener = !0);
					var targetlayer = "backgroundvideo" == event.layer ? jQuery("rs-bgvideo") : "firstvideo" == event.layer ? jQuery("rs-slide").find(".rs-layer-video") : jQuery("#" + event.layer);
					switch (-1 != jQuery.inArray(event.action, ["toggleslider", "toggle_mute_video", "toggle_global_mute_video", "togglefullscreen"]) && (_L._togglelisteners = !0), event.action) {
						case "togglevideo":
							jQuery.each(targetlayer, function () {
								updateToggleByList(jQuery(this), "videotoggledby", layer[0].id)
							});
							break;
						case "togglelayer":
							jQuery.each(targetlayer, function () {
								updateToggleByList(jQuery(this), "layertoggledby", layer[0].id), jQuery(this).data("triggered_startstatus", event.togglestate)
							});
							break;
						case "toggle_global_mute_video":
						case "toggle_mute_video":
							jQuery.each(targetlayer, function () {
								updateToggleByList(jQuery(this), "videomutetoggledby", layer[0].id)
							});
							break;
						case "toggleslider":
							_R[id].slidertoggledby == undefined && (_R[id].slidertoggledby = []), _R[id].slidertoggledby.push(layer[0].id);
							break;
						case "togglefullscreen":
							_R[id].fullscreentoggledby == undefined && (_R[id].fullscreentoggledby = []), _R[id].fullscreentoggledby.push(layer[0].id)
					}
				}
			_R[id].actionsPrepared = !0, layer.on("mousedown", function (e) {
				e.touches && (e = e.touches[0]), _R[id].lastMouseDown.pageX = e.pageX, _R[id].lastMouseDown.pageY = e.pageY
			}), layer.on("click mouseenter mouseleave", function (e) {
				if ("click" === e.type) {
					var evt = e.touches ? e.touches[0] : e;
					if (Math.abs(evt.pageX - _R[id].lastMouseDown.pageX) > 5 || Math.abs(evt.pageY - _R[id].lastMouseDown.pageY) > 5) return
				}
				for (var i in _L.events)
					if (_L.events.hasOwnProperty(i) && _L.events[i].on === e.type) {
						var event = _L.events[i];
						if ("click" === event.on && layer.hasClass("tp-temporarydisabled")) return !1;
						var targetlayer = "backgroundvideo" == event.layer ? jQuery(_R[id].slides[_R[id].pr_active_key]).find("rs-sbg-wrap rs-bgvideo") : "firstvideo" == event.layer ? jQuery(_R[id].slides[_R[id].pr_active_key]).find(".rs-layer-video").first() : jQuery("#" + event.layer),
							tex = targetlayer.length > 0;
						switch (event.action) {
							case "menulink":
								var linkto = _R.getURLDetails({
										url: event.url,
										anchor: event.anchor
									}),
									linkfrom = _R.getURLDetails();
								linkto.host == linkfrom.host && linkto.path == linkfrom.path && "_self" === event.target ? _R.scrollToId({
									id: id,
									offset: event.offset,
									action: event.action,
									anchor: event.anchor,
									hash: linkto.hash,
									speed: event.speed,
									ease: event.ease
								}) : "_self" === event.target ? window.location = linkto.url + (linkto.anchor !== undefined && "" !== linkto.anchor ? "#" + linkto.anchor : "") : window.open(linkto.url + (linkto.anchor !== undefined && "" !== linkto.anchor ? "#" + linkto.anchor : "")), e.preventDefault();
								break;
							case "nextframe":
							case "prevframe":
							case "gotoframe":
							case "togglelayer":
							case "toggleframes":
							case "startlayer":
							case "stoplayer":
								if (targetlayer[0] === undefined) continue;
								var _ = _R[id]._L[targetlayer[0].id],
									frame = event.frame,
									tou = "triggerdelay";
								if ("click" === e.type && _.clicked_time_stamp !== undefined && (new Date).getTime() - _.clicked_time_stamp < 300) return;
								if ("mouseenter" === e.type && _.mouseentered_time_stamp !== undefined && (new Date).getTime() - _.mouseentered_time_stamp < 300) return;
								if (clearTimeout(_.triggerdelayIn), clearTimeout(_.triggerdelayOut), clearTimeout(_.triggerdelay), "click" === e.type && (_.clicked_time_stamp = (new Date).getTime()), "mouseenter" === e.type && (_.mouseentered_time_stamp = (new Date).getTime()), "mouseleave" === e.type && (_.mouseentered_time_stamp = undefined), "nextframe" === event.action || "prevframe" === event.action) {
									_.forda = _.forda === undefined ? getFordWithAction(_) : _.forda;
									var inx = jQuery.inArray(_.currentframe, _.ford);
									for ("nextframe" === event.action && inx++, "prevframe" === event.action && inx--;
										"skip" !== _.forda[inx] && inx > 0 && inx < _.forda.length - 1;) "nextframe" === event.action && inx++, "prevframe" === event.action && inx--, inx = Math.min(Math.max(0, inx), _.forda.length - 1);
									frame = _.ford[inx]
								}
								jQuery.inArray(event.action, ["toggleframes", "togglelayer", "startlayer", "stoplayer"]) >= 0 && (_.triggeredstate = "startlayer" === event.action || "togglelayer" === event.action && "frame_1" !== _.currentframe || "toggleframes" === event.action && _.currentframe !== event.frameN, "togglelayer" === event.action && !0 === _.triggeredstate && _.currentframe !== undefined && "frame_999" !== _.currentframe && (_.triggeredstate = !1), frame = _.triggeredstate ? "toggleframes" === event.action ? event.frameN : "frame_1" : "toggleframes" === event.action ? event.frameM : "frame_999", tou = _.triggeredstate ? "triggerdelayIn" : "triggerdelayOut", _.triggeredstate ? _R.toggleState(_.layertoggledby) : (_R.stopVideo && _R.stopVideo(targetlayer, id), _R.unToggleState(_.layertoggledby)));
								var pars = {
									layer: targetlayer,
									frame: frame,
									mode: "trigger",
									id: id
								};
								!0 === event.children && (pars.updateChildren = !0, pars.fastforward = !0), _R.renderLayerAnimation && (clearTimeout(_[tou]), _[tou] = setTimeout(function (e) {
									_R.renderLayerAnimation(e)
								}, 1e3 * event.delay, pars));
								break;
							case "playvideo":
								tex && _R.playVideo(targetlayer, id);
								break;
							case "stopvideo":
								tex && _R.stopVideo && _R.stopVideo(targetlayer, id);
								break;
							case "togglevideo":
								tex && (_R.isVideoPlaying(targetlayer, id) ? _R.stopVideo && _R.stopVideo(targetlayer, id) : _R.playVideo(targetlayer, id));
								break;
							case "mutevideo":
								tex && _R.Mute(targetlayer, id, !0);
								break;
							case "unmutevideo":
								tex && _R.Mute && _R.Mute(targetlayer, id, !1);
								break;
							case "toggle_mute_video":
								tex && (_R.Mute(targetlayer, id) ? _R.Mute(targetlayer, id, !1) : _R.Mute && _R.Mute(targetlayer, id, !0));
								break;
							case "toggle_global_mute_video":
								var pvl = _R[id].playingvideos != undefined && _R[id].playingvideos.length > 0;
								pvl && (_R[id].globalmute ? jQuery.each(_R[id].playingvideos, function (e, t) {
									_R.Mute && _R.Mute(t, id, !1)
								}) : jQuery.each(_R[id].playingvideos, function (e, t) {
									_R.Mute && _R.Mute(t, id, !0)
								})), _R[id].globalmute = !_R[id].globalmute;
								break;
							default:
								tpGS.gsap.delayedCall(event.delay, function (targetlayer, id, event, layer) {
									switch (event.action) {
										case "openmodal":
											if (event.modalslide = event.modalslide === undefined ? 0 : event.modalslide, window.RS_60_MODALS === undefined || -1 == jQuery.inArray(event.modal, window.RS_60_MODALS)) {
												_R.showModalCover(id, event, "show");
												var data = {
													action: "revslider_ajax_call_front",
													client_action: "get_slider_html",
													token: _R[id].ajaxNonce,
													alias: event.modal,
													usage: "modal"
												};
												jQuery.ajax({
													type: "post",
													url: _R[id].ajaxUrl,
													dataType: "json",
													data: data,
													success: function (e, t, i) {
														1 == e.success && (jQuery("body").append(e.data), setTimeout(function () {
															_R.showModalCover(id, event, "hide"), _R.document.trigger("RS_OPENMODAL_" + event.modal, event.modalslide)
														}, 49))
													},
													error: function (e) {
														console.log("Modal Can not be Loaded"), console.log(e)
													}
												})
											} else _R.document.trigger("RS_OPENMODAL_" + event.modal, event.modalslide);
											break;
										case "closemodal":
											_R.revModal(id, {
												mode: "close"
											});
											break;
										case "callback":
											eval(event.callback);
											break;
										case "simplelink":
											window.open(event.url, event.target);
											break;
										case "simulateclick":
											targetlayer.length > 0 && targetlayer.trigger("click");
											break;
										case "toggleclass":
											targetlayer.length > 0 && targetlayer.toggleClass(event.classname);
											break;
										case "scrollbelow":
										case "scrollto":
											"scrollbelow" === event.action && layer.addClass("tp-scrollbelowslider"), _R.scrollToId({
												id: id,
												offset: event.offset,
												action: event.action,
												anchor: event.id,
												speed: event.speed,
												ease: event.ease
											});
											break;
										case "jumptoslide":
											switch (event.slide.toLowerCase()) {
												case "rs-random":
													var ts = Math.min(Math.max(0, Math.ceil(Math.random() * _R[id].realslideamount) - 1));
													ts = _R[id].activeRSSlide == ts ? ts > 0 ? ts - 1 : ts + 1 : ts, _R.callingNewSlide(id, _R[id].slides[ts].dataset.key, "carousel" === _R[id].sliderType);
													break;
												case "+1":
												case "next":
												case "rs-next":
													_R[id].sc_indicator = "arrow", _R[id].sc_indicator_dir = 0, _R.callingNewSlide(id, 1, "carousel" === _R[id].sliderType);
													break;
												case "rs-previous":
												case "rs-prev":
												case "previous":
												case "prev":
												case "-1":
													_R[id].sc_indicator = "arrow", _R[id].sc_indicator_dir = 1, _R.callingNewSlide(id, -1, "carousel" === _R[id].sliderType);
													break;
												case "first":
												case "rs-first":
													_R[id].sc_indicator = "arrow", _R[id].sc_indicator_dir = 1, _R.callingNewSlide(id, 0, "carousel" === _R[id].sliderType);
													break;
												case "last":
												case "rs-last":
													_R[id].sc_indicator = "arrow", _R[id].sc_indicator_dir = 0, _R.callingNewSlide(id, _R[id].slideamount - 1, "carousel" === _R[id].sliderType);
													break;
												default:
													var ts = _R.isNumeric(event.slide) ? parseInt(event.slide, 0) : event.slide;
													_R.callingNewSlide(id, ts, "carousel" === _R[id].sliderType)
											}
											break;
										case "toggleslider":
											_R[id].noloopanymore = 0, "playing" == _R[id].sliderstatus ? (_R[id].c.revpause(), _R[id].forcepaused = !0, _R.unToggleState(_R[id].slidertoggledby)) : (_R[id].forcepaused = !1, _R[id].c.revresume(), _R.toggleState(_R[id].slidertoggledby));
											break;
										case "pauseslider":
											_R[id].c.revpause(), _R.unToggleState(_R[id].slidertoggledby);
											break;
										case "playslider":
											_R[id].noloopanymore = 0, _R[id].c.revresume(), _R.toggleState(_R[id].slidertoggledby);
											break;
										case "gofullscreen":
										case "exitfullscreen":
										case "togglefullscreen":
											var gf;
											jQuery(".rs-go-fullscreen").length > 0 && ("togglefullscreen" == event.action || "exitfullscreen" == event.action) ? (jQuery(".rs-go-fullscreen").removeClass("rs-go-fullscreen"), gf = _R[id].c.closest("rs-fullwidth-wrap").length > 0 ? _R[id].c.closest("rs-fullwidth-wrap") : _R[id].c.closest("rs-module-wrap"), _R[id].minHeight = _R[id].oldminheight, _R[id].infullscreenmode = !1, _R[id].c.revredraw(), _R[id].c.revredraw(), jQuery(window).trigger("resize"), _R.unToggleState(_R[id].fullscreentoggledby)) : 0 != jQuery(".rs-go-fullscreen").length || "togglefullscreen" != event.action && "gofullscreen" != event.action || (gf = _R[id].c.closest("rs-fullwidth-wrap").length > 0 ? _R[id].c.closest("rs-fullwidth-wrap") : _R[id].c.closest("rs-module-wrap"), gf.addClass("rs-go-fullscreen"), _R[id].oldminheight = _R[id].minHeight, _R[id].minHeight = _R.getWinH(id), _R[id].infullscreenmode = !0, jQuery(window).trigger("resize"), _R.toggleState(_R[id].fullscreentoggledby), _R[id].c.revredraw());
											break;
										default:
											_R[id].c.trigger("layeraction", [event.action, layer, event])
									}
								}, [targetlayer, id, event, layer])
						}
					}
			})
		};

	function getFordWithAction(e) {
		var t = [];
		for (var i in e.ford) e.frames[e.ford[i]].timeline.waitoncall ? t.push(e.ford[i]) : t.push("skip");
		return t
	}

	function updateToggleByList(e, t, i) {
		var a = e.data(t);
		a === undefined && (a = []), a.push(i), e.data(t, a)
	}

	function getEventParams(e) {
		var t = {
			on: "click",
			delay: 0,
			ease: "power2.out",
			speed: 400
		};
		for (var i in e)
			if (e.hasOwnProperty(i)) {
				var a = e[i].split(":");
				switch (a.length > 2 && "call" === a[0] && (a[1] = a.join(":").replace(a[0] + ":", "")), a[0]) {
					case "modal":
						t.modal = a[1];
						break;
					case "ms":
						t.modalslide = a[1];
						break;
					case "m":
						t.frameM = a[1];
						break;
					case "n":
						t.frameN = a[1];
						break;
					case "o":
						t.on = "click" === a[1] || "c" === a[1] ? "click" : "ml" === a[1] || "mouseleave" === a[1] ? "mouseleave" : "mouseenter" === a[1] || "me" === a[1] ? "mouseenter" : a[1];
						break;
					case "d":
						t.delay = parseInt(a[1], 0) / 1e3, t.delay = "NaN" === t.delay || isNaN(t.delay) ? 0 : t.delay;
						break;
					case "a":
						t.action = a[1];
						break;
					case "f":
						t.frame = a[1];
						break;
					case "slide":
						t.slide = a[1];
						break;
					case "layer":
						t.layer = a[1];
						break;
					case "sp":
						t.speed = parseInt(a[1], 0);
						break;
					case "e":
						t.ease = a[1];
						break;
					case "ls":
						t.togglestate = a[1];
						break;
					case "offset":
						t.offset = a[1];
						break;
					case "call":
						t.callback = a[1];
						break;
					case "url":
						t.url = "";
						for (var r = 1; r < a.length; r++) t.url += a[r] + (r === a.length - 1 ? "" : ":");
						break;
					case "target":
						t.target = a[1];
						break;
					case "class":
						t.classname = a[1];
						break;
					case "ch":
						t.children = "true" == a[1] || 1 == a[1] || "t" == a[1];
						break;
					default:
						a[0].length > 0 && "" !== a[0] && (t[a[0]] = a[1])
				}
			}
		return t
	}
	var getOffContH = function (e) {
		if (e == undefined) return 0;
		if (e.split(",").length > 1) {
			var t = e.split(","),
				i = 0;
			return t && jQuery.each(t, function (e, t) {
				jQuery(t).length > 0 && (i += jQuery(t).outerHeight(!0))
			}), i
		}
		return jQuery(e).height()
	}
}(jQuery),
function (e) {
	"use strict";
	var t = jQuery.fn.revolution;
	t.is_mobile();
	jQuery.extend(!0, t, {
		prepareCarousel: function (e, i, a) {
			if (void 0 !== e) {
				var o = t[e].carousel;
				o.slidepositions = void 0 === o.slidepositions ? [] : o.slidepositions, o.slideFakePositions = void 0 === o.slideFakePositions ? [] : o.slideFakePositions, i = o.lastdirection = r(i, o.lastdirection), t.setCarouselDefaults(e), void 0 === o.slidepositions[0] && (o.slideAnims = [], t.organiseCarousel(e, "right", !0, !1, !1), o.focused = 0, o.keepFocusedFirst = !0), o.slide_offset = void 0 !== o.slide_offset && t.isNumeric(o.slide_offset) ? o.slide_offset : 0, o.swipeTo = o.slide_offset + s(e), o.swipeToDistance = Math.abs(o.slide_offset) + Math.abs(s(e)), void 0 !== o.swipeTo && t.isNumeric(o.swipeTo) ? void 0 !== a ? t.swipeAnimate({
					id: e,
					to: o.swipeTo,
					distance: o.swipeToDistance,
					direction: i,
					fix: !0,
					speed: a
				}) : t.swipeAnimate({
					id: e,
					to: o.swipeTo,
					distance: o.swipeToDistance,
					direction: i,
					fix: !0
				}) : t.swipeAnimate({
					id: e,
					to: 0,
					direction: i,
					speed: 0
				})
			}
		},
		carouselToEvalPosition: function (e, a, o) {
			var s = t[e].carousel;
			if (s.justify) s.focused = void 0 === s.focused ? 0 : s.focused, s.slidepositions[s.focused] = void 0 === s.slidepositions[s.focused] ? 0 : s.slidepositions[s.focused], s.slide_offset_target = i(e, s.focused);
			else {
				a = s.lastdirection = r(a, s.lastdirection);
				var n = "center" === s.horizontal_align ? (s.wrapwidth / 2 - s.slide_width / 2 - s.slide_offset) / s.slide_width : (0 - s.slide_offset) / s.slide_width,
					l = n % t[e].slideamount,
					d = l - Math.floor(l),
					c = -1 * (Math.ceil(l) - l),
					p = -1 * (Math.floor(l) - l),
					g = d * s.slide_width,
					u = g >= 20 && "left" === a ? 1 : g >= s.slide_width - 20 && "right" === a ? 2 : g < 20 && "left" === a ? 3 : g < s.slide_width - 20 && "right" === a ? 4 : 5,
					m = 1 === u || 2 === u ? c : 3 === u || 4 === u ? p : 0;
				s.slide_offset_target = (s.infinity ? m : l < 0 ? l : n > t[e].slideamount - 1 ? n - (t[e].slideamount - 1) : m) * s.slide_width
			}
			return s.slide_offset_target !== s.slide_offset_targetCACHE && !0 !== o && (0 !== Math.abs(s.slide_offset_target) ? t.animateCarousel(e, a, !0) : t.organiseCarousel(e, a), s.slide_offset_targetCACHE = s.slide_offset_target), s.slide_offset_target
		},
		loadVisibleCarouselItems: function (e, i) {
			var a = [];
			t[e].carousel.focused = parseInt(t[e].carousel.focused, 0), t[e].carousel.focused = t.isNumeric(t[e].carousel.focused) ? t[e].carousel.focused : 0;
			for (var r = 0; r < Math.ceil(t[e].carousel.maxVisibleItems / 2); r++) {
				var o = "right" === t[e].carousel.horizontal_align ? t[e].carousel.focused - r : t[e].carousel.focused + r,
					s = "center" === t[e].carousel.horizontal_align ? t[e].carousel.focused - r : "left" === t[e].carousel.horizontal_align ? t[e].carousel.maxVisibleItems + o - 1 : o - t[e].carousel.maxVisibleItems + 1;
				o = o >= t[e].slideamount ? o - t[e].slideamount + 0 : o, s = s >= t[e].slideamount ? s - t[e].slideamount + 0 : s, o = o < 0 ? t[e].slideamount + o : o, s = s < 0 ? t[e].slideamount + s : s, a.push(t[e].slides[o]), o !== s && a.push(t[e].slides[s])
			}
			return i && (t.loadImages(a, e, 1), t.waitForCurrentImages(a, e)), a
		},
		organiseCarousel: function (e, i, a, r, o) {
			Math.round(1e5 * Math.random());
			var s = t[e].carousel,
				n = "center" === s.horizontal_align ? 2 : 1,
				l = Math.ceil(s.maxVisibleItems / n),
				d = "center" === s.horizontal_align ? s.wrapwidth / 2 + s.maxwidth / 2 : s.maxwidth - s.slide_width,
				c = "center" === s.horizontal_align ? s.wrapwidth / 2 - s.maxwidth / 2 : 0 - s.slide_width,
				p = 0,
				g = 0,
				u = 0;
			if (i = s.slide_offset < s.cached_slide_offset ? "left" : "right", s.cached_slide_offset = s.slide_offset, !0 !== s.justify && "center" === s.horizontal_align) {
				var m = 2 * (s.windhalf - s.wrapoffset) + s.slide_width;
				m >= s.maxwidth && ("left" === i && (d = 2 * s.windhalf, c = 0 - (s.slide_width - (m - s.maxwidth))), "right" === i && (d = 2 * s.windhalf - (m - s.maxwidth), c = 0 - s.slide_width))
			}
			for (var h = 2 * s.windhalf, f = 0, v = -1, y = 0; y < s.len; y++) !0 === s.justify ? (p += y > 0 ? s.slide_widths[y - 1] + s.space : s.slide_offset, s.wrapwidth >= s.maxwidth && "center" !== s.horizontal_align && (s.slideFakePositions[y] = p - s.slide_offset), c = 0 - s.slide_widths[y], d = s.maxwidth - s.slide_widths[y], s.inneroffset = 0) : (p = y * s.slide_width + s.slide_offset, s.wrapwidth >= s.maxwidth && "left" === s.horizontal_align && (s.slideFakePositions[y] = y * s.slide_width), s.wrapwidth >= s.maxwidth && "right" === s.horizontal_align && (s.slideFakePositions[y] = s.wrapwidth - (y + 1) * s.slide_width)), u = g = p, s.infinity && (g = g >= d - s.inneroffset ? g - s.maxwidth : g <= c - s.inneroffset ? g + s.maxwidth : g), h > g && (h = g, y), f < g && (f = g, v = y), s.slidepositions[y] = u > s.maxwidth + d ? g - s.maxwidth : u < c - s.maxwidth ? g + s.maxwidth : g;
			s.infinity && h > 0 && f > s.wrapwidth && (s.slidepositions[v] -= s.maxwidth);
			var b = 999,
				w = 0,
				_ = (t[e].module.width, !1),
				x = "right" === s.horizontal_align ? 0 : s.wrapwidth;
			if (t[e].slides)
				for (y = 0; y < t[e].slides.length; y++) {
					var k = {
							left: (g = s.slidepositions[y]) + s.inneroffset,
							width: !0 === s.justify ? s.slide_widths[y] : s.slide_width,
							x: 0
						},
						S = 0;
					if (void 0 === s.slideAnims[y] && (k.transformOrigin = "50% " + s.vertical_align, k.scale = 1, k.force3D = !0, k.transformStyle = "3D" != t[e].parallax.type && "3d" != t[e].parallax.type ? "flat" : "preserve-3d"), s.justify) k.autoAlpha = 1, s.wrapwidth >= s.maxwidth && "center" !== s.horizontal_align || ("center" === s.horizontal_align && s.slidepositions[y] < s.windhalf && s.slidepositions[y] + s.slide_widths[y] > s.windhalf ? s.focused = y : "left" === s.horizontal_align && s.slidepositions[y] >= -25 && s.slidepositions[y] < s.windhalf && (!_ || s.slidepositions[y] < x) ? (s.focused = y, _ = !0, x = s.slidepositions[y]) : "right" === s.horizontal_align && s.slidepositions[y] + s.slide_widths[y] <= s.wrapwidth + 25 && (s.slide_widths[y] < s.windhalf && s.slidepositions[y] > s.windhalf || s.slidepositions[y] > s.wrapwidth - s.slide_widths[y]) && (!_ || s.slidepositions[y] > x) && (s.focused = y, _ = !0, x = s.slidepositions[y]), s.focused = s.focused >= s.len ? s.infinity ? 0 : s.len - 1 : s.focused < 0 ? s.infinity ? s.len - 1 : 0 : s.focused);
					else {
						S = "center" === s.horizontal_align ? (Math.abs(s.wrapwidth / 2) - (k.left + s.slide_width / 2)) / s.slide_width : (s.inneroffset - k.left) / s.slide_width, (Math.abs(S) < b || 0 === S) && (b = Math.abs(S), s.focused = y), void 0 !== s.minScale && s.minScale > 0 && (s.vary_scale ? k.scale = 1 - Math.abs((1 - s.minScale) / l * S) : k.scale = S >= 1 || S <= -1 ? s.minScale : s.minScale + (1 - s.minScale) * (1 - Math.abs(S)), w = S * (k.width - k.width * k.scale) / 2), s.fadeout && (s.vary_fade ? k.autoAlpha = 1 - Math.abs(s.maxOpacity / l * S) : k.autoAlpha = S >= 1 || S <= -1 ? s.maxOpacity : s.maxOpacity + (1 - s.maxOpacity) * (1 - Math.abs(S)));
						var L = Math.ceil(s.maxVisibleItems / n) - Math.abs(S);
						k.autoAlpha = void 0 === k.autoAlpha ? 1 : k.autoAlpha, k.autoAlpha = Math.max(0, Math.min(L, k.autoAlpha)), void 0 !== s.maxRotation && 0 != Math.abs(s.maxRotation) && (s.vary_rotation ? (k.rotationY = Math.abs(s.maxRotation) - Math.abs((1 - Math.abs(1 / l * S)) * s.maxRotation), k.autoAlpha = Math.abs(k.rotationY) > 90 ? 0 : k.autoAlpha) : k.rotationY = S >= 1 || S <= -1 ? s.maxRotation : Math.abs(S) * s.maxRotation, k.rotationY = S < 0 ? -1 * k.rotationY : k.rotationY, t.isSafari11() && (k.z = 0 !== S ? 0 - Math.abs(k.rotationY) : 0)), k.x = Math.floor(-1 * s.space * S * (s.offsetScale ? k.scale : 1)), void 0 !== k.scale && (k.x = k.x + w)
					}
					k.x += s.wrapwidth >= s.maxwidth && ("left" === s.horizontal_align || "right" === s.horizontal_align) ? s.slideFakePositions[y] : Math.floor(k.left), delete k.left, k.zIndex = s.justify ? 95 : Math.round(100 - Math.abs(5 * S)), !0 !== o && (void 0 !== s.slideAnims[y] && (k.width === s.slideAnims[y].width && delete k.width, k.x === s.slideAnims[y].x && delete k.x, k.autoAlpha === s.slideAnims[y].autoAlpha && delete k.autoAlpha, k.scale === s.slideAnims[y].scale && delete k.scale, k.zIndex === s.slideAnims[y].zIndex && delete k.zIndex, k.rotationY === s.slideAnims[y].rotationY && delete k.rotationY), tpGS.gsap.set(t[e].slides[y], k), s.slideAnims[y] = jQuery.extend(!0, s.slideAnims[y], k))
				}
			r && !0 !== o && (s.focused = void 0 === s.focused ? 0 : s.focused, s.oldfocused = void 0 === s.oldfocused ? 0 : s.oldfocused, t[e].pr_next_key = s.focused, s.focused !== s.oldfocused && t.animateTheLayers && (t.removeTheLayers(jQuery(t[e].slides[s.oldfocused]), e), t.animateTheLayers({
				slide: s.focused,
				id: e,
				mode: "start"
			}), t.loadVisibleCarouselItems(e, !0)), s.oldfocused = s.focused, t[e].c.trigger("revolution.nextslide.waiting"))
		},
		swipeAnimate: function (e) {
			var i = t[e.id].carousel,
				r = {
					from: i.slide_offset,
					to: e.to
				},
				o = void 0 === e.speed ? .5 : e.speed;
			if (i.distance = void 0 !== e.distance ? e.distance : e.to, void 0 !== i.positionanim && i.positionanim.pause(), e.fix) {
				if (!1 !== i.snap) {
					var s = i.slide_offset,
						n = "end" === e.phase ? i.focusedBeforeSwipe : i.focused;
					i.slide_offset = e.to, t.organiseCarousel(e.id, e.direction, !0, !1, !1), Math.abs(i.swipeDistance) > 40 && n == i.focused && (i.focused = "right" === e.direction ? i.focused - 1 : i.focused + 1, i.focused = i.focused >= i.len ? i.infinity ? 0 : i.len - 1 : i.focused < 0 ? i.infinity ? i.len - 1 : 0 : i.focused), r.to += t.carouselToEvalPosition(e.id, e.direction, !0), i.slide_offset = s, t.organiseCarousel(e.id, e.direction, !0, !1, !1), i.keepFocusedFirst && (i.keepFocusedFirst = !1, i.focused = 0)
				} else !0 !== i.infinity ? (r.to > 0 && (r.to = 0), r.to < i.wrapwidth - i.maxwidth && (r.to = i.wrapwidth - i.maxwidth)) : "end" === e.phase ? i.dragModeJustEnded = !0 : !0 !== i.dragModeJustEnded ? r.to += t.carouselToEvalPosition(e.id, e.direction, !0) : i.dragModeJustEnded = !1;
				0 !== (o = i.speed / 1e3 * a(Math.abs(Math.abs(r.from) - Math.abs(i.distance)) / i.wrapwidth)) && o < .1 && Math.abs(r.to) > 25 && (o = .3)
			}
			i.swipeDistance = 0, o = !0 !== i.firstSwipedDone ? 0 : o, i.firstSwipedDone = !0, i.positionanim = tpGS.gsap.to(r, o, {
				from: r.to,
				onUpdate: function () {
					i.slide_offset = r.from % i.maxwidth, t.organiseCarousel(e.id, e.direction, !0 !== e.fix, !0 !== e.fix), i.slide_offset = r.from
				},
				onComplete: function () {
					i.slide_offset = r.from % i.maxwidth, "carousel" !== t[e.id].sliderType || i.fadein || (tpGS.gsap.to(t[e.id].canvas, 1, {
						scale: 1,
						opacity: 1
					}), i.fadein = !0), i.lastNotSimplifedSlideOffset = i.slide_offset, i.justDragged = !1, e.fix && (i.focusedAfterAnimation = i.focused, e.newSlide && i.focusedBeforeSwipe !== i.focused && t.callingNewSlide(e.id, jQuery(t[e.id].slides[i.focused]).data("key"), !0), t.organiseCarousel(e.id, e.direction, !0, !0), t[e.id].c.trigger("revolution.slide.carouselchange", {
						slider: e.id,
						slideIndex: parseInt(t[e.id].pr_active_key, 0) + 1,
						slideLIIndex: t[e.id].pr_active_key,
						slide: t[e.id].pr_next_slide,
						currentslide: t[e.id].pr_next_slide,
						prevSlideIndex: void 0 !== t[e.id].pr_lastshown_key && parseInt(t[e.id].pr_lastshown_key, 0) + 1,
						prevSlideLIIndex: void 0 !== t[e.id].pr_lastshown_key && parseInt(t[e.id].pr_lastshown_key, 0),
						prevSlide: void 0 !== t[e.id].pr_lastshown_key && t[e.id].slides[t[e.id].pr_lastshown_key]
					}))
				},
				ease: e.easing ? e.easing : i.easing
			})
		},
		defineCarouselElements: function (e) {
			var i = t[e].carousel;
			i.infbackup = i.infinity, i.maxVisiblebackup = i.maxVisibleItems, i.slide_offset = "none", i.slide_offset = 0, i.cached_slide_offset = 0, i.wrap = jQuery(t[e].canvas[0].parentNode), 0 !== i.maxRotation && ("3D" !== t[e].parallax.type && "3d" !== t[e].parallax.type || tpGS.gsap.set(i.wrap, {
				perspective: "1600px",
				transformStyle: "preserve-3d"
			}))
		},
		setCarouselDefaults: function (e, i) {
			var a = t[e].carousel;
			if (a.slide_width = !0 !== a.stretch ? t[e].gridwidth[t[e].level] * (0 === t[e].CM.w ? 1 : t[e].CM.w) : t[e].canv.width, a.slide_height = !0 !== a.stretch ? t[e].gridheight[t[e].level] * (0 === t[e].CM.w ? 1 : t[e].CM.w) : t[e].canv.height, a.ratio = a.slide_width / a.slide_height, a.len = t[e].slides.length, a.maxwidth = t[e].slideamount * a.slide_width, 1 != a.justify && a.maxVisiblebackup > a.len && (a.maxVisibleItems = a.len % 2 ? a.len : a.len + 1), a.wrapwidth = a.maxVisibleItems * a.slide_width + (a.maxVisibleItems - 1) * a.space, a.wrapwidth = "auto" != t[e].sliderLayout ? a.wrapwidth > t[e].canv.width ? t[e].canv.width : a.wrapwidth : a.wrapwidth > t[e].module.width ? t[e].module.width : a.wrapwidth, !0 === a.justify) {
				a.slide_height = t[e].gridheight[t[e].level], a.slide_widths = [], a.slide_widthsCache = void 0 === a.slide_widthsCache ? [] : a.slide_widthsCache, a.maxwidth = 0;
				for (var r = 0; r < a.len; r++)
					if (t[e].slides.hasOwnProperty(r)) {
						var o = t.gA(t[e].slides[r], "iratio");
						o = void 0 === o || 0 === o || null === o ? a.ratio : o, a.slide_widths[r] = Math.round(a.slide_height * o), !1 !== a.justifyMaxWidth && (a.slide_widths[r] = Math.min(a.wrapwidth, a.slide_widths[r])), a.slide_widths[r] !== a.slide_widthsCache[r] && (a.slide_widthsCache[r] = a.slide_widths[r], !0 !== i && tpGS.gsap.set(t[e].slides[r], {
							width: a.slide_widths[r]
						})), a.maxwidth += a.slide_widths[r] + a.space
					}
			}
			if (a.infinity = !(a.wrapwidth >= a.maxwidth) && a.infbackup, !0 !== a.quickmode) {
				a.wrapoffset = "center" === a.horizontal_align ? (t[e].canv.width - t[e].outNavDims.right - t[e].outNavDims.left - a.wrapwidth) / 2 : 0, a.wrapoffset = "auto" != t[e].sliderLayout && t[e].outernav ? 0 : a.wrapoffset < t[e].outNavDims.left ? t[e].outNavDims.left : a.wrapoffset;
				var s = "3D" == t[e].parallax.type || "3d" == t[e].parallax.type ? "visible" : "hidden",
					n = "right" === a.horizontal_align ? {
						left: "auto",
						right: a.wrapoffset + "px",
						width: a.wrapwidth,
						overflow: s
					} : "left" === a.horizontal_align || a.wrapwidth < t.winW ? {
						right: "auto",
						left: a.wrapoffset + "px",
						width: a.wrapwidth,
						overflow: s
					} : {
						right: "auto",
						left: "auto",
						width: "100%",
						overflow: s
					};
				void 0 !== a.cacheWrapObj && n.left === a.cacheWrapObj.left && n.right === a.cacheWrapObj.right && n.width === a.cacheWrapObj.width || (window.requestAnimationFrame(function () {
					tpGS.gsap.set(a.wrap, n), t[e].carousel.wrapoffset > 0 && tpGS.gsap.set(t[e].canvas, {
						left: 0
					})
				}), a.cacheWrapObj = jQuery.extend(!0, {}, n)), a.inneroffset = "right" === a.horizontal_align ? a.wrapwidth - a.slide_width : 0, a.windhalf = "auto" === t[e].sliderLayout ? t[e].module.width / 2 : t.winW / 2
			}
		}
	});
	var i = function (e, i) {
			var a = t[e].carousel;
			return "center" === a.horizontal_align ? a.windhalf - a.slide_widths[i] / 2 - a.slidepositions[i] : "left" === a.horizontal_align ? 0 - a.slidepositions[i] : a.wrapwidth - a.slide_widths[i] - a.slidepositions[i]
		},
		a = function (e) {
			return e < 1 ? Math.sqrt(1 - (e -= 1) * e) : Math.sqrt(e)
		},
		r = function (e, t) {
			return null === e || jQuery.isEmptyObject(e) ? t : void 0 === e ? "right" : e
		},
		o = function (e, t) {
			return Math.abs(e) > Math.abs(t) ? e > 0 ? e - Math.abs(Math.floor(e / t) * t) : e + Math.abs(Math.floor(e / t) * t) : e
		},
		s = function (e) {
			var i, a, r, s, n, l = 0,
				d = t[e].carousel;
			if (void 0 !== d.positionanim && d.positionanim.pause(), d.justify) "center" === d.horizontal_align ? l = d.windhalf - d.slide_widths[d.focused] / 2 - d.slidepositions[d.focused] : "left" === d.horizontal_align ? l = 0 - d.slidepositions[d.focused] : "right" === d.horizontal_align && (l = d.wrapwidth - d.slide_widths[d.focused] - d.slidepositions[d.focused]), l = l > d.maxwidth / 2 ? d.maxwidth - l : l < 0 - d.maxwidth / 2 ? l + d.maxwidth : l;
			else {
				var c = t[e].pr_processing_key >= 0 ? t[e].pr_processing_key : t[e].pr_active_key >= 0 ? t[e].pr_active_key : 0,
					p = ("center" === d.horizontal_align ? (d.wrapwidth / 2 - d.slide_width / 2 - d.slide_offset) / d.slide_width : (0 - d.slide_offset) / d.slide_width) % t[e].slideamount;
				l = (d.infinity ? (i = p, a = c, r = t[e].slideamount, n = a - r - i, s = o(s = a - i, r), n = o(n, r), -(Math.abs(s) > Math.abs(n) ? n : s)) : p - c) * d.slide_width
			}
			return !1 === d.snap && d.justDragged && (l = 0), d.justDragged = !1, l
		}
}(jQuery),
function (e) {
	"use strict";
	var t = ["chars", "words", "lines"],
		i = ["Top", "Right", "Bottom", "Left"],
		a = ["TopLeft", "TopRight", "BottomRight", "BottomLeft"],
		r = ["top", "right", "bottom", "left"],
		o = jQuery.fn.revolution,
		s = o.is_mobile();
	o.is_android();
	jQuery.extend(!0, o, {
		checkLayerDimensions: function (e) {
			var t = !1;
			for (var i in o[e.id].layers[e.skey])
				if (o[e.id].layers[e.skey].hasOwnProperty(i)) {
					var a = o[e.id].layers[e.skey][i],
						r = o[e.id]._L[a.id];
					r.eow !== a.offsetWidth && "true" !== o.gA(a, "vary-layer-dims") && (t = !0), r.lastknownwidth = r.eow, r.lastknownheight = r.eoh, r._slidelink || o[e.id].caches.calcResponsiveLayersList.push({
						a: o[e.id]._L[a.id].c,
						b: e.id,
						c: 0,
						d: r.rsp_bd,
						e: e.slideIndex
					})
				}
			return t
		},
		requestLayerUpdates: function (e, t, i, a) {
			var r;
			if (void 0 !== i) r = i, o[e]._L[r].pVisRequest !== o[e]._L[r].pVisStatus && (void 0 === o[e]._L[r]._ligid || !0 !== o[e]._L[o[e]._L[r]._ligid].childrenAtStartNotVisible ? (o[e]._L[r].pVisStatus = o[e]._L[r].pVisRequest, 0 === o[e]._L[r].pVisStatus ? "row" !== o[e]._L[r].type && "column" !== o[e]._L[r].type && "group" !== o[e]._L[r].type || void 0 === o[e]._L[r].frames || void 0 === o[e]._L[r].frames.frame_999 || void 0 === o[e]._L[r].frames.frame_999.transform || "" + o[e]._L[r].frames.frame_999.transform.opacity == "0" ? o[e]._L[r].p[0].classList.add("rs-forcehidden") : o[e]._L[r].p[0].classList.add("rs-forceuntouchable") : (o[e]._L[r].p[0].classList.remove("rs-forceuntouchable"), o[e]._L[r].p[0].classList.remove("rs-forcehidden"))) : (o[e]._L[r].p[0].classList.remove("rs-forceuntouchable"), o[e]._L[r].p[0].classList.add("rs-forcehidden"))), o[e]._L[r].pPointerStatus !== o[e]._L[r].pPeventsRequest && (o[e]._L[r].pPointerStatus = o[e]._L[r].pPeventsRequest, tpGS.gsap.set(o[e]._L[r].p[0], {
				pointerEvents: o[e]._L[r].pPointerStatus,
				visibility: 1 === o[e]._L[r].pVisStatus ? "visible" : 0 === o[e]._L[r].pVisStatus ? "hidden" : o[e]._L[r].pVisStatus
			})), void 0 !== a && "ignore" !== a && 0 !== a && (a++, "enterstage" === t || "leavestage" === t || "framestarted" === t ? o.isFirefox(e) ? -1 === o[e]._L[r].p[0].style.transform.indexOf("perspective") && (o[e]._L[r].p[0].style.transform += (0 === o[e]._L[r].p[0].style.transform.length ? " " : "") + "perspective(" + a + "px)") : (!window.isSafari11 && !0 !== o[e]._L[r].maskHasPerspective && 0 === o[e]._L[r].p[0].style.perspective.length || "none" == o[e]._L[r].p[0].style.perspective) && (o[e]._L[r].p[0].style.perspective = a + "px") : "frameended" === t && (o.isFirefox(e) ? o[e]._L[r].p[0].style.transform = o[e]._L[r].p[0].style.transform.replace("perspective(" + a + "px)", "") : window.isSafari11 || (o[e]._L[r].p[0].style.perspective = o[e]._L[r].p[0].style.perspective.replace(a - 1 + "px", ""))));
			else
				for (r in o[e]._L) o[e]._L.hasOwnProperty(r) && (o[e]._L[r].pVisRequest !== o[e]._L[r].pVisStatus && (o[e]._L[r].pVisStatus = o[e]._L[r].pVisRequest, 0 === o[e]._L[r].pVisStatus ? o[e]._L[r].p[0].classList.add("rs-forcehidden") : o[e]._L[r].p[0].classList.remove("rs-forcehidden")), o[e]._L[r].pPointerStatus !== o[e]._L[r].pPeventsRequest && (o[e]._L[r].pPointerStatus = o[e]._L[r].pPeventsRequest, tpGS.gsap.set(o[e]._L[r].p[0], {
					pointerEvents: o[e]._L[r].pPointerStatus,
					visibility: o[e]._L[r].pVisStatus
				})));
			"enterstage" === t && void 0 !== i && void 0 !== o[e]._L[i].esginside && o[e]._L[i].esginside.length > 0 && void 0 !== o[e]._L[i].esginside.esredraw && o[e]._L[i].esginside.esredraw()
		},
		updateMiddleZonesAndESG: function (e) {
			var t, i = o[e].pr_processing_key || o[e].pr_active_key || 0;
			if (o[e].middleZones && o[e].middleZones.length > 0 && void 0 !== o[e].middleZones[i])
				for (t = 0; t < o[e].middleZones[i].length; t++) tpGS.gsap.set(o[e].middleZones[i][t], {
					y: Math.round(o[e].module.height / 2 - o[e].middleZones[i][t].offsetHeight / 2) + "px"
				});
			if (o[e].smiddleZones && o[e].smiddleZones.length > 0)
				for (t = 0; t < o[e].smiddleZones.length; t++) tpGS.gsap.set(o[e].smiddleZones[t], {
					y: Math.round(o[e].module.height / 2 - o[e].smiddleZones[t].offsetHeight / 2) + "px"
				})
		},
		getRowHeights: function (e) {
			var t = 0,
				i = 0,
				a = 0,
				r = o[e].pr_processing_key || o[e].pr_active_key || 0,
				s = o[e].pr_active_key || 0;
			if (o[e].rowzones && o[e].rowzones.length > 0) {
				if (void 0 !== o[e].rowzones[r])
					for (var n = 0; n < o[e].rowzones[r].length; n++) o[e].rowzonesHeights[r][n] = o[e].rowzones[r][n][0].offsetHeight, t += o[e].rowzonesHeights[r][n];
				if (s !== r)
					for (n = 0; n < o[e].rowzones[s].length; n++) o[e].rowzonesHeights[s][n] = o[e].rowzones[s][n][0].offsetHeight, i += o[e].rowzonesHeights[s][n];
				t = i / 2 > t ? i : t
			}
			if (o[e].srowzones && o[e].srowzones.length > 0)
				for (n = 0; n < o[e].srowzones.length; n++) a += o[e].srowzones[n][0].offsetHeight;
			return {
				cur: t = t < a ? a : t,
				last: i
			}
		},
		initLayer: function (e) {
			var t, i, a, r = e.id,
				s = e.skey;
			for (var n in o[r].layers[e.skey])
				if (o[r].layers[e.skey].hasOwnProperty(n)) {
					var l = o[r].layers[e.skey][n],
						d = jQuery(l),
						c = o.gA(l, "initialised"),
						p = c ? o[r]._L[l.id] : d.data();
					"individual" === e.skey && (p.slideKey = void 0 === p.slideKey ? o.gA(d.closest("rs-slide")[0], "key") : p.slideKey, p.slideIndex = void 0 === p.slideIndex ? o.getSlideIndex(r, p.slideKey) : p.slideIndex, e.slideIndex = p.slideIndex, s = p.slideKey);
					var g = "carousel" === o[r].sliderType ? 0 : o[r].canv.width / 2 - o.iWA(r, e.slideIndex) * o[r].CM.w / 2,
						u = 0;
					if (void 0 === c) {
						if (o.revCheckIDS(r, l), o[r]._L[l.id] = p, p.ford = void 0 === p.ford ? "frame_0;frame_1;frame_999" : p.ford, p.ford = ";" == p.ford[p.ford.length - 1] ? p.ford.substring(0, p.ford.length - 1) : p.ford, p.ford = p.ford.split(";"), void 0 !== p.clip)
							for (t in p.clipPath = {
									use: !1,
									origin: "l",
									type: "rectangle"
								}, p.clip = p.clip.split(";"), p.clip) p.clip.hasOwnProperty(t) && ("u" == (i = p.clip[t].split(":"))[0] && (p.clipPath.use = "true" == i[1]), "o" == i[0] && (p.clipPath.origin = i[1]), "t" == i[0] && (p.clipPath.type = i[1]));
						if (p.frames = S(p, r), p.caches = {}, p.OBJUPD = {}, p.c = d, p.p = o[r]._Lshortcuts[l.id].p, p.lp = o[r]._Lshortcuts[l.id].lp, p.m = o[r]._Lshortcuts[l.id].m, p.triggercache = void 0 === p.triggercache ? "reset" : p.triggercache, p.rsp_bd = void 0 === p.rsp_bd ? "column" === p.type || "row" === p.type ? "off" : "on" : p.rsp_bd, p.rsp_o = void 0 === p.rsp_o ? "on" : p.rsp_o, p.basealign = void 0 === p.basealign ? "grid" : p.basealign, p.group = "group" !== p.type && null !== o.closestNode(d[0], "RS-GROUP-WRAP") ? "group" : "column" !== p.type && null !== o.closestNode(d[0], "RS-COLUMN") ? "column" : "row" !== p.type && null !== o.closestNode(d[0], "RS-ROW") ? "row" : void 0, p._lig = "group" === p.group ? jQuery(o.closestNode(d[0], "RS-GROUP")) : "column" === p.group ? jQuery(o.closestNode(d[0], "RS-COLUMN")) : "row" === p.group ? jQuery(o.closestNode(d[0], "RS-ROW")) : void 0, p._ligid = void 0 !== p._lig ? p._lig[0].id : void 0, p._column = "RS-COLUMN" === d[0].tagName ? jQuery(o.closestNode(d[0], "RS-COLUMN-WRAP")) : "none", p._row = "RS-COLUMN" === d[0].tagName && jQuery(o.closestNode(d[0], "RS-ROW")), p._ingroup = "group" === p.group, p._incolumn = "column" === p.group, p._inrow = "row" === p.group, (p._ingroup || p._incolumn) && p._lig[0].className.indexOf("rs-sba") >= 0 && (!1 !== p.animationonscroll || void 0 === p.frames.loop) && !0 !== p.animOnScrollForceDisable && (p.animationonscroll = !0, d[0].className += " rs-sba", o[r].sbas[s][l.id] = d[0]), p.animOnScrollRepeats = 0, p._isgroup = "RS-GROUP" === d[0].tagName, p.type = p.type || "none", "row" === p.type && void 0 === p.cbreak && (p.cbreak = 2), p.esginside = jQuery(d[0].getElementsByClassName("esg-grid")[0]), p._isnotext = -1 !== jQuery.inArray(p.type, ["video", "image", "audio", "shape", "row", "group"]), p._mediatag = "html5" == p.audio ? "audio" : "video", p.img = d.find("img"), p.deepiframe = o.getByTag(d[0], "iframe"), p.deepmedia = o.getByTag(d[0], p._mediatag), p.layertype = "image" === p.type ? "image" : d[0].className.indexOf("rs-layer-video") >= 0 || d[0].className.indexOf("rs-layer-audio") >= 0 || p.deepiframe.length > 0 && (p.deepiframe[0].src.toLowerCase().indexOf("youtube") > 0 || p.deepiframe[0].src.toLowerCase().indexOf("vimeo") > 0) || p.deepmedia.length > 0 ? "video" : "html", p.deepiframe.length > 0 && o.sA(p.deepiframe[0], "layertype", p.layertype), "column" === p.type && (p.cbg = jQuery(o.getByTag(p.p[0], "RS-COLUMN-BG")[0]), p.cbgmask = jQuery(o.getByTag(p.p[0], "RS-CBG-MASK-WRAP")[0])), p._slidelink = d[0].className.indexOf("slidelink") >= 0, p._isstatic = d[0].className.indexOf("rs-layer-static") >= 0, p.slidekey = p._isstatic ? "staticlayers" : s, p._togglelisteners = d[0].getElementsByClassName("rs-toggled-content").length > 0, p.bgcol = void 0 === p.bgcol ? d[0].style.background.indexOf("gradient") >= 0 ? d[0].style.background : d[0].style.backgroundColor : p.bgcol, p.bgcol = "" === p.bgcol ? "rgba(0, 0, 0, 0)" : p.bgcol, p.bgcol = 0 === p.bgcol.indexOf("rgba(0, 0, 0, 0)") && p.bgcol.length > 18 ? p.bgcol.replace("rgba(0, 0, 0, 0)", "") : p.bgcol, p.zindex = void 0 === p.zindex ? d[0].style.zIndex : p.zindex, p._isgroup && (p.frames.frame_1.timeline.waitoncall && (p.childrenAtStartNotVisible = !0), p.pVisRequest = 0), p._togglelisteners && d.on("click", function () {
								o.swaptoggleState([this.id])
							}), void 0 !== p.border)
							for (t in p.border = p.border.split(";"), p.bordercolor = "transparent", p.border)
								if (p.border.hasOwnProperty(t)) switch ((i = p.border[t].split(":"))[0]) {
									case "boc":
										p.bordercolor = i[1];
										break;
									case "bow":
										p.borderwidth = o.revToResp(i[1], 4, 0);
										break;
									case "bos":
										p.borderstyle = o.revToResp(i[1], 4, 0);
										break;
									case "bor":
										p.borderradius = o.revToResp(i[1], 4, 0)
								}
						if ("svg" === p.type && (p.svg = d.find("svg"), p.svgPath = p.svg.find("path"), p.svgI = v(p.svgi, r), p.svgH = void 0 !== p.svgi && -1 === p.svgi.indexOf("oc:t") ? v(p.svgh, r) : {}), void 0 !== p.btrans) {
							var m = p.btrans;
							for (t in p.btrans = {
									rX: 0,
									rY: 0,
									rZ: 0,
									o: 1
								}, m = m.split(";"))
								if (m.hasOwnProperty(t)) switch ((i = m[t].split(":"))[0]) {
									case "rX":
										p.btrans.rX = i[1];
										break;
									case "rY":
										p.btrans.rY = i[1];
										break;
									case "rZ":
										p.btrans.rZ = i[1];
										break;
									case "o":
										p.btrans.o = i[1]
								}
						}
						if (void 0 !== p.tsh)
							for (t in p.tshadow = {
									c: "rgba(0,0,0,0.25)",
									v: 0,
									h: 0,
									b: 0
								}, p.tsh = p.tsh.split(";"), p.tsh)
								if (p.tsh.hasOwnProperty(t)) switch ((i = p.tsh[t].split(":"))[0]) {
									case "c":
										p.tshadow.c = i[1];
										break;
									case "h":
										p.tshadow.h = i[1];
										break;
									case "v":
										p.tshadow.v = i[1];
										break;
									case "b":
										p.tshadow.b = i[1]
								}
						if (void 0 !== p.tst)
							for (t in p.tstroke = {
									c: "rgba(0,0,0,0.25)",
									w: 1
								}, p.tst = p.tst.split(";"), p.tst)
								if (p.tst.hasOwnProperty(t)) switch ((i = p.tst[t].split(":"))[0]) {
									case "c":
										p.tstroke.c = i[1];
										break;
									case "w":
										p.tstroke.w = i[1]
								}
						if (void 0 !== p.bsh)
							for (t in p.bshadow = {
									e: "c",
									c: "rgba(0,0,0,0.25)",
									v: 0,
									h: 0,
									b: 0,
									s: 0
								}, p.bsh = p.bsh.split(";"), p.bsh)
								if (p.bsh.hasOwnProperty(t)) switch ((i = p.bsh[t].split(":"))[0]) {
									case "c":
										p.bshadow.c = i[1];
										break;
									case "h":
										p.bshadow.h = i[1];
										break;
									case "v":
										p.bshadow.v = i[1];
										break;
									case "b":
										p.bshadow.b = i[1];
										break;
									case "s":
										p.bshadow.s = i[1];
										break;
									case "e":
										p.bshadow.e = i[1]
								}
						if (void 0 !== p.dim)
							for (t in p.dim = p.dim.split(";"), p.dim)
								if (p.dim.hasOwnProperty(t)) switch ((i = p.dim[t].split(":"))[0]) {
									case "w":
										p.width = i[1];
										break;
									case "h":
										p.height = i[1];
										break;
									case "maxw":
										p.maxwidth = i[1];
										break;
									case "maxh":
										p.maxheight = i[1];
										break;
									case "minw":
										p.minwidth = i[1];
										break;
									case "minh":
										p.minheight = i[1]
								}
						if (void 0 !== p.xy)
							for (t in p.xy = p.xy.split(";"), p.xy)
								if (p.xy.hasOwnProperty(t)) switch ((i = p.xy[t].split(":"))[0]) {
									case "x":
										p.x = i[1].replace("px", "");
										break;
									case "y":
										p.y = i[1].replace("px", "");
										break;
									case "xo":
										p.hoffset = i[1].replace("px", "");
										break;
									case "yo":
										p.voffset = i[1].replace("px", "")
								}
						if (!p._isnotext && void 0 !== p.text)
							for (t in p.text = p.text.split(";"), p.text)
								if (p.text.hasOwnProperty(t)) switch ((i = p.text[t].split(":"))[0]) {
									case "w":
										p.whitespace = i[1];
										break;
									case "td":
										p.textDecoration = i[1];
										break;
									case "c":
										p.clear = i[1];
										break;
									case "f":
										p.float = i[1];
										break;
									case "s":
										p.fontsize = i[1];
										break;
									case "l":
										p.lineheight = i[1];
										break;
									case "ls":
										p.letterspacing = i[1];
										break;
									case "fw":
										p.fontweight = i[1];
										break;
									case "a":
										p.textalign = i[1]
								}
						if ("column" === p.type && void 0 !== p.textDecoration && delete p.textDecoration, void 0 !== p.flcr)
							for (t in p.flcr = p.flcr.split(";"), p.flcr)
								if (p.flcr.hasOwnProperty(t)) switch ((i = p.flcr[t].split(":"))[0]) {
									case "c":
										p.clear = i[1];
										break;
									case "f":
										p.float = i[1]
								}
						if (void 0 !== p.padding)
							for (t in p.padding = p.padding.split(";"), p.padding)
								if (p.padding.hasOwnProperty(t)) switch ((i = p.padding[t].split(":"))[0]) {
									case "t":
										p.paddingtop = i[1];
										break;
									case "b":
										p.paddingbottom = i[1];
										break;
									case "l":
										p.paddingleft = i[1];
										break;
									case "r":
										p.paddingright = i[1]
								}
						if (void 0 !== p.margin)
							for (t in p.margin = p.margin.split(";"), p.margin)
								if (p.margin.hasOwnProperty(t)) switch ((i = p.margin[t].split(":"))[0]) {
									case "t":
										p.margintop = i[1];
										break;
									case "b":
										p.marginbottom = i[1];
										break;
									case "l":
										p.marginleft = i[1];
										break;
									case "r":
										p.marginright = i[1]
								}
						if (void 0 !== p.spike && (p.spike = B(p.spike)), void 0 !== p.corners)
							for (t in a = p.corners.split(";"), p.corners = {}, a) a.hasOwnProperty(t) && a[t].length > 0 && (p.corners[a[t]] = jQuery("<" + a[t] + "></" + a[t] + ">"), p.c.append(p.corners[a[t]]));
						p.textalign = y(p.textalign), p.vbility = o.revToResp(p.vbility, o[r].rle, !0), p.hoffset = o.revToResp(p.hoffset, o[r].rle, 0), p.voffset = o.revToResp(p.voffset, o[r].rle, 0), p.x = o.revToResp(p.x, o[r].rle, "l"), p.y = o.revToResp(p.y, o[r].rle, "t"), A(d, 0, r), o.sA(l, "initialised", !0), o[r].c.trigger("layerinitialised", {
							layer: d[0].id,
							slider: r
						})
					}
					var h = "grid" === p.basealign ? o[r].canv.width : "carousel" !== o[r].sliderType || p._isstatic ? o[r].canv.width : o[r].carousel.slide_width,
						f = o[r].useFullScreenHeight ? o[r].module.height : "grid" === p.basealign ? o[r].content.height : "carousel" !== o[r].sliderType || p._isstatic ? o[r].module.height : o[r].canv.height,
						b = p.x[o[r].level],
						w = p.y[o[r].level];
					if (u = "slide" === p.basealign ? 0 : Math.max(0, "fullscreen" == o[r].sliderLayout ? o[r].module.height / 2 - o.iHE(r) * (o[r].keepBPHeight ? 1 : o[r].CM.h) / 2 : o[r].autoHeight || null != o[r].minHeight && o[r].minHeight > 0 || o[r].keepBPHeight ? o[r].canv.height / 2 - o.iHE(r) * o[r].CM.h / 2 : u), g = "slide" === p.basealign ? 0 : Math.max(0, g), "slide" !== p.basealign && "carousel" === o[r].sliderType && p._isstatic && void 0 !== o[r].carousel && void 0 !== o[r].carousel.horizontal_align && (g = Math.max(0, "center" === o[r].carousel.horizontal_align ? 0 + (o[r].module.width - o.iWA(r, "static") * o[r].CM.w) / 2 : "right" === o[r].carousel.horizontal_align ? o[r].module.width - o[r].gridwidth[o[r].level] * o[r].CM.w : g)), "updateposition" !== e.mode) {
						if (0 == p.vbility[o[r].levelForced] || "f" == p.vbility[o[r].levelForced] || h < o[r].hideLayerAtLimit && "on" == p.layeronlimit || h < o[r].hideAllLayerAtLimit ? (!0 !== p.layerIsHidden && p.p[0].classList.add("rs-layer-hidden"), p.layerIsHidden = !0) : (p.layerIsHidden && p.p[0].classList.remove("rs-layer-hidden"), p.layerIsHidden = !1), p.poster = null == p.poster && void 0 !== p.thumbimage ? p.thumbimage : p.poster, "image" === p.layertype)
							if (p.imgOBJ = {}, "cover-proportional" === p.img.data("c")) {
								o.sA(p.img[0], "owidth", o.gA(p.img[0], "owidth", p.img[0].width)), o.sA(p.img[0], "oheight", o.gA(p.img[0], "oheight", p.img[0].height));
								var _ = o.gA(p.img[0], "owidth") / o.gA(p.img[0], "oheight"),
									x = h / f;
								p.imgOBJ = _ > x && _ <= 1 || _ < x && _ > 1 ? {
									width: "100%",
									height: "auto",
									left: "c" === b || "center" === b ? "50%" : "left" === b || "l" === b ? "0" : "auto",
									right: "r" === b || "right" === b ? "0" : "auto",
									top: "c" === w || "center" === w ? "50%" : "top" === w || "t" === w ? "0" : "auto",
									bottom: "b" === w || "bottom" === w ? "0" : "auto",
									x: "c" === b || "center" === b ? "-50%" : "0",
									y: "c" === w || "center" === b ? "-50%" : "0"
								} : {
									height: "100%",
									width: "auto",
									left: "c" === b || "center" === b ? "50%" : "left" === b || "l" === b ? "0" : "auto",
									right: "r" === b || "right" === b ? "0" : "auto",
									top: "c" === w || "center" === w ? "50%" : "top" === w || "t" === w ? "0" : "auto",
									bottom: "b" === w || "bottom" === w ? "0" : "auto",
									x: "c" === b || "center" === b ? "-50%" : "0",
									y: "c" === w || "center" === b ? "-50%" : "0"
								}
							} else void 0 === p.group && "auto" === p.width[o[r].level] && "auto" === p.height[o[r].level] && (p.width[o[r].level] = o.gA(p.img[0], "owidth", p.img[0].width), p.height[o[r].level] = o.gA(p.img[0], "owidth", p.img[0].height)), p.imgOBJ = {
								width: "auto" !== p.width[o[r].level] || isNaN(p.width[o[r].level]) && p.width[o[r].level].indexOf("%") >= 0 ? "100%" : "auto",
								height: "auto" !== p.height[o[r].level] || isNaN(p.height[o[r].level]) && p.height[o[r].level].indexOf("%") >= 0 ? "100%" : "auto"
							};
						else if ("video" === p.layertype) {
							o.manageVideoLayer && !p.videoLayerManaged && o.manageVideoLayer(d, r, s), "rebuild" !== e.mode && o.resetVideo && o.resetVideo(d, r, e.mode), null != p.aspectratio && p.aspectratio.split(":").length > 1 && (1 == p.bgvideo || 1 == p.forcecover) && o.prepareCoveredVideo(r, d), p.media = void 0 === p.media ? p.deepiframe.length > 0 ? jQuery(p.deepiframe[0]) : jQuery(p.deepmedia[0]) : p.media, p.html5vid = void 0 === p.html5vid ? !(p.deepiframe.length > 0) : p.html5vid;
							var k = d[0].className.indexOf("coverscreenvideo") >= 0;
							p.mediaOBJ = {
								display: "block"
							};
							var L = p.width[o[r].level],
								T = p.height[o[r].level];
							if (L = "auto" === L ? L : !o.isNumeric(L) && L.indexOf("%") > 0 ? p._incolumn || p._ingroup ? "100%" : "grid" === p.basealign ? o.iWA(r, e.slideIndex) * o[r].CM.w : h : "off" !== p.rsp_bd ? parseFloat(L) * o[r].CM.w + "px" : parseFloat(L) + "px", T = "auto" === T ? T : !o.isNumeric(T) && T.indexOf("%") > 0 ? "grid" === p.basealign ? o.iHE(r) * o[r].CM.w : f : "off" !== p.rsp_bd ? parseFloat(T) * o[r].CM.h + "px" : parseFloat(T) + "px", p.vd = void 0 === p.vd ? o[r].videos[d[0].id].ratio.split(":").length > 1 ? o[r].videos[d[0].id].ratio.split(":")[0] / o[r].videos[d[0].id].ratio.split(":")[1] : 1 : p.vd, !p._incolumn || "100%" !== L && "auto" !== T || void 0 === p.ytid) - 1 != d[0].className.indexOf("rs-fsv") || k ? (g = 0, u = 0, p.x = o.revToResp(0, o[r].rle, 0), p.y = o.revToResp(0, o[r].rle, 0), p.vidOBJ = {
								width: L,
								height: o[r].autoHeight ? o[r].canv.height : T
							}) : (T = "auto" === T && void 0 !== p.vd && "auto" !== L ? "100%" === L ? d.width() / p.vd : L / p.vd : T, p.vidOBJ = {
								width: L,
								height: T
							}), (0 == p.html5vid && !k || 1 != p.forcecover && !d.hasClass("rs-fsv") && !k) && (p.mediaOBJ = {
								width: L,
								height: T,
								display: "block"
							}), p._ingroup && null !== p.vidOBJ.width && void 0 !== p.vidOBJ.width && !o.isNumeric(p.vidOBJ.width) && p.vidOBJ.width.indexOf("%") > 0 && (p.OBJUPD.lppmOBJ = {
								minWidth: L
							});
							else {
								var R = d.width(),
									O = "auto" === T ? R / p.vd : T;
								p.vidOBJ = {
									width: "auto",
									height: O
								}, p.heightSetByVideo = !0
							}
						}
						p._slidelink || o[r].caches.calcResponsiveLayersList.push({
							a: d,
							b: r,
							c: 0,
							d: p.rsp_bd,
							e: e.slideIndex
						}), "on" === p.rsp_ch && "row" !== p.type && "column" !== p.type && "group" !== p.type && "image" !== p.type && "video" !== p.type && "shape" !== p.type && d.find("*").each(function () {
							var t = jQuery(this);
							"true" !== o.gA(this, "stylerecorder") && !0 !== o.gA(this, "stylerecorder") && A(t, "rekursive", r), o[r].caches.calcResponsiveLayersList.push({
								a: t,
								b: r,
								c: "rekursive",
								d: p.rsp_bd,
								e: e.slideIndex,
								RSL: d
							})
						})
					}
					if ("preset" !== e.mode) {
						if (p.eow = d.outerWidth(!0), p.eoh = d.outerHeight(!0), p.imgInFirefox = "image" == p.type && "auto" == p.width[o[r].level] && "100%" == p.height[o[r].level] && o.isFirefox(r), p.imgInFirefox) {
							var I = p.img.width();
							p.eow = 0 !== I ? I : p.eow
						}
						if (p.eow <= 0 && void 0 !== p.lastknownwidth && (p.eow = p.lastknownwidth), p.eoh <= 0 && void 0 !== p.lastknownheight && (p.eoh = p.lastknownheight), void 0 !== p.corners && ("text" === p.type || "button" === p.type || "shape" === p.type)) {
							for (a in p.corners)
								if (p.corners.hasOwnProperty(a)) {
									p.corners[a].css("borderWidth", p.eoh + "px");
									var C = "rs-fcrt" === a || "rs-fcr" === a;
									p.corners[a].css("border" + (C ? "Right" : "Left"), "0px solid transparent"), p.corners[a].css("border" + ("rs-fcrt" == a || "rs-bcr" == a ? "Bottom" : "Top") + "Color", p.bgcol)
								}
							p.eow = d.outerWidth(!0)
						}
						0 == p.eow && 0 == p.eoh && (p.eow = "grid" === p.basealign ? o[r].content.width : o[r].module.width, p.eoh = "grid" === p.basealign ? o[r].content.height : o[r].module.height), p.basealign = o[r].justifyCarousel ? "grid" : p.basealign;
						var z = "on" === p.rsp_o ? parseInt(p.voffset[o[r].level], 0) * o[r].CM.w : parseInt(p.voffset[o[r].level], 0),
							P = "on" === p.rsp_o ? parseInt(p.hoffset[o[r].level], 0) * o[r].CM.w : parseInt(p.hoffset[o[r].level], 0),
							M = "grid" === p.basealign ? o.iWA(r, e.slideIndex) * o[r].CM.w : h,
							G = "grid" === p.basealign ? o.iHE(r) * (o[r].keepBPHeight || o[r].currentRowsHeight > o[r].gridheight[o[r].level] ? 1 : o[r].CM.h) : f;
						(1 == o[r].gridEQModule || void 0 !== p._lig && "row" !== p.type && "column" !== p.type && "group" !== p.type) && (M = void 0 !== p._lig ? p._lig.width() : o[r].module.width, G = void 0 !== p._lig ? p._lig.height() : o[r].module.height, g = 0, u = 0), "video" === p.type && null != p.vidOBJ && (p.vidOBJ.height >= 0 && 0 === p.eoh && (p.eoh = p.vidOBJ.height), p.vidOBJ.width >= 0 && 0 === p.eow && (p.eow = p.vidOBJ.width)), b = "c" === b || "m" === b || "center" === b || "middle" === b ? M / 2 - p.eow / 2 + P : "l" === b || "left" === b ? P : "r" === b || "right" === b ? M - p.eow - P : "off" !== p.rsp_o ? b * o[r].CM.w : b, w = "m" === w || "c" === w || "center" === w || "middle" === w ? G / 2 - p.eoh / 2 + z : "t" === w || "top" == w ? z : "b" === w || "bottom" == w ? G - p.eoh - z : "off" !== p.rsp_o ? w * o[r].CM.w : w, b = p._slidelink ? 0 : o[r].rtl && -1 == ("" + p.width[o[r].level]).indexOf("%") ? parseInt(b) + p.eow : b, p.calcx = parseInt(b, 0) + g, p.calcy = parseInt(w, 0) + u, "row" !== p.type && "column" !== p.type ? p.OBJUPD.POBJ = {
							zIndex: p.zindex,
							top: p.calcy,
							left: p.calcx,
							overwrite: "auto"
						} : "row" !== p.type ? p.OBJUPD.POBJ = {
							zIndex: p.zindex,
							width: p.columnwidth,
							top: 0,
							left: 0,
							overwrite: "auto"
						} : "row" === p.type && (p.OBJUPD.POBJ = {
							zIndex: p.zindex,
							width: "grid" === p.basealign ? M + "px" : "100%",
							top: 0,
							left: o[r].rtl ? -1 * g : g,
							overwrite: "auto"
						}, p.cbreak <= o[r].level ? -1 === d[0].className.indexOf("rev_break_columns") && d[0].classList.add("rev_break_columns") : d[0].className.indexOf("rev_break_columns") > 0 && d[0].classList.remove("rev_break_columns"), p.rowcalcx = p.OBJUPD.POBJ.left, p.pow = p.p.outerWidth(!0)), void 0 !== p.blendmode && (p.OBJUPD.POBJ.mixBlendMode = p.blendmode), (void 0 !== p.frames.loop || p.imgInFirefox) && (p.OBJUPD.LPOBJ = {
							width: p.eow,
							height: p.eoh
						}), p._ingroup && (void 0 !== p._groupw && !o.isNumeric(p._groupw) && p._groupw.indexOf("%") > 0 && (p.OBJUPD.lppmOBJ.minWidth = p._groupw), void 0 !== p._grouph && !o.isNumeric(p._grouph) && p._grouph.indexOf("%") > 0 && (p.OBJUPD.lppmOBJ.minHeight = p._grouph)), "updateposition" === e.mode && (p.caches.POBJ_LEFT === p.OBJUPD.POBJ.left && p.caches.POBJ_TOP === p.OBJUPD.POBJ.top || (tpGS.gsap.set(p.p, p.OBJUPD.POBJ), p.caches.POBJ_LEFT = p.OBJUPD.POBJ.left, p.caches.POBJ_TOP = p.OBJUPD.POBJ.top)), e.animcompleted && o.animcompleted(d, r)
					}
				}
		},
		hoverReverseDone: function (e) {
			o[e.id]._L[e.L[0].id].textDecoration && tpGS.gsap.set(o[e.id]._L[e.L[0].id].c, {
				textDecoration: o[e.id]._L[e.L[0].id].textDecoration
			})
		},
		animcompleted: function (e, t, i) {
			if (void 0 !== o[t].videos) {
				var a = o[t].videos[e[0].id];
				null != a && null != a.type && "none" != a.type && (1 == a.aplay || "true" == a.aplay || "on" == a.aplay || "1sttime" == a.aplay ? (("carousel" !== o[t].sliderType || e.closest("rs-slide").index() == o[t].carousel.focused || e.closest("rs-slide").index() == o[t].activeRSSlide && o[t].carousel.oldfocused == o[t].carousel.focused || i) && o.playVideo(e, t), o.toggleState(e.data("videotoggledby")), (a.aplay1 || "1sttime" == a.aplay) && (a.aplay1 = !1, a.aplay = !1)) : ("no1sttime" == a.aplay && (a.aplay = !0), o.unToggleState(e.data("videotoggledby"))))
			}
		},
		handleStaticLayers: function (e, t) {
			var i = 0,
				a = o[t].realslideamount + 1;
			if (void 0 !== o.gA(e[0], "onslides")) {
				var r = o.gA(e[0], "onslides").split(";");
				for (var s in r)
					if (r.hasOwnProperty(s)) {
						var n = r[s].split(":");
						"s" === n[0] && (i = parseInt(n[1], 0)), "e" === n[0] && (a = parseInt(n[1], 0))
					}
			}
			i = Math.max(0, i), a = Math.min(o[t].realslideamount, a < 0 ? o[t].realslideamount : a), a = 1 !== i && 0 !== i || a !== o[t].realslideamount ? a : o[t].realslideamount + 1, e.data("startslide", i), e.data("endslide", a), o.sA(e[0], "startslide", i), o.sA(e[0], "endslide", a)
		},
		updateLayersOnFullStage: function (e) {
			if (o[e].caches.calcResponsiveLayersList.length > 0) {
				!0 !== o[e].slideHasIframe && !0 !== o[e].fullScreenMode && ("carousel" === o[e].sliderType ? o[e].carousel.wrap.detach() : o[e].canvas.detach());
				for (var t = 0; t < o[e].caches.calcResponsiveLayersList.length; t++) void 0 !== o[e].caches.calcResponsiveLayersList[t] && P(o[e].caches.calcResponsiveLayersList[t]);
				!0 !== o[e].slideHasIframe && !0 !== o[e].fullScreenMode && ("carousel" === o[e].sliderType ? o[e].c[0].appendChild(o[e].carousel.wrap[0]) : o[e].c[0].appendChild(o[e].canvas[0]))
			}
		},
		animateTheLayers: function (e) {
			if (void 0 === e.slide) return !1;
			var t = e.id;
			if (void 0 === o[t].slides[e.slide] && "individual" !== e.slide) return !1;
			if ("carousel" === o[t].sliderType) {
				if ("start" === e.mode && "start" === o[t].lastATLmode) {
					if (e.slide === o[t].lastATLslide && (new Date).getTime() - o[t].lastATLtime < 1500) return;
					o[t].lastATLtime = (new Date).getTime()
				}
				o[t].lastATLmode = e.mode, o[t].lastATLslide = e.slide
			}
			var i = "individual" !== e.slide ? o.gA(o[t].slides[e.slide], "key") : "individual",
				a = o[t].pr_processing_key || o[t].pr_active_key || 0;
			o[t].caches.calcResponsiveLayersList = [], o[t].layers = o[t].layers || {}, "individual" === i ? o[t].layers.individual = void 0 === o[t].layers.individual ? "all" === o[t].carousel.showLayersAllTime ? R(jQuery(o[t].c), "rs-layer", "rs-layer-static") : R(jQuery(o[t].c), "rs-on-car") : o[t].layers.individual : (o[t].layers[i] = void 0 === o[t].layers[i] ? "all" === o[t].carousel.showLayersAllTime ? [] : R(jQuery(o[t].slides[e.slide]), "rs-layer", "carousel" === o[t].sliderType ? "rs-on-car" : void 0) : o[t].layers[i], o[t].layers.static = void 0 === o[t].layers.static ? R(jQuery(o[t].c.find("rs-static-layers")), "rs-layer", "rs-on-car") : o[t].layers.static, o[t].sbas[i] = void 0 === o[t].sbas[i] ? R(jQuery(o[t].slides[e.slide]), "rs-sba") : o[t].sbas[i]);
			var r = "rebuild" === e.mode && "carousel" === o[t].sliderType && "individual" === i;
			void 0 !== i && o[t].layers[i] && o.initLayer({
				id: t,
				slideIndex: e.slide,
				skey: i,
				mode: e.mode,
				animcompleted: r
			}), o[t].layers.static && o.initLayer({
				id: t,
				skey: "static",
				slideIndex: "static",
				mode: e.mode,
				animcompleted: r
			}), o.updateLayersOnFullStage(t), "preset" !== e.mode || void 0 !== o[t].slidePresets && void 0 !== o[t].slidePresets[e.slide] || (o[t].slidePresets = void 0 === o[t].slidePresets ? {} : o[t].slidePresets, o[t].slidePresets[e.slide] = !0, o[t].c.trigger("revolution.slideprepared", {
				slide: e.slide
			})), o[t].heightInLayers = o[t].module.height, o[t].widthInLayers = o[t].module.width, o[t].levelInLayers = o[t].level, o[t].lastAnimateLayersCall = {
				id: t,
				skey: i,
				slide: e.slide,
				key: i,
				mode: e.mode,
				index: a
			}, window.requestAnimationFrame(function () {
				if (void 0 === o[t].dimensionReCheck[i] ? (o.updateLayerDimensions(o[t].lastAnimateLayersCall), !0 !== o[t].doubleDimensionCheck ? setTimeout(function () {
						o.updateLayerDimensions(o[t].lastAnimateLayersCall), o.updateRowZones(o[t].lastAnimateLayersCall)
					}, 150) : o.updateRowZones(o[t].lastAnimateLayersCall), o[t].doubleDimensionCheck = !0, o[t].dimensionReCheck[i] = !0) : o.updateRowZones(o[t].lastAnimateLayersCall), void 0 !== i && o[t].layers[i])
					for (var a in o[t].layers[i]) o[t].layers[i].hasOwnProperty(a) && o.renderLayerAnimation({
						layer: jQuery(o[t].layers[i][a]),
						id: t,
						mode: e.mode,
						caller: e.caller
					});
				if (o[t].layers.static)
					for (var a in o[t].layers.static) o[t].layers.static.hasOwnProperty(a) && o.renderLayerAnimation({
						layer: jQuery(o[t].layers.static[a]),
						id: t,
						mode: e.mode,
						caller: e.caller
					});
				null != o[t].mtl && o[t].mtl.resume()
			})
		},
		updateRowZones: function (e) {
			(void 0 !== o[e.id].rowzones && o[e.id].rowzones.length > 0 && e.index >= 0 && o[e.id].rowzones[Math.min(e.index, o[e.id].rowzones.length)] && o[e.id].rowzones[Math.min(e.index, o[e.id].rowzones.length)].length > 0 || void 0 !== o[e.id].srowzones && o[e.id].srowzones.length > 0 || void 0 !== o[e.id].smiddleZones && o[e.id].smiddleZones.length > 0) && (o.updateDims(e.id), o.initLayer({
				id: e.id,
				skey: e.key,
				slideIndex: e.slide,
				mode: "updateposition"
			}), o.initLayer({
				id: e.id,
				skey: "static",
				slideIndex: "static",
				mode: "updateposition"
			}), "start" !== e.mode && "preset" !== e.mode || o.manageNavigation(e.id))
		},
		updateLayerDimensionsTimeout: function (e) {
			clearTimeout(o[e].gFLoadedTimer), o[e].gFLoadedTimer = setTimeout(function () {
				var t = o[e].lastAnimateLayersCall;
				void 0 !== t && o.updateLayerDimensions(o[t.id].lastAnimateLayersCall)
			}, 19)
		},
		updateLayerDimensions: function (e) {
			var t = !1;
			o[e.id].caches.calcResponsiveLayersList = [], void 0 !== e.key && o[e.id].layers[e.key] && o.checkLayerDimensions({
				id: e.id,
				skey: e.key,
				slideIndex: e.slide
			}) && (t = !0, o.initLayer({
				id: e.id,
				skey: e.key,
				slideIndex: e.slide,
				mode: "updateAndResize"
			})), o.checkLayerDimensions({
				id: e.id,
				skey: "individual",
				slideIndex: "individual"
			}) && (t = !0, o.initLayer({
				id: e.id,
				skey: "individual",
				slideIndex: "individual",
				mode: "updateAndResize"
			})), o[e.id].layers.static && o.checkLayerDimensions({
				id: e.id,
				skey: "static",
				slideIndex: "static"
			}) && (t = !0, o.initLayer({
				id: e.id,
				skey: "static",
				slideIndex: "static",
				mode: "updateAndResize"
			})), t && o.updateLayersOnFullStage(e.id)
		},
		updateAnimatingLayerPositions: function (e) {
			o.initLayer({
				id: e.id,
				skey: e.key,
				slideIndex: e.slide,
				mode: "updateposition"
			})
		},
		removeTheLayers: function (e, t, i) {
			var a = o.gA(e[0], "key");
			for (var r in o[t].sloops && o[t].sloops[a] && o[t].sloops[a].tl && o[t].sloops[a].tl.pause(), o[t].layers[a]) o[t].layers[a].hasOwnProperty(r) && o.renderLayerAnimation({
				layer: jQuery(o[t].layers[a][r]),
				frame: "frame_999",
				mode: "continue",
				remove: !0,
				id: t,
				allforce: i
			});
			for (var r in o[t].layers.static) o[t].layers.static.hasOwnProperty(r) && o.renderLayerAnimation({
				layer: jQuery(o[t].layers.static[r]),
				frame: "frame_999",
				mode: "continue",
				remove: !0,
				id: t,
				allforce: i
			})
		},
		renderLayerAnimation: function (e) {
			var i, a = e.layer,
				r = e.id,
				s = o[r].level,
				h = o[r]._L[a[0].id],
				f = void 0 !== h.timeline ? h.timeline.time() : void 0,
				v = !1,
				y = !1,
				_ = "none";
			if (("containerResized_2" !== e.caller && "swapSlideProgress_2" !== e.caller || !0 === h.animationRendered) && (h.animationRendered = !0, "preset" !== e.mode || !0 === h.frames.frame_1.timeline.waitoncall || void 0 !== h.scrollBasedOffset)) {
				if ("trigger" == e.mode && (h.triggeredFrame = e.frame), h._isstatic) {
					var k = "carousel" === o[r].sliderType && void 0 !== o[r].carousel.oldfocused ? o[r].carousel.oldfocused : void 0 === o[r].pr_lastshown_key ? 1 : parseInt(o[r].pr_lastshown_key, 0) + 1,
						S = "carousel" === o[r].sliderType ? void 0 === o[r].pr_next_key ? 0 === k ? 1 : k : parseInt(o[r].pr_next_key, 0) + 1 : void 0 === o[r].pr_processing_key ? k : parseInt(o[r].pr_processing_key, 0) + 1,
						L = k >= h.startslide && k <= h.endslide,
						T = S >= h.startslide && S <= h.endslide;
					if (_ = k === h.endslide && "continue" === e.mode || ("continue" === e.mode || k === h.endslide) && "none", !0 === e.allforce || !0 === _) {
						if ("continue" === e.mode && "frame_999" === e.frame && (T || void 0 === h.lastRequestedMainFrame)) return
					} else {
						if ("preset" === e.mode && (h.elementHovered || !T)) return;
						if ("rebuild" === e.mode && !L && !T) return;
						if ("start" === e.mode && T && "frame_1" === h.lastRequestedMainFrame) return;
						if (("start" === e.mode || "preset" === e.mode) && "frame_999" === h.lastRequestedMainFrame && !0 !== h.leftstage) return;
						if ("continue" === e.mode && "frame_999" === e.frame && (T || void 0 === h.lastRequestedMainFrame)) return;
						if ("start" === e.mode && !T) return
					}
				} else "start" === e.mode && "keep" !== h.triggercache && (h.triggeredFrame = void 0);
				for (var R in "start" === e.mode && (void 0 !== h.layerLoop && (h.layerLoop.count = 0), e.frame = void 0 === h.triggeredFrame ? 0 : h.triggeredFrame), "continue" !== e.mode && "trigger" !== e.mode && void 0 !== h.timeline && h.timeline.pause(0), "continue" !== e.mode && "trigger" !== e.mode || void 0 === h.timeline || h.timeline.pause(), h.timeline = tpGS.gsap.timeline({
						paused: !0
					}), "text" !== h.type && "button" !== h.type || void 0 !== h.splitText && (void 0 !== h.splitTextFix || "start" !== e.mode && "preset" !== e.mode) || (b({
						layer: a,
						id: r
					}), "start" === e.mode && (h.splitTextFix = !0)), h.ford)
					if (h.ford.hasOwnProperty(R)) {
						var O = h.ford[R],
							A = !1;
						if ("frame_0" !== O && "frame_hover" !== O && "loop" !== O) {
							if ("frame_999" === O && !h.frames[O].timeline.waitoncall && h.frames[O].timeline.start >= o[r].duration && !0 !== e.remove && (h.frames[O].timeline.waitoncall = !0), "start" === e.mode && "keep" !== h.triggercache && (h.frames[O].timeline.callstate = h.frames[O].timeline.waitoncall ? "waiting" : ""), "trigger" === e.mode && h.frames[O].timeline.waitoncall && (O === e.frame ? (h.frames[O].timeline.triggered = !0, h.frames[O].timeline.callstate = "called") : h.frames[O].timeline.triggered = !1), "rebuild" === e.mode || h.frames[O].timeline.triggered || (h.frames[O].timeline.callstate = h.frames[O].timeline.waitoncall ? "waiting" : ""), !1 !== e.fastforward) {
								if (("continue" === e.mode || "trigger" === e.mode) && !1 === y && O !== e.frame) continue;
								if (("rebuild" === e.mode || "preset" === e.mode) && !1 === y && void 0 !== h.triggeredFrame && O !== h.triggeredFrame) continue;
								(O === e.frame || "rebuild" === e.mode && O === h.triggeredFrame) && (y = !0)
							} else O === e.frame && (y = !0);
							if (O !== e.frame && h.frames[O].timeline.waitoncall && "called" !== h.frames[O].timeline.callstate && (v = !0), O !== e.frame && y && (v = !0 === v && h.frames[O].timeline.waitoncall ? "skiprest" : !0 !== v && v), void 0 === h.hideonfirststart && "frame_1" === O && h.frames[O].timeline.waitoncall && (h.hideonfirststart = !0), v && "waiting" === h.frames[O].timeline.callstate && "preset" === e.mode && 1 != h.firstTimeRendered) {
								if (h._isstatic && void 0 === h.currentframe) continue;
								A = !0, h.firstTimeRendered = !0
							} else if ("skiprest" === v || "called" !== h.frames[O].timeline.callstate && v && e.toframe !== O) continue;
							if ("frame_999" !== O || !1 !== _ || "continue" !== e.mode && "start" !== e.mode && "rebuild" !== e.mode) {
								h.fff = "frame_1" === O && ("trigger" !== e.mode || "frame_999" === h.currentframe || "frame_0" === h.currentframe || void 0 === h.currentframe), "trigger" === e.mode && "frame_1" === e.frame && !1 === h.leftstage && (h.fff = !1), A || (h.frames[O].timeline.callstate = "called", h.currentframe = O);
								var I = h.frames[O],
									C = h.fff ? h.frames.frame_0 : void 0,
									z = tpGS.gsap.timeline(),
									P = tpGS.gsap.timeline(),
									B = h.c,
									M = void 0 !== I.sfx && w(I.sfx.effect, h.m, I.timeline.ease),
									G = I.timeline.speed / 1e3,
									D = 0,
									N = x({
										id: r,
										frame: I,
										layer: a,
										ease: I.timeline.ease,
										splitAmount: B.length,
										target: O,
										forcefilter: void 0 !== h.frames.frame_hover && void 0 !== h.frames.frame_hover.filter
									}),
									H = h.fff ? x({
										id: r,
										frame: C,
										layer: a,
										ease: I.timeline.ease,
										splitAmount: B.length,
										target: "frame_0"
									}) : void 0,
									W = void 0 !== I.mask ? x({
										id: r,
										frame: {
											transform: {
												x: I.mask.x,
												y: I.mask.y
											}
										},
										layer: a,
										ease: N.ease,
										target: "mask"
									}) : void 0,
									F = void 0 !== W && h.fff ? x({
										id: r,
										frame: {
											transform: {
												x: C.mask.x,
												y: C.mask.y
											}
										},
										layer: a,
										ease: N.ease,
										target: "frommask"
									}) : void 0,
									j = N.ease;
								if (N.force3D = !0, "block" === M.type && (M.ft[0].background = I.sfx.fxc, M.ft[0].visibility = "visible", M.ft[1].visibility = "visible", z.add(tpGS.gsap.fromTo(M.bmask_in, G / 2, M.ft[0], M.ft[1], 0)), z.add(tpGS.gsap.fromTo(M.bmask_in, G / 2, M.ft[1], M.t, G / 2)), "frame_0" !== O && "frame_1" !== O || (H.opacity = 0)), void 0 !== I.color ? N.color = I.color : void 0 !== h.color && "npc" !== h.color[s] && (N.color = h.color[s]), void 0 !== C && void 0 !== C.color ? H.color = C.color : void 0 !== C && void 0 !== h.color && "npc" !== h.color[s] && (H.color = h.color[s]), void 0 !== I.bgcolor ? I.bgcolor.indexOf("gradient") >= 0 ? N.background = I.bgcolor : N.backgroundColor = I.bgcolor : !0 === h.bgcolinuse && (h.bgcol.indexOf("gradient") >= 0 ? N.background = h.bgcol : N.backgroundColor = h.bgcol), void 0 !== C && (void 0 !== C.bgcolor ? C.bgcolor.indexOf("gradient") >= 0 ? H.background = C.bgcolor : H.backgroundColor = C.bgcolor : !0 === h.bgcolinuse && (h.bgcol.indexOf("gradient") >= 0 ? H.background = h.bgcol : H.backgroundColor = h.bgcol)), void 0 !== h.splitText && !1 !== h.splitText)
									for (var E in t)
										if (void 0 !== I[t[E]] && !h.quickRendering) {
											var V = h.splitText[t[E]],
												Y = x({
													id: r,
													frame: I,
													source: t[E],
													ease: j,
													layer: a,
													splitAmount: V.length,
													target: O + "_" + t[E]
												}),
												Q = h.fff ? x({
													id: r,
													frame: C,
													ease: Y.ease,
													source: t[E],
													layer: a,
													splitAmount: V.length,
													target: "frame_0_" + t[E]
												}) : void 0,
												X = h.frames[O].dosplit ? void 0 === I[t[E]].delay ? .05 : I[t[E]].delay / 100 : 0;
											h.color[s] === N.color && "frame_1" === O || (Y.color = N.color), void 0 !== H && h.color[s] !== H.color && (Q.color = H.color), void 0 !== Q && Q.color !== N.color && (Y.color = N.color);
											var J = o.clone(Y),
												q = h.fff ? o.clone(Q) : void 0,
												U = I[t[E]].dir;
											delete J.dir, J.data = {
												splitted: !0
											}, J.stagger = "center" === U || "edge" === U ? c({
												each: X,
												offset: X / 2,
												from: U
											}) : {
												each: X,
												from: U
											}, J.duration = G, void 0 !== q && delete q.dir, h.fff ? z.add(P.fromTo(V, q, J), 0) : z.add(P.to(V, J), 0), D = Math.max(D, V.length * X)
										}
								if (G += D, void 0 === i && (i = "isometric" === o[r].perspectiveType ? 0 : "local" === o[r].perspectiveType ? void 0 !== N.transformPerspective ? N.transformPerspective : h.fff && void 0 !== H.transfromPerspective ? H.transfromPerspective : o[r].perspective : o[r].perspective), h.knowTransformPerspective = i, h.pxundermask || void 0 !== W && (void 0 !== C && "hidden" === C.mask.overflow || "hidden" === I.mask.overflow)) z.add(tpGS.gsap.to(h.m, .001, {
									overflow: "hidden"
								}), 0), "column" === h.type && z.add(tpGS.gsap.to(h.cbgmask, .001, {
									overflow: "hidden"
								}), 0), h.btrans && (F && (F.rotationX = h.btrans.rX, F.rotationY = h.btrans.rY, F.rotationZ = h.btrans.rZ, F.opacity = h.btrans.o), W.rotationX = h.btrans.rX, W.rotationY = h.btrans.rY, W.rotationZ = h.btrans.rZ, W.opacity = h.btrans.o), h.fff ? z.add(tpGS.gsap.fromTo([h.m, h.cbgmask], G, o.clone(F), o.clone(W)), .001) : z.add(tpGS.gsap.to([h.m, h.cbgmask], G, o.clone(W)), .001);
								else if (void 0 !== h.btrans) {
									var Z = {
										x: 0,
										y: 0,
										filter: "none",
										opacity: h.btrans.o,
										rotationX: h.btrans.rX,
										rotationY: h.btrans.rY,
										rotationZ: h.btrans.rZ,
										overflow: "visible"
									};
									0 === h.btrans.rX && 0 == h.btrans.rY || (h.maskHasPerspective = !0, Z.transformPerspective = i), z.add(tpGS.gsap.to(h.m, .001, Z), 0)
								} else z.add(tpGS.gsap.to(h.m, .001, {
									clearProps: "transform",
									overflow: "visible"
								}), 0);
								N.force3D = "auto", h.fff ? (N.visibility = "visible", void 0 !== h.cbg && z.fromTo(h.cbg, G, H, N, 0), o[r].BUG_safari_clipPath && (H.clipPath || N.clipPath || h.spike) && (H.z && parseInt(H.z, 10) || (H.z = -1e-4), N.z && parseInt(N.z, 10) || (N.z = 0)), void 0 !== h.cbg && "column" === h.type ? z.fromTo(B, G, n(H), n(N), 0) : z.fromTo(B, G, H, N, 0), z.invalidate()) : ("frame_999" !== h.frame && (N.visibility = "visible"), void 0 !== h.cbg && z.to(h.cbg, G, N, 0), !o[r].BUG_safari_clipPath || !N.clipPath && !h.spike || N.z && parseInt(N.z, 10) || (N.z = 0 - .01 * Math.random()), void 0 !== h.cbg && "column" === h.type ? z.to(B, G, n(N), 0) : z.to(B, G, N, 0)), void 0 !== j && "object" != typeof j && "function" != typeof j && j.indexOf("SFXBounce") >= 0 && z.to(B, G, {
									scaleY: .5,
									scaleX: 1.3,
									ease: N.ease + "-squash",
									transformOrigin: "bottom"
								}, 1e-4);
								var K = "trigger" !== e.mode && (!0 !== v && "skiprest" !== v || "rebuild" !== e.mode) || e.frame === O || void 0 === I.timeline.start || !o.isNumeric(I.timeline.start) ? "+=0" === I.timeline.start || void 0 === I.timeline.start ? "+=0.05" : parseInt(I.timeline.start, 0) / 1e3 : "+=" + parseInt(I.timeline.startRelative, 0) / 1e3;
								h.timeline.addLabel(O, K), h.timeline.add(z, K), h.timeline.addLabel(O + "_end", "+=0.01"), z.eventCallback("onStart", p, [{
									id: r,
									frame: O,
									L: a,
									tPE: i
								}]), "true" == h.animationonscroll || 1 == h.animationonscroll ? (z.eventCallback("onUpdate", g, [{
									id: r,
									frame: O,
									L: a
								}]), z.smoothChildTiming = !0) : z.eventCallback("onUpdate", g, [{
									id: r,
									frame: O,
									L: a
								}]), z.eventCallback("onComplete", u, [{
									id: r,
									frame: O,
									L: a,
									tPE: i
								}])
							}
						}
					}
				if (void 0 !== h.frames.loop) {
					var $ = parseInt(h.frames.loop.timeline.speed, 0) / 1e3,
						ee = parseInt(h.frames.loop.timeline.start) / 1e3 || 0,
						te = "trigger" !== e.mode && "frame_999" !== e.frame || "frame_999" !== e.frame ? .2 : 0,
						ie = ee + te;
					h.loop = {
						root: tpGS.gsap.timeline({}),
						preset: tpGS.gsap.timeline({}),
						move: tpGS.gsap.timeline({
							repeat: -1,
							yoyo: h.frames.loop.timeline.yoyo_move
						}),
						rotate: tpGS.gsap.timeline({
							repeat: -1,
							yoyo: h.frames.loop.timeline.yoyo_rotate
						}),
						scale: tpGS.gsap.timeline({
							repeat: -1,
							yoyo: h.frames.loop.timeline.yoyo_scale
						}),
						filter: tpGS.gsap.timeline({
							repeat: -1,
							yoyo: h.frames.loop.timeline.yoyo_filter
						})
					};
					var ae = h.frames.loop.frame_0,
						re = h.frames.loop.frame_999,
						oe = "blur(" + parseInt(ae.blur || 0, 0) + "px) grayscale(" + parseInt(ae.grayscale || 0, 0) + "%) brightness(" + parseInt(ae.brightness || 100, 0) + "%)",
						se = "blur(" + (re.blur || 0) + "px) grayscale(" + (re.grayscale || 0) + "%) brightness(" + (re.brightness || 100) + "%)";
					if (h.loop.root.add(h.loop.preset, 0), h.loop.root.add(h.loop.move, te), h.loop.root.add(h.loop.rotate, te), h.loop.root.add(h.loop.scale, te), h.loop.root.add(h.loop.filter, te), "blur(0px) grayscale(0%) brightness(100%)" === oe && "blur(0px) grayscale(0%) brightness(100%)" === se && (oe = "none", se = "none"), re.originX = ae.originX, re.originY = ae.originY, re.originZ = ae.originZ, void 0 === i && (i = "isometric" === o[r].perspectiveType ? 0 : "local" === o[r].perspectiveType && void 0 !== N ? void 0 !== N.transformPerspective ? N.transformPerspective : h.fff && void 0 !== H.transfromPerspective ? H.transfromPerspective : o[r].perspective : o[r].perspective), h.frames.loop.timeline.curved) {
						var ne = parseInt(h.frames.loop.timeline.radiusAngle, 0) || 0,
							le = [{
								x: (ae.x - ae.xr) * o[r].CM.w,
								y: 0,
								z: (ae.z - ae.zr) * o[r].CM.w
							}, {
								x: 0,
								y: (ae.y + ae.yr) * o[r].CM.w,
								z: 0
							}, {
								x: (re.x + re.xr) * o[r].CM.w,
								y: 0,
								z: (re.z + re.zr) * o[r].CM.w
							}, {
								x: 0,
								y: (re.y - re.yr) * o[r].CM.w,
								z: 0
							}],
							de = {
								type: "thru",
								curviness: h.frames.loop.timeline.curviness,
								path: [],
								autoRotate: h.frames.loop.timeline.autoRotate
							};
						for (var ce in le) le.hasOwnProperty(ce) && (de.path[ce] = le[ne], ne = ++ne == le.length ? 0 : ne);
						("trigger" !== e.mode && "frame_999" !== e.frame || "frame_999" !== e.frame) && h.loop.preset.fromTo(h.lp, te, {
							"-webkit-filter": oe,
							filter: oe,
							x: 0,
							y: 0,
							z: 0,
							minWidth: h._incolumn || h._ingroup ? "100%" : void 0 === h.eow ? 0 : h.eow,
							minHeight: h._incolumn || h._ingroup ? "100%" : void 0 === h.eoh ? 0 : h.eoh,
							scaleX: 1,
							scaleY: 1,
							skewX: 0,
							skewY: 0,
							rotationX: 0,
							rotationY: 0,
							rotationZ: 0,
							transformPerspective: i,
							transformOrigin: re.originX + " " + re.originY + " " + re.originZ,
							opacity: 1
						}, d({
							x: de.path[3].x,
							y: de.path[3].y,
							z: de.path[3].z,
							scaleX: ae.scaleX,
							skewX: ae.skewX,
							skewY: ae.skewY,
							scaleY: ae.scaleY,
							rotationX: ae.rotationX,
							rotationY: ae.rotationY,
							rotationZ: ae.rotationZ,
							"-webkit-filter": oe,
							filter: oe,
							ease: "sine.inOut",
							opacity: ae.opacity
						}), 0), l(de) && h.loop.move.to(h.lp, h.frames.loop.timeline.yoyo_move ? $ / 2 : $, {
							motionPath: de,
							ease: h.frames.loop.timeline.ease
						})
					} else("trigger" !== e.mode && "frame_999" !== e.frame || "frame_999" !== e.frame) && h.loop.preset.fromTo(h.lp, te, {
						"-webkit-filter": oe,
						filter: oe,
						x: 0,
						y: 0,
						z: 0,
						minWidth: h._incolumn || h._ingroup ? "100%" : void 0 === h.eow ? 0 : h.eow,
						minHeight: h._incolumn || h._ingroup ? "100%" : void 0 === h.eoh ? 0 : h.eoh,
						scaleX: 1,
						scaleY: 1,
						skewX: 0,
						skewY: 0,
						rotationX: 0,
						rotationY: 0,
						rotationZ: 0,
						transformPerspective: i,
						transformOrigin: re.originX + " " + re.originY + " " + re.originZ,
						opacity: 1
					}, d({
						x: ae.x * o[r].CM.w,
						y: ae.y * o[r].CM.w,
						z: ae.z * o[r].CM.w,
						scaleX: ae.scaleX,
						skewX: ae.skewX,
						skewY: ae.skewY,
						scaleY: ae.scaleY,
						rotationX: ae.rotationX,
						rotationY: ae.rotationY,
						rotationZ: ae.rotationZ,
						ease: "sine.out",
						opacity: ae.opacity,
						"-webkit-filter": oe,
						filter: oe
					}), 0), h.loop.move.to(h.lp, h.frames.loop.timeline.yoyo_move ? $ / 2 : $, {
						x: re.x * o[r].CM.w,
						y: re.y * o[r].CM.w,
						z: re.z * o[r].CM.w,
						ease: h.frames.loop.timeline.ease
					});
					h.loop.rotate.to(h.lp, h.frames.loop.timeline.yoyo_rotate ? $ / 2 : $, {
						rotationX: re.rotationX,
						rotationY: re.rotationY,
						rotationZ: re.rotationZ,
						ease: h.frames.loop.timeline.ease
					}), h.loop.scale.to(h.lp, h.frames.loop.timeline.yoyo_scale ? $ / 2 : $, d({
						scaleX: re.scaleX,
						scaleY: re.scaleY,
						skewX: re.skewX,
						skewY: re.skewY,
						ease: h.frames.loop.timeline.ease
					}));
					var pe = {
						opacity: re.opacity || 1,
						ease: h.frames.loop.timeline.ease,
						"-webkit-filter": se,
						filter: se
					};
					h.loop.filter.to(h.lp, h.frames.loop.timeline.yoyo_filter ? $ / 2 : $, pe), h.timeline.add(h.loop.root, ie)
				}
				if (void 0 !== h.frames.frame_hover && ("start" === e.mode || void 0 === h.hoverframeadded)) {
					h.hoverframeadded = !0;
					var ge = h.frames.frame_hover.timeline.speed / 1e3;
					ge = 0 === ge ? 1e-5 : ge, h.hoverlistener || (h.hoverlistener = !0, o.document.on("mouseenter mousemove", ("column" === h.type ? "#" + h.cbg[0].id + "," : "") + "#" + h.c[0].id, function (e) {
						if ("mousemove" !== e.type || !0 !== h.ignoremousemove) {
							if (h.animationonscroll || h.readyForHover) {
								if (h.elementHovered = !0, h.hovertimeline || (h.hovertimeline = tpGS.gsap.timeline({
										paused: !0
									})), 0 == h.hovertimeline.progress() && (void 0 === h.lastHoveredTimeStamp || (new Date).getTime() - h.lastHoveredTimeStamp > 150) && (h.ignoremousemove = !0, h.hovertimeline.to([h.m, h.cbgmask], ge, {
										overflow: h.frames.frame_hover.mask ? "hidden" : "visible"
									}, 0), "column" === h.type && h.hovertimeline.to(h.cbg, ge, o.clone(m(h.frames.frame_hover, h.cbg)), 0), "text" !== h.type && "button" !== h.type || void 0 === h.splitText || !1 === h.splitText || h.hovertimeline.to([h.splitText.lines, h.splitText.words, h.splitText.chars], ge, {
										color: h.frames.frame_hover.color,
										ease: h.frames.frame_hover.transform.ease
									}, 0), "column" === h.type ? h.hovertimeline.to(h.c, ge, n(o.clone(m(h.frames.frame_hover, h.c))), 0) : h.hovertimeline.to(h.c, ge, o.clone(m(h.frames.frame_hover, h.c)), 0), "svg" === h.type)) {
									h.svgHTemp = o.clone(h.svgH);
									var t = Array.isArray(h.svgHTemp.fill) ? h.svgHTemp.fill[o[r].level] : h.svgHTemp.fill;
									h.svgHTemp.fill = t, h.hovertimeline.to(h.svg, ge, h.svgHTemp, 0), h.hovertimeline.to(h.svgPath, ge, {
										fill: t
									}, 0)
								}
								h.hovertimeline.play()
							}
							h.lastHoveredTimeStamp = (new Date).getTime()
						}
					}), o.document.on("mouseleave", ("column" === h.type ? "#" + h.cbg[0].id + "," : "") + "#" + h.c[0].id, function () {
						h.elementHovered = !1, (h.animationonscroll || h.readyForHover) && void 0 !== h.hovertimeline && (h.hovertimeline.reverse(), h.hovertimeline.eventCallback("onReverseComplete", o.hoverReverseDone, [{
							id: r,
							L: a
						}]))
					}))
				}
				if (A || (h.lastRequestedMainFrame = "start" === e.mode ? "frame_1" : "continue" === e.mode ? void 0 === e.frame ? h.currentframe : e.frame : h.lastRequestedMainFrame), void 0 !== e.totime ? h.tSTART = e.totime : void 0 !== f && void 0 === e.frame ? h.tSTART = f : void 0 !== e.frame ? h.tSTART = e.frame : h.tSTART = 0, 0 === h.tSTART && void 0 === h.startedAnimOnce && void 0 === h.leftstage && void 0 === h.startedAnimOnce && !0 === h.hideonfirststart && "preset" === e.mode && (o[r]._L[a[0].id].pVisRequest = 0, h.hideonfirststart = !1), "frame_999" !== h.tSTART && "frame_999" !== h.triggeredFrame || !h.leftstage && void 0 !== h.startedAnimOnce) {
					if ("true" != h.animationonscroll && 1 != h.animationonscroll ? h.timeline.play(h.tSTART) : h.timeline.time(h.tSTART), jQuery.inArray(h.type, ["group", "row", "column"]) >= 0 && void 0 !== e.frame) {
						if (void 0 === h.childrenJS)
							for (var E in h.childrenJS = {}, o[r]._L) void 0 !== o[r]._L[E]._lig && void 0 !== o[r]._L[E]._lig[0] && o[r]._L[E]._lig[0].id === a[0].id && o[r]._L[E]._lig[0].id !== o[r]._L[E].c[0].id && (h.childrenJS[o[r]._L[E].c[0].id] = o[r]._L[E].c);
						e.frame = "0" == e.frame ? "frame_0" : e.frame, e.frame = "1" == e.frame ? "frame_1" : e.frame, e.frame = "999" == e.frame ? "frame_999" : e.frame;
						var ue = void 0 === e.totime ? void 0 !== h.frames[e.frame].timeline.startAbsolute ? parseInt(h.frames[e.frame].timeline.startAbsolute, 0) / 1e3 : void 0 !== h.frames[e.frame].timeline.start ? o.isNumeric(h.frames[e.frame].timeline.start) ? parseInt(h.frames[e.frame].timeline.start, 0) / 1e3 : 0 : .001 : e.totime;
						if (!0 === e.updateChildren)
							for (var E in h.childrenJS) h.childrenJS.hasOwnProperty(E) && o.renderLayerAnimation({
								layer: h.childrenJS[E],
								fastforward: !1,
								id: r,
								mode: "continue",
								updateChildren: !0,
								totime: ue
							});
						else
							for (var E in h.childrenJS) h.childrenJS.hasOwnProperty(E) && o[r]._L[E].pausedTrueParrent && (o.renderLayerAnimation({
								layer: h.childrenJS[E],
								fastforward: !1,
								id: r,
								mode: "continue",
								updateChildren: !0,
								totime: ue
							}), o[r]._L[E].pausedTrueParrent = !1)
					}
				} else;
			}
		}
	});
	var n = function (e) {
			var t = o.clone(e);
			return delete t.backgroundColor, delete t.background, delete t.backgroundImage, delete t.borderSize, delete t.borderStyle, t
		},
		l = function (e) {
			if (void 0 !== e && void 0 !== e.path && Array.isArray(e.path)) {
				var t = 0,
					i = 0;
				for (var a in e.path) !e.path.hasOwnProperty(a) || t > 0 || i > 0 || (t += e.path[a].x, i += e.path[a].y);
				return 0 != t || 0 != i
			}
		},
		d = function (e) {
			return void 0 === e.skewX && delete e.skewX, void 0 === e.skewY && delete e.skewY, e
		},
		c = function (e) {
			e.from = "edge" === e.from ? "edges" : e.from;
			var t = tpGS.gsap.utils.distribute(e);
			return function (i, a, r) {
				return t(i, a, r) + (i <= r.length / 2 ? 0 : e.offset || 0)
			}
		},
		p = function (e) {
			o[e.id].BUG_safari_clipPath && e.L[0].classList.remove("rs-pelock"), (o[e.id]._L[e.L[0].id]._ingroup || o[e.id]._L[e.L[0].id]._incolumn || o[e.id]._L[e.L[0].id]._inrow) && void 0 !== o[e.id]._L[o[e.id]._L[e.L[0].id]._ligid] && void 0 !== o[e.id]._L[o[e.id]._L[e.L[0].id]._ligid].timeline && (o[e.id]._L[o[e.id]._L[e.L[0].id]._ligid].timeline.isActive() || void 0 === o[e.id]._L[e.L[0].id] || void 0 === o[e.id]._L[e.L[0].id].frames[o[e.id]._L[e.L[0].id].timeline.currentLabel()] || (null == o[e.id]._L[o[e.id]._L[e.L[0].id]._ligid].timezone || o[e.id]._L[o[e.id]._L[e.L[0].id]._ligid].timezone.to <= parseInt(o[e.id]._L[e.L[0].id].frames[o[e.id]._L[e.L[0].id].timeline.currentLabel()].timeline.start, 0)) && !0 !== o[e.id]._L[e.L[0].id].animOnScrollForceDisable && (o[e.id]._L[e.L[0].id].pausedTrueParrent = !0, o[e.id]._L[e.L[0].id].timeline.pause()));
			var t = o[e.id]._L[e.L[0].id],
				i = t.hovertimeline;
			i && i.time() > 0 && (i.pause(), i.time(0), i.kill(), delete t.hovertimeline), delete o[e.id]._L[e.L[0].id].childrenAtStartNotVisible, o[e.id]._L[e.L[0].id].pVisRequest = 1;
			var a = {
				layer: e.L
			};
			o[e.id]._L[e.L[0].id].ignoremousemove = !1, o[e.id]._L[e.L[0].id].leftstage = !1, o[e.id]._L[e.L[0].id].readyForHover = !1, void 0 !== o[e.id]._L[e.L[0].id].layerLoop && o[e.id]._L[e.L[0].id].layerLoop.from === e.frame && o[e.id]._L[e.L[0].id].layerLoop.count++, "frame_1" === e.frame && "Safari" === window.RSBrowser && void 0 === o[e.id]._L[e.L[0].id].safariRenderIssue && (tpGS.gsap.set([o[e.id]._L[e.L[0].id].c], {
				opacity: 1
			}), o[e.id]._L[e.L[0].id].safariRenderIssue = !0), "frame_999" !== e.frame && (o[e.id]._L[e.L[0].id].startedAnimOnce = !0, o[e.id]._L[e.L[0].id].pPeventsRequest = o[e.id]._L[e.L[0].id].noPevents ? "none" : "auto"), a.eventtype = "frame_0" === e.frame || "frame_1" === e.frame ? "enterstage" : "frame_999" === e.frame ? "leavestage" : "framestarted", window.requestAnimationFrame(function () {
				o[e.id]._L[e.L[0].id]._ingroup && !0 !== o[e.id]._L[o[e.id]._L[e.L[0].id]._lig[0].id].frames.frame_1.timeline.waitoncall && (o[e.id]._L[o[e.id]._L[e.L[0].id]._lig[0].id].pVisRequest = 1), o.requestLayerUpdates(e.id, a.eventtype, e.L[0].id, void 0 !== o[e.id]._L[e.L[0].id].frames[e.frame] && void 0 !== o[e.id]._L[e.L[0].id].frames[e.frame].timeline && 0 == o[e.id]._L[e.L[0].id].frames[e.frame].timeline.usePerspective ? e.tPE : "ignore")
			}), a.layertype = o[e.id]._L[e.L[0].id].type, a.frame_index = e.frame, a.layersettings = o[e.id]._L[e.L[0].id], o[e.id].c.trigger("revolution.layeraction", [a]), "enterstage" === a.eventtype && o.toggleState(o[e.id]._L[e.L[0].id].layertoggledby), "frame_1" === e.frame && o.animcompleted(e.L, e.id)
		},
		g = function (e) {
			"frame_999" === e.frame && (o[e.id]._L[e.L[0].id].pVisRequest = 1, o[e.id]._L[e.L[0].id].pPeventsRequest = o[e.id]._L[e.L[0].id].noPevents ? "none" : "auto", o[e.id]._L[e.L[0].id].leftstage = !1, window.requestAnimationFrame(function () {
				o.requestLayerUpdates(e.id, "update", e.L[0].id)
			}))
		},
		u = function (e) {
			var t = !0;
			if ("column" === o[e.id]._L[e.L[0].id].type || "row" === o[e.id]._L[e.L[0].id].type || "group" === o[e.id]._L[e.L[0].id].type) {
				var i = o[e.id]._L[e.L[0].id].timeline.currentLabel(),
					a = jQuery.inArray(i, o[e.id]._L[e.L[0].id].ford);
				a++, a = o[e.id]._L[e.L[0].id].ford.length > a ? o[e.id]._L[e.L[0].id].ford[a] : i, void 0 !== o[e.id]._L[e.L[0].id].frames[a] && void 0 !== o[e.id]._L[e.L[0].id].frames[i] && (o[e.id]._L[e.L[0].id].timezone = {
					from: parseInt(o[e.id]._L[e.L[0].id].frames[i].timeline.startAbsolute, 0),
					to: parseInt(o[e.id]._L[e.L[0].id].frames[a].timeline.startAbsolute, 0)
				})
			}
			if ("frame_999" !== e.frame && o[e.id].isEdge && "shape" === o[e.id]._L[e.L[0].id].type) {
				var r = o[e.id]._L[e.L[0].id].c[0].style.opacity;
				o[e.id]._L[e.L[0].id].c[0].style.opacity = r - 1e-4, tpGS.gsap.set(o[e.id]._L[e.L[0].id].c[0], {
					opacity: r - .001,
					delay: .05
				}), tpGS.gsap.set(o[e.id]._L[e.L[0].id].c[0], {
					opacity: r,
					delay: .1
				})
			}
			var s = {};
			s.layer = e.L, s.eventtype = "frame_0" === e.frame || "frame_1" === e.frame ? "enteredstage" : "frame_999" === e.frame ? "leftstage" : "frameended", o[e.id]._L[e.L[0].id].readyForHover = !0, s.layertype = o[e.id]._L[e.L[0].id].type, s.frame_index = e.frame, s.layersettings = o[e.id]._L[e.L[0].id], o[e.id].c.trigger("revolution.layeraction", [s]), "frame_999" === e.frame && "leftstage" === s.eventtype ? (o[e.id]._L[e.L[0].id].leftstage = !0, o[e.id]._L[e.L[0].id].pVisRequest = 0, o[e.id]._L[e.L[0].id].pPeventsRequest = "none", t = !1, window.requestAnimationFrame(function () {
				o.requestLayerUpdates(e.id, "leftstage", e.L[0].id)
			})) : (e.L[0].id, void 0 !== o[e.id]._L[e.L[0].id].frames[e.frame] && void 0 !== o[e.id]._L[e.L[0].id].frames[e.frame].timeline && 0 == o[e.id]._L[e.L[0].id].frames[e.frame].timeline.usePerspective && window.requestAnimationFrame(function () {
				o.requestLayerUpdates(e.id, "frameended", e.L[0].id, e.tPE)
			})), "leftstage" === s.eventtype && void 0 !== o[e.id].videos && void 0 !== o[e.id].videos[e.L[0].id] && o.stopVideo && o.stopVideo(e.L, e.id), "column" === o[e.id]._L[e.L[0].id].type && tpGS.gsap.to(o[e.id]._L[e.L[0].id].cbg, .01, {
				visibility: "visible"
			}), "leftstage" === s.eventtype && (o.unToggleState(e.layertoggledby), "video" === o[e.id]._L[e.L[0].id].type && o.resetVideo && setTimeout(function () {
				o.resetVideo(e.L, e.id)
			}, 100)), o[e.id].BUG_safari_clipPath && !t && e.L[0].classList.add("rs-pelock"), void 0 !== o[e.id]._L[e.L[0].id].layerLoop && o[e.id]._L[e.L[0].id].layerLoop.to === e.frame && (-1 == o[e.id]._L[e.L[0].id].layerLoop.repeat || o[e.id]._L[e.L[0].id].layerLoop.repeat > o[e.id]._L[e.L[0].id].layerLoop.count) && o.renderLayerAnimation({
				layer: o[e.id]._L[e.L[0].id].c,
				frame: o[e.id]._L[e.L[0].id].layerLoop.from,
				updateChildren: o[e.id]._L[e.L[0].id].layerLoop.children,
				mode: "continue",
				fastforward: !0 === o[e.id]._L[e.L[0].id].layerLoop.keep,
				id: e.id
			})
		},
		m = function (e, t) {
			var i, a = o.clone(e.transform);
			return (a.originX || a.originY || a.originZ) && (a.transformOrigin = (void 0 === a.originX ? "50%" : a.originX) + " " + (void 0 === a.originY ? "50%" : a.originY) + " " + (void 0 === a.originZ ? "50%" : a.originZ), delete a.originX, delete a.originY, delete a.originZ), void 0 !== e && void 0 !== e.filter && (a["-webkit-filter"] = "blur(" + (e.filter.blur || 0) + "px) grayscale(" + (e.filter.grayscale || 0) + "%) brightness(" + (e.filter.brightness || 100) + "%)", a.filter = "blur(" + (e.filter.blur || 0) + "px) grayscale(" + (e.filter.grayscale || 0) + "%) brightness(" + (e.filter.brightness || 100) + "%)"), a.color = void 0 === a.color ? "rgba(255,255,255,1)" : a.color, a.force3D = "auto", void 0 !== a.borderRadius && ((i = a.borderRadius.split(" ")).length, a.borderTopLeftRadius = i[0], a.borderTopRightRadius = i[1], a.borderBottomRightRadius = i[2], a.borderBottomLeftRadius = i[3], delete a.borderRadius), void 0 !== a.borderWidth && ((i = a.borderWidth.split(" ")).length, a.borderTopWidth = i[0], a.borderRightWidth = i[1], a.borderBottomWidth = i[2], a.borderLeftWidth = i[3], delete a.borderWidth), a.backgroundImage && "string" == typeof a.backgroundImage && -1 !== a.backgroundImage.search("gradient") && 180 !== f(t.css("backgroundImage")) && 180 === f(a.backgroundImage) && (a.backgroundImage = h(a.backgroundImage, 180)), a
		},
		h = function (e, t) {
			var i = (e = e.split("("))[0];
			return e.shift(), i + "(" + t + "deg, " + e.join("(")
		},
		f = function (e) {
			if (-1 !== e.search("deg,")) {
				var t = e.split("deg,")[0];
				if (-1 !== t.search(/\(/)) return parseInt(t.split("(")[1], 10)
			}
			return 180
		},
		v = function (e, t) {
			if (void 0 !== e && e.indexOf("oc:t") >= 0) return {};
			e = void 0 === e ? "" : e.split(";");
			var i = {
				fill: o.revToResp("#ffffff", o[t].rle),
				stroke: "transparent",
				"stroke-width": "0px",
				"stroke-dasharray": "0",
				"stroke-dashoffset": "0"
			};
			for (var a in e)
				if (e.hasOwnProperty(a)) {
					var r = e[a].split(":");
					switch (r[0]) {
						case "c":
							i.fill = o.revToResp(r[1], o[t].rle, void 0, "||");
							break;
						case "sw":
							i["stroke-width"] = r[1];
							break;
						case "sc":
							i.stroke = r[1];
							break;
						case "so":
							i["stroke-dashoffset"] = r[1];
							break;
						case "sa":
							i["stroke-dasharray"] = r[1]
					}
				}
			return i
		},
		y = function (e) {
			return "c" === e ? "center" : "l" === e ? "left" : "r" === e ? "right" : e
		},
		b = function (e) {
			var t = o[e.id]._L[e.layer[0].id],
				i = !1;
			if (t.splitText && !1 !== t.splitText && t.splitText.revert(), "text" === t.type || "button" === t.type) {
				for (var a in t.frames)
					if (void 0 !== t.frames[a].chars || void 0 !== t.frames[a].words || void 0 !== t.frames[a].lines) {
						i = !0;
						break
					}
				t.splitText = !!i && new tpGS.SplitText(t.c, {
					type: "lines,words,chars",
					wordsClass: "rs_splitted_words",
					linesClass: "rs_splitted_lines",
					charsClass: "rs_splitted_chars"
				})
			} else t.splitText = !1
		},
		w = function (e, t, i) {
			if (void 0 !== e && e.indexOf("block") >= 0) {
				var a = {};
				switch (0 === t[0].getElementsByClassName("tp-blockmask_in").length && (t.append('<div class="tp-blockmask_in"></div>'), t.append('<div class="tp-blockmask_out"></div>')), i = void 0 === i ? "power3.inOut" : i, a.ft = [{
					scaleY: 1,
					scaleX: 0,
					transformOrigin: "0% 50%"
				}, {
					scaleY: 1,
					scaleX: 1,
					ease: i,
					immediateRender: !1
				}], a.t = {
					scaleY: 1,
					scaleX: 0,
					transformOrigin: "100% 50%",
					ease: i,
					immediateRender: !1
				}, a.bmask_in = t.find(".tp-blockmask_in"), a.bmask_out = t.find(".tp-blockmask_out"), a.type = "block", e) {
					case "blocktoleft":
					case "blockfromright":
						a.ft[0].transformOrigin = "100% 50%", a.t.transformOrigin = "0% 50%";
						break;
					case "blockfromtop":
					case "blocktobottom":
						a.ft = [{
							scaleX: 1,
							scaleY: 0,
							transformOrigin: "50% 0%"
						}, {
							scaleX: 1,
							scaleY: 1,
							ease: i,
							immediateRender: !1
						}], a.t = {
							scaleX: 1,
							scaleY: 0,
							transformOrigin: "50% 100%",
							ease: i,
							immediateRender: !1
						};
						break;
					case "blocktotop":
					case "blockfrombottom":
						a.ft = [{
							scaleX: 1,
							scaleY: 0,
							transformOrigin: "50% 100%"
						}, {
							scaleX: 1,
							scaleY: 1,
							ease: i,
							immediateRender: !1
						}], a.t = {
							scaleX: 1,
							scaleY: 0,
							transformOrigin: "50% 0%",
							ease: i,
							immediateRender: !1
						}
				}
				return a.ft[1].overwrite = "auto", a.t.overwrite = "auto", a
			}
			return !1
		},
		_ = function (e, t, i, a, r) {
			return 0 === o[r].sdir || void 0 === t ? e : ("mask" === i ? a = "x" === a ? "mX" : "y" === a ? "mY" : a : "chars" === i ? a = "x" === a ? "cX" : "y" === a ? "cY" : "dir" === a ? "cD" : a : "words" === i ? a = "x" === a ? "wX" : "y" === a ? "wY" : "dir" === a ? "wD" : a : "lines" === i && (a = "x" === a ? "lX" : "y" === a ? "lY" : "dir" === a ? "lD" : a), void 0 === t[a] || !1 === t[a] ? e : void 0 !== t && !0 === t[a] ? "t" === e || "top" === e ? "b" : "b" === e || "bottom" === e ? "t" : "l" === e || "left" === e ? "r" : "r" === e || "right" === e ? "l" : -1 * e : void 0)
		},
		x = function (e) {
			var t, i = o[e.id]._L[e.layer[0].id],
				a = void 0 === e.source ? o.clone(e.frame.transform) : o.clone(e.frame[e.source]),
				r = {
					originX: "50%",
					originY: "50%",
					originZ: "0"
				},
				s = void 0 !== i._lig ? o[e.id]._L[i._lig[0].id].eow : o[e.id].conw,
				n = void 0 !== i._lig ? o[e.id]._L[i._lig[0].id].eoh : o[e.id].conh;
			for (var l in a)
				if (a.hasOwnProperty(l)) {
					if (a[l] = "object" == typeof a[l] ? a[l][o[e.id].level] : a[l], "inherit" === a[l] || "delay" === l || "direction" === l || "use" === l) delete a[l];
					else if ("originX" === l || "originY" === l || "originZ" === l) r[l] = a[l], delete a[l];
					else if (o.isNumeric(a[l], 0)) a[l] = _(a[l], e.frame.reverse, e.target, l, e.id, e.id);
					else if ("r" === a[l][0] && "a" === a[l][1] && "(" === a[l][3]) a[l] = a[l].replace("ran", "random");
					else if (a[l].indexOf("cyc(") >= 0) {
						var d = a[l].replace("cyc(", "").replace(")", "").replace("[", "").replace("]", "").split("|");
						a[l] = new function (e) {
							return tpGS.gsap.utils.wrap(d, void 0)
						}
					} else if (a[l].indexOf("%") >= 0 && o.isNumeric(t = parseInt(a[l], 0))) a[l] = "x" === l ? _((i.eow || 0) * t / 100, e.frame.reverse, e.target, l, e.id) : "y" === l ? _((i.eoh || 0) * t / 100, e.frame.reverse, e.target, l, e.id) : a[l];
					else switch (a[l] = a[l].replace("[", "").replace("]", ""), a[l] = _(a[l], e.frame.reverse, e.target, l, e.id, e.id), a[l]) {
						case "t":
						case "top":
							a[l] = 0 - (i.eoh || 0) - ("column" === i.type ? 0 : i.calcy || 0);
							break;
						case "b":
						case "bottom":
							a[l] = n - ("column" === i.type ? 0 : i.calcy || 0);
							break;
						case "l":
						case "left":
							a[l] = 0 - ("row" === i.type ? i.pow : i.eow || 0) - ("column" === i.type ? 0 : "row" === i.type ? i.rowcalcx : i.calcx || 0);
							break;
						case "r":
						case "right":
							a[l] = s - ("column" === i.type ? 0 : "row" === i.type ? i.rowcalcx : i.calcx || 0);
							break;
						case "m":
						case "c":
						case "middle":
						case "center":
							a[l] = "x" === l ? _(s / 2 - ("column" === i.type ? 0 : i.calcx || 0) - (i.eow || 0) / 2, e.frame.reverse, e.target, l, e.id) : "y" === l ? _(n / 2 - ("column" === i.type ? 0 : i.calcy || 0) - (i.eoh || 0) / 2, e.frame.reverse, e.target, l, e.id) : a[l]
					}
					"skewX" === l && void 0 !== a[l] && (a.scaleY = void 0 === a.scaleY ? 1 : parseFloat(a.scaleY), a.scaleY *= Math.cos(parseFloat(a[l]) * tpGS.DEG2RAD)), "skewY" === l && void 0 !== a[l] && (a.scaleX = void 0 === a.scaleX ? 1 : parseFloat(a.scaleX), a.scaleX *= Math.cos(parseFloat(a[l]) * tpGS.DEG2RAD))
				}
			if (a.transformOrigin = r.originX + " " + r.originY + " " + r.originZ, !o[e.id].BUG_ie_clipPath && void 0 !== a.clip && void 0 !== i.clipPath && i.clipPath.use) {
				var c = "rectangle" == i.clipPath.type,
					p = parseInt(a.clip, 0),
					g = 100 - parseInt(a.clipB, 0),
					u = Math.round(p / 2);
				switch (i.clipPath.origin) {
					case "invh":
						a.clipPath = "polygon(0% 0%, 0% 100%, " + p + "% 100%, " + p + "% 0%, 100% 0%, 100% 100%, " + g + "% 100%, " + g + "% 0%, 0% 0%)";
						break;
					case "invv":
						a.clipPath = "polygon(100% 0%, 0% 0%, 0% " + p + "%, 100% " + p + "%, 100% 100%, 0% 100%, 0% " + g + "%, 100% " + g + "%, 100% 0%)";
						break;
					case "cv":
						a.clipPath = c ? "polygon(" + (50 - u) + "% 0%, " + (50 + u) + "% 0%, " + (50 + u) + "% 100%, " + (50 - u) + "% 100%)" : "circle(" + p + "% at 50% 50%)";
						break;
					case "ch":
						a.clipPath = c ? "polygon(0% " + (50 - u) + "%, 0% " + (50 + u) + "%, 100% " + (50 + u) + "%, 100% " + (50 - u) + "%)" : "circle(" + p + "% at 50% 50%)";
						break;
					case "l":
						a.clipPath = c ? "polygon(0% 0%, " + p + "% 0%, " + p + "% 100%, 0% 100%)" : "circle(" + p + "% at 0% 50%)";
						break;
					case "r":
						a.clipPath = c ? "polygon(" + (100 - p) + "% 0%, 100% 0%, 100% 100%, " + (100 - p) + "% 100%)" : "circle(" + p + "% at 100% 50%)";
						break;
					case "t":
						a.clipPath = c ? "polygon(0% 0%, 100% 0%, 100% " + p + "%, 0% " + p + "%)" : "circle(" + p + "% at 50% 0%)";
						break;
					case "b":
						a.clipPath = c ? "polygon(0% 100%, 100% 100%, 100% " + (100 - p) + "%, 0% " + (100 - p) + "%)" : "circle(" + p + "% at 50% 100%)";
						break;
					case "lt":
						a.clipPath = c ? "polygon(0% 0%," + 2 * p + "% 0%, 0% " + 2 * p + "%)" : "circle(" + p + "% at 0% 0%)";
						break;
					case "lb":
						a.clipPath = c ? "polygon(0% " + (100 - 2 * p) + "%, 0% 100%," + 2 * p + "% 100%)" : "circle(" + p + "% at 0% 100%)";
						break;
					case "rt":
						a.clipPath = c ? "polygon(" + (100 - 2 * p) + "% 0%, 100% 0%, 100% " + 2 * p + "%)" : "circle(" + p + "% at 100% 0%)";
						break;
					case "rb":
						a.clipPath = c ? "polygon(" + (100 - 2 * p) + "% 100%, 100% 100%, 100% " + (100 - 2 * p) + "%)" : "circle(" + p + "% at 100% 100%)";
						break;
					case "clr":
						a.clipPath = c ? "polygon(0% 0%, 0% " + p + "%, " + (100 - p) + "% 100%, 100% 100%, 100% " + (100 - p) + "%, " + p + "% 0%)" : "circle(" + p + "% at 50% 50%)";
						break;
					case "crl":
						a.clipPath = c ? "polygon(0% " + (100 - p) + "%, 0% 100%, " + p + "% 100%, 100% " + p + "%, 100% 0%, " + (100 - p) + "% 0%)" : "circle(" + p + "% at 50% 50%)"
				}!0 !== o.isFirefox(e.id) && (a["-webkit-clip-path"] = a.clipPath), a["clip-path"] = a.clipPath, delete a.clip, delete a.clipB
			} else delete a.clip;
			return "mask" !== e.target && (void 0 === e.frame || void 0 === e.frame.filter && !e.forcefilter || (a["-webkit-filter"] = "blur(" + (null == e.frame.filter ? 0 : e.frame.filter.blur || 0) + "px) grayscale(" + (null == e.frame.filter ? 0 : e.frame.filter.grayscale || 0) + "%) brightness(" + (null == e.frame.filter ? 100 : e.frame.filter.brightness || 100) + "%)", a.filter = "blur(" + (null == e.frame.filter ? 0 : e.frame.filter.blur || 0) + "px) grayscale(" + (null == e.frame.filter ? 0 : e.frame.filter.grayscale || 0) + "%) brightness(" + (null == e.frame.filter ? 100 : e.frame.filter.brightness || 100) + "%)"), jQuery.inArray(e.source, ["chars", "words", "lines"]) >= 0 && (void 0 !== e.frame[e.source].blur || e.forcefilter) && (a["-webkit-filter"] = "blur(" + (parseInt(e.frame[e.source].blur, 0) || 0) + "px) grayscale(" + (parseInt(e.frame[e.source].grayscale, 0) || 0) + "%) brightness(" + (parseInt(e.frame[e.source].brightness, 0) || 100) + "%)", a.filter = "blur(" + (parseInt(e.frame[e.source].blur, 0) || 0) + "px) grayscale(" + (parseInt(e.frame[e.source].grayscale, 0) || 0) + "%) brightness(" + (parseInt(e.frame[e.source].brightness, 0) || 100) + "%)"), delete a.grayscale, delete a.blur, delete a.brightness), a.ease = void 0 !== a.ease ? a.ease : void 0 === a.ease && void 0 !== e.ease || void 0 !== a.ease && void 0 !== e.ease && "inherit" === a.ease ? e.ease : e.frame.timeline.ease, a.ease = void 0 === a.ease || "default" === a.ease ? "power3.inOut" : a.ease, a
		},
		k = function (e, t, i, a, r) {
			var s, n, l = {},
				d = {},
				c = {};
			for (var p in a = void 0 === a ? "transform" : a, "loop" === r ? (c.autoRotate = !1, c.yoyo_filter = !1, c.yoyo_rotate = !1, c.yoyo_move = !1, c.yoyo_scale = !1, c.curved = !1, c.curviness = 2, c.ease = "none", c.speed = 1e3, c.st = 0, l.x = 0, l.y = 0, l.z = 0, l.xr = 0, l.yr = 0, l.zr = 0, l.scaleX = 1, l.scaleY = 1, l.originX = "50%", l.originY = "50%", l.originZ = "0", l.rotationX = "0deg", l.rotationY = "0deg", l.rotationZ = "0deg") : (c.speed = 300, i ? c.ease = "default" : l.ease = "default"), "sfx" === r && (l.fxc = "#ffffff"), e = e.split(";"))
				if (e.hasOwnProperty(p)) {
					var g = e[p].split(":");
					switch (g[0]) {
						case "u":
							l.use = "true" === g[1] || "t" === g[1] || fasle;
							break;
						case "c":
							s = g[1];
							break;
						case "fxc":
							l.fxc = g[1];
							break;
						case "bgc":
							n = g[1];
							break;
						case "auto":
							l.auto = "t" === g[1] || void 0 === g[1] || "true" === g[1];
							break;
						case "o":
							l.opacity = g[1];
							break;
						case "oX":
							l.originX = g[1];
							break;
						case "oY":
							l.originY = g[1];
							break;
						case "oZ":
							l.originZ = g[1];
							break;
						case "sX":
							l.scaleX = g[1];
							break;
						case "sY":
							l.scaleY = g[1];
							break;
						case "skX":
							l.skewX = g[1];
							break;
						case "skY":
							l.skewY = g[1];
							break;
						case "rX":
							l.rotationX = g[1], 0 != g[1] && "0deg" !== g[1] && o.addSafariFix(t);
							break;
						case "rY":
							l.rotationY = g[1], 0 != g[1] && "0deg" !== g[1] && o.addSafariFix(t);
							break;
						case "rZ":
							l.rotationZ = g[1];
							break;
						case "sc":
							l.color = g[1];
							break;
						case "se":
							l.effect = g[1];
							break;
						case "bos":
							l.borderStyle = g[1];
							break;
						case "boc":
							l.borderColor = g[1];
							break;
						case "td":
							l.textDecoration = g[1];
							break;
						case "zI":
							l.zIndex = g[1];
							break;
						case "tp":
							l.transformPerspective = "isometric" === o[t].perspectiveType ? 0 : "global" === o[t].perspectiveType ? o[t].perspective : g[1];
							break;
						case "cp":
							l.clip = parseInt(g[1], 0);
							break;
						case "cpb":
							l.clipB = parseInt(g[1], 0);
							break;
						case "aR":
							c.autoRotate = "t" == g[1];
							break;
						case "rA":
							c.radiusAngle = g[1];
							break;
						case "yyf":
							c.yoyo_filter = "t" == g[1];
							break;
						case "yym":
							c.yoyo_move = "t" == g[1];
							break;
						case "yyr":
							c.yoyo_rotate = "t" == g[1];
							break;
						case "yys":
							c.yoyo_scale = "t" == g[1];
							break;
						case "crd":
							c.curved = "t" == g[1];
							break;
						case "x":
							l.x = "reverse" === r ? "t" === g[1] || !0 === g[1] || "true" == g[1] : "loop" === r ? parseInt(g[1], 0) : o.revToResp(g[1], o[t].rle);
							break;
						case "y":
							l.y = "reverse" === r ? "t" === g[1] || !0 === g[1] || "true" == g[1] : "loop" === r ? parseInt(g[1], 0) : o.revToResp(g[1], o[t].rle);
							break;
						case "z":
							l.z = "loop" === r ? parseInt(g[1], 0) : o.revToResp(g[1], o[t].rle), 0 != g[1] && o.addSafariFix(t);
							break;
						case "bow":
							l.borderWidth = o.revToResp(g[1], 4, 0).toString().replace(/,/g, " ");
							break;
						case "bor":
							l.borderRadius = o.revToResp(g[1], 4, 0).toString().replace(/,/g, " ");
							break;
						case "m":
							l.mask = "t" === g[1] || "f" !== g[1] && g[1];
							break;
						case "iC":
							l.instantClick = "t" === g[1] || "f" !== g[1] && g[1];
							break;
						case "xR":
							l.xr = parseInt(g[1], 0), o.addSafariFix(t);
							break;
						case "yR":
							l.yr = parseInt(g[1], 0), o.addSafariFix(t);
							break;
						case "zR":
							l.zr = parseInt(g[1], 0);
							break;
						case "blu":
							"loop" === r ? l.blur = parseInt(g[1], 0) : d.blur = parseInt(g[1], 0);
							break;
						case "gra":
							"loop" === r ? l.grayscale = parseInt(g[1], 0) : d.grayscale = parseInt(g[1], 0);
							break;
						case "bri":
							"loop" === r ? l.brightness = parseInt(g[1], 0) : d.brightness = parseInt(g[1], 0);
							break;
						case "sp":
							c.speed = parseInt(g[1], 0);
							break;
						case "d":
							l.delay = parseInt(g[1], 0);
							break;
						case "crns":
							c.curviness = parseInt(g[1], 0);
							break;
						case "st":
							c.start = "w" === g[1] || "a" === g[1] ? "+=0" : g[1], c.waitoncall = "w" === g[1] || "a" === g[1];
							break;
						case "sA":
							c.startAbsolute = g[1];
							break;
						case "sR":
							c.startRelative = g[1];
							break;
						case "e":
							i ? c.ease = g[1] : l.ease = g[1];
							break;
						default:
							g[0].length > 0 && (l[g[0]] = "t" === g[1] || "f" !== g[1] && g[1])
					}
				}
			var u = {
				timeline: c
			};
			return jQuery.isEmptyObject(d) || ("split" === r ? l = jQuery.extend(!0, l, d) : u.filter = d), "split" === r && (l.dir = void 0 === l.dir ? "start" : "backward" === l.dir ? "end" : "middletoedge" === l.dir ? "center" : "edgetomiddle" === l.dir ? "edge" : l.dir), jQuery.isEmptyObject(s) || (u.color = s), jQuery.isEmptyObject(n) || (u.bgcolor = n), u[a] = l, u
		},
		S = function (e, t) {
			var i = {},
				a = 0;
			if (void 0 === window.rdF0) {
				var r = k("x:0;y:0;z:0;rX:0;rY:0;rZ:0;o:0;skX:0;skY:0;sX:0;sY:0;oX:50%;oY:50%;oZ:0;dir:forward;d:5", t).transform;
				window.rdF0 = window.rdF1 = {
					transform: k("x:0;y:0;z:0;rX:0;rY:0;rZ:0;o:0;skX:0;skY:0;sX:0;sY:0;oX:50%;oY:50%;oZ:0;tp:600px", t, !0).transform,
					mask: k("x:0;y:0", t, !0).transform,
					chars: jQuery.extend(!0, {
						blur: 0,
						grayscale: 0,
						brightness: 100
					}, r),
					words: jQuery.extend(!0, {
						blur: 0,
						grayscale: 0,
						brightness: 100
					}, r),
					lines: jQuery.extend(!0, {
						blur: 0,
						grayscale: 0,
						brightness: 100
					}, r)
				}, window.rdF1.transform.opacity = window.rdF1.chars.opacity = window.rdF1.words.opacity = window.rdF1.lines.opacity = window.rdF1.transform.scaleX = window.rdF1.chars.scaleX = window.rdF1.words.scaleX = window.rdF1.lines.scaleX = window.rdF1.transform.scaleY = window.rdF1.chars.scaleY = window.rdF1.words.scaleY = window.rdF1.lines.scaleY = 1
			}
			for (var a in void 0 === e.frame_0 && (e.frame_0 = "x:0"), void 0 === e.frame_1 && (e.frame_1 = "x:0"), e.dddNeeded = !1, e.ford)
				if (e.ford.hasOwnProperty(a)) {
					var n = e.ford[a];
					if (e[n]) {
						if (i[n] = k(e[n], t, !0), void 0 !== i[n].bgcolor && (e.bgcolinuse = !0), o[t].BUG_ie_clipPath && void 0 !== e.clipPath && e.clipPath.use && void 0 !== i[n].transform.clip) {
							var l = "rectangle" === e.clipPath.type ? 100 - parseInt(i[n].transform.clip) : 100 - Math.min(100, 2 * parseInt(i[n].transform.clip));
							switch (e.clipPath.origin) {
								case "clr":
								case "rb":
								case "rt":
								case "r":
									e[n + "_mask"] = "u:t;x:" + l + "%;y:0px;", i[n].transform.x = o.revToResp("-" + l + "%", o[t].rle);
									break;
								case "crl":
								case "lb":
								case "lt":
								case "cv":
								case "l":
									e[n + "_mask"] = "u:t;x:-" + l + "%;y:0px;", i[n].transform.x = o.revToResp(l + "%", o[t].rle);
									break;
								case "ch":
								case "t":
									e[n + "_mask"] = "u:t;y:-" + l + "%;y:0px;", i[n].transform.y = o.revToResp(l + "%", o[t].rle);
									break;
								case "b":
									e[n + "_mask"] = "u:t;y:" + l + "%;y:0px;", i[n].transform.y = o.revToResp("-" + l + "%", o[t].rle)
							}
							delete i[n].transform.clip, delete i[n].transform.clipB
						}
						e[n + "_mask"] && (i[n].mask = k(e[n + "_mask"], t).transform), null != i[n].mask && i[n].mask.use ? (i[n].mask.x = void 0 === i[n].mask.x ? 0 : i[n].mask.x, i[n].mask.y = void 0 === i[n].mask.y ? 0 : i[n].mask.y, delete i[n].mask.use, i[n].mask.overflow = "hidden") : i[n].mask = {
							ease: "default",
							overflow: "visible"
						}, e[n + "_chars"] && (i[n].chars = k(e[n + "_chars"], t, void 0, void 0, "split").transform), e[n + "_words"] && (i[n].words = k(e[n + "_words"], t, void 0, void 0, "split").transform), e[n + "_lines"] && (i[n].lines = k(e[n + "_lines"], t, void 0, void 0, "split").transform), (e[n + "_chars"] || e[n + "_words"] || e[n + "_lines"]) && (i[n].dosplit = !0), i.frame_0 = void 0 === i.frame_0 ? {
							transform: {}
						} : i.frame_0, i[n].transform.auto && (i[n].transform = o.clone(i.frame_0.transform), i[n].transform.opacity = void 0 === i[n].transform.opacity ? 0 : i[n].transform.opacity, void 0 !== i.frame_0.filter && (i[n].filter = o.clone(i.frame_0.filter)), void 0 !== i.frame_0.mask && (i[n].mask = o.clone(i.frame_0.mask)), void 0 !== i.frame_0.chars && (i[n].chars = o.clone(i.frame_0.chars)), void 0 !== i.frame_0.words && (i[n].words = o.clone(i.frame_0.words)), void 0 !== i.frame_0.lines && (i[n].lines = o.clone(i.frame_0.lines)), void 0 === i.frame_0.chars && void 0 === i.frame_0.words && void 0 === i.frame_0.lines || (i[n].dosplit = !0)), e[n + "_sfx"] && (i[n].sfx = k(e[n + "_sfx"], t, !1, void 0, "sfx").transform), e[n + "_reverse"] && (i[n].reverse = k(e[n + "_reverse"], t, !1, void 0, "reverse").transform)
					}
				}
			if (i.frame_0.dosplit && (i.frame_1.dosplit = !0), void 0 === e.frame_hover && void 0 === e.svgh || (i.frame_hover = k(void 0 === e.frame_hover ? "" : e.frame_hover, t), !s || "true" != i.frame_hover.transform.instantClick && 1 != i.frame_hover.transform.instantClick ? (delete i.frame_hover.transform.instantClick, i.frame_hover.transform.color = i.frame_hover.color, void 0 === i.frame_hover.transform.color && delete i.frame_hover.transform.color, void 0 !== i.frame_hover.bgcolor && i.frame_hover.bgcolor.indexOf("gradient") >= 0 ? i.frame_hover.transform.backgroundImage = i.frame_hover.bgcolor : void 0 !== i.frame_hover.bgcolor && (i.frame_hover.transform.backgroundColor = i.frame_hover.bgcolor), void 0 !== i.frame_hover.bgcolor && (e.bgcolinuse = !0), i.frame_hover.transform.opacity = void 0 === i.frame_hover.transform.opacity ? 1 : i.frame_hover.transform.opacity, i.frame_hover.mask = void 0 !== i.frame_hover.transform.mask && i.frame_hover.transform.mask, delete i.frame_hover.transform.mask, void 0 !== i.frame_hover.transform && ((i.frame_hover.transform.borderWidth || i.frame_hover.transform.borderStyle) && (i.frame_hover.transform.borderColor = void 0 === i.frame_hover.transform.borderColor ? "transparent" : i.frame_hover.transform.borderColor), "none" !== i.frame_hover.transform.borderStyle && void 0 === i.frame_hover.transform.borderWidth && (i.frame_hover.transform.borderWidth = o.revToResp(0, 4, 0).toString().replace(/,/g, " ")), void 0 === e.bordercolor && void 0 !== i.frame_hover.transform.borderColor && (e.bordercolor = "transparent"), void 0 === e.borderwidth && void 0 !== i.frame_hover.transform.borderWidth && (e.borderwidth = o.revToResp(i.frame_hover.transform.borderWidth, 4, 0)), void 0 === e.borderstyle && void 0 !== i.frame_hover.transform.borderStyle && (e.borderstyle = o.revToResp(i.frame_hover.transform.borderStyle, 4, 0)))) : delete i.frame_hover), void 0 !== e.tloop) {
				e.layerLoop = {
					from: "frame_1",
					to: "frame_999",
					repeat: -1,
					keep: !0,
					children: !0
				};
				var d = e.tloop.split(";");
				for (var a in d)
					if (d.hasOwnProperty(a)) {
						var c = d[a].split(":");
						switch (c[0]) {
							case "f":
								e.layerLoop.from = c[1];
								break;
							case "t":
								e.layerLoop.to = c[1];
								break;
							case "k":
								e.layerLoop.keep = c[1];
								break;
							case "r":
								e.layerLoop.repeat = parseInt(c[1], 0);
								break;
							case "c":
								e.layerLoop.children = c[1]
						}
					}
				e.layerLoop.count = 0
			}
			for (var a in (e.loop_0 || e.loop_999) && (i.loop = k(e.loop_999, t, !0, "frame_999", "loop"), i.loop.frame_0 = k(e.loop_0 || "", t, !1, void 0, "loop").transform), i.frame_0.transform.opacity = void 0 === i.frame_0.transform.opacity ? 0 : i.frame_0.transform.opacity, i.frame_1.transform.opacity = void 0 === i.frame_1.transform.opacity ? 1 : i.frame_1.transform.opacity, i.frame_999.transform.opacity = void 0 === i.frame_999.transform.opacity ? "inherit" : i.frame_999.transform.opacity, e.clipPath && e.clipPath.use && (i.frame_0.transform.clip = void 0 === i.frame_0.transform.clip ? 100 : parseInt(i.frame_0.transform.clip), i.frame_1.transform.clip = void 0 === i.frame_1.transform.clip ? 100 : parseInt(i.frame_1.transform.clip)), e.resetfilter = !1, i) void 0 !== i[a].filter && (e.resetfilter = !0);
			return e.resetfilter && (i.frame_0.filter = o.clone(i.frame_0.filter), i.frame_0.filter.blur = void 0 === i.frame_0.filter.blur ? 0 : i.frame_0.filter.blur, i.frame_0.filter.brightness = void 0 === i.frame_0.filter.brightness ? 100 : i.frame_0.filter.brightness, i.frame_0.filter.grayscale = void 0 === i.frame_0.filter.grayscale ? 0 : i.frame_0.filter.grayscale), void 0 !== i.frame_0.filter && (i.frame_1.filter = o.clone(i.frame_1.filter), void 0 !== i.frame_0.filter.blur && 0 !== i.frame_1.filter.blur && (i.frame_1.filter.blur = void 0 === i.frame_1.filter.blur ? 0 : i.frame_1.filter.blur), void 0 !== i.frame_0.filter.brightness && 100 !== i.frame_1.filter.brightness && (i.frame_1.filter.brightness = void 0 === i.frame_1.filter.brightness ? 100 : i.frame_1.filter.brightness), void 0 !== i.frame_0.filter.grayscale && 0 !== i.frame_1.filter.grayscale && (i.frame_1.filter.grayscale = void 0 === i.frame_1.filter.grayscale ? 0 : i.frame_1.filter.grayscale)), T(i, t, e)
		},
		L = function (e) {
			return void 0 !== e && (void 0 !== e.rotationY || void 0 !== e.rotationX || void 0 !== e.z)
		},
		T = function (e, t, i) {
			var a, r = {},
				s = ["transform", "words", "chars", "lines", "mask"],
				n = "global" == o[t].perspectiveType ? o[t].perspective : 0,
				l = !0,
				d = !1;
			for (var c in e) "loop" !== c && "frame_hover" !== c && (r = jQuery.extend(!0, r, e[c]));
			for (var c in e)
				if (e.hasOwnProperty(c) && (void 0 !== e[c].timeline && (e[c].timeline.usePerspective = !1), "loop" !== c && "frame_hover" !== c)) {
					for (a in r.transform) r.transform.hasOwnProperty(a) && (r.transform[a] = void 0 === e[c].transform[a] ? "frame_0" === c ? window.rdF0.transform[a] : "frame_1" === c ? window.rdF1.transform[a] : r.transform[a] : e[c].transform[a], e[c].transform[a] = void 0 === e[c].transform[a] ? r.transform[a] : e[c].transform[a]);
					for (var p = 1; p <= 4; p++)
						for (a in r[s[p]]) r[s[p]].hasOwnProperty(a) && (e[c][s[p]] = void 0 === e[c][s[p]] ? {} : e[c][s[p]], r[s[p]][a] = void 0 === e[c][s[p]][a] ? "frame_0" === c ? window.rdF0[s[p]][a] : "frame_1" === c ? window.rdF1[s[p]][a] : r[s[p]][a] : e[c][s[p]][a], e[c][s[p]][a] = void 0 === e[c][s[p]][a] ? r[s[p]][a] : e[c][s[p]][a]);
					void 0 !== e[c].timeline && !1 === e[c].timeline.usePerspective && void 0 !== e[c].transform && (void 0 !== e[c].transform.rotationY || void 0 !== e[c].transform.rotationX || void 0 !== e[c].transform.z || L(e[c].chars) || L(e[c].words) || L(e[c].lines)) && (n = "local" == o[t].perspectiveType ? void 0 === e[c].transform.transformPerspective ? 600 : e[c].transform.transformPerspective : n, e[c].timeline.usePerspective = !0, !o.isFirefox(t) && (L(e[c].chars) || L(e[c].words) || L(e[c].lines)) && (d = !0), l = !1)
				}
			if (d && requestAnimationFrame(function () {
					tpGS.gsap.set(i.c, {
						transformStyle: "preserve-3d"
					})
				}), void 0 !== e.frame_0.timeline && e.frame_0.timeline.usePerspective && (e.frame_0.transform.transformPerspective = "local" === o[t].perspectiveType ? void 0 === e.frame_0.transform.transformPerspective ? n : e.frame_0.transform.transformPerspective : "isometric" === o[t].perspectiveType ? 0 : o[t].perspective), l)
				for (var c in e) {
					if (!e.hasOwnProperty(c) || void 0 === e[c].transform) continue;
					delete e[c].transform.transformPerspective
				}
			return e
		},
		R = function (e, t, i) {
			if (0 === e.length) return {};
			for (var a = e[0].getElementsByClassName(t), r = {}, o = 0; o < a.length; o++) void 0 !== i && -1 !== a[o].className.indexOf(i) || (r[a[o].id] = a[o]);
			if (void 0 !== e[1])
				for (a = e[1].getElementsByClassName(t), o = 0; o < a.length; o++) void 0 !== i && -1 !== a[o].className.indexOf(i) || (r[a[o].id] = a[o]);
			return r
		},
		O = function (e) {
			return "thin" === (e = o.isNumeric(e) ? e : e.toLowerCase()) ? "00" : "extra light" === e ? 200 : "light" === e ? 300 : "normal" === e ? 400 : "medium" === e ? 500 : "semi bold" === e ? 600 : "bold" === e ? 700 : "extra bold" === e ? 800 : "ultra bold" === e ? 900 : "black" === e ? 900 : e
		},
		A = function (e, t, s) {
			var n;
			if ("BR" == e[0].nodeName || "br" == e[0].tagName || "object" != typeof e[0].className && e[0].className.indexOf("rs_splitted_") >= 0) return !1;
			o.sA(e[0], "stylerecorder", !0), void 0 === e[0].id && (e[0].id = "rs-layer-sub-" + Math.round(1e6 * Math.random())), o[s].computedStyle[e[0].id] = window.getComputedStyle(e[0], null);
			var l = void 0 !== e[0].id && void 0 !== o[s]._L[e[0].id] ? o[s]._L[e[0].id] : e.data(),
				d = "rekursive" === t ? jQuery(o.closestClass(e[0], "rs-layer")) : void 0;
			void 0 !== d && (o[s].computedStyle[d[0].id] = void 0 === o[s].computedStyle[d[0].id] ? window.getComputedStyle(d[0], null) : o[s].computedStyle[d[0].id]);
			var c = void 0 !== d && o[s].computedStyle[e[0].id].fontSize == o[s].computedStyle[d[0].id].fontSize && O(o[s].computedStyle[e[0].id].fontWeight) == O(o[s].computedStyle[d[0].id].fontWeight) && o[s].computedStyle[e[0].id].lineHeight == o[s].computedStyle[d[0].id].lineHeight,
				p = c ? void 0 !== d[0].id && void 0 !== o[s]._L[d[0].id] ? o[s]._L[d[0].id] : d.data() : void 0,
				g = 0;
			for (l.basealign = void 0 === l.basealign ? "grid" : l.basealign, l._isnotext || (l.fontSize = o.revToResp(c ? void 0 === p.fontsize ? parseInt(o[s].computedStyle[d[0].id].fontSize, 0) || 20 : p.fontsize : void 0 === l.fontsize ? "rekursive" !== t ? 20 : "inherit" : l.fontsize, o[s].rle), l.fontWeight = o.revToResp(c ? void 0 === p.fontweight ? o[s].computedStyle[d[0].id].fontWeight || "inherit" : p.fontweight : void 0 === l.fontweight ? o[s].computedStyle[e[0].id].fontWeight || "inherit" : l.fontweight, o[s].rle), l.whiteSpace = o.revToResp(c ? void 0 === p.whitespace ? "nowrap" : p.whitespace : void 0 === l.whitespace ? "nowrap" : l.whitespace, o[s].rle), l.textAlign = o.revToResp(c ? void 0 === p.textalign ? "left" : p.textalign : void 0 === l.textalign ? "left" : l.textalign, o[s].rle), l.letterSpacing = o.revToResp(c ? void 0 === p.letterspacing ? parseInt(o[s].computedStyle[d[0].id].letterSpacing, 0) || "inherit" : p.letterspacing : void 0 === l.letterspacing ? parseInt("normal" === o[s].computedStyle[e[0].id].letterSpacing ? 0 : o[s].computedStyle[e[0].id].letterSpacing, 0) || "inherit" : l.letterspacing, o[s].rle), l.textDecoration = c ? void 0 === p.textDecoration ? "none" : p.textDecoration : void 0 === l.textDecoration ? "none" : l.textDecoration, g = 25, g = void 0 !== d && "I" === e[0].tagName ? "inherit" : g, void 0 !== l.tshadow && (l.tshadow.b = o.revToResp(l.tshadow.b, o[s].rle), l.tshadow.h = o.revToResp(l.tshadow.h, o[s].rle), l.tshadow.v = o.revToResp(l.tshadow.v, o[s].rle))), void 0 !== l.bshadow && (l.bshadow.b = o.revToResp(l.bshadow.b, o[s].rle), l.bshadow.h = o.revToResp(l.bshadow.h, o[s].rle), l.bshadow.v = o.revToResp(l.bshadow.v, o[s].rle), l.bshadow.s = o.revToResp(l.bshadow.s, o[s].rle)), void 0 !== l.tstroke && (l.tstroke.w = o.revToResp(l.tstroke.w, o[s].rle)), l.display = c ? void 0 === p.display ? o[s].computedStyle[d[0].id].display : p.display : void 0 === l.display ? o[s].computedStyle[e[0].id].display : l.display, l.float = o.revToResp(c ? void 0 === p.float ? o[s].computedStyle[d[0].id].float || "none" : p.float : void 0 === l.float ? "none" : l.float, o[s].rle), l.clear = o.revToResp(c ? void 0 === p.clear ? o[s].computedStyle[d[0].id].clear || "none" : p.clear : void 0 === l.clear ? "none" : l.clear, o[s].rle), l.lineHeight = o.revToResp(e.is("img") || -1 != jQuery.inArray(l.layertype, ["video", "image", "audio"]) ? g : c ? void 0 === p.lineheight ? parseInt(o[s].computedStyle[d[0].id].lineHeight, 0) || g : p.lineheight : void 0 === l.lineheight ? g : l.lineheight, o[s].rle), l.zIndex = c ? void 0 === p.zindex ? parseInt(o[s].computedStyle[d[0].id].zIndex, 0) || "inherit" : p.zindex : void 0 === l.zindex ? parseInt(o[s].computedStyle[e[0].id].zIndex, 0) || "inherit" : l.zindex, n = 0; n < 4; n++) l["padding" + i[n]] = o.revToResp(void 0 === l["padding" + r[n]] ? parseInt(o[s].computedStyle[e[0].id]["padding" + i[n]], 0) || 0 : l["padding" + r[n]], o[s].rle), l["margin" + i[n]] = o.revToResp(void 0 === l["margin" + r[n]] ? parseInt(o[s].computedStyle[e[0].id]["margin" + i[n]], 0) || 0 : l["margin" + r[n]], o[s].rle), l["border" + i[n] + "Width"] = void 0 === l.borderwidth ? parseInt(o[s].computedStyle[e[0].id]["border" + i[n] + "Width"], 0) || 0 : l.borderwidth[n], l["border" + i[n] + "Color"] = void 0 === l.bordercolor ? o[s].computedStyle[e[0].id]["border-" + r[n] + "-color"] : l.bordercolor, l["border" + a[n] + "Radius"] = o.revToResp(void 0 === l.borderradius ? o[s].computedStyle[e[0].id]["border" + a[n] + "Radius"] || 0 : l.borderradius[n], o[s].rle);
			for (l.borderStyle = o.revToResp(void 0 === l.borderstyle ? o[s].computedStyle[e[0].id].borderStyle || 0 : l.borderstyle, o[s].rle), "rekursive" !== t ? (l.color = o.revToResp(void 0 === l.color ? "#ffffff" : l.color, o[s].rle, void 0, "||"), l.minWidth = o.revToResp(void 0 === l.minwidth ? parseInt(o[s].computedStyle[e[0].id].minWidth, 0) || 0 : l.minwidth, o[s].rle), l.minHeight = o.revToResp(void 0 === l.minheight ? parseInt(o[s].computedStyle[e[0].id].minHeight, 0) || 0 : l.minheight, o[s].rle), l.width = o.revToResp(void 0 === l.width ? "auto" : o.smartConvertDivs(l.width), o[s].rle), l.height = o.revToResp(void 0 === l.height ? "auto" : o.smartConvertDivs(l.height), o[s].rle), l.maxWidth = o.revToResp(void 0 === l.maxwidth ? parseInt(o[s].computedStyle[e[0].id].maxWidth, 0) || "none" : l.maxwidth, o[s].rle), l.maxHeight = o.revToResp(-1 !== jQuery.inArray(l.type, ["column", "row"]) ? "none" : void 0 !== l.maxheight ? parseInt(o[s].computedStyle[e[0].id].maxHeight, 0) || "none" : l.maxheight, o[s].rle)) : "html" === l.layertype && (l.width = o.revToResp(e[0].width, o[s].rle), l.height = o.revToResp(e[0].height, o[s].rle)), l.styleProps = {
					background: e[0].style.background,
					"background-color": e[0].style["background-color"],
					color: e[0].style.color,
					cursor: e[0].style.cursor,
					"font-style": e[0].style["font-style"]
				}, null == l.bshadow && (l.styleProps.boxShadow = e[0].style.boxShadow), "" !== l.styleProps.background && void 0 !== l.styleProps.background && l.styleProps.background !== l.styleProps["background-color"] || delete l.styleProps.background, "" == l.styleProps.color && (l.styleProps.color = o[s].computedStyle[e[0].id].color), n = 0; n < 4; n++) I(l["padding" + i[n]], 0) && delete l["padding" + i[n]], I(l["margin" + i[n]], 0) && delete l["margin" + i[n]], I(l["border" + a[n] + "Radius"], "0px") ? delete l["border" + a[n] + "Radius"] : I(l["border" + a[n] + "Radius"], "0") && delete l["border" + a[n] + "Radius"];
			if (I(l.borderStyle, "none"))
				for (delete l.borderStyle, n = 0; n < 4; n++) delete l["border" + i[n] + "Width"], delete l["border" + i[n] + "Color"]
		},
		I = function (e, t) {
			return t === e[0] && t === e[1] && t === e[2] && t === e[3]
		},
		C = function (e, t, i, a, r) {
			var s = o.isNumeric(e) || void 0 === e ? "" : e.indexOf("px") >= 0 ? "px" : e.indexOf("%") >= 0 ? "%" : "";
			return e = o.isNumeric(parseInt(e)) ? parseInt(e) : e, e = null == (e = "full" === (e = o.isNumeric(e) ? e * t + s : e) ? a : "auto" === e || "none" === e ? i : e) ? r : e
		},
		z = function (e) {
			return null != e && 0 !== parseInt(e, 0)
		},
		P = function (e) {
			var t, s, n, l, d, c, p, g, u, m, h = e.a,
				f = e.b,
				v = e.c,
				y = e.d,
				b = e.e,
				w = {},
				_ = {},
				x = o[f]._L[h[0].id],
				k = h[0].className;
			if (x = void 0 === x ? {} : x, "object" == typeof k && (k = ""), void 0 !== h && void 0 !== h[0] && (k.indexOf("rs_splitted") >= 0 || "BR" == h[0].nodeName || "br" == h[0].tagName || h[0].tagName.indexOf("FCR") > 0 || h[0].tagName.indexOf("BCR") > 0)) return !1;
			b = "individual" === b ? x.slideIndex : b;
			e = function (e, t, r) {
				if (void 0 !== e) {
					if ("BR" == e[0].nodeName || "br" == e[0].tagName) return !1;
					var s, n = o[t].level,
						l = void 0 !== e[0] && void 0 !== e[0].id && void 0 !== o[t]._L[e[0].id] ? o[t]._L[e[0].id] : e.data();
					void 0 === (l = void 0 === l.basealign ? r.data() : l)._isnotext && (l._isnotext = void 0 !== r && void 0 !== r[0] && r[0].length > 0 ? o.gA(r[0], "_isnotext") : l._isnotext);
					var d = {
						basealign: void 0 === l.basealign ? "grid" : l.basealign,
						lineHeight: void 0 === l.basealign ? "inherit" : parseInt(l.lineHeight[n]),
						color: void 0 === l.color ? void 0 : l.color[n],
						width: void 0 === l.width ? void 0 : "a" === l.width[n] ? "auto" : l.width[n],
						height: void 0 === l.height ? void 0 : "a" === l.height[n] ? "auto" : l.height[n],
						minWidth: void 0 === l.minWidth ? void 0 : "n" === l.minWidth[n] ? "none" : l.minWidth[n],
						minHeight: void 0 === l.minHeight ? void 0 : "n" == l.minHeight[n] ? "none" : l.minHeight[n],
						maxWidth: void 0 === l.maxWidth ? void 0 : "n" == l.maxWidth[n] ? "none" : l.maxWidth[n],
						maxHeight: void 0 === l.maxHeight ? void 0 : "n" == l.maxHeight[n] ? "none" : l.maxHeight[n],
						float: l.float[n],
						clear: l.clear[n]
					};
					for (l.borderStyle && (d.borderStyle = l.borderStyle[n]), s = 0; s < 4; s++) l["padding" + i[s]] && (d["padding" + i[s]] = l["padding" + i[s]][n]), l["margin" + i[s]] && (d["margin" + i[s]] = parseInt(l["margin" + i[s]][n])), l["border" + a[s] + "Radius"] && (d["border" + a[s] + "Radius"] = l["border" + a[s] + "Radius"][n]), l["border" + i[s] + "Color"] && (d["border" + i[s] + "Color"] = l["border" + i[s] + "Color"]), l["border" + i[s] + "Width"] && (d["border" + i[s] + "Width"] = parseInt(l["border" + i[s] + "Width"]));
					return l._isnotext || (d.textDecoration = l.textDecoration, d.fontSize = parseInt(l.fontSize[n]), d.fontWeight = parseInt(l.fontWeight[n]), d.letterSpacing = parseInt(l.letterSpacing[n]) || 0, d.textAlign = l.textAlign[n], d.whiteSpace = l.whiteSpace[n], d.whiteSpace = "normal" === d.whiteSpace && "auto" === d.width && !0 !== l._incolumn ? "nowrap" : d.whiteSpace, d.display = l.display, void 0 !== l.tshadow && (d.textShadow = parseInt(l.tshadow.h[n], 0) + "px " + parseInt(l.tshadow.v[n], 0) + "px " + l.tshadow.b[n] + " " + l.tshadow.c), void 0 !== l.tstroke && (d.textStroke = parseInt(l.tstroke.w[n], 0) + "px " + l.tstroke.c)), void 0 !== l.bshadow && (d.boxShadow = parseInt(l.bshadow.h[n], 0) + "px " + parseInt(l.bshadow.v[n], 0) + "px " + parseInt(l.bshadow.b[n], 0) + "px " + parseInt(l.bshadow.s[n], 0) + "px " + l.bshadow.c), d
				}
			}(h, f, e.RSL);
			var S, L = "off" === y ? 1 : o[f].CM.w;
			if (void 0 === x._isnotext && (x._isnotext = void 0 !== e.RSL && void 0 !== e.RSL[0] && e.RSL[0].length > 0 ? o.gA(e.RSL[0], "_isnotext") : x._isnotext), x.OBJUPD = null == x.OBJUPD ? {} : x.OBJUPD, x.caches = null == x.caches ? {} : x.caches, "column" === x.type) {
				for (s = {}, S = {}, t = 0; t < 4; t++) void 0 !== e["margin" + i[t]] && (s["padding" + i[t]] = Math.round(e["margin" + i[t]] * L) + "px", S["margin" + i[t]] = e["margin" + i[t]], delete e["margin" + i[t]]);
				jQuery.isEmptyObject(s) || tpGS.gsap.set(x._column, s)
			}
			var T = o.clone(x.OBJUPD.POBJ),
				R = o.clone(x.OBJUPD.LPOBJ);
			if (-1 === k.indexOf("rs_splitted_")) {
				for (s = {
						overwrite: "auto"
					}, t = 0; t < 4; t++) void 0 !== e["border" + a[t] + "Radius"] && (s["border" + a[t] + "Radius"] = e["border" + a[t] + "Radius"]), void 0 !== e["padding" + i[t]] && (s["padding" + i[t]] = Math.round(e["padding" + i[t]] * L) + "px"), void 0 === e["margin" + i[t]] || x._incolumn || (s["margin" + i[t]] = "row" === x.type ? 0 : Math.round(e["margin" + i[t]] * L) + "px");
				if (void 0 !== x.spike && (s["clip-path"] = s["-webkit-clip-path"] = x.spike), e.boxShadow && (s.boxShadow = e.boxShadow), "column" !== x.type && (void 0 !== e.borderStyle && "none" !== e.borderStyle && (0 !== e.borderTopWidth || e.borderBottomWidth > 0 || e.borderLeftWidth > 0 || e.borderRightWidth > 0) ? (s.borderTopWidth = Math.round(e.borderTopWidth * L) + "px", s.borderBottomWidth = Math.round(e.borderBottomWidth * L) + "px", s.borderLeftWidth = Math.round(e.borderLeftWidth * L) + "px", s.borderRightWidth = Math.round(e.borderRightWidth * L) + "px", s.borderStyle = e.borderStyle, s.borderTopColor = e.borderTopColor, s.borderBottomColor = e.borderBottomColor, s.borderLeftColor = e.borderLeftColor, s.borderRightColor = e.borderRightColor) : ("none" === e.borderStyle && (s.borderStyle = "none"), s.borderTopColor = e.borderTopColor, s.borderBottomColor = e.borderBottomColor, s.borderLeftColor = e.borderLeftColor, s.borderRightColor = e.borderRightColor)), "shape" !== x.type && "image" !== x.type || !(z(e.borderTopLeftRadius) || z(e.borderTopRightRadius) || z(e.borderBottomLeftRadius) || z(e.borderBottomRightRadius)) || (s.overflow = "hidden"), x._isnotext || ("column" !== x.type && (s.fontSize = Math.round(e.fontSize * L) + "px", s.fontWeight = e.fontWeight, s.letterSpacing = e.letterSpacing * L + "px", e.textShadow && (s.textShadow = e.textShadow), e.textStroke && (s["-webkit-text-stroke"] = e.textStroke)), s.lineHeight = Math.round(e.lineHeight * L) + "px", s.textAlign = e.textAlign), "column" === x.type && (void 0 === x.cbg_set && (x.cbg_set = x.styleProps["background-color"], x.cbg_set = "" == x.cbg_set || void 0 === x.cbg_set || 0 == x.cbg_set.length ? "transparent" : x.cbg_set, x.cbg_img = h.css("backgroundImage"), "" !== x.cbg_img && void 0 !== x.cbg_img && "none" !== x.cbg_img && (x.cbg_img_r = h.css("backgroundRepeat"), x.cbg_img_p = h.css("backgroundPosition"), x.cbg_img_s = h.css("backgroundSize")), x.cbg_o = x.bgopacity ? 1 : x.bgopacity, w.backgroundColor = "transparent", w.backgroundImage = ""), s.backgroundColor = "transparent", s.backgroundImage = "none"), x._isstatic && x.elementHovered && (p = h.data("frames")) && p.frame_hover && p.frame_hover.transform)
					for (g in s) s.hasOwnProperty(g) && p.frame_hover.transform.hasOwnProperty(g) && delete s[g];
				if ("IFRAME" == h[0].nodeName && "html" === o.gA(h[0], "layertype") && (u = "slide" == e.basealign ? o[f].module.width : o.iWA(f, b), m = "slide" == e.basealign ? o[f].module.height : o.iHE(f), s.width = !o.isNumeric(e.width) && e.width.indexOf("%") >= 0 ? !x._isstatic || x._incolumn || x._ingroup ? e.width : u * parseInt(e.width, 0) / 100 : C(e.width, L, "auto", u, "auto"), s.height = !o.isNumeric(e.height) && e.height.indexOf("%") >= 0 ? !x._isstatic || x._incolumn || x._ingroup ? e.height : m * parseInt(e.height, 0) / 100 : C(e.height, L, "auto", u, "auto")), w = jQuery.extend(!0, w, s), "rekursive" != v) {
					u = "slide" == e.basealign ? o[f].module.width : o.iWA(f, b), m = "slide" == e.basealign ? o[f].module.height : o.iHE(f);
					var O = !o.isNumeric(e.width) && e.width.indexOf("%") >= 0 ? !x._isstatic || x._incolumn || x._ingroup ? e.width : u * parseInt(e.width, 0) / 100 : C(e.width, L, "auto", u, "auto"),
						A = !o.isNumeric(e.height) && e.height.indexOf("%") >= 0 ? !x._isstatic || x._incolumn || x._ingroup ? e.height : m * parseInt(e.height, 0) / 100 : C(e.height, L, "auto", u, "auto"),
						I = {
							maxWidth: C(e.maxWidth, L, "none", u, "none"),
							maxHeight: C(e.maxHeight, L, "none", m, "none"),
							minWidth: C(e.minWidth, L, "0px", u, 0),
							minHeight: C(e.minHeight, L, "0px", m, 0),
							height: A,
							width: O,
							overwrite: "auto"
						};
					1 == x.heightSetByVideo && (I.height = x.vidOBJ.height);
					var P = !1;
					if (x._incolumn) {
						for (T = jQuery.extend(!0, T, {
								minWidth: O,
								maxWidth: O,
								float: e.float,
								clear: e.clear
							}), t = 0; t < 4; t++) void 0 !== e["margin" + i[t]] && (T["margin" + i[t]] = e["margin" + i[t]] * L + "px");
						R.width = "100%", void 0 !== e.display && "inline-block" !== e.display || (_ = {
							width: "100%"
						}), I.width = !o.isNumeric(e.width) && e.width.indexOf("%") >= 0 ? "100%" : O, "image" === x.type && tpGS.gsap.set(x.img, {
							width: "100%"
						})
					} else !o.isNumeric(e.width) && e.width.indexOf("%") >= 0 && (T.minWidth = "slide" === x.basealign || !0 === x._ingroup ? O : o.iWA(f, b) * o[f].CM.w * parseInt(O) / 100 + "px", R.width = "100%", _.width = "100%");
					if (!o.isNumeric(e.height) && e.height.indexOf("%") >= 0 && (T.minHeight = "slide" === x.basealign || !0 === x._ingroup ? A : o.iHE(f) * (o[f].currentRowsHeight > o[f].gridheight[o[f].level] ? 1 : o[f].CM.w) * parseInt(A) / 100 + "px", R.height = "100%", _.height = "100%", P = !0), x._isnotext || (I.whiteSpace = e.whiteSpace, I.textAlign = e.textAlign, I.textDecoration = e.textDecoration), "npc" != e.color && void 0 !== e.color && (I.color = e.color), x._ingroup && (x._groupw = I.minWidth, x._grouph = I.minHeight), "row" === x.type && (o.isNumeric(I.minHeight) || I.minHeight.indexOf("px") >= 0) && "0px" !== I.minHeight && 0 !== I.minHeight && "0" !== I.minHeight && "none" !== I.minHeight ? I.height = I.minHeight : "row" === x.type && (I.height = "auto"), x._isstatic && x.elementHovered && (p = h.data("frames")) && p.frame_hover && p.frame_hover.transform)
						for (g in I) I.hasOwnProperty(g) && p.frame_hover.transform.hasOwnProperty(g) && delete I[g];
					"group" !== x.type && "row" !== x.type && "column" !== x.type && (!o.isNumeric(I.width) && I.width.indexOf("%") >= 0 && (I.width = "100%"), !o.isNumeric(I.height) && I.height.indexOf("%") >= 0 && (I.height = "100%")), x._isgroup && (!o.isNumeric(I.width) && I.width.indexOf("%") >= 0 && (I.width = "100%"), T.height = P ? "100%" : I.height), w = jQuery.extend(!0, w, I), null != x.svg_src && void 0 !== x.svgI && ("string" == typeof x.svgI.fill && (x.svgI.fill = [x.svgI.fill]), x.svgTemp = o.clone(x.svgI), void 0 !== x.svgTemp.fill && (x.svgTemp.fill = x.svgTemp.fill[o[f].level], tpGS.gsap.set(x.svgPath, {
						fill: x.svgI.fill[o[f].level]
					})), tpGS.gsap.set(x.svg, x.svgTemp))
				}
				if ("row" === x.type)
					for (t = 0; t < 4; t++) void 0 !== e["margin" + i[t]] && (T["padding" + i[t]] = e["margin" + i[t]] * L + "px");
				if ("column" === x.type && x.cbg && x.cbg.length > 0) {
					for (void 0 !== x.cbg_img_s && (x.cbg[0].style.backgroundSize = x.cbg_img_s), s = {}, "" !== x.styleProps.cursor && (s.cursor = x.styleProps.cursor), "" !== x.cbg_set && "transparent" !== x.cbg_set && (s.backgroundColor = x.cbg_set), "" !== x.cbg_img && "none" !== x.cbg_img && (s.backgroundImage = x.cbg_img, "" !== x.cbg_img_r && (s.backgroundRepeat = x.cbg_img_r), "" !== x.cbg_img_p && (s.backgroundPosition = x.cbg_img_p)), "" !== x.cbg_o && void 0 !== x.cbg_o && (s.opacity = x.cbg_o), t = 0; t < 4; t++) void 0 !== e.borderStyle && "none" !== e.borderStyle && (void 0 !== e["border" + i[t] + "Width"] && (s["border" + i[t] + "Width"] = Math.round(parseInt(e["border" + i[t] + "Width"]) * L) + "px"), void 0 !== e["border" + i[t] + "Color"] && (s["border" + i[t] + "Color"] = e["border" + i[t] + "Color"])), e["border" + a[t] + "Radius"] && (s["border" + a[t] + "Radius"] = e["border" + a[t] + "Radius"]);
					for (void 0 !== e.borderStyle && "none" !== e.borderStyle && (s.borderStyle = e.borderStyle), (n = JSON.stringify(s)) !== o[f].emptyObject && n !== x.caches.cbgS && tpGS.gsap.set(x.cbg, s), x.caches.cbgS = n, s = {}, t = 0; t < 4; t++) S["margin" + i[t]] && (s[r[t]] = S["margin" + i[t]] * L + "px");
					(n = JSON.stringify(s)) !== o[f].emptyObject && n !== x.caches.cbgmaskS && (tpGS.gsap.set(x.cbgmask, s), x.caches.cbgmaskS = n)
				}
				"auto" === T.maxWidth && (T.maxWidth = "inherit"), "auto" === T.maxHeight && (T.maxHeight = "inherit"), "auto" === _.maxWidth && (_.maxWidth = "inherit"), "auto" === _.maxHeight && (_.maxHeight = "inherit"), "auto" === R.maxWidth && (R.maxWidth = "inherit"), "auto" === R.maxHeight && (R.maxHeight = "inherit"), void 0 !== x.vidOBJ && (w.width = x.vidOBJ.width, w.height = x.vidOBJ.height), void 0 !== x.OBJUPD.lppmOBJ && (void 0 !== x.OBJUPD.lppmOBJ.minWidth && (R.minWidth = x.OBJUPD.lppmOBJ.minWidth, _.minWidth = x.OBJUPD.lppmOBJ.minWidth, T.minWidth = x.OBJUPD.lppmOBJ.minWidth), void 0 !== x.OBJUPD.lppmOBJ.minHeight && (R.minHeight = x.OBJUPD.lppmOBJ.minHeight, _.minHeight = x.OBJUPD.lppmOBJ.minHeight, T.minHeight = x.OBJUPD.lppmOBJ.minHeight)), n = JSON.stringify(w), l = JSON.stringify(R), d = JSON.stringify(_), c = JSON.stringify(T), void 0 === x.imgOBJ || void 0 !== x.caches.imgOBJ && x.caches.imgOBJ.width === x.imgOBJ.width && x.caches.imgOBJ.height === x.imgOBJ.height && x.caches.imgOBJ.left === x.imgOBJ.left && x.caches.imgOBJ.right === x.imgOBJ.right && x.caches.imgOBJ.top === x.imgOBJ.top && x.caches.imgOBJ.bottom === x.imgOBJ.bottom || (x.caches.imgOBJ = o.clone(x.imgOBJ), x.imgOBJ.position = "relative", tpGS.gsap.set(x.img, x.imgOBJ)), void 0 === x.mediaOBJ || void 0 !== x.caches.mediaOBJ && x.caches.mediaOBJ.width === x.mediaOBJ.width && x.caches.mediaOBJ.height === x.mediaOBJ.height && x.caches.mediaOBJ.display === x.mediaOBJ.display || (x.caches.mediaOBJ = o.clone(x.mediaOBJ), x.media.css(x.mediaOBJ)), n != o[f].emptyObject && n != x.caches.LOBJ && (tpGS.gsap.set(h, w), x.caches.LOBJ = n), l != o[f].emptyObject && l != x.caches.LPOBJ && (tpGS.gsap.set(x.lp, R), x.caches.LPOBJ = l), d != o[f].emptyObject && d != x.caches.MOBJ && (tpGS.gsap.set(x.m, _), x.caches.MOBJ = d), c != o[f].emptyObject && c != x.caches.POBJ && (tpGS.gsap.set(x.p, T), x.caches.POBJ = c, x.caches.POBJ_LEFT = T.left, x.caches.POBJ_TOP = T.top)
			}
		},
		B = function (e) {
			var t = {
				l: "none",
				lw: 10,
				r: "none",
				rw: 10
			};
			for (var i in e = e.split(";"))
				if (e.hasOwnProperty(i)) {
					var a = e[i].split(":");
					switch (a[0]) {
						case "l":
							t.l = a[1];
							break;
						case "r":
							t.r = a[1];
							break;
						case "lw":
							t.lw = a[1];
							break;
						case "rw":
							t.rw = a[1]
					}
				}
			return "polygon(" + M(t.l, 0, parseFloat(t.lw)) + "," + M(t.r, 100, 100 - parseFloat(t.rw), !0) + ")"
		},
		M = function (e, t, i, a) {
			var r;
			switch (e) {
				case "none":
					r = t + "% 100%," + t + "% 0%";
					break;
				case "top":
					r = i + "% 100%," + t + "% 0%";
					break;
				case "middle":
					r = i + "% 100%," + t + "% 50%," + i + "% 0%";
					break;
				case "bottom":
					r = t + "% 100%," + i + "% 0%";
					break;
				case "two":
					r = i + "% 100%," + t + "% 75%," + i + "% 50%," + t + "% 25%," + i + "% 0%";
					break;
				case "three":
					r = t + "% 100%," + i + "% 75%," + t + "% 50%," + i + "% 25%," + t + "% 0%";
					break;
				case "four":
					r = t + "% 100%," + i + "% 87.5%," + t + "% 75%," + i + "% 62.5%," + t + "% 50%," + i + "% 37.5%," + t + "% 25%," + i + "% 12.5%," + t + "% 0%";
					break;
				case "five":
					r = t + "% 100%," + i + "% 90%," + t + "% 80%," + i + "% 70%," + t + "% 60%," + i + "% 50%," + t + "% 40%," + i + "% 30%," + t + "% 20%," + i + "% 10%," + t + "% 0%"
			}
			if (a) {
				var o = r.split(",");
				for (var i in r = "", o) o.hasOwnProperty(i) && (r += o[o.length - 1 - i] + (i < o.length - 1 ? "," : ""))
			}
			return r
		}
}(jQuery),
function (e) {
	"use strict";
	var t = jQuery.fn.revolution,
		i = t.is_mobile();

	function a(e, i) {
		var a = new Object({
			single: ".tp-" + i,
			c: t[e].cpar.find(".tp-" + i + "s")
		});
		return a.mask = a.c.find(".tp-" + i + "-mask"), a.wrap = a.c.find(".tp-" + i + "s-inner-wrapper"), a
	}
	jQuery.extend(!0, t, {
		hideUnHideNav: function (e) {
			window.requestAnimationFrame(function () {
				var i = !1;
				p(t[e].navigation.arrows) && (i = k(t[e].navigation.arrows, e, i)), p(t[e].navigation.bullets) && (i = k(t[e].navigation.bullets, e, i)), p(t[e].navigation.thumbnails) && (i = k(t[e].navigation.thumbnails, e, i)), p(t[e].navigation.tabs) && (i = k(t[e].navigation.tabs, e, i)), i && t.manageNavigation(e)
			})
		},
		getOuterNavDimension: function (e) {
			t[e].navigation.scaler = Math.max(0, Math.min(1, (t.winW - 480) / 500));
			var i = {
				left: 0,
				right: 0,
				horizontal: 0,
				vertical: 0,
				top: 0,
				bottom: 0
			};
			return t[e].navigation.thumbnails && t[e].navigation.thumbnails.enable && (t[e].navigation.thumbnails.isVisible = t[e].navigation.thumbnails.hide_under < t[e].module.width && t[e].navigation.thumbnails.hide_over > t[e].module.width, t[e].navigation.thumbnails.cw = Math.max(Math.round(t[e].navigation.thumbnails.width * t[e].navigation.scaler), t[e].navigation.thumbnails.min_width), t[e].navigation.thumbnails.ch = Math.round(t[e].navigation.thumbnails.cw / t[e].navigation.thumbnails.width * t[e].navigation.thumbnails.height), t[e].navigation.thumbnails.isVisible && "outer-left" === t[e].navigation.thumbnails.position ? i.left = t[e].navigation.thumbnails.cw + 2 * t[e].navigation.thumbnails.wrapper_padding : t[e].navigation.thumbnails.isVisible && "outer-right" === t[e].navigation.thumbnails.position ? i.right = t[e].navigation.thumbnails.cw + 2 * t[e].navigation.thumbnails.wrapper_padding : t[e].navigation.thumbnails.isVisible && "outer-top" === t[e].navigation.thumbnails.position ? i.top = t[e].navigation.thumbnails.ch + 2 * t[e].navigation.thumbnails.wrapper_padding : t[e].navigation.thumbnails.isVisible && "outer-bottom" === t[e].navigation.thumbnails.position && (i.bottom = t[e].navigation.thumbnails.ch + 2 * t[e].navigation.thumbnails.wrapper_padding)), t[e].navigation.tabs && t[e].navigation.tabs.enable && (t[e].navigation.tabs.isVisible = t[e].navigation.tabs.hide_under < t[e].module.width && t[e].navigation.tabs.hide_over > t[e].module.width, t[e].navigation.tabs.cw = Math.max(Math.round(t[e].navigation.tabs.width * t[e].navigation.scaler), t[e].navigation.tabs.min_width), t[e].navigation.tabs.ch = Math.round(t[e].navigation.tabs.cw / t[e].navigation.tabs.width * t[e].navigation.tabs.height), t[e].navigation.tabs.isVisible && "outer-left" === t[e].navigation.tabs.position ? i.left += t[e].navigation.tabs.cw + 2 * t[e].navigation.tabs.wrapper_padding : t[e].navigation.tabs.isVisible && "outer-right" === t[e].navigation.tabs.position ? i.right += t[e].navigation.tabs.cw + 2 * t[e].navigation.tabs.wrapper_padding : t[e].navigation.tabs.isVisible && "outer-top" === t[e].navigation.tabs.position ? i.top += t[e].navigation.tabs.ch + 2 * t[e].navigation.tabs.wrapper_padding : t[e].navigation.tabs.isVisible && "outer-bottom" === t[e].navigation.tabs.position && (i.bottom += t[e].navigation.tabs.ch + 2 * t[e].navigation.tabs.wrapper_padding)), {
				left: i.left,
				right: i.right,
				horizontal: i.left + i.right,
				vertical: i.top + i.bottom,
				top: i.top,
				bottom: i.bottom
			}
		},
		resizeThumbsTabs: function (e, i) {
			if (void 0 !== t[e] && t[e].navigation.use && (t[e].navigation && t[e].navigation.bullets.enable || t[e].navigation && t[e].navigation.tabs.enable || t[e].navigation && t[e].navigation.thumbnails.enable)) {
				var a = tpGS.gsap.timeline(),
					r = t[e].navigation.tabs,
					s = t[e].navigation.thumbnails,
					n = t[e].navigation.bullets;
				if (a.pause(), p(r) && (i || r.width > r.min_width) && o(e, a, t[e].c, r, t[e].slideamount, "tab"), p(s) && (i || s.width > s.min_width) && o(e, a, t[e].c, s, t[e].slideamount, "thumb", e), p(n) && i) {
					var l = t[e].c.find(".tp-bullets");
					l.find(".tp-bullet").each(function (e) {
						var t = jQuery(this),
							i = e + 1,
							a = t.outerWidth() + parseInt(void 0 === n.space ? 0 : n.space, 0),
							r = t.outerHeight() + parseInt(void 0 === n.space ? 0 : n.space, 0);
						"vertical" === n.direction ? (t.css({
							top: (i - 1) * r + "px",
							left: "0px"
						}), l.css({
							height: (i - 1) * r + t.outerHeight(),
							width: t.outerWidth()
						})) : (t.css({
							left: (i - 1) * a + "px",
							top: "0px"
						}), l.css({
							width: (i - 1) * a + t.outerWidth(),
							height: t.outerHeight()
						}))
					})
				}
				a.play()
			}
			return !0
		},
		updateNavIndexes: function (e) {
			var i = t[e].c;

			function a(e) {
				i.find(e).lenght > 0 && i.find(e).each(function (e) {
					jQuery(this).data("liindex", e)
				})
			}
			a("rs-tab"), a("rs-bullet"), a("rs-thumb"), t.resizeThumbsTabs(e, !0), t.manageNavigation(e)
		},
		manageNavigation: function (e, i) {
			t[e].navigation.use && (p(t[e].navigation.bullets) && ("fullscreen" != t[e].sliderLayout && "fullwidth" != t[e].sliderLayout && (t[e].navigation.bullets.h_offset_old = void 0 === t[e].navigation.bullets.h_offset_old ? parseInt(t[e].navigation.bullets.h_offset, 0) : t[e].navigation.bullets.h_offset_old, t[e].navigation.bullets.h_offset = "center" === t[e].navigation.bullets.h_align ? t[e].navigation.bullets.h_offset_old + t[e].outNavDims.left / 2 - t[e].outNavDims.right / 2 : t[e].navigation.bullets.h_offset_old + t[e].outNavDims.left), w(t[e].navigation.bullets.c, t[e].navigation.bullets, e)), p(t[e].navigation.thumbnails) && w(t[e].navigation.thumbnails, e), p(t[e].navigation.tabs) && w(t[e].navigation.tabs, e), p(t[e].navigation.arrows) && ("fullscreen" != t[e].sliderLayout && "fullwidth" != t[e].sliderLayout && (t[e].navigation.arrows.left.h_offset_old = void 0 === t[e].navigation.arrows.left.h_offset_old ? parseInt(t[e].navigation.arrows.left.h_offset, 0) : t[e].navigation.arrows.left.h_offset_old, t[e].navigation.arrows.left.h_offset = (t[e].navigation.arrows.left.h_align, t[e].navigation.arrows.left.h_offset_old), t[e].navigation.arrows.right.h_offset_old = void 0 === t[e].navigation.arrows.right.h_offset_old ? parseInt(t[e].navigation.arrows.right.h_offset, 0) : t[e].navigation.arrows.right.h_offset_old, t[e].navigation.arrows.right.h_offset = (t[e].navigation.arrows.right.h_align, t[e].navigation.arrows.right.h_offset_old)), w(t[e].navigation.arrows.left, e), w(t[e].navigation.arrows.right, e)), !1 !== i && (p(t[e].navigation.thumbnails) && r(t[e].navigation.thumbnails, e), p(t[e].navigation.tabs) && r(t[e].navigation.tabs, e)))
		},
		showFirstTime: function (e) {
			u(e), t.hideUnHideNav(e)
		},
		selectNavElement: function (e, i, a, r) {
			for (var o = t[e].cpar[0].getElementsByClassName(a), s = 0; s < o.length; s++) t.gA(o[s], "key") === i ? (o[s].classList.add("selected"), void 0 !== r && r()) : o[s].classList.remove("selected")
		},
		transferParams: function (e, t) {
			if (void 0 !== t)
				for (var i in t.params) e = e.replace(t.params[i].from, t.params[i].to);
			return e
		},
		updateNavElementContent: function (e, i, a, o, s) {
			if (void 0 !== t[e].pr_next_key || void 0 !== t[e].pr_active_key) {
				var n = void 0 === t[e].pr_next_key ? void 0 === t[e].pr_cache_pr_next_key ? t[e].pr_active_key : t[e].pr_cache_pr_next_key : t[e].pr_next_key,
					l = t.gA(t[e].slides[n], "key"),
					d = 0,
					c = !1;
				for (var p in a.enable && t.selectNavElement(e, l, "tp-bullet"), o.enable && t.selectNavElement(e, l, "tp-thumb", function () {
						r(o, e)
					}), s.enable && t.selectNavElement(e, l, "tp-tab", function () {
						r(s, e)
					}), t[e].thumbs) d = !0 === c ? d : p, c = t[e].thumbs[p].id === l || p == l || c;
				var g = (d = parseInt(d, 0)) > 0 ? d - 1 : t[e].slideamount - 1,
					u = d + 1 == t[e].slideamount ? 0 : d + 1;
				if (!0 === i.enable && i.pi !== g && i.ni !== u) {
					if (i.pi = g, i.ni = u, i.left.c[0].innerHTML = t.transferParams(i.tmp, t[e].thumbs[g]), u > t[e].slideamount) return;
					i.right.c[0].innerHTML = t.transferParams(i.tmp, t[e].thumbs[u]), i.right.iholder = i.right.c.find(".tp-arr-imgholder"), i.left.iholder = i.left.c.find(".tp-arr-imgholder"), i.rtl ? (void 0 !== i.left.iholder[0] && tpGS.gsap.set(i.left.iholder, {
						backgroundImage: "url(" + t[e].thumbs[u].src + ")"
					}), void 0 !== t[e].thumbs[g] && void 0 !== i.right.iholder[0] && tpGS.gsap.set(i.right.iholder, {
						backgroundImage: "url(" + t[e].thumbs[g].src + ")"
					})) : (void 0 !== t[e].thumbs[g] && void 0 !== i.left.iholder[0] && tpGS.gsap.set(i.left.iholder, {
						backgroundImage: "url(" + t[e].thumbs[g].src + ")"
					}), void 0 !== i.right.iholder[0] && tpGS.gsap.set(i.right.iholder, {
						backgroundImage: "url(" + t[e].thumbs[u].src + ")"
					}))
				}
			}
		},
		createNavigation: function (e) {
			var r = t[e].navigation.arrows,
				o = t[e].navigation.bullets,
				l = t[e].navigation.thumbnails,
				m = t[e].navigation.tabs,
				f = p(r),
				y = p(o),
				b = p(l),
				k = p(m);
			for (var S in s(e), n(e), f && (v(r, e), r.c = t[e].cpar.find(".tparrows")), t[e].slides)
				if (t[e].slides.hasOwnProperty(S) && "true" != t.gA(t[e].slides[S], "not_in_nav")) {
					var L = jQuery(t[e].slides[t[e].slides.length - 1 - S]),
						T = jQuery(t[e].slides[S]);
					y && (t[e].navigation.bullets.rtl ? _(t[e].c, o, L, e) : _(t[e].c, o, T, e)), b && (t[e].navigation.thumbnails.rtl ? x(t[e].c, l, L, "tp-thumb", e) : x(t[e].c, l, T, "tp-thumb", e)), k && (t[e].navigation.tabs.rtl ? x(t[e].c, m, L, "tp-tab", e) : x(t[e].c, m, T, "tp-tab", e))
				}
			y && w(o, e), b && w(l, e), k && w(m, e), (b || k) && t.updateDims(e), t[e].navigation.createNavigationDone = !0, b && jQuery.extend(!0, l, a(e, "thumb")), k && jQuery.extend(!0, m, a(e, "tab")), t[e].c.on("revolution.slide.onafterswap revolution.nextslide.waiting", function () {
				t.updateNavElementContent(e, r, o, l, m)
			}), c(r), c(o), c(l), c(m), t[e].cpar.on("mouseenter mousemove", function (a) {
				void 0 !== a.target && void 0 !== a.target.className && "string" == typeof a.target.className && a.target.className.indexOf("rs-waction") >= 0 || !0 !== t[e].tpMouseOver && t[e].firstSlideAvailable && (t[e].tpMouseOver = !0, u(e), i && !0 !== t[e].someNavIsDragged && (g(t[e].hideAllNavElementTimer), t[e].hideAllNavElementTimer = setTimeout(function () {
					t[e].tpMouseOver = !1, h(e)
				}, 150)))
			}), t[e].cpar.on("mouseleave ", function () {
				t[e].tpMouseOver = !1, h(e)
			}), (b || k || "carousel" === t[e].sliderType || t[e].navigation.touch.touchOnDesktop || t[e].navigation.touch.touchenabled && i) && d(e), t[e].navigation.initialised = !0, t.updateNavElementContent(e, r, o, l, m), t.showFirstTime(e)
		}
	});
	var r = function (e, i) {
			if (void 0 !== e && null != e.mask) {
				var a = "vertical" === e.direction ? e.mask.find(e.single).first().outerHeight(!0) + e.space : e.mask.find(e.single).first().outerWidth(!0) + e.space,
					r = "vertical" === e.direction ? e.mask.height() : e.mask.width(),
					o = e.mask.find(e.single + ".selected").data("liindex");
				o = (o = void 0 === (o = e.rtl ? t[i].slideamount - o : o) ? 0 : o) > 0 && 1 === t[i].sdir && e.visibleAmount > 1 ? o - 1 : o;
				var s = r / a,
					n = "vertical" === e.direction ? e.mask.height() : e.mask.width(),
					l = 0 - o * a,
					d = "vertical" === e.direction ? e.wrap.height() : e.wrap.width(),
					c = l < 0 - (d - n) ? 0 - (d - n) : l,
					p = t.gA(e.wrap[0], "offset");
				p = void 0 === p ? 0 : p, s > 2 && (c = l - (p + a) <= 0 ? l - (p + a) < 0 - a ? p : c + a : c, c = l - a + p + r < a && l + (Math.round(s) - 2) * a < p ? l + (Math.round(s) - 2) * a : c), c = "vertical" !== e.direction && e.mask.width() >= e.wrap.width() || "vertical" === e.direction && e.mask.height() >= e.wrap.height() ? 0 : c < 0 - (d - n) ? 0 - (d - n) : c > 0 ? 0 : c, e.c.hasClass("dragged") || ("vertical" === e.direction ? e.wrap.data("tmmove", tpGS.gsap.to(e.wrap, .5, {
					top: c + "px",
					ease: "power3.inOut"
				})) : e.wrap.data("tmmove", tpGS.gsap.to(e.wrap, .5, {
					left: c + "px",
					ease: "power3.inOut"
				})), e.wrap.data("offset", c))
			}
		},
		o = function (e, i, a, r, o, s) {
			var n = a.parent().find(".tp-" + s + "s"),
				l = n.find(".tp-" + s + "s-inner-wrapper"),
				d = n.find(".tp-" + s + "-mask"),
				c = "vertical" === r.direction ? r.cw : r.cw * o + r.space * (o - 1),
				p = "vertical" === r.direction ? r.ch * o + r.space * (o - 1) : r.ch,
				g = "vertical" === r.direction ? {
					width: r.cw + "px"
				} : {
					height: r.ch + "px"
				};
			i.add(tpGS.gsap.set(n, g)), i.add(tpGS.gsap.set(l, {
				width: c + "px",
				height: p + "px"
			})), i.add(tpGS.gsap.set(d, {
				width: c + "px",
				height: p + "px"
			})), null !== l.outerWidth() && (t[e].thumbResized = !0);
			var u = l.find(".tp-" + s);
			return u && jQuery.each(u, function (e, t) {
				"vertical" === r.direction ? i.add(tpGS.gsap.set(t, {
					top: e * (r.ch + parseInt(void 0 === r.space ? 0 : r.space, 0)),
					width: r.cw + "px",
					height: r.ch + "px"
				})) : "horizontal" === r.direction && i.add(tpGS.gsap.set(t, {
					left: e * (r.cw + parseInt(void 0 === r.space ? 0 : r.space, 0)),
					width: r.cw + "px",
					height: r.ch + "px"
				}))
			}), i
		},
		s = function (e) {
			!0 === t[e].navigation.keyboardNavigation && t.document.keydown(function (i) {
				if ("horizontal" == t[e].navigation.keyboard_direction && 39 == i.keyCode || "vertical" == t[e].navigation.keyboard_direction && 40 == i.keyCode) {
					if (void 0 !== t[e].keydown_time_stamp && (new Date).getTime() - t[e].keydown_time_stamp < 1e3) return;
					t[e].sc_indicator = "arrow", t[e].sc_indicator_dir = 0, "carousel" === t[e].sliderType && (t[e].ctNavElement = !0), t.callingNewSlide(e, 1, "carousel" === t[e].sliderType)
				}
				if ("horizontal" == t[e].navigation.keyboard_direction && 37 == i.keyCode || "vertical" == t[e].navigation.keyboard_direction && 38 == i.keyCode) {
					if (void 0 !== t[e].keydown_time_stamp && (new Date).getTime() - t[e].keydown_time_stamp < 1e3) return;
					t[e].sc_indicator = "arrow", t[e].sc_indicator_dir = 1, "carousel" === t[e].sliderType && (t[e].ctNavElement = !0), t.callingNewSlide(e, -1, "carousel" === t[e].sliderType)
				}
				t[e].keydown_time_stamp = (new Date).getTime()
			})
		},
		n = function (e) {
			!0 !== t[e].navigation.mouseScrollNavigation && "on" !== t[e].navigation.mouseScrollNavigation && "carousel" !== t[e].navigation.mouseScrollNavigation || t[e].c.on("wheel mousewheel DOMMouseScroll", function (i) {
				var a = function (e) {
						var t = 0;
						return "deltaY" in e ? t = e.deltaY : ("detail" in e && (t = e.detail), "wheelDelta" in e && (t = -e.wheelDelta / 120), "wheelDeltaY" in e && (t = -e.wheelDeltaY / 120)), ((t = navigator.userAgent.match(/mozilla/i) ? 10 * t : t) > 300 || t < -300) && (t /= 10), t
					}(i.originalEvent),
					r = !1,
					o = 0 == t[e].pr_active_key || 0 == t[e].pr_processing_key,
					s = t[e].pr_active_key == t[e].slideamount - 1 || t[e].pr_processing_key == t[e].slideamount - 1,
					n = void 0 !== t[e].topc ? t[e].topc[0].getBoundingClientRect() : 0 === t[e].canv.height ? t[e].cpar[0].getBoundingClientRect() : t[e].c[0].getBoundingClientRect();
				if ((n.top > 0 && n.bottom < t.winH ? 1 : n.top >= 0 && n.bottom >= t.winH ? (t.winH - n.top) / n.height : n.top <= 0 && n.bottom <= t.winH ? n.bottom / n.height : 1) >= t[e].navigation.wheelViewPort) {
					if ("reverse" == t[e].navigation.mouseScrollReverse) {
						let e = s;
						s = o, o = e
					}
					if ("carousel" === t[e].sliderType && !1 === t[e].carousel.snap) t.swipeAnimate({
						id: e,
						to: t[e].carousel.slide_offset + 5 * a,
						direction: a < 0 ? "left" : "right",
						easing: "power2.out",
						phase: "move"
					});
					else {
						var l = a < 0 ? -1 : 1;
						t[e].sc_indicator_dir = "reverse" === t[e].navigation.mouseScrollReverse && l < 0 || "reverse" !== t[e].navigation.mouseScrollReverse && l > 0 ? 0 : 1, "carousel" == t[e].navigation.mouseScrollNavigation || 0 === t[e].sc_indicator_dir && !s || 1 === t[e].sc_indicator_dir && !o ? void 0 === t[e].pr_processing_key && !0 !== t[e].justmouseScrolled ? (t[e].sc_indicator = "arrow", "carousel" === t[e].sliderType && (t[e].ctNavElement = !0), t.callingNewSlide(e, 0 === t[e].sc_indicator_dir ? 1 : -1, "carousel" === t[e].sliderType), t[e].justmouseScrolled = !0, setTimeout(function () {
							t[e].justmouseScrolled = !1
						}, t[e].navigation.wheelCallDelay)) : delete t[e].sc_indicator_dir : !0 !== t[e].justmouseScrolled && (r = !0)
					}
					return !!r || (i.preventDefault(i), !1)
				}
			})
		},
		l = function (e, t) {
			var a = !1;
			for (var r in (void 0 === t.path || i) && (a = function (e, t) {
					for (; e && e !== document; e = e.parentNode)
						if (e.tagName === t) return e;
					return !1
				}(t.target, e)), t.path) t.path.hasOwnProperty(r) && t.path[r].tagName === e && (a = !0);
			return a
		},
		d = function (e) {
			var a = t[e].carousel,
				r = t.is_android();
			jQuery(".bullet, .bullets, .tp-bullets, .tparrows").addClass("noSwipe"), t[e].navigation.touch = void 0 === t[e].navigation.touch ? {} : t[e].navigation.touch, t[e].navigation.touch.swipe_direction = void 0 === t[e].navigation.touch.swipe_direction ? "horizontal" : t[e].navigation.touch.swipe_direction, jQuery(".rs-nav-element").rsswipe({
				allowPageScroll: "vertical",
				triggerOnTouchLeave: !0,
				treshold: t[e].navigation.touch.swipe_treshold,
				fingers: t[e].navigation.touch.swipe_min_touches > 5 ? 1 : t[e].navigation.touch.swipe_min_touches,
				excludedElements: "button, input, select, textarea, .noSwipe, .rs-waction",
				tap: function (e, t) {
					if (void 0 !== t) var i = jQuery(t).closest("rs-thumb");
					void 0 !== i && i.length > 0 ? i.trigger("click") : (i = jQuery(t).closest("rs-tab")).length > 0 ? i.trigger("click") : (i = jQuery(t).closest("rs-bullet")).length > 0 && i.trigger("click")
				},
				swipeStatus: function (i, o, s, n, d, c, p) {
					if ("start" !== o && "move" !== o && "end" !== o && "cancel" != o) return !0;
					var u = l("RS-THUMB", i),
						h = l("RS-TAB", i);
					!1 === u && !1 === h && !0 !== (u = "RS-THUMBS-WRAP" === i.target.tagName || "RS-THUMBS" === i.target.tagName || i.target.className.indexOf("tp-thumb-mask") >= 0) && (h = "RS-TABS-WRAP" === i.target.tagName || "RS-TABS" === i.target.tagName || i.target.className.indexOf("tp-tab-mask") >= 0);
					var f = "start" === o ? 0 : r ? p[0].end.x - p[0].start.x : i.pageX - a.screenX,
						v = "start" === o ? 0 : r ? p[0].end.y - p[0].start.y : i.pageY - a.screenY,
						y = u ? ".tp-thumbs" : ".tp-tabs",
						b = u ? ".tp-thumb-mask" : ".tp-tab-mask",
						w = u ? ".tp-thumbs-inner-wrapper" : ".tp-tabs-inner-wrapper",
						_ = u ? ".tp-thumb" : ".tp-tab",
						x = u ? t[e].navigation.thumbnails : t[e].navigation.tabs,
						k = t[e].cpar.find(b),
						S = k.find(w),
						L = x.direction,
						T = "vertical" === L ? S.height() : S.width(),
						R = "vertical" === L ? k.height() : k.width(),
						O = "vertical" === L ? k.find(_).first().outerHeight(!0) + x.space : k.find(_).first().outerWidth(!0) + x.space,
						A = void 0 === S.data("offset") ? 0 : parseInt(S.data("offset"), 0),
						I = 0;
					switch (o) {
						case "start":
							"vertical" === L && i.preventDefault(), a.screenX = r ? p[0].end.x : i.pageX, a.screenY = r ? p[0].end.y : i.pageY, t[e].cpar.find(y).addClass("dragged"), A = "vertical" === L ? S.position().top : S.position().left, S.data("offset", A), S.data("tmmove") && S.data("tmmove").pause(), t[e].someNavIsDragged = !0, m(e);
							break;
						case "move":
							if (T <= R) return !1;
							I = (I = A + ("vertical" === L ? v : f)) > 0 ? "horizontal" === L ? I - S.width() * (I / S.width() * I / S.width()) : I - S.height() * (I / S.height() * I / S.height()) : I;
							var C = "vertical" === L ? 0 - (S.height() - k.height()) : 0 - (S.width() - k.width());
							I = I < C ? "horizontal" === L ? I + S.width() * (I - C) / S.width() * (I - C) / S.width() : I + S.height() * (I - C) / S.height() * (I - C) / S.height() : I, "vertical" === L ? tpGS.gsap.set(S, {
								top: I + "px"
							}) : tpGS.gsap.set(S, {
								left: I + "px"
							}), g(t[e].hideAllNavElementTimer);
							break;
						case "end":
						case "cancel":
							return I = A + ("vertical" === L ? v : f), I = (I = "vertical" === L ? I < 0 - (S.height() - k.height()) ? 0 - (S.height() - k.height()) : I : I < 0 - (S.width() - k.width()) ? 0 - (S.width() - k.width()) : I) > 0 ? 0 : I, I = Math.abs(n) > O / 10 ? n <= 0 ? Math.floor(I / O) * O : Math.ceil(I / O) * O : n < 0 ? Math.ceil(I / O) * O : Math.floor(I / O) * O, I = (I = "vertical" === L ? I < 0 - (S.height() - k.height()) ? 0 - (S.height() - k.height()) : I : I < 0 - (S.width() - k.width()) ? 0 - (S.width() - k.width()) : I) > 0 ? 0 : I, "vertical" === L ? tpGS.gsap.to(S, .5, {
								top: I + "px",
								ease: "power3.out"
							}) : tpGS.gsap.to(S, .5, {
								left: I + "px",
								ease: "power3.out"
							}), I = I || ("vertical" === L ? S.position().top : S.position().left), S.data("offset", I), S.data("distance", n), t[e].cpar.find(y).removeClass("dragged"), t[e].someNavIsDragged = !1, !0
					}
				}
			}), ("carousel" !== t[e].sliderType && (i && t[e].navigation.touch.touchenabled || !0 !== i && t[e].navigation.touch.touchOnDesktop) || "carousel" === t[e].sliderType && (i && t[e].navigation.touch.mobileCarousel || !0 !== i && t[e].navigation.touch.desktopCarousel)) && (t[e].preventClicks = !1), t[e].c.on("click", function (i) {
				t[e].preventClicks && i.preventDefault()
			}), t[e].c.rsswipe({
				allowPageScroll: "vertical",
				triggerOnTouchLeave: !0,
				treshold: t[e].navigation.touch.swipe_treshold,
				fingers: t[e].navigation.touch.swipe_min_touches > 5 ? 1 : t[e].navigation.touch.swipe_min_touches,
				excludedElements: "label, button, input, select, textarea, .noSwipe, .rs-nav-element",
				swipeStatus: function (o, s, n, l, d, c, p) {
					t[e].preventClicks = !0;
					var g = "start" === s ? 0 : r ? p[0].end.x - p[0].start.x : o.pageX - a.screenX;
					"start" === s || (r ? (p[0].end.x, p[0].start.y) : (o.pageY, a.screenY));
					if (!("carousel" === t[e].sliderType && t[e].carousel.wrapwidth > t[e].carousel.maxwidth && "center" !== t[e].carousel.horizontal_align)) {
						if ("carousel" !== t[e].sliderType) {
							if ("end" == s) {
								if (t[e].sc_indicator = "arrow", "horizontal" == t[e].navigation.touch.swipe_direction && "left" == n || "vertical" == t[e].navigation.touch.swipe_direction && "up" == n) return t[e].sc_indicator_dir = 0, t.callingNewSlide(e, 1), !1;
								if ("horizontal" == t[e].navigation.touch.swipe_direction && "right" == n || "vertical" == t[e].navigation.touch.swipe_direction && "down" == n) return t[e].sc_indicator_dir = 1, t.callingNewSlide(e, -1), !1
							}
							return !0
						}
						switch ((a.preventSwipe || i && ("left" === n || "right" === n)) && o.preventDefault(), void 0 !== a.positionanim && a.positionanim.pause(), a.carouselAutomatic = !1, s) {
							case "start":
								clearTimeout(a.swipeMainTimer), a.beforeSwipeOffet = a.slide_offset, a.focusedBeforeSwipe = a.focused, a.beforeDragStatus = t[e].sliderstatus, t[e].c.trigger("stoptimer"), a.swipeStartPos = r ? p[0].start.x : o.pageX, a.swipeStartTime = (new Date).getTime(), a.screenX = r ? p[0].end.x : o.pageX, a.screenY = r ? p[0].end.y : o.pageY, void 0 !== a.positionanim && (a.positionanim.pause(), a.carouselAutomatic = !1), a.overpull = "none", a.wrap.addClass("dragged");
								break;
							case "move":
								if ("left" !== n && "right" !== n || (a.preventSwipe = !0), a.justDragged = !0, Math.abs(g) >= 10 || t[e].carousel.isDragged) {
									if (t[e].carousel.isDragged = !0, t[e].c.find(".rs-waction").addClass("tp-temporarydisabled"), a.CACHE_slide_offset = a.beforeSwipeOffet + g, !a.infinity) {
										var u = "center" === a.horizontal_align ? (a.wrapwidth / 2 - a.slide_width / 2 - a.CACHE_slide_offset) / a.slide_width : (0 - a.CACHE_slide_offset) / a.slide_width;
										"none" !== a.overpull && 0 !== a.overpull || !(u < 0 || u > t[e].slideamount - 1) ? u >= 0 && u <= t[e].slideamount - 1 && (u >= 0 && g > a.overpull || u <= t[e].slideamount - 1 && g < a.overpull) && (a.overpull = 0) : a.overpull = g, a.CACHE_slide_offset = u < 0 ? a.CACHE_slide_offset + (a.overpull - g) / 1.5 + Math.sqrt(Math.abs((a.overpull - g) / 1.5)) : u > t[e].slideamount - 1 ? a.CACHE_slide_offset + (a.overpull - g) / 1.5 - Math.sqrt(Math.abs((a.overpull - g) / 1.5)) : a.CACHE_slide_offset
									}
									t.swipeAnimate({
										id: e,
										to: a.CACHE_slide_offset,
										direction: n,
										easing: "power2.out",
										phase: "move"
									})
								}
								break;
							case "end":
							case "cancel":
								clearTimeout(a.swipeMainTimer), a.swipeMainTimer = setTimeout(function () {
									a.preventSwipe = !1
								}, 500), t[e].carousel.isDragged = !1, a.wrap.removeClass("dragged"), a.swipeEndPos = r ? p[0].end.x : o.pageX, a.swipeEndTime = (new Date).getTime(), a.swipeDuration = a.swipeEndTime - a.swipeStartTime, a.swipeDistance = i ? a.swipeEndPos - a.swipeStartPos : (a.swipeEndPos - a.swipeStartPos) / 1.5, a.swipePower = a.swipeDistance / a.swipeDuration, a.CACHE_slide_offset = a.slide_offset + a.swipeDistance * Math.abs(a.swipePower), t.swipeAnimate({
									id: e,
									to: a.CACHE_slide_offset,
									direction: n,
									fix: !0,
									newSlide: !0,
									easing: "power2.out",
									phase: "end"
								}), "playing" === a.beforeDragStatus && t[e].c.trigger("restarttimer"), setTimeout(function () {
									t[e].c.find(".rs-waction").removeClass("tp-temporarydisabled")
								}, 19)
						}
					}
				},
				tap: function () {
					t[e].preventClicks = !1
				}
			}), "carousel" === t[e].sliderType && (i && 0 == t[e].navigation.touch.mobileCarousel || !0 !== i && !1 === t[e].navigation.touch.desktopCarousel) && a.wrap.addClass("noswipe"), t[e].navigation.touch.drag_block_vertical && t[e].c.addClass("disableVerticalScroll")
		},
		c = function (e) {
			e.hide_delay = t.isNumeric(parseInt(e.hide_delay, 0)) ? e.hide_delay : .2, e.hide_delay_mobile = t.isNumeric(parseInt(e.hide_delay_mobile, 0)) ? e.hide_delay_mobile : .2
		},
		p = function (e) {
			return e && e.enable
		},
		g = function (e) {
			clearTimeout(e)
		},
		u = function (e) {
			var i = t[e].navigation.maintypes;
			for (var a in i) i.hasOwnProperty(a) && p(t[e].navigation[i[a]]) && void 0 !== t[e].navigation[i[a]].c && (g(t[e].navigation[i[a]].showCall), t[e].navigation[i[a]].showCall = setTimeout(function (i) {
				g(i.hideCall), i.hide_onleave && !0 !== t[e].tpMouseOver || (void 0 === i.tween ? i.tween = f(i) : i.tween.play())
			}, t[e].navigation[i[a]].hide_onleave && !0 !== t[e].tpMouseOver ? 0 : parseInt(t[e].navigation[i[a]].animDelay), t[e].navigation[i[a]]))
		},
		m = function (e) {
			var i = t[e].navigation.maintypes;
			for (var a in i) i.hasOwnProperty(a) && void 0 !== t[e].navigation[i[a]] && t[e].navigation[i[a]].hide_onleave && p(t[e].navigation[i[a]]) && g(t[e].navigation[i[a]].hideCall)
		},
		h = function (e, a) {
			var r = t[e].navigation.maintypes;
			for (var o in r) r.hasOwnProperty(o) && void 0 !== t[e].navigation[r[o]] && t[e].navigation[r[o]].hide_onleave && p(t[e].navigation[r[o]]) && (g(t[e].navigation[r[o]].hideCall), t[e].navigation[r[o]].hideCall = setTimeout(function (e) {
				g(e.showCall), e.tween && e.tween.reverse()
			}, i ? parseInt(t[e].navigation[r[o]].hide_delay_mobile, 0) : parseInt(t[e].navigation[r[o]].hide_delay, 0), t[e].navigation[r[o]]))
		},
		f = function (e) {
			e.speed = void 0 === e.speed ? .5 : e.speed, e.anims = [], void 0 !== e.anim && void 0 === e.left && e.anims.push(e.anim), void 0 !== e.left && e.anims.push(e.left.anim), void 0 !== e.right && e.anims.push(e.right.anim);
			var t = tpGS.gsap.timeline();
			for (var i in t.add(tpGS.gsap.to(e.c, e.speed, {
					opacity: 1,
					ease: "power3.inOut"
				}), 0), e.anims)
				if (e.anims.hasOwnProperty(i)) switch (e.anims[i]) {
					case "left":
						t.add(tpGS.gsap.fromTo(e.c[i], e.speed, {
							marginLeft: -50
						}, {
							marginLeft: 0,
							ease: "power3.inOut"
						}), 0);
						break;
					case "right":
						t.add(tpGS.gsap.fromTo(e.c[i], e.speed, {
							marginLeft: 50
						}, {
							marginLeft: 0,
							ease: "power3.inOut"
						}), 0);
						break;
					case "top":
						t.add(tpGS.gsap.fromTo(e.c[i], e.speed, {
							marginTop: -50
						}, {
							marginTop: 0,
							ease: "power3.inOut"
						}), 0);
						break;
					case "bottom":
						t.add(tpGS.gsap.fromTo(e.c[i], e.speed, {
							marginTop: 50
						}, {
							marginTop: 0,
							ease: "power3.inOut"
						}), 0);
						break;
					case "zoomin":
						t.add(tpGS.gsap.fromTo(e.c[i], e.speed, {
							scale: .5
						}, {
							scale: 1,
							ease: "power3.inOut"
						}), 0);
						break;
					case "zoomout":
						t.add(tpGS.gsap.fromTo(e.c[i], e.speed, {
							scale: 1.2
						}, {
							scale: 1,
							ease: "power3.inOut"
						}), 0)
				}
			return t.play(), t
		},
		v = function (e, i) {
			e.style = void 0 === e.style ? "" : e.style, e.left.style = void 0 === e.left.style ? "" : e.left.style, e.right.style = void 0 === e.right.style ? "" : e.right.style, void 0 === e.left.c && (e.left.c = jQuery('<rs-arrow style="opacity:0" class="tp-leftarrow tparrows ' + e.style + " " + e.left.style + '">' + e.tmp + "</rs-arrow>"), t[i].c.append(e.left.c)), void 0 === e.right.c && (e.right.c = jQuery('<rs-arrow style="opacity:0"  class="tp-rightarrow tparrows ' + e.style + " " + e.right.style + '">' + e.tmp + "</rs-arrow>"), t[i].c.append(e.right.c)), e[e.rtl ? "left" : "right"].c.on("click", function () {
				"carousel" === t[i].sliderType && (t[i].ctNavElement = !0), t[i].sc_indicator = "arrow", t[i].sc_indicator_dir = 0, t[i].c.revnext()
			}), e[e.rtl ? "right" : "left"].c.on("click", function () {
				"carousel" === t[i].sliderType && (t[i].ctNavElement = !0), t[i].sc_indicator = "arrow", t[i].sc_indicator_dir = 1, t[i].c.revprev()
			}), e.padding_top = parseInt(t[i].carousel.padding_top || 0, 0), e.padding_bottom = parseInt(t[i].carousel.padding_bottom || 0, 0), w(e.left, i), w(e.right, i), "outer-left" != e.position && "outer-right" != e.position || (t[i].outernav = !0)
		},
		y = function (e, i, a, r) {
			r = void 0 === r ? e.outerHeight(!0) : r;
			var o = null == t[a] ? 0 : 0 == t[a].canv.height ? t[a].module.height : t[a].canv.height,
				s = "layergrid" == i.container ? "fullscreen" == t[a].sliderLayout ? t[a].module.height / 2 - t[a].gridheight[t[a].level] * t[a].CM.h / 2 : t[a].autoHeight || null != t[a].minHeight && t[a].minHeight > 0 ? o / 2 - t[a].gridheight[t[a].level] * t[a].CM.h / 2 : 0 : 0,
				n = "top" === i.v_align ? {
					top: "0px",
					y: Math.round(i.v_offset + s) + "px"
				} : "center" === i.v_align ? {
					top: "50%",
					y: Math.round(0 - r / 2 + i.v_offset) + "px"
				} : {
					top: "100%",
					y: Math.round(0 - (r + i.v_offset + s)) + "px"
				};
			e.hasClass("outer-bottom") || tpGS.gsap.set(e, n)
		},
		b = function (e, i, a, r) {
			r = void 0 === r ? e.outerWidth() : r;
			var o = "layergrid" === i.container ? t[a].module.width / 2 - t[a].gridwidth[t[a].level] * t[a].CM.w / 2 : 0,
				s = "left" === i.h_align ? {
					left: "0px",
					x: Math.round(i.h_offset + o) + "px"
				} : "center" === i.h_align ? {
					left: "50%",
					x: Math.round(0 - r / 2 + i.h_offset) + "px"
				} : {
					left: "100%",
					x: Math.round(0 - (r + i.h_offset + o)) + "px"
				};
			tpGS.gsap.set(e, s)
		},
		w = function (e, i) {
			if (null != e && void 0 !== e.c) {
				var a = "fullwidth" == t[i].sliderLayout || "fullscreen" == t[i].sliderLayout ? t[i].module.width : t[i].canv.width,
					r = e.c.outerWidth(),
					o = e.c.outerHeight();
				if (!(r <= 0 || o <= 0) && (y(e.c, e, i, o), b(e.c, e, i, r), "outer-left" === e.position ? tpGS.gsap.set(e.c, {
						left: 0 - r + "px",
						x: e.h_offset + "px"
					}) : "outer-right" === e.position && tpGS.gsap.set(e.c, {
						right: 0 - r + "px",
						x: e.h_offset + "px"
					}), "tp-thumb" === e.type || "tp-tab" === e.type)) {
					var s = parseInt(e.padding_top || 0, 0),
						n = parseInt(e.padding_bottom || 0, 0),
						l = {},
						d = {};
					e.maxw > a && "outer-left" !== e.position && "outer-right" !== e.position ? (l.left = "0px", l.x = 0, l.maxWidth = a - 2 * e.wpad + "px", d.maxWidth = a - 2 * e.wpad + "px") : (l.maxWidth = e.maxw, d.maxWidth = a + "px"), e.maxh + 2 * e.wpad > t[i].conh && "outer-bottom" !== e.position && "outer-top" !== e.position ? (l.top = "0px", l.y = 0, l.maxHeight = s + n + (t[i].conh - 2 * e.wpad) + "px", d.maxHeight = s + n + (t[i].conh - 2 * e.wpad) + "px") : (l.maxHeight = e.maxh + "px", d.maxHeight = e.maxh + "px"), e.mask = void 0 === e.mask ? e.c.find("rs-navmask") : e.mask, (e.mhoff > 0 || e.mvoff > 0) && (d.padding = e.mvoff + "px " + e.mhoff + "px"), e.span ? ("layergrid" == e.container && "outer-left" !== e.position && "outer-right" !== e.position && (s = n = 0), "vertical" === e.direction ? (l.maxHeight = s + n + (t[i].conh - 2 * e.wpad) + "px", l.height = s + n + (t[i].conh - 2 * e.wpad) + "px", l.top = 0, l.y = 0, d.maxHeight = s + n + Math.min(e.maxh, t[i].conh - 2 * e.wpad) + "px", tpGS.gsap.set(e.c, l), tpGS.gsap.set(e.mask, d), y(e.mask, e, i)) : "horizontal" === e.direction && (l.maxWidth = "100%", l.width = a - 2 * e.wpad + "px", l.left = 0, l.x = 0, d.maxWidth = e.maxw >= a ? "100%" : Math.min(e.maxw, a) + "px", tpGS.gsap.set(e.c, l), tpGS.gsap.set(e.mask, d), b(e.mask, e, i))) : (tpGS.gsap.set(e.c, l), tpGS.gsap.set(e.mask, d))
				}
			}
		},
		_ = function (e, i, a, r) {
			0 === e.find(".tp-bullets").length && (i.style = void 0 === i.style ? "" : i.style, i.c = jQuery('<rs-bullets style="opacity:0"  class="tp-bullets ' + i.style + " " + i.direction + " nav-pos-hor-" + i.h_align + " nav-pos-ver-" + i.v_align + " nav-dir-" + i.direction + '"></rs-bullets>'));
			var o = a.data("key"),
				s = i.tmp;
			void 0 !== t[r].thumbs[a.index()] && jQuery.each(t[r].thumbs[a.index()].params, function (e, t) {
				s = s.replace(t.from, t.to)
			});
			var n = jQuery('<rs-bullet data-key="' + o + '" class="tp-bullet">' + s + "</rs-bullet>");
			void 0 !== t[r].thumbs[a.index()] && n.find(".tp-bullet-image").css({
				backgroundImage: "url(" + t[r].thumbs[a.index()].src + ")"
			}), i.c.append(n), e.append(i.c);
			var l = i.c.find(".tp-bullet").length,
				d = n.outerWidth(),
				c = n.outerHeight(),
				p = d + parseInt(void 0 === i.space ? 0 : i.space, 0),
				g = c + parseInt(void 0 === i.space ? 0 : i.space, 0);
			"vertical" === i.direction ? (n.css({
				top: (l - 1) * g + "px",
				left: "0px"
			}), i.c.css({
				height: (l - 1) * g + c,
				width: d
			})) : (n.css({
				left: (l - 1) * p + "px",
				top: "0px"
			}), i.c.css({
				width: (l - 1) * p + d,
				height: c
			})), n.on("click", function () {
				"carousel" === t[r].sliderType && (t[r].ctNavElement = !0), t[r].sc_indicator = "bullet", e.revcallslidewithid(o), e.find(".tp-bullet").removeClass("selected"), jQuery(this).addClass("selected")
			}), i.padding_top = parseInt(t[r].carousel.padding_top || 0, 0), i.padding_bottom = parseInt(t[r].carousel.padding_bottom || 0, 0), "outer-left" != i.position && "outer-right" != i.position || (t[r].outernav = !0)
		},
		x = function (e, i, a, r, o) {
			var s = "tp-thumb" === r ? ".tp-thumbs" : ".tp-tabs",
				n = "tp-thumb" === r ? ".tp-thumb-mask" : ".tp-tab-mask",
				l = "tp-thumb" === r ? ".tp-thumbs-inner-wrapper" : ".tp-tabs-inner-wrapper",
				d = "tp-thumb" === r ? ".tp-thumb" : ".tp-tab",
				c = "tp-thumb" === r ? ".tp-thumb-image" : ".tp-tab-image",
				p = "tp-thumb" === r ? "rs-thumb" : "rs-tab";
			i.type = r, i.visibleAmount = i.visibleAmount > t[o].slideamount ? t[o].slideamount : i.visibleAmount, i.sliderLayout = t[o].sliderLayout, void 0 === i.c && (i.wpad = i.wrapper_padding, i.c = jQuery("<" + p + 's style="opacity:0" class="nav-dir-' + i.direction + " nav-pos-ver-" + i.v_align + " nav-pos-hor-" + i.h_align + " rs-nav-element " + r + "s " + (!0 === i.span ? "tp-span-wrapper" : "") + " " + i.position + " " + (void 0 === i.style ? "" : i.style) + '"><rs-navmask class="' + r + '-mask" style="overflow:hidden;position:relative"><' + p + 's-wrap class="' + r + 's-inner-wrapper" style="position:relative;"></' + p + "s-wrap></rs-navmask></" + p + "s>"), i.c.css({
				overflow: "visible",
				position: "outer-top" === i.position || "outer-bottom" === i.position ? "relative" : "absolute",
				background: i.wrapper_color,
				padding: i.wpad + "px",
				boxSizing: "contet-box"
			}), "outer-top" === i.position ? e.parent().prepend(i.c) : "outer-bottom" === i.position ? e.after(i.c) : e.append(i.c), "outer-left" !== i.position && "outer-right" !== i.position || tpGS.gsap.set(t[o].c, {
				overflow: "visible"
			}), i.padding_top = parseInt(t[o].carousel.padding_top || 0, 0), i.padding_bottom = parseInt(t[o].carousel.padding_bottom || 0, 0), "outer-left" != i.position && "outer-right" != i.position || (t[o].outernav = !0));
			var g = a.data("key"),
				u = i.c.find(n),
				m = u.find(l),
				h = i.tmp;
			i.maxw = "horizontal" === i.direction ? i.width * i.visibleAmount + i.space * (i.visibleAmount - 1) : i.width, i.maxh = "horizontal" === i.direction ? i.height : i.height * i.visibleAmount + i.space * (i.visibleAmount - 1), i.maxw += 2 * i.mhoff, i.maxh += 2 * i.mvoff, void 0 !== t[o].thumbs[a.index()] && jQuery.each(t[o].thumbs[a.index()].params, function (e, t) {
				h = h.replace(t.from, t.to)
			});
			var f = jQuery("<" + p + ' data-liindex="' + a.index() + '" data-key="' + g + '" class="' + r + '" style="width:' + i.width + "px;height:" + i.height + 'px;">' + h + "<" + p + ">");
			void 0 !== t[o].thumbs[a.index()] && f.find(c).css({
				backgroundImage: "url(" + t[o].thumbs[a.index()].src + ")"
			}), m.append(f);
			var v = i.c.find(d).length,
				y = f.outerWidth(),
				b = f.outerHeight(),
				w = y + parseInt(void 0 === i.space ? 0 : i.space, 0),
				_ = b + parseInt(void 0 === i.space ? 0 : i.space, 0);
			"vertical" === i.direction ? (f.css({
				top: (v - 1) * _ + "px",
				left: "0px"
			}), m.css({
				height: (v - 1) * _ + b,
				width: y
			})) : (f.css({
				left: (v - 1) * w + "px",
				top: "0px"
			}), m.css({
				width: (v - 1) * w + y,
				height: b
			})), u.css({
				maxWidth: i.maxw + "px",
				maxHeight: i.maxh + "px"
			}), i.c.css({
				maxWidth: i.maxw + "px",
				maxHeight: i.maxh + "px"
			}), f.on("click", function () {
				t[o].sc_indicator = "bullet", "carousel" === t[o].sliderType && (t[o].ctNavElement = !0);
				var i = e.parent().find(l).data("distance");
				i = void 0 === i ? 0 : i, Math.abs(i) < 10 && (e.revcallslidewithid(g), e.parent().find(s).removeClass("selected"), jQuery(this).addClass("selected"))
			})
		},
		k = function (e, i, a) {
			return null == e || void 0 === e.c ? a : (e.hide_under > t[i].canv.width || t[i].canv.width > e.hide_over ? (!0 !== e.tpForceNotVisible && (e.c.addClass("tp-forcenotvisible"), e.isVisible = !1, a = !0), e.tpForceNotVisible = !0) : (!1 !== e.tpForceNotVisible && (e.c.removeClass("tp-forcenotvisible"), e.isVisible = !0, a = !0), e.tpForceNotVisible = !1), a)
		}
}(jQuery),
function (e) {
	"use strict";
	var t = jQuery.fn.revolution;
	jQuery.extend(!0, t, {
		preparePanZoom: function (e) {},
		stopPanZoom: function (e) {
			null != e.data("pztl") && e.data("pztl").pause()
		},
		startPanZoom: function (e, i, a, r, o) {
			"carousel" === t[i].sliderType && (t[i].carousel.justify && void 0 === t[i].carousel.slide_widths && t.setCarouselDefaults(i, !0), t[i].carousel.justify || (void 0 === t[i].carousel.slide_width && (t[i].carousel.slide_width = !0 !== t[i].carousel.stretch ? t[i].gridwidth[t[i].level] * (0 === t[i].CM.w ? 1 : t[i].CM.w) : t[i].canv.width), void 0 === t[i].carousel.slide_height && (t[i].carousel.slide_height = !0 !== t[i].carousel.stretch ? t[i].gridheight[t[i].level] * (0 === t[i].CM.w ? 1 : t[i].CM.w) : t[i].canv.height)), t[i].CWMDONE);
			var s = e.data(),
				n = e.find("rs-sbg"),
				l = n.data("lazyload") || n.data("src"),
				d = (s.owidth, s.oheight, "carousel" === t[i].sliderType ? t[i].carousel.justify ? t[i].carousel.slide_widths[void 0 !== r ? r : void 0 === t[i].carousel.focused ? 0 : t[i].carousel.focused] : t[i].carousel.slide_width : t[i].canvas.width()),
				c = t[i].canvas.height();
			if (t[i].panzoomTLs = void 0 === t[i].panzoomTLs ? {} : t[i].panzoomTLs, t[i].panzoomBGs = void 0 === t[i].panzoomBGs ? {} : t[i].panzoomBGs, void 0 === t[i].panzoomBGs[r] && (t[i].panzoomBGs[r] = e), void 0 !== s.panzoom && null !== s.panzoom) {
				if (e.data("pztl") && e.data("pztl").kill(), a = a || 0, n[0].style.display = "none", 0 == e.find(".rs-pzimg").length) {
					var p = n.data("mediafilter");
					p = void 0 === p ? "" : p, e.append('<rs-pzimg-wrap-parent class="' + p + '" style="z-index:25;width:100%;height:100%;top:0px;left:0px;position:absolute;display:block;overflow: hidden;"><rs-pzimg-wrap class="' + p + '" style="z-index:25;width:100%;height:100%;top:0px;left:0px;position:absolute;display:block"><img class="rs-pzimg" src="' + l + '" style="position:absolute;" width="' + s.owidth + '" height="' + s.oheight + '"></rs-pzimg-wrap></rs-pzimg-wrap-parent>'), e.data("pzimg", e.find(".rs-pzimg"))
				}
				var g = function (e, t, i, a, r, o, s) {
					var n = e * i,
						l = t * i,
						d = Math.abs(a - n),
						c = Math.abs(r - l),
						p = new Object;
					return p.l = (0 - o) * d, p.r = p.l + n, p.t = (0 - s) * c, p.b = p.t + l, p.h = o, p.v = s, p
				};
				void 0 !== t[i].panzoomTLs[r] && t[i].panzoomTLs[r].kill(), null != e.data("pztl") && (e.data("pztl").kill(), e.removeData("pztl"));
				var u = e.data("pzimg"),
					m = u.parent(),
					h = m.parent(),
					f = function (e, t, i) {
						var a = void 0 === i.panvalues ? jQuery.extend(!0, {}, function (e) {
								var t = e.panzoom.split(";"),
									i = {
										duration: 10,
										ease: "none",
										scalestart: 1,
										scaleend: 1,
										rotatestart: .01,
										rotateend: 0,
										blurstart: 0,
										blurend: 0,
										offsetstart: "0/0",
										offsetend: "0/0"
									};
								for (var a in t)
									if (t.hasOwnProperty(a)) {
										var r = t[a].split(":"),
											o = r[0],
											s = r[1];
										switch (o) {
											case "d":
												i.duration = parseInt(s, 0) / 1e3;
												break;
											case "e":
												i.ease = s;
												break;
											case "ss":
												i.scalestart = parseInt(s, 0) / 100;
												break;
											case "se":
												i.scaleend = parseInt(s, 0) / 100;
												break;
											case "rs":
												i.rotatestart = parseInt(s, 0);
												break;
											case "re":
												i.rotateend = parseInt(s, 0);
												break;
											case "bs":
												i.blurstart = parseInt(s, 0);
												break;
											case "be":
												i.blurend = parseInt(s, 0);
												break;
											case "os":
												i.offsetstart = s;
												break;
											case "oe":
												i.offsetend = s
										}
									}
								return i.offsetstart = i.offsetstart.split("/") || [0, 0], i.offsetend = i.offsetend.split("/") || [0, 0], i.rotatestart = 0 === i.rotatestart ? .01 : i.rotatestart, e.panvalues = i, e.bgposition = "center center" == e.bgposition ? "50% 50%" : e.bgposition, i
							}(i)) : jQuery.extend(!0, {}, i.panvalues),
							r = a.offsetstart,
							o = a.offsetend,
							s = {
								start: {
									width: e,
									height: e / i.owidth * i.oheight,
									rotation: a.rotatestart + "deg",
									scale: a.scalestart,
									transformOrigin: i.bgposition
								},
								starto: {},
								end: {
									rotation: a.rotateend + "deg",
									scale: a.scaleend
								},
								endo: {}
							};
						a.scalestart, i.owidth, i.oheight, a.scaleend, i.owidth, i.oheight;
						if (s.start.height < t) {
							var n = t / s.start.height;
							s.start.height = t, s.start.width = s.start.width * n
						}
						var l = function (e, t, i, a) {
							var r = e.bgposition.split(" ") || "center center",
								o = "center" == r[0] ? "50%" : "left" == r[0] || "left" == r[1] ? "0%" : "right" == r[0] || "right" == r[1] ? "100%" : r[0],
								s = "center" == r[1] ? "50%" : "top" == r[0] || "top" == r[1] ? "0%" : "bottom" == r[0] || "bottom" == r[1] ? "100%" : r[1];
							o = parseInt(o, 0) / 100 || 0, s = parseInt(s, 0) / 100 || 0;
							var n = new Object;
							return n.start = g(a.start.width, a.start.height, a.start.scale, t, i, o, s), n.end = g(a.start.width, a.start.height, a.end.scale, t, i, o, s), n
						}(i, e, t, s);
						r[0] = parseFloat(r[0]) + l.start.l, o[0] = parseFloat(o[0]) + l.end.l, r[1] = parseFloat(r[1]) + l.start.t, o[1] = parseFloat(o[1]) + l.end.t;
						var d = l.start.r - l.start.l,
							c = l.start.b - l.start.t,
							p = l.end.r - l.end.l,
							u = l.end.b - l.end.t;
						return r[0] = r[0] > 0 ? 0 : d + r[0] < e ? e - d : r[0], o[0] = o[0] > 0 ? 0 : p + o[0] < e ? e - p : o[0], r[1] = r[1] > 0 ? 0 : c + r[1] < t ? t - c : r[1], o[1] = o[1] > 0 ? 0 : u + o[1] < t ? t - u : o[1], s.starto.x = r[0] + "px", s.starto.y = r[1] + "px", s.endo.x = o[0] + "px", s.endo.y = o[1] + "px", s.end.ease = s.endo.ease = a.ease, s.end.force3D = s.endo.force3D = !0, s
					}(d, c, s);
				if (t[i].panzoomTLs[r] = tpGS.gsap.timeline(), t[i].panzoomTLs[r].pause(), f.start.transformOrigin = "0% 0%", f.starto.transformOrigin = "0% 0%", s.panvalues.duration = NaN === s.panvalues.duration || void 0 === s.panvalues.duration ? 10 : s.panvalues.duration, tpGS.gsap.set(u, {
						width: f.start.width,
						height: f.start.height
					}), delete f.start.width, delete f.start.height, "prepare" === o && tpGS.gsap.fromTo(u, .5, {
						autoAlpha: 0
					}, {
						autoAlpha: 1
					}), t[i].panzoomTLs[r].add(tpGS.gsap.fromTo(u, s.panvalues.duration, f.start, f.end), 0), t[i].panzoomTLs[r].add(tpGS.gsap.fromTo(m, s.panvalues.duration, f.starto, f.endo), 0), void 0 !== s.panvalues.blurstart && void 0 !== s.panvalues.blurend && (0 !== s.panvalues.blurstart || 0 !== s.panvalues.blurend)) {
					var v = {
							a: s.panvalues.blurstart
						},
						y = {
							a: s.panvalues.blurend,
							ease: f.endo.ease
						},
						b = tpGS.gsap.to(v, s.panvalues.duration, y);
					b.eventCallback("onUpdate", function (e) {
						tpGS.gsap.set(e, {
							filter: "blur(" + v.a + "px)",
							webkitFilter: "blur(" + v.a + "px)"
						})
					}, [h]), tpGS.gsap.set(h, {
						filter: "blur(" + v.a + "px)",
						webkitFilter: "blur(" + v.a + "px)"
					}), t[i].panzoomTLs[r].add(b, 0)
				}
				t[i].panzoomTLs[r].progress(a), "play" !== o && "first" !== o || t[i].panzoomTLs[r].play()
			}
		}
	})
}(jQuery),
function (e) {
	"use strict";
	var t = jQuery.fn.revolution,
		i = t.is_mobile();
	jQuery.extend(!0, t, {
		checkForParallax: function (e) {
			var r = t[e].parallax;
			if (!r.done) {
				if (r.done = !0, i && r.disable_onmobile) return !1;
				if ("3D" == r.type || "3d" == r.type) {
					if (t.addSafariFix(e), tpGS.gsap.set(t[e].c, {
							overflow: r.ddd_overflow
						}), tpGS.gsap.set(t[e].canvas, {
							overflow: r.ddd_overflow
						}), "carousel" != t[e].sliderType && r.ddd_shadow) {
						var o = jQuery('<div class="dddwrappershadow"></div>');
						tpGS.gsap.set(o, {
							force3D: "auto",
							transformPerspective: 1600,
							transformOrigin: "50% 50%",
							width: "100%",
							height: "100%",
							position: "absolute",
							top: 0,
							left: 0,
							zIndex: 0
						}), t[e].c.prepend(o)
					}
					for (var s in t[e].slides) t[e].slides.hasOwnProperty(s) && a(jQuery(t[e].slides[s]), e);
					t[e].c.find("rs-static-layers").length > 0 && (tpGS.gsap.set(t[e].c.find("rs-static-layers"), {
						top: 0,
						left: 0,
						width: "100%",
						height: "100%"
					}), a(t[e].c.find("rs-static-layers"), e))
				}
				r.pcontainers = [], r.pcontainer_depths = [], r.bgcontainers = [], r.bgcontainer_depths = [], r.speed = void 0 === r.speed ? 0 : parseInt(r.speed, 0), r.speedbg = void 0 === r.speedbg ? 0 : parseInt(r.speedbg, 0), r.speedls = void 0 === r.speedls ? 0 : parseInt(r.speedls, 0), t[e].c.find("rs-slide rs-sbg-wrap, rs-slide rs-bgvideo").each(function () {
					var i = jQuery(this),
						a = i.data("parallax");
					window.isSafari11 || (t[e].parZ = 1), void 0 !== (a = "on" == a || !0 === a ? 1 : a) && "off" !== a && !1 !== a && (r.bgcontainers.push(i.closest("rs-sbg-px")), r.bgcontainer_depths.push(t[e].parallax.levels[parseInt(a, 0) - 1] / 100))
				});
				for (s = 1; s <= r.levels.length; s++) t[e].c.find(".rs-pxl-" + s).each(function () {
					var e = jQuery(this),
						t = this.className.indexOf("rs-pxmask") >= 0,
						i = t ? e.closest("rs-px-mask") : e.closest(".rs-parallax-wrap");
					t && !window.isSafari11 && (tpGS.gsap.set(i, {
						z: 1
					}), tpGS.gsap.set(i.find("rs-bg-elem"), {
						z: 1
					})), i.data("parallaxlevel", r.levels[s - 1]), i.addClass("tp-parallax-container"), r.pcontainers.push(i), r.pcontainer_depths.push(r.levels[s - 1])
				});
				if ("mouse" == r.type || "mousescroll" == r.type || "3D" == r.type || "3d" == r.type) {
					var n = "rs-slide .dddwrapper, .dddwrappershadow, rs-slide .dddwrapper-layer, rs-static-layers .dddwrapper-layer";
					"carousel" === t[e].sliderType && (n = "rs-slide .dddwrapper, rs-slide .dddwrapper-layer, rs-static-layers .dddwrapper-layer"), r.sctors = t[e].c.find(n), r.mouseEntered = !1, t[e].c.on("mouseenter", function (i) {
						var a = t[e].c.offset().top,
							o = t[e].c.offset().left;
						r.mouseEnterX = i.pageX - o, r.mouseEnterY = i.pageY - a, r.mouseEntered = !0
					});
					var l = this.updateParallax.bind(this, e, r);
					t[e].c.on("mousemove.hoverdir, mouseleave.hoverdir, trigger3dpath", function (e) {
						r.eventData = e, void 0 !== r.frame && "mouseleave" !== e.type || (r.frame = window.requestAnimationFrame(l))
					}), i && window.addEventListener("deviceorientation", function (e) {
						r.eventData = e, void 0 === r.frame && (r.frame = window.requestAnimationFrame(l))
					})
				}
				var d = t[e].scrolleffect;
				d.set && (d.multiplicator_layers = parseFloat(d.multiplicator_layers), d.multiplicator = parseFloat(d.multiplicator)), void 0 !== d._L && 0 === d._L.length && (d._L = !1), void 0 !== d.bgs && 0 === d.bgs.length && (d.bgs = !1)
			}
		},
		updateParallax: function (e, i) {
			i.frame && (i.frame = window.cancelAnimationFrame(i.frame));
			var a, r, o = i.eventData,
				s = t[e].c.offset().left,
				n = t[e].c.offset().top,
				l = t[e].canv.width,
				d = t[e].canv.height,
				c = i.speed / 1e3 || 3;
			if ("enterpoint" == i.origo && "deviceorientation" !== o.type ? (!1 === i.mouseEntered && (i.mouseEnterX = o.pageX - s, i.mouseEnterY = o.pageY - n, i.mouseEntered = !0), a = i.mouseEnterX - (o.pageX - s), r = i.mouseEnterY - (o.pageY - n), c = i.speed / 1e3 || .4) : "deviceorientation" !== o.type && (a = l / 2 - (o.pageX - s), r = d / 2 - (o.pageY - n)), "deviceorientation" == o.type) {
				var p, g, u;
				p = o.beta - 60, g = o.gamma, u = p;
				var m = Math.abs(i.orientationX - g) > 1 || Math.abs(i.orientationY - u) > 1;
				if (i.orientationX = g, i.orientationY = u, !m) return;
				if (t.winW > t.getWinH(e)) {
					var h = g;
					g = u, u = h
				}
				a = 360 / l * (g *= 1.5), r = 180 / d * (u *= 1.5)
			}
			o.type, "mouseout" === o.type && (a = 0, r = 0, i.mouseEntered = !1);
			for (var f = 0; f < i.pcontainers.length; f++) {
				var v = i.pcontainers[f],
					y = i.pcontainer_depths[f],
					b = "3D" == i.type || "3d" == i.type ? y / 200 : y / 100,
					w = a * b,
					_ = r * b;
				"mousescroll" == i.type ? tpGS.gsap.to(v, c, {
					force3D: "auto",
					x: w,
					ease: "power3.out",
					overwrite: "all"
				}) : tpGS.gsap.to(v, c, {
					force3D: "auto",
					x: w,
					y: _,
					ease: "power3.out",
					overwrite: "all"
				})
			}
			"3D" != i.type && "3d" != i.type || i.sctors.each(function () {
				var s = jQuery(this),
					n = t.isFirefox() ? Math.min(25, i.levels[i.levels.length - 1]) / 200 : i.levels[i.levels.length - 1] / 200,
					l = a * n,
					d = r * n,
					p = 0 == t[e].canv.width ? 0 : Math.round(a / t[e].canv.width * n * 100) || 0,
					g = 0 == t[e].canv.height ? 0 : Math.round(r / t[e].canv.height * n * 100) || 0,
					u = s.closest("rs-slide"),
					m = 0,
					h = !1;
				"deviceorientation" === o.type && (n = i.levels[i.levels.length - 1] / 200, l = a * n, d = r * n * 3, p = 0 == t[e].canv.width ? 0 : Math.round(a / t[e].canv.width * n * 500) || 0, g = 0 == t[e].canv.height ? 0 : Math.round(r / t[e].canv.height * n * 700) || 0), s.hasClass("dddwrapper-layer") && (m = i.ddd_z_correction || 65, h = !0), s.hasClass("dddwrapper-layer") && (l = 0, d = 0), u.index() === t[e].pr_active_key || "carousel" != t[e].sliderType ? !i.ddd_bgfreeze || h ? tpGS.gsap.to(s, c, {
					rotationX: g,
					rotationY: -p,
					x: l,
					z: m,
					y: d,
					ease: "power3.out",
					overwrite: "all"
				}) : tpGS.gsap.to(s, .5, {
					force3D: "auto",
					rotationY: 0,
					rotationX: 0,
					z: 0,
					ease: "power3.out",
					overwrite: "all"
				}) : tpGS.gsap.to(s, .5, {
					force3D: "auto",
					rotationY: 0,
					x: 0,
					y: 0,
					rotationX: 0,
					z: 0,
					ease: "power3.out",
					overwrite: "all"
				}), "mouseleave" != o.type && "mouseout" !== o.type || tpGS.gsap.to(this, 3.8, {
					z: 0,
					ease: "power3.out"
				})
			})
		},
		parallaxProcesses: function (e, a, r, o) {
			var s = t[e].fixedOnTop ? Math.min(1, Math.max(0, window.scrollY / t.lastwindowheight)) : Math.min(1, Math.max(0, (0 - (a.top - t.lastwindowheight)) / (a.hheight + t.lastwindowheight))),
				n = (a.top >= 0 && a.top <= t.lastwindowheight || a.top <= 0 && a.bottom >= 0 || a.top <= 0 && a.bottom, t[e].slides[void 0 === t[e].pr_active_key ? 0 : t[e].pr_active_key]);
			if (t[e].scrollProg = s, t[e].scrollProgBasics = {
					top: a.top,
					height: a.hheight,
					bottom: a.bottom
				}, t[e].sbtimeline.fixed ? (!1 === t[e].fixedScrollOnState || !t.stickySupported || 0 != t[e].fullScreenOffsetResult && null != t[e].fullScreenOffsetResult ? t.stickySupported = !1 : (t[e].topc.addClass("rs-stickyscrollon"), t[e].fixedScrollOnState = !0), void 0 === t[e].sbtimeline.rest && t.updateFixedScrollTimes(e), a.top >= t[e].fullScreenOffsetResult && a.top <= t.lastwindowheight ? (s = t[e].sbtimeline.fixStart * (1 - a.top / t.lastwindowheight) / 1e3, !0 !== t.stickySupported && !1 !== t[e].fixedScrollOnState && (t[e].topc.removeClass("rs-fixedscrollon"), tpGS.gsap.set(t[e].cpar, {
					top: 0,
					y: 0
				}), t[e].fixedScrollOnState = !1)) : a.top <= t[e].fullScreenOffsetResult && a.bottom >= t[e].module.height ? (!0 !== t.stickySupported && !0 !== t[e].fixedScrollOnState && (t[e].fixedScrollOnState = !0, t[e].topc.addClass("rs-fixedscrollon"), tpGS.gsap.set(t[e].cpar, {
					top: 0,
					y: t[e].fullScreenOffsetResult
				})), s = (t[e].sbtimeline.fixStart + t[e].sbtimeline.time * (Math.abs(a.top) / (a.hheight - t[e].module.height))) / 1e3) : (!0 !== t.stickySupported && (tpGS.gsap.set(t[e].cpar, {
					top: t[e].scrollproc >= 0 ? 0 : a.height - t[e].module.height
				}), !1 !== t[e].fixedScrollOnState && (t[e].topc.removeClass("rs-fixedscrollon"), t[e].fixedScrollOnState = !1)), s = a.top > t.lastwindowheight ? 0 : (t[e].sbtimeline.fixEnd + t[e].sbtimeline.rest * (1 - a.bottom / t[e].module.height)) / 1e3)) : s = t[e].duration * s / 1e3, void 0 !== n && void 0 !== t.gA(n, "key") && !0 !== r) {
				for (var l in t[e].sbas[t.gA(n, "key")])
					if (void 0 !== t[e]._L[l] && void 0 !== t[e]._L[l].timeline && (1 == t[e]._L[l].animationonscroll || "true" == t[e]._L[l].animationonscroll)) {
						var d = void 0 !== t[e]._L[l].scrollBasedOffset ? s + t[e]._L[l].scrollBasedOffset : s;
						d = d <= 0 ? 0 : d < .1 ? .1 : d, t[e]._L[l].animteToTime !== d && (t[e]._L[l].animteToTime = d, tpGS.gsap.to(t[e]._L[l].timeline, t[e].sbtimeline.speed, {
							time: d,
							ease: t[e].sbtimeline.ease
						}))
					}
				t[e].c.trigger("timeline_scroll_processed", {
					id: e,
					mproc: s,
					speed: t[e].sbtimeline.speed
				})
			}
			if (i && t[e].parallax.disable_onmobile) return !1;
			var c = t[e].parallax;
			if ("3d" != c.type && "3D" != c.type) {
				if (("scroll" == c.type || "mousescroll" == c.type) && c.pcontainers)
					for (var p = 0; p < c.pcontainers.length; p++)
						if (c.pcontainers[p].length > 0) {
							var g = c.pcontainers[p],
								u = c.pcontainer_depths[p] / 100,
								m = Math.round(t[e].scrollproc * (-u * t[e].canv.height) * 10) / 10 || 0,
								h = void 0 !== o ? o : c.speedls / 1e3 || 0;
							g.data("parallaxoffset", m), tpGS.gsap.to(g, h, {
								overwrite: "auto",
								force3D: "auto",
								y: m
							})
						}
				if (c.bgcontainers)
					for (p = 0; p < c.bgcontainers.length; p++) {
						var f = c.bgcontainers[p],
							v = c.bgcontainer_depths[p];
						m = t[e].scrollproc * (-v * t[e].canv.height) || 0, h = void 0 !== o ? o : c.speedbg / 1e3 || .015;
						h = void 0 !== t[e].parallax.lastBGY && 0 === h && Math.abs(m - t[e].parallax.lastBGY) > 50 ? .15 : h, tpGS.gsap.to(f, h, {
							position: "absolute",
							top: "0px",
							left: "0px",
							backfaceVisibility: "hidden",
							force3D: "true",
							y: m + "px"
						}), t[e].parallax.lastBGY = m
					}
			}
			var y = t[e].scrolleffect;
			if (y.set && (!i || !1 === y.disable_onmobile)) {
				var b = Math.abs(t[e].scrollproc) - y.tilt / 100;
				if (b = b < 0 ? 0 : b, !1 !== y._L) {
					var w = 1 - b * y.multiplicator_layers,
						_ = {
							force3D: "true"
						};
					if ("top" == y.direction && t[e].scrollproc >= 0 && (w = 1), "bottom" == y.direction && t[e].scrollproc <= 0 && (w = 1), w = w > 1 ? 1 : w < 0 ? 0 : w, y.fade && (_.opacity = w), y.scale) {
						var x = w;
						_.scale = 1 - x + 1
					}
					if (y.blur) {
						var k = (1 - w) * y.maxblur;
						_["-webkit-filter"] = "blur(" + k + "px)", _.filter = "blur(" + k + "px)"
					}
					if (y.grayscale) {
						var S = "grayscale(" + 100 * (1 - w) + "%)";
						_["-webkit-filter"] = void 0 === _["-webkit-filter"] ? S : _["-webkit-filter"] + " " + S, _.filter = void 0 === _.filter ? S : _.filter + " " + S
					}
					tpGS.gsap.set(y._L, _)
				}
				if (!1 !== y.bgs) {
					w = 1 - b * y.multiplicator, _ = {
						backfaceVisibility: "hidden",
						force3D: "true"
					};
					for (var L in "top" == y.direction && t[e].scrollproc >= 0 && (w = 1), "bottom" == y.direction && t[e].scrollproc <= 0 && (w = 1), w = w > 1 ? 1 : w < 0 ? 0 : w, y.bgs)
						if (y.bgs.hasOwnProperty(L)) {
							if (y.bgs[L].fade && (_.opacity = w), y.bgs[L].blur) {
								k = (1 - w) * y.maxblur;
								_["-webkit-filter"] = "blur(" + k + "px)", _.filter = "blur(" + k + "px)"
							}
							if (y.bgs[L].grayscale) {
								S = "grayscale(" + 100 * (1 - w) + "%)";
								_["-webkit-filter"] = void 0 === _["-webkit-filter"] ? S : _["-webkit-filter"] + " " + S, _.filter = void 0 === _.filter ? S : _.filter + " " + S
							}
							tpGS.gsap.set(y.bgs[L].c, _)
						}
				}
			}
		}
	});
	var a = function (e, i) {
		var a = t[i].parallax;
		e.find("rs-sbg-wrap").wrapAll('<div class="dddwrapper" style="width:100%;height:100%;position:absolute;top:0px;left:0px;overflow:hidden"></div>');
		var r = e[0].querySelectorAll(".rs-parallax-wrap"),
			o = document.createElement("div");
		o.className = "dddwrapper-layer", o.style.width = "100%", o.style.height = "100%", o.style.position = "absolute", o.style.top = "0px", o.style.left = "0px", o.style.zIndex = 5, o.style.overflow = a.ddd_layer_overflow;
		for (var s = 0; s < r.length; s++) r.hasOwnProperty(s) && null === t.closestNode(r[s], "RS-GROUP") && null === t.closestNode(r[s], "RS-ROW") && o.appendChild(r[s]);
		e[0].appendChild(o), e.find(".rs-pxl-tobggroup").closest(".rs-parallax-wrap").wrapAll('<div class="dddwrapper-layertobggroup" style="position:absolute;top:0px;left:0px;z-index:50;width:100%;height:100%"></div>');
		var n = e.find(".dddwrapper"),
			l = e.find(".dddwrapper-layer");
		e.find(".dddwrapper-layertobggroup").appendTo(n), "carousel" == t[i].sliderType && (a.ddd_shadow && n.addClass("dddwrappershadow"), tpGS.gsap.set(n, {
			borderRadius: t[i].carousel.border_radius
		})), tpGS.gsap.set(e, {
			overflow: "visible",
			transformStyle: "preserve-3d",
			perspective: 1600
		}), tpGS.gsap.set(n, {
			force3D: "auto",
			transformOrigin: "50% 50%",
			transformStyle: "preserve-3d",
			transformPerspective: 1600
		}), tpGS.gsap.set(l, {
			force3D: "auto",
			transformOrigin: "50% 50%",
			zIndex: 5,
			transformStyle: "flat",
			transformPerspective: 1600
		}), tpGS.gsap.set(t[i].canvas, {
			transformStyle: "preserve-3d",
			transformPerspective: 1600
		})
	}
}(jQuery),
function (e) {
	"use strict";
	var t = jQuery.fn.revolution,
		i = t.is_mobile();
	jQuery.extend(!0, t, {
		animateSlide: function (e) {
			return r(e)
		}
	});
	var a = function (e, i) {
			var a;
			return void 0 !== (a = Array.isArray(e) ? e.length >= i ? e[i] : e[e.length - 1] : e) && t.isNumeric(a) ? parseInt(e, 0) : a
		},
		r = function (e) {
			var r = e.id,
				l = "arrow" == t[r].sc_indicator ? void 0 === t[r].sc_indicator_dir ? t[r].sdir : t[r].sc_indicator_dir : t[r].sdir,
				d = !0 === e.recall ? jQuery.extend(!0, {}, t[r].lastSliderTransition) : function (e, i, a) {
					var r = "power1.in",
						o = "power1.out",
						s = "power1.inOut",
						n = "power2.in",
						l = "power2.out",
						d = "power2.inOut",
						c = "power3.inOut",
						p = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45],
						g = [17, 18, 19, 20, 21, 22, 23, 24, 25, 27],
						u = 0,
						m = 1,
						h = 0,
						f = [
							["boxslide", 0, 0, 50, "box", !1, null, 0, o, o, 1e3, 6],
							["boxrandomrotate", 0, 1, 50, "box", !1, null, 60, o, o, 1e3, 6],
							["boxfade", 1, 0, 50, "box", !1, null, 1, s, s, 1e3, 5],
							["slotslide-horizontal", 2, 0, 0, "horizontal", !0, !1, 2, d, d, 1e3, 3],
							["slotslide-vertical", 3, 0, 0, "vertical", !0, !1, 3, d, d, 1e3, 3],
							["curtain-1", 4, 3, 0, "horizontal", !0, !0, 4, o, o, 900, 5],
							["curtain-2", 5, 3, 0, "horizontal", !0, !0, 5, o, o, 900, 5],
							["curtain-3", 6, 3, 25, "horizontal", !0, !0, 6, o, o, 900, 5],
							["slotzoom-horizontal", 7, 0, 0, "horizontal", !0, !0, 7, o, o, 1e3, 7],
							["slotzoom-vertical", 8, 0, 0, "vertical", !0, !0, 8, l, l, 1e3, 8],
							["slotzoom-mixed", 8, 1, 0, "vertical", !0, !0, 59, l, l, 1e3, 8],
							["slotfade-horizontal", 9, 0, 0, "horizontal", !0, null, 9, d, d, 1500, 10],
							["slotfade-vertical", 10, 0, 0, "vertical", !0, null, 10, d, d, 1500, 10],
							["crossfade-horizontal", 9, 0, 0, "horizontal", !0, null, 9, d, d, 1500, 10],
							["crossfade-vertical", 10, 0, 0, "vertical", !0, null, 10, d, d, 1500, 10],
							["fade", 11, 0, 1, "horizontal", !0, null, 11, d, d, 1e3, 1],
							["crossfade", 11, 1, 1, "horizontal", !0, null, 11, d, d, 1e3, 1],
							["fadethroughdark", 11, 2, 1, "horizontal", !0, null, 11, d, d, 1e3, 1],
							["fadethroughlight", 11, 3, 1, "horizontal", !0, null, 11, d, d, 1e3, 1],
							["fadethroughtransparent", 11, 4, 1, "horizontal", !0, null, 11, d, d, 1e3, 1],
							["slideleft", 12, 0, 1, "horizontal", !0, !0, 12, c, c, 1e3, 1],
							["slideup", 13, 0, 1, "horizontal", !0, !0, 13, c, c, 1e3, 1],
							["slidedown", 14, 0, 1, "horizontal", !0, !0, 14, c, c, 1e3, 1],
							["slideright", 15, 0, 1, "horizontal", !0, !0, 15, c, c, 1e3, 1],
							["slideoverleft", 12, 7, 1, "horizontal", !0, !0, 12, c, c, 1e3, 1],
							["slideoverup", 13, 7, 1, "horizontal", !0, !0, 13, c, c, 1e3, 1],
							["slideoverdown", 14, 7, 1, "horizontal", !0, !0, 14, c, c, 1e3, 1],
							["slideoverright", 15, 7, 1, "horizontal", !0, !0, 15, c, c, 1e3, 1],
							["slideremoveleft", 12, 8, 1, "horizontal", !0, !0, 12, c, c, 1e3, 1],
							["slideremoveup", 13, 8, 1, "horizontal", !0, !0, 13, c, c, 1e3, 1],
							["slideremovedown", 14, 8, 1, "horizontal", !0, !0, 14, c, c, 1e3, 1],
							["slideremoveright", 15, 8, 1, "horizontal", !0, !0, 15, c, c, 1e3, 1],
							["papercut", 16, 0, 0, "vertical", null, !0, 16, c, c, 1e3, 2],
							["3dcurtain-horizontal", 17, 0, 20, "vertical", !0, !0, 17, s, s, 2e3, 7],
							["3dcurtain-vertical", 18, 0, 10, "horizontal", !0, !0, 18, s, s, 2e3, 7],
							["cubic", 19, 0, 20, "horizontal", !1, !0, 19, d, d, 1e3, 1],
							["cube", 19, 0, 20, "horizontal", !1, !0, 20, d, d, 1e3, 1],
							["flyin", 20, 0, 4, "vertical", !1, !0, 21, "power3.out", c, 1e3, 1],
							["turnoff", 21, 0, 1, "horizontal", !1, !0, 22, c, c, 1e3, 1],
							["incube", 22, 0, 20, "horizontal", !1, !0, 23, d, d, 1e3, 1],
							["cubic-horizontal", 23, 0, 20, "vertical", !1, !0, 24, d, d, 1e3, 1],
							["cube-horizontal", 23, 0, 20, "vertical", !1, !0, 25, d, d, 1e3, 1],
							["incube-horizontal", 24, 0, 20, "vertical", !1, !0, 26, d, d, 1e3, 1],
							["turnoff-vertical", 25, 0, 1, "horizontal", !1, !0, 27, d, d, 1e3, 1],
							["fadefromright", 12, 1, 1, "horizontal", !0, !0, 28, d, d, 1e3, 1],
							["fadefromleft", 15, 1, 1, "horizontal", !0, !0, 29, d, d, 1e3, 1],
							["fadefromtop", 14, 1, 1, "horizontal", !0, !0, 30, d, d, 1e3, 1],
							["fadefrombottom", 13, 1, 1, "horizontal", !0, !0, 31, d, d, 1e3, 1],
							["fadetoleftfadefromright", 12, 2, 1, "horizontal", !0, !0, 32, d, d, 1e3, 1],
							["fadetorightfadefromleft", 15, 2, 1, "horizontal", !0, !0, 33, d, d, 1e3, 1],
							["fadetobottomfadefromtop", 14, 2, 1, "horizontal", !0, !0, 34, d, d, 1e3, 1],
							["fadetotopfadefrombottom", 13, 2, 1, "horizontal", !0, !0, 35, d, d, 1e3, 1],
							["parallaxtoright", 15, 3, 1, "horizontal", !0, !0, 36, d, d, 1500, 1],
							["parallaxtoleft", 12, 3, 1, "horizontal", !0, !0, 37, d, d, 1500, 1],
							["parallaxtotop", 14, 3, 1, "horizontal", !0, !0, 38, d, d, 1500, 1],
							["parallaxtobottom", 13, 3, 1, "horizontal", !0, !0, 39, d, d, 1500, 1],
							["scaledownfromright", 12, 4, 1, "horizontal", !0, !0, 40, d, n, 1e3, 1],
							["scaledownfromleft", 15, 4, 1, "horizontal", !0, !0, 41, d, n, 1e3, 1],
							["scaledownfromtop", 14, 4, 1, "horizontal", !0, !0, 42, d, n, 1e3, 1],
							["scaledownfrombottom", 13, 4, 1, "horizontal", !0, !0, 43, d, n, 1e3, 1],
							["zoomout", 13, 5, 1, "horizontal", !0, !0, 44, d, d, 1e3, 1],
							["zoomin", 13, 6, 1, "horizontal", !0, !0, 45, d, d, 1e3, 1],
							["slidingoverlayup", 27, 0, 1, "horizontal", !0, !0, 47, s, o, 2e3, 1],
							["slidingoverlaydown", 28, 0, 1, "horizontal", !0, !0, 48, s, o, 2e3, 1],
							["slidingoverlayright", 30, 0, 1, "horizontal", !0, !0, 49, s, o, 2e3, 1],
							["slidingoverlayleft", 29, 0, 1, "horizontal", !0, !0, 50, s, o, 2e3, 1],
							["parallaxcirclesup", 31, 0, 1, "horizontal", !0, !0, 51, d, r, 1500, 1],
							["parallaxcirclesdown", 32, 0, 1, "horizontal", !0, !0, 52, d, r, 1500, 1],
							["parallaxcirclesright", 33, 0, 1, "horizontal", !0, !0, 53, d, r, 1500, 1],
							["parallaxcirclesleft", 34, 0, 1, "horizontal", !0, !0, 54, d, r, 1500, 1],
							["notransition", 26, 0, 1, "horizontal", !0, null, 46, d, n, 1e3, 1],
							["parallaxright", 15, 3, 1, "horizontal", !0, !0, 55, d, n, 1500, 1],
							["parallaxleft", 12, 3, 1, "horizontal", !0, !0, 56, d, n, 1500, 1],
							["parallaxup", 14, 3, 1, "horizontal", !0, !0, 57, d, r, 1500, 1],
							["parallaxdown", 13, 3, 1, "horizontal", !0, !0, 58, d, r, 1500, 1],
							["grayscale", 11, 5, 1, "horizontal", !0, null, 11, d, d, 1e3, 1],
							["grayscalecross", 11, 6, 1, "horizontal", !0, null, 11, d, d, 1e3, 1],
							["brightness", 11, 7, 1, "horizontal", !0, null, 11, d, d, 1e3, 1],
							["brightnesscross", 11, 8, 1, "horizontal", !0, null, 11, d, d, 1e3, 1],
							["blurlight", 11, 9, 1, "horizontal", !0, null, 11, d, d, 1e3, 1],
							["blurlightcross", 11, 10, 1, "horizontal", !0, null, 11, d, d, 1e3, 1],
							["blurstrong", 11, 9, 1, "horizontal", !0, null, 11, d, d, 1e3, 1],
							["blurstrongcross", 11, 10, 1, "horizontal", !0, null, 11, d, d, 1e3, 1]
						];
					return t[e].duringslidechange = !0, jQuery.each(["parallaxcircles", "slidingoverlay", "slide", "slideover", "slideremove", "parallax", "parralaxto"], function (e, t) {
						i == t + "horizontal" && (i = 1 != a ? t + "left" : t + "right"), i == t + "vertical" && (i = 1 != a ? t + "up" : t + "down")
					}), "random" == i ? i = Math.min(Math.round(Math.random() * (f.length - 1)), f.length - 1) : "random-static" == i ? i = p[Math.min(Math.round(Math.random() * p.length - 1), p.length - 1)] : "random-premium" == i && (i = g[Math.min(Math.round(Math.random() * g.length - 1), g.length - 1)]), 1 == t[e].isJoomla && null != window.MooTools && -1 != [12, 13, 14, 15, 16, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45].indexOf(i) && (i = g[Math.max(0, Math.min(g.length - 1, Math.round(Math.random() * (g.length - 2)) + 1))]), jQuery.each(f, function (e, t) {
						t[0] != i && t[7] != i || (u = t[1], m = t[2], h = e)
					}), {
						nTR: u = Math.max(0, Math.min(30, u)),
						TR: f[h],
						trC: m
					}
				}(r, e.animation.transition[e.ntrid], l),
				c = t[r].pr_next_bg && void 0 !== t[r].pr_next_bg.data("panzoom") && (d.nTR < 11 || 17 == d.nTR || 18 === d.nTR || d.nTR >= 27 && d.nTR <= 30) ? 11 : d.nTR,
				p = !1,
				g = void 0 !== t[r].pr_next_bg && t[r].pr_next_bg.length > 0 && void 0 !== t[r].pr_next_bg[0],
				u = void 0 !== t[r].pr_active_bg && t[r].pr_active_bg.length > 0 && void 0 !== t[r].pr_active_bg[0];
			!0 !== e.recall ? (t[r].lastSliderAnimation = jQuery.extend(!0, {}, e.animation), t[r].lastSliderTransition = jQuery.extend(!0, {}, d)) : e.animation = jQuery.extend(!0, {}, t[r].lastSliderAnimation);
			var m = !0 === e.recall ? d.ntrid : e.ntrid || 0,
				h = a(e.animation.masterspeed, m);
			if (h = (h = "default" === h || "d" === h ? d.TR[10] : "random" === h ? Math.round(1e3 * Math.random() + 300) : null != h ? parseInt(h, 0) : d.TR[10]) > t[r].duration ? t[r].duration : h, t[r].rotate = a(e.animation.rotate, m), t[r].rotate = null == t[r].rotate || "default" == t[r].rotate || "d" == t[r].rotate ? 0 : 999 == t[r].rotate || "random" == t[r].rotate ? Math.round(360 * Math.random()) : t[r].rotate, t[r].rotate = window._rs_ie || window._rs_ie9 ? 0 : t[r].rotate, (c < 11 || 16 === c || 17 === c || 18 === c || d.nTR >= 27 && d.nTR <= 30) && (t[r].slots = a(e.animation.slotamount, m), t[r].slots = null == t[r].slots || "default" == t[r].slots || "d" == t[r].slots ? d.TR[11] : "random" == t[r].slots ? Math.round(12 * Math.random() + 4) : t[r].slots, t[r].slots = t[r].slots < 1 ? "boxslide" == d.TR[0] ? Math.round(6 * Math.random() + 3) : "boxslide" == d.TR[0] || "flyin" == d.TR[0] ? Math.round(4 * Math.random() + 1) : t[r].slots : t[r].slots, t[r].slots = (4 == c || 5 == c || 6 == c) && t[r].slots < 3 ? 3 : t[r].slots, t[r].slots = 0 != d.TR[3] ? Math.min(t[r].slots, d.TR[3]) : t[r].slots, t[r].slots = 9 == c ? t[r].module.width / t[r].slots : 10 == c ? t[r].module.height / t[r].slots : t[r].slots, t[r].slots = jQuery.inArray(c, [19, 20, 21, 22, 23, 24, 25, 27]) >= 0 ? 1 : t[r].slots, t[r].slots = 3 != c && 8 != c && 10 != c || "vertical" !== d.TR[4] ? t[r].slots : t[r].slots + 2, null != d.TR[6] && n(t[r].pr_active_bg, r, d.TR[6], d.TR[4]), null != d.TR[5] && n(t[r].pr_next_bg, r, d.TR[5], d.TR[4])), jQuery.inArray(c, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 17, 18, 27, 28, 29, 30]) >= 0) {
				var f = t[r].pr_next_bg.find("rs-bgvideo");
				f.length > 0 && (p = !0, t[r].mtl.add(tpGS.gsap.set(f, {
					zIndex: 0,
					display: "none"
				}), 0), setTimeout(function () {
					void 0 !== t[r].videoIsPlaying && t[r].videoIsPlaying.length > 0 && t[r].videoIsPlaying[0].id == f[0].id && t.stopVideo(f, r)
				}, h > 50 ? 50 : h - 20), setTimeout(function () {
					void 0 !== t[r].videoIsPlaying && t[r].videoIsPlaying.length > 0 && t[r].videoIsPlaying[0].id == f[0].id && t.stopVideo(f, r)
				}, h > 100 ? 100 : h - 10))
			}
			var v = 7 === c || 16 === c || 8 === c ? 0 : 1,
				y = c < 11 || 17 === c || 18 === c ? 0 : 1;
			if (g) {
				var b = t[r].pr_next_bg.find("rs-sbg");
				void 0 !== b[0] && t[r].mtl.add(tpGS.gsap.set(b, {
					scale: 1,
					rotationX: 0,
					rotationY: 0,
					rotationZ: 0,
					z: 0,
					x: 0,
					y: 0,
					clearProps: "filter, transform",
					opacity: y
				}), 0), t[r].mtl.add(tpGS.gsap.set(t[r].pr_next_bg, {
					transformOrigin: "50% 50% 0",
					transformPerspective: 600,
					scale: 1,
					rotationX: 0,
					rotationY: 0,
					rotationZ: 0,
					z: t[r].parZ ? t[r].parZ : 0,
					autoAlpha: 1,
					x: 0,
					y: 0,
					clearProps: "filter, transform"
				}), 0), t[r].mtl.add(tpGS.gsap.set(t[r].pr_next_bg.parent(), {
					backgroundColor: "transparent"
				}), 0)
			}
			if (u) {
				var w = t[r].pr_active_bg.find("rs-sbg");
				void 0 !== w[0] && t[r].mtl.add(tpGS.gsap.set(w, {
					scale: 1,
					rotationX: 0,
					rotationY: 0,
					rotationZ: 0,
					z: 0,
					x: 0,
					y: 0,
					clearProps: "filter, transform",
					opacity: v
				}), 0), t[r].mtl.add(tpGS.gsap.set(t[r].pr_active_bg, {
					transformOrigin: "50% 50% 0",
					transformPerspective: 600,
					scale: 1,
					rotationX: 0,
					rotationY: 0,
					rotationZ: 0,
					z: 0,
					autoAlpha: 1,
					x: 0,
					y: 0,
					clearProps: "filter, transform"
				}), 0), t[r].mtl.add(tpGS.gsap.set(t[r].pr_active_bg.parent(), {
					backgroundColor: "transparent"
				}), 0)
			}
			var _ = a(e.animation.easein, m),
				x = a(e.animation.easeout, m);
			if (_ = "default" === _ || "d" === _ ? d.TR[8] || "power2.inOut" : _ || d.TR[8] || "power2.inOut", x = "default" === x || "d" === x ? d.TR[9] || "power2.inOut" : x || d.TR[9] || "power2.inOut", requestAnimationFrame(function () {
					t.generalObserver(i, !0)
				}), c >= 31) {
				var k = {
					canvas: t[r].pr_next_bg[0].getElementsByClassName("bgcanvas")[0]
				};
				if (k.ctx = k.canvas.getContext("2d"), k.oBG_next = t.getByTag(t[r].pr_next_bg[0], "rs-sbg")[0], k.img_next = t.getLoadObj(r, t.gA(k.oBG_next, "src-rs-ref")), k.col_next = t.gA(k.oBG_next, "bgcolor"), u && (k.oBG_act = t.getByTag(t[r].pr_active_bg[0], "rs-sbg")[0], k.img_act = t.getLoadObj(r, t.gA(k.oBG_act, "src-rs-ref")), k.col_act = t.gA(k.oBG_act, "bgcolor")), k.ctx.clearRect(0, 0, k.canvas.width, k.canvas.height), k.canvas.width = t[r].module.width, k.canvas.height = t[r].module.height, k.canvas.style.background = "transparent", k.canvas.style.display = "block", k.oBG_next.style.display = "none", void 0 !== k.col_next && k.col_next.indexOf("gradient") >= 0 && (k.col_next = "transparent"), void 0 !== k.col_act && k.col_act.indexOf("gradient") >= 0 && (k.col_act = "transparent"), 31 === c) {
					for (var S = "transparent" !== k.col_next && void 0 !== k.col_next ? {
							x: 0,
							y: 0,
							width: t[r].module.width,
							height: t[r].module.height
						} : o("contain" === k.oBG_next.style.backgroundSize, t[r].module.width, t[r].module.height, k.img_next.width, k.img_next.height), L = void 0 === k.oBG_act ? void 0 : "transparent" !== k.col_act && void 0 !== k.col_act ? {
							x: 0,
							y: 0,
							width: t[r].module.width,
							height: t[r].module.height
						} : o("contain" === k.oBG_act.style.backgroundSize, t[r].module.width, t[r].module.height, k.img_act.width, k.img_act.height), T = t[r].module.width / t[r].slots, R = T / 2, O = t[r].module.height, A = [], I = 0; I < t[r].slots + 1; I++) A.push({
						mt: O,
						it: O / 4,
						ml: 0,
						o: 2
					});
					t[r].mtl.add(tpGS.gsap.staggerTo(A, 2 * h / 1e3, {
						mt: 0,
						it: 0,
						ml: R,
						o: 0,
						ease: "power3.out",
						onUpdate: function () {
							var e = 0;
							k.ctx.clearRect(0, 0, k.canvas.width, k.canvas.height);
							for (var i = 0; i < t[r].slots + 1; i++) {
								var a = A[i].mt,
									o = A[i].ml,
									n = A[i].it,
									l = A[i].mt - O,
									d = A[i].ml + R,
									c = A[i].it - O / 4;
								s({
									ctx: k.ctx,
									poly: [
										[e - R + o, 0 + a],
										[e + R + 1 + o, 0 + a],
										[e + 1 + o, O + a],
										[e - T + o, O + a]
									],
									bg: {
										overlay: "rgba(0,0,0," + A[i].o + ")",
										img: k.img_next.img,
										col: k.col_next,
										offsetx: S.x,
										offsety: S.y + n,
										width: S.width,
										height: S.height
									}
								}), void 0 !== k.col_act && (k.oBG_act.style.display = "none", s({
									ctx: k.ctx,
									poly: [
										[e - R + d, 0 + l],
										[e + R + 1 + d, 0 + l],
										[e + 1 + d, O + l],
										[e - T + d, O + l]
									],
									bg: {
										overlay: "rgba(0,0,0," + (1 - A[i].o) + ")",
										img: k.img_act.img,
										col: k.col_act,
										offsetx: L.x,
										offsety: L.y + c,
										width: L.width,
										height: L.height
									}
								})), e += T
							}
						}
					}, .2, function () {
						k.ctx.clearRect(0, 0, k.canvas.width, k.canvas.height), k.canvas.style.display = "none", k.oBG_next.style.display = "block"
					}), 0)
				}
			}
			if (0 == c) {
				var C = Math.ceil(t[r].module.height / t[r].sloth),
					z = 0;
				t[r].pr_next_bg.find(".slotslide").each(function (e) {
					z = ++z === C ? 0 : z, t[r].rotate = 1 === d.trC ? 45 : t[r].rotate, t[r].mtl.add(tpGS.gsap.from(this, h / 2e3, {
						opacity: 0,
						transformStyle: "flat",
						transformPerspective: 600,
						scale: 0,
						rotationZ: 0 !== t[r].rotate ? Math.random() * t[r].rotate - t[r].rotate / 2 : 0,
						force3D: "auto",
						ease: _
					}), (10 * e + 30 * z) / 3e3)
				})
			} else if (1 == c) t[r].pr_next_bg.find(".slotslide").each(function (e) {
				t[r].mtl.add(tpGS.gsap.from(this, (Math.random() * h + 300) / 1e3, {
					autoAlpha: 0,
					force3D: "auto",
					rotation: t[r].rotate,
					ease: _
				}), (500 * Math.random() + 200) / 1e3)
			});
			else if (2 == c || 3 == c) t[r].pr_active_bg.find(".slotslide").each(function () {
				t[r].mtl.add(tpGS.gsap.to(this, h / 1e3, {
					y: 3 === c ? t[r].sloth : 0,
					x: 2 === c ? t[r].slotw : 0,
					ease: _,
					force3D: "auto",
					rotation: 0 - t[r].rotate
				}), 0)
			}), t[r].pr_next_bg.find(".slotslide").each(function () {
				t[r].mtl.add(tpGS.gsap.from(this, h / 1e3, {
					y: 3 == c ? 1 === l ? 0 - t[r].sloth : t[r].sloth : 0,
					x: 2 == c ? 1 === l ? 0 - t[r].slotw : t[r].slotw : 0,
					ease: _,
					force3D: "auto",
					rotation: t[r].rotate
				}), 0)
			});
			else if (4 == c || 5 == c || 6 == c) {
				var P = tpGS.gsap.timeline(),
					B = h / 1e3 - h / 1e3 / t[r].slots;
				t[r].slots -= t[r].slots % 2 == 1 ? 1 : 0, t[r].pr_active_bg.find(".slotslide").each(function (e) {
					var i = 6 !== c ? e : e > t[r].slots / 2 ? t[r].slots - e : e,
						a = (5 !== c ? i : t[r].slots - i) * (B / t[r].slots) / (6 === c ? 1.3 : 1);
					P.add(tpGS.gsap.to(this, B, {
						transformPerspective: 600,
						force3D: "auto",
						y: 1 !== l ? t[r].module.height : -t[r].module.height,
						opacity: .75,
						rotation: t[r].rotate,
						ease: _,
						delay: a
					}), 0), t[r].mtl.add(P, 0)
				}), t[r].pr_next_bg.find(".slotslide").each(function (e) {
					var i = 6 !== c ? e : e > t[r].slots / 2 ? t[r].slots - e : e,
						a = (5 !== c ? i : t[r].slots - i) * (B / t[r].slots) / (6 === c ? 1.3 : 1);
					P.add(tpGS.gsap.from(this, B, {
						y: 1 == l ? t[r].module.height : -t[r].module.height,
						opacity: .75,
						rotation: t[r].rotate,
						force3D: "auto",
						ease: x,
						delay: a
					}), 0), t[r].mtl.add(P, 0)
				})
			} else if (7 == c || 8 == c) h = Math.min(t[r].duration || h, h), t[r].pr_active_bg.find(".slotslide").each(function (e) {
				var i = e > t[r].slots / 2 ? t[r].slots - e : e;
				t[r].mtl.add(tpGS.gsap.to(t.getByTag(this, "div"), h / 1e3, {
					x: 8 === c && 0 === d.trC ? 0 : i * t[r].slotw / 3,
					y: 8 === c && 0 === d.trC ? i * t[r].sloth / 3 : 0,
					ease: _,
					transformPerspective: 600,
					force3D: "auto",
					filter: "blur(2px)",
					scale: 1.2,
					opacity: 0
				}), 0)
			}), t[r].pr_next_bg.find(".slotslide").each(function (e) {
				var i = e > t[r].slots / 2 ? t[r].slots - e : e;
				t[r].mtl.add(tpGS.gsap.fromTo(t.getByTag(this, "div"), h / 1e3, {
					x: 8 === c && 0 === d.trC ? 0 : 0 - i * t[r].slotw / 3,
					y: 8 === c && 0 === d.trC ? 0 - i * t[r].sloth / 3 : 0,
					filter: "blur(2px)",
					opacity: 0,
					transformPerspective: 600,
					scale: 1.2
				}, {
					x: 0,
					y: 0,
					ease: x,
					force3D: "auto",
					scale: 1,
					filter: "blur(0px)",
					opacity: 1,
					rotation: 0
				}), 0)
			});
			else if (9 == c || 10 == c) {
				var M = t[r].pr_next_bg[0].getElementsByClassName("slotslide"),
					G = h - h / 1.8;
				for (I = 0; I < M.length; I++) t[r].mtl.add(tpGS.gsap.fromTo(M[I], (h - I * (G / t[r].slots)) / 1e3, {
					zIndex: 10,
					opacity: 0
				}, {
					opacity: 1,
					ease: "none",
					delay: I * (G / t[r].slots) / 1e3
				}), 0)
			} else if (11 == c) {
				d.trC = Math.min(12, d.trC);
				var D = 2 == d.trC ? "#000000" : 3 == d.trC ? "#ffffff" : "transparent";
				switch (h = 0 === h ? 10 : h, d.trC) {
					case 0:
						g && t[r].mtl.add(tpGS.gsap.fromTo(t[r].pr_next_bg, h / 1e3, {
							autoAlpha: 0
						}, {
							autoAlpha: 1,
							force3D: "auto",
							ease: _
						}), 0);
						break;
					case 1:
						g && t[r].mtl.add(tpGS.gsap.fromTo(t[r].pr_next_bg, h / 1e3, {
							autoAlpha: 0
						}, {
							autoAlpha: 1,
							force3D: "auto",
							ease: _
						}), 0), t[r].mtl.add(tpGS.gsap.fromTo(t[r].pr_active_bg, h / 1e3, {
							autoAlpha: 1
						}, {
							autoAlpha: 0,
							force3D: "auto",
							ease: _
						}), 0);
						break;
					case 2:
					case 3:
					case 4:
						t[r].mtl.add(tpGS.gsap.set(t[r].pr_active_bg.parent(), {
							backgroundColor: D,
							force3D: "auto"
						}), 0), t[r].mtl.add(tpGS.gsap.set(t[r].pr_next_bg.parent(), {
							backgroundColor: "transparent",
							force3D: "auto"
						}), 0), u && t[r].mtl.add(tpGS.gsap.to(t[r].pr_active_bg, h / 2e3, {
							autoAlpha: 0,
							force3D: "auto",
							ease: _
						}), 0), g && t[r].mtl.add(tpGS.gsap.fromTo(t[r].pr_next_bg, h / 2e3, {
							autoAlpha: 0
						}, {
							autoAlpha: 1,
							force3D: "auto",
							ease: _
						}), h / 2e3);
						break;
					case 5:
					case 6:
					case 7:
					case 8:
					case 9:
					case 10:
					case 11:
					case 12:
						var N = "blur(" + (jQuery.inArray(d.trC, [9, 10]) >= 0 ? 5 : jQuery.inArray(d.trC, [11, 12]) >= 0 ? 10 : 0) + "px) grayscale(" + (jQuery.inArray(d.trC, [5, 6, 7, 8]) >= 0 ? 100 : 0) + "%) brightness(" + (jQuery.inArray(d.trC, [7, 8]) >= 0 ? 300 : 0) + "%)",
							H = "blur(0px) grayscale(0%) brightness(100%)";
						g && t[r].mtl.add(tpGS.gsap.fromTo(t[r].pr_next_bg, h / 1e3, {
							autoAlpha: 0,
							filter: N,
							"-webkit-filter": N
						}, {
							autoAlpha: 1,
							filter: H,
							"-webkit-filter": H,
							force3D: "auto",
							ease: _
						}), 0), jQuery.inArray(d.trC, [6, 8, 10]) >= 0 && t[r].mtl.add(tpGS.gsap.fromTo(t[r].pr_active_bg, h / 1e3, {
							autoAlpha: 1,
							filter: H,
							"-webkit-filter": H
						}, {
							autoAlpha: 0,
							force3D: "auto",
							ease: _,
							filter: N,
							"-webkit-filter": N
						}), 0)
				}
				t[r].mtl.add(tpGS.gsap.set(t[r].pr_next_bg.find("rs-sbg"), {
					autoAlpha: 1
				}), 0), u && t[r].mtl.add(tpGS.gsap.set(t[r].pr_active_bg.find("rs-sbg"), {
					autoAlpha: 1
				}), 0)
			} else if (12 == c || 13 == c || 14 == c || 15 == c) {
				var W = 3 == d.trC ? h / 1300 : h / 1e3,
					F = h / 1e3,
					j = 5 == d.trC || 6 == d.trC ? 0 : t[r].module.width,
					E = 5 == d.trC || 6 == d.trC ? 0 : t[r].module.height,
					V = 12 == c ? j : 15 == c ? 0 - j : 0,
					Y = 13 == c ? 5 == d.trC || 6 == d.trC ? 0 : t[r].module.height : 14 == c ? 5 == d.trC || 6 == d.trC ? 0 : 0 - t[r].module.height : 0,
					Q = 1 == d.trC || 2 == d.trC || 5 == d.trC || 6 == d.trC ? 0 : 1,
					X = 4 == d.trC || 5 == d.trC ? .6 : 6 == d.trC ? 1.4 : 1,
					J = 5 == d.trC ? 1.4 : 6 == d.trC ? .6 : 1;
				if (7 != d.trC && 4 != d.trC || (j = 0, E = 0), 8 == d.trC ? (t[r].mtl.add(tpGS.gsap.set(t[r].pr_active_slide, {
						zIndex: 20
					}), 0), t[r].mtl.add(tpGS.gsap.set(t[r].pr_next_slide, {
						zIndex: 15
					}), 0), t[r].mtl.add(tpGS.gsap.to(t[r].pr_next_bg, .01, {
						overflow: "hidden",
						x: 0,
						y: 0,
						scale: 1,
						autoAlpha: 1,
						rotation: 0,
						overwrite: !0,
						immediateRender: !0,
						force3D: "auto"
					}), 0)) : (void 0 !== t[r].pr_active_slide && t[r].pr_active_slide.length > 0 && t[r].mtl.add(tpGS.gsap.set(t[r].pr_active_slide, {
						zIndex: 15
					}), 0), void 0 !== t[r].pr_next_slide && t[r].pr_next_slide.length > 0 && t[r].mtl.add(tpGS.gsap.set(t[r].pr_next_slide, {
						zIndex: 20
					}), 0), g && t[r].mtl.add(tpGS.gsap.fromTo(t[r].pr_next_bg, W, {
						x: V,
						y: Y,
						overflow: "hidden",
						scale: J,
						autoAlpha: Q,
						rotation: t[r].rotate
					}, {
						autoAlpha: 1,
						x: 0,
						y: 0,
						scale: 1,
						rotation: 0,
						ease: _,
						force3D: "auto"
					}), 0)), 1 != d.trC) switch (c) {
					case 12:
						u && t[r].mtl.add(tpGS.gsap.to(t[r].pr_active_bg, F, {
							x: 0 - j + "px",
							overflow: "hidden",
							force3D: "auto",
							scale: X,
							autoAlpha: Q,
							rotation: t[r].rotate,
							ease: x
						}), 0);
						break;
					case 15:
						u && t[r].mtl.add(tpGS.gsap.to(t[r].pr_active_bg, F, {
							x: j + "px",
							overflow: "hidden",
							force3D: "auto",
							scale: X,
							autoAlpha: Q,
							rotation: t[r].rotate,
							ease: x
						}), 0);
						break;
					case 13:
						u && t[r].mtl.add(tpGS.gsap.to(t[r].pr_active_bg, F, {
							y: 0 - E + "px",
							overflow: "hidden",
							force3D: "auto",
							scale: X,
							autoAlpha: Q,
							rotation: t[r].rotate,
							ease: x
						}), 0);
						break;
					case 14:
						u && t[r].mtl.add(tpGS.gsap.to(t[r].pr_active_bg, F, {
							y: E + "px",
							overflow: "hidden",
							force3D: "auto",
							scale: X,
							autoAlpha: Q,
							rotation: t[r].rotate,
							ease: x
						}), 0)
				}
			} else if (16 == c) {
				var q = 1 === l ? "80% 50% 0" : "20%  50% 0";
				t[r].mtl.add(tpGS.gsap.set(t[r].pr_active_slide, {
					zIndex: 20
				}), 0), t[r].mtl.add(tpGS.gsap.set(t[r].pr_next_slide, {
					zIndex: 15
				}), 0), t[r].pr_active_bg.find(".slotslide").each(function (e) {
					t[r].mtl.add(tpGS.gsap.fromTo(this, h / 1e3, {
						x: 0,
						rotationZ: 0,
						opacity: 1,
						y: 0,
						z: 0,
						scale: 1
					}, {
						opacity: 1,
						x: 1 === l ? 0 == e ? -t[r].module.width / 1.6 : -t[r].module.width / 1.8 : 0 === e ? t[r].module.width / 1.6 : t[r].module.width / 1.8,
						rotationZ: 1 === l ? 0 === e ? -35 : 25 : 0 === e ? 25 : -35,
						z: 0,
						y: 0 == e ? "-120%" : "140%",
						scale: .8,
						force3D: "auto",
						transformPerspective: 600,
						transformOrigin: q,
						delay: 0,
						ease: _
					}), 0), t[r].mtl.add(tpGS.gsap.fromTo(this, h / 2e3, {
						opacity: 1
					}, {
						opacity: 0,
						delay: h / 2e3
					}), 0)
				}), g && t[r].mtl.add(tpGS.gsap.fromTo(t[r].pr_next_bg, h / 1e3 - h / 7e3, {
					x: 100 * Math.random() - 50,
					opacity: 1,
					scale: .9,
					rotationZ: 10 * Math.random() - 5
				}, {
					x: 0,
					opacity: 1,
					scale: 1,
					rotationZ: 0,
					ease: _,
					force3D: "auto",
					delay: h / 7e3
				}), 0)
			} else if (17 == c || 18 == c) t[r].pr_next_bg.find(".slotslide").each(function (e) {
				t[r].mtl.add(tpGS.gsap.fromTo(this, h / t[r].slots / 1e3, {
					opacity: 0,
					y: 0,
					x: 0,
					rotationY: 17 === c ? 0 : 90,
					scale: 1,
					rotationX: 17 === c ? -90 : 0,
					force3D: "auto",
					transformPerspective: 600,
					transformOrigin: 17 === c ? "top center" : "center left"
				}, {
					opacity: 1,
					y: 0,
					x: 0,
					rotationX: 0,
					rotationY: 0,
					force3D: "auto",
					ease: x,
					delay: e * (h / t[r].slots / 2e3)
				}), 0)
			}), t[r].pr_active_bg.find(".slotslide").each(function (e) {
				t[r].mtl.add(tpGS.gsap.fromTo(this, h / t[r].slots / 1e3, {
					opacity: 1,
					rotationY: 0,
					scale: 1,
					rotationX: 0,
					force3D: "auto",
					transformPerspective: 600,
					transformOrigin: 17 === c ? "bottom center" : "center right"
				}, {
					opacity: 0,
					rotationX: 17 === c ? 110 : 0,
					rotationY: 17 === c ? 0 : 110,
					force3D: "auto",
					ease: _,
					delay: e * (h / t[r].slots / 2e3)
				}), 0)
			});
			else if (19 == c || 22 == c || 23 == c || 24 == c) {
				t[r].mtl.add(tpGS.gsap.set(t[r].pr_active_slide, {
					zIndex: 20
				}), 0), t[r].mtl.add(tpGS.gsap.set(t[r].pr_next_slide, {
					zIndex: 10
				}), 0);
				q = 19 === c ? "center center -" + t[r].module.height / 2 : 22 === c ? "center center " + t[r].module.height / 2 : 23 === c ? "center center -" + t[r].module.width / 2 : "center center " + t[r].module.width / 2;
				var U = [];
				tpGS.gsap.set(t[r].c, {
					transformStyle: "flat",
					backfaceVisibility: "hidden",
					transformPerspective: 600
				}), g && (U.push(t[r].pr_next_bg), t[r].mtl.add(tpGS.gsap.fromTo(t[r].pr_next_bg, h / 1e3, {
					rotationX: 19 == c || 22 === c ? 1 == l ? -90 : 90 : 0,
					rotationY: 23 == c || 24 === c ? 1 == l ? -90 : 90 : 0,
					x: 0,
					scale: 1,
					y: 0,
					overflow: "hidden",
					autoAlpha: 1,
					transformStyle: "flat",
					backfaceVisibility: "hidden",
					force3D: "auto",
					transformPerspective: 1200,
					transformOrigin: q
				}, {
					overflow: "hidden",
					x: 0,
					autoAlpha: 1,
					rotationX: 0,
					rotationY: 0,
					y: 0,
					scale: 1,
					delay: 0,
					ease: _,
					transformStyle: "flat",
					backfaceVisibility: "hidden",
					force3D: "auto",
					transformPerspective: 1200,
					transformOrigin: q
				}), 0), t[r].mtl.add(tpGS.gsap.fromTo(t[r].pr_next_bg, h / 2e3, {
					z: 19 == c || 23 === c ? -200 : 0
				}, {
					z: 19 === c || 23 === c ? 0 : -200,
					ease: "power3.inOut",
					delay: 19 === c || 23 === c ? h / 2e3 : 0
				}), 0)), 22 !== c && 24 !== c || (u && U.push(t[r].pr_active_bg), t[r].mtl.add(tpGS.gsap.fromTo(U, h / 2e3, {
					z: -200
				}, {
					z: 0,
					ease: "power2.in",
					delay: h / 2e3
				}), 0)), u && t[r].mtl.add(tpGS.gsap.fromTo(t[r].pr_active_bg, h / 2e3, {
					z: 0
				}, {
					z: -200,
					ease: "power3.inOut",
					delay: 0,
					force3D: "auto"
				}), 0), !u || 19 !== c && 23 !== c || t[r].mtl.add(tpGS.gsap.fromTo(t[r].pr_active_bg, h / 2e3, {
					autoAlpha: 1
				}, {
					autoAlpha: 0,
					ease: "none",
					delay: h / 2e3,
					force3D: "auto"
				}), 0), u && t[r].mtl.add(tpGS.gsap.fromTo(t[r].pr_active_bg, h / 1e3, {
					overflow: "hidden",
					rotationX: 0,
					rotationY: 0,
					rotationZ: 0,
					y: 0,
					x: 0,
					scale: 1,
					transformStyle: "flat",
					backfaceVisibility: "hidden",
					force3D: "auto",
					transformPerspective: 1200,
					transformOrigin: q
				}, {
					rotationX: 19 === c || 22 === c ? 1 == l ? 90 : -90 : 0,
					rotationY: 23 === c || 24 === c ? 1 == l ? 90 : -90 : 0,
					overflow: "hidden",
					y: 0,
					scale: 1,
					delay: 0,
					force3D: "auto",
					ease: _,
					transformStyle: "flat",
					backfaceVisibility: "hidden",
					transformPerspective: 1200,
					transformOrigin: q
				}), 0)
			} else if (20 == c) {
				q = 1 === l ? "20% " : "80% ";
				q += "60% -50%", g && t[r].mtl.add(tpGS.gsap.fromTo(t[r].pr_next_bg, h / 1e3, {
					x: 1 === l ? -t[r].module.width : t[r].module.width,
					rotationX: 20,
					z: -t[r].module.width,
					autoAlpha: 0,
					y: 0,
					scale: 1,
					force3D: "auto",
					transformPerspective: 600,
					transformOrigin: q,
					rotationY: 1 === l ? 50 : -50
				}, {
					x: 0,
					rotationX: 0,
					autoAlpha: 1,
					y: 0,
					z: 0,
					scale: 1,
					rotationY: 0,
					delay: 0,
					ease: _
				}), 0), q = 1 != l ? "20% " : "80% ", q += "60% -50%", t[r].mtl.add(tpGS.gsap.fromTo(t[r].pr_active_bg, h / 1e3, {
					autoAlpha: 1,
					rotationX: 0,
					y: 0,
					z: 0,
					scale: 1,
					x: 0,
					force3D: "auto",
					transformPerspective: 600,
					transformOrigin: q,
					rotationY: 0
				}, {
					autoAlpha: 1,
					rotationX: 20,
					y: 0,
					z: -t[r].module.width,
					x: 1 != l ? -t[r].module.width / 1.2 : t[r].module.width / 1.2,
					force3D: "auto",
					rotationY: 1 === l ? -50 : 50,
					delay: 0,
					ease: "power2.inOut"
				}), 0)
			} else if (21 == c || 25 == c) {
				var Z = 25 === c ? t[r].rotate : 1 === l ? 90 : -90,
					K = 25 === c ? 1 === l ? -90 : 90 : t[r].rotate;
				q = 1 === l ? 25 === c ? "center top 0" : "left center 0" : 25 === c ? "center bottom 0" : "right center 0";
				g && t[r].mtl.add(tpGS.gsap.fromTo(t[r].pr_next_bg, h / 1e3, {
					transformStyle: "flat",
					rotationX: K,
					y: 0,
					x: 0,
					autoAlpha: 0,
					force3D: "auto",
					transformPerspective: 1200,
					transformOrigin: q,
					rotationY: Z
				}, {
					autoAlpha: 1,
					rotationX: 0,
					rotationY: 0,
					ease: _
				}), 0), q = 1 === l ? 25 === c ? "center bottom 0" : "right center 0" : 25 === c ? "center top 0" : "left center 0", Z = 25 !== c ? -Z : Z, K = 25 !== c ? K : -K, t[r].mtl.add(tpGS.gsap.fromTo(t[r].pr_active_bg, h / 1e3, {
					rotationX: 0,
					rotationY: 0,
					transformStyle: "flat",
					transformPerspective: 1200,
					force3D: "auto"
				}, {
					immediateRender: !0,
					rotationX: K,
					transformOrigin: q,
					rotationY: Z,
					ease: x
				}), 0)
			} else if (26 == c) h = 0, g && (t[r].mtl.add(tpGS.gsap.fromTo(t[r].pr_next_bg, .001, {
				autoAlpha: 0
			}, {
				autoAlpha: 1,
				force3D: "auto",
				ease: _
			}), 0), t[r].mtl.add(tpGS.gsap.set(t[r].pr_next_bg.find("rs-sbg"), {
				autoAlpha: 1
			}), 0)), u && (t[r].mtl.add(tpGS.gsap.to(t[r].pr_active_bg, .001, {
				autoAlpha: 0,
				force3D: "auto",
				ease: _
			}), 0), t[r].mtl.add(tpGS.gsap.set(t[r].pr_active_bg.find("rs-sbg"), {
				autoAlpha: 1
			}), 0));
			else if (27 == c || 28 == c || 29 == c || 30 == c) {
				var $ = t[r].pr_next_bg.find(".slot"),
					ee = 27 == c || 29 == c ? "-100%" : "100%",
					te = 27 == c || 29 == c ? "100%" : "-100%",
					ie = 27 == c || 29 == c ? "-80%" : "80%",
					ae = 27 == c || 29 == c ? "80%" : "-80%",
					re = 27 == c || 29 == c ? "10%" : "-10%",
					oe = {
						overwrite: "all"
					},
					se = {
						autoAlpha: 0,
						zIndex: 1,
						force3D: "auto",
						ease: _
					},
					ne = {
						position: "inherit",
						autoAlpha: 0,
						overwrite: "all",
						zIndex: 1
					},
					le = {
						autoAlpha: 1,
						force3D: "auto",
						ease: x
					},
					de = {
						overwrite: "all",
						zIndex: 2,
						opacity: 1,
						autoAlpha: 1
					},
					ce = {
						autoAlpha: 1,
						force3D: "auto",
						overwrite: "all",
						ease: _
					},
					pe = {
						overwrite: "all",
						zIndex: 2,
						autoAlpha: 1
					},
					ge = {
						autoAlpha: 1,
						force3D: "auto",
						ease: _
					},
					ue = 1 == (27 == c || 28 == c ? 1 : 2) ? "y" : "x";
				oe[ue] = "0%", se[ue] = ee, ne[ue] = re, le[ue] = 0, de[ue] = te, ce[ue] = ee, pe[ue] = ie, ge[ue] = ae, $.append('<span style="background-color:rgba(0,0,0,0.6);width:100%;height:100%;position:absolute;top:0px;left:0px;display:block;z-index:2"></span>'), u && t[r].mtl.add(tpGS.gsap.fromTo(t[r].pr_active_bg, h / 1e3, oe, se), 0), g && t[r].mtl.add(tpGS.gsap.fromTo(t[r].pr_next_bg.find("rs-sbg"), h / 2e3, ne, le), h / 2e3), t[r].mtl.add(tpGS.gsap.fromTo($, h / 1e3, de, ce), 0), t[r].mtl.add(tpGS.gsap.fromTo($.find(".slotslide div"), h / 1e3, pe, ge), 0)
			}
			p && f.length > 0 && t[r].mtl.add(tpGS.gsap.set(f, {
				zIndex: 30,
				display: "block",
				onComplete: function () {
					t.playVideo(f, r)
				}
			}))
		},
		o = function (e, t, i, a, r) {
			var o = a / r,
				s = t / i,
				n = t,
				l = i;
			return (e ? o > s : o < s) ? l = n / o : n = l * o, {
				width: n,
				height: l,
				x: (t - n) / 2,
				y: (i - l) / 2
			}
		},
		s = function (e) {
			e.ctx.save(), e.ctx.beginPath(), e.ctx.moveTo(e.poly[0][0], e.poly[0][1]);
			for (var t = 1; t < e.poly.length; t++) e.ctx.lineTo(e.poly[t][0], e.poly[t][1]);
			e.ctx.closePath(), e.ctx.lineWidth = 2, e.ctx.stroke(), e.ctx.clip(), void 0 !== e.bg.img && e.ctx.drawImage(e.bg.img, e.bg.offsetx, e.bg.offsety, e.bg.width, e.bg.height), "transparent" !== e.bg.col && void 0 !== e.bg.col && (e.ctx.fillStyle = e.bg.col, e.ctx.fillRect(e.bg.offsetx, e.bg.offsety, e.bg.width, e.bg.height)), void 0 !== e.bg.overlay && (e.ctx.fillStyle = e.bg.overlay, e.ctx.fillRect(e.bg.offsetx, e.bg.offsety, e.bg.width, e.bg.height)), e.ctx.restore()
		},
		n = function (e, i, a, r) {
			if (0 !== e.length) {
				var o = e.find("rs-sbg"),
					s = o.data("mediafilter"),
					n = e.data("zoomstart"),
					l = e.data("rotationstart");
				null != o.data("currotate") && (l = o.data("currotate")), null != o.data("curscale") && "box" == r ? n = 100 * o.data("curscale") : null != o.data("curscale") && (n = o.data("curscale")),
					function (e, i) {
						t[i].slotw = Math.ceil(t[i].module.width / t[i].slots), "fullscreen" == t[i].sliderLayout ? t[i].sloth = Math.ceil(t.getWinH(i) / t[i].slots) : t[i].sloth = Math.ceil(t[i].module.height / t[i].slots)
					}(0, i);
				var d = void 0 !== o[0] && void 0 !== o[0].dataset && void 0 !== o[0].dataset.lazyload ? o[0].dataset.lazyload : o.attr("src"),
					c = t[i].module.width,
					p = t[i].autoHeight ? t[i].canv.height : t[i].module.height,
					g = o.data("fxof"),
					u = 0,
					m = e.data("bgcolor") || "transparent",
					h = e.data("bgfit") || "cover",
					f = e.data("bgrepeat") || "no-repeat",
					v = e.data("bgposition") || "center center",
					y = void 0 !== m && m.indexOf("gradient") >= 0 ? "background:" + m : "background-color:" + m + ";background-image:url(" + d + ");background-repeat:" + f + ";background-size:" + h + ";background-position:" + v,
					b = "";
				g = null == g ? 0 : g;
				var w = e[0].parentNode;
				if (e.detach(), e.find(".slot").each(function () {
						jQuery(this).remove()
					}), "box" === r)
					for (var _ = 0, x = 0, k = 0; k < t[i].slots; k++) {
						x = 0;
						for (var S = 0; S < t[i].slots; S++) b += '<div class="slot" style="' + (null != n && null != l ? "transform:rotateZ(" + l + "deg)" : "") + ";position:absolute;overflow:hidden;top:" + (0 + x) + "px;left:" + (g + _) + "px;width:" + t[i].slotw + "px;height:" + t[i].sloth + 'px;"><div class="slotslide ' + s + '" data-x="' + _ + '" data-y="' + x + '" style="position:absolute;top:0px;left:0px;width:' + t[i].slotw + "px;height:" + t[i].sloth + 'px;overflow:hidden;"><div style="position:absolute;top:' + (0 - x) + "px;left:" + (0 - _) + "px;width:" + c + "px;height:" + p + "px;" + y + ';"></div></div></div>', x += t[i].sloth;
						_ += t[i].slotw
					} else if ("horizontal" === r) {
						if (!a) u = 0 - t[i].slotw;
						for (S = 0; S < t[i].slots; S++) b += '<div class="slot" style="' + (null != n && null != l ? "transform:rotateZ(" + l + "deg)" : "") + ";position:absolute;overflow:hidden;top:0px;left:" + (g + S * t[i].slotw) + "px;width:" + (t[i].slotw + .3) + "px;height:" + p + 'px"><div class="slotslide ' + s + '" style="position:absolute;top:0px;left:' + u + "px;width:" + (t[i].slotw + .6) + "px;height:" + p + 'px;overflow:hidden;"><div style="position:absolute;top:0px;left:' + (0 - S * t[i].slotw) + "px;width:" + c + "px;height:" + p + "px;" + y + ';"></div></div></div>'
					}
				if ("vertical" === r) {
					if (!a) u = 0 - t[i].sloth;
					for (S = 0; S < t[i].slots; S++) b += '<div class="slot" style="' + (null != n && null != l ? "transform:rotateZ(" + l + "deg)" : "") + ";position:absolute;overflow:hidden;top:" + (0 + S * t[i].sloth) + "px;left:" + g + "px;width:" + c + "px;height:" + t[i].sloth + 'px"><div class="slotslide ' + s + '" style="position:absolute;top:' + u + "px;left:0px;width:" + c + "px;height:" + t[i].sloth + 'px;overflow:hidden;"><div style="position:absolute;top:' + (0 - S * t[i].sloth) + "px;left:0px;width:" + c + "px;height:" + p + "px;" + y + ';"></div></div></div>'
				}
				e.append(b), w.appendChild(e[0])
			}
		}
}(jQuery),
function (e) {
	"use strict";
	var t = jQuery.fn.revolution,
		i = t.is_mobile();
	t.is_android();

	function a(e) {
		return null == e ? -1 : t.isNumeric(e) ? e : e.split(":").length > 1 ? 60 * parseInt(e.split(":")[0], 0) + parseInt(e.split(":")[1], 0) : e
	}
	jQuery.extend(!0, t, {
		preLoadAudio: function (e, i) {
			t[i].videos = void 0 === t[i].videos ? {} : t[i].videos, e.find(".rs-layer-audio").each(function () {
				var a = jQuery(this),
					r = t[i].videos[a[0].id] = void 0 === t[i].videos[a[0].id] ? v(a.data(), "audio", t.gA(e[0], "key")) : t[i].videos[a[0].id],
					o = {};
				0 === a.find("audio").length && (o.src = null != r.mp4 ? r.mp4 : "", o.pre = r.pload || "", this.id = void 0 === this.id || "" === this.id ? a.attr("audio-layer-" + Math.round(199999 * Math.random())) : this.id, o.id = this.id, o.status = "prepared", o.start = jQuery.now(), o.waittime = void 0 !== r.ploadwait ? 1e3 * r.ploadwait : 5e3, "auto" != o.pre && "canplaythrough" != o.pre && "canplay" != o.pre && "progress" != o.pre || (void 0 === t[i].audioqueue && (t[i].audioqueue = []), t[i].audioqueue.push(o), t.manageVideoLayer(a, i, t.gA(e[0], "key"))))
			})
		},
		preLoadAudioDone: function (e, i, a) {
			var r = t[i].videos[e[0].id];
			t[i].audioqueue && t[i].audioqueue.length > 0 && jQuery.each(t[i].audioqueue, function (e, t) {
				r.mp4 !== t.src || t.pre !== a && "auto" !== t.pre || (t.status = "loaded")
			})
		},
		resetVideo: function (e, a, r, o) {
			var s = t[a].videos[e[0].id];
			switch (s.type) {
				case "youtube":
					s.rwd && null != s.player && void 0 !== s.player.seekTo && (s.player.seekTo(-1 == s.ssec ? 0 : s.ssec), s.player.pauseVideo()), 0 != e.find("rs-poster").length || s.bgvideo || "preset" === r || tpGS.gsap.to(e.find("iframe"), .3, {
						opacity: 1,
						display: "block",
						ease: "power3.inOut"
					});
					break;
				case "vimeo":
					void 0 !== s.vimeoplayer && !o && s.rwd && (0 !== s.ssec && -1 !== s.ssec || s.bgvideo || e.find("rs-poster").length > 0) && (s.vimeoplayer.setCurrentTime(-1 == s.ssec ? 0 : s.ssec), s.vimeoplayer.pause()), 0 != e.find("rs-poster").length || s.bgvideo || "preset" === r || tpGS.gsap.to(e.find("iframe"), .3, {
						opacity: 1,
						display: "block",
						ease: "power3.inOut"
					});
					break;
				case "html5":
					if (i && s.notonmobile) return !1;
					tpGS.gsap.to(s.jvideo, .3, {
						opacity: 1,
						display: "block",
						ease: "power3.inOut"
					}), !s.rwd || e.hasClass("videoisplaying") || isNaN(s.video.duration) || (s.justReseted = !0, s.video.currentTime = -1 == s.ssec ? 0 : s.ssec), ("mute" == s.volume || t.lastToggleState(e.videomutetoggledby) || !0 === t[a].globalmute) && (s.video.muted = !0)
			}
		},
		Mute: function (e, i, a) {
			var r = !1,
				o = t[i].videos[e[0].id];
			switch (o.type) {
				case "youtube":
					o.player && (!0 === a && o.player.mute(), !1 === a && l(o, parseInt(o.volcache, 0)), r = o.player.isMuted());
					break;
				case "vimeo":
					o.volcachecheck || (o.volcache = o.volcache > 1 ? o.volcache / 100 : o.volcache, o.volcachecheck = !0), o.volume = !0 === a ? "mute" : !1 === a ? o.volcache : o.volume, void 0 !== a && null != o.vimeoplayer && n(o, !0 === a ? 0 : o.volcache), r = "mute" == o.volume || 0 === o.volume;
					break;
				case "html5":
					o.volcachecheck || (o.volcache = o.volcache > 1 ? o.volcache / 100 : o.volcache, o.volcachecheck = !0), o.video.volume = o.volcache, void 0 !== a && o.video && (o.video.muted = a), r = void 0 !== o.video ? o.video.muted : r
			}
			if (void 0 === a) return r
		},
		stopVideo: function (e, i) {
			if (void 0 !== t[i] && void 0 !== t[i]) {
				var a = t[i].videos[e[0].id];
				if (void 0 !== a) switch (t[i].leaveViewPortBasedStop || (t[i].lastplayedvideos = []), t[i].leaveViewPortBasedStop = !1, a.type) {
					case "youtube":
						if (void 0 === a.player || 2 === a.player.getPlayerState() || 5 === a.player.getPlayerState()) return;
						a.player.pauseVideo(), a.youtubepausecalled = !0, setTimeout(function () {
							a.youtubepausecalled = !1
						}, 80);
						break;
					case "vimeo":
						if (void 0 === a.vimeoplayer) return;
						a.vimeoplayer.pause(), a.vimeopausecalled = !0, setTimeout(function () {
							a.vimeopausecalled = !1
						}, 80);
						break;
					case "html5":
						a.video && a.video.pause()
				}
			}
		},
		playVideo: function (e, i) {
			var a = t[i].videos[e[0].id];
			switch (clearTimeout(a.videoplaywait), a.type) {
				case "youtube":
					if (0 == e.find("iframe").length) e.append(a.videomarkup), u(e, i, !0);
					else if (null != a.player.playVideo) {
						var o = a.player.getCurrentTime();
						a.nseTriggered && (o = -1, a.nseTriggered = !1), -1 != a.ssec && a.ssec > o && a.player.seekTo(a.ssec), !0 !== a.youtubepausecalled && p(a)
					} else a.videoplaywait = setTimeout(function () {
						!0 !== a.youtubepausecalled && t.playVideo(e, i)
					}, 50);
					break;
				case "vimeo":
					0 == e.find("iframe").length ? (delete a.vimeoplayer, e.append(a.videomarkup), u(e, i, !0)) : e.hasClass("rs-apiready") ? (a.vimeoplayer = null == a.vimeoplayer ? new Vimeo.Player(e.find("iframe").attr("id")) : a.vimeoplayer, a.vimeoplayer.getPaused() ? setTimeout(function () {
						var r = void 0 === a.currenttime ? 0 : a.currenttime;
						a.nseTriggered && (r = -1, a.nseTriggered = !1), -1 != a.ssec && a.ssec > r && a.vimeoplayer.setCurrentTime(a.ssec), ("mute" == a.volume || 0 === a.volume || t.lastToggleState(e.data("videomutetoggledby")) || !0 === t[i].globalmute) && (a.volumetoken = !0, a.vimeoplayer.setVolume(0)), c(a.vimeoplayer)
					}, 510) : a.videoplaywait = setTimeout(function () {
						!0 !== a.vimeopausecalled && t.playVideo(e, i)
					}, 50)) : a.videoplaywait = setTimeout(function () {
						!0 !== a.vimeopausecalled && t.playVideo(e, i)
					}, 100);
					break;
				case "html5":
					if (a.metaloaded) {
						d(a.video);
						o = a.video.currentTime;
						a.nseTriggered && (o = -1, a.nseTriggered = !1), window._video = a.video, -1 != a.ssec && a.ssec > o && (a.video.currentTime = a.ssec)
					} else r(a.video, "loadedmetadata", function (e) {
						t.resetVideo(e, i), a.video.play();
						var r = a.video.currentTime;
						a.nseTriggered && (r = -1, a.nseTriggered = !1), -1 != a.ssec && a.ssec > r && (a.video.currentTime = a.ssec)
					}(e))
			}
		},
		isVideoPlaying: function (e, i) {
			var a = !1;
			return null != t[i].playingvideos && jQuery.each(t[i].playingvideos, function (t, i) {
				e.attr("id") == i.attr("id") && (a = !0)
			}), a
		},
		removeMediaFromList: function (e, t) {
			b(e, t)
		},
		prepareCoveredVideo: function (e) {
			clearTimeout(t[e].resizePrepareCoverVideolistener);
			var i = "carousel" === t[e].sliderType ? t[e].carousel.justify ? void 0 === t[e].carousel.slide_widths ? void 0 : t[e].carousel.slide_widths[t[e].carousel.focused] : t[e].carousel.slide_width : t[e].canv.width,
				a = "carousel" === t[e].sliderType ? t[e].carousel.slide_height : t[e].canv.height;
			if (0 !== i && 0 !== a && void 0 !== i && void 0 !== a)
				for (var r in t[e].videos) {
					var o = t[e].videos[r];
					if ((o.bgvideo || o.fcover) && ("html5" === o.type && void 0 !== o.jvideo && tpGS.gsap.set(o.jvideo, {
							width: i
						}), void 0 === t[e].activeRSSlide || o.slideid === t.gA(t[e].slides[t[e].activeRSSlide], "key") || void 0 === t[e].pr_next_slide || o.slideid === t.gA(t[e].pr_next_slide[0], "key"))) {
						o.vd = o.ratio.split(":").length > 1 ? o.ratio.split(":")[0] / o.ratio.split(":")[1] : 1;
						var s = i / a,
							n = s / o.vd * 100,
							l = o.vd / s * 100;
						"Edge" === t.get_browser() || "IE" === t.get_browser() ? (o.ifr = void 0 === o.ifr ? o.video : o.ifr, s > o.vd ? tpGS.gsap.set(o.ifr, {
							minWidth: "100%",
							height: n + "%",
							x: "-50%",
							y: "-50%",
							top: "50%",
							left: "50%",
							position: "absolute"
						}) : tpGS.gsap.set(o.ifr, {
							minHeight: "100%",
							width: l + "%",
							x: "-50%",
							y: "-50%",
							top: "50%",
							left: "50%",
							position: "absolute"
						})) : s > o.vd ? tpGS.gsap.set(o.ifr, {
							height: n + "%",
							width: "100%",
							top: -(n - 100) / 2 + "%",
							left: "0px",
							position: "absolute"
						}) : tpGS.gsap.set(o.ifr, {
							width: l + "%",
							height: "100%",
							left: -(l - 100) / 2 + "%",
							top: "0px",
							position: "absolute"
						})
					}
				} else t[e].resizePrepareCoverVideolistener = setTimeout(function () {
					t.prepareCoveredVideo(e)
				}, 100)
		},
		checkVideoApis: function (e, i) {
			location.protocol;
			if (!t[i].youtubeapineeded && ((null != e.data("ytid") || e.find("iframe").length > 0 && e.find("iframe").attr("src").toLowerCase().indexOf("youtube") > 0) && (t[i].youtubeapineeded = !0), t[i].youtubeapineeded && !window.rs_addedyt)) {
				t[i].youtubestarttime = jQuery.now(), window.rs_addedyt = !0;
				var a = document.createElement("script"),
					r = t.getByTag(document, "script")[0],
					o = !0;
				a.src = "https://www.youtube.com/iframe_api", jQuery("head").find("*").each(function () {
					"https://www.youtube.com/iframe_api" == jQuery(this).attr("src") && (o = !1)
				}), o && r.parentNode.insertBefore(a, r)
			}
			if (!t[i].vimeoapineeded && ((null != e.data("vimeoid") || e.find("iframe").length > 0 && e.find("iframe").attr("src").toLowerCase().indexOf("vimeo") > 0) && (t[i].vimeoapineeded = !0), t[i].vimeoapineeded && !window.rs_addedvim)) {
				t[i].vimeostarttime = jQuery.now(), window.rs_addedvim = !0;
				var s = document.createElement("script");
				r = t.getByTag(document, "script")[0], o = !0;
				s.src = "https://player.vimeo.com/api/player.js", jQuery("head").find("*").each(function () {
					"https://player.vimeo.com/api/player.js" == jQuery(this).attr("src") && (o = !1)
				}), o && r.parentNode.insertBefore(s, r)
			}
		},
		manageVideoLayer: function (e, a, o) {
			if (!0 === t.gA(e[0], "videoLayerManaged") || "true" === t.gA(e[0], "videoLayerManaged")) return !1;
			t[a].videos = void 0 === t[a].videos ? {} : t[a].videos;
			var s = t[a].videos[e[0].id] = void 0 === t[a].videos[e[0].id] ? v(e.data(), void 0, o) : t[a].videos[e[0].id];
			if (s.audio = void 0 !== s.audio && s.audio, i && s.opom) 0 == e.find("rs-poster").length && e.append('<rs-poster class="noSwipe" style="background-image:url(' + s.poster + ');"></rs-poster>');
			else {
				s.id = e[0].id, s.pload = "auto" === s.pload || "canplay" === s.pload || "canplaythrough" === s.pload || "progress" === s.pload ? "auto" : s.pload, s.type = null != s.mp4 || null != s.webm ? "html5" : null != s.ytid && String(s.ytid).length > 1 ? "youtube" : null != s.vimeoid && String(s.vimeoid).length > 1 ? "vimeo" : "none", s.newtype = "html5" == s.type && 0 == e.find(s.audio ? "audio" : "video").length ? "html5" : "youtube" == s.type && 0 == e.find("iframe").length ? "youtube" : "vimeo" == s.type && 0 == e.find("iframe").length ? "vimeo" : "none", s.extras = "", s.posterMarkup = void 0 === s.posterMarkup ? "" : s.posterMarkup, !s.audio && "1sttime" == s.aplay && s.pausetimer && s.bgvideo && t.sA(e.closest("rs-slide")[0], "rspausetimeronce", 1), s.audio || !s.bgvideo || !s.pausetimer || 1 != s.aplay && "true" != s.aplay && "no1sttime" != s.aplay || t.sA(e.closest("rs-slide")[0], "rspausetimeralways", 1), s.noInt && e.addClass("rs-nointeraction"), !(null != s.poster && s.poster.length > 2) || i && s.npom || 0 == e.find("rs-poster").length && (s.posterMarkup += '<rs-poster class="noSwipe" style="background-image:url(' + s.poster + ');"></rs-poster>');
				var n = !0;
				switch (s.newtype) {
					case "html5":
						1 == window.isSafari11 && (t[a].slideHasIframe = !0), s.audio && e.addClass("rs-audio"), s.tag = s.audio ? "audio" : "video";
						var l = "video" === s.tag && (t.is_mobile() || t.isSafari11()) ? s.aplay || "true" === s.aplay ? "muted playsinline autoplay" : s.inline ? " playsinline" : "" : "",
							d = '<div class="html5vid rs_html5vidbasicstyles ' + (!1 === s.afs ? "hidefullscreen" : "") + '">';
						d += "<" + s.tag + " " + l + " " + (s.controls && "none" !== s.controls ? " controls " : "") + (s.bgvideo ? " muted autoplay " : "") + ' style="' + ("Edge" !== t.get_browser() ? "object-fit:cover;background-size:cover;opacity:0;width:100%; height:100%" : "") + '" class="" ' + (s.loop ? "loop" : "") + ' preload="' + s.pload + '">', "video" === s.tag && null != s.webm && "firefox" == t.get_browser().toLowerCase() && (d = d + '<source src="' + s.webm + '" type="video/webm" />'), null != s.mp4 && (d = d + '<source src="' + s.mp4 + '" type="' + ("video" === s.tag ? "video/mp4" : "audio/mpeg") + '" />'), null != s.ogv && (d = d + '<source src="' + s.mp4 + '" type="' + s.tag + '/ogg" />'), d += "</" + s.tag + "></div>", d += s.posterMarkup, s.controls && !s.audio || i || (d += '<div class="tp-video-play-button"><i class="revicon-right-dir"></i><span class="tp-revstop">&nbsp;</span></div>'), s.videomarkup = d, n = !1, i && s.notonmobile || t.isIE(8) || e.append(d), s.jvideo = e.find(s.tag), s.video = s.jvideo[0], s.html5vid = s.jvideo.parent(), s.metaloaded || r(s.video, "loadedmetadata", function (e) {
							h(e, a), t.resetVideo(e, a)
						}(e));
						break;
					case "youtube":
						t[a].slideHasIframe = !0, s.controls && "none" !== s.controls || (s.vatr = s.vatr.replace("controls=1", "controls=0"), -1 == s.vatr.toLowerCase().indexOf("controls") && (s.vatr = s.vatr + "&controls=0")), (s.inline || "RS-BGVIDEO" === e[0].tagName) && (s.vatr = s.vatr + "&playsinline=1"), -1 != s.ssec && (s.vatr += "&start=" + s.ssec), -1 != s.esec && (s.vatr += "&end=" + s.esec);
						var c = s.vatr.split("origin=https://");
						s.vatrnew = c.length > 1 ? c[0] + "origin=https://" + (self.location.href.match(/www/gi) && !c[1].match(/www/gi) ? "www." + c[1] : c[1]) : s.vatr, s.videomarkup = '<iframe allow="autoplay; ' + (!0 === s.afs ? "fullscreen" : "") + '" type="text/html" src="https://www.youtube-nocookie.com/embed/' + s.ytid + "?" + s.vatrnew + '" ' + (!0 === s.afs ? "allowfullscreen" : "") + ' width="100%" height="100%" class="intrinsic-ignore" style="opacity:0;visibility:visible;width:100%;height:100%"></iframe>';
						break;
					case "vimeo":
						t[a].slideHasIframe = !0, s.controls && "none" !== s.controls ? (s.vatr = s.vatr.replace("background=0", "background=1"), -1 == s.vatr.toLowerCase().indexOf("background") && (s.vatr = s.vatr + "&background=1")) : (s.vatr = s.vatr.replace("background=1", "background=0"), -1 == s.vatr.toLowerCase().indexOf("background") && (s.vatr = s.vatr + "&background=0")), s.vatr = "autoplay=" + (!0 === s.aplay ? 1 : 0) + "&" + s.vatr, i && !0 === s.aplay && (s.vatr = "muted=1&" + s.vatr), s.loop && (s.vatr = "loop=1&" + s.vatr), s.videomarkup = '<iframe  allow="autoplay; ' + (!0 === s.afs ? "fullscreen" : "") + '" src="https://player.vimeo.com/video/' + s.vimeoid + "?" + s.vatr + '" ' + (!0 === s.afs ? "webkitallowfullscreen mozallowfullscreen allowfullscreen" : "") + ' width="100%" height="100%" class="intrinsic-ignore" style="opacity:0;visibility:visible;100%;height:100%"></iframe>'
				}
				if (!(null != s.poster && s.poster.length > 2) || i && s.npom) {
					if (i && s.notonmobile) return !1;
					0 != e.find("iframe").length || "youtube" != s.type && "vimeo" != s.type || (delete s.vimeoplayer, e.append(s.videomarkup), u(e, a, !1))
				} else n && 0 == e.find("rs-poster").length && e.append(s.posterMarkup), 0 == e.find("iframe").length && e.find("rs-poster").on("click", function () {
					if (t.playVideo(e, a), i) {
						if (s.notonmobile) return !1;
						tpGS.gsap.to(e.find("rs-poster"), .3, {
							opacity: 0,
							visibility: "hidden",
							force3D: "auto",
							ease: "power3.inOut"
						}), tpGS.gsap.to(e.find("iframe"), .3, {
							opacity: 1,
							display: "block",
							ease: "power3.inOut"
						})
					}
				});
				"none" !== s.doverlay && void 0 !== s.doverlay && (s.bgvideo ? 1 != e.closest("rs-sbg-wrap").find("rs-dotted").length && e.closest("rs-sbg-wrap").append('<rs-dotted class="' + s.doverlay + '"></rs-dotted>') : 1 != e.find("rs-dotted").length && e.append('<rs-dotted class="' + s.doverlay + '"></rs-dotted>')), t.sA(e[0], "videoLayerManaged", !0), s.bgvideo && tpGS.gsap.set(e.find("video, iframe"), {
					opacity: 0
				})
			}
		}
	});
	var r = function (e, t, i) {
			e.addEventListener ? e.addEventListener(t, i, {
				capture: !1,
				passive: !0
			}) : e.attachEvent(t, i, {
				capture: !1,
				passive: !0
			})
		},
		o = function (e, t, i) {
			var a = {};
			return a.video = e, a.type = t, a.settings = i, a
		},
		s = function (e, i) {
			var a = t[e].videos[i[0].id];
			(a.bgvideo || a.fcover) && (a.fcover && i.removeClass("rs-fsv").addClass("coverscreenvideo"), (void 0 === a.ratio || a.ratio.split(":").length <= 1) && (a.ratio = "16:9"), t.prepareCoveredVideo(e))
		},
		n = function (e, t) {
			var i = e.vimeoplayer;
			i.getPaused().then(function (a) {
				e.volumetoken = !0;
				var r = !a,
					o = i.setVolume(t);
				void 0 !== o && o.then(function (t) {
					i.getPaused().then(function (t) {
						r === t && (e.volume = "mute", e.volumetoken = !0, i.setVolume(0), i.play())
					}).catch(function (e) {
						console.log("Get Paused Function Failed for Vimeo Volume Changes Inside the Promise")
					})
				}).catch(function (t) {
					r && (e.volume = "mute", e.volumetoken = !0, i.setVolume(0), i.play())
				})
			}).catch(function () {
				console.log("Get Paused Function Failed for Vimeo Volume Changes")
			})
		},
		l = function (e, t) {
			var i = e.player.getPlayerState();
			"mute" === t ? e.player.mute() : (e.player.unMute(), e.player.setVolume(t)), setTimeout(function () {
				1 === i && 1 !== e.player.getPlayerState() && (e.player.mute(), e.player.playVideo())
			}, 39)
		},
		d = function (e) {
			var t = e.play();
			void 0 !== t && t.then(function (e) {}).catch(function (t) {
				e.pause()
			})
		},
		c = function (e) {
			var t = e.play();
			void 0 !== t && t.then(function (e) {}).catch(function (t) {
				e.volumetoken = !0, e.setVolume(0), e.play()
			})
		},
		p = function (e) {
			e.player.playVideo(), setTimeout(function () {
				1 !== e.player.getPlayerState() && 3 !== e.player.getPlayerState() && (e.volume = "mute", e.player.mute(), e.player.playVideo())
			}, 39)
		},
		g = function (e, i, a) {
			e.vimeostarted = !0, e.nextslidecalled = !1;
			var r = i.find("rs-poster");
			e.ifr = i.find("iframe"), void 0 !== r && r.length > 0 ? (tpGS.gsap.to(r, .3, {
				opacity: 0,
				visibility: "hidden",
				force3D: "auto",
				ease: "power3.inOut"
			}), void 0 !== e.ifr && e.ifr.length > 0 && tpGS.gsap.to(e.ifr, .3, {
				opacity: 1,
				display: "block",
				ease: "power3.inOut"
			})) : void 0 !== e.ifr && e.ifr.length > 0 && tpGS.gsap.to(e.ifr, .001, {
				opacity: 1,
				display: "block",
				ease: "power3.out"
			}), t[a].c.trigger("revolution.slide.onvideoplay", o(e.vimeoplayer, "vimeo", e)), t[a].stopByVideo = e.pausetimer, y(i, a), "mute" == e.volume || 0 === e.volume || t.lastToggleState(i.data("videomutetoggledby")) || !0 === t[a].globalmute ? (e.volumetoken = !0, e.vimeoplayer.setVolume(0)) : n(e, parseInt(e.volcache, 0) / 100 || .75), t.toggleState(e.videotoggledby)
		},
		u = function (e, a, r) {
			var n = t[a].videos[e[0].id],
				d = "iframe" + Math.round(1e5 * Math.random() + 1);
			if (n.ifr = e.find("iframe"), s(a, e), n.ifr.attr("id", d), n.startvideonow = r, n.videolistenerexist) {
				if (r) switch (n.type) {
					case "youtube":
						p(n), -1 != n.ssec && n.player.seekTo(n.ssec);
						break;
					case "vimeo":
						c(n.vimeoplayer), -1 != n.ssec && n.vimeoplayer.seekTo(n.ssec)
				}
			} else switch (n.type) {
				case "youtube":
					if ("undefined" == typeof YT || void 0 === YT.Player) return t.checkVideoApis(e, a), void setTimeout(function () {
						u(e, a, r)
					}, 50);
					n.player = new YT.Player(d, {
						events: {
							onStateChange: function (i) {
								i.data == YT.PlayerState.PLAYING ? (t[a].onceVideoPlayed = !0, tpGS.gsap.to(e.find("rs-poster"), .3, {
									opacity: 0,
									visibility: "hidden",
									force3D: "auto",
									ease: "power3.inOut"
								}), tpGS.gsap.to(n.ifr, .3, {
									opacity: 1,
									display: "block",
									ease: "power3.inOut"
								}), "mute" == n.volume || 0 === n.volume || t.lastToggleState(e.data("videomutetoggledby")) || !0 === t[a].globalmute ? n.player.mute() : l(n, parseInt(n.volcache, 0) || 75), t[a].stopByVideo = !0, y(e, a), n.pausetimer ? t[a].c.trigger("stoptimer") : t[a].stopByVideo = !1, t[a].c.trigger("revolution.slide.onvideoplay", o(n.player, "youtube", n)), t.toggleState(n.videotoggledby)) : (0 == i.data && n.loop && (-1 != n.ssec && n.player.seekTo(n.ssec), p(n), t.toggleState(n.videotoggledby)), t.checkfullscreenEnabled(a) || 0 != i.data && 2 != i.data || !(n.scop && e.find("rs-poster").length > 0 || n.bgvideo && e.find(".rs-fullvideo-cover").length > 0) || (n.bgvideo ? tpGS.gsap.to(e.find(".rs-fullvideo-cover"), .1, {
									opacity: 1,
									force3D: "auto",
									ease: "power3.inOut"
								}) : tpGS.gsap.to(e.find("rs-poster"), .1, {
									opacity: 1,
									visibility: "visible",
									force3D: "auto",
									ease: "power3.inOut"
								}), tpGS.gsap.to(n.ifr, .1, {
									opacity: 0,
									ease: "power3.inOut"
								})), -1 != i.data && 3 != i.data && (t[a].stopByVideo = !1, t[a].tonpause = !1, b(e, a), t[a].c.trigger("starttimer"), t[a].c.trigger("revolution.slide.onvideostop", o(n.player, "youtube", n)), null != t[a].videoIsPlaying && t[a].videoIsPlaying.attr("id") != e.attr("id") || t.unToggleState(n.videotoggledby)), 0 == i.data && n.nse ? (m(), n.nseTriggered = !0, t[a].c.revnext(), b(e, a)) : (b(e, a), t[a].stopByVideo = !1, 3 !== i.data && (-1 != n.lasteventdata && 3 != n.lasteventdata && void 0 !== n.lasteventdata || -1 != i.data && 3 != i.data) && t[a].c.trigger("starttimer"), t[a].c.trigger("revolution.slide.onvideostop", o(n.player, "youtube", n)), null != t[a].videoIsPlaying && t[a].videoIsPlaying.attr("id") != e.attr("id") || t.unToggleState(n.videotoggledby))), n.lasteventdata = i.data
							},
							onReady: function (a) {
								var r, o = t.is_mobile(),
									s = e.hasClass("rs-layer-video");
								!o && (!t.isSafari11() || o && s) || "RS-BGVIDEO" !== e[0].tagName && (!s || !0 !== n.aplay && "true" !== n.aplay) || (r = !0, n.player.setVolume(0), n.volume = "mute", n.player.mute(), clearTimeout(e.data("mobilevideotimr")), 2 !== n.player.getPlayerState() && -1 !== n.player.getPlayerState() || e.data("mobilevideotimr", setTimeout(function () {
									p(n)
								}, 500))), r || "mute" != n.volume || (n.player.setVolume(0), n.player.mute()), e.addClass("rs-apiready"), null == n.speed && 1 === n.speed || a.target.setPlaybackRate(parseFloat(n.speed)), e.find("rs-poster").unbind("click"), e.find("rs-poster").on("click", function () {
									i || p(n)
								}), n.startvideonow && (p(n), -1 != n.ssec && n.player.seekTo(n.ssec)), n.videolistenerexist = !0
							}
						}
					});
					break;
				case "vimeo":
					if ("undefined" == typeof Vimeo || void 0 === Vimeo.Player) return t.checkVideoApis(e, a), void setTimeout(function () {
						u(e, a, r)
					}, 50);
					for (var h, f = n.ifr.attr("src"), v = {}, w = f, _ = /([^&=]+)=([^&]*)/g; h = _.exec(w);) v[decodeURIComponent(h[1])] = decodeURIComponent(h[2]);
					f = (f = null != v.player_id ? f.replace(v.player_id, d) : f + "&player_id=" + d).replace(/&api=0|&api=1/g, "");
					var x, k = t.is_mobile() || t.isSafari11(),
						S = "RS-BGVIDEO" === e[0].tagName;
					if (k && S && (f += "&background=1"), n.ifr.attr("src", f), n.vimeoplayer = void 0 === n.vimeoplayer || !1 === n.vimeoplayer ? new Vimeo.Player(d) : n.vimeoplayer, k) S ? x = !0 : (n.aplay || "true" === n.aplay) && (x = !0), x && (n.volumetoken = !0, n.vimeoplayer.setVolume(0), n.volume = "mute");
					n.vimeoplayer.on("play", function (i) {
						n.vimeostarted || g(n, e, a), t[a].onceVideoPlayed = !0
					}), n.vimeoplayer.on("loaded", function (t) {
						var i = {};
						n.vimeoplayer.getVideoWidth().then(function (t) {
							i.width = t, void 0 !== i.width && void 0 !== i.height && (n.ratio = i.width + ":" + i.height, n.vimeoplayerloaded = !0, s(a, e))
						}), n.vimeoplayer.getVideoHeight().then(function (t) {
							i.height = t, void 0 !== i.width && void 0 !== i.height && (n.ratio = i.width + ":" + i.height, n.vimeoplayerloaded = !0, s(a, e))
						}), n.startvideonow && ("mute" === n.volume && (n.volumetoken = !0, n.vimeoplayer.setVolume(0)), c(n.vimeoplayer), -1 != n.ssec && n.vimeoplayer.setCurrentTime(n.ssec))
					}), e.addClass("rs-apiready"), n.vimeoplayer.on("volumechange", function (e) {
						n.volumetoken && (n.volume = e.volume), n.volumetoken = !1
					}), n.vimeoplayer.on("timeupdate", function (i) {
						n.vimeostarted || 0 === i.percent || void 0 !== t[a].activeRSSlide && n.slideid !== t.gA(t[a].slides[t[a].activeRSSlide], "key") || g(n, e, a), n.pausetimer && "playing" == t[a].sliderstatus && (t[a].stopByVideo = !0, t[a].c.trigger("stoptimer")), n.currenttime = i.seconds, 0 != n.esec && -1 !== n.esec && n.esec < i.seconds && !0 !== n.nextslidecalled && (n.loop ? (c(n.vimeoplayer), n.vimeoplayer.setCurrentTime(-1 !== n.ssec ? n.ssec : 0)) : (n.nse && (n.nseTriggered = !0, n.nextslidecalled = !0, t[a].c.revnext()), n.vimeoplayer.pause()))
					}), n.vimeoplayer.on("ended", function (i) {
						n.vimeostarted = !1, b(e, a), t[a].stopByVideo = !1, t[a].c.trigger("starttimer"), t[a].c.trigger("revolution.slide.onvideostop", o(n.vimeoplayer, "vimeo", n)), n.nse && (n.nseTriggered = !0, t[a].c.revnext()), null != t[a].videoIsPlaying && t[a].videoIsPlaying.attr("id") != e.attr("id") || t.unToggleState(n.videotoggledby)
					}), n.vimeoplayer.on("pause", function (i) {
						n.vimeostarted = !1, (n.scop && e.find("rs-poster").length > 0 || n.bgvideo && e.find(".rs-fullvideo-cover").length > 0) && (n.bgvideo ? tpGS.gsap.to(e.find(".rs-fullvideo-cover"), .1, {
							opacity: 1,
							force3D: "auto",
							ease: "power3.inOut"
						}) : tpGS.gsap.to(e.find("rs-poster"), .1, {
							opacity: 1,
							visibility: "visible",
							force3D: "auto",
							ease: "power3.inOut"
						}), tpGS.gsap.to(e.find("iframe"), .1, {
							opacity: 0,
							ease: "power3.inOut"
						})), t[a].stopByVideo = !1, t[a].tonpause = !1, b(e, a), t[a].c.trigger("starttimer"), t[a].c.trigger("revolution.slide.onvideostop", o(n.vimeoplayer, "vimeo", n)), null != t[a].videoIsPlaying && t[a].videoIsPlaying.attr("id") != e.attr("id") || t.unToggleState(n.videotoggledby)
					}), e.find("rs-poster").unbind("click"), e.find("rs-poster").on("click", function () {
						if (!i) return c(n.vimeoplayer), !1
					}), n.videolistenerexist = !0
			}
		},
		m = function () {
			document.exitFullscreen && document.fullscreen ? document.exitFullscreen() : document.mozCancelFullScreen && document.mozFullScreen ? document.mozCancelFullScreen() : document.webkitExitFullscreen && document.webkitIsFullScreen && document.webkitExitFullscreen()
		};
	t.checkfullscreenEnabled = function (e) {
		if (void 0 !== window.fullScreen) return window.fullScreen;
		if (void 0 !== document.fullscreen) return document.fullscreen;
		if (void 0 !== document.mozFullScreen) return document.mozFullScreen;
		if (void 0 !== document.webkitIsFullScreen) return document.webkitIsFullScreen;
		var i = t.isWebkit() && /Apple Computer/.test(navigator.vendor) ? 42 : 5;
		return screen.width == t.winW && Math.abs(screen.height - t.getWinH(e)) < i
	};
	var h = function (e, a, s) {
			var n = t[a].videos[e[0].id];
			if (i && n.notonmobile) return !1;
			n.metaloaded = !0, n.controls && !n.audio || (0 != e.find(".tp-video-play-button").length || i || e.append('<div class="tp-video-play-button"><i class="revicon-right-dir"></i><span class="tp-revstop">&nbsp;</span></div>'), e.find("video, rs-poster, .tp-video-play-button").on("click", function () {
				e.hasClass("videoisplaying") ? n.video.pause() : n.video.play()
			})), (n.fcover || e.hasClass("rs-fsv") || n.bgvideo) && (n.fcover || n.bgvideo ? (n.html5vid.addClass("fullcoveredvideo"), void 0 !== n.ratio && 1 != n.ratio.split(":").length || (n.ratio = "16:9"), t.prepareCoveredVideo(a)) : n.html5vid.addClass("rs-fsv")), r(n.video, "canplaythrough", function () {
				t.preLoadAudioDone(e, a, "canplaythrough")
			}), r(n.video, "canplay", function () {
				t.preLoadAudioDone(e, a, "canplay")
			}), r(n.video, "progress", function () {
				t.preLoadAudioDone(e, a, "progress")
			}), r(n.video, "timeupdate", function (i) {
				void 0 !== e && void 0 !== e[0] && !0 !== n.VideoIsVisible && !0 !== n.justReseted && (t.getByTag(e[0], "rs-poster").length > 0 ? (tpGS.gsap.to(t.getByTag(e[0], "rs-poster"), .3, {
					autoAlpha: 0,
					force3D: "auto",
					ease: "power3.inOut"
				}), e.find(n.tag).length > 0 && tpGS.gsap.to(e.find(n.tag), .001, {
					opacity: 1,
					display: "block",
					ease: "power3.inOut"
				})) : e.find(n.tag).length > 0 && tpGS.gsap.to(e.find(n.tag), .001, {
					opacity: 1,
					display: "block",
					ease: "power3.out"
				}), n.VideoIsVisible = !0, clearTimeout(n.showCoverSoon)), n.justReseted && 1 != t.checkfullscreenEnabled(a) && e.find("rs-poster").length > 0 && (n.showCoverSoon = setTimeout(function () {
					n.seeking || (tpGS.gsap.to(e.find("rs-poster"), .001, {
						autoAlpha: 1,
						force3D: "auto",
						ease: "power3.inOut"
					}), tpGS.gsap.to(e.find(n.tag), 1e-4, {
						opacity: 0,
						ease: "power3.inOut"
					})), n.VideoIsVisible = !1
				}, 500)), n.justReseted = !1, -1 === n.esec && n.loop && 1 == window.isSafari11 && (n.esec = n.video.duration - .075), void 0 !== n.lastCurrentTime ? n.fps = n.video.currentTime - n.lastCurrentTime : n.fps = .1, n.lastCurrentTime = n.video.currentTime, 0 != n.esec && -1 != n.esec && n.esec < n.video.currentTime && !n.nextslidecalled && (n.loop ? (n.video.play(), n.video.currentTime = -1 === n.ssec ? .5 : n.ssec) : (n.nse && (n.nseTriggered = !0, n.nextslidecalled = !0, t[a].jcnah = !0, t[a].c.revnext(), setTimeout(function () {
					t[a].jcnah = !1
				}, 1e3)), n.video.pause()))
			}), r(n.video, "play", function () {
				t[a].onceVideoPlayed = !0, n.nextslidecalled = !1, n.volume = null != n.volume && "mute" != n.volume ? parseFloat(n.volcache) : n.volume, n.volcache = null != n.volcache && "mute" != n.volcache ? parseFloat(n.volcache) : n.volcache, t.is_mobile() || t.isSafari11() || (!0 === t[a].globalmute ? n.video.muted = !0 : n.video.muted = "mute" == n.volume, n.volcache = t.isNumeric(n.volcache) && n.volcache > 1 ? n.volcache / 100 : n.volcache, "mute" == n.volume ? n.video.muted = !0 : null != n.volcache && (n.video.volume = n.volcache)), e.addClass("videoisplaying"), y(e, a), clearTimeout(n.showCoverSoon), !0 !== n.pausetimer || "audio" == n.tag ? (t[a].stopByVideo = !1, t[a].c.trigger("revolution.slide.onvideostop", o(n.video, "html5", n))) : (t[a].stopByVideo = !0, t[a].c.trigger("revolution.slide.onvideoplay", o(n.video, "html5", n))), n.pausetimer && "playing" == t[a].sliderstatus && (t[a].stopByVideo = !0, t[a].c.trigger("stoptimer")), t.toggleState(n.videotoggledby)
			}), r(n.video, "seeked", function () {
				n.seeking = !1
			}), r(n.video, "seeking", function () {
				n.seeking = !0
			}), r(n.video, "pause", function (i) {
				!t.checkfullscreenEnabled(a) && e.find("rs-poster").length > 0 && n.scop && (n.showCoverSoon = setTimeout(function () {
					n.seeking || (tpGS.gsap.to(e.find("rs-poster"), .001, {
						opacity: 1,
						visibility: "visible",
						force3D: "auto",
						ease: "power3.inOut"
					}), tpGS.gsap.to(e.find(n.tag), 1e-4, {
						opacity: 0,
						ease: "power3.inOut"
					}))
				}, 500), n.VideoIsVisible = !1), e.removeClass("videoisplaying"), t[a].stopByVideo = !1, b(e, a), "audio" != n.tag && t[a].c.trigger("starttimer"), t[a].c.trigger("revolution.slide.onvideostop", o(n.video, "html5", n)), null != t[a].videoIsPlaying && t[a].videoIsPlaying.attr("id") != e.attr("id") || t.unToggleState(n.videotoggledby)
			}), r(n.video, "ended", function () {
				m(), b(e, a), t[a].stopByVideo = !1, b(e, a), "audio" != n.tag && t[a].c.trigger("starttimer"), t[a].c.trigger("revolution.slide.onvideostop", o(n.video, "html5", e.data())), n.nse && n.video.currentTime > 0 && (1 == !t[a].jcnah && (n.nseTriggered = !0, t[a].c.revnext(), t[a].jcnah = !0), setTimeout(function () {
					t[a].jcnah = !1
				}, 1500)), e.removeClass("videoisplaying"), !0 !== t[a].inviewport && void 0 !== t[a].inviewport || (t[a].lastplayedvideos = [])
			})
		},
		f = function (e) {
			return "t" === e || !0 === e || "true" === e || "f" !== e && !1 !== e && "false" !== e && e
		},
		v = function (e, t, i) {
			e.audio = "audio" === t;
			var r = void 0 === e.video ? [] : e.video.split(";"),
				o = {
					volume: e.audio ? 1 : "mute",
					pload: "auto",
					ratio: "16:9",
					loop: !0,
					aplay: "true",
					fcover: 1 === e.bgvideo,
					afs: !0,
					controls: !1,
					nse: !0,
					npom: !1,
					opom: !1,
					inline: !0,
					notonmobile: !1,
					start: -1,
					end: -1,
					doverlay: "none",
					scop: !1,
					rwd: !0,
					speed: 1,
					ploadwait: 5,
					stopAV: 1 !== e.bgvideo,
					noInt: !1,
					volcache: 75
				};
			for (var s in r)
				if (r.hasOwnProperty(s)) {
					var n = r[s].split(":");
					switch (n[0]) {
						case "v":
							o.volume = n[1];
							break;
						case "vd":
							o.volcache = n[1];
							break;
						case "p":
							o.pload = n[1];
							break;
						case "ar":
							o.ratio = n[1] + (void 0 !== n[2] ? ":" + n[2] : "");
							break;
						case "ap":
							o.aplay = f(n[1]);
							break;
						case "fc":
							o.fcover = f(n[1]);
							break;
						case "afs":
							o.afs = f(n[1]);
							break;
						case "vc":
							o.controls = n[1];
							break;
						case "nse":
							o.nse = f(n[1]);
							break;
						case "npom":
							o.npom = f(n[1]);
							break;
						case "opom":
							o.opom = f(n[1]);
							break;
						case "t":
							o.vtype = n[1];
							break;
						case "inl":
							o.inline = f(n[1]);
							break;
						case "nomo":
							o.notonmobile = f(n[1]);
							break;
						case "sta":
							o.start = n[1] + (void 0 !== n[2] ? ":" + n[2] : "");
							break;
						case "end":
							o.end = n[1] + (void 0 !== n[2] ? ":" + n[2] : "");
							break;
						case "do":
							o.doverlay = n[1];
							break;
						case "scop":
							o.scop = f(n[1]);
							break;
						case "rwd":
							o.rwd = f(n[1]);
							break;
						case "sp":
							o.speed = n[1];
							break;
						case "vw":
							o.ploadwait = parseInt(n[1], 0) || 5;
							break;
						case "sav":
							o.stopAV = f(n[1]);
							break;
						case "noint":
							o.noInt = f(n[1]);
							break;
						case "l":
							o.loopcache = n[1], o.loop = "loop" === n[1] || "loopandnoslidestop" === n[1] || "none" !== n[1] && f(n[1]);
							break;
						case "ptimer":
							o.pausetimer = f(n[1]);
							break;
						case "sat":
							o.waitToSlideTrans = f(n[1])
					}
				}
			return void 0 !== e.bgvideo && (o.bgvideo = e.bgvideo), void 0 === e.bgvideo || !1 !== o.fcover && "false" !== o.fcover || (o.doverlay = "none"), o.noInt && (o.controls = !1), void 0 !== e.mp4 && (o.mp4 = e.mp4), void 0 !== e.videomp4 && (o.mp4 = e.videomp4), void 0 !== e.ytid && (o.ytid = e.ytid), void 0 !== e.ogv && (o.ogv = e.ogv), void 0 !== e.webm && (o.webm = e.webm), void 0 !== e.vimeoid && (o.vimeoid = e.vimeoid), void 0 !== e.vatr && (o.vatr = e.vatr), void 0 !== e.videoattributes && (o.vatr = e.videoattributes), void 0 !== e.poster && (o.poster = e.poster), o.slideid = i, o.aplay = "true" === o.aplay || o.aplay, 1 === o.bgvideo && (o.volume = "mute"), o.ssec = a(o.start), o.esec = a(o.end), o.pausetimer = void 0 === o.pausetimer ? "loopandnoslidestop" !== o.loopcache : o.pausetimer, o.inColumn = e._incolumn, o.audio = e.audio, !0 !== o.loop && "true" !== o.loop || !0 !== o.nse && "true" !== o.nse || (o.loop = !1), o
		},
		y = function (e, i) {
			if (t[i].playingvideos = void 0 === t[i].playingvideos ? new Array : t[i].playingvideos, t[i].videos[e[0].id].stopAV && void 0 !== t[i].playingvideos && t[i].playingvideos.length > 0)
				for (var a in t[i].lastplayedvideos = jQuery.extend(!0, [], t[i].playingvideos), t[i].playingvideos) t[i].playingvideos.hasOwnProperty(a) && t.stopVideo(t[i].playingvideos[a], i);
			t[i].playingvideos.push(e), t[i].videoIsPlaying = e
		},
		b = function (e, i) {
			void 0 !== t[i] && void 0 !== t[i] && null != t[i].playingvideos && jQuery.inArray(e, t[i].playingvideos) >= 0 && t[i].playingvideos.splice(jQuery.inArray(e, t[i].playingvideos), 1)
		}
}(jQuery);









































