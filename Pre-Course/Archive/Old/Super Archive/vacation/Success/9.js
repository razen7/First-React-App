function getStudentsWithNamesAndTopNotes(arr) {
    return arr.reduce((accu, cur) => {
        let newObj = {};
        newObj['name'] = cur.name;
        newObj['topNote'] = Math.max(...cur.notes);
        accu.push(newObj);
        return accu;
    }, [])
}

console.log(
    getStudentsWithNamesAndTopNotes([
        { "name": "John", "notes": [3, 5, 4] },
        { "name": "Max", "notes": [1, 4, 6] },
        { "name": "Zygmund", "notes": [1, 2, 3] }
    ])
)
/* ➞ [
{ "name": "John", "topNote": 5 },
{ "name": "Max", "topNote": 6 },
{ "name": "Zygmund", "topNote": 3 }
  ] */