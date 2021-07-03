function ScrollToElement(scrolledElement: string, elementId: string) {
  if (elementId) {
    const scrollToDivY = document.getElementById(elementId)!.offsetTop - 80;
    document
      .getElementById(scrolledElement)!
      .scrollTo({ top: scrollToDivY, behavior: "smooth" });
  }
}

export default ScrollToElement;
