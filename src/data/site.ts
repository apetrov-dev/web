export interface SocialLink {
  label: string;
  handle: string;
  href: string;
  icon: 'github' | 'linkedin' | 'x' | 'email';
}

export interface Project {
  name: string;
  description: string;
  href: string;
  tags: string[];
}

export const site = {
  domain: 'apetrov.dev',
  name: 'Andrey Petrov',
  title: 'Andrey Petrov — Developer',
  description: 'Hi, my name is Andrey Petrov, and I am a developer.',
  bio: 'Hi, my name is Andrey Petrov, and I am a developer.',
  githubProfile: 'https://github.com/apetrov-dev',
  socials: [
    {
      label: 'GitHub',
      handle: 'github.com/apetrov-dev',
      href: 'https://github.com/apetrov-dev',
      icon: 'github',
    },
    // Add more links whenever you're ready:
    // {
    //   label: 'LinkedIn',
    //   handle: 'linkedin.com/in/your-handle',
    //   href: 'https://linkedin.com/in/your-handle',
    //   icon: 'linkedin',
    // },
    // {
    //   label: 'Email',
    //   handle: 'hi@apetrov.dev',
    //   href: 'mailto:hi@apetrov.dev',
    //   icon: 'email',
    // },
  ] satisfies SocialLink[],
  projects: [
    {
      name: 'Conch',
      description:
        'Distributed process supervisor and coordination wrapper (leader election, semaphores, cron) built on etcd v3 for zero-dependency Linux process orchestration.',
      href: 'https://github.com/apetrov-dev/conch',
      tags: ['Go', 'etcd', 'Linux'],
    },
    {
      name: 'Pagurus',
      description:
        'At most one copy of a container workload across an Incus cluster without shared storage: etcd-lease election (Conch), fencing before failover, and a CI lab with audited drills.',
      href: 'https://github.com/apetrov-dev/pagurus',
      tags: ['Go', 'Incus', 'etcd', 'HA'],
    },
  ] satisfies Project[],
};
