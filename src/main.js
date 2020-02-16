import { LitElement, html, css } from "card-tools/src/lit-element.js";
import { hass } from "card-tools/src/hass.js";

class SwitchCard extends LitElement {
  static get properties() {
    return {
      hass: {},
      config: {}
    };
  }

  render() {
    return html`
      <ha-card>
        ${this.config.entities.map(ent => {
          const stateObj = this.hass.states[ent];
          return stateObj
            ? html`
                <div class="state">
                  <ha-switch
                    .checked="${stateObj.state === "on"}"
                    @change="${ev => this._toggle(stateObj)}"
                  ></ha-switch>
                </div>
              `
            : html`
                <div class="not-found">Entity ${ent} not found.</div>
              `;
        })}
      </ha-card>
    `;
  }

  setConfig(config) {
    if (!config.entities) {
      throw new Error("You need to define entities");
    }
    this.config = config;
  }

  // The height of your card. Home Assistant uses this to automatically
  // distribute all cards over the available columns.
  getCardSize() {
    return 1;
  }

  _toggle(state) {
    this.hass.callService("homeassistant", "toggle", {
      entity_id: state.entity_id
    });
  }

  static get styles() {
    return css`
      ha-card {
        background-color: transparent;
        box-shadow: none;
        padding: 16px;
        display: block;
      }
      ha-switch {
        margin-left: 8px;
      }
    `;
  }
}
customElements.define("ha-switch-card", SwitchCard);
