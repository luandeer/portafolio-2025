import React from 'react';

const Footer = () => {
	return (
		<footer className="w-content max-w-full mv-0 mx-auto py-8 text-text-3 text-white">
			<div className="text-fluid--2 grid place-items-center gap-y-2 w-full">
				{/* Social icons */}
				<div className="flex flex-wrap justify-center">
					<a
						className="text-text-2 w-10 h-10 grid place-items-center rounded-md hover:bg-surface-4"
						href="/rss/rss.xml"
						rel="noopener noreferrer"
						target="_blank"
						title="Grab my RSS Feed!"
					>
						<svg
							fill="currentColor"
							className="w-5 h-5"
							viewBox="0 0 20 20"
							role="img"
						>
							<title>Rss icon</title>
							<path d="M3.75 3a.75.75 0 00-.75.75v.5c0 .414.336.75.75.75H4c6.075 0 11 4.925 11 11v.25c0 .414.336.75.75.75h.5a.75.75 0 00.75-.75V16C17 8.82 11.18 3 4 3h-.25z" />
							<path d="M3 8.75A.75.75 0 013.75 8H4a8 8 0 018 8v.25a.75.75 0 01-.75.75h-.5a.75.75 0 01-.75-.75V16a6 6 0 00-6-6h-.25A.75.75 0 013 9.25v-.5zM7 15a2 2 0 11-4 0 2 2 0 014 0z" />
						</svg>
					</a>
					<a
						className="text-text-2 w-10 h-10 grid place-items-center rounded-md hover:bg-surface-4"
						href="https://twitter.com/intent/follow?screen_name=jh3yy"
						rel="noopener noreferrer"
						target="_blank"
						title="Come follow me on Twitter!"
					>
						<svg
							fill="currentColor"
							className="w-5 h-5"
							viewBox="0 0 24 24"
							role="img"
						>
							<title>Twitter icon</title>
							<path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"></path>
						</svg>
					</a>
					<a
						className="text-text-2 w-10 h-10 grid place-items-center rounded-md hover:bg-surface-4"
						href="https://front-end.social/@jhey"
						rel="noopener noreferrer"
						target="_blank"
						title="Come follow me on Mastodon!"
					>
						<svg
							fill="currentColor"
							role="img"
							className="w-5 h-5"
							viewBox="0 0 24 24"
							xmlns="http://www.w3.org/2000/svg"
						>
							<title>Mastodon icon</title>
							<path d="M23.268 5.313c-.35-2.578-2.617-4.61-5.304-5.004C17.51.242 15.792 0 11.813 0h-.03c-3.98 0-4.835.242-5.288.309C3.882.692 1.496 2.518.917 5.127.64 6.412.61 7.837.661 9.143c.074 1.874.088 3.745.26 5.611.118 1.24.325 2.47.62 3.68.55 2.237 2.777 4.098 4.96 4.857 2.336.792 4.849.923 7.256.38.265-.061.527-.132.786-.213.585-.184 1.27-.39 1.774-.753a.057.057 0 0 0 .023-.043v-1.809a.052.052 0 0 0-.02-.041.053.053 0 0 0-.046-.01 20.282 20.282 0 0 1-4.709.545c-2.73 0-3.463-1.284-3.674-1.818a5.593 5.593 0 0 1-.319-1.433.053.053 0 0 1 .066-.054c1.517.363 3.072.546 4.632.546.376 0 .75 0 1.125-.01 1.57-.044 3.224-.124 4.768-.422.038-.008.077-.015.11-.024 2.435-.464 4.753-1.92 4.989-5.604.008-.145.03-1.52.03-1.67.002-.512.167-3.63-.024-5.545zm-3.748 9.195h-2.561V8.29c0-1.309-.55-1.976-1.67-1.976-1.23 0-1.846.79-1.846 2.35v3.403h-2.546V8.663c0-1.56-.617-2.35-1.848-2.35-1.112 0-1.668.668-1.67 1.977v6.218H4.822V8.102c0-1.31.337-2.35 1.011-3.12.696-.77 1.608-1.164 2.74-1.164 1.311 0 2.302.5 2.962 1.498l.638 1.06.638-1.06c.66-.999 1.65-1.498 2.96-1.498 1.13 0 2.043.395 2.74 1.164.675.77 1.012 1.81 1.012 3.12z" />
						</svg>
					</a>
					<a
						className="text-text-2 w-10 h-10 grid place-items-center rounded-md hover:bg-surface-4"
						href="https://instagram.com/jh3yyyy"
						rel="noopener noreferrer"
						target="_blank"
						title="Come follow me on Instagram!"
					>
						<svg
							fill="currentColor"
							role="img"
							className="w-5 h-5"
							viewBox="0 0 24 24"
							xmlns="http://www.w3.org/2000/svg"
						>
							<title>Instagram icon</title>
							<path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z" />
						</svg>
					</a>
					<a
						className="text-text-2 w-10 h-10 grid place-items-center rounded-md hover:bg-surface-4"
						href="https://codepen.io/jh3y"
						rel="noopener noreferrer"
						target="_blank"
						title="Check out my CodePen"
					>
						<svg
							fill="currentColor"
							className="w-5 h-5"
							viewBox="18 20 82 78"
							role="img"
						>
							<title>Codepen icon</title>
							<path d="M97.071,48.281c-0.007-0.047-0.019-0.092-0.026-0.139c-0.016-0.09-0.032-0.18-0.056-0.267 c-0.014-0.053-0.033-0.104-0.05-0.154c-0.025-0.078-0.051-0.156-0.082-0.232c-0.021-0.053-0.047-0.105-0.071-0.156 c-0.033-0.072-0.068-0.142-0.108-0.21c-0.029-0.051-0.061-0.1-0.091-0.148c-0.043-0.066-0.087-0.131-0.135-0.193 c-0.035-0.047-0.072-0.093-0.109-0.138c-0.051-0.059-0.104-0.117-0.159-0.172c-0.042-0.043-0.083-0.086-0.127-0.125 c-0.059-0.053-0.119-0.104-0.18-0.152c-0.048-0.037-0.095-0.074-0.145-0.109c-0.019-0.012-0.035-0.027-0.053-0.039L61.769,23.438 c-1.071-0.714-2.466-0.714-3.537,0L24.321,46.045c-0.018,0.012-0.034,0.027-0.053,0.039c-0.05,0.035-0.097,0.072-0.144,0.109 c-0.062,0.049-0.123,0.1-0.181,0.152c-0.045,0.039-0.086,0.082-0.128,0.125c-0.055,0.055-0.108,0.113-0.158,0.172 c-0.038,0.045-0.075,0.091-0.11,0.138c-0.047,0.062-0.092,0.127-0.134,0.193c-0.032,0.049-0.062,0.098-0.092,0.148 c-0.039,0.068-0.074,0.139-0.108,0.21c-0.024,0.051-0.049,0.104-0.071,0.156c-0.031,0.076-0.057,0.154-0.082,0.232 c-0.017,0.051-0.035,0.102-0.05,0.154c-0.023,0.087-0.039,0.177-0.056,0.267c-0.008,0.047-0.02,0.092-0.025,0.139 c-0.019,0.137-0.029,0.275-0.029,0.416v22.607c0,0.141,0.011,0.279,0.029,0.418c0.006,0.045,0.018,0.092,0.025,0.137 c0.017,0.09,0.032,0.18,0.056,0.268c0.015,0.053,0.033,0.104,0.05,0.154c0.025,0.078,0.051,0.155,0.082,0.233 c0.021,0.053,0.047,0.104,0.071,0.154c0.034,0.072,0.069,0.143,0.108,0.213c0.029,0.049,0.06,0.098,0.092,0.146 c0.042,0.066,0.087,0.131,0.134,0.193c0.035,0.049,0.072,0.094,0.11,0.139c0.05,0.059,0.103,0.117,0.158,0.172 c0.042,0.043,0.083,0.086,0.128,0.124c0.058,0.053,0.118,0.104,0.181,0.152c0.047,0.037,0.094,0.074,0.144,0.109 c0.019,0.012,0.035,0.027,0.053,0.039l33.911,22.607c0.536,0.357,1.152,0.537,1.769,0.537c0.616,0,1.233-0.18,1.768-0.537 L95.68,73.956c0.018-0.012,0.034-0.027,0.053-0.039c0.05-0.035,0.097-0.072,0.145-0.109c0.061-0.049,0.121-0.1,0.18-0.152 c0.044-0.038,0.085-0.081,0.127-0.124c0.056-0.055,0.108-0.113,0.159-0.172c0.037-0.045,0.074-0.09,0.109-0.139 c0.048-0.062,0.092-0.127,0.135-0.193c0.03-0.049,0.062-0.098,0.091-0.146c0.04-0.07,0.075-0.141,0.108-0.213 c0.024-0.051,0.05-0.102,0.071-0.154c0.031-0.078,0.057-0.155,0.082-0.233c0.017-0.051,0.036-0.102,0.05-0.154 c0.023-0.088,0.04-0.178,0.056-0.268c0.008-0.045,0.02-0.092,0.026-0.137c0.018-0.139,0.028-0.277,0.028-0.418V48.697 C97.1,48.557,97.089,48.418,97.071,48.281z M63.188,32.048L88.17,48.701l-11.158,7.465l-13.823-9.247V32.048z M56.812,32.048 v14.871l-13.822,9.247l-11.159-7.465L56.812,32.048z M29.278,54.665L37.255,60l-7.977,5.335V54.665z M56.812,87.953L31.831,71.3 l11.159-7.463l13.822,9.245V87.953z M60,67.543L48.723,60L60,52.458L71.276,60L60,67.543z M63.188,87.953V73.082l13.823-9.245 L88.17,71.3L63.188,87.953z M90.723,65.336L82.746,60l7.977-5.335V65.336z"></path>
						</svg>
					</a>
					<a
						className="text-text-2 w-10 h-10 grid place-items-center rounded-md hover:bg-surface-4"
						href="https://twitch.tv/jh3yy"
						rel="noopener noreferrer"
						target="_blank"
						title="Check out my latest live stream"
					>
						<svg
							fill="currentColor"
							className="w-5 h-5"
							viewBox="0 0 24 24"
							role="img"
						>
							<title>Twitch icon</title>
							<path d="M11.571 4.714h1.715v5.143H11.57zm4.715 0H18v5.143h-1.714zM6 0L1.714 4.286v15.428h5.143V24l4.286-4.286h3.428L22.286 12V0zm14.571 11.143l-3.428 3.428h-3.429l-3 3v-3H6.857V1.714h13.714Z"></path>
						</svg>
					</a>
					<a
						className="text-text-2 w-10 h-10 grid place-items-center rounded-md hover:bg-surface-4"
						href="https://github.com/jh3y"
						rel="noopener noreferrer"
						target="_blank"
						title="See what I'm making on Github"
					>
						<svg
							fill="currentColor"
							className="w-5 h-5"
							viewBox="0 0 24 24"
							role="img"
						>
							<title>Github icon</title>
							<path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"></path>
						</svg>
					</a>
				</div>
				<div>
					&copy;{' '}
					<span className="text-sm text-gray-300">
						{`${new Date().getFullYear()}`} Telmo Alexander. Reservados todos
						los derechos.
					</span>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
