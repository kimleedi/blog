---
templateKey: blog-post
title: Let’s Encrypt 인증서 설치 및 HTTPS 적용
date: 2021-04-27T02:11:51.662Z
description: certbot를 통한 간단한 HTTPS 적용법
tags:
  - 서버
  - 개발
---
```shell
$ sudo snap install --classic certbot
```
```shell
$ sudo certbot --nginx
```
```shell
$ sudo certbot renew --dry-run
```