import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function TarifsPage() {
  return (
    <div className="container mx-auto py-12 px-4">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Notre politique tarifaire</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Une solution transparente et adaptée à vos besoins
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        <Card className="border-2">
          <CardHeader>
            <CardTitle className="text-2xl">Sans frais initiaux</CardTitle>
            <CardDescription>
              Démarrage sans contrainte financière
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-start">
              <div className="bg-primary/10 p-2 rounded-full mr-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-primary"
                >
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              </div>
              <div>
                <h3 className="font-medium">Frais d&apos;installation</h3>
                <p className="text-muted-foreground">
                  0€ - Aucun coût initial pour la mise en place
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="bg-primary/10 p-2 rounded-full mr-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-primary"
                >
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              </div>
              <div>
                <h3 className="font-medium">Support technique</h3>
                <p className="text-muted-foreground">
                  0€ - Assistance comprise dans votre abonnement
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-2">
          <CardHeader>
            <CardTitle className="text-2xl">Tarification claire</CardTitle>
            <CardDescription>
              Sans paiement à l&apos;usage imprévisible
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-start">
              <div className="bg-primary/10 p-2 rounded-full mr-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-primary"
                >
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              </div>
              <div>
                <h3 className="font-medium">Facturation adaptée</h3>
                <p className="text-muted-foreground">
                  Basée uniquement sur le nombre de domaines et le volume de
                  visites
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="bg-primary/10 p-2 rounded-full mr-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-primary"
                >
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              </div>
              <div>
                <h3 className="font-medium">Environnement de test gratuit</h3>
                <p className="text-muted-foreground">
                  Domaines de test inclus sans frais supplémentaires
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="mt-12 bg-muted p-8 rounded-lg max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold mb-4">
          Modalités d&apos;abonnement flexibles
        </h2>
        <p className="mb-6">
          Nous proposons des contrats mensuels ou annuels pour répondre à vos
          préférences budgétaires. Optez pour un engagement annuel et bénéficiez
          d&apos;une remise avantageuse sur le coût total.
        </p>

        <div className="bg-background p-6 rounded-md">
          <h3 className="font-medium text-xl mb-2">
            Comment fonctionne notre tarification ?
          </h3>
          <p className="text-muted-foreground mb-4">
            Le montant de votre abonnement est déterminé par deux facteurs
            principaux :
          </p>
          <ul className="space-y-2">
            <li className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="mr-2 text-primary"
              >
                <circle cx="12" cy="12" r="10"></circle>
                <polyline points="12 6 12 12 16 14"></polyline>
              </svg>
              <span>
                Le nombre de noms de domaine complets (FQDN) associés à votre
                service
              </span>
            </li>
            <li className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="mr-2 text-primary"
              >
                <circle cx="12" cy="12" r="10"></circle>
                <polyline points="12 6 12 12 16 14"></polyline>
              </svg>
              <span>Le volume de pages vues (PV) enregistré sur vos sites</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
