# firebase-tutorial
learn about firebase with me (혼자 구현 가능한 서비스!)
1. 개발환경
- mac
- chrome
- visual studio code
- npm
```bash
npm install --save firebase
```
# 웹 서비스
웹 서비스란?<br/>
HTML(정적인 페이지) +(>) CSS(스타일의 추가) +(>) JS(동적인 요소)를 가지고 있는 흐름으로 변화한 서비스
![웹 서비스](https://i.ibb.co/C0LFvk5/2021-03-21-11-57-50.png)

1. 웹 플랫폼 이란?
    - 크롬같은 브라우저
2. 웹 앱이란?
    - 네이버, 페이스북, 다음 처럼 앱처럼 보이는 서비스

### AWS vs IDC vs Cloud(firebase)비교
1. 1세대(IDC: Internet Data Center)
    - IDC-Hosting
    - Storage Machine - Application Machine(Web, Server) - Database Machine + server
2. 2세대(AWS: Amazon Web Server)
    - 장바구니 처럼 담아서 인스턴스를 띄우는 방식
    ![](https://i.ibb.co/YPFhsfK/2021-03-22-12-06-20.png)
3. 3세대(Cloud: Google Firebase)
    - 구글에서 관리해주는 모든 서비스! 오 갓...
    ![](https://i.ibb.co/K6Hs7gg/2021-03-22-12-11-29.png)


# Firebase Hosting
1. firebase project를 만들어 주세요.
![](https://i.ibb.co/d4PhtMd/2021-03-22-12-19-03.png)
2. 프로젝트 안에서 호스팅을 선택한 후 Firebase CLI를 설치해 주세요
```bash
npm install -g firebase-tools
firebase login
firebase init hosting
// public 폴더가 배포가 됩니다.
firebase deploy // 배포가 진행됩니다.
```
3. 무료 호스팅 성공!! 🌟_🌟
# Firebase Auth
# Firebase Real Time Database
# Firebase Storage
# Firebase Cloud Function
# ETC..