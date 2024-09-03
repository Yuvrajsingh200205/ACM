function cspMiddleware(req, res, next) {
    res.setHeader("Content-Security-Policy", "default-src 'self'; script-src 'self' https://example.com; style-src 'self' https://fonts.googleapis.com; img-src 'self' data:; connect-src 'self' https://api.example.com; font-src 'self' https://fonts.gstatic.com; object-src 'none'; frame-ancestors 'none';");
    next();
  }
  
  module.exports = cspMiddleware;