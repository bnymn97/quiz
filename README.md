Brain Brawls - Statische Quiz-Anwendung Deployment mit Terraform

Brain Brawls ist eine statische Quiz-Anwendung, die als Web-App konzipiert wurde. Die Benutzeroberfläche basiert auf HTML, CSS und JavaScript und stellt einen interaktiven Quiz bereit, bei dem die Nutzer Fragen beantworten und direkt Feedback erhalten.
Da die Anwendung statisch ist, wird sie über einen Webserver (Nginx) ausgeliefert – es gibt keinen serverseitigen Anwendungslogik-Code.

Die Bereitstellung der Anwendung erfolgt mithilfe von Terraform, das:
- Eine eigene VPC mit einem öffentlichen Subnetz erstellt.
- Ein Internet-Gateway und passende Routing-Regeln konfiguriert.
- Eine EC2-Instanz startet, auf der Nginx automatisch installiert wird.
- Über ein `user_data`-Skript das Git-Repository mit der statischen Anwendung klont und die Dateien in das Nginx-Webverzeichnis kopiert.

Voraussetzungen

- Ein AWS-Konto
- Terraform (Version 1.0.0 oder höher)
- Ein AWS Key-Pair (achten Sie darauf, dass der in der Terraform-Konfiguration angegebene `key_name` übereinstimmt)

Infrastruktur

Die bereitgestellte Infrastruktur umfasst folgende Komponenten:

- **VPC**: Eine virtuelle private Cloud, in der die gesamte Infrastruktur isoliert ist.
- **Öffentliches Subnetz**: Ein Subnetz, das Instanzen mit öffentlichen IP-Adressen versorgt.
- **Internet-Gateway & Routing**: Ein Internet-Gateway und eine Routing-Tabelle, die den Internetzugriff ermöglichen.
- **Security Group**: Eine Sicherheitsgruppe, die den Zugriff über SSH (Port 22) und HTTP (Port 80) erlaubt.
- **EC2-Instanz**: Eine t2.micro Instanz (Ubuntu), die beim Start mit einem `user_data`-Skript initialisiert wird. Dieses Skript installiert Nginx, klont das Git-Repository mit der statischen Quiz-Anwendung und kopiert die Dateien in das Webverzeichnis `/var/www/html`.

Bereitstellung

1. Repository klonen  
   Klonen Sie dieses Repository auf Ihren lokalen Rechner:
   ```bash
   git clone https://github.com/bnymn97/quiz.git
   cd quiz
2. terraform init
3. terraform apply
4. public ip aus der konsole im browser öffnen
