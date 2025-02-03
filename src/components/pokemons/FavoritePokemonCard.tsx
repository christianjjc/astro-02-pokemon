import type { FavoritePokemon } from '@interfaces/favorite-pokemon';
import { createSignal, Show, type Component } from 'solid-js';

interface Props {
  pokemon: FavoritePokemon;
}

export const FavoritePokemonCard: Component<Props> = (props) => {
  const { pokemon } = props;

  const [isVisible, setIsVisible] = createSignal(true);

  const imageSrc = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`;

  const deleteFavorite = () => {
    const favoritePokemons = JSON.parse(localStorage.getItem('favoritePokemons') ?? '[]') as FavoritePokemon[];
    const newPokemons = favoritePokemons.filter((p: FavoritePokemon) => p.id !== pokemon.id);
    localStorage.setItem('favoritePokemons', JSON.stringify(newPokemons));
    setIsVisible(false);
  };

  return (
    //

    <Show when={isVisible()}>
      <div class="flex flex-col justify-center items-center">
        <a href={`/pokemons/${pokemon.name}`}>
          <img
            src={imageSrc}
            alt={pokemon.name}
            width="96"
            height="96"
            style={`view-transition-name: ${pokemon.name}-image`}
          />

          <p class="capitalize">
            #{pokemon.id} {pokemon.name}
          </p>
        </a>
        <button onclick={deleteFavorite} class="text-red-400">
          borrar
        </button>
      </div>
    </Show>
  );
};
