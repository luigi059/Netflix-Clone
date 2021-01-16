import React from 'react';
import BrowseContainer from '../containers/browse';
import useContent from '../hooks/use-content';
import selectionFilter from '../utils/selection-filter';

export default function Browse() {
  // we need the series and films
  const { series } = useContent('series');
  const { films } = useContent('films');
  // we need slides
  const slides = selectionFilter({ series, films });
  // pass it to the browser container
  return <BrowseContainer slides={slides} />;
}
