## Brain Brawls – Deployment einer Statischen Quiz-Anwendung mit Terraform
Brain Brawls ist eine interaktive, statische Web-App zum Lösen von Quizfragen. Die Anwendung basiert vollständig auf HTML, CSS und JavaScript.
Sie wird über einen Nginx-Webserver ausgeliefert und vollständig mithilfe von Terraform in der AWS Cloud bereitgestellt.

## 🔧 Voraussetzungen

Ein aktives AWS-Konto

Terraform (Version ≥ 1.0.0)

Ein AWS Key-Pair (achte darauf, dass der key_name in der Terraform-Konfiguration korrekt gesetzt ist)

## 🌐 Infrastrukturübersicht
Die Bereitstellung erfolgt vollständig über Terraform und umfasst folgende Komponenten:

- VPC (Virtual Private Cloud): Isolierter Netzwerkbereich

- Öffentliches Subnetz: Mit automatischer Zuweisung öffentlicher IP-Adressen

- Internet-Gateway & Routing-Tabelle: Für ausgehenden Internetzugang

- Security Group: Öffnet Ports 22 (SSH) und 80 (HTTP)

- EC2-Instanz (t2.micro):

- Betriebssystem: Ubuntu

- Installiert automatisch Nginx

- Klont das GitHub-Repository mit der Anwendung

- Kopiert die Dateien nach /var/www/html für die Auslieferung

## 🚀 Deployment-Anleitung
Repository klonen
- git clone https://github.com/bnymn97/quiz.git
- cd quiz

Terraform initialisieren
- terraform init
  
Deployment starten
- terraform apply
  
Zugriff auf die Anwendung

- Nach erfolgreichem Deployment zeigt Terraform die öffentliche IP-Adresse der EC2-Instanz an. Öffne diese IP-Adresse im Browser

## 📂 Verzeichnisstruktur
```text
quiz/
├── main.tf                # Terraform-Konfiguration
├── variables.tf           # Eingabevariablen
├── outputs.tf             # Wichtige Ausgaben (z.B. öffentliche IP)
└── ...
```

