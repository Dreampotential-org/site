# pull the official base image
FROM node:alpine
# set working direction
WORKDIR /app
# install application dependencies
COPY package.json ./
COPY yarn.lock ./
# add app
COPY . ./

# RUN npm i -g yarn
RUN npm i -g serve
RUN yarn
RUN yarn build


# PORTS
EXPOSE 3377

# start app
CMD ["serve", "-l", "3377", "-s" ,"build"]