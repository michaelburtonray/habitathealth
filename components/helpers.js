export const getBackgroundColor = (color) => {
  switch (color) {
    case 'cream':
      return 'bg-cream text-green';

    case 'fern-green':
      return 'bg-fern-green';

    case 'sky-blue':
      return 'bg-sky-blue text-green';

    default:
      return 'bg-green';
  }
};
