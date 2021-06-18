
//const [token, setToken] = useState("");

// const redirect_uri =
//     //   "http://localhost:3000"
//     `https://s780609.github.io`;

// const parent =
//     //"localhost"
//     `s780609.github.io`;

const initialState = {
    clientId: "vr0gbze3cw6zvxavzvjjxokdydm7cj",
    clientSecret: "3x2oiag46esvkqhp99ah13q1cr3wyk",
    accessToken: "",
    redirect_uri: "http://localhost:3000",
    // `https://s780609.github.io`,
    parentDomain:
        "localhost",
    //`s780609.github.io`
};

export default (state = initialState, action) => {
    switch (action.accessToken) {
        case "accessToken":
            return state = { ...state, token: action.accessToken };
        default:
            return state = { ...state };
    }
}