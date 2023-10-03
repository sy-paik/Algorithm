function solution(name, yearning, photo) {
    const obj = {}; 

    name.forEach((item, index) => {
        obj[item] = yearning[index];
    });

    const result = photo.map(p => p.reduce((acc, person) => acc + (obj[person] || 0), 0));

    return result;
}