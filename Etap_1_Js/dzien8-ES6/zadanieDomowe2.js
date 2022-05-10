const obj = {
    id: 1,
    name: "Tester Testowy",
    pwdHash: "abcsdnjvfg8943pghn5uneonb",
    isAdmin: true,
    hasAvatar: true,
};


const filter = (object) => {
    const {id, name, hasAvatar} = object;

    const filtered = {
        newId: id,
        imię: name,
        avatar: hasAvatar,
    };

    return filtered;
}

console.log(filter(obj));