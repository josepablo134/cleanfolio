. ./env.sh
public_port=8080
private_port=80

CONTAINER_NAME="$TAG_PREFIX"_"$service"
set -x
docker stop $CONTAINER_NAME
docker rm $CONTAINER_NAME
docker run -d --restart unless-stopped --name $CONTAINER_NAME \
    -p "$public_port":"$private_port" \
    $TAG_PREFIX/$service:latest
set +x
