window.onload = function () {
  const accordionItems = document.querySelectorAll(".accordion-item");
  accordionItems.forEach(function (accordionItem) {
    if (accordionItem.classList.contains("open")) {
      const content = accordionItem.querySelector(".accordion-body");
      content.style.height = content.scrollHeight + "px";
    }
    accordionItem.addEventListener("click", function (e) {
      accordionItems.forEach(function (otherItem) {
        otherItem.classList.remove("open");
        const otherContent = otherItem.querySelector(".accordion-body");
        otherContent.style.height = "0";
      });
      accordionItem.classList.add("open");
      const content = accordionItem.querySelector(".accordion-body");
      if (accordionItem.classList.contains("open")) {
        content.style.height = content.scrollHeight + "px";
      }
    });
  });
};
