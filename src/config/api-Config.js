const apiConfig = {
  protocol: process.env.REACT_APP_API_PROTOCOL || "http",
  host: process.env.REACT_APP_API_HOST || "localhost",
  port: process.env.REACT_APP_API_PORT || "8000",
  prefix: process.env.REACT_APP_API_PREFIX || "",
};

export default {
  api: `${apiConfig.protocol}://${apiConfig.host}${
    apiConfig.port ? `:${apiConfig.port}` : ""
  }${apiConfig.prefix}`,
  frontend: `${apiConfig.protocol}://${apiConfig.host}${
    apiConfig.port ? `:${apiConfig.port}` : ""
  }`,
};
