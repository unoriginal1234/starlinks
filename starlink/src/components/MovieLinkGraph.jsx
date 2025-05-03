import React, { useRef, useEffect, useState } from 'react';
import './MovieLinkGraph.css';

const MovieLinkGraph = ({ actors, movies, links }) => {
  const actorRefs = useRef({});
  const movieRefs = useRef({});
  const [lines, setLines] = useState([]);

  useEffect(() => {
    const newLines = links.map((link) => {
      const actorEl = actorRefs.current[link.from];
      const movieEl = movieRefs.current[link.to];

      if (!actorEl || !movieEl) return null;

      const actorRect = actorEl.getBoundingClientRect();
      const movieRect = movieEl.getBoundingClientRect();

      return {
        x1: actorRect.right,
        y1: actorRect.top + actorRect.height / 2,
        x2: movieRect.left,
        y2: movieRect.top + movieRect.height / 2,
      };
    }).filter(Boolean);

    setLines(newLines);
  }, [actors, movies, links]);

  return (
    <div className="graph-container">
      <div className="column actor-column">
        {actors.map((actor) => (
          <div
            key={actor.id}
            ref={(el) => actorRefs.current[actor.id] = el}
            className="node actor-node"
          >
            {actor.name}
          </div>
        ))}
      </div>

      <svg className="connections">
        {lines.map((line, idx) => (
          <line
            key={idx}
            x1={line.x1}
            y1={line.y1}
            x2={line.x2}
            y2={line.y2}
            stroke="black"
            strokeWidth="2"
          />
        ))}
      </svg>

      <div className="column movie-column">
        {movies.map((movie) => (
          <div
            key={movie.id}
            ref={(el) => movieRefs.current[movie.id] = el}
            className="node movie-node"
          >
            {movie.title}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieLinkGraph;
