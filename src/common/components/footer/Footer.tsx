import { GithubIcon } from '@/common/icons/GithubIcon';
import { InstagramIcon } from '@/common/icons/InstagramIcon';
import { LinkedInIcon } from '@/common/icons/LinkedInIcon';
import { TwitterIcon } from '@/common/icons/TwitterIcon';

const Footer = () => {
  return (
    <footer className="w-content mv-0 text-text-3 mx-auto max-w-full py-8 text-white">
      <div className="text-fluid--2 grid w-full place-items-center gap-y-2">
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
        <div>
          &copy;{' '}
          <span className="text-sm text-gray-300">{new Date().getFullYear()} telmoalexander.</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
