const apiConfig = {
  protocol: process.env.API_PROTOCOL || "https",
  host: process.env.API_HOST || "clean-nodejs-dd.herokuapp.com",
  port: process.env.API_PORT || "",
  prefix: process.env.API_PREFIX || "/api",
};

export default {
  api: `${apiConfig.protocol}://${apiConfig.host}${
    apiConfig.port ? `:${apiConfig.port}` : ""
  }${apiConfig.prefix}`,
  frontend: `${apiConfig.protocol}://${apiConfig.host}${
    apiConfig.port ? `:${apiConfig.port}` : ""
  }`,
};
