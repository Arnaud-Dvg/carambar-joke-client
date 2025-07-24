import { useState } from 'react';

function JokeRandom() {
    const [joke, setJoke] = useState("Clique sur les Carambar pour avoir une blague !");

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
            <div className="bg-[#FD7138]/90 text-white px-5 py-4 rounded-lg shadow-lg text-center border border-black w-[400px] min-h-[200px] flex flex-col justify-between">
                <div className="overflow-auto max-h-[100px] mb-2 text-sm">
                    <p>{joke}</p>
                </div>
                <button type="button" onClick={Random} className="p-1">
                    <img src="./carambar.png" alt="carambar" className="w-28 h-auto mx-auto" />
                </button>

            </div>
        </div>

    );
}

export default JokeRandom;
