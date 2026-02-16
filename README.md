# Assignment 02 — AWS CDN Deployment
## Descripción

Aplicación web desarrollada con **Vite + React + TypeScript**.
El despliegue se realiza automáticamente mediante **GitHub Actions** hacia **AWS S3**, y es distribuida globalmente usando **CloudFront CDN**.

Las credenciales sensibles son gestionadas de forma segura mediante **Doppler**.

## Arquitectura del Proyecto
Vite → Build → GitHub Actions → S3 → CloudFront CDN

## URL Pública del CDN
http://bucket-cdn-aws.s3-website-us-east-1.amazonaws.com
https://d4lkl9wc4ls1w.cloudfront.net/
## ⚙️ Tecnologías Utilizadas

- Vite
- React + TypeScript
- AWS S3
- AWS CloudFront
- GitHub Actions
- Doppler (Secret Management)

## Evidencia de Configuración
las Capturas de pantalla se encuetran en la carpeta Screenshots

## Evidencia de Desarrollo

El desarrollo fue realizado en la rama:
assignment-02
Se realizaron múltiples commits incrementales para demostrar evolución del proyecto.

## Flujo CI/CD

El pipeline realiza automáticamente:

1. Instalación de dependencias
2. Build del proyecto
3. Sincronización del contenido `dist/` hacia S3
4. Invalidación de caché en CloudFront
