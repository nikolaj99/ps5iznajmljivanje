import { ComparisonProps, FAQsProps, PricingProps } from '~/shared/types';
import { HeroProps } from '~/shared/types';

// Hero data on Pricing page *******************
export const heroPricing: HeroProps = {
  title: 'Paketi i Cene',
  subtitle: (
    <>
      <span className="hidden md:inline">
        {`Pregled paketa iznajmljivanja PS5 konzola. Za iznajmljivanje na više dana, cena je po dogovoru – kontaktirajte nas i pronaćićemo najbolje rešenje za vas.`}
      </span>{' '}
      Izaberite paket koji vam najviše odgovara!
    </>
  ),
  tagline: 'Cenovnik',
};

// Pricing data on Pricing page *******************
export const pricingPricing: PricingProps = {
  id: 'pricing-on-pricing',
  hasBackground: true,
  header: {
    title: 'Naši paketi',
    subtitle: (
      <>
        Otkrijte fleksibilne cene za iznajmljivanje PlayStation 5 konzole.{' '}
        <span className="hidden md:inline">{`Bez obzira da li je u pitanju kućna zabava, turnir ili događaj, imamo paket za vas.`}</span>
      </>
    ),
  },
  prices: [
    {
      title: 'basic',
      subtitle: 'Optimalni izbor za PS5 na dan',
      price: 3000,
      period: '1 dan',
      items: [
        {
          description: 'Ponuda sadrži preko 300 igara — korisnik bira igre po želji.',
        },
        {
          description: 'Svi potrebni kablovi (HDMI, napajanje, punjači).',
        },
        {
          description: 'Sony PlayStation 5 konzola sa 2 džojstika.',
        },
        {
          description: 'Besplatna dostava i montaža u Beogradu.',
        },
      ],
      callToAction: {
        
        text: 'Iznajmi sad',
        href: '/contact',
      },
      hasRibbon: false,
    },
    {
      title: 'standard',
      subtitle: 'Optimalni izbor ako znate ekipu',
      price: 5000,
      period: '2 dana',
      items: [
        {
          description: 'Ponuda sadrži preko 300 igara — korisnik bira igre po želji.',
        },
        {
          description: 'Svi potrebni kablovi (HDMI, napajanje, punjači).',
        },
        {
          description: 'Sony PlayStation 5 konzola sa 2 džojstika.',
        },
        {
          description: 'Besplatna dostava i montaža u Beogradu.',
        },
      ],
      callToAction: {
       
        text: 'Iznajmi sad uz 1 dan GRATIS',
        href: '/contact',
      },
      hasRibbon: true,
      ribbonTitle: 'Popularno',
    },
    {
      title: 'premium',
      subtitle: 'Optimalni izbor za opasnu ekipu igrača',
      price: 6500,
      period: '3 dana',
      items: [
        {
          description: 'Ponuda sadrži preko 300 igara — korisnik bira igre po želji.',
        },
        {
          description: 'Svi potrebni kablovi (HDMI, napajanje, punjači).',
        },
        {
          description: 'Sony PlayStation 5 konzola sa 2 džojstika.',
        },
        {
          description: 'Besplatna dostava i montaža u Beogradu.',
        },
      ],
      callToAction: {
        
        text: 'Iznajmi sad uz 1 dan GRATIS',
        href: '/contact',
      },
      hasRibbon: false,
    },
  ],
};

// Comparison pricing data on Pricing page *******************
export const comparisonPricing: ComparisonProps = {
  id: 'comparison-on-pricing',
  hasBackground: false,
  header: {
    title: "What's available for each plan?",
    subtitle:
      'Morbi ut imperdiet ex. Nullam sed tincidunt purus. Donec finibus dui at odio dictum facilisis. Maecenas ut orci quis nisi congue maximus. Sed quis augue sapien.',
    // tagline: 'Comparison',
  },
  columns: [
    {
      title: 'compare plans',
      items: [
        {
          title: 'In vitae finibus',
        },
        {
          title: 'Cras sollicitudin',
        },
        {
          title: 'Suspendisse',
        },
        {
          title: 'Vestibulum ornare',
        },
        {
          title: 'In hendrerit',
        },
        {
          title: 'Ut pharetra',
        },
      ],
    },
    {
      title: 'basic',
      items: [
        {
          title: 'Bez dodatnih dana',
        },
        {
          title: 'Limited',
        },
        {
          title: '3000 RSD',
        },
        {
          title: false,
        },
        {
          title: false,
        },
        {
          title: true,
        },
      ],
      callToAction: {
        text: 'Get started',
        href: '/',
      },
    },
    {
      title: 'standard',
      items: [
        {
          title: '1 dan GRATIS',
        },
        {
          title: 'Unlimited',
        },
        {
          title: '5000 RSD',
        },
        {
          title: false,
        },
        {
          title: true,
        },
        {
          title: true,
        },
      ],
      callToAction: {
        text: 'Get started',
        href: '/',
      },
    },
    {
      title: 'premium',
      items: [
        {
          title: '1 dan GRATIS',
        },
        {
          title: 'Unlimited',
        },
        {
          title: '6500 RSD',
        },
        {
          title: true,
        },
        {
          title: true,
        },
        {
          title: true,
        },
      ],
      callToAction: {
        text: 'Get started',
        href: '/',
      },
    },
  ],
};

// FAQS3 data on Pricing page *******************
export const faqs3Pricing: FAQsProps = {
  id: 'faqsThree-on-pricing',
  hasBackground: true,
  header: {
    title: 'Pricing FAQs',
    subtitle: 'Do you have other questions?',
    // tagline: 'FAQS',
  },
  items: [
    {
      title: 'Which plan is best for me?',
      description: `Nunc mollis tempor quam, non fringilla elit sagittis in. Nullam vitae consectetur mi, a elementum arcu. Sed laoreet, ipsum et vehicula dignissim, leo orci pretium sem, ac condimentum tellus est quis ligula.`,
    },
    {
      title: 'What are my payment options?',
      description: `Interdum et malesuada fames ac ante ipsum primis in faucibus. Integer eleifend vestibulum nisl in iaculis. Mauris dictum ac purus vestibulum auctor. Praesent imperdiet lectus et massa faucibus, quis viverra massa rhoncus.`,
    },
    {
      title: 'How do I change my plan to a different one?',
      description: `Mauris vitae eros a dui varius luctus. Suspendisse rutrum, sapien nec blandit bibendum, justo sapien sollicitudin erat, id aliquam sapien purus quis leo. Aliquam vulputate vestibulum consectetur.`,
    },
    {
      title: 'What happen at the end of my free trial?',
      description: `Nunc dapibus lacinia ipsum ut elementum. Integer in pretium sapien. Ut pretium nisl mauris, ut rutrum justo condimentum id. Etiam aliquet, arcu at iaculis laoreet, est arcu egestas sapien, eget sollicitudin odio orci et nunc.`,
    },
    {
      title: 'Can I import data from other tools?',
      description: `Duis in maximus mauris, id eleifend mauris. Nam a fringilla arcu. Curabitur convallis, tellus non aliquet rhoncus, lacus massa auctor eros, in interdum lectus augue sed augue. Fusce tempor ex id faucibus efficitur.`,
    },
    {
      title: 'Can I cancel my plan at any time?',
      description: `Nullam imperdiet sapien tincidunt erat dapibus faucibus. Vestibulum a sem nec lorem imperdiet scelerisque non sed lacus. Ut pulvinar id diam vitae auctor. Nam tempus, neque et elementum consectetur, ex ipsum pulvinar risus, vel sodales ligula tortor eu eros.`,
    },
  ],
  callToAction: {
    text: 'Contact us',
    href: '/contact',
  },
};
