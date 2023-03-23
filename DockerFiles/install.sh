. ./env.sh
set -x
cd ../
docker buildx build -t $TAG_PREFIX/$service .
cd -
set +x
