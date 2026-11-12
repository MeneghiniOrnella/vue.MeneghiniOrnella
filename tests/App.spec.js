import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import { createRouter, createMemoryHistory } from "vue-router";
import App from "@/App.vue";

// Crear un router básico para las pruebas con una ruta dummy
const router = createRouter({
  history: createMemoryHistory(),
  routes: [
    {
      path: "/",
      name: "Home",
      component: { template: "<div>Home</div>" },
    },
  ],
});

describe("App.vue", () => {
  it("renders the router-view component", async () => {
    // Asegurarse de que el router esté listo
    await router.push("/");

    const wrapper = mount(App, {
      global: {
        plugins: [router],
      },
    });

    // Verificar que el componente se monta sin errores
    expect(wrapper.exists()).toBe(true);

    // Verificar que contiene el contenido de la ruta
    expect(wrapper.html()).toContain("Home");
  });
});
