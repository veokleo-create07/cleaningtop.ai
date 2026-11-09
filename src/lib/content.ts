import type {Locale} from './siteConfig';
type Pair={de:string;en:string}; export const tx=(v:Pair,l:Locale)=>v[l];
export const services=[
 {id:'office',title:{de:'Büroreinigung',en:'Office cleaning'},description:{de:'Arbeitsplätze, Besprechungsräume, Küchen und Sanitärbereiche – abgestimmt auf Ihren Betrieb.',en:'Workspaces, meeting rooms, kitchens and washrooms, aligned with your operations.'}},
 {id:'practice',title:{de:'Praxisreinigung',en:'Practice cleaning'},description:{de:'Reinigungsabläufe für Praxisräume werden nach Nutzung und Anforderungen gemeinsam abgestimmt.',en:'Cleaning routines for practice spaces are agreed around their use and requirements.'}},
 {id:'holiday',title:{de:'Ferienwohnungsreinigung',en:'Holiday apartment cleaning'},description:{de:'Für Gästewechsel, Präsentation und individuell vereinbarte Übergaben.',en:'For guest changeovers, presentation and individually agreed handovers.'}},
 {id:'commercial',title:{de:'Gewerbe- & Unterhaltsreinigung',en:'Commercial & maintenance cleaning'},description:{de:'Regelmäßige Reinigung professionell genutzter Immobilien nach vereinbartem Umfang.',en:'Regular cleaning of professionally used properties to an agreed scope.'}},
 {id:'special',title:{de:'Grund- & Sonderreinigung',en:'Deep & specialist cleaning'},description:{de:'Intensivere Reinigungsaufgaben besprechen wir passend zu Objekt und Bedarf.',en:'We discuss more intensive cleaning tasks according to the property and its needs.'}}
];
export const projects=[
 {title:{de:'Gewerbliche Bodenflächen',en:'Commercial floor areas'},body:{de:'Illustrative Einblicke in gepflegte Bodenflächen gemeinschaftlich genutzter Gebäude.',en:'Illustrative views of maintained floor areas in shared commercial properties.'}},
 {title:{de:'Ferienwohnung',en:'Holiday apartment'},body:{de:'Illustratives Beispiel eines für ankommende Gäste vorbereiteten Schlafbereichs.',en:'Illustrative example of a bedroom prepared for arriving guests.'}},
 {title:{de:'Innenliegendes Treppenhaus',en:'Indoor stairwell'},body:{de:'Illustratives Beispiel für gereinigte Treppenstufen und Gemeinschaftsflächen.',en:'Illustrative example of cleaned stair treads and shared areas.'}},
 {title:{de:'Außentreppe',en:'Exterior stairs'},body:{de:'Illustratives Beispiel für gepflegte Außentreppen und Zugangsbereiche.',en:'Illustrative example of maintained exterior stairs and access areas.'}}
];
export const faqs=[
 [{de:'Welche Objekte reinigt TopClean?',en:'Which properties does TopClean clean?'},{de:'Wir bearbeiten Anfragen für Büros, Praxisräume, Ferienunterkünfte und weitere gewerblich genutzte Immobilien. Ob Ihr Objekt passt, klären wir gern direkt.',en:'We consider inquiries for offices, practice spaces, holiday accommodation and other commercial properties. Contact us to discuss your property.'}],
 [{de:'Bietet TopClean regelmäßige Reinigung an?',en:'Does TopClean offer regular cleaning?'},{de:'Der gewünschte Reinigungsrhythmus wird individuell abgestimmt. Teilen Sie uns einfach Ihre Anforderungen mit.',en:'Cleaning frequency is agreed individually. Tell us what you need.'}],
 [{de:'Wie erhalte ich ein Angebot?',en:'How do I get a quote?'},{de:'Senden Sie uns Angaben zum Objekt, Standort und gewünschten Leistungsumfang über das Formular oder kontaktieren Sie uns direkt.',en:'Send us the property, location and desired scope through the form or contact us directly.'}],
 [{de:'Kann ich eine einmalige Reinigung anfragen?',en:'Can I request a one-off cleaning?'},{de:'Ja, schildern Sie uns Ihren Bedarf. Ob und in welchem Zeitrahmen eine Umsetzung möglich ist, klären wir individuell.',en:'Yes, describe your needs. We will discuss whether and when it can be arranged.'}],
 [{de:'Ist eine Besichtigung notwendig?',en:'Is a site visit needed?'},{de:'Das hängt vom Objekt und Umfang ab. Wir teilen Ihnen mit, welche Informationen für ein Angebot erforderlich sind.',en:'That depends on the property and scope. We will tell you what information a quote needs.'}],
 [{de:'In welchen Gebieten ist TopClean tätig?',en:'Which areas does TopClean serve?'},{de:'TopClean ist in Lübeck ansässig. Ob Ihr Standort im Einsatzgebiet liegt, bestätigen wir Ihnen auf Anfrage.',en:'TopClean is based in Lübeck. We can confirm whether your location is covered when you inquire.'}]
] as const;
