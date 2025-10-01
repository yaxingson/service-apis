# API Docs

## Overview

## Public Info 

BaseURL: https://www.yuque.com

| Status Code | Description | 
| -----  | -----     |
| 200  | Ok |
| 400  | The requested parameter is illegal |
| 401  | The Token or Scope failed the authentication |
| 403  | No operation permission |
| 404  | The entity was not found |
| 422  | The request parameter verification failed |
| 429  | The access frequency has exceeded the limit |
| 500  | Internal error |

Failed response：

```json
{"status":404,"message":"Not Found"}

```


## APIs

### User

#### Obtain the user details of the current Token.

- Method: `GET`
- Path: `/api/v2/user`
- Auth: `X-Auth-Token`

Example request:

```http
GET /api/v2/user HTTP/1.1
X-Auth-Token: authToken
Content-Type: application/json

```

<details>
  <summary>Successful response</summary>

  ```json
  {
    "data": {
      "id": 0,
      "type": "string",
      "login": "string",
      "name": "string",
      "avatar_url": "string",
      "books_count": 0,
      "public_books_count": 0,
      "followers_count": 0,
      "following_count": 0,
      "public": 0,
      "description": "string",
      "created_at": "2019-08-24T14:15:22Z",
      "updated_at": "2019-08-24T14:15:22Z"
    }
  }
  
  ```
</details>

### Search

### Group

### Doc

#### Obtain the list of documents in the knowledge base.

- Method: `GET`
- Path: ` /api/v2/repos/:book_id/docs`
- Auth: `X-Auth-Token`

Path Parameters:

| Parameter | Type | Required | Default | Description | 
| :-----:     | :-----:  |  :-----:  |  :-----:   | -----  |
|  book_id  | integer | Yes  | - | Knowledge base ID |

Query Parameters:

| Parameter | Type | Required | Default | Description |
| :-----:     | :-----:  |  :-----:  |  :-----:   | ----- |
|  offset  | integer | No  | 0 |  Offset [Pagination parameter] |
|  limit  | integer | No  | 100 | Quantity per page [Pagination parameters] |
|  optional_properties| string | No  | "" | The additional fields obtained, with multiple fields separated by commas.(Note: Fields will become invalid if the number of books on each page exceeds 100)  |

The fields supported by `optional_properties` include:

- `hits`: Document reading count
- `tags`: Tag
- `latest_version_id`: The latest released version ID

Example request:

```http
GET /api/v2/repos/:book_id/docs HTTP/1.1
X-Auth-Token: authToken
Content-Type: application/json

```

<details>
  <summary>Successful response</summary>

  ```json
  {
    "meta": {
      "total": 0
    },
    "data": [
      {
        "id": 0,
        "type": "Doc",
        "slug": "string",
        "title": "string",
        "description": "string",
        "cover": "string",
        "user_id": 0,
        "book_id": 0,
        "last_editor_id": 0,
        "public": 0,
        "status": "string",
        "likes_count": 0,
        "read_count": 0,
        "hits": 0,
        "comments_count": 0,
        "word_count": 0,
        "created_at": "2019-08-24T14:15:22Z",
        "updated_at": "2019-08-24T14:15:22Z",
        "content_updated_at": "2019-08-24T14:15:22Z",
        "published_at": "2019-08-24T14:15:22Z",
        "first_published_at": "2019-08-24T14:15:22Z",
        "book": {
          "id": 0,
          "type": "string",
          "slug": "string",
          "name": "string",
          "user_id": 0,
          "description": "string",
          "creator_id": 0,
          "public": 0,
          "items_count": 0,
          "likes_count": 0,
          "watches_count": 0,
          "content_updated_at": "2019-08-24T14:15:22Z",
          "created_at": "2019-08-24T14:15:22Z",
          "updated_at": "2019-08-24T14:15:22Z",
          "user": {
            "id": 0,
            "type": "string",
            "login": "string",
            "name": "string",
            "avatar_url": "string",
            "books_count": 0,
            "public_books_count": 0,
            "followers_count": 0,
            "following_count": 0,
            "public": 0,
            "description": "string",
            "created_at": "2019-08-24T14:15:22Z",
            "updated_at": "2019-08-24T14:15:22Z"
          },
          "namespace": "string"
        },
        "user": {
          "id": 0,
          "type": "string",
          "login": "string",
          "name": "string",
          "avatar_url": "string",
          "books_count": 0,
          "public_books_count": 0,
          "followers_count": 0,
          "following_count": 0,
          "public": 0,
          "description": "string",
          "created_at": "2019-08-24T14:15:22Z",
          "updated_at": "2019-08-24T14:15:22Z"
        },
        "last_editor": {
          "id": 0,
          "type": "string",
          "login": "string",
          "name": "string",
          "avatar_url": "string",
          "books_count": 0,
          "public_books_count": 0,
          "followers_count": 0,
          "following_count": 0,
          "public": 0,
          "description": "string",
          "created_at": "2019-08-24T14:15:22Z",
          "updated_at": "2019-08-24T14:15:22Z"
        },
        "latest_version_id": 0,
        "tags": {
          "id": 0,
          "title": "string",
          "doc_id": 0,
          "book_id": 0,
          "user_id": 0,
          "created_at": "2019-08-24T14:15:22Z",
          "updated_at": "2019-08-24T14:15:22Z"
        }
      }
    ]
  }
  
  ```
</details>

#### Create a document.

- Method: `POST`
- Path: `/api/v2/repos/:book_id/docs`
- Auth: `X-Auth-Token`

Path Parameters:

| Parameter | Type | Required | Default | Description | 
| :-----:     | :-----:  |  :-----:  |  :-----:   | -----  |
|  book_id  | integer | Yes  | - | Knowledge base ID |

Body Schema:

| Field | Type | Required | Default | Description | 
| :-----:     | :-----:  |  :-----:  |  :-----:   | -----  |
|  slug  | string | Yes  | - | Path |
|  title  | string | No  | "no title" | Title |
|  public  | integer | No  | Inherit the openness of the knowledge base | Openness (`0`: private, `1`: public, `2`: Public within the enterprise) |
|  format  | string | Yes  | "markdown" | Content format (`markdown`:Markdown format, `html`:HTML standard format, `lake`: Yuque Lake format） |
|  body  | string | Yes  | - | Main text content |

Example request:

```http
POST /api/v2/repos/:book_id/docs HTTP/1.1
X-Auth-Token: authToken
Content-Type: application/json

{
  "slug": "string",
  "title": "无标题",
  "public": 0,
  "format": "markdown",
  "body": "string"
}

```

<details>
  <summary>Successful response</summary>

  ```json
  {
    "data": {
      "id": 0,
      "type": "Doc",
      "slug": "string",
      "title": "string",
      "description": "string",
      "cover": "string",
      "user_id": 0,
      "book_id": 0,
      "last_editor_id": 0,
      "format": "markdown",
      "body_draft": "string",
      "body": "string",
      "body_sheet": "string",
      "body_table": "string",
      "body_html": "string",
      "body_lake": "string",
      "public": 0,
      "status": "string",
      "likes_count": 0,
      "read_count": 0,
      "hits": 0,
      "comments_count": 0,
      "word_count": 0,
      "created_at": "2019-08-24T14:15:22Z",
      "updated_at": "2019-08-24T14:15:22Z",
      "content_updated_at": "2019-08-24T14:15:22Z",
      "published_at": "2019-08-24T14:15:22Z",
      "first_published_at": "2019-08-24T14:15:22Z",
      "book": {
        "id": 0,
        "type": "string",
        "slug": "string",
        "name": "string",
        "user_id": 0,
        "description": "string",
        "creator_id": 0,
        "public": 0,
        "items_count": 0,
        "likes_count": 0,
        "watches_count": 0,
        "content_updated_at": "2019-08-24T14:15:22Z",
        "created_at": "2019-08-24T14:15:22Z",
        "updated_at": "2019-08-24T14:15:22Z",
        "user": {
          "id": 0,
          "type": "string",
          "login": "string",
          "name": "string",
          "avatar_url": "string",
          "books_count": 0,
          "public_books_count": 0,
          "followers_count": 0,
          "following_count": 0,
          "public": 0,
          "description": "string",
          "created_at": "2019-08-24T14:15:22Z",
          "updated_at": "2019-08-24T14:15:22Z"
        },
        "namespace": "string"
      },
      "user": {
        "id": 0,
        "type": "string",
        "login": "string",
        "name": "string",
        "avatar_url": "string",
        "books_count": 0,
        "public_books_count": 0,
        "followers_count": 0,
        "following_count": 0,
        "public": 0,
        "description": "string",
        "created_at": "2019-08-24T14:15:22Z",
        "updated_at": "2019-08-24T14:15:22Z"
      },
      "creator": {
        "id": 0,
        "type": "string",
        "login": "string",
        "name": "string",
        "avatar_url": "string",
        "books_count": 0,
        "public_books_count": 0,
        "followers_count": 0,
        "following_count": 0,
        "public": 0,
        "description": "string",
        "created_at": "2019-08-24T14:15:22Z",
        "updated_at": "2019-08-24T14:15:22Z"
      },
      "tags": {
        "id": 0,
        "title": "string",
        "doc_id": 0,
        "book_id": 0,
        "user_id": 0,
        "created_at": "2019-08-24T14:15:22Z",
        "updated_at": "2019-08-24T14:15:22Z"
      },
      "latest_version_id": 0
    }
  }
  ```
</details>














### Repo

### Statistic

