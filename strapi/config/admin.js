module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'd9b405615931647def7edb1931d0ac10'),
  },
});
