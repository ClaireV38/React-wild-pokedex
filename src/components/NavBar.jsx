import PropTypes from "prop-types";
import PokemonCard from "./PokemonCard.jsx";

function NavBar({ setPokemonIndex, pokemonIndex, pokemonCount }) {

    const handlePreviousClick = () => {
        setPokemonIndex(pokemonIndex > 0 ? pokemonIndex - 1 : 0)
    }

    const handleFollowingClick = () => {
        setPokemonIndex(pokemonIndex + 1)
    }

    return <div>
        {pokemonIndex > 0 && <button onClick={handlePreviousClick}>Précédent</button>}
        {pokemonIndex < pokemonCount - 1 && <button onClick={handleFollowingClick}>Suivant</button>}
    </div>
}

NavBar.propTypes = {
    setPokemonIndex: number,
    pokemonIndex: number,
    pokemonCount: number,
}

export default NavBar;
