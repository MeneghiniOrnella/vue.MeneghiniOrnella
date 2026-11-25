import { describe, it, expect } from "vitest";
import { shallowMount } from "@vue/test-utils";
import { createI18n } from "vue-i18n";
import About from "@/components/sections/About.vue";

const i18n = createI18n({
  legacy: false,
  locale: "en",
  globalInjection: true,
  messages: {
    en: {
      about: {
        h: "About Me",
        p1: "First paragraph",
        p2: "Second paragraph",
      },
    },
  },
});

describe("About.vue", () => {
  it("renders the about section with translated text", () => {
    const wrapper = shallowMount(About, {
      global: {
        plugins: [i18n],
      },
    });

    expect(wrapper.exists()).toBe(true);
    expect(wrapper.find("h3").text()).toBe("About Me");
    expect(wrapper.findAll("p").length).toBe(2);
  });
});
