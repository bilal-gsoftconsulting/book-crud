export default () => ({
    database: {
      uri: process.env.MONGODB_URI,
    },
    jwtSecret: process.env.JWT_SECRET,
  });
  