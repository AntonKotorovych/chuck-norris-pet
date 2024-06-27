import { LoaderFunctionArgs } from 'react-router-dom';
import { getJokeById } from 'api/getJokeById';

export async function jokeLoader({ params }: LoaderFunctionArgs) {
  const { jokeId } = params;

  if (jokeId) return await getJokeById(jokeId);
}
