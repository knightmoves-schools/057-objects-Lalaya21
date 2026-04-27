const school = {
    name: "Westview High",
    averageClassSize: 25,
    mascot: "Wildcat"
};

const description = `${school.name} ${school.averageClassSize} ${school.mascot}`;
document.getElementById("result").innerHTML = description;
