import { jokeAPIRoute } from '../../output/App.Routes.API.Joke/index.js'

export const handler = (req, ctx) => {
  return new Response(jokeAPIRoute({}))
}
