module.exports = {
  publicPath:
    process.env.NODE_ENV === "production"
      ? "/"
      : "/",
  filenameHashing: false,
  productionSourceMap: false
};

//nui://gm_carhud/html/