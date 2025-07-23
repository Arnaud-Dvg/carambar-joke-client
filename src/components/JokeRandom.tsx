import { useState } from 'react';

function JokeRandom() {
    const [joke, setJoke] = useState("Test");

    const Random = () => {
        fetch(`${import.meta.env.VITE_API_URL}/blagues/random`)
            .then(response => response.json())
            .then(data => {
                setJoke(data.content);
            })
            .catch(error => {
                console.error("Error fetching joke:", error);
                setJoke("Erreur lors de la récupération de la blague.");
            });
    }

    return (
        <div className="h-150 flex items-center justify-center">
            <div className="bg-[#FD7138] text-white p-6 rounded-lg shadow-lg text-center">
                <h2 className="text-2xl font-bold">Rigolons !</h2>
                <p className="my-4">{joke}</p>
                <button type="button" onClick={Random} className="bg-[#F9C43A] text-white p-6 rounded-lg shadow-lg text-center">Clique ici !</button>
            </div>
        </div>
    );
}

export default JokeRandom;
