I am very new to spring boot. 


Resources:

https://spring.io/guides/gs/spring-boot/
https://spring.io/guides/tutorials/bookmarks/
https://www.developer.com/java/data/how-to-manage-data-persistence-with-mongodb-and-jpa.html
https://www.djamware.com/post/59b606e280aca768e4d2b13b/spring-boot-mvc-data-and-mongodb-crud-java-web-application

https://start.spring.io/
https://www.djamware.com/post/5a0673c880aca7739224ee21/mean-stack-angular-5-crud-web-application-example
http://www.baeldung.com/exception-handling-for-rest-with-spring
http://www.springboottutorial.com/spring-boot-validation-for-rest-services


### TODO:
- error message handler to swallow error messages for pen testers
- build produces erroneous error because it depends on mongodb
- add "not null" validators

to build:
```
./mvnw package
 docker-compose build
```
to run:

```
docker-compose up
```

or 
```
./buildAndRun.sh
```
