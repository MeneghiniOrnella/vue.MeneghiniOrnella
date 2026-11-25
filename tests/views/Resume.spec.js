import { describe, it, expect } from "vitest";
import { shallowMount } from "@vue/test-utils";
import { createI18n } from "vue-i18n";
import Resume from "@/views/Resume.vue";

const i18n = createI18n({
  legacy: false,
  locale: "en",
  globalInjection: true,
  messages: {
    en: {
      hWork: "Work Experience",
      hEducation: "Education",
    },
  },
});

describe("Resume.vue", () => {
  it("renders the resume with tabs and default work section", () => {
    const wrapper = shallowMount(Resume, {
      global: {
        plugins: [i18n],
        stubs: ["TimelineSection", "Language"],
      },
    });

    expect(wrapper.exists()).toBe(true);
    expect(wrapper.classes()).toContain("resume");
    expect(wrapper.findAll(".tab-btn").length).toBe(2);
    expect(wrapper.find(".tab-btn.active").text()).toBe("💼");
    expect(wrapper.findComponent({ name: "TimelineSection" }).exists()).toBe(
      true,
    );
  });

  it("switches tabs on button click", async () => {
    const wrapper = shallowMount(Resume, {
      global: {
        plugins: [i18n],
        stubs: ["TimelineSection", "Language"],
      },
    });

    const educationTab = wrapper.findAll(".tab-btn")[1];
    await educationTab.trigger("click");

    expect(wrapper.find(".tab-btn.active").text()).toBe("🎓");
  });
});
