export interface SwaggerJsonObject {
  openapi: '3.0.4'
  info: {
    title: string
    version: string
    description: string
    termsOfService?:string
    contact?:{
      name: string
      url: string
      email: string
    }
    license?:{
      name: string
      url: string
    }
  }
  servers:Array<{
    url: string
    description: string
  }>
  paths: {
    [path:string]:{
      get?:{
        tags?:string[]
        summary?:string
        description:string
        parameters?:Array<{
          name: string
          description: string
          required: boolean
          schema:{
            type: 'integer'
            default?: unknown
          }
        }>
        responses?: {
          [status_code:string]:{
            description:string
          }
        }
      }
      post?:{
        tags?:string[]
        summary?:string
        requestBody:{
          description:string
          required?:boolean
        }
        responses?:{
          [status_code:string]:{
            description: string
          }
        }
      }
    }
  }
  components?:{
    schemas:{
      [name:string]:{
        type?:'object'
        required?:string[]
        properties?:{
          [name:string]: {
            type:'integer' | 'string'
            format:'int64' | 'email'
            description:string
          }
        }
      }
    }
  }
  externalDocs?:{
    url?:string
    description?:string
  }
}
