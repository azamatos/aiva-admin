## Getting Started

### First, build the dockerfile with command:

```bash
docker build -t web-dashboard:web-dashboard ./
```

### After build create tag and push the image:
```bash
docker tag [image id] bv-registry.belet.me/web-dashboard:v1.0.0

docker push bv-registry.belet.me/web-dashboard:v1.0.0
```

### After build finished run the image:

```bash
docker run -p 7201:7201 -d web-dashboard
```
