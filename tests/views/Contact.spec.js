import { describe, it, expect } from "vitest";
import { shallowMount } from "@vue/test-utils";
import { createI18n } from "vue-i18n";
import Contact from "@/views/Contact.vue";

const i18n = createI18n({
  legacy: false,
  locale: "en",
  globalInjection: true,
  messages: {
    en: {
      hContact: "Contact",
      pContact1: "Get in touch",
      contacts: {
        email: { arialabel: "Send email", text: "Email address" },
        linkedin: { arialabel: "Visit LinkedIn", text: "LinkedIn profile" },
        github: { arialabel: "Visit GitHub", text: "GitHub repositories" },
        codepen: { arialabel: "Visit CodePen", text: "CodePen projects" },
      },
    },
  },
});

describe("Contact.vue", () => {
  it("renders the contact section with filtered contacts", () => {
    const wrapper = shallowMount(Contact, {
      global: {
        plugins: [i18n],
      },
    });

    expect(wrapper.exists()).toBe(true);
    expect(wrapper.find("section").classes()).toContain("contact");
    expect(wrapper.find("h3").text()).toBe("Contact");
    expect(wrapper.findAll(".card").length).toBe(4); // filtered by ids
  });
});
