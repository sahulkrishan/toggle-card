!function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=0)}([function(t,e,n){"use strict";n.r(e);const r=customElements.get("home-assistant-main")?Object.getPrototypeOf(customElements.get("home-assistant-main")):Object.getPrototypeOf(customElements.get("hui-view")),o=r.prototype.html,i=r.prototype.css;customElements.define("toggle-card",class extends r{static get properties(){return{hass:{},config:{}}}render(){return o`
      <ha-card>
        ${this.config.entities.map(t=>{const e=this.hass.states[t];return e?o`
                <div class="state">
                  <ha-switch
                    .checked="${"on"===e.state}"
                    @change="${t=>this._toggle(e)}"
                  ></ha-switch>
                </div>
              `:o`
                <div class="not-found">Entity ${t} not found.</div>
              `})}
      </ha-card>
    `}setConfig(t){if(!t.entities)throw new Error("You need to define entities");this.config=t}getCardSize(){return 1}_toggle(t){this.hass.callService("homeassistant","toggle",{entity_id:t.entity_id})}static get styles(){return i`
      ha-card {
        background-color: transparent;
        box-shadow: none;
        padding: 16px;
        display: block;
      }
      ha-switch {
        margin-left: 8px;
      }
    `}})}]);