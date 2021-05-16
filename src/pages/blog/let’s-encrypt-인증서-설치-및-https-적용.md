---
templateKey: blog-post
title: Let’s Encrypt 인증서 설치 및 HTTPS 적용
date: 2021-04-27T02:11:51.662Z
description: certbot를 통한 간단한 HTTPS 적용법
tags:
  - 서버
  - 개발
---
회사 일로 급하게 서버 환경설정을 하면서 certbot을 통해 간단하게 HTTPS를 적용하고 이 경험을 남겨두고자 글을 작성한다.

## 준비사항

1. 최신의 Nginx가 설치된 환경
2. snap 패키지 매니저가 설치된 환경

## 실전

snap 패키지 매니저를 이용하여 certbot을 설치한다.

```shell
snap install --classic certbot
```

certbot이 설치되었다면 certbot을 통해 간단하게 Nginx에 적용을 한다.

```shell
certbot --nginx
```

certbot이 자동으로 인증서 갱신을 할 수 있는지 확인한다.

```shell
certbot renew --dry-run
```

## HTTP/2와 IPv6 적용

certbot을 통해 HTTPS를 적용하고 나면 Nginx의 사이트 설정파일에는 아래와 같이 되어있을 것이다.

```nginx
server {
        server_name example.leedi.me;
  
        listen 443 ssl;
```

이것을 우리는 아래와 같이 수정하여 HTTP/2와 IPv6를 적용한다.

```nginx
server {
        server_name example.leedi.me;
  
        listen 443 ssl http2;
        listen [::]:443 ssl http2;
```

이러한 과정이 완료되었다면 아래의 명령어를 통해 Nginx 설정에 문제가 없는 것을 테스트 후 반영될 수 있게한다. 

```shell
nginx -t
service nginx reload
```