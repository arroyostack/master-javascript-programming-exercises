let obj = {
    person: "Rafael",
    lastName: "Leao",
    country: "Italy",
    city: "Milan",
    phoneNum: "123-456-789",
    jerseyNum: 27,
};

const countNumberOfKeys = (obj) => (
    Object.keys(obj).length
);



countNumberOfKeys(obj);
