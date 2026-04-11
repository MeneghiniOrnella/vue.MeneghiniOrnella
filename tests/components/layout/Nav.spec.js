import { describe, it, expect, vi, beforeEach } from "vitest";
import { shallowMount } from "@vue/test-utils";
import { createI18n } from "vue-i18n";
import Nav from "@/components/layout/Nav.vue";

const i18n = createI18n({
  legacy: false,
  locale: "en",
  globalInjection: true,
  messages: {
    en: {
      Home: "Home",
      Resume: "Resume",
      Contact: "Contact",
    },
  },
});

// Mock localStorage
const localStorageMock = {
  getItem: vi.fn(),
  setItem: vi.fn(),
  removeItem: vi.fn(),
  clear: vi.fn(),
};
Object.defineProperty(window, "localStorage", {
  value: localStorageMock,
});

// Mock matchMedia
Object.defineProperty(window, "matchMedia", {
  writable: true,
  value: vi.fn().mockImplementation((query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: vi.fn(),
    removeListener: vi.fn(),
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn(),
  })),
});

// Mock scroll
Object.defineProperty(window, "scrollY", {
  writable: true,
  value: 0,
});

describe("Nav.vue", () => {
  beforeEach(() => {
    vi.clearAllMocks();
    localStorageMock.getItem.mockReturnValue(null);
    window.scrollY = 0;
  });

  it("renders navigation links and action buttons", () => {
    const wrapper = shallowMount(Nav, {
      global: {
        plugins: [i18n],
        stubs: ["router-link"],
      },
    });

    expect(wrapper.exists()).toBe(true);
    expect(wrapper.classes()).toContain("nav");
    expect(wrapper.findAllComponents({ name: "router-link" }).length).toBe(3);
    expect(wrapper.findAll(".nav-action").length).toBe(2);
  });

  it("toggles language on button click", async () => {
    const wrapper = shallowMount(Nav, {
      global: {
        plugins: [i18n],
        stubs: ["router-link"],
      },
    });

    const languageButton = wrapper.findAll(".nav-action")[0];
    expect(languageButton.text()).toBe("ES"); // initial locale 'en', shows 'ES'

    await languageButton.trigger("click");

    expect(wrapper.vm.locale).toBe("es");
    expect(languageButton.text()).toBe("EN"); // after toggle, shows 'EN'
  });

  it("toggles theme on button click", async () => {
    const wrapper = shallowMount(Nav, {
      global: {
        plugins: [i18n],
        stubs: ["router-link"],
      },
    });

    const themeButton = wrapper.findAll(".nav-action")[1];
    expect(themeButton.text()).toBe("🌙"); // initial theme 'light', shows '🌙'

    await themeButton.trigger("click");

    expect(localStorageMock.setItem).toHaveBeenCalledWith("theme", "dark");
    expect(themeButton.text()).toBe("☀️"); // after toggle, shows '☀️'
  });
});
