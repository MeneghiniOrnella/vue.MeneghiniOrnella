import { describe, it, expect } from "vitest";
import { shallowMount } from "@vue/test-utils";
import { createI18n } from "vue-i18n";
import Language from "@/components/sections/Language.vue";

const i18n = createI18n({
  legacy: false,
  locale: "en",
  globalInjection: true,
  messages: {
    en: {
      hLanguages: "Languages",
      languages: [
        { h1: "English", p1: "Native speaker" },
        { h1: "Spanish", p1: "Native speaker" },
      ],
    },
  },
});

describe("Language.vue", () => {
  it("renders the languages section with cards", () => {
    const wrapper = shallowMount(Language, {
      global: {
        plugins: [i18n],
      },
    });

    expect(wrapper.exists()).toBe(true);
    expect(wrapper.classes()).toContain("languages");
    expect(wrapper.find("h3").text()).toBe("Languages");
    expect(wrapper.findAll(".card").length).toBe(2);
  });
});
