export default () => ({
  // port: parseInt(process.env.PORT, 10) || 3000,
  // baseImageUrl: process.env.PUBLIC_IMAGE_URL,
  // rootUrl: process.env.ROOT_URL,
  // realtimeUrl: process.env.REALTIME_URL,
  // appUrl: process.env.APP_URL,
  // homeUrl: process.env.HOME_URL,
  // apiUrl: process.env.API_URL,
  database: {
    mongo: process.env.MONGO_DATABASE,
    // cvThree: process.env.MONGO_CV_THREE_DATABASE,
  },
  // fileStore: {
  //   public: process.env.PUBLIC_DEST,
  //   publicConfig: process.env.PUBLIC_CONFIG,
  //   maxSize: process.env.MAX_FILE_SIZE,
  // },
  // auth: {
  //   secret: process.env.AUTH_KEY,
  //   issuer: process.env.AUTH_ISSUER,
  //   audience: process.env.AUTH_AUDIENCE,
  // },
 
  // tazapay: {
  //   api:  process.env.API_TAZAPAY,
  //   key:process.env.API_KEY,
  //   secret:  process.env.API_SECRET,
  // },
});