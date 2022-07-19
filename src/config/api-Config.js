const apiConfig = {
  protocol: process.env.REACT_APP_API_PROTOCOL || "https",
  host: process.env.REACT_APP_API_HOST || "clean-nodejs-dd.herokuapp.com",
  port: process.env.REACT_APP_API_PORT || "",
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
