'use client';

import { useRef } from 'react';

import Link from '@/components/shared/link';

import { Breadcrumb } from '@/types/docs';

import ExternalLinkIcon from '@/svgs/external.inline.svg';

import Breadcrumbs from '../breadcrumbs';
import Navigation, { type NavigationProps } from '../navigation';
import TableOfContents from '../table-of-contents';

const FILE_ORIGIN_PATH = 'https://github.com/bytebase/bytebase.com/tree/main/content/docs';

const PostLayout = ({
  title,
  children,
  currentSlug,
  breadcrumbs,
  navigationLinks: { previousLink, nextLink },
}: {
  title: string;
  currentSlug: string;
  children: React.ReactNode;
  breadcrumbs: Breadcrumb[];
  navigationLinks: NavigationProps;
}) => {
  const contentRef = useRef<HTMLDivElement>(null);

  return (
    <>
      <article className="col-span-6 col-start-4 lg:col-span-9 md:col-span-full">
        {breadcrumbs.length > 0 && <Breadcrumbs breadcrumbs={breadcrumbs} />}
        <h1 className="text-44 font-bold leading-extra-tight tracking-tighter text-gray-15 lg:text-36 md:text-32 sm:text-30">
          {title}
        </h1>
        <div className="mt-5" ref={contentRef}>
          {children}
        </div>
        <Link
          className="mt-20 inline-flex items-center text-18 font-medium leading-none text-gray-15 hover:text-gray-60 md:mt-14 sm:mt-10"
          href={`${FILE_ORIGIN_PATH}/${currentSlug}.md`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <span>Edit this page on GitHub</span>
          <ExternalLinkIcon className="ml-2 h-3 w-3" />
        </Link>
        <Navigation previousLink={previousLink} nextLink={nextLink} />
      </article>
      <div className="sticky bottom-0 top-10 col-span-3 col-end-13 ml-auto max-h-[calc(100vh-40px)] w-full max-w-[314px] overflow-y-auto xl:max-w-none lg:hidden">
        <TableOfContents contentRef={contentRef} />
      </div>
    </>
  );
};

export default PostLayout;