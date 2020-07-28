#!/bin/bash
docker build --tag branch-visits .
docker tag branch-visits gcr.io/datanauts/branch-visits
docker push gcr.io/datanauts/branch-visits
gcloud container clusters get-credentials cluster-1 --zone us-central1-c --project datanauts
kubectl apply -f ./branch-visits.yaml