# Kubernetes Deployment Guide

This directory contains Kubernetes manifests for deploying the landing site application to a Kubernetes cluster.

## Files Overview

- `namespace.yaml` - Creates the `backend` namespace
- `configmap.yaml` - Configuration data for the application
- `deployment.yaml` - Deployment configuration with 3 replicas
- `service.yaml` - NodePort service exposing the app on port 30082
- `ingress.yaml` - Ingress configuration (optional)
- `hpa.yaml` - Horizontal Pod Autoscaler (optional)
- `apply-all.sh` - Script to deploy all manifests

## Deployment Steps

### 1. Build and Push Docker Image

```bash
# Build the Docker image
docker build -t landing-site:latest .

# Tag for your registry (replace with your registry)
docker tag landing-site:latest your-registry/landing-site:latest

# Push to registry
docker push your-registry/landing-site:latest
```

### 2. Update Image in Deployment

Update the image name in `deployment.yaml` if using a custom registry:

```yaml
spec:
  containers:
  - name: landing-site
    image: your-registry/landing-site:latest  # Update this line
```

### 3. Deploy to Kubernetes

```bash
# Navigate to kubernetes directory
cd kubernetes

# Apply all manifests
./apply-all.sh

# Or apply individually
kubectl apply -f namespace.yaml
kubectl apply -f configmap.yaml
kubectl apply -f deployment.yaml
kubectl apply -f service.yaml
kubectl apply -f ingress.yaml    # Optional
kubectl apply -f hpa.yaml        # Optional
```

### 4. Access the Application

The application will be available at:
- **NodePort**: `http://<node-ip>:30082`
- **Ingress** (if configured): `http://landing-site.local`

## Verification Commands

```bash
# Check namespace
kubectl get namespaces

# Check all resources in backend namespace
kubectl get all -n backend

# Check pod logs
kubectl logs -n backend -l app=landing-site

# Check service endpoints
kubectl get endpoints -n backend

# Port forward for local testing
kubectl port-forward -n backend service/landing-site-service 8080:80
```

## Configuration

### Environment Variables

Add environment variables in `configmap.yaml`:

```yaml
data:
  REACT_APP_API_URL: "http://api.example.com"
  REACT_APP_ENV: "production"
```

Then reference them in `deployment.yaml`:

```yaml
spec:
  containers:
  - name: landing-site
    envFrom:
    - configMapRef:
        name: landing-site-config
```

### Resource Limits

Current resource configuration:
- **Requests**: 50m CPU, 64Mi memory
- **Limits**: 100m CPU, 128Mi memory

Adjust in `deployment.yaml` based on your needs.

### Scaling

- **Manual scaling**: `kubectl scale deployment landing-site-deployment --replicas=5 -n backend`
- **Auto scaling**: HPA is configured to scale between 2-10 replicas based on CPU/memory usage

## Troubleshooting

### Common Issues

1. **Image Pull Errors**
   ```bash
   kubectl describe pod -n backend -l app=landing-site
   ```

2. **Service Not Accessible**
   ```bash
   kubectl get svc -n backend
   kubectl describe svc landing-site-service -n backend
   ```

3. **Pod Not Starting**
   ```bash
   kubectl logs -n backend -l app=landing-site
   kubectl describe pod -n backend -l app=landing-site
   ```

### Health Checks

The deployment includes:
- **Liveness probe**: Checks if container is running
- **Readiness probe**: Checks if container is ready to serve traffic

## Clean Up

```bash
# Delete all resources
kubectl delete -f .

# Or delete namespace (removes everything)
kubectl delete namespace backend
```