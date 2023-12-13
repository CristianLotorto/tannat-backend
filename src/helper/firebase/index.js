const admin = require('firebase-admin');

require('dotenv').config();

const firebaseApp = admin.initializeApp({
  credential: admin.credential.cert({
    type: process.env.TYPE_FIREBASE,
    project_id: process.env.PROJECT_ID_FIREBASE,
    private_key_id: process.env.PRIVATE_KEY_ID_FIREBASE,
    private_key: '-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDElxd1/q16yePt\nwP+Gtrt2tp8VaC7n+ZQE3joeF4nAcUlv3JIQZ+neUKJMDmRmh38vHrS4WSEO4wkl\nBesV4YZ6HcDW/c8n5O1W+Tk20zqv8f2WTs9HyMAt8v9XsjjGrtik81K+2+DjUmlK\nQcSNvtAc8gzdXlXWm1xqYlxiPBYhA7KOZs7KfPftQR1hqYEX90k1wokWcdxrRQ3y\neBvLrXwMzdKG77BCfsouY63smt29l10+2dGbbVImuihxn3Zjeq8stjpwbcLseXWB\nSOdYh9lTo0noeEw79wtHrUYZwgfEf8E0pvz3rBPUEawsEn0NTKEvVsnJUSBU2s5A\nM6uWfFNNAgMBAAECggEANt077PBAlg4WEFpWddA1jTH2P9EtlgvvJVSnv5IuHYkA\nR7m1AeMeP68dPECgAIU8F3hoUzJ8qVzvRmfabebc0uPO17FJyQZ4vlcbgpN8w3Gz\npekkrBH4oFo6rMzOT5SoXZCSvTU8E/UB8XldU3m3NvzOXlFff18ocYA17Cx8uIWE\nayKDYFyLKWqPOIHxePz+SKcbwYPHG8EIiYt3RhXluICLXG+TGOsKKW/hPHr13gPl\nkAe0r6lgU0MAgX+29aduNunc+OYjQyIJmgUpnz3HCz7ox9gjZ/13c5cYIZcZFOHD\nJjQBr5Wp0Z1rj9tH1Y755Yacp72yHnvYijx7HJC9eQKBgQDjRJwWmAwhXFSY4lFf\nwOQXWQQ35l5fIs2EKrCWxFznxrqdBbttbI5Ybc3kPGSR/bLyUUjmrSGtBQluXOdT\nks4trQtMO1BDZWOb+IlTO3u7F+Q8+vBCpTX9svUBXpdVyVUMNVV82DZeppqG6MVl\nuXt5mcRl6lvsR7eDBSbGuCgdswKBgQDdcZ0OGL5xUHylmUcjdGCprdzogviijIRa\n6UmX/IVZe17u5DtZlmRn8qovhf7HsNzzCHpfefQxmAAB7t57CALsZpzLn/qIN0ID\nWwY9MCzdzmBngQtA0XGzEDgeUIXGx9Cm1Ui2S8EojHUykeUZjh2yQblwPTTyQ6Q+\nzOjue8tK/wKBgDq6+Ds+f6P/YD1B/xVnm4oNDvIDLlAXhlSpU4kipX+f84mweYcF\njqN7fMGGedbgYOYN63DxPMqhipZim8UVIwLavRiuG0fPY7Ziu9oufQMUYX8AuiX+\n27z8CiSYdTNOHBRTlAv3M9Wx6C0E6j4neKkr+3z621ZsEhhhtGuWG4fRAoGAN8aV\nE2biGPJ34tH/nAuFCVf0a1AJxg90it11nuWIxOgRGkS8Oi1qLtBtUzkB2lRO4pwB\nDqlN+2vYnKQIv55d9iNGXPd3h/W7F9NGeAT5WAjSOV/EcNgQNlTgfao0d8P+ZvcT\nsG7WQRtXrZwXw18LVcm+JmoUOu0UoojEJsVhiAsCgYEAqxlxkMpPNIkdOkm9SSlU\nJ8Z1JHroc3nGt2t9EZr3C14gDAQjD/oLFtCMyksptKNyBioqrTr2g4emMJYXO5vT\nwLbHDEvoFhibRbfVvK9b46aEdLyz21/oKWPf4ZDog+3mUWMhzybWFopf/PuHi9sX\n9WC5eTNxRvoyQPbTD9F0+Y8=\n-----END PRIVATE KEY-----\n',
    client_email: process.env.CLIENT_EMAIL_FIREBASE,
    client_id: process.env.CLIENT_ID_FIREBASE,
    auth_uri: process.env.AUTH_URI_FIREBASE,
    token_uri: process.env.TOKEN_URI_FIREBASE,
    auth_provider_x509_cert_url:
      process.env.AUTH_PROVIDER_X509_CERT_URL_FIREBASE,
    client_x509_cert_url: process.env.CLIENT_X509_CERT_URL_FIREBASE,
    universe_domain: process.env.UNIVERSE_DOMAIN_FIREBASE,
  }),
});

module.exports = firebaseApp;
