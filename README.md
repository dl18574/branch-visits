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
curl  'http://localhost:3000/visits?date=2020-07-28'
```

OR there is a postman collection

* branch-visits.postman_collection.json

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

#Deploying to container registry

```shell script
$ docker build --tag branch-visits .
$ docker tag branch-visits gcr.io/datanauts/branch-visits
$ docker push gcr.io/datanauts/branch-visits
```

#Deploying to gcp

```shell script
$ gcloud container clusters get-credentials cluster-1 --zone us-central1-c --project datanauts
$ kubectl get services
$ kubectl apply -f ./branch-visits.yaml
$ kubectl get services
```

#Debug deployment
```shell script
$  kubectl get pods
# /bin/ash as using alpine linux otherwise use /bin/bash
$  kubectl exec --stdin --tty branch-visits-deployment-bb7c5565-k4tcj -- /bin/ash
```

#Other cmds
```shell script
$ kubectl get deployment  branch-visits-deployment
$ kubectl rollout restart branch-visits-deployment
```