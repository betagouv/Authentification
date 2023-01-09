@startuml

actor browser as "Navigateur"
participant audioconf as "Votre Service"
participant tchap_id as "Authentification"
participant email_server as "Serveur email"
participant tchap_server as "Serveur Tchap"
autonumber

activate audioconf
browser -> audioconf : Clique pour se connecter
audioconf --> browser : Redirige vers Authentification
tchap_id -> browser : Affiche un formulaire de connexion
activate tchap_id
browser -> tchap_id : Soumet le formulaire conetnant l'email
activate tchap_id #DarkSalmon
tchap_id -> tchap_server : Vérifie l'adresse mail ?
tchap_id <-- tchap_server : ok
tchap_id -> tchap_server : envoie l'otp  (dm tchap)
tchap_id -> email_server : envoie l'otp (email)
browser <-- tchap_id : Affiche le formulaire de login via otp
browser -> tchap_id : envoie l'otp
tchap_id -> tchap_id : valide l'otp
tchap_id -> tchap_id : Utilisateur authentifié
deactivate tchap_id #DarkSalmon
browser <-- tchap_id : redirigé avec un paramètre "code"
browser -> audioconf : redirigé vers le service avec un paramètre "code"
audioconf -> tchap_id : échange du code "code"
audioconf <-- tchap_id : return "access_token"
deactivate tchap_id
audioconf -> audioconf : Création d'une session avec l'"access_token"
audioconf -> browser : Affichage d'une page avec la session
deactivate audioconf
browser -> browser : mettre la session en cookie
@enduml