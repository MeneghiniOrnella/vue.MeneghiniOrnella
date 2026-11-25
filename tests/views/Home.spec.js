import { describe, it, expect } from "vitest";
import { shallowMount } from "@vue/test-utils";
import Home from "@/views/Home.vue";
import { projects } from "@/data/projects";

describe("Home.vue", () => {
  it("mounts without crashing and renders the home wrapper", () => {
    const wrapper = shallowMount(Home, {
      global: {
        stubs: ["Banner", "About", "Tools", "TimelineSection"],
      },
    });

    expect(wrapper.exists()).toBe(true);
    expect(wrapper.classes()).toContain("home");
  });

  it("returns project links correctly", () => {
    const wrapper = shallowMount(Home, {
      global: {
        stubs: ["Banner", "About", "Tools", "TimelineSection"],
      },
    });

    const project = projects[0];
    const links = wrapper.vm.getProjectLinks(project);

    expect(links).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ label: "GitHub", url: project.urlGithub }),
      ]),
    );

    if (project.urlSite) {
      expect(links).toEqual(
        expect.arrayContaining([
          expect.objectContaining({ label: "Demo", url: project.urlSite }),
        ]),
      );
    }
  });
});
