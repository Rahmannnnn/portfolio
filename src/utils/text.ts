import parse from 'html-react-parser';

export const HTMLStringToReact = (htmlString: string): React.ReactNode => {
  return parse(htmlString);
};
