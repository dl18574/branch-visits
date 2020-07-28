# branch-visits

to start the project locally

To run locally

```shell script
$ cd <project-install>
$ npm start 
```

To run in docker

```shell script
$ cd <project-install>
$ docker build -t branch-visits . 
$ docker run -p 3000:3000  branch-visits             
```

Testing the service

```shell script
curl --location --request GET 'localhost:3000/visits?date=2020-07-28'
```

You should get the following response

```javascript
[
    {
        "visitId": 1,
        "userId": 1,
        "branchId": 1,
        "date": "2020-07-28T00:00:00.000Z"
    },
    {
        "visitId": 2,
        "userId": 1,
        "branchId": 2,
        "date": "2020-07-28T00:00:00.000Z"
    }
]
```

