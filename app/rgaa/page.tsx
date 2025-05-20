export default function RgaaPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-center">
        Obligation d&apos;Accessibilité Numérique (RGAA)
      </h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">
          Qui est concerné par l&apos;obligation de mise en accessibilité RGAA ?
        </h2>
        <p className="mb-4">Les organismes concernés sont :</p>
        <ul className="list-disc list-inside mb-4 space-y-2">
          <li>Les services de l&apos;État</li>
          <li>Les collectivités territoriales</li>
          <li>Les établissements publics</li>
          <li>
            Les organisations légataires d&apos;une mission de service public
          </li>
          <li>
            Les entreprises dont le chiffre d&apos;affaires en France est
            supérieur à 250 millions d&apos;euros
          </li>
          <li>Les organisations d&apos;intérêt général</li>
        </ul>
        <p className="mb-4">
          À partir du <strong>28 juin 2025</strong>, date de l&apos;entrée en
          vigueur de la directive européenne sur l&apos;accessibilité des
          produits et services,{" "}
          <strong>
            toutes les entreprises privées évoluant dans les secteurs suivants
            seront concernées par l&apos;obligation d&apos;accessibilité
            numérique
          </strong>{" "}
          (sauf celles de moins de 10 personnes ou dont le chiffre
          d&apos;affaires ou le bilan n&apos;excède pas 2 millions d&apos;euros)
          :
        </p>
        <ul className="list-disc list-inside space-y-2">
          <li>Les services de téléphonie et équipements connexes</li>
          <li>Les services d&apos;accès aux médias audiovisuels</li>
          <li>Les services liés au transport</li>
          <li>Les services bancaires aux particuliers</li>
          <li>Les livres numériques et les logiciels spécialisés</li>
          <li>Le commerce électronique</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">RGAA & WCAG</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="border p-4 rounded-lg">
            <h3 className="text-xl font-medium mb-2">RGAA 4.1</h3>
            <p className="mb-2">
              106 critères applicables aux sites publics et aux entreprises &gt;
              250 M€ CA.
            </p>
            <p className="text-sm text-gray-600">
              Sources: design.numerique.gouv.fr, accessibilite.numerique.gouv.fr
            </p>
          </div>
          <div className="border p-4 rounded-lg">
            <h3 className="text-xl font-medium mb-2">WCAG 2.2</h3>
            <p className="mb-2">
              9 nouveaux critères (Focus Not Obscured, Target Size…) depuis
              sept. 2023.
            </p>
            <p className="text-sm text-gray-600">Source: W3C</p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">
          Directive Européenne 2019/882 (EAA)
        </h2>
        <div className="border p-4 rounded-lg">
          <p className="mb-2">
            Obligation d&apos;accessibilité pour e-commerce, transport, banques
            à partir du <strong>28 juin 2025</strong>.
          </p>
          <p className="text-sm text-gray-600">Source: EUR-Lex</p>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">
          Notre Solution d&apos;Accessibilité
        </h2>
        <p className="text-lg">
          Notre moteur applique automatiquement ARIA, gère le focus
          visuel/gestuel, et insère les attributs nécessaires pour passer les
          niveaux A et AA sans effort.
        </p>
      </section>
    </div>
  );
}
