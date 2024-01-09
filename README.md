
![Logo](https://uc62db8b35edb19c1e027bfb466b.dl.dropboxusercontent.com/cd/0/inline/CLDB8nvcCS8DgVIYAwakDfktgS7kV4sAFAPGGUqxMVmC4ptOPsavgMbpvEv31pmGAV9VWrLXeAr4ZcEGXU0PGHXKbZ6f1vtXvShbaezjsd6R0vXYcPpyGOA8OQBP780BuFK5nYWABZdCm_X46RcYkQOs/file#)
# Tannat Backend

This is a backend maded with Node-ExpressJs. It works with sessions protected by JWT authentications for users with administration privileges.


## Run Locally

Clone the project

```bash
  git clone https://github.com/NimionSoftware/tannat-backend.git
```

Go to the project directory

```bash
  cd tannat-backend
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm start
```


## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`PORT` - Port for the backend

`DB_URL` - URL for your Database

`MONGO_POOLSIZE` - Poolsize for mongoDB

`SALT_ROUNDS` - SaltRounds for jwt

`TOKEN_SECRET` - Secret for jwt


## API Reference

```
  POST /api/auth
```
Request Body
| Property | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `username`      | `string` | **Required**. |
| `password`      | `string` | **Required**. |

The Auth method (if succeeded) will give back a token which must be used in the header (token: THE_TOKEN) of the respective requests to have access to some of the features of the API.

### Update Admin

```
  PUT /api/admin/${id}
```
Request Body
| Property | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `_id`      | `string` | **Required**. |
| `username`      | `string` | **Optional**. |
| `password`      | `string` | **Optional**. |

#### Get all products

```
  GET /api/product
```

#### Get product

```
  GET /api/product/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `_id`      | `string` | **Required**. Id of product to fetch |


#### Post product (RESTRICTED)

```
  POST /api/product/
```
Request Body
| Property | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `title`      | `string` |**Required** Title for the product card |
| `description`      | `string` |**Required** Brief description for the product card  |
| `sizes`      | `[string]` |**Required** An array with the sizes letters (L, M, XL)|
| `image`      | `string` |**Required** DropBox link of the product image |
| `price`      | `string` |**Required** Price for the product |
| `category`      | `string` |**Required** Porduct category (Shirts, pants, etc)|
| `gender`      | `string` |**Required** Product Gender |
| `season`      | `string` |**Required** Product Season (winter, summer, etc) |

#### Update product (RESTRICTED)

```
  PUT /api/product/${id}
```
Request Body
| Property | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `title`      | `string` |**Optional** Title for the product card |
| `description`      | `string` |**Optional** Brief description for the product card  |
| `sizes`      | `[string]` |**Optional** An array with the sizes letters (L, M, XL)|
| `image`      | `string` |**Optional** DropBox link of the product image |
| `price`      | `string` |**Optional** Price for the product |
| `category`      | `string` |**Optional** Porduct category (Shirts, pants, etc)|
| `gender`      | `string` |**Optional** Product Gender |
| `season`      | `string` |**Optional** Product Season (winter, summer, etc) |


#### Delete product (RESTRICTED)

```
  DEL /api/product/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `_id`      | `string` | **Required**. Id of product to fetch |

## Authors

- [@Cristian Lotorto](https://github.com/CristianLotorto)
- [@Yhanahi Rosenthal](https://github.com/YhanahiRosenthal)

