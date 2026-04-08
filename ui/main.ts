import express from 'express'
import swaggerUi from 'swagger-ui-express'

const app = express()

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup({
  openapi:'3.0.4',
  info:{
    title:'Service APIs',
    version:'1.0.0',
    description:'Debugging of online service program API'
  },
  servers:[
    {
      url:'https://api.zetatechs.com',
      description:'zetatechs'
    },
    {
      url:'https://api.deepseek.com/v1',
      description:'zetatechs'
    },
    {
      url:'https://api.deepseek.com/v1',
      description:'zetatechs'
    },
    
  ],
  components:{
    securitySchemes:{
      bearerAuth:{
        type:'http',
        scheme:'bearer'
      }
    },
    responses:{
      UnauthorizedError:{
        description:'Access token is missing or invalid'
      }
    }
  },
  security:{
    bearerAuth:[]
  },
  paths:{
    '/v1/chat/completions':{
      post:{
        summary:'chat completions',
        parameters:[
          {
            name:'Content-Type',
            in:'header',
            schema:{
              type:'string',
              example:'application/json'
            }
          }
        ],
        requestBody:{
          required:true,
          content:{
            'application/json':{
              schema:{
                type:'object',
                required:['model'],
                properties:{
                  model:{
                    type:'string',
                    example:'gemini-3-pro-preview'
                  },
                  messages:{
                    type:'array',
                    items:{
                      type:'object',
                      properties:{
                        role:{
                          type:'string',
                          example:'user'
                        },
                        content:{
                          type:'string',
                          example:'hi'
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        },
        responses:{
          200:{
            description:'ok'
          }
        }
      }
    }
  }
}))

app.listen(5713, () => {
  console.log(`See documents on http://localhost:5713`)
})
