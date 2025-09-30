# Service APIs ![](https://img.shields.io/codecov/c/github/vuejs/vue/dev.svg?sanitize=true) ![](https://img.shields.io/npm/l/vue.svg?sanitize=true)

## APIs

### Office

Application: YuQue

BaseURL: https://www.yuque.com

<details>
  <summary>Obtain the user details of the current Token.</summary><br>
  
  ```http
  GET /api/v2/user HTTP/1.1
  X-Auth-Token: authToken
  Content-Type: application/json

  ``` 
</details>

<details>
  <summary>Obtain the user details of the current Token.</summary><br>
  
  ```http
  GET /api/v2/user HTTP/1.1
  X-Auth-Token: authToken
  Content-Type: application/json

  ``` 
</details>

<details>
  <summary>Obtain the list of documents in the knowledge base.</summary><br>
  
  ```http
  GET /api/v2/repos/<book_id>/docs?offset=0&limit=8&optional_properties= HTTP/1.1
  X-Auth-Token: authToken
  Content-Type: application/json

  ``` 
</details>



- Create a document:

```http
POST /api/v2/repos/<book_id>/docs HTTP/1.1
X-Auth-Token: authToken
Content-Type: application/json

{
  "slug":"",
  "title":"",
  "public":true,
  "format":"",
  "body":""
}

```

- Update a document:

```http
PUT /api/v2/repos/<book_id>/docs/<id> HTTP/1.1
X-Auth-Token: authToken
Content-Type: application/json

{
  "slug":"",
  "title":"",
  "public":true,
  "format":"",
  "body":""
}

```

- Delete a document:

```http
DELETE /api/v2/repos/<book_id>/docs/<id> HTTP/1.1
X-Auth-Token: authToken
Content-Type: application/json

```

### Dingtalk

BaseURL: https://api.dingtalk.com

- Create a video conference:

```http
POST /v1.0/conference/videoConferences HTTP/1.1
X-Acs-Dingtalk-Access-Token: accessToken
Content-Type: application/json

{
  "userId":"",
  "confTitle":"",
  "inviteUserIds":[],
  "inviteCaller":""
}

```

### Douyin

BaseURL: https://www.yuque.com

### Bilibili

BaseURL: https://www.yuque.com

### Music.163

BaseURL: https://developer.music.163.com






## Contribute


## License
