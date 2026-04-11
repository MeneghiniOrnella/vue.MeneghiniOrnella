import { describe, it, expect } from "vitest";
import { shallowMount } from "@vue/test-utils";
import { createI18n } from "vue-i18n";
import SocialLinks from "@/components/ui/SocialLinks.vue";
import { contacts } from "@/data/contacts";

const i18n = createI18n({
  legacy: false,
  locale: "en",
  globalInjection: true,
  messages: {
    en: {
      emailBtnAriaLabel: "Email",
      linkedinBtnAriaLabel: "LinkedIn",
      githubBtnAriaLabel: "GitHub",
      codepenBtnAriaLabel: "CodePen",
      cvBtnAriaLabel: "CV",
    },
  },
});

describe("SocialLinks.vue", () => {
  it("renders all contact links when ids prop is empty", () => {
    const wrapper = shallowMount(SocialLinks, {
      global: {
        plugins: [i18n],
        stubs: ["FontAwesomeIcon"],
      },
    });

    expect(wrapper.exists()).toBe(true);
    expect(wrapper.findAll("a").length).toBe(contacts.length);
  });

  it("filters contacts by ids and shows labels", () => {
    const selection = contacts.slice(0, 2);
    const ids = selection.map((item) => item.id);

    const wrapper = shallowMount(SocialLinks, {
      props: {
        ids,
        showLabel: true,
      },
      global: {
        plugins: [i18n],
        stubs: ["FontAwesomeIcon"],
      },
    });

    const anchors = wrapper.findAll("a");
    expect(anchors.length).toBe(ids.length);
    anchors.forEach((anchor, index) => {
      expect(anchor.attributes("href")).toBe(selection[index].url);
      expect(anchor.text()).toContain(selection[index].label);
    });
  });
});
