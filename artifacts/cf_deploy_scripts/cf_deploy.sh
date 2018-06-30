#!/bin/bash

# Global variables
# BLUEMIX_HOST=your_host.mybluemix.net

# Update host names
#sed -i -e 's/localhost/'"$BLUEMIX_HOST"'/g' ./app.js
#sed -i -e 's/localhost:10010/'"$BLUEMIX_HOST"'/g' ./api/swagger/swagger.yaml

# Deployment
cf api https://api.ng.bluemix.net
cf login -u "<username>" -p "<password>" -o "<org>" -s "<space>"
cf push

# Rollback host names
#sed -i -e 's/'"$BLUEMIX_HOST"'/localhost/g' ./app.js
#sed -i -e 's/'"$BLUEMIX_HOST"'/localhost:10010/g' ./api/swagger/swagger.yaml

# Remove junk files created
#rm -f ./app.js-e
#rm -f ./api/swagger/swagger.yaml-e
