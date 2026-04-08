import { SwaggerJsonObject } from '../type'

export const GithubJsonDocs: SwaggerJsonObject = {
  openapi:'3.0.4',
  info:{
    title:'',
    version:'',
    description:''
  },
  servers:[
    {
      url:'https://api.github.com',
      description:''
    }
  ],
  paths:{
    '/users':{
      get:{
        description:'',
        responses:{
          200:{
            description:'ok' 
          }
        }
      }
    }
  }
} 
