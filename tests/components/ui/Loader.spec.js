import { describe, it, expect } from "vitest";
import { shallowMount } from "@vue/test-utils";
import Loader from "@/components/ui/Loader.vue";

describe("Loader.vue", () => {
  it("renders the loader with four dash elements", () => {
    const wrapper = shallowMount(Loader);

    expect(wrapper.exists()).toBe(true);
    expect(wrapper.classes()).toContain("loader");
    expect(wrapper.findAll(".dash").length).toBe(4);
  });
});
