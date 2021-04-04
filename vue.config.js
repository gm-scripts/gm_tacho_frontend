module.exports = {
  publicPath:
    process.env.NODE_ENV === "production"
      ? "nui://gm_carhud/html/"
      : "/",
  filenameHashing: false,
  productionSourceMap: false
};
