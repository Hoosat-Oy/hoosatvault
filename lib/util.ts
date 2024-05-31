export function delay(ms: number = 0) {
    return new Promise((resolve: (args: void) => void) => {
        setTimeout(resolve, ms);
    });
}

export const fetchTokenPrice = async () => {
    try {
        const response = await fetch('https://api.network.hoosat.fi/info/price');
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        return data.price;
    } catch (error) {
        console.error('Error fetching token price:', error);
        return null;
    }
};
