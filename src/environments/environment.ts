// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  baseUrl: 'http://api.weupdateyou.com/api.php'
};

// http://api.weupdateyou.com/api.php?app=user&action=create&username=hejhejhej&password=hejhejhej&cc=SE
// http://api.weupdateyou.com/api.php?app=user&action=getsecret&username=hejhejhej&password=hejhejhej
// http://api.weupdateyou.com/api.php?app=user&action=verify_truecaller&token=payload = eyJyZXF1ZXN0Tm9uY2UiOiI5MGZiOWQ1Zi05MWFkLTQwM2MtYjM4Ni02MTEzM2E5ZTY4ODMiLCJyZXF1ZXN0VGltZSI6MTUxMDE2MjI5NywicGhvbmVOdW1iZXIiOiIrNDY3MzY2OTM5ODkiLCJmaXJzdE5hbWUiOiJOYW1pIiwibGFzdE5hbWUiOiJaYXJyaW5naGFsYW0iLCJnZW5kZXIiOiJNIiwic3RyZWV0IjoiS3VuZ3NnYXRhbiAxNSIsImNpdHkiOiJTdG9ja2hvbG0sIFN3ZWRlbiIsInppcGNvZGUiOiIxMTEgNDMiLCJjb3VudHJ5Q29kZSI6InNlIiwiZmFjZWJvb2tJZCI6Ijg1MTIwMDExMiIsInR3aXR0ZXJJZCI6IkBaYXJyaW5naGFsYW0iLCJlbWFpbCI6Im5hbWkuemFycmluZ2hhbGFtQHRydWVjYWxsZXIuY29tIiwidXJsIjoidHJ1ZWNhbGxlci5jb20iLCJhdmF0YXJVcmwiOiJodHRwczovL3MzLWV1LXdlc3QtMS5hbWF6b25hd3MuY29tL2ltYWdlczEudHJ1ZWNhbGxlci5jb20vbXl2aWV3LzEvYjQ0MTU1M2UzYWMyZTIxNThmMTk0NjdkYTE0YTU1NGQvMyIsImlzVHJ1ZU5hbWUiOnRydWUsImlzQW1iYXNzYWRvciI6dHJ1ZSwiY29tcGFueU5hbWUiOiJUcnVlY2FsbGVyIiwiam9iVGl0bGUiOiJDU08ifQ== signature = EO2knaWWOlRnEaHxd1tyhne0y0l5vmyzKkJ0PLp4frRPqd7Aj3JFy2aAXWugfsERe1aALdw27qPu1lPyo1dPKwVvWJyEbLPJtYTXjxwLYXBpfm5aYFtvMiu4Q2aILNi0ytSv1KI+VLopPM4yyZmqbEmgZN1JPiEfLx8yaL4cGbU= signatureAlgorithm = SHA512withRSA