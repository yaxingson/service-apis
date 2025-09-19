# Service APIs ![](https://img.shields.io/codecov/c/github/vuejs/vue/dev.svg?sanitize=true) ![](https://img.shields.io/npm/l/vue.svg?sanitize=true)

## APIs

### Yuque

BaseURL: https://www.yuque.com

| Method | Path | Auth | Path Parameters | Query Parameters | Body | Description |
| :-----:  | :-----: | :-----: | :-----: | :-----: | :-----:  | :-----: |
| GET   | /api/v2/user | `X-Auth-Token` | -  | - | - | Obtain the user details of the current Token |
| GET   | /api/v2/repos/`:book_id`/docs | `X-Auth-Token` | book_id | offset<br >limit<br >optional_properties| - | Obtain the list of documents in the knowledge base |
| POST  | /api/v2/repos/`:book_id`/docs  | `X-Auth-Token` | book_id | -  | slug<br > title<br >public<br >format<br >body | Create a document |
| PUT  |  /api/v2/repos/`:book_id`/docs/`:id`  | `X-Auth-Token` | book_id<br >id | -  | slug<br > title<br >public<br >format<br >body | Update a document |
| DELETE  |  /api/v2/repos/`:book_id`/docs/`:id`  | `X-Auth-Token` | book_id<br >id | -  | - | Delete a document |

### Dingtalk

BaseURL: https://api.dingtalk.com

| Method | Path | Auth | Path Parameters | Query Parameters | Body | Description |
| :-----:  | :-----: | :-----: | :-----: | :-----: | :-----:  | :-----: |
| POST  | /v1.0/conference/videoConferences | `x-acs-dingtalk-access-token` | - | - | userId<br >confTitle<br >inviteUserIds<br >inviteCaller | Create a video conference |



### Douyin

BaseURL: https://www.yuque.com

### Bilibili

BaseURL: https://www.yuque.com

### Music.163

BaseURL: https://developer.music.163.com






## Contribute


## License
