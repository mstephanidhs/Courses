import delay from './util/delay';
import { defer } from 'react-router';

export function loader() {
  return defer({ data: delay('Fetched Data', 1000) });
}