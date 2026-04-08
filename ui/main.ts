import express from 'express'
import swaggerUi from 'swagger-ui-express'
import {   
  GithubJsonDocs,
  TavilyJsonDocs,

} from './api-docs'

const app = express()

app.use('/github/api-docs', swaggerUi.serve, swaggerUi.setup(GithubJsonDocs))
app.use('/tavily/api-docs', swaggerUi.serve, swaggerUi.setup(TavilyJsonDocs))


app.listen(5713, () => {
  console.log(`See documents on http://localhost:5713`)
})
