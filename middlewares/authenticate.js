const jwt = require('jsonwebtoken')
const config = require('config')

module.exports = function (req, res, next) {
  //Getting token from headers
  const token = req.header('x-auth-token')

  //Check if there is a token available
  if (!token) {
    return res.status(401).json({ message: 'No token, authorization failed' })
  }

  try {
    const decoded = jwt.verify(token, config.get('jwtSecret'));

    req.user = decoded.user

    next()
  } catch (error) {
    if (error) throw error
    res.status(401).json({ message: 'Token Invalid' })
  }
}

