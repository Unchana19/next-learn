"use client";

import WebSearchResults from "@/components/web-search-results";
import { NextPage } from "next";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

export interface SearchResults {
  kind: string;
  url: {
    type: string;
    template: string;
  };
  queries: { request: [[Object]]; nextPage: [[Object]] };
  context: { title: string };
  searchInformation: {
    searchTime: number;
    formattedSearchTime: string;
    totalResults: string;
    formattedTotalResults: string;
  };
  items: SearchResult[];
}

export interface SearchResult {
  kind: string;
  title: string;
  htmlTitle: string;
  link: string;
  displayLink: string;
  snippet: string;
  htmlSnippet: string;
  formattedUrl: string;
  htmlFormattedUrl: string;
  pagemap: {
    cse_thumbnail: [Array<string>];
    metatags: [Array<string>];
    cse_image: [Array<string>];
  };
}

interface Props {}

const WebSearchPage: NextPage<Props> = async () => {
  const searchParams = useSearchParams();
  const searchTerm = searchParams.get("searchTerm");

  const response = await fetch(
    `https://www.googleapis.com/customsearch/v1?key=${process.env.GOOGLE_API_KEY}&cx=${process.env.CONTEXT_KEY}&q=${searchTerm}`
  );
  const data = await response.json() as SearchResults;
  const results = data.items;

  // if (!results) {
  //   return (
  //     <div className="flex flex-col justify-center items-center pt-10">
  //       <h1 className="text-3xl mb-4">No results found for {searchTerm}</h1>
  //       <p className="text-lg">
  //         Try searching the web or images for something else{" "}
  //         <Link href={"/"} className="text-blue-500">
  //           Home
  //         </Link>
  //       </p>
  //     </div>
  //   );
  // }

  return <div>{results && <WebSearchResults results={data} />}</div>;
};

export default WebSearchPage;
