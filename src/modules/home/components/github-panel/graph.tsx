'use client';

import dayjs from 'dayjs';
import { LoaderIcon } from 'lucide-react';
import { use } from 'react';

import type { Activity } from '@/common/components/customer-ui/contribution-graph';
import {
	ContributionGraph,
	ContributionGraphBlock,
	ContributionGraphCalendar,
	ContributionGraphFooter,
	ContributionGraphLegend,
	ContributionGraphTotalCount,
} from '@/common/components/customer-ui/contribution-graph';
import {
	Tooltip,
	TooltipContent,
	TooltipTrigger,
} from '@/common/components/ui/tooltip';
import { GITHUB_USERNAME } from '../../constants/site';

export function GitHubContributionGraph({
	contributions,
}: {
	contributions: Promise<Activity[]>;
}) {
	const data = use(contributions);

	return (
		<ContributionGraph
			className="w-full py-2"
			data={data}
			blockSize={11}
			blockMargin={3}
			blockRadius={2}
		>
			<ContributionGraphCalendar
				className="no-scrollbar"
				title="GitHub Contributions"
			>
				{({ activity, dayIndex, weekIndex }) => (
					<Tooltip>
						<TooltipTrigger asChild>
							<g>
								<ContributionGraphBlock
									activity={activity}
									dayIndex={dayIndex}
									weekIndex={weekIndex}
								/>
							</g>
						</TooltipTrigger>

						<TooltipContent className="font-sans text-white" sideOffset={0}>
							<p>
								{activity.count} contribution{activity.count > 1 ? 's' : null}{' '}
								on {dayjs(activity.date).format('DD.MM.YYYY')}
							</p>
						</TooltipContent>
					</Tooltip>
				)}
			</ContributionGraphCalendar>

			<ContributionGraphFooter>
				<ContributionGraphTotalCount>
					{({ totalCount, year }) => (
						<div className="text-muted-foreground">
							{totalCount.toLocaleString('en')} contributions in {year} on{' '}
							<a
								className="font-medium underline underline-offset-4"
								href={`https://github.com/${GITHUB_USERNAME}`}
								target="_blank"
								rel="noopener"
							>
								GitHub
							</a>
							.
						</div>
					)}
				</ContributionGraphTotalCount>

				<ContributionGraphLegend />
			</ContributionGraphFooter>
		</ContributionGraph>
	);
}

export function GitHubContributionFallback() {
	return (
		<div className="flex h-[162px] w-full items-center justify-center">
			<LoaderIcon className="animate-spin text-muted-foreground" />
		</div>
	);
}
