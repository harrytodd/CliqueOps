const port = process.env.PORT || 3333
const secret = 'We only rap in our clique'

const env = process.env.NODE_ENV || 'development'

const dbURI = env === 'production'
  ? process.env.MONGODB_URI
  : `mongodb://localhost/pokedb-${env}`

module.exports = {
  secret, port, dbURI
}
