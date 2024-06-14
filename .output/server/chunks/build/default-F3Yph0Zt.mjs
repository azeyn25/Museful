import { useSSRContext, resolveComponent, mergeProps } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrRenderClass, ssrInterpolate } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';
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

const _sfc_main$3 = {
  name: "BaseNavbar",
  data() {
    return {
      open: false,
      dropdownNavbar: false
    };
  },
  methods: {
    dropdownToggler() {
      this.dropdownNavbar = !this.dropdownNavbar;
    }
  }
};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_SegmentIcon = resolveComponent("SegmentIcon");
  const _component_CloseIcon = resolveComponent("CloseIcon");
  _push(`<nav${ssrRenderAttrs(mergeProps({
    id: "navbar",
    class: "relative z-10 w-full text-neutral-800"
  }, _attrs))}><div class="flex flex-col max-w-screen-xl px-8 mx-auto lg:items-center lg:justify-between lg:flex-row py-4"><div class="flex flex-col lg:flex-row items-center space-x-4 xl:space-x-8"><div class="w-full flex flex-row items-center justify-between py-6"><div><img${ssrRenderAttr("src", require("~/assets/img/logo/Museful.png"))} class="mx-auto h-30 w-30 xl:w-28" alt="Museye Logo"></div><button class="rounded-lg lg:hidden focus:outline-none focus:shadow-outline">`);
  if (!$data.open) {
    _push(ssrRenderComponent(_component_SegmentIcon, { size: 24 }, null, _parent));
  } else {
    _push(ssrRenderComponent(_component_CloseIcon, { size: 24 }, null, _parent));
  }
  _push(`</button></div><ul class="${ssrRenderClass([[$data.open ? "flex" : "hidden lg:flex"], "w-full h-auto flex flex-col flex-grow lg:items-center pb-4 lg:pb-0 lg:justify-end lg:flex-row origin-top duration-300 xl:space-x-2 space-y-3 lg:space-y-0"])}"></ul></div><div class="${ssrRenderClass([[$data.open ? "flex" : "hidden lg:flex"], "space-x-3"])}"></div></div></nav>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/base/Navbar.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_0$1 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$3]]);
const _sfc_main$2 = {
  props: {
    name: {
      type: String,
      required: true
    },
    url: {
      type: String,
      required: true
    }
  }
};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<li${ssrRenderAttrs(mergeProps({ class: "w-full" }, _attrs))}><a class="md:px-4 py-2 text-sm bg-transparent rounded-lg text-[#666666] hover:text-gray-900 focus:outline-none focus:shadow-outline"${ssrRenderAttr("href", $props.url)}>${ssrInterpolate($props.name)}</a></li>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/NavLink.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$2]]);
const _sfc_main$1 = {
  name: "BaseFooter"
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_NavLink = __nuxt_component_0;
  _push(`<footer${ssrRenderAttrs(mergeProps({ class: "max-w-screen-xl px-8 mx-auto" }, _attrs))}><div class="w-full border-y border-[#DDDDDD]"><div class="grid xl:grid-cols-4 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1"><div class="md:w-full lg:w-full w-full sm:w-1/2 xl:w-fit flex flex-col sm:flex-row sm:px-6 py-6 sm:py-12 sm:space-x-10 sm:border-r-0 border-[#DDDDDD]"><ul class="space-y-4"></ul></div><div class="md:w-full lg:w-full lg:border-r w-full sm:w-1/2 xl:w-fit sm:px-16 py-6 sm:py-12 border-t sm:border-t xl:border-r border-[#DDDDDD]"></div><div class="md:w-full md:border-t lg:w-full w-full sm:w-1/2 xl:w-fit sm:px-16 py-6 sm:py-12 border-t sm:border-t-0 sm:border-r-0 border-[#DDDDDD]"><ul class="space-y-4">`);
  _push(ssrRenderComponent(_component_NavLink, {
    name: "Contact Us",
    url: "https://docs.google.com/forms/d/e/1FAIpQLSfxLB0IGPnvEW6sIoKJiYomXEfPkOtoAzRJo8WIJpKqmYOgOA/viewform?usp=sf_link"
  }, null, _parent));
  _push(ssrRenderComponent(_component_NavLink, {
    name: "Linkedin",
    url: "https://www.linkedin.com/company/museful/"
  }, null, _parent));
  _push(ssrRenderComponent(_component_NavLink, {
    name: "Instagram",
    url: "https://www.instagram.com/museful.ai/"
  }, null, _parent));
  _push(`</ul></div></div></div><div class="py-8 sm:py-4 text-center text-sm text-[#666666] hover:text-gray-900"> \xA9 Copyright 2023 Museful. All rights reserved </div></footer>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/base/Footer.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main = {
  name: "DefaultLayout"
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_BaseNavbar = __nuxt_component_0$1;
  const _component_Nuxt = resolveComponent("Nuxt");
  const _component_BaseFooter = __nuxt_component_1;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen font-sans antialiased relative" }, _attrs))}><div class="relative"><div class="absolute top-0 left-0 w-full h-[125vh] sm:h-[225vh] lg:h-[125vh] cover-gradient-2 sm:cover-gradient"></div>`);
  _push(ssrRenderComponent(_component_BaseNavbar, null, null, _parent));
  _push(`<main class="text-neutral-800">`);
  _push(ssrRenderComponent(_component_Nuxt, null, null, _parent));
  _push(`</main>`);
  _push(ssrRenderComponent(_component_BaseFooter, null, null, _parent));
  _push(`</div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _default = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { _default as default };
//# sourceMappingURL=default-F3Yph0Zt.mjs.map
