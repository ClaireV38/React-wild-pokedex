import PropTypes from "prop-types";
import PokemonCard from "./PokemonCard.jsx";

function NavBar({ setPokemonIndex, pokemonIndex, pokemonList }) {

    const handleClick = (index) => {
        setPokemonIndex(index)
    }

    return <div>
        {pokemonList.map((pokemon, index) => (
            <button key={index} onClick={() => handleClick(index)}>{pokemon.name}</button>
        ))}
    </div>
}

NavBar.propTypes = {
    setPokemonIndex: PropTypes.func.isRequired,
    pokemonIndex: PropTypes.number.isRequired,
    pokemonList: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string.isRequired,
        imgSrc: PropTypes.string,
    })).isRequired,
}

export default NavBar;
