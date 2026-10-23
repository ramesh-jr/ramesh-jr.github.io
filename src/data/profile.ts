// Everything about the person that appears on more than one page lives here.
// Keep this file public-safe: it ships to a public repo and a public site.

export const profile = {
  name: 'Ramesh Kumar Subramanian',
  shortName: 'Ramesh Subramanian',
  title: 'Senior Frontend Engineer',
  location: 'Bengaluru, India',
  email: 'srk3895@gmail.com',
  linkedin: 'https://www.linkedin.com/in/ramesh-kumar-subramanian',
  github: 'https://github.com/ramesh-jr',
  // Drives "N years" in the intro so it never goes stale.
  careerStart: new Date('2020-08-01'),
  openToWork: true,
  // Set to a public-safe PDF path (e.g. '/resume.pdf') once one exists in
  // public/. While null, the resume button and palette entry are not rendered.
  resumeUrl: null as string | null,
};

const WORDS = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten'];

export function yearsOfExperience(now: Date = new Date()): string {
  const years = Math.floor((now.getTime() - profile.careerStart.getTime()) / (365.25 * 24 * 3600 * 1000));
  return WORDS[years] ?? String(years);
}

export const nav = [
  { href: '/#work', label: 'Work' },
  { href: '/#experience', label: 'Experience' },
  { href: '/#skills', label: 'Skills' },
  { href: '/#contact', label: 'Contact' },
];
