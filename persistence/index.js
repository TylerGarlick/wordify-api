const arangojs = require('arangojs')
const {aql} = arangojs
const db = new arangojs.Database({
  // url: "http://localhost:32769/_db/wordify"
  url: 'http://localhost:32769'
})

db.useDatabase('wordify')
const words = db.collection('words')

const WORD_QUERY = aql`
  FOR w IN words
  RETURN w
`

module.exports = {
  async getWords() {
    const cursor = await db.query(WORD_QUERY)
    return await cursor.all()
  },
  
  async findById(key) {
    return await words.firstExample({ _key: key })
  }
}
