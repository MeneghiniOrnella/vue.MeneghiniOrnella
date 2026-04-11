import { describe, it, expect } from "vitest";
import { shallowMount } from "@vue/test-utils";
import Footer from "@/components/layout/Footer.vue";

describe("Footer.vue", () => {
  it("renders the footer with copyright and social links", () => {
    const wrapper = shallowMount(Footer, {
      global: {
        stubs: ["SocialLinks"],
      },
    });

    expect(wrapper.exists()).toBe(true);
    expect(wrapper.classes()).toContain("footer");
    expect(wrapper.find("hr").exists()).toBe(true);
    expect(wrapper.find(".copy").exists()).toBe(true);
    expect(wrapper.find(".copy").text()).toContain("Ornella Meneghini");
    expect(wrapper.find(".copy").text()).toContain(
      new Date().getFullYear().toString(),
    );
    expect(wrapper.findComponent({ name: "SocialLinks" }).exists()).toBe(true);
  });
});
