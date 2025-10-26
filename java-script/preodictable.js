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

            
            for (let r = 1; r <= totalRows; r++) { // Loop through rows
                for (let c = 1; c <= totalCols; c++) { // Loop through columns
                    const key = `${r}-${c}`;
                    const elementData = elementMap.get(key); //position

                    if (elementData) {
                        const {
                            symbol,
                            number,
                            name,
                            atomic_mass,
                            block,
                            xpos,
                            ypos,
                            electron_configuration,
                            summary,
                            image
                        } = elementData;
                        plotelement(symbol, number, name, atomic_mass, block, xpos, ypos,electron_configuration,summary, image?.url);
                    }else{
                        // If no element exists, create an empty placeholder cell
                        const emptyDiv = document.createElement("div");
                        emptyDiv.className = "notactivecell"; 
                        emptyDiv.style.gridColumn = c; 
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

function plotelement(symbol, number, name, atomic_mass, block, xpos, ypos,electron_configuration,summary,imageUrl) {
    const container = document.getElementById('preodictable');
    const divelement = document.createElement("div"); // Create the element's container div
    
    // Add click event listener to display element details
 
    divelement.addEventListener("click", function() {
        const elementcard =document.getElementById("elementCard");
        elementcard.innerHTML="";
        const h2  =document.createElement("h2");
        h2.textContent=number;
        h2.classList.add("number");
        const h1= document.createElement("h1");
        h1.textContent = symbol;
        const nameEl = document.createElement("h2");
        nameEl.textContent = name;
        nameEl.classList.add("name");
        const atomicMassEl = document.createElement("p");
        atomicMassEl.textContent = atomic_mass;
        atomicMassEl.classList.add("atomicMass");
        const electronConfigEl = document.createElement("h5");
        electronConfigEl.textContent = electron_configuration;
        const summaryEl = document.createElement("p");
        summaryEl.textContent = summary;
        summaryEl.classList.add("summary");
        // const img = document.createElement("img");
        // img.src = imageUrl;
        // img.alt = `${name} representation`;
        // img.classList.add("element-image");
        


        elementcard.appendChild(h2);
        elementcard.appendChild(h1);
        elementcard.appendChild(nameEl);
        elementcard.appendChild(atomicMassEl);
        elementcard.appendChild(electronConfigEl);
        elementcard.appendChild(summaryEl);
        // elementcard.appendChild(img);


        // Set background color of card based on block
        
        if (block === "s") {
            elementcard.style.backgroundColor = "var(--Sblock-color)";
        } else if (block === "p") {
            elementcard.style.backgroundColor = "var(--Pblock-color)";
        } else if (block === "d") {
            elementcard.style.backgroundColor = "var(--Dblock-color)";
        } else if (block === "f") {
            elementcard.style.backgroundColor = "var(--Fblock-color)";
        }
    });

    if (block === "s") {
        divelement.className = "sblock";
    } else if (block === "p") {
        divelement.className = "pblock";
    } else if (block === "d") {
        divelement.className = "dblock";
    } else if (block === "f") {
        divelement.className = "fblock";
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

