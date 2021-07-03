function ScrollToElement(scrolledElement: string, elementId: string) {
  if (elementId) {
    const scrollToDiv =
      document.getElementById(elementId)!.offsetTop -
      document.getElementById("navbar")!.offsetHeight;
    document
      .getElementById(scrolledElement)!
      .scrollTo({ top: scrollToDiv, behavior: "smooth" });
  }
}

export default ScrollToElement;
