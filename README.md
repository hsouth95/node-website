# node-website
## About
A personal website to showcase my professional skills. Can be found at [harrisonsouth.co.uk](http://harrisonsouth.co.uk)

## Technical Details
* Hosted on a Digital Ocean droplet
* Uses a Docker Image to build and contain the website
 * Hosted image can be found at [harrisonsouth/node-website](https://hub.docker.com/r/harrisonsouth/node-website/)
 * Partial continuous build occurs when a push to master occurs, this will rebuild the image on the docker hub
  * This then requires a manual build on the live server (will stay this way until I learn more about secure webhooks)
* Use node.js server-side
* Use express.js for routing purposes
* Use Jade for html rendering
* Use Stylus for CSS pre-processing
