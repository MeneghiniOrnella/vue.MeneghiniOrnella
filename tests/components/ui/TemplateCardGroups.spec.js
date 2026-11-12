import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import { createI18n } from "vue-i18n";
import TemplateCardGroups from "@/components/ui/TemplateCardGroups.vue";

const i18n = createI18n({
  legacy: false,
  locale: "en",
  globalInjection: true,
  messages: {
    en: {
      testTitle: "Projects",
      test: {
        item1: {
          title: "Project One",
          state: "Active",
          otherInfo: "Extra info",
        },
      },
    },
  },
});

const items = [
  {
    id: "item1",
    place: "Remote",
    start: "2023",
    end: "2024",
    skills: ["Vue", "Vitest"],
    active: true,
  },
];

describe("TemplateCardGroups.vue", () => {
  it("renders the section title and item content", () => {
    const wrapper = mount(TemplateCardGroups, {
      props: {
        items,
        i18nBase: "test",
        titleKey: "testTitle",
        sectionClass: "project",
      },
      global: {
        plugins: [i18n],
      },
    });

    expect(wrapper.exists()).toBe(true);
    expect(wrapper.find("section").classes()).toContain("project");
    expect(wrapper.html()).toContain("Projects");
    expect(wrapper.html()).toContain("Project One");
    expect(wrapper.findAll(".skill").length).toBe(items[0].skills.length);
  });

  it("renders slot content when provided", () => {
    const wrapper = mount(TemplateCardGroups, {
      props: {
        items,
        i18nBase: "test",
        titleKey: "testTitle",
        sectionClass: "project",
      },
      slots: {
        content:
          '<template #content="{ item }"><div class="custom-slot">Custom {{ item.id }}</div></template>',
      },
      global: {
        plugins: [i18n],
      },
    });

    expect(wrapper.find(".custom-slot").exists()).toBe(true);
    expect(wrapper.find(".custom-slot").text()).toContain("item1");
  });
});
