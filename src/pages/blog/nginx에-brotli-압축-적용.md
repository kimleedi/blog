---
templateKey: blog-post
title: Nginx에 Brotli 압축 적용
date: 2021-04-27T02:30:37.719Z
description: Nginx에 Brotli 압축 적용을 하며…
tags:
  - 서버
  - 개발
---
```shell
$ nginx -v
nginx version: nginx/1.18.0 (Ubuntu)
$ wget -qO - http://nginx.org/download/nginx-1.18.0.tar.gz | tar zxfv -
```

```shell
$ git clone https://github.com/google/ngx_brotli.git
$ cd ngx_brotli
$ git submodule update --init
$ cd ~/nginx-1.18.0
$ ./configure --add-dynamic-module=~/ngx_brotli --with-compat
$ make modules
```

```shell
$ cp ~/nginx-1.18.0/objs/ngx_http_brotli_filter_module.so /usr/lib/nginx/modules/
$ cp ~/nginx-1.18.0/objs/ngx_http_brotli_static_module.so /usr/lib/nginx/modules/
$ vi /etc/nginx/nginx.conf
```



```nginx
load_module modules/ngx_http_brotli_filter_module.so;
load_module modules/ngx_http_brotli_static_module.so;
```

```nginx
brotli on;
brotli_comp_level 6;
brotli_types text/plain text/css application/javascript application/x-javascript text/xml application/xml application/xml+rss text/javascript image/x-icon image/vnd.microsoft.icon image/bmp image/svg+xml;
brotli_static on;
```

```shell
$ nginx -t
nginx: the configuration file /etc/nginx/nginx.conf syntax is ok
nginx: configuration file /etc/nginx/nginx.conf test is successful
$ service nginx restart
```