import instance from 'libs/axios';
import { Joke } from 'types/interfaces/CommonInterfaces';

export async function getJokeById(jokeId: string): Promise<Joke> {
  try {
    const response = await instance.get(jokeId);

    return response.data || null;
  } catch (error) {
    throw error;
  }
}
