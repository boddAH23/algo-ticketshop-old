# Algorand Ticketshop

* Veranstalter*in erstellt Tickets, die sich User kaufen können. Der Preis wird beim erstellen fest definiert. Ein User soll Tickets möglichst nicht für einen höheren Preis weiterverkaufen können.

## Aufgabenbeschreibung
* Seite/Programm bei der man Tokens/NFTs aus der Sicht der Veranstalter erstellen kann (und evtl. verwalten)
  * Eine Seite bei der ein Veranstalter ein SmarContract erstellen kann um seine Tokens/NFTs für einen definierten Preis zu verkaufen
    *  Paramater sind: Name des Assets, Anzahl der Assets, Preis des Assets
* Ein Seite für User um in der Lage zu sein den Token/das NFT zu kaufen
  * Webelement wo sich der SmartContract(konfiguriertbar mit Adresse des SmartContrats) zum kaufen (evtl. verwalten des Assets) einbinden lässt
  * opt-in soll (automatisch) für den User beim kauf gemacht werden

## bestehende Probleme/Offene Punkte
* wie liest das Webelement des Preis des Tokens/NFTS aus dem SmartContract des Veranstalters aus
* Was passiert wen es nicht mehr genug Assets gibt? Brauchen wir dafür eine Validierung? Muss der Veranstalter darauf hingewiesen werden?
* Modellierung zum Verhindern des weiterverkaufs. Zwei Optionen:
  * Am Eingang soll der Veranstalter Prüfen durch wenn der User das Asset erhalten hat
  * Asset Freezen und nur die ClawBack Adresse darf den Tausch durchführen https://developer.algorand.org/docs/features/asa/#mutable-asset-parameters
