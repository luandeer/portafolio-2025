import { GithubIcon } from '@/common/icons/GithubIcon';
import { InstagramIcon } from '@/common/icons/InstagramIcon';
import { LinkedInIcon } from '@/common/icons/LinkedInIcon';
import { TwitterIcon } from '@/common/icons/TwitterIcon';

const Footer = () => {
  return (
    <footer className="mx-auto flex w-full max-w-[740px] flex-col items-center justify-between py-8 text-white sm:flex-row-reverse">
      <div className="flex flex-wrap justify-center gap-1">
        <a
          className="text-text-2 hover:bg-surface-4 grid h-10 w-10 place-items-center rounded-md"
          href="https://x.com/alexanderpreg"
          target="_blank"
          rel="noopener noreferrer"
        >
          <TwitterIcon size={20} />
        </a>
        <a
          className="text-text-2 hover:bg-surface-4 grid h-10 w-10 place-items-center rounded-md"
          href="https://www.instagram.com/alexanderpreg/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <InstagramIcon size={20} />
        </a>
        <a
          className="text-text-2 hover:bg-surface-4 grid h-10 w-10 place-items-center rounded-md"
          href="https://www.linkedin.com/in/telmoalexander/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LinkedInIcon size={20} />
        </a>
        <a
          className="text-text-2 hover:bg-surface-4 grid h-10 w-10 place-items-center rounded-md"
          href="https://github.com/luandeer"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GithubIcon size={20} />
        </a>
      </div>
      <span className="text-sm text-gray-300">&copy;{new Date().getFullYear()} alexanderpreg</span>
    </footer>
  );
};

export default Footer;
