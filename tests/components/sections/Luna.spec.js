import { describe, it, expect } from "vitest";
import { shallowMount } from "@vue/test-utils";
import Luna from "@/components/sections/Luna.vue";

describe("Luna.vue", () => {
  it("renders the TresCanvas component", () => {
    const wrapper = shallowMount(Luna, {
      global: {
        stubs: [
          "TresCanvas",
          "TresPerspectiveCamera",
          "TresDirectionalLight",
          "TresAmbientLight",
          "TresMesh",
          "TresBoxGeometry",
          "TresMeshStandardMaterial",
        ],
      },
    });

    expect(wrapper.exists()).toBe(true);
    expect(wrapper.findComponent({ name: "TresCanvas" }).exists()).toBe(true);
  });
});
