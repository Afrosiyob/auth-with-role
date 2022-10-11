const ENV = process.env;

export const configs = {
  env: ENV,
  app: {
    appType: ENV.NODE_ENV,
    appVersion: ENV.REACT_APP_VERSION,
    isDev: ENV.REACT_APP_ENV !== "production",
  },
  lang: {
    initial: "uz",
    list: ["uz", "ru", "en"],
  },
  api: {
    prod: {
      url: ENV.REACT_APP_API_BASE_URL,
    },
    dev: {
      url: ENV.REACT_APP_API_TEST_URL,
    },
  },
  list: {
    current: 1,
    pageSize: 20,
  },
};
