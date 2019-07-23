# use a node base image
FROM node:7-onbuild

# set maintainer
LABEL maintainer "venkatnag324@gmail.com"

# set a health check
HEALTHCHECK --interval=5s \
            --timeout=5s \
            CMD curl -f http://18.234.190.162:8002 || exit 1

# tell docker what port to expose
EXPOSE 8002
