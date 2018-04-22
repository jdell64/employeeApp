FROM openjdk:8-alpine

# Required for starting application up.
RUN apk update && apk add bash

RUN mkdir -p /opt/app
ENV PROJECT_HOME /opt/app
#/Users/jeff/dev/java/employeeApp/target/employeeApp-0.0.1-SNAPSHOT.jar
COPY target/employeeApp-0.0.1-SNAPSHOT.jar $PROJECT_HOME/employee-app-demo.jar

WORKDIR $PROJECT_HOME
EXPOSE 8080

CMD ["java", "-Dspring.data.mongodb.uri=mongodb://employee-app-db:27017/employee-app","-Djava.security.egd=file:/dev/./urandom","-jar","./employee-app-demo.jar"]