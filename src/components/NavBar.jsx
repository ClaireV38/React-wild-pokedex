import PropTypes from "prop-types";
import PokemonCard from "./PokemonCard.jsx";

function NavBar({ handlePreviousClick, handleFollowingClick, pokemonIndex, pokemonCount }) {

    return <div>
        {pokemonIndex > 0 && <button onClick={handlePreviousClick}>Précédent</button>}
        {pokemonIndex < pokemonCount - 1 && <button onClick={handleFollowingClick}>Suivant</button>}
    </div>
}

NavBar.propTypes = {

}

export default NavBar;
