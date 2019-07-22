const express = require('express')
const app = express()
const graphqlHTTP = require('express-graphql')
const schema = require('./schema')
const mongoose = require('mongoose')
const Student = require('./models/Student')

mongoose.connect('mongodb://localhost/eager-fox', {useNewUrlParser: true});


app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true
}))


app.get('/seeding', async (req, res) => {

  const student = await Student.create({
    name: 'Nyung',
    age: 17
  })

  const student2 = await Student.create({
    name: 'Nyong',
    age: 18
  })

  res.json({
    status: 'berhasil'
  })
  
});

app.listen(3000, () => {
  console.log('App listening on port 3000!');
});