#!/bin/bash

# Script to apply all Kubernetes manifests

echo "Applying Kubernetes manifests..."

# Apply namespace first
kubectl apply -f namespace.yaml

# Apply configmap
kubectl apply -f configmap.yaml

# Apply deployment
kubectl apply -f deployment.yaml

# Apply service
kubectl apply -f service.yaml

# Apply ingress (optional)
kubectl apply -f ingress.yaml

# Apply HPA (optional)
kubectl apply -f hpa.yaml

echo "All manifests applied successfully!"
echo "Landing Site will be available on NodePort 30082"
echo "To access: http://<node-ip>:30082"