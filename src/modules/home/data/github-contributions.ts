import type { Activity } from '@/common/components/customer-ui/contribution-graph';
import { GITHUB_USERNAME } from '../constants/site';

type GitHubContributionsResponse = {
	contributions: Activity[];
};

export async function getGitHubContributions() {
	const res = await fetch(
		`https://github-contributions-api.jogruber.de/v4/${GITHUB_USERNAME}?y=last`,
		{
			next: { revalidate: 86400 }, // Cache for 1 day (86400 seconds)
		}
	);
	const data = (await res.json()) as GitHubContributionsResponse;
	return data.contributions;
}
