# M223 Punchclock

Im Backend sind alle Möglichkeiten erstellt worden. Alle vier Entites können hinzugefügt, entfernt, bearbeitet und geholt werden. Jedoch wurden nur zwei davon Implementiert. Weiter unten finden Sie dazu mehr.


Unter diesem Link finden Sie das Repository.

https://github.com/Razolix/punchclock-quarkus

Folgende Schritte sind notwendig um die Applikation zu erstellen und zu starten: 
1. Stellen Sie sicher, dass OpenJDK 11 oder höher installiert und JAVA_HOME korrekt gesetzt ist.  
2. Installieren Sie (falls noch nicht vorhanden) Apache Maven 3.8.1 oder höher
3. Wechseln Sie auf der Kommandozeile in den Ordner dieser Appliation. 
`cd m223-helloworld-quarkus/`
4. Die Testdaten finden Sie unter import.sql. Die Datei ist im Resourcesordner.
5. Starten Sie die Applikation mit 
```shell script
./mvnw compile quarkus:dev
```

Folgende Dienste stehen während der Ausführung im Profil dev zur Verfügung:
Nicht verwendete Schnittstellen:
- Ticket
- Entry

REST-Schnittstelle der Applikation: 
http://localhost:8080/auth/...

REST-Schnittstelle der Applikation:
http://localhost:8080/entries/...

REST-Schnittstelle der Applikation:
http://localhost:8080/projects/...

REST-Schnittstelle der Applikation:
http://localhost:8080/employees/...

REST-Schnittstelle der Applikation:
http://localhost:8080/tickets/...

Swagger API: http://localhost:8080/q/swagger-ui/
