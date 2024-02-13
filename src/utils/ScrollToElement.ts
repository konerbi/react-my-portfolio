import { TrackGoogleAnalyticsEvent } from '../services/GA';

function ScrollToElement(scrolledElement: string, elementId: string) {
  if (elementId) {
    TrackGoogleAnalyticsEvent('scrollToElement', scrolledElement);

    const scrollToDivY = document.getElementById(elementId)!.offsetTop - 80;
    document.getElementById(scrolledElement)!.scrollTo({ top: scrollToDivY, behavior: 'smooth' });
  }
}

export default ScrollToElement;
