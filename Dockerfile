FROM node:18-slim
# open this line in china
# RUN echo "registry=https://registry.npmmirror.com/"> ~/.npmrc  
RUN npm install -g @mapbox/spritezero glob minimist
COPY bin/spritezero /usr/local/lib
RUN ln -s /usr/local/lib/spritezero  /usr/local/bin/

ENTRYPOINT [ "spritezero" ]