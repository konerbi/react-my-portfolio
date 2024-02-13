import ReactGA4 from 'react-ga4';

const InitializeGoogleAnalytics = () => {
  const tracking_id = 'G-4950Q7QRHQ';
  ReactGA4.initialize(tracking_id);
  console.log('GA INITIALIZED');
};

const TrackGoogleAnalyticsPageview = (pagePath: string, title?: string) => {
  console.log('GA pageview = ', 'page :', pagePath, ':', 'title :', title);
  ReactGA4.send({ hitType: 'pageview', page: pagePath, title: title });
};

const TrackGoogleAnalyticsEvent = (category: string, action: string) => {
  console.log('GA event = ', 'category :', category, ':', 'action :', action);

  ReactGA4.event({
    category: category,
    action: action,
  });
};

export default InitializeGoogleAnalytics;
export { InitializeGoogleAnalytics, TrackGoogleAnalyticsPageview, TrackGoogleAnalyticsEvent };
