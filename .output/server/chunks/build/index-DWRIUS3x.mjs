import { useSSRContext, mergeProps, withCtx, createVNode, createTextVNode, resolveComponent } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrRenderList, ssrRenderSlot, ssrInterpolate } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';
import AOS from 'aos';
import '../runtime.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-router';

const _sfc_main$5 = {
  name: "BaseSection"
};
function _sfc_ssrRender$5(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "relative max-w-screen-xl px-4 sm:px-8 mx-auto grid grid-cols-12 gap-x-6 overflow-hidden" }, _ctx.$attrs, _attrs))}>`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</div>`);
}
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/base/Section.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["ssrRender", _sfc_ssrRender$5]]);
const _sfc_main$4 = {
  name: "BaseButton",
  inheritAttrs: false
};
function _sfc_ssrRender$4(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<button${ssrRenderAttrs(mergeProps({ class: "text-sm text-center rounded-full hover:shadow-md hover:shadow-[#0c66ee]/50 transition duration-300" }, _ctx.$attrs, _attrs))}>`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</button>`);
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/base/Button.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender$4]]);
const _sfc_main$3 = {
  props: {
    img: {
      type: String,
      default: ""
    }
  }
};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><img${ssrRenderAttr("src", require(`~/assets/img/partner/${$props.img}`))} class="sm:w-1/2 lg:w-72 mx-auto" alt=""></div>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/landing/PartnerImage.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$3]]);
const _sfc_main$2 = {
  name: "LandingListItem",
  props: {
    title: {
      type: String,
      default: ""
    }
  }
};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_CheckCircleIcon = resolveComponent("CheckCircleIcon");
  _push(`<li${ssrRenderAttrs(mergeProps({ class: "space-y-2" }, _attrs))}><div class="flex items-center space-x-2">`);
  _push(ssrRenderComponent(_component_CheckCircleIcon, {
    size: 20,
    class: "text-[#0c66ee]"
  }, null, _parent));
  _push(`<span>${ssrInterpolate($props.title)}</span></div>`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</li>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/landing/ListItem.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$2]]);
const _sfc_main$1 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "col-span-12 lg:col-span-6" }, _ctx.$attrs, _attrs))}><div class="w-full sm:mt-20 xl:mt-0"><img${ssrRenderAttr("src", require("~/assets/img/Museums4.png"))} class="w-full" alt=""></div></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/landing/TradingToolImage.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_4 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const aosMixin = {
  mounted() {
    AOS.init({ disable: "phone" });
  }
};
const _sfc_main = {
  name: "IndexPage",
  mixins: [aosMixin],
  data() {
    return {
      selected: 0,
      dropdownConcurency: false,
      dropdownCrypto: false,
      currencySelected: {
        img: "country-icon/eng.png",
        name: "USD"
      },
      // currencies: [
      //   {
      //     img: 'country-icon/eng.png',
      //     name: 'USD',
      //   },
      // ],
      // cryptoSelected: {
      //   img: 'crypto-icon/bitcoin.png',
      //   name: 'BTC',
      // },
      // cryptocurrencies: [
      //   {
      //     img: 'crypto-icon/bitcoin.png',
      //     name: 'BTC',
      //   },
      // ],
      // trendings: [
      //   {
      //     id: 1,
      //     name: 'Bitcoin',
      //     price: 43180.13,
      //     logo: 'bitcoin.png',
      //     increase: true,
      //     data: [40, 35, 60, 75, 60, 75, 50],
      //   },
      //   {
      //     id: 2,
      //     name: 'Ethereum',
      //     price: 3480.65,
      //     logo: 'ethereum.png',
      //     increase: false,
      //     data: [25, 30, 60, 50, 80, 55, 80],
      //   },
      //   {
      //     id: 3,
      //     name: 'Solana',
      //     price: 150.2,
      //     logo: 'solana.png',
      //     increase: true,
      //     data: [40, 45, 40, 80, 50, 60, 35],
      //   },
      //   {
      //     id: 4,
      //     name: 'Dogecoin',
      //     price: 0.1572,
      //     logo: 'dogecoin.png',
      //     increase: true,
      //     data: [35, 70, 60, 80, 50, 60, 40],
      //   },
      // ],
      // topGainers: [
      //   {
      //     id: 1,
      //     name: 'PAPPAY',
      //     price: 0.00374,
      //     logo: 'pappay.png',
      //     increase: true,
      //     data: [30, 50, 45, 60, 70, 40, 45],
      //   },
      //   {
      //     id: 2,
      //     name: 'Bitcoin Asia',
      //     price: 0.02096,
      //     logo: 'bitcoin-asia.png',
      //     increase: true,
      //     data: [25, 60, 50, 60, 35, 50, 70],
      //   },
      //   {
      //     id: 3,
      //     name: 'MoonRock',
      //     price: 0.004907,
      //     logo: 'moonrock.png',
      //     increase: true,
      //     data: [40, 35, 40, 25, 50, 70, 45],
      //   },
      //   {
      //     id: 4,
      //     name: 'NinjaFloki',
      //     price: 0.000123,
      //     logo: 'ninjafloki.png',
      //     increase: true,
      //     data: [45, 35, 40, 30, 25, 45, 35],
      //   },
      // ],
      // recents: [
      //   {
      //     id: 1,
      //     name: 'MetaCraft',
      //     price: 0.0608,
      //     logo: 'metacraft.png',
      //     increase: false,
      //     data: [40, 50, 45, 60, 35, 40, 45],
      //   },
      //   {
      //     id: 2,
      //     name: 'Frog',
      //     price: 0.5875,
      //     logo: 'frog.png',
      //     increase: false,
      //     data: [25, 50, 45, 48, 40, 60, 45],
      //   },
      //   {
      //     id: 3,
      //     name: 'Musk Doge',
      //     price: 0.04041,
      //     logo: 'musk-doge.png',
      //     increase: true,
      //     data: [25, 35, 60, 45, 50, 45, 45],
      //   },
      //   {
      //     id: 4,
      //     name: '2SHARE',
      //     price: 1366.24,
      //     logo: '2share.png',
      //     increase: true,
      //     data: [35, 30, 60, 50, 35, 45, 40],
      //   },
      // ],
      // accordions: [
      //   {
      //     title: 'Why should I choose NEFA?',
      //     description:
      //       "We're industry pioneers, having been in the cryptocurrency industry since 2016. We've facilitated more than 21 billion USD worth of transactions on our exchange for customers in over 40 countries. Today, we're trusted by over 8 million customers around the world and have received praise for our easy-to-use app, secure wallet, and range of features.",
      //   },
      //   {
      //     title: 'How secure is NEFA?',
      //     description:
      //       "We're industry pioneers, having been in the cryptocurrency industry since 2016. We've facilitated more than 21 billion USD worth of transactions on our exchange for customers in over 40 countries. Today, we're trusted by over million customers around the world and have received praise for our easy-to-use app, secure wallet, and range of features.",
      //   },
      //   {
      //     title: 'Do I have to buy a whole Bitcoin?',
      //     description:
      //       "We're industry pioneers, having been in the cryptocurrency industry since 2016. We've facilitated more than 21 billion USD worth of transactions on our exchange for customers in over 40 countries. Today, we're trusted by over million customers around the world and have received praise for our easy-to-use app, secure wallet, and range of features.",
      //   },
      //   {
      //     title: 'How do I actually buy Bitcoin?',
      //     description:
      //       "We're industry pioneers, having been in the cryptocurrency industry since 2016. We've facilitated more than 21 billion USD worth of transactions on our exchange for customers in over 40 countries. Today, we're trusted by over million customers around the world and have received praise for our easy-to-use app, secure wallet, and range of features.",
      //   },
      // ],
      steps: [
        {
          img: "Goga.png",
          title: "Chris Goga",
          description: "Finance Manager in AI & Robotics Startup 6+ years of consulting experience (KPMG) in finance and digital transformation"
        },
        {
          img: "Zeyn.png",
          title: "A. Zeyn Hassan",
          description: "Former anceint Egyptian historian, museum expert and an ambitious software develoepr."
        },
        {
          img: "Artur.png",
          title: "Artur Schr\xF6der",
          description: "E-Business specialist, Product Manager, and software manager"
        }
      ]
    };
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_BaseSection = __nuxt_component_0;
  const _component_BaseButton = __nuxt_component_1;
  const _component_LandingPartnerImage = __nuxt_component_2;
  const _component_LandingListItem = __nuxt_component_3;
  const _component_LandingTradingToolImage = __nuxt_component_4;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "w-full" }, _attrs))} data-v-ef28ea21><section id="hero" class="w-full pb-24" data-v-ef28ea21>`);
  _push(ssrRenderComponent(_component_BaseSection, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="col-span-12 lg:col-span-6 mt-12 xl:mt-10 space-y-4 sm:space-y-6 px-6 text-center sm:text-left" data-v-ef28ea21${_scopeId}><h1 data-aos="fade-right" data-aos-once="true" class="text-[2.5rem] sm:text-5xl xl:text-6xl font-bold leading-tight capitalize sm:pr-8 xl:pr-10" data-v-ef28ea21${_scopeId}> The World&#39;s <span class="text-header-gradient" data-v-ef28ea21${_scopeId}>First</span> AI tour guide </h1><p data-aos="fade-down" data-aos-once="true" data-aos-delay="300" class="paragraph hidden sm:block" data-v-ef28ea21${_scopeId}> Explore museums like never before! Interactive, engaging tours. Your personal guide to art, history, and culture. Join us and explore now! </p><div data-aos="fade-up" data-aos-once="true" data-aos-delay="700" class="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mt-2" data-v-ef28ea21${_scopeId}>`);
        _push2(ssrRenderComponent(_component_BaseButton, { class: "max-w-full px-8 py-4 bg-gradient-to-r from-[#468ef9] to-[#0c66ee] border border-[#0c66ee] text-white" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<form action="https://docs.google.com/forms/d/e/1FAIpQLSfxLB0IGPnvEW6sIoKJiYomXEfPkOtoAzRJo8WIJpKqmYOgOA/viewform?usp=sf_link" target="_blank" data-v-ef28ea21${_scopeId2}><input type="submit" value="Contact Us" data-v-ef28ea21${_scopeId2}></form>`);
            } else {
              return [
                createVNode("form", {
                  action: "https://docs.google.com/forms/d/e/1FAIpQLSfxLB0IGPnvEW6sIoKJiYomXEfPkOtoAzRJo8WIJpKqmYOgOA/viewform?usp=sf_link",
                  target: "_blank"
                }, [
                  createVNode("input", {
                    type: "submit",
                    value: "Contact Us"
                  })
                ])
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(`</div></div><div class="hidden sm:block col-span-12 lg:col-span-6" data-v-ef28ea21${_scopeId}><div class="w-full" data-v-ef28ea21${_scopeId}><img data-aos="fade-up" data-aos-once="true"${ssrRenderAttr("src", require("~/assets/img/museye-herogrid.png"))} class="margin-top: 0.5rem" alt="" data-v-ef28ea21${_scopeId}></div></div><img data-aos="fade-up" data-aos-delay="300"${ssrRenderAttr("src", require("~/assets/img/pattern/ellipse-2.png"))} class="hidden sm:block absolute top-4 sm:top-10 right-64 sm:right-96 xl:right-[32rem] w-6" data-v-ef28ea21${_scopeId}><img data-aos="fade-up" data-aos-delay="300"${ssrRenderAttr("src", require("~/assets/img/pattern/ellipse-3.png"))} class="hidden sm:block absolute bottom-56 right-24 w-6" data-v-ef28ea21${_scopeId}>`);
      } else {
        return [
          createVNode("div", { class: "col-span-12 lg:col-span-6 mt-12 xl:mt-10 space-y-4 sm:space-y-6 px-6 text-center sm:text-left" }, [
            createVNode("h1", {
              "data-aos": "fade-right",
              "data-aos-once": "true",
              class: "text-[2.5rem] sm:text-5xl xl:text-6xl font-bold leading-tight capitalize sm:pr-8 xl:pr-10"
            }, [
              createTextVNode(" The World's "),
              createVNode("span", { class: "text-header-gradient" }, "First"),
              createTextVNode(" AI tour guide ")
            ]),
            createVNode("p", {
              "data-aos": "fade-down",
              "data-aos-once": "true",
              "data-aos-delay": "300",
              class: "paragraph hidden sm:block"
            }, " Explore museums like never before! Interactive, engaging tours. Your personal guide to art, history, and culture. Join us and explore now! "),
            createVNode("div", {
              "data-aos": "fade-up",
              "data-aos-once": "true",
              "data-aos-delay": "700",
              class: "flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mt-2"
            }, [
              createVNode(_component_BaseButton, { class: "max-w-full px-8 py-4 bg-gradient-to-r from-[#468ef9] to-[#0c66ee] border border-[#0c66ee] text-white" }, {
                default: withCtx(() => [
                  createVNode("form", {
                    action: "https://docs.google.com/forms/d/e/1FAIpQLSfxLB0IGPnvEW6sIoKJiYomXEfPkOtoAzRJo8WIJpKqmYOgOA/viewform?usp=sf_link",
                    target: "_blank"
                  }, [
                    createVNode("input", {
                      type: "submit",
                      value: "Contact Us"
                    })
                  ])
                ]),
                _: 1
              })
            ])
          ]),
          createVNode("div", { class: "hidden sm:block col-span-12 lg:col-span-6" }, [
            createVNode("div", { class: "w-full" }, [
              createVNode("img", {
                "data-aos": "fade-up",
                "data-aos-once": "true",
                src: require("~/assets/img/museye-herogrid.png"),
                class: "margin-top: 0.5rem",
                alt: ""
              }, null, 8, ["src"])
            ])
          ]),
          createVNode("img", {
            "data-aos": "fade-up",
            "data-aos-delay": "300",
            src: require("~/assets/img/pattern/ellipse-2.png"),
            class: "hidden sm:block absolute top-4 sm:top-10 right-64 sm:right-96 xl:right-[32rem] w-6"
          }, null, 8, ["src"]),
          createVNode("img", {
            "data-aos": "fade-up",
            "data-aos-delay": "300",
            src: require("~/assets/img/pattern/ellipse-3.png"),
            class: "hidden sm:block absolute bottom-56 right-24 w-6"
          }, null, 8, ["src"])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</section><section class="bg-partner relative max-w-full sm:mx-6 my-24 shadow sm:rounded-2xl overflow-hidden" data-v-ef28ea21><div class="w-full px-6 sm:px-0 py-16 flex flex-col items-center justify-center space-y-4 text-center" data-v-ef28ea21><h3 data-aos="flip-down" class="text-2xl text-neutral-800 font-semibold" data-v-ef28ea21>Trusted Partners </h3><p data-aos="flip-down" class="paragraph" data-v-ef28ea21>We&#39;re partners with countless major organisations</p><div data-aos="fade-up" class="flex flex-wrap items-center justify-center" data-v-ef28ea21><!--[-->`);
  ssrRenderList(["BPL.png", "btulogo.png", "microsoft.png"], (img) => {
    _push(ssrRenderComponent(_component_LandingPartnerImage, {
      key: img,
      img
    }, null, _parent));
  });
  _push(`<!--]--></div></div></section><section class="w-full my-36" data-v-ef28ea21>`);
  _push(ssrRenderComponent(_component_BaseSection, { "data-aos": "fade-down" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="col-span-14 lg:col-span-7" data-v-ef28ea21${_scopeId}><div class="w-full" data-v-ef28ea21${_scopeId}><img${ssrRenderAttr("src", require("~/assets/img/Museyeintro.png"))} class="w-[95%]" alt="" data-v-ef28ea21${_scopeId}></div></div><div class="col-span-12 lg:col-span-5 space-y-6 px-4 sm:px-6 mt-20" data-v-ef28ea21${_scopeId}><h2 id="aiintro" class="text-4xl font-semibold" data-v-ef28ea21${_scopeId}> Introducing <span class="text-header-gradient" data-v-ef28ea21${_scopeId}>Museful</span> AI tour guide </h2><p class="paragraph" data-v-ef28ea21${_scopeId}>The most useful app for museums exploration!</p><ul class="space-y-4 sm:space-y-2" data-v-ef28ea21${_scopeId}>`);
        _push2(ssrRenderComponent(_component_LandingListItem, { title: "explore new dimensions inside of museums " }, null, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_LandingListItem, { title: "Keep track of your museums visits and save your memories!" }, null, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_LandingListItem, { title: "Personalised experience to each and every users!" }, null, _parent2, _scopeId));
        _push2(`</ul>`);
        _push2(ssrRenderComponent(_component_BaseButton, { class: "w-full sm:max-w-[240px] px-10 py-4 bg-inherit text-gradient border border-[#0c66ee] text-base" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<form action="https://docs.google.com/forms/d/e/1FAIpQLSfHjCpWTOVkssY6buB7FbkBZ97BE1ngYVuXUcjW9bqDI4wKGg/viewform?usp=sf_link" target="_blank" data-v-ef28ea21${_scopeId2}><input type="submit" value="Join our waiting list" data-v-ef28ea21${_scopeId2}></form>`);
            } else {
              return [
                createVNode("form", {
                  action: "https://docs.google.com/forms/d/e/1FAIpQLSfHjCpWTOVkssY6buB7FbkBZ97BE1ngYVuXUcjW9bqDI4wKGg/viewform?usp=sf_link",
                  target: "_blank"
                }, [
                  createVNode("input", {
                    type: "submit",
                    value: "Join our waiting list"
                  })
                ])
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(`</div>`);
      } else {
        return [
          createVNode("div", { class: "col-span-14 lg:col-span-7" }, [
            createVNode("div", { class: "w-full" }, [
              createVNode("img", {
                src: require("~/assets/img/Museyeintro.png"),
                class: "w-[95%]",
                alt: ""
              }, null, 8, ["src"])
            ])
          ]),
          createVNode("div", { class: "col-span-12 lg:col-span-5 space-y-6 px-4 sm:px-6 mt-20" }, [
            createVNode("h2", {
              id: "aiintro",
              class: "text-4xl font-semibold"
            }, [
              createTextVNode(" Introducing "),
              createVNode("span", { class: "text-header-gradient" }, "Museful"),
              createTextVNode(" AI tour guide ")
            ]),
            createVNode("p", { class: "paragraph" }, "The most useful app for museums exploration!"),
            createVNode("ul", { class: "space-y-4 sm:space-y-2" }, [
              createVNode(_component_LandingListItem, { title: "explore new dimensions inside of museums " }),
              createVNode(_component_LandingListItem, { title: "Keep track of your museums visits and save your memories!" }),
              createVNode(_component_LandingListItem, { title: "Personalised experience to each and every users!" })
            ]),
            createVNode(_component_BaseButton, { class: "w-full sm:max-w-[240px] px-10 py-4 bg-inherit text-gradient border border-[#0c66ee] text-base" }, {
              default: withCtx(() => [
                createVNode("form", {
                  action: "https://docs.google.com/forms/d/e/1FAIpQLSfHjCpWTOVkssY6buB7FbkBZ97BE1ngYVuXUcjW9bqDI4wKGg/viewform?usp=sf_link",
                  target: "_blank"
                }, [
                  createVNode("input", {
                    type: "submit",
                    value: "Join our waiting list"
                  })
                ])
              ]),
              _: 1
            })
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</section><section class="bg-trading-tools relative max-w-full sm:mx-4 my-20 py-16 shadow rounded-2xl overflow-hidden" data-v-ef28ea21><div class="relative max-w-screen-xl px-4 sm:px-2 mx-auto grid grid-cols-12 gap-x-6" data-v-ef28ea21>`);
  _push(ssrRenderComponent(_component_LandingTradingToolImage, { class: "sm:hidden" }, null, _parent));
  _push(`<div data-aos="fade-right" class="col-span-12 lg:col-span-6 space-y-8 sm:space-y-6 px-4 sm:px-6 mt-8" data-v-ef28ea21><h2 class="text-4xl font-semibold" data-v-ef28ea21>Museums Education <span class="text-header-gradient" data-v-ef28ea21>4.0</span></h2><div class="space-y-2" data-v-ef28ea21><h4 class="text-lg font-medium" data-v-ef28ea21>Your Personal Tour Guide in your Pocket</h4><p class="paragraph text-sm xl:text-base" data-v-ef28ea21> Dive into the heart of creativity and history, where every museum becomes a masterpiece, every artifact a storyteller. Elevate your cultural exploration and stay connected to the pulse of history and innovation. Join us as we redefine museum education and enhance how you perceive, interact with, and cherish culture, history and art. </p></div><div class="space-y-2" data-v-ef28ea21><h4 class="text-lg font-medium" data-v-ef28ea21>Personalised experience for each and every visitor</h4><p class="paragraph text-sm xl:text-base" data-v-ef28ea21> Revolutionize your museum visit! Personalized experiences for all <strong data-v-ef28ea21>ages</strong>, <strong data-v-ef28ea21>languages</strong>, and <strong data-v-ef28ea21>level of interest</strong> using advanced AI. Make every tour unique and engaging. </p></div><div class="space-y-2" data-v-ef28ea21><h4 class="text-lg font-medium" data-v-ef28ea21>Acceessable museums for everyone!</h4><p class="paragraph text-sm xl:text-base" data-v-ef28ea21> Enhanced accessibility in museums worldwide. Tailored services for <strong data-v-ef28ea21>visitors with visual and auditory impairments</strong>. Experience art and history inclusively and effortlessly. Dedicated support ensuring a seamless and enriching visit. </p></div><div class="flex flex-col sm:flex-row" data-v-ef28ea21></div></div>`);
  _push(ssrRenderComponent(_component_LandingTradingToolImage, {
    "data-aos": "fade-left",
    class: "hidden sm:block"
  }, null, _parent));
  _push(`</div></section></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-ef28ea21"]]);

export { index as default };
//# sourceMappingURL=index-DWRIUS3x.mjs.map
