import { describe, it, expect } from "vitest";
import { shallowMount } from "@vue/test-utils";
import { createI18n } from "vue-i18n";
import Tools from "@/components/sections/Tools.vue";
import tools from "@/data/tools.json";

const i18n = createI18n({
  legacy: false,
  locale: "en",
  globalInjection: true,
  messages: {
    en: {
      hTools: "Tools & Technologies",
    },
  },
});

describe("Tools.vue", () => {
  it("renders the tools section with tool images", () => {
    const wrapper = shallowMount(Tools, {
      global: {
        plugins: [i18n],
      },
    });

    expect(wrapper.exists()).toBe(true);
    expect(wrapper.classes()).toContain("tools");
    expect(wrapper.find("h3").text()).toBe("Tools & Technologies");
    expect(wrapper.findAll(".tool").length).toBe(tools.length);
    expect(wrapper.findAll("img").length).toBe(tools.length);
  });
});
