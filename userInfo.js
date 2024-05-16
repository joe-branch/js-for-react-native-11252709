// Task 3
function createUserProfiles(names, modNames) {
    let count = 1;
    return (
        names.map((name, index) => {
            return (
                {
                    originalName: name,
                    modifiedName: modNames[index],
                    id: count++
                }
            )
        })
    )
}