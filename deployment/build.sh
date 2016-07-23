IMAGE="harrisonsouth/node-website"
docker ps | grep $IMAGE | awk '{print $1}' | xargs docker stop
docker pull $IMAGE
docker run -d -p 80:80 $IMAGE