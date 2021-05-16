---
templateKey: blog-post
title: Nginx에 Brotli 압축 적용
date: 2021-04-27T02:30:37.719Z
description: Nginx에 Brotli 압축 적용을 하며…
tags:
  - 서버
  - 개발
---
회사 일로 급하게 서버 환경설정을 하고 최적화를 하는 과정에서 Nginx에 Brotli 압축을 적용하고 그 과정을 남겨두고자 글을 작성한다.

## 준비사항
1. 최신의 Nginx가 설치된 환경 (글 작성 당시 시점 최신 버전 : 1.18.0)

## 실전
우선 설치된 Nginx의 버전을 확인 후 그에 맞는 Nginx의 소스코드를 다운로드한다.

```shell{outputLines: 2}
nginx -v
nginx version: nginx/1.18.0 (Ubuntu)
wget -qO - http://nginx.org/download/nginx-1.18.0.tar.gz | tar zxfv -
```

Brotli의 소스코드를 다운로드 후 Nginx 모듈로 컴파일이 될 수 있도록한다.

```shell
git clone https://github.com/google/ngx_brotli.git
cd ngx_brotli
git submodule update --init
cd ~/nginx-1.18.0
./configure --add-dynamic-module=~/ngx_brotli --with-compat
make modules
```

컴파일이 완료된 Brotli 모듈을 Nginx의 모듈이 저장된 폴더로 복사 후 Nginx 설정파일을 수정한다.

```shell
$ cp ~/nginx-1.18.0/objs/ngx_http_brotli_filter_module.so /usr/lib/nginx/modules/
$ cp ~/nginx-1.18.0/objs/ngx_http_brotli_static_module.so /usr/lib/nginx/modules/
$ vi /etc/nginx/nginx.conf
```

Nginx의 설정파일에서 아래와 같은 구문을 추가하여 Brotli 모듈을 불러올 수 있도록한다.

```nginx
load_module modules/ngx_http_brotli_filter_module.so;
load_module modules/ngx_http_brotli_static_module.so;
```

또한 설정파일에 아래와 같은 구문을 추가하여 Brotli 압축을 통해 정적 콘텐츠가 serving 될 수 있도록 한다. 

```nginx
brotli on;
brotli_comp_level 6;
brotli_types text/plain text/css application/javascript application/x-javascript text/xml application/xml application/xml+rss text/javascript image/x-icon image/vnd.microsoft.icon image/bmp image/svg+xml;
brotli_static on;
```

Nginx 설정이 올바르게 되었는지 테스트 후 반영한다.

```shell{outputLines: 2-3}
nginx -t
nginx: the configuration file /etc/nginx/nginx.conf syntax is ok
nginx: configuration file /etc/nginx/nginx.conf test is successful
service nginx restart
```