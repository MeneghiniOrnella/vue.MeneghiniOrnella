import { describe, it, expect } from "vitest";
import { shallowMount } from "@vue/test-utils";
import Banner from "@/components/sections/Banner.vue";

describe("Banner.vue", () => {
  it("renders the banner with name, title and social links", () => {
    const wrapper = shallowMount(Banner, {
      global: {
        stubs: ["SocialLinks"],
      },
    });

    expect(wrapper.exists()).toBe(true);
    expect(wrapper.classes()).toContain("banner");
    expect(wrapper.find("h1").text()).toBe("Ornella Meneghini");
    expect(wrapper.find("h2").text()).toBe("Web Developer");
    expect(wrapper.findComponent({ name: "SocialLinks" }).exists()).toBe(true);
  });
});
