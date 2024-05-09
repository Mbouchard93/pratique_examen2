class Keyboard {
        constructor(name, brand, compatibleDevices, connectivityTechnology, keyboardDescription, specialFeature, colour, numberOfKeys, style, productDimensions, material) {
            this.name = name;
            this.brand = brand;
            this.compatibleDevices = compatibleDevices;
            this.connectivityTechnology = connectivityTechnology;
            this.keyboardDescription = keyboardDescription;
            this.specialFeature = specialFeature;
            this.colour = colour;
            this.numberOfKeys = numberOfKeys;
            this.style = style;
            this.productDimensions = productDimensions;
            this.material = material;
        }
    toHtml() {
        const div = document.createElement('div');
        div.classList.add('container');

        const entries = Object.entries(this);
         
        entries.forEach(entry => {
            const items = document.createElement('p');
            items.textContent = entry[0] + ': ' + entry[1]
            div.appendChild(items)
        });

        return div;

     }
} const stars = [
    new Keyboard
    ("Magic-Refiner", "MAGIC-REFINER", "Smartphone", "Bluetooth", "Mechanical", "Ergonomic", "Off-white&Orange/RedSwitch", 68, "Modern", "31.2Lx10.2Wx4.3HCentimetres", "Polycarbonate"),

new Keyboard
("Magic-Refiner", "MAGIC-REFINER", "Smartphone", "Bluetooth", "Mechanical", "Ergonomic", "Off-white&Orange/RedSwitch", 68, "Modern", "31.2Lx10.2Wx4.3HCentimetres", "Polycarbonate"),
new Keyboard
("Magic-Refiner", "MAGIC-REFINER", "Smartphone", "Bluetooth", "Mechanical", "Ergonomic", "Off-white&Orange/RedSwitch", 68, "Modern", "31.2Lx10.2Wx4.3HCentimetres", "Polycarbonate"),
new Keyboard
("Magic-Refiner", "MAGIC-REFINER", "Smartphone", "Bluetooth", "Mechanical", "Ergonomic", "Off-white&Orange/RedSwitch", 68, "Modern", "31.2Lx10.2Wx4.3HCentimetres", "Polycarbonate"),
];

stars.forEach(star => {
    document.body.appendChild(star.toHtml());
})