export default {
  mounted(el, binding) {
    const effect =
      (typeof binding.value === "string"
        ? binding.value
        : binding.value?.type) || "fade-up";
    const delay =
      (typeof binding.value === "object" && binding.value.delay) || 0;

    // 初始状态
    el.classList.add("opacity-0", "transition-all", "duration-700", "ease-out");
    el.style.transitionDelay = `${delay}ms`;

    switch (effect) {
      case "fade-up":
        el.classList.add("translate-y-6");
        break;
      case "fade-down":
        el.classList.add("-translate-y-6");
        break;
      case "slide-left":
        el.classList.add("translate-x-6");
        break;
      case "slide-right":
        el.classList.add("-translate-x-6");
        break;
      case "zoom-in":
        el.classList.add("scale-95");
        break;
      case "zoom-out":
        el.classList.add("scale-110");
        break;
    }

    // IntersectionObserver 监听
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            el.classList.add(
              "opacity-100",
              "translate-y-0",
              "translate-x-0",
              "scale-100"
            );
            el.classList.remove(
              "opacity-0",
              "translate-y-6",
              "-translate-y-6",
              "translate-x-6",
              "-translate-x-6",
              "scale-95",
              "scale-110"
            );
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.2 }
    );

    observer.observe(el);
  },
};
