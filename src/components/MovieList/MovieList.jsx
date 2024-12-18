import { useInfiniteQuery } from "@tanstack/react-query";
import {
  LoadMoreLink,
  MovieListContainer,
  MovieListOuterContainer,
} from "./MovieList.styles";

import React, { useEffect, useRef, useCallback, useState } from "react";
useFilter;
import {
  PopupContainer,
  PopupContent,
  PopupLink,
  PopupLinkContainer,
} from "../MovieCard/MovieCard.styles";

import { useMediaQuery } from "react-responsive";
import MovieCard from "../MovieCard/MovieCard";
import MobileMovieCard from "../MobileMovieCard/MobileMovieCard";
import { fetchMovies } from "../../services/fetchingService";
import { useFilter } from "../../contexts/FilterContext";

/**
 * Renders a list of movies with infinite scrolling and filtering support.
 * Fetches movies from the TMDB API and displays them as cards.
 * Supports mobile and desktop layouts, with a popup for additional actions.
 *
 * @component
 * @returns {JSX.Element} The rendered movie list component.
 *
 */
function MovieList() {
  const { searchParams } = useFilter();
  const [isLoadMoreClicked, setIsLoadMoreClicked] = useState(false);
  const [blurredCardId, setBlurredCardId] = useState(null);

  /**
   * Clears the blurred movie card when clicking outside of the popup.
   */
  const handleClickOutside = () => {
    if (blurredCardId) {
      setBlurredCardId(null);
    }
  };
  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [blurredCardId]);
  const {
    data,
    error,
    isLoading,
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage,
  } = useInfiniteQuery({
    queryKey: ["movies", searchParams],
    queryFn: ({ pageParam = 1 }) => fetchMovies({ pageParam, searchParams }),
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.length ? allPages.length + 1 : undefined;
    },
    cacheTime: 0,
    staleTime: 0,
  });

  /**
   * Handles the intersection of the "Load More" link and triggers data fetching.
   * @param {IntersectionObserverEntry[]} entries - The entries being observed.
   */
  const handleIntersection = useCallback(
    ([entry]) => {
      if (entry.isIntersecting && hasNextPage) {
        fetchNextPage();
      }
    },
    [fetchNextPage, hasNextPage]
  );
  const loadMoreRef = useRef();
  useEffect(() => {
    const currentRef = loadMoreRef.current;
    if (currentRef && isLoadMoreClicked && hasNextPage) {
      const observer = new IntersectionObserver(handleIntersection, {
        threshold: 1,
      });
      observer.observe(currentRef);
      return () => {
        if (currentRef) {
          observer.unobserve(currentRef);
        }
      };
    }
  }, [isLoadMoreClicked, hasNextPage, handleIntersection]);

  /**
   * Handles manual clicking of the "Load More" link.
   */
  const handleLoadMoreClick = () => {
    setIsLoadMoreClicked(true);
    fetchNextPage();
  };

  const isMobile = useMediaQuery({ maxWidth: 414 });

  const renderMovies = () =>
    data.pages.map((page, pageIndex) => (
      <React.Fragment key={pageIndex}>
        {page.map((movie) => (
          <div key={movie.id} style={{ position: "relative" }}>
            {isMobile ? (
              <MobileMovieCard
                title={movie.title}
                releaseDate={movie.release_date}
                imageUrl={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                overview={movie.overview}
              />
            ) : (
              <MovieCard
                title={movie.title}
                releaseDate={movie.release_date}
                rating={movie.vote_average}
                imageUrl={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                isBlurred={blurredCardId === movie.id}
                onTogglePopup={() =>
                  setBlurredCardId((prev) =>
                    prev === movie.id ? null : movie.id
                  )
                }
              />
            )}

            {blurredCardId === movie.id && (
              <PopupContainer>
                <PopupContent>
                  <p>Want to rate or add this item to a list?</p>
                  <PopupLinkContainer>
                    <PopupLink href="/login">Login</PopupLink>
                  </PopupLinkContainer>
                  <hr />
                  <p>Not a member?</p>
                  <PopupLinkContainer>
                    <PopupLink href="/signup">
                      Sign up and join the community
                    </PopupLink>
                  </PopupLinkContainer>
                </PopupContent>
              </PopupContainer>
            )}
          </div>
        ))}
      </React.Fragment>
    ));
  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  return (
    <MovieListOuterContainer>
      <MovieListContainer>{renderMovies()}</MovieListContainer>
      <LoadMoreLink
        ref={loadMoreRef}
        onClick={handleLoadMoreClick}
        disabled={!hasNextPage || isFetchingNextPage}
      >
        {isFetchingNextPage ? "Loading..." : "Load More"}
      </LoadMoreLink>
    </MovieListOuterContainer>
  );
}
export default MovieList;
