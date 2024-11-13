import { useInfiniteQuery } from "@tanstack/react-query";
import {
  LoadMoreLink,
  MovieListContainer,
  MovieListOuterContainer,
} from "./MovieList.styles";
import MovieCard from "./MovieCard";
import React, { useEffect, useRef, useCallback, useState } from "react";
import { useFilter } from "../FilterContext";
import {
  PopupContainer,
  PopupContent,
  PopupLink,
  PopupLinkContainer,
} from "./MovieCard.styles";
import MobileMovieCard from "./MobileMovieCard";
import { useMediaQuery } from "react-responsive";

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxNDg2YzQwYWVjYzllYjVlMTJhMDkyOGRhYzkyMTdkNiIsIm5iZiI6MTczMDYyMDc4My44NDE2MDQsInN1YiI6IjY3MjcyYWQyOWUwODc3ZDFkOGFmODk2OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.K8sEr7EtvE_Udy3OjM4meXraSV7zJKL3E-YkiJBPPaQ",
  },
};
async function fetchMovies({ pageParam = 1, searchParams }) {
  const baseUrl = `https://api.themoviedb.org/3/discover/movie`;
  const url = new URL(baseUrl);
  url.searchParams.set("page", pageParam);
  url.searchParams.set("include_adult", "false");
  url.searchParams.set("include_video", "false");
  url.searchParams.set("language", "en-US");
  if (searchParams) {
    for (const [key, value] of Object.entries(searchParams)) {
      url.searchParams.set(key, value);
    }
  }
  const response = await fetch(url, options);
  const data = await response.json();
  return data.results;
}
function MovieList() {
  const { searchParams } = useFilter();
  const [isLoadMoreClicked, setIsLoadMoreClicked] = useState(false);
  const [blurredCardId, setBlurredCardId] = useState(null);
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
