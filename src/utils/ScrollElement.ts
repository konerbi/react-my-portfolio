import { isMobile } from 'react-device-detect';

function ScrollElementToContent(scrolledElement: string, contentElementId: string) {
  if (contentElementId) {
    let scrollToDivY = document.getElementById(scrolledElement)!.offsetTop;

    if (isMobile) {
      if (window.innerHeight < document.getElementById(contentElementId)!.offsetTop) {
        scrollToDivY = document.getElementById(contentElementId)!.offsetTop - 80;
      } else {
        scrollToDivY =
          window.innerHeight - document.getElementById(contentElementId)!.offsetTop - 80;
      }
    } else {
      if (window.innerHeight < document.getElementById(contentElementId)!.offsetTop) {
        scrollToDivY =
          document.getElementById(contentElementId)!.offsetTop +
          document.getElementById(contentElementId)!.offsetHeight +
          500;
      } else {
        scrollToDivY =
          document.getElementById(contentElementId)!.offsetTop +
          document.getElementById(contentElementId)!.offsetHeight;
      }
    }

    document.getElementById(scrolledElement)!.scrollTo({ top: scrollToDivY, behavior: 'smooth' });
  }
}

export default ScrollElementToContent;
