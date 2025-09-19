import express from 'express'
import swaggerUi from 'swagger-ui-express'

const app = express()

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup({
  title:'title',
  swagger:'2.0',
  paths:{
    
  }
}))

app.get('/', (req, res) => res.end('hi'))


app.listen(3000, () => {
  console.log(`api docs: https://localhost:3000`)
})
