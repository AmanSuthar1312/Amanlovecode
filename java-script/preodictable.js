document.addEventListener('DOMContentLoaded', () => {
    fetch('../Json data files/PeriodicTableJSON.json') 
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json(); 
        })
        .then(data => {
            const totalRows = 10; // Standard periodic table rows (excluding f-block placement below)
            const totalCols = 18; // Standard periodic table columns
            const elementMap = new Map();

            // 1. Create a map for quick lookup of elements by their position
            data.forEach(elementData => {
                const key = `${elementData.ypos}-${elementData.xpos}`;
                elementMap.set(key, elementData);
            });

            const container = document.getElementById('preodictable');

            // 2. Iterate through all possible grid positions (1 to 18 columns, 1 to 10 rows)
            for (let r = 1; r <= totalRows; r++) { // Loop through rows
                for (let c = 1; c <= totalCols; c++) { // Loop through columns
                    const key = `${r}-${c}`;
                    const elementData = elementMap.get(key); // Check if an element exists at this position

                    if (elementData) {
                        const {
                            symbol, number, name, atomic_mass, block, xpos, ypos // Destructure relevant data
                        } = elementData;
                        plotelement(symbol, number, name, atomic_mass, block, xpos, ypos);
                    }else{
                        // If no element exists, create an empty placeholder cell
                        const emptyDiv = document.createElement("div");
                        emptyDiv.className = "notactivecell"; // Apply styling for empty cells
                        emptyDiv.style.gridColumn = c; // Position the empty cell in the grid
                        emptyDiv.style.gridRow = r;
                        container.appendChild(emptyDiv);
                    }
                }
            }
        })
        .catch(error => {
            console.error("Could not fetch periodic data:", error);
        });
});

function plotelement(symbol, number, name, atomic_mass, block, xpos, ypos) {
    const container = document.getElementById('preodictable');
    const divelement = document.createElement("div"); // Create the element's container div

    // Apply CSS class based on 'block' for specific styling (colors etc.)
    if (block === "s") {
        divelement.className = "sblock";
    } else if (block === "p") {
        divelement.className = "pblock";
    } else if (block === "d") {
        divelement.className = "dblock";
    } else if (block === "f") {
        divelement.className = "fblock";
        console.log(block);
    }

    // Set the element's position within the CSS Grid
    // 'xpos' and 'ypos' from your JSON directly map to grid-column and grid-row
    divelement.style.gridColumn = xpos;
    divelement.style.gridRow = ypos;

    // Create and append the content (number, symbol, atomic_mass)
    const para = document.createElement("p");
    para.textContent = number;
    divelement.appendChild(para);

    const h1 = document.createElement("h1");
    h1.textContent = symbol;
    divelement.appendChild(h1);

    const h4 = document.createElement("h4");
    h4.textContent = atomic_mass;
    divelement.appendChild(h4);

    container.appendChild(divelement); // Add the complete element div to the main grid container
}