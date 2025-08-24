export const BREAKPOINTS = {
  MOBILE: 760,
  TABLET: 1024,
  LAPTOP: 1600,
  DESKTOP: 1920,
  QHD: 2300,
};

export const COMMON_MEDIA = {
  HOVER: '@media (hover: hover)',
  MOBILE: `@media (max-width: ${BREAKPOINTS.MOBILE}px)`,
  LAPTOP: `@media (min-width: ${BREAKPOINTS.TABLET}px) and (max-width: ${BREAKPOINTS.LAPTOP - 1}px)`,
  DESKTOP: `@media (min-width: ${BREAKPOINTS.LAPTOP}px) and @media (max-width: ${BREAKPOINTS.DESKTOP}px)`,
  LARGE_DESKTOP: `@media (min-width: ${BREAKPOINTS.DESKTOP + 1}px)`,
  QHD: `@media (min-width: ${BREAKPOINTS.QHD + 1}px)`,
};
