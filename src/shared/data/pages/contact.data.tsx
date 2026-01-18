import { IconClock, IconHeadset, IconHelp, IconMapPin, IconMessages, IconPhoneCall } from '@tabler/icons-react';
import { ContactProps, FeaturesProps } from '~/shared/types';
import { HeroProps } from '~/shared/types';

// Hero data on Contact page *******************
export const heroContact: HeroProps = {
  title: 'Kontaktirajte nas',
  subtitle: (
    <>
      <span className="hidden md:inline">{`Hvala vam što ste nas izabrali! Tu smo da odgovorimo na sva vaša pitanja i pomognemo vam oko iznajmljivanja PlayStation 5 konzole.`}</span>{' '}
      
    </>
  ),
  tagline: 'Kontakt strana',
};

// Contact data on Contact page *******************
export const contact2Contact: ContactProps = {
  id: 'contactTwo-on-contact',
  hasBackground: true,
  header: {
    title: 'Contact us',
    subtitle: (
      <>
        Please take a moment to fill out this form.{' '}
        <span className="hidden md:inline">{`So we can better understand your needs and get the process started smoothly.`}</span>
      </>
    ),
  },
  items: [
    {
      title: 'Our Address',
      description: ['1230 Maecenas Street Donec Road', 'New York, EEUU'],
      icon: IconMapPin,
    },
    {
      title: 'Contact',
      description: ['Mobile: +1 (123) 456-7890', 'Mail: tailnext@gmail.com'],
      icon: IconPhoneCall,
    },
    {
      title: 'Working hours',
      description: ['Monday - Friday: 08:00 - 17:00', 'Saturday & Sunday: 08:00 - 12:00'],
      icon: IconClock,
    },
  ],
  form: {
    title: 'Spremni da rezervišete?',
    inputs: [
      {
        type: 'text',
        label: 'Ime',
        name: 'name',
        autocomplete: 'off',
        placeholder: 'Ime',
      },
      {
        type: 'text',
        label: 'Prezime',
        name: 'lastName',
        autocomplete: 'off',
        placeholder: 'Prezime',
      },
      {
        type: 'email',
        label: 'Email adresa',
        name: 'email',
        autocomplete: 'on',
        placeholder: 'Email adresa',
      },
    ],
    radioBtns: {
      label: 'What is the reason for your contact?',
      radios: [
        {
          label: 'General inquiries',
        },
        {
          label: 'Technical help',
        },
        {
          label: 'Claims',
        },
        {
          label: 'Others',
        },
      ],
    },
    textarea: {
      cols: 30,
      rows: 5,
      label: 'How can we help you?',
      name: 'textarea',
      placeholder: 'Write your message...',
    },
    checkboxes: [
      {
        label: 'Have you read our privacy policy?',
        value: '',
      },
      {
        label: 'Do you want to receive monthly updates by email?',
        value: '',
      },
    ],
    btn: {
      title: 'Send Message',
      type: 'submit',
    },
  },
};

// Feature2 data on Contact page *******************
export const features2Contact: FeaturesProps = {
  columns: 3,
  header: {
    title: 'Podrška i informacije',
    subtitle: 'Brzo i jednostavno do dogovora',
  },
  items: [
    {
      title: 'Česta pitanja',
      description: 'Odgovori na najčešća pitanja',
      icon: IconHelp,
      callToAction: {
        text: 'Pogledaj FAQ',
        href: '/',
      },
    },
    {
      title: 'WhatsApp kontakt',
      description: 'Pišite nam direktno',
      icon: IconMessages,
      callToAction: {
        text: 'Piši na WhatsApp',
        href: 'https://wa.me/381612237516',
      },
    },
    {
      title: 'Pozovi nas',
      description: 'Dogovor u par minuta',
      icon: IconPhoneCall,
      callToAction: {
        text: 'Pozovi odmah',
        href: 'tel:0612237516',
      },
    },
  ],
};

