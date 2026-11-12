import { describe, it, expect } from "vitest";
import { shallowMount } from "@vue/test-utils";
import { createI18n } from "vue-i18n";
import Error from "@/views/Error.vue";

const i18n = createI18n({
  legacy: false,
  locale: "en",
  globalInjection: true,
  messages: {
    en: {
      hError: "Page not found",
    },
  },
});

describe("Error.vue", () => {
  it("renders the error page with 404 and image", () => {
    const wrapper = shallowMount(Error, {
      global: {
        plugins: [i18n],
      },
    });

    expect(wrapper.exists()).toBe(true);
    expect(wrapper.classes()).toContain("error");
    expect(wrapper.find("h1").text()).toBe("404");
    expect(wrapper.find("h2").text()).toContain("Page not found");
    expect(wrapper.find("img").exists()).toBe(true);
    expect(wrapper.find("a").attributes("href")).toBe("/");
  });
});
