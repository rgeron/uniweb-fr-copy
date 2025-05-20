export default function NotreEngagementPage() {
  const PillarCard = (props: {
    icon: React.ReactNode;
    title: string;
    description: string;
  }) => (
    <div className="flex flex-col items-center p-6 border rounded-lg shadow-lg bg-card text-card-foreground h-full">
      <div className="mb-4 text-primary">{props.icon}</div>
      <h3 className="text-2xl font-semibold mb-2 text-center">{props.title}</h3>
      <p className="text-muted-foreground text-center">{props.description}</p>
    </div>
  );

  const CommitmentCard = (props: {
    title: string;
    children: React.ReactNode;
    className?: string;
  }) => (
    <div
      className={`p-6 border rounded-lg shadow-lg bg-card text-card-foreground h-full ${props.className}`}
    >
      <h3 className="text-2xl font-semibold mb-3 text-card-foreground">
        {props.title}
      </h3>
      {props.children}
    </div>
  );

  return (
    <div className="container mx-auto px-4 py-12 sm:py-16 lg:py-20">
      <header className="text-center mb-16 lg:mb-20">
        <h1 className="text-4xl sm:text-5xl font-bold text-primary mb-4 tracking-tight">
          Notre Engagement
        </h1>
        <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
          Parce que les actions doivent être placées avant les mots, nous avons
          à cœur depuis nos débuts de nous engager concrètement autour d&apos;un
          socle de trois valeurs fondamentales.
        </p>
      </header>

      <section className="mb-16 lg:mb-20">
        <h2 className="text-3xl sm:text-4xl font-semibold text-center mb-12 text-foreground">
          Nos Valeurs Fondatrices
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <PillarCard
            icon={
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary text-3xl font-bold">
                H
              </div>
            }
            title="L'Humain"
            description="Placer l'humain au cœur de nos préoccupations, en favorisant l'inclusion, la diversité et le bien-être pour un web accessible à tous."
          />
          <PillarCard
            icon={
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary text-3xl font-bold">
                I
              </div>
            }
            title="L'Innovation"
            description="Innover constamment pour un web plus accessible et performant, en développant des solutions technologiques au service de tous les utilisateurs."
          />
          <PillarCard
            icon={
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary text-3xl font-bold">
                E
              </div>
            }
            title="L'Environnement"
            description="Adopter une démarche d'éco-conception rigoureuse pour minimiser notre empreinte écologique et promouvoir un numérique durable."
          />
        </div>
      </section>

      <section className="mb-16 lg:mb-20">
        <h2 className="text-3xl sm:text-4xl font-semibold text-center mb-12 text-foreground">
          Nos Engagements Concrets
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <CommitmentCard title="Accessibilité & RSE">
            <p className="mb-3 text-muted-foreground">
              Notre plugin Uniweb est un levier majeur pour les engagements
              sociétaux des entreprises. Il s&apos;intègre parfaitement à leur
              feuille de route RSE digitale en rendant leurs plateformes
              accessibles à tous, conformément aux standards WCAG 2.1.
            </p>
            <p className="text-sm text-muted-foreground">
              Nous sommes fiers de collaborer avec des acteurs engagés tels que
              Mandarine Academy pour amplifier notre impact positif.
            </p>
          </CommitmentCard>

          <CommitmentCard title="Éco-conception Numérique">
            <p className="mb-3 text-muted-foreground">
              Nous nous engageons activement pour un numérique plus responsable
              et durable à travers :
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-1.5">
              <li>
                Un script optimisé, léger et performant pour une empreinte
                carbone réduite.
              </li>
              <li>
                L&apos;utilisation de réseaux de diffusion de contenu (CDN) bas
                carbone.
              </li>
              <li>
                L&apos;hébergement de toutes nos infrastructures en France,
                favorisant les circuits courts.
              </li>
            </ul>
          </CommitmentCard>

          <CommitmentCard
            title="Mesure d'Impact Transparent"
            className="md:col-span-2"
          >
            <p className="text-muted-foreground">
              La transparence est clé. Nous fournissons à nos clients un tableau
              de bord intuitif et détaillé, indiquant en temps réel le nombre de
              sessions inclusives générées. Cet outil permet de visualiser
              concrètement l&apos;amélioration de l&apos;accessibilité et
              l&apos;impact positif de Uniweb.
            </p>
          </CommitmentCard>
        </div>
      </section>

      <section className="bg-muted/50 py-16 lg:py-20 rounded-lg">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl font-semibold text-center mb-12 text-foreground">
            Reconnaissances & Certifications
          </h2>
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-lg mb-6 text-muted-foreground">
              L&apos;engagement de Uniweb envers des pratiques commerciales
              éthiques et responsables est au cœur de notre identité. Nous
              sommes fiers des reconnaissances obtenues qui témoignent de notre
              dévouement.
            </p>
            <div className="space-y-4 mb-8">
              <p className="text-lg text-muted-foreground">
                Grâce au travail de nos équipes, Uniweb a obtenu
                l&apos;exigeante certification{" "}
                <span className="font-semibold text-primary">B Corp</span>. Ce
                label mondialement reconnu atteste de nos engagements stricts en
                matière de responsabilité sociétale et environnementale.
              </p>
              <p className="text-lg text-muted-foreground">
                Uniweb est également signataire de la{" "}
                <span className="font-semibold text-primary">
                  Charte de la Diversité
                </span>
                , affirmant notre engagement pour un environnement de travail et
                des solutions inclusives.
              </p>
              <p className="text-lg text-muted-foreground">
                De plus, Uniweb est lauréate de plusieurs programmes prestigieux
                récompensant les entreprises qui s&apos;engagent activement pour
                un monde meilleur, plus juste et plus durable.
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
              <div className="inline-flex items-center rounded-full border px-3 py-1.5 text-xs sm:text-sm font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-green-600 text-primary-foreground hover:bg-green-700/90">
                B Corp Certifié
              </div>
              <div className="inline-flex items-center rounded-full border px-3 py-1.5 text-xs sm:text-sm font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-blue-600 text-primary-foreground hover:bg-blue-700/90">
                Signataire Charte Diversité
              </div>
              <div className="inline-flex items-center rounded-full border px-3 py-1.5 text-xs sm:text-sm font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-teal-600 text-primary-foreground hover:bg-teal-700/90">
                Entreprise à Impact Positif
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
